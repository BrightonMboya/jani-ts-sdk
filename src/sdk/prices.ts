/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { pricesCreate } from "../funcs/pricesCreate.js";
import { pricesGet } from "../funcs/pricesGet.js";
import { pricesList } from "../funcs/pricesList.js";
import { pricesUpdate } from "../funcs/pricesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Prices extends ClientSDK {
  async list(
    options?: RequestOptions,
  ): Promise<Array<operations.PricesListResponseBody>> {
    return unwrapAsync(pricesList(
      this,
      options,
    ));
  }

  async create(
    request: operations.PricesCreateRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PricesCreateResponseBody> {
    return unwrapAsync(pricesCreate(
      this,
      request,
      options,
    ));
  }

  async get(
    request: operations.PricesGetPriceRequest,
    options?: RequestOptions,
  ): Promise<operations.PricesGetPriceResponseBody> {
    return unwrapAsync(pricesGet(
      this,
      request,
      options,
    ));
  }

  async update(
    request: operations.PricesUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.PricesUpdateResponseBody> {
    return unwrapAsync(pricesUpdate(
      this,
      request,
      options,
    ));
  }
}
