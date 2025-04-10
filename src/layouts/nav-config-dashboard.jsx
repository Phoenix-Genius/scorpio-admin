import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const navData = [
  {
    items: [
      {
        title: 'Setting',
        path: paths.dashboard.setting,
        icon: "icmn-cog"
      }
    ]
  },
  {
    subheader: 'SLOTCITY',
    items: [
      {
        title: 'One',
        path: paths.dashboard.one,
        icon: "fa fa-bar-chart"
      },
      {
        title: 'Two',
        path: paths.dashboard.two,
        icon: "fa fa-bar-chart"
      },
      {
        title: 'Three',
        path: paths.dashboard.three,
        icon: "fa fa-bar-chart"
      },
      {
        title: 'Dashboard',
        path: paths.dashboard.root,
        icon: "fa fa-bar-chart"
      },
      {
        title: 'Agent',
        path: paths.dashboard.agent.root,
        icon: "fa fa-sitemap",
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
        icon: "fa fa-users",
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
        icon: "fa fa-gamepad",
        children: [
          { title: 'Providers List', path: paths.dashboard.game.provider },
          { title: 'Games List', path: paths.dashboard.game.root },
          { title: 'Connect Providers To Agents', path: paths.dashboard.game.connectProviderToAgent },
          { title: 'Connect Games To Agents', path: paths.dashboard.game.connectGameToAgent },
        ],
      },
      {
        title: 'Statistics',
        path: paths.dashboard.statistic.root,
        icon: "fa fa-pie-chart",
        children: [
          { title: 'Stats Per Day', path: paths.dashboard.statistic.day },
          { title: 'Stats Per Game', path: paths.dashboard.statistic.game },
          { title: 'Stats Per User', path: paths.dashboard.statistic.user },
        ],
      },
      {
        title: 'API',
        path: paths.dashboard.api.root,
        icon: "icmn-hammer",
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
        path: paths.dashboard.customerService.root,
        icon: "fa fa-comment",
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
