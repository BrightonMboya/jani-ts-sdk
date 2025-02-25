# TransactionsCreateTransactionsItems

## Example Usage

```typescript
import { TransactionsCreateTransactionsItems } from "jani-payments/models/operations";

let value: TransactionsCreateTransactionsItems = {
  price: {
    productId: "<id>",
    type: "standard",
    name: "<value>",
    billingCycle: {
      interval: "day",
      frequency: 2737.32,
    },
    trialPeriod: {
      interval: "week",
      frequency: 6383.63,
    },
    unitPrice: {
      amount: 1017.7,
      currencyCode: "PHP",
    },
    status: "archived",
    id: "<id>",
    createdAt: "1713244721489",
    updatedAt: "1738886159850",
  },
  quantity: 5199.85,
  product: {
    id: "<id>",
    name: "<value>",
    description: "far exalted marten save above hourly",
    status: "active",
    createdAt: "1732723324173",
    updatedAt: "1738916601719",
    customData: {},
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `price`                                                  | [operations.Price](../../models/operations/price.md)     | :heavy_check_mark:                                       | N/A                                                      |
| `quantity`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `product`                                                | [operations.Product](../../models/operations/product.md) | :heavy_check_mark:                                       | N/A                                                      |