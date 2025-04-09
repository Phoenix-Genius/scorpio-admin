import { CONFIG } from 'src/global-config';
import { ApiSeamless } from 'src/sections/api/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Api Seamless - ${CONFIG.appName}` };

export default function Page() {
  return <ApiSeamless />;
}
