# SubscriptionCancelSubscriptionItems

## Example Usage

```typescript
import { SubscriptionCancelSubscriptionItems } from "jani-payments/models/operations";

let value: SubscriptionCancelSubscriptionItems = {
  status: "trialing",
  priceId: "<id>",
  quantity: 392569,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1735101046605",
  updatedAt: "1738909975583",
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
      frequency: 3645.44,
    },
    trialPeriod: {
      interval: "month",
      frequency: 3763.89,
    },
    unitPrice: {
      amount: 3649.12,
      currencyCode: "ETB",
    },
    status: "active",
    id: "<id>",
    createdAt: "1728900042696",
    updatedAt: "1738874254392",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                     | [operations.SubscriptionCancelSubscriptionSubscriptionsStatus](../../models/operations/subscriptioncancelsubscriptionsubscriptionsstatus.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `priceId`                                                                                                                                    | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `quantity`                                                                                                                                   | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `subscriptionId`                                                                                                                             | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `recurring`                                                                                                                                  | *boolean*                                                                                                                                    | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `createdAt`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `updatedAt`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `previouslyBilledAt`                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `nextBilledAt`                                                                                                                               | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `trialStartedAt`                                                                                                                             | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `trialEndedAt`                                                                                                                               | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `customData`                                                                                                                                 | *any*                                                                                                                                        | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `price`                                                                                                                                      | [operations.SubscriptionCancelSubscriptionPrice](../../models/operations/subscriptioncancelsubscriptionprice.md)                             | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |