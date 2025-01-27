# SubscriptionCreateItems

## Example Usage

```typescript
import { SubscriptionCreateItems } from "jani-payments/models/operations";

let value: SubscriptionCreateItems = {
  status: "trialing",
  priceId: "<id>",
  quantity: 16871,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1728417613599",
  updatedAt: "1737973245383",
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
      frequency: 7908.4,
    },
    trialPeriod: {
      interval: "day",
      frequency: 4420.36,
    },
    unitPrice: {
      amount: 5199.52,
      currencyCode: "PYG",
    },
    status: "active",
    id: "<id>",
    createdAt: "1713635967774",
    updatedAt: "1737938394007",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                                             | [operations.SubscriptionCreateSubscriptionsResponseStatus](../../models/operations/subscriptioncreatesubscriptionsresponsestatus.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `priceId`                                                                                                                            | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `quantity`                                                                                                                           | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `subscriptionId`                                                                                                                     | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `recurring`                                                                                                                          | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `createdAt`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `updatedAt`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `previouslyBilledAt`                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `nextBilledAt`                                                                                                                       | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `trialStartedAt`                                                                                                                     | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `trialEndedAt`                                                                                                                       | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `customData`                                                                                                                         | *any*                                                                                                                                | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `price`                                                                                                                              | [operations.SubscriptionCreatePrice](../../models/operations/subscriptioncreateprice.md)                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |