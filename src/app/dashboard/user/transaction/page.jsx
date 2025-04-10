import { CONFIG } from 'src/global-config';
import { UserTransaction } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Game List - ${CONFIG.appName}` };

export default function Page() {
  return <UserTransaction />;
}
