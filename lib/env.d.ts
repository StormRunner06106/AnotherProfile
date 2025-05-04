// Type declarations for environment variables
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: "development" | "production" | "test"
        DATABASE_URL: string
        API_KEY: string
        NEXT_PUBLIC_API_URL: string
        // Add other environment variables here
      }
    }
  }
  
  // This export is necessary to make this a module
  export {}