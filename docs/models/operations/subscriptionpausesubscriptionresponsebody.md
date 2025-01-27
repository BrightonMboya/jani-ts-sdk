# SubscriptionPauseSubscriptionResponseBody

Pause a subscription given its id

## Example Usage

```typescript
import { SubscriptionPauseSubscriptionResponseBody } from "jani-payments/models/operations";

let value: SubscriptionPauseSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "AED",
    createdAt: "1712726212403",
    updatedAt: "1737985552837",
    startedAt: "<value>",
    firstBilledAt: "<value>",
    nextBilledAt: "<value>",
    pausedAt: "<value>",
    canceledAt: "<value>",
    collectionMode: "<value>",
    billingDetails: {
      paymentTerms: {},
    },
    currentBillingPeriod: {
      startsAt: "<value>",
      endsAt: "<value>",
    },
    billingCycle: {
      frequency: 330440,
      interval: "<value>",
    },
    scheduledChange: [
      {
        id: "<id>",
        subscriptionId: "<id>",
        action: "resume",
        effectiveAt: "<value>",
        status: "completed",
      },
    ],
    items: [
      {
        status: "trialing",
        priceId: "<id>",
        quantity: 728559,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1716849223330",
        updatedAt: "1737971352149",
        previouslyBilledAt: "<value>",
        nextBilledAt: "<value>",
        trialStartedAt: "<value>",
        trialEndedAt: "<value>",
        price: {
          productId: "<id>",
          type: "standard",
          name: "<value>",
          billingCycle: {
            interval: "week",
            frequency: 2212.18,
          },
          trialPeriod: {
            interval: "month",
            frequency: 1024.46,
          },
          unitPrice: {
            amount: 3970.26,
            currencyCode: "FJD",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1717487717656",
          updatedAt: "1737963977922",
        },
      },
    ],
    managementUrls: {
      updatePaymentMethod: "<value>",
      cancel: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                       | [operations.SubscriptionPauseSubscriptionData](../../models/operations/subscriptionpausesubscriptiondata.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |