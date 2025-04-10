// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  faqs: '/faqs',
  minimalStore: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    amplify: {
      signIn: `${ROOTS.AUTH}/amplify/sign-in`,
      verify: `${ROOTS.AUTH}/amplify/verify`,
      signUp: `${ROOTS.AUTH}/amplify/sign-up`,
      updatePassword: `${ROOTS.AUTH}/amplify/update-password`,
      resetPassword: `${ROOTS.AUTH}/amplify/reset-password`,
    },
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    },
    firebase: {
      signIn: `${ROOTS.AUTH}/firebase/sign-in`,
      verify: `${ROOTS.AUTH}/firebase/verify`,
      signUp: `${ROOTS.AUTH}/firebase/sign-up`,
      resetPassword: `${ROOTS.AUTH}/firebase/reset-password`,
    },
    auth0: {
      signIn: `${ROOTS.AUTH}/auth0/sign-in`,
    },
    supabase: {
      signIn: `${ROOTS.AUTH}/supabase/sign-in`,
      verify: `${ROOTS.AUTH}/supabase/verify`,
      signUp: `${ROOTS.AUTH}/supabase/sign-up`,
      updatePassword: `${ROOTS.AUTH}/supabase/update-password`,
      resetPassword: `${ROOTS.AUTH}/supabase/reset-password`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    setting: `${ROOTS.DASHBOARD}/setting`,
    one: `${ROOTS.DASHBOARD}/one`,
    two: `${ROOTS.DASHBOARD}/two`,
    three: `${ROOTS.DASHBOARD}/three`,
    agent: {
      root: `${ROOTS.DASHBOARD}/agent`,
      treeView: `${ROOTS.DASHBOARD}/agent/treeview`,
      request: `${ROOTS.DASHBOARD}/agent/request`,
      point: `${ROOTS.DASHBOARD}/agent/point`,
    },
    user: {
      root: `${ROOTS.DASHBOARD}/user`,
      transaction: `${ROOTS.DASHBOARD}/user/transaction`,
      game: `${ROOTS.DASHBOARD}/user/game`,
      gameConnection: `${ROOTS.DASHBOARD}/user/game-connection`,
      bonusCall: `${ROOTS.DASHBOARD}/user/bonusCall`,
    },
    game: {
      root: `${ROOTS.DASHBOARD}/game`,
      provider: `${ROOTS.DASHBOARD}/game/provider`,
      connectProviderToAgent: `${ROOTS.DASHBOARD}/game/connect-provider-to-agent`,
      connectGameToAgent: `${ROOTS.DASHBOARD}/game/connect-game-to-agent`,
    },
    statistic: {
      root: `${ROOTS.DASHBOARD}/statistic`,
      day: `${ROOTS.DASHBOARD}/statistic/stats-per-day`,
      game: `${ROOTS.DASHBOARD}/statistic/stats-per-game`,
      user: `${ROOTS.DASHBOARD}/statistic/stats-per-user`,
    },
    api: {
      root: `${ROOTS.DASHBOARD}/api`,
      seamless: `${ROOTS.DASHBOARD}/api/seamless`,
      testing: `${ROOTS.DASHBOARD}/api/testing`,
      testingLog: `${ROOTS.DASHBOARD}/api/testing-log`,
      errorLog: `${ROOTS.DASHBOARD}/api/error-log`,
    },
    customerService: {
      root: `${ROOTS.DASHBOARD}/customer-service`,
      newNotice: `${ROOTS.DASHBOARD}/customer-service/new-notice`,
      notice: `${ROOTS.DASHBOARD}/customer-service/notice`,
      noticeReceived: `${ROOTS.DASHBOARD}/customer-service/notice-received`,
      ticket: `${ROOTS.DASHBOARD}/customer-service/ticket`,
      openTicket: `${ROOTS.DASHBOARD}/customer-service/open-ticket`,
    },
  },
};
