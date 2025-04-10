import { CONFIG } from 'src/global-config';
import { ConnectProviderToAgent } from 'src/sections/game/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Connect Providers To Agents - ${CONFIG.appName}` };

export default function Page() {
  return <ConnectProviderToAgent />;
}
