// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const pages = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'project',
      title: 'Projects',
      type: 'item',
      url: '/projects',
      icon: 'project'
    },
    {
      id: 'task',
      title: 'Tasks',
      type: 'item',
      url: '/tasks',
      icon: 'task'
    },
    {
      id: 'member',
      title: 'Members',
      type: 'item',
      url: '/members',
      icon: 'member'
    }
  ]
};

export default pages;
