# TransactionsGetItems

## Example Usage

```typescript
import { TransactionsGetItems } from "jani-payments/models/operations";

let value: TransactionsGetItems = {
  price: {
    productId: "<id>",
    type: "custom",
    name: "<value>",
    billingCycle: {
      interval: "month",
      frequency: 3490.87,
    },
    trialPeriod: {
      interval: "day",
      frequency: 4131.35,
    },
    unitPrice: {
      amount: 5228.24,
      currencyCode: "ARS",
    },
    status: "active",
    id: "<id>",
    createdAt: "1725380760420",
    updatedAt: "1737922384938",
  },
  quantity: 8373.27,
  product: {
    id: "<id>",
    name: "<value>",
    description: "hence optimistically militate rusty so",
    status: "archived",
    createdAt: "1714928625428",
    updatedAt: "1737914156386",
    customData: {},
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `price`                                                                                | [operations.TransactionsGetPrice](../../models/operations/transactionsgetprice.md)     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `quantity`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `product`                                                                              | [operations.TransactionsGetProduct](../../models/operations/transactionsgetproduct.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |