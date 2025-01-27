# SubscriptionUpdateSubscriptionData

## Example Usage

```typescript
import { SubscriptionUpdateSubscriptionData } from "jani-payments/models/operations";

let value: SubscriptionUpdateSubscriptionData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "DZD",
  createdAt: "1725018376217",
  updatedAt: "1737969736485",
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
    frequency: 235834,
    interval: "<value>",
  },
  scheduledChange: [
    {
      id: "<id>",
      subscriptionId: "<id>",
      action: "resume",
      effectiveAt: "<value>",
      status: "scheduled",
    },
  ],
  items: [
    {
      status: "trialing",
      priceId: "<id>",
      quantity: 778276,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1733208472875",
      updatedAt: "1737947029085",
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
          frequency: 1293.55,
        },
        trialPeriod: {
          interval: "week",
          frequency: 680.93,
        },
        unitPrice: {
          amount: 9438.51,
          currencyCode: "YER",
        },
        status: "archived",
        id: "<id>",
        createdAt: "1717492431264",
        updatedAt: "1737926635682",
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

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                         | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `status`                                                                                                                                                     | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customerId`                                                                                                                                                 | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `addressId`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `currencyCode`                                                                                                                                               | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `createdAt`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `updatedAt`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `startedAt`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `firstBilledAt`                                                                                                                                              | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `nextBilledAt`                                                                                                                                               | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `pausedAt`                                                                                                                                                   | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `canceledAt`                                                                                                                                                 | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `collectionMode`                                                                                                                                             | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `billingDetails`                                                                                                                                             | [operations.SubscriptionUpdateSubscriptionSubscriptionsBillingDetails](../../models/operations/subscriptionupdatesubscriptionsubscriptionsbillingdetails.md) | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `currentBillingPeriod`                                                                                                                                       | [operations.SubscriptionUpdateSubscriptionCurrentBillingPeriod](../../models/operations/subscriptionupdatesubscriptioncurrentbillingperiod.md)               | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `billingCycle`                                                                                                                                               | [operations.SubscriptionUpdateSubscriptionBillingCycle](../../models/operations/subscriptionupdatesubscriptionbillingcycle.md)                               | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `scheduledChange`                                                                                                                                            | [operations.SubscriptionUpdateSubscriptionScheduledChange](../../models/operations/subscriptionupdatesubscriptionscheduledchange.md)[]                       | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `items`                                                                                                                                                      | [operations.SubscriptionUpdateSubscriptionSubscriptionsItems](../../models/operations/subscriptionupdatesubscriptionsubscriptionsitems.md)[]                 | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customData`                                                                                                                                                 | [operations.SubscriptionUpdateSubscriptionSubscriptionsCustomData](../../models/operations/subscriptionupdatesubscriptionsubscriptionscustomdata.md)         | :heavy_minus_sign:                                                                                                                                           | Any valid JSON value                                                                                                                                         |
| `managementUrls`                                                                                                                                             | [operations.SubscriptionUpdateSubscriptionManagementUrls](../../models/operations/subscriptionupdatesubscriptionmanagementurls.md)                           | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `discount`                                                                                                                                                   | [operations.SubscriptionUpdateSubscriptionDiscount](../../models/operations/subscriptionupdatesubscriptiondiscount.md)                                       | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |