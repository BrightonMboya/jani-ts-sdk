# AddressesCreateRequest

## Example Usage

```typescript
import { AddressesCreateRequest } from "jani-payments/models/operations";

let value: AddressesCreateRequest = {
  customerId: "<id>",
  organizationId: "<id>",
  requestBody: {
    status: "active",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `customerId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `organizationId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | organization_Id                                                                                |
| `requestBody`                                                                                  | [operations.AddressesCreateRequestBody](../../models/operations/addressescreaterequestbody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |