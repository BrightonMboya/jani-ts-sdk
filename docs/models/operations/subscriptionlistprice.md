# SubscriptionListPrice

## Example Usage

```typescript
import { SubscriptionListPrice } from "jani-payments/models/operations";

let value: SubscriptionListPrice = {
  productId: "<id>",
  type: "custom",
  name: "<value>",
  billingCycle: {
    interval: "year",
    frequency: 8897.94,
  },
  trialPeriod: {
    interval: "year",
    frequency: 6982.49,
  },
  unitPrice: {
    amount: 3354.98,
    currencyCode: "BYN",
  },
  status: "active",
  id: "<id>",
  createdAt: "1714081956311",
  updatedAt: "1737940293097",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `productId`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `description`                                                                                                                            | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `type`                                                                                                                                   | [operations.SubscriptionListSubscriptionsType](../../models/operations/subscriptionlistsubscriptionstype.md)                             | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `name`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `billingCycle`                                                                                                                           | [operations.SubscriptionListSubscriptionsBillingCycle](../../models/operations/subscriptionlistsubscriptionsbillingcycle.md)             | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `trialPeriod`                                                                                                                            | [operations.SubscriptionListTrialPeriod](../../models/operations/subscriptionlisttrialperiod.md)                                         | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `unitPrice`                                                                                                                              | [operations.SubscriptionListUnitPrice](../../models/operations/subscriptionlistunitprice.md)                                             | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `status`                                                                                                                                 | [operations.SubscriptionListSubscriptionsResponse200Status](../../models/operations/subscriptionlistsubscriptionsresponse200status.md)   | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `customData`                                                                                                                             | [operations.SubscriptionListSubscriptionsResponseCustomData](../../models/operations/subscriptionlistsubscriptionsresponsecustomdata.md) | :heavy_minus_sign:                                                                                                                       | Any valid JSON value                                                                                                                     |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `createdAt`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `updatedAt`                                                                                                                              | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |