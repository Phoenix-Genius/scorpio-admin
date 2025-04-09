import { CONFIG } from 'src/global-config';
import { AgentPoints } from 'src/sections/agent/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Point Transactions - ${CONFIG.appName}` };

export default function Page() {
  return <AgentPoints />
}