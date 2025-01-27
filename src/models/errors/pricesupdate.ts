/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Invalid Price Id
 */
export type PricesUpdateResponseBodyData = {
  message: string;
  error: string;
};

/**
 * Invalid Price Id
 */
export class PricesUpdateResponseBody extends Error {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: PricesUpdateResponseBodyData;

  constructor(err: PricesUpdateResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "PricesUpdateResponseBody";
  }
}

/** @internal */
export const PricesUpdateResponseBody$inboundSchema: z.ZodType<
  PricesUpdateResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  error: z.string(),
})
  .transform((v) => {
    return new PricesUpdateResponseBody(v);
  });

/** @internal */
export type PricesUpdateResponseBody$Outbound = {
  message: string;
  error: string;
};

/** @internal */
export const PricesUpdateResponseBody$outboundSchema: z.ZodType<
  PricesUpdateResponseBody$Outbound,
  z.ZodTypeDef,
  PricesUpdateResponseBody
> = z.instanceof(PricesUpdateResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesUpdateResponseBody$ {
  /** @deprecated use `PricesUpdateResponseBody$inboundSchema` instead. */
  export const inboundSchema = PricesUpdateResponseBody$inboundSchema;
  /** @deprecated use `PricesUpdateResponseBody$outboundSchema` instead. */
  export const outboundSchema = PricesUpdateResponseBody$outboundSchema;
  /** @deprecated use `PricesUpdateResponseBody$Outbound` instead. */
  export type Outbound = PricesUpdateResponseBody$Outbound;
}
