"use client"

import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';

// ----------------------------------------------------------------------

export function MainApi() {
  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Main Api</PageTitle>
      <Block title="Main API">
        <img style={{ width: "100%" }} src="/assets/images/html.png" alt="logo" />
      </Block>
    </DashboardContent>
  )
}
