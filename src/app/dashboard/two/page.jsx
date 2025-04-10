import { CONFIG } from 'src/global-config';

import { Two } from 'src/sections/app/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Page two | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <Two title="Page two" />;
}
