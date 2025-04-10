import { CONFIG } from 'src/global-config';
import { NoticePostingHistory } from 'src/sections/customer-service/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Notice Posting History - ${CONFIG.appName}` };

export default function Page() {
  return <NoticePostingHistory />;
}
