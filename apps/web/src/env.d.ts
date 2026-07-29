/// <reference types="@cloudflare/workers-types" />

interface Env {
  BLOG: { fetch(request: Request): Promise<Response> }
}

declare module "cloudflare:workers" {
  export const env: Env
}
