import { CONFIG } from 'src/global-config';
import { LayoutSection } from 'src/layouts/core';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  if (CONFIG.auth.skip) {
    return <LayoutSection>{children}</LayoutSection>;
  }
  
  return (
    <AuthGuard>
      <LayoutSection>{children}</LayoutSection>
    </AuthGuard>
  );
}
