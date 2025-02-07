# SubscriptionCancelSubscriptionResponseBody

Cancels an active subscription given its id

## Example Usage

```typescript
import { SubscriptionCancelSubscriptionResponseBody } from "jani-payments/models/operations";

let value: SubscriptionCancelSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "XCD",
    createdAt: "1738680944920",
    updatedAt: "1738882842560",
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
      frequency: 966148,
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
        status: "active",
        priceId: "<id>",
        quantity: 216457,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1712637176520",
        updatedAt: "1738930017741",
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
            frequency: 4939.58,
          },
          trialPeriod: {
            interval: "year",
            frequency: 8442.35,
          },
          unitPrice: {
            amount: 1390.72,
            currencyCode: "JPY",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1733198190006",
          updatedAt: "1738859140939",
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
| `data`                                                                                                         | [operations.SubscriptionCancelSubscriptionData](../../models/operations/subscriptioncancelsubscriptiondata.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |