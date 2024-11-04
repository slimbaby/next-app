import { NextResponse } from 'next/server'

// export async function GET(request: any, context: any) {
//   //   访问 /home, pathname 的值为 /home
//   const pathname = request.nextUrl.pathname
//   // 访问 /home?name=lee, searchParams 的值为 { 'name': 'lee' }
//   const searchParams = request.nextUrl.searchParams
//   console.log(pathname, searchParams, 15)
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const data = await res.json()

//   return NextResponse.json({ data })
// }
export async function GET() {
  const res = await fetch('https://api.thecatapi.com/v1/images/search', {
    next: { revalidate: 5 }, //  每 5 秒重新验证
  })
  const data = await res.json()
  console.log(data)
  return NextResponse.json(data)
}
// export async function GET(request: any, context: any) {
//   //  访问 /home, pathname 的值为 /home
//   const pathname = request.nextUrl.pathname
//   // 访问 /home?name=lee, searchParams 的值为 { 'name': 'lee' }
//   const searchParams = request.nextUrl.searchParams
//   console.log(pathname, searchParams, 15)
// }
export async function POST(request: any) {
  const article = await request.json()

  return NextResponse.json(
    {
      id: Math.random().toString(36).slice(-8),
      data: article,
    },
    { status: 201 }
  )
}
