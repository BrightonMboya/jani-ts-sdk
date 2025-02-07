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
    createdAt: "1730306627646",
    updatedAt: "1738896682024",
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
        createdAt: "1730650741474",
        updatedAt: "1738859777683",
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
          createdAt: "1720148918747",
          updatedAt: "1738895581377",
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