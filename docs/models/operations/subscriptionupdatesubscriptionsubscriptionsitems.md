# SubscriptionUpdateSubscriptionSubscriptionsItems

## Example Usage

```typescript
import { SubscriptionUpdateSubscriptionSubscriptionsItems } from "jani-payments/models/operations";

let value: SubscriptionUpdateSubscriptionSubscriptionsItems = {
  status: "active",
  priceId: "<id>",
  quantity: 514922,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1736048817843",
  updatedAt: "1737924412098",
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
      frequency: 100.63,
    },
    trialPeriod: {
      interval: "week",
      frequency: 7087.71,
    },
    unitPrice: {
      amount: 439.75,
      currencyCode: "UAH",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1707421984056",
    updatedAt: "1737924046378",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                     | [operations.SubscriptionUpdateSubscriptionSubscriptionsStatus](../../models/operations/subscriptionupdatesubscriptionsubscriptionsstatus.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
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
| `price`                                                                                                                                      | [operations.SubscriptionUpdateSubscriptionPrice](../../models/operations/subscriptionupdatesubscriptionprice.md)                             | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |