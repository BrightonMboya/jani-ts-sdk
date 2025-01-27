# SubscriptionActivateSubscriptionData

## Example Usage

```typescript
import { SubscriptionActivateSubscriptionData } from "jani-payments/models/operations";

let value: SubscriptionActivateSubscriptionData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "UYU",
  createdAt: "1723946343144",
  updatedAt: "1737976097147",
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
    frequency: 725574,
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
      status: "active",
      priceId: "<id>",
      quantity: 903150,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1707808714365",
      updatedAt: "1737933434224",
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
          frequency: 8200.23,
        },
        trialPeriod: {
          interval: "week",
          frequency: 1509.35,
        },
        unitPrice: {
          amount: 3302.67,
          currencyCode: "SZL",
        },
        status: "active",
        id: "<id>",
        createdAt: "1713625159102",
        updatedAt: "1737910605876",
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

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                               | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `status`                                                                                                                                           | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `customerId`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `addressId`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `currencyCode`                                                                                                                                     | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `createdAt`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `updatedAt`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `startedAt`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `firstBilledAt`                                                                                                                                    | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `nextBilledAt`                                                                                                                                     | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `pausedAt`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `canceledAt`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `collectionMode`                                                                                                                                   | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `billingDetails`                                                                                                                                   | [operations.SubscriptionActivateSubscriptionBillingDetails](../../models/operations/subscriptionactivatesubscriptionbillingdetails.md)             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `currentBillingPeriod`                                                                                                                             | [operations.SubscriptionActivateSubscriptionCurrentBillingPeriod](../../models/operations/subscriptionactivatesubscriptioncurrentbillingperiod.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `billingCycle`                                                                                                                                     | [operations.SubscriptionActivateSubscriptionBillingCycle](../../models/operations/subscriptionactivatesubscriptionbillingcycle.md)                 | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `scheduledChange`                                                                                                                                  | [operations.SubscriptionActivateSubscriptionScheduledChange](../../models/operations/subscriptionactivatesubscriptionscheduledchange.md)[]         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `items`                                                                                                                                            | [operations.SubscriptionActivateSubscriptionItems](../../models/operations/subscriptionactivatesubscriptionitems.md)[]                             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `customData`                                                                                                                                       | [operations.SubscriptionActivateSubscriptionCustomData](../../models/operations/subscriptionactivatesubscriptioncustomdata.md)                     | :heavy_minus_sign:                                                                                                                                 | Any valid JSON value                                                                                                                               |
| `managementUrls`                                                                                                                                   | [operations.SubscriptionActivateSubscriptionManagementUrls](../../models/operations/subscriptionactivatesubscriptionmanagementurls.md)             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `discount`                                                                                                                                         | [operations.SubscriptionActivateSubscriptionDiscount](../../models/operations/subscriptionactivatesubscriptiondiscount.md)                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |