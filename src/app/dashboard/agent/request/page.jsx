import { CONFIG } from 'src/global-config';
import { AgentRequests } from 'src/sections/agent/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Requests For Signup - ${CONFIG.appName}` };

export default function Page() {
  return <AgentRequests />;
}
