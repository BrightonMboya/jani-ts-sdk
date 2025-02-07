# SubscriptionActivateSubscriptionResponseBody

Activates a subscription given its id

## Example Usage

```typescript
import { SubscriptionActivateSubscriptionResponseBody } from "jani-payments/models/operations";

let value: SubscriptionActivateSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "ERN",
    createdAt: "1715767298350",
    updatedAt: "1738861291049",
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
      frequency: 525809,
      interval: "<value>",
    },
    scheduledChange: [
      {
        id: "<id>",
        subscriptionId: "<id>",
        action: "pause",
        effectiveAt: "<value>",
        status: "completed",
      },
    ],
    items: [
      {
        status: "inactive",
        priceId: "<id>",
        quantity: 727544,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1708166156969",
        updatedAt: "1738887454572",
        previouslyBilledAt: "<value>",
        nextBilledAt: "<value>",
        trialStartedAt: "<value>",
        trialEndedAt: "<value>",
        price: {
          productId: "<id>",
          type: "custom",
          name: "<value>",
          billingCycle: {
            interval: "year",
            frequency: 4753.25,
          },
          trialPeriod: {
            interval: "year",
            frequency: 2656.32,
          },
          unitPrice: {
            amount: 135.08,
            currencyCode: "KZT",
          },
          status: "active",
          id: "<id>",
          createdAt: "1733377452667",
          updatedAt: "1738870404311",
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                             | [operations.SubscriptionActivateSubscriptionData](../../models/operations/subscriptionactivatesubscriptiondata.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |