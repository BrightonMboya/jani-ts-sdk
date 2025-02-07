/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AddressesGetRequest = {
  addressId: string;
  /**
   * organization_Id
   */
  organizationId: string;
};

/**
 * Any valid JSON value
 */
export type AddressesGetCustomData = {};

export const AddressesGetStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type AddressesGetStatus = ClosedEnum<typeof AddressesGetStatus>;

/**
 * Get an Address
 */
export type AddressesGetResponseBody = {
  id: string;
  description?: string | null | undefined;
  firstLine?: string | null | undefined;
  /**
   * Any valid JSON value
   */
  customData: AddressesGetCustomData;
  city?: string | null | undefined;
  status: AddressesGetStatus;
  createdAt: string;
  updatedAt: string;
  customerId?: string | null | undefined;
};

/** @internal */
export const AddressesGetRequest$inboundSchema: z.ZodType<
  AddressesGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  address_id: z.string(),
  organization_Id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "address_id": "addressId",
    "organization_Id": "organizationId",
  });
});

/** @internal */
export type AddressesGetRequest$Outbound = {
  address_id: string;
  organization_Id: string;
};

/** @internal */
export const AddressesGetRequest$outboundSchema: z.ZodType<
  AddressesGetRequest$Outbound,
  z.ZodTypeDef,
  AddressesGetRequest
> = z.object({
  addressId: z.string(),
  organizationId: z.string(),
}).transform((v) => {
  return remap$(v, {
    addressId: "address_id",
    organizationId: "organization_Id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressesGetRequest$ {
  /** @deprecated use `AddressesGetRequest$inboundSchema` instead. */
  export const inboundSchema = AddressesGetRequest$inboundSchema;
  /** @deprecated use `AddressesGetRequest$outboundSchema` instead. */
  export const outboundSchema = AddressesGetRequest$outboundSchema;
  /** @deprecated use `AddressesGetRequest$Outbound` instead. */
  export type Outbound = AddressesGetRequest$Outbound;
}

export function addressesGetRequestToJSON(
  addressesGetRequest: AddressesGetRequest,
): string {
  return JSON.stringify(
    AddressesGetRequest$outboundSchema.parse(addressesGetRequest),
  );
}

export function addressesGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<AddressesGetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddressesGetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddressesGetRequest' from JSON`,
  );
}

/** @internal */
export const AddressesGetCustomData$inboundSchema: z.ZodType<
  AddressesGetCustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AddressesGetCustomData$Outbound = {};

/** @internal */
export const AddressesGetCustomData$outboundSchema: z.ZodType<
  AddressesGetCustomData$Outbound,
  z.ZodTypeDef,
  AddressesGetCustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressesGetCustomData$ {
  /** @deprecated use `AddressesGetCustomData$inboundSchema` instead. */
  export const inboundSchema = AddressesGetCustomData$inboundSchema;
  /** @deprecated use `AddressesGetCustomData$outboundSchema` instead. */
  export const outboundSchema = AddressesGetCustomData$outboundSchema;
  /** @deprecated use `AddressesGetCustomData$Outbound` instead. */
  export type Outbound = AddressesGetCustomData$Outbound;
}

export function addressesGetCustomDataToJSON(
  addressesGetCustomData: AddressesGetCustomData,
): string {
  return JSON.stringify(
    AddressesGetCustomData$outboundSchema.parse(addressesGetCustomData),
  );
}

export function addressesGetCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<AddressesGetCustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddressesGetCustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddressesGetCustomData' from JSON`,
  );
}

/** @internal */
export const AddressesGetStatus$inboundSchema: z.ZodNativeEnum<
  typeof AddressesGetStatus
> = z.nativeEnum(AddressesGetStatus);

/** @internal */
export const AddressesGetStatus$outboundSchema: z.ZodNativeEnum<
  typeof AddressesGetStatus
> = AddressesGetStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressesGetStatus$ {
  /** @deprecated use `AddressesGetStatus$inboundSchema` instead. */
  export const inboundSchema = AddressesGetStatus$inboundSchema;
  /** @deprecated use `AddressesGetStatus$outboundSchema` instead. */
  export const outboundSchema = AddressesGetStatus$outboundSchema;
}

/** @internal */
export const AddressesGetResponseBody$inboundSchema: z.ZodType<
  AddressesGetResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  description: z.nullable(z.string()).optional(),
  first_line: z.nullable(z.string()).optional(),
  custom_data: z.lazy(() => AddressesGetCustomData$inboundSchema),
  city: z.nullable(z.string()).optional(),
  status: AddressesGetStatus$inboundSchema,
  created_at: z.string(),
  updated_at: z.string(),
  customer_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "first_line": "firstLine",
    "custom_data": "customData",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "customer_id": "customerId",
  });
});

/** @internal */
export type AddressesGetResponseBody$Outbound = {
  id: string;
  description?: string | null | undefined;
  first_line?: string | null | undefined;
  custom_data: AddressesGetCustomData$Outbound;
  city?: string | null | undefined;
  status: string;
  created_at: string;
  updated_at: string;
  customer_id?: string | null | undefined;
};

/** @internal */
export const AddressesGetResponseBody$outboundSchema: z.ZodType<
  AddressesGetResponseBody$Outbound,
  z.ZodTypeDef,
  AddressesGetResponseBody
> = z.object({
  id: z.string(),
  description: z.nullable(z.string()).optional(),
  firstLine: z.nullable(z.string()).optional(),
  customData: z.lazy(() => AddressesGetCustomData$outboundSchema),
  city: z.nullable(z.string()).optional(),
  status: AddressesGetStatus$outboundSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  customerId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    firstLine: "first_line",
    customData: "custom_data",
    createdAt: "created_at",
    updatedAt: "updated_at",
    customerId: "customer_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressesGetResponseBody$ {
  /** @deprecated use `AddressesGetResponseBody$inboundSchema` instead. */
  export const inboundSchema = AddressesGetResponseBody$inboundSchema;
  /** @deprecated use `AddressesGetResponseBody$outboundSchema` instead. */
  export const outboundSchema = AddressesGetResponseBody$outboundSchema;
  /** @deprecated use `AddressesGetResponseBody$Outbound` instead. */
  export type Outbound = AddressesGetResponseBody$Outbound;
}

export function addressesGetResponseBodyToJSON(
  addressesGetResponseBody: AddressesGetResponseBody,
): string {
  return JSON.stringify(
    AddressesGetResponseBody$outboundSchema.parse(addressesGetResponseBody),
  );
}

export function addressesGetResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<AddressesGetResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddressesGetResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddressesGetResponseBody' from JSON`,
  );
}
