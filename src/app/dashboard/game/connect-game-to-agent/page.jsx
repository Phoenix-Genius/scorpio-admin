import { CONFIG } from 'src/global-config';
import { ConnectGameToAgents } from 'src/sections/game/view/connect-game-to-agent';

// ----------------------------------------------------------------------

export const metadata = { title: `Connect Games To Agents - ${CONFIG.appName}` };

export default function Page() {
  return <ConnectGameToAgents />;
}
