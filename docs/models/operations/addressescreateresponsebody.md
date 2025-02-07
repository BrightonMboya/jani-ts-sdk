# AddressesCreateResponseBody

Creates a new Address

## Example Usage

```typescript
import { AddressesCreateResponseBody } from "jani-payments/models/operations";

let value: AddressesCreateResponseBody = {
  id: "<id>",
  customData: {},
  status: "active",
  createdAt: "1721763578497",
  updatedAt: "1738884999903",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `firstLine`                                                                                                    | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `customData`                                                                                                   | [operations.AddressesCreateAddressesCustomData](../../models/operations/addressescreateaddressescustomdata.md) | :heavy_check_mark:                                                                                             | Any valid JSON value                                                                                           |
| `city`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `status`                                                                                                       | [operations.AddressesCreateAddressesStatus](../../models/operations/addressescreateaddressesstatus.md)         | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `customerId`                                                                                                   | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |