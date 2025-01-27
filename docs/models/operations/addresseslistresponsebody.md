# AddressesListResponseBody

## Example Usage

```typescript
import { AddressesListResponseBody } from "jani-payments/models/operations";

let value: AddressesListResponseBody = {
  id: "<id>",
  customData: {},
  status: "archived",
  createdAt: "1723701618161",
  updatedAt: "1737928400930",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `firstLine`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `customData`                                                                             | [operations.AddressesListCustomData](../../models/operations/addresseslistcustomdata.md) | :heavy_check_mark:                                                                       | Any valid JSON value                                                                     |
| `city`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [operations.AddressesListStatus](../../models/operations/addressesliststatus.md)         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `customerId`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |