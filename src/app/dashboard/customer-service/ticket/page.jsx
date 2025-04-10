import { CONFIG } from 'src/global-config';
import { MyTicketList } from 'src/sections/customer-service/view';

// ----------------------------------------------------------------------

export const metadata = { title: `My Ticket List - ${CONFIG.appName}` };

export default function Page() {
  return <MyTicketList />;
}
