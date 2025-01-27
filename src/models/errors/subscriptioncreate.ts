/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Invalid input
 */
export type SubscriptionCreateResponseBodyData = {
  message: string;
  error: string;
};

/**
 * Invalid input
 */
export class SubscriptionCreateResponseBody extends Error {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: SubscriptionCreateResponseBodyData;

  constructor(err: SubscriptionCreateResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "SubscriptionCreateResponseBody";
  }
}

/** @internal */
export const SubscriptionCreateResponseBody$inboundSchema: z.ZodType<
  SubscriptionCreateResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  error: z.string(),
})
  .transform((v) => {
    return new SubscriptionCreateResponseBody(v);
  });

/** @internal */
export type SubscriptionCreateResponseBody$Outbound = {
  message: string;
  error: string;
};

/** @internal */
export const SubscriptionCreateResponseBody$outboundSchema: z.ZodType<
  SubscriptionCreateResponseBody$Outbound,
  z.ZodTypeDef,
  SubscriptionCreateResponseBody
> = z.instanceof(SubscriptionCreateResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionCreateResponseBody$ {
  /** @deprecated use `SubscriptionCreateResponseBody$inboundSchema` instead. */
  export const inboundSchema = SubscriptionCreateResponseBody$inboundSchema;
  /** @deprecated use `SubscriptionCreateResponseBody$outboundSchema` instead. */
  export const outboundSchema = SubscriptionCreateResponseBody$outboundSchema;
  /** @deprecated use `SubscriptionCreateResponseBody$Outbound` instead. */
  export type Outbound = SubscriptionCreateResponseBody$Outbound;
}
