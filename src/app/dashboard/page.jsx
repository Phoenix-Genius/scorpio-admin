import { CONFIG } from 'src/global-config';
import { Overview } from 'src/sections/app/view/overview';

// ----------------------------------------------------------------------

export const metadata = { title: `Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <Overview />;
}
