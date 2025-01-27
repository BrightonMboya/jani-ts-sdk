/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DiscountGetDiscountRequest = {
  discountId: string;
};

export const DiscountGetDiscountStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type DiscountGetDiscountStatus = ClosedEnum<
  typeof DiscountGetDiscountStatus
>;

export const DiscountGetDiscountType = {
  Flat: "flat",
  Percentage: "percentage",
  FlatPerSeat: "flat_per_seat",
} as const;
export type DiscountGetDiscountType = ClosedEnum<
  typeof DiscountGetDiscountType
>;

/**
 * Any valid JSON value
 */
export type DiscountGetDiscountCustomData = {};

/**
 * Returns a Discount by ID
 */
export type DiscountGetDiscountResponseBody = {
  id: string;
  status: DiscountGetDiscountStatus;
  description?: string | null | undefined;
  enabledForCheckout?: boolean | null | undefined;
  amount: number;
  currencyCode: string;
  type: DiscountGetDiscountType;
  recur?: boolean | null | undefined;
  maxRecurringIntervals?: number | null | undefined;
  usageLimit?: number | null | undefined;
  expiresAt?: string | null | undefined;
  /**
   * Any valid JSON value
   */
  customData: DiscountGetDiscountCustomData;
  timesUsed?: number | null | undefined;
  createdAt: string;
  updatedAt: string;
  restrictedTo: Array<string>;
};

/** @internal */
export const DiscountGetDiscountRequest$inboundSchema: z.ZodType<
  DiscountGetDiscountRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  discount_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "discount_id": "discountId",
  });
});

/** @internal */
export type DiscountGetDiscountRequest$Outbound = {
  discount_id: string;
};

/** @internal */
export const DiscountGetDiscountRequest$outboundSchema: z.ZodType<
  DiscountGetDiscountRequest$Outbound,
  z.ZodTypeDef,
  DiscountGetDiscountRequest
> = z.object({
  discountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    discountId: "discount_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountGetDiscountRequest$ {
  /** @deprecated use `DiscountGetDiscountRequest$inboundSchema` instead. */
  export const inboundSchema = DiscountGetDiscountRequest$inboundSchema;
  /** @deprecated use `DiscountGetDiscountRequest$outboundSchema` instead. */
  export const outboundSchema = DiscountGetDiscountRequest$outboundSchema;
  /** @deprecated use `DiscountGetDiscountRequest$Outbound` instead. */
  export type Outbound = DiscountGetDiscountRequest$Outbound;
}

export function discountGetDiscountRequestToJSON(
  discountGetDiscountRequest: DiscountGetDiscountRequest,
): string {
  return JSON.stringify(
    DiscountGetDiscountRequest$outboundSchema.parse(discountGetDiscountRequest),
  );
}

export function discountGetDiscountRequestFromJSON(
  jsonString: string,
): SafeParseResult<DiscountGetDiscountRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DiscountGetDiscountRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DiscountGetDiscountRequest' from JSON`,
  );
}

/** @internal */
export const DiscountGetDiscountStatus$inboundSchema: z.ZodNativeEnum<
  typeof DiscountGetDiscountStatus
> = z.nativeEnum(DiscountGetDiscountStatus);

/** @internal */
export const DiscountGetDiscountStatus$outboundSchema: z.ZodNativeEnum<
  typeof DiscountGetDiscountStatus
> = DiscountGetDiscountStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountGetDiscountStatus$ {
  /** @deprecated use `DiscountGetDiscountStatus$inboundSchema` instead. */
  export const inboundSchema = DiscountGetDiscountStatus$inboundSchema;
  /** @deprecated use `DiscountGetDiscountStatus$outboundSchema` instead. */
  export const outboundSchema = DiscountGetDiscountStatus$outboundSchema;
}

/** @internal */
export const DiscountGetDiscountType$inboundSchema: z.ZodNativeEnum<
  typeof DiscountGetDiscountType
> = z.nativeEnum(DiscountGetDiscountType);

/** @internal */
export const DiscountGetDiscountType$outboundSchema: z.ZodNativeEnum<
  typeof DiscountGetDiscountType
> = DiscountGetDiscountType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountGetDiscountType$ {
  /** @deprecated use `DiscountGetDiscountType$inboundSchema` instead. */
  export const inboundSchema = DiscountGetDiscountType$inboundSchema;
  /** @deprecated use `DiscountGetDiscountType$outboundSchema` instead. */
  export const outboundSchema = DiscountGetDiscountType$outboundSchema;
}

/** @internal */
export const DiscountGetDiscountCustomData$inboundSchema: z.ZodType<
  DiscountGetDiscountCustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type DiscountGetDiscountCustomData$Outbound = {};

/** @internal */
export const DiscountGetDiscountCustomData$outboundSchema: z.ZodType<
  DiscountGetDiscountCustomData$Outbound,
  z.ZodTypeDef,
  DiscountGetDiscountCustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountGetDiscountCustomData$ {
  /** @deprecated use `DiscountGetDiscountCustomData$inboundSchema` instead. */
  export const inboundSchema = DiscountGetDiscountCustomData$inboundSchema;
  /** @deprecated use `DiscountGetDiscountCustomData$outboundSchema` instead. */
  export const outboundSchema = DiscountGetDiscountCustomData$outboundSchema;
  /** @deprecated use `DiscountGetDiscountCustomData$Outbound` instead. */
  export type Outbound = DiscountGetDiscountCustomData$Outbound;
}

