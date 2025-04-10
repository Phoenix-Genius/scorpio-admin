import { CONFIG } from 'src/global-config';
import { UserList } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export const metadata = { title: `User List - ${CONFIG.appName}` };

export default function Page() {
  return <UserList />;
}
