# SubscriptionListData

## Example Usage

```typescript
import { SubscriptionListData } from "jani-payments/models/operations";

let value: SubscriptionListData = {
  id: "<id>",
  status: "<value>",
  customerId: "<id>",
  addressId: "<id>",
  currencyCode: "AZN",
  createdAt: "1722242192762",
  updatedAt: "1738860300348",
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
    frequency: 457059,
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
      status: "trialing",
      priceId: "<id>",
      quantity: 117315,
      id: "<id>",
      subscriptionId: "<id>",
      recurring: false,
      createdAt: "1715954897629",
      updatedAt: "1738885179697",
      previouslyBilledAt: "<value>",
      nextBilledAt: "<value>",
      trialStartedAt: "<value>",
      trialEndedAt: "<value>",
      price: {
        productId: "<id>",
        type: "standard",
        name: "<value>",
        billingCycle: {
          interval: "month",
          frequency: 3447.18,
        },
        trialPeriod: {
          interval: "month",
          frequency: 6391.87,
        },
        unitPrice: {
          amount: 3991.61,
          currencyCode: "KES",
        },
        status: "archived",
        id: "<id>",
        createdAt: "1709609542847",
        updatedAt: "1738921347529",
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `status`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `customerId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `addressId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `currencyCode`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `startedAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `firstBilledAt`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `nextBilledAt`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `pausedAt`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `canceledAt`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `collectionMode`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `billingDetails`                                                                                                   | [operations.SubscriptionListBillingDetails](../../models/operations/subscriptionlistbillingdetails.md)             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `currentBillingPeriod`                                                                                             | [operations.SubscriptionListCurrentBillingPeriod](../../models/operations/subscriptionlistcurrentbillingperiod.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `billingCycle`                                                                                                     | [operations.SubscriptionListBillingCycle](../../models/operations/subscriptionlistbillingcycle.md)                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `scheduledChange`                                                                                                  | [operations.SubscriptionListScheduledChange](../../models/operations/subscriptionlistscheduledchange.md)[]         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `items`                                                                                                            | [operations.SubscriptionListItems](../../models/operations/subscriptionlistitems.md)[]                             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `customData`                                                                                                       | [operations.SubscriptionListCustomData](../../models/operations/subscriptionlistcustomdata.md)                     | :heavy_minus_sign:                                                                                                 | Any valid JSON value                                                                                               |
| `managementUrls`                                                                                                   | [operations.SubscriptionListManagementUrls](../../models/operations/subscriptionlistmanagementurls.md)             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `discount`                                                                                                         | [operations.SubscriptionListDiscount](../../models/operations/subscriptionlistdiscount.md)                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |