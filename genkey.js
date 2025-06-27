import { createAppAuth } from "@octokit/auth-app";
import {readFile} from "fs/promises"

const key = readFile(process.env.GITHUB_PK_PATH, "utf8");

const auth = createAppAuth({
  appId: process.env.GITHUB_APP_ID,
  privateKey: key,
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
});

const appAuthentication = await auth({ type: "app" });
const jwt = appAuthentication.token;

console.log("JWT:", jwt);