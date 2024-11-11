export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = (await res.json()).slice(0, 10)
  console.log(data)
  return (
    <>
      6666666666
      <ul>
        {data.map(({ title, id }: any) => {
          return <li key={id}>{title}</li>
        })}
      </ul>
    </>
  )
}
