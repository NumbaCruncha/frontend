import * as React from 'react'
import { MdWeb } from 'react-icons/md'
import { FaQuestion, FaBookOpen, FaPlus } from "react-icons/fa";


export const links = [
  {
    label: 'For Researchers',
    href: '#',
  },
  {
    label: 'For Educators',
    href: '#',
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Get Help',
        description: 'Read our documentation and FAQs, or get in touch.',
        href: '#',
        icon: <FaQuestion />,
      },
      {
        label: 'Documentation',
        description: 'Discover projects and campaings in your area.',
        href: '#',
        icon: <FaBookOpen />,
      },
      {
        label: 'Extensions',
        description: 'Do even more with Assistants, plugins and integrations.',
        href: '#',
        icon: <FaPlus />,
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
