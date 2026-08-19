import { defineMiddleware } from "astro:middleware"

const blogPath = /^\/(?:en\/)?blog(?:\/|$)/

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url
  if (!blogPath.test(pathname)) return next()

  const rest = pathname.replace(/^\/(?:en\/)?blog/, "")
  return Response.redirect(`https://blog.solotorevskygabriel.com${rest}`, 301)
})