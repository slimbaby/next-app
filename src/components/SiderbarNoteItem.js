import dayjs from 'dayjs'
import SidebarNoteItemContent from '@/components/SidebarNoteItemContent'
import SidebarNoteItemHeader from '@/components/SidebarNoteItemHeader'
export default function SidebarNoteItem({ noteItem, noteId }) {
  const { title, content, updateTime } = JSON.parse(noteItem)
  return (
    // <div>
    //   <strong>{title}</strong>
    //   <p>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</p>
    // </div>
    <SidebarNoteItemContent
      id={noteId}
      title={title}
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }
    >
      <SidebarNoteItemHeader title={title} updateTime={updateTime} />
    </SidebarNoteItemContent>
  )
}
