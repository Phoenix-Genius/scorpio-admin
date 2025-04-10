import { CONFIG } from 'src/global-config';
import { StatisticsPerGame } from 'src/sections/statistic/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Stats Per Game - ${CONFIG.appName}` };

export default function Page() {
  return <StatisticsPerGame />;
}
