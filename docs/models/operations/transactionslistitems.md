# TransactionsListItems

## Example Usage

```typescript
import { TransactionsListItems } from "jani-payments/models/operations";

let value: TransactionsListItems = {
  price: {
    productId: "<id>",
    type: "custom",
    name: "<value>",
    billingCycle: {
      interval: "week",
      frequency: 7581.94,
    },
    trialPeriod: {
      interval: "week",
      frequency: 5736.1,
    },
    unitPrice: {
      amount: 9550.47,
      currencyCode: "LSL",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1717779542951",
    updatedAt: "1737981354017",
  },
  quantity: 6386.09,
  product: {
    id: "<id>",
    name: "<value>",
    description: "essay gently underpants yak tune judgementally",
    status: "active",
    createdAt: "1732374618389",
    updatedAt: "1737965182529",
    customData: {},
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `price`                                                                                  | [operations.TransactionsListPrice](../../models/operations/transactionslistprice.md)     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `quantity`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `product`                                                                                | [operations.TransactionsListProduct](../../models/operations/transactionslistproduct.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |