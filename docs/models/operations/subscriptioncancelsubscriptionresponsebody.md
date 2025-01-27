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
    createdAt: "1737735309320",
    updatedAt: "1737937206960",
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
        createdAt: "1711691540922",
        updatedAt: "1737984382143",
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
          createdAt: "1732252554409",
          updatedAt: "1737913505342",
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