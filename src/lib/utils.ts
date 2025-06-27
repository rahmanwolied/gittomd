export function parseGitHubUrl(
  url: string
): { owner: string; repo: string } | null {
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname !== "github.com") {
      return null;
    }
    const pathParts = urlObj.pathname.split("/").filter(Boolean);
    if (pathParts.length < 2) {
      return null;
    }
    const [owner, repo] = pathParts;
    return { owner, repo: repo.replace(".git", "") };
  } catch (error) {
    console.error("Invalid GitHub URL:", error);
    return null;
  }
}

/**
 * Interprets GitHub error messages to determine appropriate HTTP status codes.
 * @param errorMessage The error message from the GitHub API.
 * @returns The HTTP status code to return based on the error message.
 */

export function interpretGitHubErrorForHttpStatus(errorMessage: string): number {
    if (errorMessage.includes("Status: 404") ||
        errorMessage.includes("Could not determine default branch") ||
        errorMessage.includes("empty repository") ||
        errorMessage.includes("no commit history")) {
        return 404; 
    }
    if (errorMessage.startsWith("Repository is too large")) {
        return 413; 
    }
    if (errorMessage.includes("Status: 401") || errorMessage.includes("Status: 403")) {
        return 502;
    }
    if (errorMessage.includes("Status:")) { // Other specific GitHub client/server errors
        const statusMatch = errorMessage.match(/Status: (\d+)/);
        if (statusMatch && parseInt(statusMatch[1], 10) >= 500) return 502; // GitHub server error -> Bad Gateway
        if (statusMatch && parseInt(statusMatch[1], 10) >= 400) return 502; // Other GitHub client error -> Bad Gateway
    }
    return 500; 
}