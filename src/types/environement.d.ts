declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_CLIENT_STORAGE_KEY: string;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
