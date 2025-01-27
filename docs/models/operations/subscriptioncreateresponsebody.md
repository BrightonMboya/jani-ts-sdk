# SubscriptionCreateResponseBody

Creates a Subscription

## Example Usage

```typescript
import { SubscriptionCreateResponseBody } from "jani-payments/models/operations";

let value: SubscriptionCreateResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "ARS",
    createdAt: "1708345459976",
    updatedAt: "1737909933771",
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
      frequency: 907733,
      interval: "<value>",
    },
    scheduledChange: [
      {
        id: "<id>",
        subscriptionId: "<id>",
        action: "cancel",
        effectiveAt: "<value>",
        status: "scheduled",
      },
    ],
    items: [
      {
        status: "trialing",
        priceId: "<id>",
        quantity: 528940,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1716056076891",
        updatedAt: "1737990879591",
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
            frequency: 3782.45,
          },
          trialPeriod: {
            interval: "year",
            frequency: 1746.58,
          },
          unitPrice: {
            amount: 3279.88,
            currencyCode: "PKR",
          },
          status: "active",
          id: "<id>",
          createdAt: "1725605272304",
          updatedAt: "1737945924832",
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

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `data`                                             | [operations.Data](../../models/operations/data.md) | :heavy_check_mark:                                 | N/A                                                |