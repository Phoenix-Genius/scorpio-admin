import { CONFIG } from 'src/global-config';
import { BonusCallHistory } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Bonus Call History - ${CONFIG.appName}` };

export default function Page() {
  return <BonusCallHistory />;
}
