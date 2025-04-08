import { CONFIG } from 'src/global-config';
import { GameList } from 'src/sections/game/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Game List - ${CONFIG.appName}` };

export default function Page() {
  return <GameList />;
}
