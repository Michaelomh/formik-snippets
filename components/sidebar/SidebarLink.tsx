import Link from 'next/link'

type SidebarLinkProps = {
  linkTitle: string
  link?: string
}

export default function SidebarLink({
  linkTitle,
  link = '#',
}: SidebarLinkProps) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Link href={link}>{linkTitle}</Link>
    </div>
  )
}
