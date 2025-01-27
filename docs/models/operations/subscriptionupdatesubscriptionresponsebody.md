# SubscriptionUpdateSubscriptionResponseBody

Updates a Subscription given its Id

## Example Usage

```typescript
import { SubscriptionUpdateSubscriptionResponseBody } from "jani-payments/models/operations";

let value: SubscriptionUpdateSubscriptionResponseBody = {
  data: {
    id: "<id>",
    status: "<value>",
    customerId: "<id>",
    addressId: "<id>",
    currencyCode: "ETB",
    createdAt: "1710467688944",
    updatedAt: "1737948374054",
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
      frequency: 141817,
      interval: "<value>",
    },
    scheduledChange: [
      {
        id: "<id>",
        subscriptionId: "<id>",
        action: "pause",
        effectiveAt: "<value>",
        status: "scheduled",
      },
    ],
    items: [
      {
        status: "trialing",
        priceId: "<id>",
        quantity: 24272,
        id: "<id>",
        subscriptionId: "<id>",
        recurring: false,
        createdAt: "1720017481940",
        updatedAt: "1737959287600",
        previouslyBilledAt: "<value>",
        nextBilledAt: "<value>",
        trialStartedAt: "<value>",
        trialEndedAt: "<value>",
        price: {
          productId: "<id>",
          type: "custom",
          name: "<value>",
          billingCycle: {
            interval: "week",
            frequency: 9692.06,
          },
          trialPeriod: {
            interval: "week",
            frequency: 135.08,
          },
          unitPrice: {
            amount: 4837.53,
            currencyCode: "ERN",
          },
          status: "archived",
          id: "<id>",
          createdAt: "1713794063445",
          updatedAt: "1737929782742",
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
| `data`                                                                                                         | [operations.SubscriptionUpdateSubscriptionData](../../models/operations/subscriptionupdatesubscriptiondata.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |