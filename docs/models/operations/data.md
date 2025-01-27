# Data

## Example Usage

```typescript
import { Data } from "jani-payments/models/operations";

let value: Data = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "MKD",
  createdAt: "1735570723608",
  updatedAt: "1737974646677",
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
    frequency: 968287,
    interval: "<value>",
  },
  scheduledChange: [
    {
      id: "<id>",
      subscriptionId: "<id>",
      action: "cancel",
      effectiveAt: "<value>",
      status: "completed",
    },
  ],
  items: [
    {
      status: "active",
      priceId: "<id>",
      quantity: 389135,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1736480115525",
      updatedAt: "1737928866573",
      previouslyBilledAt: "<value>",
      nextBilledAt: "<value>",
      trialStartedAt: "<value>",
      trialEndedAt: "<value>",
      price: {
        productId: "<id>",
        type: "standard",
        name: "<value>",
        billingCycle: {
          interval: "year",
          frequency: 4463.94,
        },
        trialPeriod: {
          interval: "year",
          frequency: 1602.3,
        },
        unitPrice: {
          amount: 6611.18,
          currencyCode: "KGS",
        },
        status: "active",
        id: "<id>",
        createdAt: "1728417005409",
        updatedAt: "1737924319381",
      },
    },
  ],
  managementUrls: {
    updatePaymentMethod: "<value>",
    cancel: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customerId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `addressId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `currencyCode`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `startedAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `firstBilledAt`                                                                                                        | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `nextBilledAt`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `pausedAt`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `canceledAt`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `collectionMode`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `billingDetails`                                                                                                       | [operations.SubscriptionCreateBillingDetails](../../models/operations/subscriptioncreatebillingdetails.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `currentBillingPeriod`                                                                                                 | [operations.SubscriptionCreateCurrentBillingPeriod](../../models/operations/subscriptioncreatecurrentbillingperiod.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `billingCycle`                                                                                                         | [operations.SubscriptionCreateBillingCycle](../../models/operations/subscriptioncreatebillingcycle.md)                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `scheduledChange`                                                                                                      | [operations.ScheduledChange](../../models/operations/scheduledchange.md)[]                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `items`                                                                                                                | [operations.SubscriptionCreateItems](../../models/operations/subscriptioncreateitems.md)[]                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customData`                                                                                                           | [operations.SubscriptionCreateCustomData](../../models/operations/subscriptioncreatecustomdata.md)                     | :heavy_minus_sign:                                                                                                     | Any valid JSON value                                                                                                   |
| `managementUrls`                                                                                                       | [operations.SubscriptionCreateManagementUrls](../../models/operations/subscriptioncreatemanagementurls.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `discount`                                                                                                             | [operations.SubscriptionCreateDiscount](../../models/operations/subscriptioncreatediscount.md)                         | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |