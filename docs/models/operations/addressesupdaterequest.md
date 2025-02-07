# AddressesUpdateRequest

## Example Usage

```typescript
import { AddressesUpdateRequest } from "jani-payments/models/operations";

let value: AddressesUpdateRequest = {
  customerId: "<id>",
  addressId: "<id>",
  organizationId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `customerId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `addressId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `organizationId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | organization_Id                                                                                |
| `requestBody`                                                                                  | [operations.AddressesUpdateRequestBody](../../models/operations/addressesupdaterequestbody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |