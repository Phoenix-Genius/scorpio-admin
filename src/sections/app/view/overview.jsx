'use client';

import { DashboardContent } from 'src/layouts/dashboard';

import { Divider, Stack } from '@mui/material';
import { AppCards } from '../app-cards';
import { ChartColumnMultiple } from '../chart-column-multiple';
import { PageTitle } from 'src/components/page-title/page-title';

// ----------------------------------------------------------------------

export function Overview() {
  return (
    <DashboardContent maxWidth="xl">
      <Stack divider={<Divider sx={{ borderStyle: 'dashed', my: 2 }} />}>
        <section>
          <PageTitle>Dashboard</PageTitle>
          <AppCards />
        </section>
        <section>
          <PageTitle>Profit Graph</PageTitle>
          <ChartColumnMultiple
            chart={{
              categories: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
              series: [
                { name: 'pv', data: [2100, 1600, 9600, 3800, 4700, 4000, 4200] },
                { name: 'uv', data: [9900, 7700, 5000, 6500, 4600, 5800, 8600] },
              ],
              colors: ["#0090ff", "#00ccff"]
            }}
          />
        </section>
      </Stack>
    </DashboardContent>
  );
}
