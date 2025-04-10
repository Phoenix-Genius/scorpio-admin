import { CONFIG } from 'src/global-config';
import { AgentList } from 'src/sections/agent/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Agents List - ${CONFIG.appName}` };

export default function Page() {
  return <AgentList />;
}
