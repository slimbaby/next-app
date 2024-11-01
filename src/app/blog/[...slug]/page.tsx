// app/blog/[slug]/page.js
'use client'
import { log } from 'console'
// interface paramsType {
//   params?: any
// }
// export default async function Page({ params }: paramsType) {
//   const { slug } = await params
//   return <div>My Post: {slug}</div>
// }
import * as React from 'react'

// export default function Page({ params }: any) {
//   const [slug, setSlug] = React.useState(null)

//   React.useEffect(() => {
//     // 异步获取 params
//     const fetchData = async () => {
//       const paramsResult = await params
//       setSlug(paramsResult.slug)
//     }

//     fetchData()
//   }, [params]) // 依赖项数组，当 params 变化时重新运行

//   return <p>Slug: {slug}</p>
// }
interface aaa {
  slug: string[]
}
export default function Page({ params }: any) {
  const aaa: aaa = React.use(params)
  console.log(aaa, 30)

  return <div>My Shop: {JSON.stringify(aaa.slug)}</div>
}
