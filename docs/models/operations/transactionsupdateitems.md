# TransactionsUpdateItems

## Example Usage

```typescript
import { TransactionsUpdateItems } from "jani-payments/models/operations";

let value: TransactionsUpdateItems = {
  price: {
    productId: "<id>",
    type: "custom",
    name: "<value>",
    billingCycle: {
      interval: "year",
      frequency: 2172.75,
    },
    trialPeriod: {
      interval: "day",
      frequency: 7240.73,
    },
    unitPrice: {
      amount: 2033.96,
      currencyCode: "CLP",
    },
    status: "active",
    id: "<id>",
    createdAt: "1732212741962",
    updatedAt: "1737949560540",
  },
  quantity: 458.5,
  product: {
    id: "<id>",
    name: "<value>",
    description: "per beside sweet majority wonderfully bah",
    status: "archived",
    createdAt: "1710066997522",
    updatedAt: "1737949619829",
    customData: {},
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `price`                                                                                      | [operations.TransactionsUpdatePrice](../../models/operations/transactionsupdateprice.md)     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `quantity`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `product`                                                                                    | [operations.TransactionsUpdateProduct](../../models/operations/transactionsupdateproduct.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |