import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

export const navData = [
  {
    subheader: 'SLOTCITY',
    items: [
      {
        title: 'Dashboard',
        path: paths.dashboard.root,
        icon: ICONS.user
      },
      {
        title: 'Agent',
        path: paths.dashboard.agent.root,
        icon: ICONS.user,
        children: [
          { title: 'Agents Treeview', path: paths.dashboard.agent.treeView },
          { title: 'Agents List', path: paths.dashboard.agent.root },
          { title: 'Requests For Signup', path: paths.dashboard.agent.request },
          { title: 'Point Transactions', path: paths.dashboard.agent.point },
        ],
      },
      {
        title: 'Users',
        path: paths.dashboard.user.root,
        icon: ICONS.user,
        children: [
          { title: 'Users List', path: paths.dashboard.user.root },
          { title: 'Transaction History', path: paths.dashboard.user.transaction },
          { title: 'Game History', path: paths.dashboard.user.game },
          { title: 'Game Connections', path: paths.dashboard.user.gameConnection },
          { title: 'Bonus Call History', path: paths.dashboard.user.bonusCall },
        ],
      },
      {
        title: 'Games',
        path: paths.dashboard.game.root,
        icon: ICONS.user,
        children: [
          { title: 'Providers List', path: paths.dashboard.game.provider },
          { title: 'Games List', path: paths.dashboard.game.root },
          { title: 'Connect Providers To Agents', path: paths.dashboard.game.connectProviderToAgent },
          { title: 'Connect Games To Agents', path: paths.dashboard.game.connectGameToAgent },
        ],
      },
      {
        title: 'Statistics',
        path: paths.dashboard.statistic.day,
        icon: ICONS.user,
        children: [
          { title: 'Stats Per Day', path: paths.dashboard.statistic.day },
          { title: 'Stats Per Game', path: paths.dashboard.statistic.game },
          { title: 'Stats Per User', path: paths.dashboard.statistic.user },
        ],
      },
      {
        title: 'API',
        path: paths.dashboard.api.root,
        icon: ICONS.user,
        children: [
          { title: 'Main API', path: paths.dashboard.api.root },
          { title: 'Callback API (Seamless)', path: paths.dashboard.api.seamless },
          { title: 'Callback API Testing', path: paths.dashboard.api.testing },
          { title: 'Callback API Testing Logs', path: paths.dashboard.api.testingLog },
          { title: 'API Error Logs', path: paths.dashboard.api.errorLog },
        ],
      },
      {
        title: 'Customer Service',
        path: paths.dashboard.customerService.newNotice,
        icon: ICONS.user,
        children: [
          { title: 'Post New Notice', path: paths.dashboard.customerService.newNotice },
          { title: 'Notice Posting History', path: paths.dashboard.customerService.notice },
          { title: 'Notices Received', path: paths.dashboard.customerService.noticeReceived },
          { title: 'My Ticket List', path: paths.dashboard.customerService.ticket },
          { title: 'Open Ticket', path: paths.dashboard.customerService.openTicket },
        ],
      },
    ],
  },
];
