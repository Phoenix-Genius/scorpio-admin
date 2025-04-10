import { CONFIG } from 'src/global-config';

import { One } from 'src/sections/app/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Page one | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <One title="Page one" />;
}
