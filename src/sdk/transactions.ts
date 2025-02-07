/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { transactionsCreate } from "../funcs/transactionsCreate.js";
import { transactionsGet } from "../funcs/transactionsGet.js";
import { transactionsList } from "../funcs/transactionsList.js";
import { transactionsUpdate } from "../funcs/transactionsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Transactions extends ClientSDK {
  async list(
    request: operations.TransactionsListRequest,
    options?: RequestOptions,
  ): Promise<operations.TransactionsListResponseBody> {
    return unwrapAsync(transactionsList(
      this,
      request,
      options,
    ));
  }

  async create(
    request: operations.TransactionsCreateRequestBody,
    options?: RequestOptions,
  ): Promise<operations.TransactionsCreateResponseBody> {
    return unwrapAsync(transactionsCreate(
      this,
      request,
      options,
    ));
  }

  async get(
    request: operations.TransactionsGetRequest,
    options?: RequestOptions,
  ): Promise<operations.TransactionsGetResponseBody> {
    return unwrapAsync(transactionsGet(
      this,
      request,
      options,
    ));
  }

  async update(
    request: operations.TransactionsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.TransactionsUpdateResponseBody> {
    return unwrapAsync(transactionsUpdate(
      this,
      request,
      options,
    ));
  }
}
