import { CONFIG } from 'src/global-config';
import { ApiErrorLogs } from 'src/sections/api/view';

// ----------------------------------------------------------------------

export const metadata = { title: `API Error Logs - ${CONFIG.appName}` };

export default function Page() {
  return <ApiErrorLogs />;
}
