# Subscriptions
(*subscriptions*)

## Overview

### Available Operations

* [create](#create)
* [list](#list)
* [cancel](#cancel)
* [resume](#resume)
* [activate](#activate)
* [update](#update)

## create

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
  const result = await janiPayments.subscriptions.create({
    status: "past_due",
    currencyCode: "NZD",
    customerId: "<id>",
    addressId: "<id>",
    items: [
      {
        priceId: "<id>",
        quantity: "<value>",
      },
    ],
    billingDetails: {
      paymentTerms: {
        paymentInterval: "day",
        paymentFrequency: 690.25,
      },
      enableCheckout: false,
      additionalInformation: "<value>",
      purchaseOrderNumber: "<value>",
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
import { subscriptionsCreate } from "jani-payments/funcs/subscriptionsCreate.js";

// Use `JaniPaymentsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const janiPayments = new JaniPaymentsCore({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await subscriptionsCreate(janiPayments, {
    status: "past_due",
    currencyCode: "NZD",
    customerId: "<id>",
    addressId: "<id>",
    items: [
      {
        priceId: "<id>",
        quantity: "<value>",
      },
    ],
    billingDetails: {
      paymentTerms: {
        paymentInterval: "day",
        paymentFrequency: 690.25,
      },
      enableCheckout: false,
      additionalInformation: "<value>",
      purchaseOrderNumber: "<value>",
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
| `request`                                                                                                                                                                      | [operations.SubscriptionCreateRequestBody](../../models/operations/subscriptioncreaterequestbody.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscriptionCreateResponseBody](../../models/operations/subscriptioncreateresponsebody.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.SubscriptionCreateResponseBody | 400                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## list

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
  const result = await janiPayments.subscriptions.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { JaniPaymentsCore } from "jani-payments/core.js";
import { subscriptionsList } from "jani-payments/funcs/subscriptionsList.js";

// Use `JaniPaymentsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const janiPayments = new JaniPaymentsCore({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await subscriptionsList(janiPayments);

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscriptionListResponseBody[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## cancel

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
  const result = await janiPayments.subscriptions.cancel({
    subscriptionId: "<id>",
    requestBody: {
      effectiveFrom: "next_billing_period",
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
import { subscriptionsCancel } from "jani-payments/funcs/subscriptionsCancel.js";

// Use `JaniPaymentsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const janiPayments = new JaniPaymentsCore({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await subscriptionsCancel(janiPayments, {
    subscriptionId: "<id>",
    requestBody: {
      effectiveFrom: "next_billing_period",
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
| `request`                                                                                                                                                                      | [operations.SubscriptionCancelSubscriptionRequest](../../models/operations/subscriptioncancelsubscriptionrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscriptionCancelSubscriptionResponseBody](../../models/operations/subscriptioncancelsubscriptionresponsebody.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.SubscriptionCancelSubscriptionResponseBody              | 400                                                            | application/json                                               |
| errors.SubscriptionCancelSubscriptionSubscriptionsResponseBody | 404                                                            | application/json                                               |
| errors.APIError                                                | 4XX, 5XX                                                       | \*/\*                                                          |

## resume

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
  const result = await janiPayments.subscriptions.resume({
    subscriptionId: "<id>",
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
import { subscriptionsResume } from "jani-payments/funcs/subscriptionsResume.js";

// Use `JaniPaymentsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const janiPayments = new JaniPaymentsCore({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await subscriptionsResume(janiPayments, {
    subscriptionId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.SubscriptionResumeSubscriptionRequest](../../models/operations/subscriptionresumesubscriptionrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscriptionResumeSubscriptionResponseBody](../../models/operations/subscriptionresumesubscriptionresponsebody.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.SubscriptionResumeSubscriptionResponseBody              | 400                                                            | application/json                                               |
| errors.SubscriptionResumeSubscriptionSubscriptionsResponseBody | 404                                                            | application/json                                               |
| errors.APIError                                                | 4XX, 5XX                                                       | \*/\*                                                          |

## activate

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
  const result = await janiPayments.subscriptions.activate({
    subscriptionId: "<id>",
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
import { subscriptionsActivate } from "jani-payments/funcs/subscriptionsActivate.js";

// Use `JaniPaymentsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const janiPayments = new JaniPaymentsCore({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await subscriptionsActivate(janiPayments, {
    subscriptionId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.SubscriptionActivateSubscriptionRequest](../../models/operations/subscriptionactivatesubscriptionrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscriptionActivateSubscriptionResponseBody](../../models/operations/subscriptionactivatesubscriptionresponsebody.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.SubscriptionActivateSubscriptionResponseBody              | 400                                                              | application/json                                                 |
| errors.SubscriptionActivateSubscriptionSubscriptionsResponseBody | 404                                                              | application/json                                                 |
| errors.APIError                                                  | 4XX, 5XX                                                         | \*/\*                                                            |

## update

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
  const result = await janiPayments.subscriptions.update({
    subscriptionId: "<id>",
    requestBody: {
      billingDetails: {},
      items: [
        {
          priceId: "<id>",
        },
        {
          priceId: "<id>",
        },
        {
          priceId: "<id>",
        },
      ],
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
import { subscriptionsUpdate } from "jani-payments/funcs/subscriptionsUpdate.js";

// Use `JaniPaymentsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const janiPayments = new JaniPaymentsCore({
  security: {
    bearer: process.env["JANIPAYMENTS_BEARER"] ?? "",
    organizationId: process.env["JANIPAYMENTS_ORGANIZATION_ID"] ?? "",
  },
});

async function run() {
  const res = await subscriptionsUpdate(janiPayments, {
    subscriptionId: "<id>",
    requestBody: {
      billingDetails: {},
      items: [
        {
          priceId: "<id>",
        },
        {
          priceId: "<id>",
        },
        {
          priceId: "<id>",
        },
      ],
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
| `request`                                                                                                                                                                      | [operations.SubscriptionUpdateSubscriptionRequest](../../models/operations/subscriptionupdatesubscriptionrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscriptionUpdateSubscriptionResponseBody](../../models/operations/subscriptionupdatesubscriptionresponsebody.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.SubscriptionUpdateSubscriptionResponseBody              | 400                                                            | application/json                                               |
| errors.SubscriptionUpdateSubscriptionSubscriptionsResponseBody | 404                                                            | application/json                                               |
| errors.APIError                                                | 4XX, 5XX                                                       | \*/\*                                                          |