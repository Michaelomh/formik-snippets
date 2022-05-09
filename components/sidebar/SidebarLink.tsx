import Link from "next/link";

type SidebarLinkProps = {
  linkTitle: string;
  link?: string;
};

export default function SidebarLink({ linkTitle, link = "#" }: SidebarLinkProps) {
  return <Link href={link}>{linkTitle}</Link>;
}
