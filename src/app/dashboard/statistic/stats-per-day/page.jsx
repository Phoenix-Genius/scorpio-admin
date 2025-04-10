import { CONFIG } from 'src/global-config';
import { StatisticsPerDay } from 'src/sections/statistic/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Stats Per Day - ${CONFIG.appName}` };

export default function Page() {
  return <StatisticsPerDay />;
}
