import { defineMiddleware } from "astro:middleware"
import { env } from "cloudflare:workers"

const blogPath = /^\/(?:en\/)?blog(?:\/|$)/

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url
  if (!blogPath.test(pathname)) return next()

  const locale = pathname.startsWith("/en/") ? "en" : "es"
  const url = new URL(context.request.url)
  url.pathname = pathname.replace(/^\/en(?=\/blog)/, "")
  const headers = new Headers(context.request.headers)
  headers.set("x-portfolio-locale", locale)
  const request = new Request(url, {
    method: context.request.method,
    headers,
    body: context.request.method === "GET" || context.request.method === "HEAD" ? undefined : context.request.body,
  })
  return env.BLOG.fetch(request)
})
