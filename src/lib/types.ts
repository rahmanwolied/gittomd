export type GitHubApiFile = {
  path: string;
  type: "blob" | "tree";
};

export interface TreeNode {
  type: "tree" | "blob";
  name: string;
  path: string; 
  children?: TreeNode[];
}

export interface RepositoryFilesTree {
  owner: string;
  repo: string;
  defaultBranch: string; 
  tree: TreeNode;
}

export type FileItem = {
    name: string;
    path: string;
    content: string;
}

export interface ActionError {
  error: string;
}

export interface MarkdownSuccess {
  markdown: string;
}