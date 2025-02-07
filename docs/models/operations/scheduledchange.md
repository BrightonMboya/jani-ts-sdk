# ScheduledChange

## Example Usage

```typescript
import { ScheduledChange } from "jani-payments/models/operations";

let value: ScheduledChange = {
  id: "<id>",
  subscriptionId: "<id>",
  action: "pause",
  effectiveAt: "<value>",
  status: "completed",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `subscriptionId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `action`                                                                                                             | [operations.Action](../../models/operations/action.md)                                                               | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `effectiveAt`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `resumesAt`                                                                                                          | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `status`                                                                                                             | [operations.SubscriptionCreateSubscriptionsStatus](../../models/operations/subscriptioncreatesubscriptionsstatus.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |