'use client';

import { DashboardContent } from 'src/layouts/dashboard';
import Grid from '@mui/material/Grid2';
import { Divider, Stack, Box } from '@mui/material';
import { PageTitle } from 'src/components/page-title/page-title';
import { CONFIG } from 'src/global-config';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';

import {
  _analyticTasks,
  _analyticPosts,
  _analyticTraffic,
  _analyticOrderTimeline,
} from 'src/_mock';
import { useCurrency } from 'src/contexts/currencyContext';
// ----------------------------------------------------------------------

const fxFormat = (num, rate) =>
  new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(Math.round(num * rate));

export function Overview() {
  const { rate, symbol } = useCurrency();
  return (
    <DashboardContent maxWidth="xl">
      <Stack divider={<Divider sx={{ borderStyle: 'dashed', my: 2 }} />}>
        <section>
          <PageTitle>Dashboard</PageTitle>
          {/* <AppCards /> */}
          <Box
            sx={{
              display: 'grid',
              gap: 3, // spacing between cards
              gridTemplateColumns: 'repeat(5, 1fr)', // 5 columns, auto-rows
            }}
          >
            {/* 1 ─ My Point */}
            <AnalyticsWidgetSummary
              title="My Point"
              percent={2.6}
              total={fxFormat(99_474_990_000, rate)}
              unit={symbol}
              icon={
                <img
                  alt="My Point"
                  src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-bag.svg`}
                />
              }
              chart={{ categories: [], series: [] }}
            />

            {/* 2 ─ My Profit of Day [Slot] */}
            <AnalyticsWidgetSummary
              title="My Profit of Day [Slot]"
              percent={2.8}
              total={fxFormat(1_723_315, rate)}
              unit={symbol}
              color="warning"
              icon={
                <img
                  alt="Slot profit"
                  src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-buy.svg`}
                />
              }
              chart={{ categories: [], series: [] }}
            />

            {/* 3 ─ My Profit of Day [Live] */}
            <AnalyticsWidgetSummary
              title="My Profit of Day [Live]"
              percent={1.4}
              total={fxFormat(2_533_315, rate)}
              unit={symbol}
              color="success"
              icon={
                <img
                  alt="Live profit"
                  src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-buy.svg`}
                />
              }
              chart={{ categories: [], series: [] }}
            />

            {/* 4 ─ My Users */}
            <AnalyticsWidgetSummary
              title="My Users"
              percent={-0.1}
              total={1_352_831}
              unit={symbol}
              color="secondary"
              icon={
                <img
                  alt="Users"
                  src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-users.svg`}
                />
              }
              chart={{ categories: [], series: [] }}
            />

            {/* 5 ─ Providers / Games */}
            <AnalyticsWidgetSummary
              title="Providers / Games"
              percent={3.6}
              total={234}
              unit={symbol}
              color="error"
              icon={
                <img
                  alt="Games"
                  src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-message.svg`}
                />
              }
              chart={{ categories: [], series: [] }}
            />

            {/* 6 ─ Sub(Total) Point */}
            <AnalyticsWidgetSummary
              title="Sub(Total) Point"
              percent={2.6}
              total={fxFormat(714_000, rate)}
              unit={symbol}
              icon={
                <img
                  alt="Sub point"
                  src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-bag.svg`}
                />
              }
              chart={{ categories: [], series: [] }}
            />

            {/* 7 ─ Sub(Total) Profit of Day [Slot] */}
            <AnalyticsWidgetSummary
              title="Sub(Total) Profit of Day [Slot]"
              percent={2.8}
              total={fxFormat(1_723_315, rate)}
              unit={symbol}
              color="warning"
              icon={
                <img
                  alt="Sub slot profit"
                  src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-buy.svg`}
                />
              }
              chart={{ categories: [], series: [] }}
            />

            {/* 8 ─ Sub(Total) Profit of Day */}
            <AnalyticsWidgetSummary
              title="Sub(Total) Profit of Day"
              percent={3.2}
              total={fxFormat(1_723_315 + 2_533_315, rate)}
              unit={symbol}
              color="warning"
              icon={
                <img
                  alt="Subtotal profit"
                  src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-buy.svg`}
                />
              }
              chart={{ categories: [], series: [] }}
            />

            {/* 9 ─ Users */}
            <AnalyticsWidgetSummary
              title="Users"
              percent={-0.1}
              total={1_352_831}
              unit={symbol}
              color="secondary"
              icon={
                <img
                  alt="Users"
                  src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-users.svg`}
                />
              }
              chart={{ categories: [], series: [] }}
            />

            {/* 10 ─ Agents */}
            <AnalyticsWidgetSummary
              title="Agents"
              percent={3.6}
              total={234}
              unit={symbol}
              color="error"
              icon={
                <img
                  alt="Agents"
                  src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-message.svg`}
                />
              }
              chart={{ categories: [], series: [] }}
            />
          </Box>
        </section>
        <section>
          {/* <PageTitle>Profit Graph</PageTitle> */}
          <Grid size={{ xs: 12, md: 6, lg: 8 }}>
            <AnalyticsWebsiteVisits
              title="Profit Graph"
              subheader="(+43%) than last year"
              chart={{
                categories: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
                series: [
                  { name: 'pv', data: [4300, 3300, 2200, 3700, 6700, 6800, 3700] },
                  { name: 'uv', data: [5100, 7000, 4700, 6700, 4000, 3700, 2400] },
                ],
              }}
            />
          </Grid>
        </section>
      </Stack>
    </DashboardContent>
  );
}
