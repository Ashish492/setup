declare namespace NodeJS {
  interface ProcessEnv {
    PORT: number;
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}
