import { CONFIG } from 'src/global-config';
import { NoticesReceived } from 'src/sections/customer-service/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Notices Received - ${CONFIG.appName}` };

export default function Page() {
  return <NoticesReceived />;
}
