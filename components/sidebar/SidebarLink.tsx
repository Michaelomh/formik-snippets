import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import { noUseFormik, noFormik } from './Sidebar.constants'
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
  const isSelected = link.indexOf(currentNavigation) >= 0
  const selectedColor =
    context === SidebarContext.useFormik ? 'purple.100' : 'green.200'
  if (noUseFormik.includes(link)) {
    context = SidebarContext.formik
  }

  if (noFormik.includes(link)) {
    context = SidebarContext.useFormik
  }

  // console.log(link, context, currentNavigation)
  // console.log(link.indexOf(currentNavigation))

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
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {linkTitle}
      </Box>
    </Link>
  )
}
