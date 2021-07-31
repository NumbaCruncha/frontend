import * as React from 'react'
import { PhoneIcon as IoCalendar, AddIcon as IoGrid, WarningIcon as IoHelpBuoy } from '@chakra-ui/icons'
import { MdWeb } from 'react-icons/md'
// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

export const links = [
  {
    label: 'For Educators',
    href: '#',
  },
  {
    label: 'For Students',
    href: '#',
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Get Help',
        description: 'Read our documentation and FAQs, or get in touch.',
        href: '#',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'Events & Meetups',
        description: 'Discover and join your local Sketch community.',
        href: '#',
        icon: <IoCalendar />,
      },
      {
        label: 'Extensions',
        description: 'Do even more with Assistants, plugins and integrations.',
        href: '#',
        icon: <IoGrid />,
      },
      {
        label: 'Blog',
        description: 'Get updates, articles and insights from the team.',
        href: '#',
        icon: <MdWeb />,
      },
    ],
  },
  {
    label: 'Subscriptions',
    href: '#',
  },
]
