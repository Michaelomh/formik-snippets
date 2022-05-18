import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import { SidebarContext } from './Sidebar.types'

type SidebarLinkProps = {
  linkTitle: string
  link?: string
  context?: string
  currentNavigation?: string
}

export default function SidebarLink({
  linkTitle,
  link = '#',
  context,
  currentNavigation,
}: SidebarLinkProps) {
  const isSelected = link === currentNavigation
  const selectedColor =
    context === SidebarContext.useFormik ? 'purple.100' : 'green.200'

  return (
    <Link href={`/${context}/${link}`}>
      <Box
        onClick={(e) => e.stopPropagation()}
        pl={8}
        py={1}
        _hover={{ bgColor: selectedColor, color: 'blackAlpha.700' }}
        bgColor={isSelected ? selectedColor : null}
        color={isSelected ? 'blackAlpha.700' : null}
        fontWeight={isSelected ? 'black' : null}
        letterSpacing={1}
      >
        {linkTitle}
      </Box>
    </Link>
  )
}
