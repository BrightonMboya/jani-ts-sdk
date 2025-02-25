/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { checkoutGet } from "../funcs/checkoutGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { unwrapAsync } from "../types/fp.js";

export class Checkout extends ClientSDK {
  async get(
    options?: RequestOptions,
  ): Promise<string> {
    return unwrapAsync(checkoutGet(
      this,
      options,
    ));
  }
}
