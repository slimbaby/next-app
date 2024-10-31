// app/dashboard/page.js
import Link from 'next/link'

async function getDate() {
  await new Promise((resolve) => {
    setTimeout(resolve, 10000)
  })
  return { msg: 'promise结束' }
}
export default async function Page() {
  const { msg } = await getDate()
  const addresses = ['about', 'settings']
  return (
    <>
      <h1>{msg}</h1>
      {addresses.map((item, index) => (
        <Link key={index} href={`/dashBoard/${item}`}>
          {item}
        </Link>
      ))}
    </>
  )
}
