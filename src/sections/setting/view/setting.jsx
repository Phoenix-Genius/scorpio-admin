"use client"

import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { BasicInfo } from '../basic-info';
import { ApiInfo } from '../api-info';
import { AllowedIP } from '../allowed-api';
import { CallbackInfo } from '../callback-info';

export function Setting() {
  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Settings</PageTitle>

      <BasicInfo />

      <ApiInfo />

      <AllowedIP />

      <CallbackInfo />

    </DashboardContent>
  )
}
