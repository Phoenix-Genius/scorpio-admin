import { CONFIG } from 'src/global-config';
import { Setting } from 'src/sections/setting/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Setting - ${CONFIG.appName}` };

export default function Page() {
  return <Setting />;
}
