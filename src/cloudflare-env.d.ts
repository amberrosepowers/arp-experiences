// Minimal types for the Cloudflare Worker bindings this app uses (see wrangler.jsonc).
interface D1Result {
  success: boolean;
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  run(): Promise<D1Result>;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

declare module "cloudflare:workers" {
  export const env: {
    DB: D1Database;
    RESEND_API_KEY?: string;
  };
}
