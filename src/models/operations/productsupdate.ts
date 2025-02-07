/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ProductsUpdateStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type ProductsUpdateStatus = ClosedEnum<typeof ProductsUpdateStatus>;

/**
 * Any valid JSON value
 */
export type ProductsUpdateCustomData = {};

export type ProductsUpdateRequestBody = {
  name?: string | undefined;
  description?: string | undefined;
  status?: ProductsUpdateStatus | undefined;
  /**
   * Any valid JSON value
   */
  customData?: ProductsUpdateCustomData | undefined;
};

export type ProductsUpdateRequest = {
  productId: string;
  requestBody: ProductsUpdateRequestBody;
};

export const ProductsUpdateProductsStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type ProductsUpdateProductsStatus = ClosedEnum<
  typeof ProductsUpdateProductsStatus
>;

/**
 * Any valid JSON value
 */
export type ProductsUpdateProductsCustomData = {};

/**
 * Returns the updated Product
 */
export type ProductsUpdateResponseBody = {
  id: string;
  name: string;
  description: string;
  status: ProductsUpdateProductsStatus;
  createdAt: string;
  updatedAt: string;
  /**
   * Any valid JSON value
   */
  customData: ProductsUpdateProductsCustomData;
};

/** @internal */
export const ProductsUpdateStatus$inboundSchema: z.ZodNativeEnum<
  typeof ProductsUpdateStatus
> = z.nativeEnum(ProductsUpdateStatus);

/** @internal */
export const ProductsUpdateStatus$outboundSchema: z.ZodNativeEnum<
  typeof ProductsUpdateStatus
> = ProductsUpdateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsUpdateStatus$ {
  /** @deprecated use `ProductsUpdateStatus$inboundSchema` instead. */
  export const inboundSchema = ProductsUpdateStatus$inboundSchema;
  /** @deprecated use `ProductsUpdateStatus$outboundSchema` instead. */
  export const outboundSchema = ProductsUpdateStatus$outboundSchema;
}

/** @internal */
export const ProductsUpdateCustomData$inboundSchema: z.ZodType<
  ProductsUpdateCustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ProductsUpdateCustomData$Outbound = {};

/** @internal */
export const ProductsUpdateCustomData$outboundSchema: z.ZodType<
  ProductsUpdateCustomData$Outbound,
  z.ZodTypeDef,
  ProductsUpdateCustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsUpdateCustomData$ {
  /** @deprecated use `ProductsUpdateCustomData$inboundSchema` instead. */
  export const inboundSchema = ProductsUpdateCustomData$inboundSchema;
  /** @deprecated use `ProductsUpdateCustomData$outboundSchema` instead. */
  export const outboundSchema = ProductsUpdateCustomData$outboundSchema;
  /** @deprecated use `ProductsUpdateCustomData$Outbound` instead. */
  export type Outbound = ProductsUpdateCustomData$Outbound;
}

export function productsUpdateCustomDataToJSON(
  productsUpdateCustomData: ProductsUpdateCustomData,
): string {
  return JSON.stringify(
    ProductsUpdateCustomData$outboundSchema.parse(productsUpdateCustomData),
  );
}

export function productsUpdateCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<ProductsUpdateCustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductsUpdateCustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductsUpdateCustomData' from JSON`,
  );
}

/** @internal */
export const ProductsUpdateRequestBody$inboundSchema: z.ZodType<
  ProductsUpdateRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  status: ProductsUpdateStatus$inboundSchema.optional(),
  custom_data: z.lazy(() => ProductsUpdateCustomData$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_data": "customData",
  });
});

/** @internal */
export type ProductsUpdateRequestBody$Outbound = {
  name?: string | undefined;
  description?: string | undefined;
  status?: string | undefined;
  custom_data?: ProductsUpdateCustomData$Outbound | undefined;
};

/** @internal */
export const ProductsUpdateRequestBody$outboundSchema: z.ZodType<
  ProductsUpdateRequestBody$Outbound,
  z.ZodTypeDef,
  ProductsUpdateRequestBody
> = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  status: ProductsUpdateStatus$outboundSchema.optional(),
  customData: z.lazy(() => ProductsUpdateCustomData$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    customData: "custom_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsUpdateRequestBody$ {
  /** @deprecated use `ProductsUpdateRequestBody$inboundSchema` instead. */
  export const inboundSchema = ProductsUpdateRequestBody$inboundSchema;
  /** @deprecated use `ProductsUpdateRequestBody$outboundSchema` instead. */
  export const outboundSchema = ProductsUpdateRequestBody$outboundSchema;
  /** @deprecated use `ProductsUpdateRequestBody$Outbound` instead. */
  export type Outbound = ProductsUpdateRequestBody$Outbound;
}

export function productsUpdateRequestBodyToJSON(
  productsUpdateRequestBody: ProductsUpdateRequestBody,
): string {
  return JSON.stringify(
    ProductsUpdateRequestBody$outboundSchema.parse(productsUpdateRequestBody),
  );
}

export function productsUpdateRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<ProductsUpdateRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductsUpdateRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductsUpdateRequestBody' from JSON`,
  );
}

