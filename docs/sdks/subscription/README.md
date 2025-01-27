# Subscription
(*subscription*)

## Overview

### Available Operations

* [pause](#pause)

## pause

### Example Usage

```typescript
import { JaniPayments } from "jani-payments";

const janiPayments = new JaniPayments({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const result = await janiPayments.subscription.pause({
    subscriptionId: "<id>",
    requestBody: {
      effectiveFrom: "next_billing_period",
      onResume: "start_new_billing_period",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { JaniPaymentsCore } from "jani-payments/core.js";
import { subscriptionPause } from "jani-payments/funcs/subscriptionPause.js";

// Use `JaniPaymentsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const janiPayments = new JaniPaymentsCore({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await subscriptionPause(janiPayments, {
    subscriptionId: "<id>",
    requestBody: {
      effectiveFrom: "next_billing_period",
      onResume: "start_new_billing_period",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SubscriptionPauseSubscriptionRequest](../../models/operations/subscriptionpausesubscriptionrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscriptionPauseSubscriptionResponseBody](../../models/operations/subscriptionpausesubscriptionresponsebody.md)\>**

### Errors

| Error Type                                                           | Status Code                                                          | Content Type                                                         |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| errors.SubscriptionPauseSubscriptionResponseBody                     | 400                                                                  | application/json                                                     |
| errors.SubscriptionPauseSubscriptionSubscriptionResponseBody         | 404                                                                  | application/json                                                     |
| errors.SubscriptionPauseSubscriptionSubscriptionResponseResponseBody | 409                                                                  | application/json                                                     |
| errors.APIError                                                      | 4XX, 5XX                                                             | \*/\*                                                                |