# TransactionsListResponseBody

Returns the list of all Transactions

## Example Usage

```typescript
import { TransactionsListResponseBody } from "jani-payments/models/operations";

let value: TransactionsListResponseBody = {
  data: [
    {
      status: "billed",
      customerId: "<id>",
      addressId: "<id>",
      currencyCode: "XAF",
      details: {
        total: {
          subtotal: 8847.65,
          discount: 7019.78,
          grandTotal: 4896.85,
        },
      },
      items: [
        {
          price: {
            productId: "<id>",
            type: "standard",
            name: "<value>",
            billingCycle: {
              interval: "week",
              frequency: 7044.02,
            },
            trialPeriod: {
              interval: "week",
              frequency: 1039.88,
            },
            unitPrice: {
              amount: 9078.99,
              currencyCode: "RSD",
            },
            status: "archived",
            id: "<id>",
            createdAt: "1731445589567",
            updatedAt: "1737975143854",
          },
          quantity: 4834.59,
          product: {
            id: "<id>",
            name: "<value>",
            description:
              "fruitful gleaming while phooey the worthless times worldly hover nimble",
            status: "archived",
            createdAt: "1730753221632",
            updatedAt: "1737981416627",
            customData: {},
          },
        },
      ],
      payments: {
        id: "<id>",
        status: "PENDING",
        paymentMethod: "CARD",
        provider: "PAYSTACK",
        createdAt: "1735566086844",
        providerReference: "<value>",
        providerMetadata: {},
        methodDetails: {
          paymentMethod: "MOBILE_MONEY",
          details: {
            network: "<value>",
            phoneSuffix: "<value>",
          },
        },
      },
      createdAt: "1737439794046",
      customer: {
        id: "cus_2e229e50-1b92-4479-b3e3-829a3da6fc00",
        email: "brighton@gmail.com",
        name: "Brighton Mboya",
        status: "active",
        description: "First Customer to test out our MVP",
        customData: {},
        createdAt: "2024-12-30T11:04:30.475Z",
        updatedAt: "2024-12-30T11:05:42.118Z",
      },
      address: {
        id: "<id>",
        customData: {},
        status: "archived",
        createdAt: "1708781530417",
        updatedAt: "1737945363881",
      },
      invoiceId: "<id>",
    },
  ],
  meta: {
    total: 7175.6,
    perPage: 7381.52,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.TransactionsListData](../../models/operations/transactionslistdata.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `meta`                                                                               | [operations.Meta](../../models/operations/meta.md)                                   | :heavy_check_mark:                                                                   | N/A                                                                                  |