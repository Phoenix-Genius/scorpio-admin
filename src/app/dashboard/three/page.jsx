import { CONFIG } from 'src/global-config';

import { Three } from 'src/sections/app/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Page three | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <Three title="Page three" />;
}
