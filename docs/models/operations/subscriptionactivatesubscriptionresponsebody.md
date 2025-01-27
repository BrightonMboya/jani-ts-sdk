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
    currencyCode: "RON",
    createdAt: "1718917419778",
    updatedAt: "1737929800868",
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
      frequency: 718627,
      interval: "<value>",
    },
    scheduledChange: [
      {
        id: "<id>",
        subscriptionId: "<id>",
        action: "resume",
        effectiveAt: "<value>",
        status: "scheduled",
      },
    ],
    items: [
      {
        status: "trialing",
        priceId: "<id>",
        quantity: 217663,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1737163690057",
        updatedAt: "1737916972171",
        previouslyBilledAt: "<value>",
        nextBilledAt: "<value>",
        trialStartedAt: "<value>",
        trialEndedAt: "<value>",
        price: {
          productId: "<id>",
          type: "standard",
          name: "<value>",
          billingCycle: {
            interval: "day",
            frequency: 3455.06,
          },
          trialPeriod: {
            interval: "week",
            frequency: 5221.76,
          },
          unitPrice: {
            amount: 8536.06,
            currencyCode: "UGX",
          },
          status: "active",
          id: "<id>",
          createdAt: "1726096930183",
          updatedAt: "1737912577754",
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