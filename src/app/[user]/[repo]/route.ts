import { generateMarkdownForFiles, getRepoFilesTree } from "@/lib/github";
import { NextRequest, NextResponse } from "next/server";
import { ActionError } from "@/lib/types"; 
import { interpretGitHubErrorForHttpStatus } from "@/lib/utils";



export async function GET(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const pathSegments = pathname.split("/").slice(1);
    const owner = pathSegments[0];
    const repo = pathSegments[1];

    if (!owner || !repo || typeof owner !== 'string' || typeof repo !== 'string') {
        return NextResponse.json(
            { error: "GitHub owner and repository name must be provided as the first two path segments after the base API path." },
            { 
                status: 400,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "X-Robots-Tag": "noindex, nofollow",
                }
            }
        );
    }

    const treeResult = await getRepoFilesTree(owner, repo);

    if ("error" in treeResult) {
        const actionError = treeResult as ActionError;
        const status = interpretGitHubErrorForHttpStatus(actionError.error);
        return NextResponse.json(
            { error: actionError.error },
            { 
                status,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "X-Robots-Tag": "noindex, nofollow",
                }
            }
        );
    }

    const markdownResult = await generateMarkdownForFiles(treeResult);

    if ("error" in markdownResult) {
        const actionError = markdownResult as ActionError;
        const status = interpretGitHubErrorForHttpStatus(actionError.error); 
        return NextResponse.json(
            { error: actionError.error },
            { 
                status,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "X-Robots-Tag": "noindex, nofollow",
                }
            }
        );
    }
    return new NextResponse(markdownResult.markdown, {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, s-maxage=21600, max-age=3600, stale-while-revalidate=43200, stale-if-error=86400",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "X-XSS-Protection": "1; mode=block",
            "X-Robots-Tag": "noindex, nofollow",
        }
    });
}