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
    createdAt: "1718919132319",
    updatedAt: "1737931513409",
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
        createdAt: "1737165402599",
        updatedAt: "1737918684713",
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
          createdAt: "1726098642727",
          updatedAt: "1737914290298",
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