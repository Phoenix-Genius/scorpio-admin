import { CONFIG } from 'src/global-config';
import { GameConnections } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Game Connections - ${CONFIG.appName}` };

export default function Page() {
  return <GameConnections />;
}
