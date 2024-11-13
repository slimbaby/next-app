import SidebarNoteItem from './SiderbarNoteItem'
import { getAllNotes } from '@/lib/redis'
export default async function NodeList() {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
  await sleep(10000)
  const notes = await getAllNotes()
  let arr = Object.entries(notes)
  console.log(arr, 8)
  if (arr.length == 0) {
    return <div className="notes-empty">{'No notes created yet!'}</div>
  }

  return (
    <ul className="notes-list">
      {arr.map(([noteId, note]) => {
        return (
          <li key={noteId}>
            <SidebarNoteItem noteItem={note} noteId={noteId}></SidebarNoteItem>
          </li>
        )
      })}
    </ul>
  )
}
