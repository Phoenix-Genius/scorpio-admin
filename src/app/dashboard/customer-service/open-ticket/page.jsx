import { CONFIG } from 'src/global-config';
import { OpenTicket } from 'src/sections/customer-service/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Open Ticket - ${CONFIG.appName}` };

export default function Page() {
  return <OpenTicket />;
}
