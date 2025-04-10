import { CONFIG } from 'src/global-config';
import { AgentTreeView } from 'src/sections/agent/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Agents Treeview - ${CONFIG.appName}` };

export default function Page() {
  return <AgentTreeView />;
}
