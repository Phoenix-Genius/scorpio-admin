import { CONFIG } from 'src/global-config';
import { ApiTesting } from 'src/sections/api/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Api Testing - ${CONFIG.appName}` };

export default function Page() {
  return <ApiTesting />;
}
