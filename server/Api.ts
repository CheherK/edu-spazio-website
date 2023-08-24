/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateUtilisateurDto {
  /**
   * the first name of the user
   * @example "Oussama"
   */
  firstName: string;
  /**
   * the last name of the user
   * @example "ben hriz"
   */
  lastName: string;
  /**
   * the birth day of the user
   * @format date-time
   * @example "march 08,2000"
   */
  birthDay: string;
  /**
   * the url  for image of the user
   * @example "Oussama"
   */
  url: string;
  /**
   * the level  of the user
   * @example "1 ére année prepa"
   */
  level: string;
  /**
   * the telephone number of the user
   * @example 44230772
   */
  tel: number;
  /**
   * the email  of the user
   * @example "obenhriz@gmail.com"
   */
  email: string;
  /**
   * the password  of the user
   * @example "1234"
   */
  password: string;
  /**
   * is the user an admin or not?
   * @example false
   */
  admin: boolean;
  /**
   * is the user paid or not ?
   * @example true
   */
  paid: boolean;
}

export interface Utilisateur {
  /**
   * Primary key as User ID
   * @example 1
   */
  id: number;
  /**
   * first name
   * @example "oussema "
   */
  firstName: string;
  /**
   * last name
   * @example "ben hriz"
   */
  lastName: string;
  /**
   * birth day
   * @format date-time
   * @example "March 08,2000"
   */
  birthDay: string;
  /**
   * url for photo
   * @example "www......"
   */
  url: string;
  /**
   * User level
   * @example "1 ére année prepa"
   */
  level: string;
  /**
   * User tel
   * @example 44230772
   */
  tel: number;
  /**
   * User email
   * @example "obenhriz@gmail.com"
   */
  email: string;
  /**
   * User password
   * @example "1234"
   */
  password: string;
  /**
   * is user admin
   * @example false
   */
  admin: boolean;
  /**
   * is user paid
   * @example true
   */
  paid: boolean;
}

export interface UpdateUtilisateurDto {
  /**
   * the first name of the user
   * @example "Oussama"
   */
  firstName: string;
  /**
   * the last name of the user
   * @example "ben hriz"
   */
  lastName: string;
  /**
   * the birth day of the user
   * @format date-time
   * @example "march 08,2000"
   */
  birthDay: string;
  /**
   * the url  for image of the user
   * @example "Oussama"
   */
  url: string;
  /**
   * the level  of the user
   * @example "1 ére année prepa"
   */
  level: string;
  /**
   * the telephone number of the user
   * @example 44230772
   */
  tel: number;
  /**
   * the email  of the user
   * @example "obenhriz@gmail.com"
   */
  email: string;
  /**
   * the password  of the user
   * @example "1234"
   */
  password: string;
  /**
   * is the user an admin or not?
   * @example false
   */
  admin: boolean;
  /**
   * is the user paid or not ?
   * @example true
   */
  paid: boolean;
}

export interface CreateFormationDto {
  /**
   * subject name
   * @example "python"
   */
  subject: string;
  /**
   * time of training session
   * @format date-time
   * @example "8 march 2023 14h"
   */
  time: string;
  /**
   * duration of the training session
   * @example "4h"
   */
  duration: string;
  /**
   * class that will do the training session
   * @example "1 ére année prepa"
   */
  class: string;
}

export interface Formation {
  /**
   * Primary key as training session ID
   * @example 1
   */
  id: number;
  /**
   * subject name
   * @example "python"
   */
  subject: string;
  /**
   * time of training session
   * @format date-time
   * @example "8 march 2023 14h"
   */
  time: string;
  /**
   * duration of the training session
   * @example "4h30"
   */
  duration: string;
  /**
   * class that will do the training session
   * @example "1 ére année prepa"
   */
  class: string;
}

export interface UpdateFormationDto {
  /**
   * subject name
   * @example "python"
   */
  subject: string;
  /**
   * time of training session
   * @format date-time
   * @example "8 march 2023 14h"
   */
  time: string;
  /**
   * duration of the training session
   * @example "4h"
   */
  duration: string;
  /**
   * class that will do the training session
   * @example "1 ére année prepa"
   */
  class: string;
}

