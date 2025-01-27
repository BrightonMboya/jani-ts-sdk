# SubscriptionResumeSubscriptionResponseBody

Resumes a subscription given its id

## Example Usage

```typescript
import { SubscriptionResumeSubscriptionResponseBody } from "jani-payments/models/operations";

let value: SubscriptionResumeSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "VND",
    createdAt: "1728859989157",
    updatedAt: "1737919950158",
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
      frequency: 483518,
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
        status: "trialing",
        priceId: "<id>",
        quantity: 923306,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1715374599726",
        updatedAt: "1737934000821",
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
            frequency: 1478.01,
          },
          trialPeriod: {
            interval: "week",
            frequency: 8735.57,
          },
          unitPrice: {
            amount: 4918.92,
            currencyCode: "UYU",
          },
          status: "active",
          id: "<id>",
          createdAt: "1723253293083",
          updatedAt: "1737932846411",
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                         | [operations.SubscriptionResumeSubscriptionData](../../models/operations/subscriptionresumesubscriptiondata.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |