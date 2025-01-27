# SubscriptionActivateSubscriptionItems

## Example Usage

```typescript
import { SubscriptionActivateSubscriptionItems } from "jani-payments/models/operations";

let value: SubscriptionActivateSubscriptionItems = {
  status: "inactive",
  priceId: "<id>",
  quantity: 211455,
  id: "<id>",
  subscriptionId: "<id>",
  recurring: false,
  createdAt: "1708326052742",
  updatedAt: "1737978632429",
  previouslyBilledAt: "<value>",
  nextBilledAt: "<value>",
  trialStartedAt: "<value>",
  trialEndedAt: "<value>",
  price: {
    productId: "<id>",
    type: "custom",
    name: "<value>",
    billingCycle: {
      interval: "day",
      frequency: 3344.74,
    },
    trialPeriod: {
      interval: "day",
      frequency: 1158.98,
    },
    unitPrice: {
      amount: 8998.67,
      currencyCode: "AWG",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1709495018831",
    updatedAt: "1737977547586",
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `status`                                                                                                                                         | [operations.SubscriptionActivateSubscriptionSubscriptionsStatus](../../models/operations/subscriptionactivatesubscriptionsubscriptionsstatus.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `priceId`                                                                                                                                        | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `quantity`                                                                                                                                       | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `subscriptionId`                                                                                                                                 | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `recurring`                                                                                                                                      | *boolean*                                                                                                                                        | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `createdAt`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `updatedAt`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `previouslyBilledAt`                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `nextBilledAt`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `trialStartedAt`                                                                                                                                 | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `trialEndedAt`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `customData`                                                                                                                                     | *any*                                                                                                                                            | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `price`                                                                                                                                          | [operations.SubscriptionActivateSubscriptionPrice](../../models/operations/subscriptionactivatesubscriptionprice.md)                             | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |