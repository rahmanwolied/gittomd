export type GitHubApiFile = {
  path: string;
  type: "blob" | "tree";
};

export interface TreeNode {
  type: "tree" | "blob";
  name: string;
  path: string; // Full path from repo root
  children?: TreeNode[];
}

export interface RepositoryFilesTree {
  owner: string;
  repo: string;
  defaultBranch: string; // Added: needed for raw content URLs
  tree: TreeNode;
}

export type FileItem = {
    name: string;
    path: string;
    content: string;
}

/*
    Results of the actions
*/

export interface ActionError {
  error: string;
}

export interface MarkdownSuccess {
  markdown: string;
}