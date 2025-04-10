import { CONFIG } from 'src/global-config';
import { ProviderList } from 'src/sections/game/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Provider List - ${CONFIG.appName}` };

export default function Page() {
  return <ProviderList />;
}