export interface CreateReservationDto {
  /**
   * room number of the reservation s room
   * @example "c1"
   */
  roomNumber: number;
  /**
   * time of start
   * @format date-time
   * @example "2023-07-23T09:30:00.000Z"
   */
  startTime: string;
  /**
   * time of end
   * @format date-time
   * @example "2023-07-23T10:30:00.000Z"
   */
  endTime: string;
  /**
   * number of persons that will attend
   * @example 4
   */
  numberPersons: number;
  /**
   * description for the reservation
   * @example "we would like to a tv screen in the room "
   */
  description: string;
}

export interface Reservation {
  /**
   * Primary key as Reservation ID
   * @example 1
   */
  id: number;
  /**
   * room number of the reservation s room
   * @example "1"
   */
  roomNumber: number;
  /**
   * time of start
   * @format date-time
   * @example "2023-07-23T09:30:00.000Z"
   */
  startTime: string;
  /**
   * time of end
   * @format date-time
   * @example "2023-07-23T10:30:00.000Z"
   */
  endTime: string;
  /**
   * number of persons that will attend
   * @example 4
   */
  numberPersons: number;
  /**
   * description for the reservation
   * @example "we would like to a tv screen in the room "
   */
  description: string;
}

export interface UpdateReservationDto {
  /**
   * room number of the reservation s room
   * @example "c1"
   */
  roomNumber: number;
  /**
   * time of start
   * @format date-time
   * @example "2023-07-23T09:30:00.000Z"
   */
  startTime: string;
  /**
   * time of end
   * @format date-time
   * @example "2023-07-23T10:30:00.000Z"
   */
  endTime: string;
  /**
   * number of persons that will attend
   * @example 4
   */
  numberPersons: number;
  /**
   * description for the reservation
   * @example "we would like to a tv screen in the room "
   */
  description: string;
}

export interface CreateContactDto {
  /**
   * First name of sender
   * @example "Oussema"
   */
  firstName: string;
  /**
   * Last name of sender
   * @example "Ben hriz"
   */
  lastName: string;
  /**
   * Email of sender
   * @example "obenhriz@gmailcom"
   */
  email: string;
  /**
   * tel number of sender
   * @example 44230772
   */
  tel: number;
  /**
   * the content of message
   * @example "hey there"
   */
  message: string;
}

export interface Contact {
  /**
   * Primary key as contact ID
   * @example 1
   */
  id: number;
  /**
   * First name of sender
   * @example "Oussema"
   */
  firstName: string;
  /**
   * Last name of sender
   * @example "Ben hriz"
   */
  lastName: string;
  /**
   * Email of sender
   * @example "obenhriz@gmailcom"
   */
  email: string;
  /**
   * tel number of sender
   * @example 44230772
   */
  tel: number;
  /**
   * the content of message
   * @example "hey there"
   */
  message: string;
}

