import { CONFIG } from 'src/global-config';
import { PostNewNotice } from 'src/sections/customer-service/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Post New Notice - ${CONFIG.appName}` };

export default function Page() {
  return <PostNewNotice />;
}
