# SubscriptionListResponseBody

## Example Usage

```typescript
import { SubscriptionListResponseBody } from "jani-payments/models/operations";

let value: SubscriptionListResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "PAB",
    createdAt: "1729360992004",
    updatedAt: "1737951046382",
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
      frequency: 110477,
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
        status: "active",
        priceId: "<id>",
        quantity: 29950,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1729705105833",
        updatedAt: "1737914142042",
        previouslyBilledAt: "<value>",
        nextBilledAt: "<value>",
        trialStartedAt: "<value>",
        trialEndedAt: "<value>",
        price: {
          productId: "<id>",
          type: "custom",
          name: "<value>",
          billingCycle: {
            interval: "month",
            frequency: 6347.86,
          },
          trialPeriod: {
            interval: "year",
            frequency: 1032.98,
          },
          unitPrice: {
            amount: 8671.68,
            currencyCode: "ANG",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1719203283107",
          updatedAt: "1737949945738",
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [operations.SubscriptionListData](../../models/operations/subscriptionlistdata.md) | :heavy_check_mark:                                                                 | N/A                                                                                |