export interface UpdateContactDto {
  /**
   * First name of sender
   * @example "Oussema"
   */
  firstName?: string;
  /**
   * Last name of sender
   * @example "Ben hriz"
   */
  lastName?: string;
  /**
   * Email of sender
   * @example "obenhriz@gmailcom"
   */
  email?: string;
  /**
   * tel number of sender
   * @example 44230772
   */
  tel?: number;
  /**
   * the content of message
   * @example "hey there"
   */
  message?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== 'string' ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Edu Spazio example
 * @version 1.0
 * @contact
 *
 * The Edu Spazio API description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name AppControllerGetHello
   * @request GET:/
   */
  appControllerGetHello = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: 'GET',
      ...params,
    });

  utilisateurs = {
    /**
     * No description
     *
     * @tags utilisateurs
     * @name UtilisateursControllerCreate
     * @request POST:/utilisateurs
     */
    utilisateursControllerCreate: (data: CreateUtilisateurDto, params: RequestParams = {}) =>
      this.request<Utilisateur, void>({
        path: `/utilisateurs`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags utilisateurs
     * @name UtilisateursControllerFindAll
     * @request GET:/utilisateurs
     */
    utilisateursControllerFindAll: (params: RequestParams = {}) =>
      this.request<Utilisateur[], void>({
        path: `/utilisateurs`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags utilisateurs
     * @name UtilisateursControllerFindOne
     * @request GET:/utilisateurs/{id}
     */
    utilisateursControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<Utilisateur, void>({
        path: `/utilisateurs/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags utilisateurs
     * @name UtilisateursControllerUpdate
     * @request PUT:/utilisateurs/{id}
     */
    utilisateursControllerUpdate: (id: number, data: UpdateUtilisateurDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/utilisateurs/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags utilisateurs
     * @name UtilisateursControllerRemove
     * @request DELETE:/utilisateurs/{id}
     */
    utilisateursControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/utilisateurs/${id}`,
        method: 'DELETE',
        ...params,
      }),
  };
  formations = {
    /**
     * No description
     *
     * @tags formations
     * @name FormationsControllerCreate
     * @request POST:/formations
     */
    formationsControllerCreate: (data: CreateFormationDto, params: RequestParams = {}) =>
      this.request<Formation, void>({
        path: `/formations`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags formations
     * @name FormationsControllerFindAll
     * @request GET:/formations
     */
    formationsControllerFindAll: (params: RequestParams = {}) =>
      this.request<Formation[], void>({
        path: `/formations`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags formations
     * @name FormationsControllerFindOne
     * @request GET:/formations/{id}
     */
    formationsControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<Formation, void>({
        path: `/formations/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags formations
     * @name FormationsControllerUpdate
     * @request PUT:/formations/{id}
     */
    formationsControllerUpdate: (id: number, data: UpdateFormationDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/formations/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags formations
     * @name FormationsControllerRemove
     * @request DELETE:/formations/{id}
     */
    formationsControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/formations/${id}`,
        method: 'DELETE',
        ...params,
      }),
  };
  reservations = {
    /**
     * No description
     *
     * @tags reservations
     * @name ReservationsControllerCreate
     * @request POST:/reservations
     */
    reservationsControllerCreate: (data: CreateReservationDto, params: RequestParams = {}) =>
      this.request<Reservation, void>({
        path: `/reservations`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags reservations
     * @name ReservationsControllerFindAll
     * @request GET:/reservations
     */
    reservationsControllerFindAll: (params: RequestParams = {}) =>
      this.request<Reservation[], void>({
        path: `/reservations`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags reservations
     * @name ReservationsControllerFindOne
     * @request GET:/reservations/{id}
     */
    reservationsControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<Reservation, void>({
        path: `/reservations/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags reservations
     * @name ReservationsControllerUpdate
     * @request PUT:/reservations/{id}
     */
    reservationsControllerUpdate: (id: number, data: UpdateReservationDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/reservations/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags reservations
     * @name ReservationsControllerRemove
     * @request DELETE:/reservations/{id}
     */
    reservationsControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/reservations/${id}`,
        method: 'DELETE',
        ...params,
      }),
  };
  contact = {
    /**
     * No description
     *
     * @tags contact
     * @name ContactControllerCreate
     * @request POST:/contact
     */
    contactControllerCreate: (data: CreateContactDto, params: RequestParams = {}) =>
      this.request<Contact, void>({
        path: `/contact`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags contact
     * @name ContactControllerFindAll
     * @request GET:/contact
     */
    contactControllerFindAll: (params: RequestParams = {}) =>
      this.request<Contact[], void>({
        path: `/contact`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags contact
     * @name ContactControllerFindOne
     * @request GET:/contact/{id}
     */
    contactControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<Contact, void>({
        path: `/contact/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags contact
     * @name ContactControllerUpdate
     * @request PUT:/contact/{id}
     */
    contactControllerUpdate: (id: number, data: UpdateContactDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/contact/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags contact
     * @name ContactControllerRemove
     * @request DELETE:/contact/{id}
     */
    contactControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/contact/${id}`,
        method: 'DELETE',
        ...params,
      }),
  };
}
