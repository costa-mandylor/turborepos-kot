import { GrowthBook } from '@growthbook/growthbook-react';

export const growthbook = new GrowthBook({
  apiHost: process.env.NEXT_PUBLIC_GROWTHBOOK_API,
  clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_KEY,
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    // TODO: Use your real analytics tracking system

    console.log('Viewed Experiment', {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});
