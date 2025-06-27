import { FileItem, TreeNode } from "./types";

const KNOWN_TEXT_FILES: Set<string> = new Set([
  ".md", ".markdown", ".txt", ".log", ".json", ".yaml", ".yml", ".xml", ".html", ".htm",
  ".css", ".js", ".jsx", ".ts", ".tsx", ".py", ".rb", ".php", ".java", ".c", ".h", ".cpp",
  ".hpp", ".cs", ".go", ".rs", ".swift", ".kt", ".kts", ".pl", ".sh", ".bash", ".zsh", ".fish",
  ".ps1", ".bat", ".cmd", ".r", ".sql", ".ini", ".cfg", ".conf", ".toml", ".editorconfig",
  ".gitignore", ".gitattributes", ".gitmodules", ".csv", ".tsv", ".rst", ".adoc", ".asciidoc",
  ".tex", ".Makefile", ".dockerfile", ".env", ".properties", ".graphql", ".gql", ".tf", ".tfvars",
  ".hcl", ".vue", ".svelte", ".sum", ".mod", "readme", "license", "contributing", "code_of_conduct",
  "changelog", "makefile", "dockerfile", "jenkinsfile", "gemfile", "pipfile", "requirements", "procfile",
  "version", "authors", "copying", "notice", "patents", "todo"]);

const KNOWN_TRASH_FILES: Set<string> = new Set([
    ".DS_Store", "Thumbs.db", ".git", ".gitignore",
    ".gitattributes", ".gitmodules", "package-lock.json",
    "yarn.lock", "pnpm-lock.yaml", "node_modules", "dist",
    ".next", ".nuxt", ".cache", ".vscode", ".idea", ".history", '.github'
]);

function isTextFile(fileName: string): boolean {
  const ext = fileName.split(".").pop()?.toLowerCase() || "";
  return (
    KNOWN_TEXT_FILES.has(`.${ext}`) ||
    KNOWN_TEXT_FILES.has(fileName.toLowerCase())
  );
}

function isTrashFile(filepath: string): boolean {
    for (const ext of KNOWN_TRASH_FILES) {
        if (filepath.indexOf(ext) !== -1) {
            return true;
        }
    }
    return false;
}

// Process the file content to convert it to Markdown format
export function processFile(file: FileItem): string {
  if (!isTextFile(file.name) || isTrashFile(file.path)) {
    return "";
  }
  // Cursor AI formatting for Markdown code blocks
  // like "```<language>:<path>"
  // ref: https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools/blob/main/Cursor%20Prompts/Chat%20Prompt.txt
  return `# ${file.name}\n\`\`\`${file.path.split('.').at(-1)}:${file.path}\n${file.content}\n\`\`\``;
}

// Create a Markdown tree structure of files
export function createTreeStructure(rootNode: TreeNode): string {
    const lines: string[] = [];

    const sortChildren = (children: TreeNode[]): TreeNode[] => {
        return [...children].sort((a, b) => {
            if (a.type === "tree" && b.type === "blob") return -1; // Directories first
            if (a.type === "blob" && b.type === "tree") return 1;  // Then files
            return a.name.localeCompare(b.name); // Then alphabetically
        });
    };

    function buildTreeLines(currentNode: TreeNode, indentPrefix: string, isLastInParent: boolean) {
        let line = indentPrefix;
        if (indentPrefix.length > 0 || currentNode.path !== "") { // Add connector for non-root items or if indentPrefix suggests it's not the absolute root
            line += isLastInParent ? "└── " : "├── ";
        }
        line += currentNode.name + (currentNode.type === "tree" ? "/" : "");
        lines.push(line);

        if (currentNode.type === "tree" && currentNode.children && currentNode.children.length > 0) {
            const sortedChildren = sortChildren(currentNode.children);
            sortedChildren.forEach((child, index) => {
                const newIndentPrefixBase = (currentNode.path === "") ? "" : indentPrefix; 
                const connectorForChildren = (currentNode.path === "") ? "" : (isLastInParent ? "    " : "|   ");

                buildTreeLines(child, newIndentPrefixBase + connectorForChildren, index === sortedChildren.length - 1);
            });
        }
    }
    
    lines.push(rootNode.name + "/");

    if (rootNode.children && rootNode.children.length > 0) {
        const sortedRootChildren = sortChildren(rootNode.children);
        sortedRootChildren.forEach((child, index) => {
            buildTreeLines(child, "", index === sortedRootChildren.length - 1);
        });
    }
    
    return "```text\n" + lines.join("\n") + "\n```\n";
}