export function discountGetDiscountCustomDataToJSON(
  discountGetDiscountCustomData: DiscountGetDiscountCustomData,
): string {
  return JSON.stringify(
    DiscountGetDiscountCustomData$outboundSchema.parse(
      discountGetDiscountCustomData,
    ),
  );
}

export function discountGetDiscountCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<DiscountGetDiscountCustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DiscountGetDiscountCustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DiscountGetDiscountCustomData' from JSON`,
  );
}

/** @internal */
export const DiscountGetDiscountResponseBody$inboundSchema: z.ZodType<
  DiscountGetDiscountResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  status: DiscountGetDiscountStatus$inboundSchema,
  description: z.nullable(z.string()).optional(),
  enabled_for_checkout: z.nullable(z.boolean()).optional(),
  amount: z.number(),
  currency_code: z.string(),
  type: DiscountGetDiscountType$inboundSchema,
  recur: z.nullable(z.boolean()).optional(),
  max_recurring_intervals: z.nullable(z.number()).optional(),
  usage_limit: z.nullable(z.number().int()).optional(),
  expires_at: z.nullable(z.string()).optional(),
  custom_data: z.lazy(() => DiscountGetDiscountCustomData$inboundSchema),
  times_used: z.nullable(z.number().int()).optional(),
  created_at: z.string(),
  updated_at: z.string(),
  restricted_to: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "enabled_for_checkout": "enabledForCheckout",
    "currency_code": "currencyCode",
    "max_recurring_intervals": "maxRecurringIntervals",
    "usage_limit": "usageLimit",
    "expires_at": "expiresAt",
    "custom_data": "customData",
    "times_used": "timesUsed",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "restricted_to": "restrictedTo",
  });
});

/** @internal */
export type DiscountGetDiscountResponseBody$Outbound = {
  id: string;
  status: string;
  description?: string | null | undefined;
  enabled_for_checkout?: boolean | null | undefined;
  amount: number;
  currency_code: string;
  type: string;
  recur?: boolean | null | undefined;
  max_recurring_intervals?: number | null | undefined;
  usage_limit?: number | null | undefined;
  expires_at?: string | null | undefined;
  custom_data: DiscountGetDiscountCustomData$Outbound;
  times_used?: number | null | undefined;
  created_at: string;
  updated_at: string;
  restricted_to: Array<string>;
};

/** @internal */
export const DiscountGetDiscountResponseBody$outboundSchema: z.ZodType<
  DiscountGetDiscountResponseBody$Outbound,
  z.ZodTypeDef,
  DiscountGetDiscountResponseBody
> = z.object({
  id: z.string(),
  status: DiscountGetDiscountStatus$outboundSchema,
  description: z.nullable(z.string()).optional(),
  enabledForCheckout: z.nullable(z.boolean()).optional(),
  amount: z.number(),
  currencyCode: z.string(),
  type: DiscountGetDiscountType$outboundSchema,
  recur: z.nullable(z.boolean()).optional(),
  maxRecurringIntervals: z.nullable(z.number()).optional(),
  usageLimit: z.nullable(z.number().int()).optional(),
  expiresAt: z.nullable(z.string()).optional(),
  customData: z.lazy(() => DiscountGetDiscountCustomData$outboundSchema),
  timesUsed: z.nullable(z.number().int()).optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  restrictedTo: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    enabledForCheckout: "enabled_for_checkout",
    currencyCode: "currency_code",
    maxRecurringIntervals: "max_recurring_intervals",
    usageLimit: "usage_limit",
    expiresAt: "expires_at",
    customData: "custom_data",
    timesUsed: "times_used",
    createdAt: "created_at",
    updatedAt: "updated_at",
    restrictedTo: "restricted_to",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountGetDiscountResponseBody$ {
  /** @deprecated use `DiscountGetDiscountResponseBody$inboundSchema` instead. */
  export const inboundSchema = DiscountGetDiscountResponseBody$inboundSchema;
  /** @deprecated use `DiscountGetDiscountResponseBody$outboundSchema` instead. */
  export const outboundSchema = DiscountGetDiscountResponseBody$outboundSchema;
  /** @deprecated use `DiscountGetDiscountResponseBody$Outbound` instead. */
  export type Outbound = DiscountGetDiscountResponseBody$Outbound;
}

export function discountGetDiscountResponseBodyToJSON(
  discountGetDiscountResponseBody: DiscountGetDiscountResponseBody,
): string {
  return JSON.stringify(
    DiscountGetDiscountResponseBody$outboundSchema.parse(
      discountGetDiscountResponseBody,
    ),
  );
}

export function discountGetDiscountResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DiscountGetDiscountResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DiscountGetDiscountResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DiscountGetDiscountResponseBody' from JSON`,
  );
}
