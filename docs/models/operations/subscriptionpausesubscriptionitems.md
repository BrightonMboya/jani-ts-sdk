# SubscriptionPauseSubscriptionItems

## Example Usage

```typescript
import { SubscriptionPauseSubscriptionItems } from "jani-payments/models/operations";

let value: SubscriptionPauseSubscriptionItems = {
  status: "trialing",
  priceId: "<id>",
  quantity: 524577,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1717625891008",
  updatedAt: "1737915049224",
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
      frequency: 1002.51,
    },
    trialPeriod: {
      interval: "year",
      frequency: 170.6,
    },
    unitPrice: {
      amount: 9670.55,
      currencyCode: "NGN",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1715788131039",
    updatedAt: "1737984947255",
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                 | [operations.SubscriptionPauseSubscriptionSubscriptionStatus](../../models/operations/subscriptionpausesubscriptionsubscriptionstatus.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `priceId`                                                                                                                                | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `quantity`                                                                                                                               | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `subscriptionId`                                                                                                                         | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `recurring`                                                                                                                              | *boolean*                                                                                                                                | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `createdAt`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `updatedAt`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `previouslyBilledAt`                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `nextBilledAt`                                                                                                                           | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `trialStartedAt`                                                                                                                         | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `trialEndedAt`                                                                                                                           | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `customData`                                                                                                                             | *any*                                                                                                                                    | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `price`                                                                                                                                  | [operations.SubscriptionPauseSubscriptionPrice](../../models/operations/subscriptionpausesubscriptionprice.md)                           | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |