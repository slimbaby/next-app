// app/dashboard/page.js
import Link from 'next/link'
import { redirect } from 'next/navigation'
async function getDate() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  return { msg: 'promise结束' }
}
export default async function Page() {
  const { msg } = await getDate()
  console.log(msg, 13)
  if (msg === 'promise结束') {
    redirect('/dashBoard/about')
  }
  const addresses = ['about', 'settings']
  return (
    <>
      <h1>{msg}</h1>
      {addresses.map((item, index) => (
        <Link key={index} href={`/dashBoard/${item}`}>
          {item}
        </Link>
      ))}
      <br></br>
    </>
  )
}