/** @internal */
export const ProductsUpdateRequest$inboundSchema: z.ZodType<
  ProductsUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  product_id: z.string(),
  RequestBody: z.lazy(() => ProductsUpdateRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "product_id": "productId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type ProductsUpdateRequest$Outbound = {
  product_id: string;
  RequestBody: ProductsUpdateRequestBody$Outbound;
};

/** @internal */
export const ProductsUpdateRequest$outboundSchema: z.ZodType<
  ProductsUpdateRequest$Outbound,
  z.ZodTypeDef,
  ProductsUpdateRequest
> = z.object({
  productId: z.string(),
  requestBody: z.lazy(() => ProductsUpdateRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    productId: "product_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsUpdateRequest$ {
  /** @deprecated use `ProductsUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = ProductsUpdateRequest$inboundSchema;
  /** @deprecated use `ProductsUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = ProductsUpdateRequest$outboundSchema;
  /** @deprecated use `ProductsUpdateRequest$Outbound` instead. */
  export type Outbound = ProductsUpdateRequest$Outbound;
}

export function productsUpdateRequestToJSON(
  productsUpdateRequest: ProductsUpdateRequest,
): string {
  return JSON.stringify(
    ProductsUpdateRequest$outboundSchema.parse(productsUpdateRequest),
  );
}

export function productsUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<ProductsUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductsUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductsUpdateRequest' from JSON`,
  );
}

/** @internal */
export const ProductsUpdateProductsStatus$inboundSchema: z.ZodNativeEnum<
  typeof ProductsUpdateProductsStatus
> = z.nativeEnum(ProductsUpdateProductsStatus);

/** @internal */
export const ProductsUpdateProductsStatus$outboundSchema: z.ZodNativeEnum<
  typeof ProductsUpdateProductsStatus
> = ProductsUpdateProductsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsUpdateProductsStatus$ {
  /** @deprecated use `ProductsUpdateProductsStatus$inboundSchema` instead. */
  export const inboundSchema = ProductsUpdateProductsStatus$inboundSchema;
  /** @deprecated use `ProductsUpdateProductsStatus$outboundSchema` instead. */
  export const outboundSchema = ProductsUpdateProductsStatus$outboundSchema;
}

/** @internal */
export const ProductsUpdateProductsCustomData$inboundSchema: z.ZodType<
  ProductsUpdateProductsCustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ProductsUpdateProductsCustomData$Outbound = {};

/** @internal */
export const ProductsUpdateProductsCustomData$outboundSchema: z.ZodType<
  ProductsUpdateProductsCustomData$Outbound,
  z.ZodTypeDef,
  ProductsUpdateProductsCustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsUpdateProductsCustomData$ {
  /** @deprecated use `ProductsUpdateProductsCustomData$inboundSchema` instead. */
  export const inboundSchema = ProductsUpdateProductsCustomData$inboundSchema;
  /** @deprecated use `ProductsUpdateProductsCustomData$outboundSchema` instead. */
  export const outboundSchema = ProductsUpdateProductsCustomData$outboundSchema;
  /** @deprecated use `ProductsUpdateProductsCustomData$Outbound` instead. */
  export type Outbound = ProductsUpdateProductsCustomData$Outbound;
}

export function productsUpdateProductsCustomDataToJSON(
  productsUpdateProductsCustomData: ProductsUpdateProductsCustomData,
): string {
  return JSON.stringify(
    ProductsUpdateProductsCustomData$outboundSchema.parse(
      productsUpdateProductsCustomData,
    ),
  );
}

export function productsUpdateProductsCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<ProductsUpdateProductsCustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductsUpdateProductsCustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductsUpdateProductsCustomData' from JSON`,
  );
}

/** @internal */
export const ProductsUpdateResponseBody$inboundSchema: z.ZodType<
  ProductsUpdateResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: ProductsUpdateProductsStatus$inboundSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  custom_data: z.lazy(() => ProductsUpdateProductsCustomData$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "custom_data": "customData",
  });
});

/** @internal */
export type ProductsUpdateResponseBody$Outbound = {
  id: string;
  name: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  custom_data: ProductsUpdateProductsCustomData$Outbound;
};

/** @internal */
export const ProductsUpdateResponseBody$outboundSchema: z.ZodType<
  ProductsUpdateResponseBody$Outbound,
  z.ZodTypeDef,
  ProductsUpdateResponseBody
> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: ProductsUpdateProductsStatus$outboundSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  customData: z.lazy(() => ProductsUpdateProductsCustomData$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    customData: "custom_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsUpdateResponseBody$ {
  /** @deprecated use `ProductsUpdateResponseBody$inboundSchema` instead. */
  export const inboundSchema = ProductsUpdateResponseBody$inboundSchema;
  /** @deprecated use `ProductsUpdateResponseBody$outboundSchema` instead. */
  export const outboundSchema = ProductsUpdateResponseBody$outboundSchema;
  /** @deprecated use `ProductsUpdateResponseBody$Outbound` instead. */
  export type Outbound = ProductsUpdateResponseBody$Outbound;
}

export function productsUpdateResponseBodyToJSON(
  productsUpdateResponseBody: ProductsUpdateResponseBody,
): string {
  return JSON.stringify(
    ProductsUpdateResponseBody$outboundSchema.parse(productsUpdateResponseBody),
  );
}

export function productsUpdateResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ProductsUpdateResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductsUpdateResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductsUpdateResponseBody' from JSON`,
  );
}
