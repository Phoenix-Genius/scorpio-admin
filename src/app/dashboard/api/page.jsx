import { CONFIG } from 'src/global-config';
import { MainApi } from 'src/sections/api/view';

// ----------------------------------------------------------------------

export const metadata = { title: `API Testing Logs - ${CONFIG.appName}` };

export default function Page() {
  return <MainApi />;
}