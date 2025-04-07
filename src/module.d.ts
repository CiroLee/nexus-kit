// src/modules.d.ts
declare namespace NodeJS {
  export interface ProcessEnv {
    GITHUB_TOKEN: string;
    GITHUB_REPO: string;
  }
}
