// middleware.js
import { NextResponse } from 'next/server'

// 中间件可以是 async 函数，如果使用了 await
// export function middleware(request: any) {
//   return NextResponse.redirect(new URL('/home', request.url))
// }

// // 设置匹配路径
// export const config = {
//   matcher: '/visitors/:path*',
// }
import { RateLimiter } from 'limiter'
const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: 'min',
  fireImmediately: true,
})

export async function middleware(request: any) {
  const remainingRequests = await limiter.removeTokens(1)
  if (remainingRequests < 0) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'Too Many Requests' }),
      { status: 429, headers: { 'content-type': 'application/json' } }
    )
  }

  return NextResponse.next()
}

// 设置匹配路径
export const config = {
  matcher: '/api/chat',
}
