'use client'

import { usePathname } from 'next/navigation'
let a = 0
console.log(a)
export default function Page() {
  const pathname = usePathname()
  console.log(a)
  if (a == 0) {
    a++
    console.log('打印这么慢')
  }

  return <h1>Hello, About!</h1>
}
