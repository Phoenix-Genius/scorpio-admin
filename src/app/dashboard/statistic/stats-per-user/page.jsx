import { CONFIG } from 'src/global-config';
import { StatisticsPerUser } from 'src/sections/statistic/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Stats Per User - ${CONFIG.appName}` };

export default function Page() {
  return <StatisticsPerUser />;
}
