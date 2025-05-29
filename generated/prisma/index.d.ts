
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model sector
 * 
 */
export type sector = $Result.DefaultSelection<Prisma.$sectorPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model Taskc
 * 
 */
export type Taskc = $Result.DefaultSelection<Prisma.$TaskcPayload>
/**
 * Model notification
 * 
 */
export type notification = $Result.DefaultSelection<Prisma.$notificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const statusType: {
  Completed: 'Completed',
  Cancelled: 'Cancelled',
  Pending: 'Pending',
  Working: 'Working'
};

export type statusType = (typeof statusType)[keyof typeof statusType]


export const priorityType: {
  High: 'High',
  Medium: 'Medium',
  Low: 'Low'
};

export type priorityType = (typeof priorityType)[keyof typeof priorityType]


export const userType: {
  Admin: 'Admin',
  Tecnic: 'Tecnic'
};

export type userType = (typeof userType)[keyof typeof userType]


export const notificationType: {
  Task: 'Task',
  Ticket: 'Ticket',
  User: 'User',
  Other: 'Other'
};

export type notificationType = (typeof notificationType)[keyof typeof notificationType]

}

export type statusType = $Enums.statusType

export const statusType: typeof $Enums.statusType

export type priorityType = $Enums.priorityType

export const priorityType: typeof $Enums.priorityType

export type userType = $Enums.userType

export const userType: typeof $Enums.userType

export type notificationType = $Enums.notificationType

export const notificationType: typeof $Enums.notificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sectors
 * const sectors = await prisma.sector.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sectors
   * const sectors = await prisma.sector.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sector`: Exposes CRUD operations for the **sector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sectors
    * const sectors = await prisma.sector.findMany()
    * ```
    */
  get sector(): Prisma.sectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskc`: Exposes CRUD operations for the **Taskc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taskcs
    * const taskcs = await prisma.taskc.findMany()
    * ```
    */
  get taskc(): Prisma.TaskcDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.notificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    sector: 'sector',
    Ticket: 'Ticket',
    user: 'user',
    Taskc: 'Taskc',
    notification: 'notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sector" | "ticket" | "user" | "taskc" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      sector: {
        payload: Prisma.$sectorPayload<ExtArgs>
        fields: Prisma.sectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>
          }
          findFirst: {
            args: Prisma.sectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>
          }
          findMany: {
            args: Prisma.sectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>[]
          }
          create: {
            args: Prisma.sectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>
          }
          createMany: {
            args: Prisma.sectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sectorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>[]
          }
          delete: {
            args: Prisma.sectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>
          }
          update: {
            args: Prisma.sectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>
          }
          deleteMany: {
            args: Prisma.sectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sectorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>[]
          }
          upsert: {
            args: Prisma.sectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectorPayload>
          }
          aggregate: {
            args: Prisma.SectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSector>
          }
          groupBy: {
            args: Prisma.sectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.sectorCountArgs<ExtArgs>
            result: $Utils.Optional<SectorCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Taskc: {
        payload: Prisma.$TaskcPayload<ExtArgs>
        fields: Prisma.TaskcFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskcFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskcFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcPayload>
          }
          findFirst: {
            args: Prisma.TaskcFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskcFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcPayload>
          }
          findMany: {
            args: Prisma.TaskcFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcPayload>[]
          }
          create: {
            args: Prisma.TaskcCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcPayload>
          }
          createMany: {
            args: Prisma.TaskcCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskcCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcPayload>[]
          }
          delete: {
            args: Prisma.TaskcDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcPayload>
          }
          update: {
            args: Prisma.TaskcUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcPayload>
          }
          deleteMany: {
            args: Prisma.TaskcDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskcUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskcUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcPayload>[]
          }
          upsert: {
            args: Prisma.TaskcUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskcPayload>
          }
          aggregate: {
            args: Prisma.TaskcAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskc>
          }
          groupBy: {
            args: Prisma.TaskcGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskcGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskcCountArgs<ExtArgs>
            result: $Utils.Optional<TaskcCountAggregateOutputType> | number
          }
        }
      }
      notification: {
        payload: Prisma.$notificationPayload<ExtArgs>
        fields: Prisma.notificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findFirst: {
            args: Prisma.notificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findMany: {
            args: Prisma.notificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          create: {
            args: Prisma.notificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          createMany: {
            args: Prisma.notificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          delete: {
            args: Prisma.notificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          update: {
            args: Prisma.notificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          deleteMany: {
            args: Prisma.notificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          upsert: {
            args: Prisma.notificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.notificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    sector?: sectorOmit
    ticket?: TicketOmit
    user?: userOmit
    taskc?: TaskcOmit
    notification?: notificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SectorCountOutputType
   */

  export type SectorCountOutputType = {
    users: number
    Ticket: number
  }

  export type SectorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SectorCountOutputTypeCountUsersArgs
    Ticket?: boolean | SectorCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * SectorCountOutputType without action
   */
  export type SectorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectorCountOutputType
     */
    select?: SectorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectorCountOutputType without action
   */
  export type SectorCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }

  /**
   * SectorCountOutputType without action
   */
  export type SectorCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    Taskc: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Taskc?: boolean | TicketCountOutputTypeCountTaskcArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountTaskcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskcWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Taskc: number
    notification: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Taskc?: boolean | UserCountOutputTypeCountTaskcArgs
    notification?: boolean | UserCountOutputTypeCountNotificationArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskcWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model sector
   */

  export type AggregateSector = {
    _count: SectorCountAggregateOutputType | null
    _avg: SectorAvgAggregateOutputType | null
    _sum: SectorSumAggregateOutputType | null
    _min: SectorMinAggregateOutputType | null
    _max: SectorMaxAggregateOutputType | null
  }

  export type SectorAvgAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type SectorSumAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type SectorMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    total: number | null
  }

  export type SectorMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    total: number | null
  }

  export type SectorCountAggregateOutputType = {
    id: number
    title: number
    description: number
    total: number
    _all: number
  }


  export type SectorAvgAggregateInputType = {
    id?: true
    total?: true
  }

  export type SectorSumAggregateInputType = {
    id?: true
    total?: true
  }

  export type SectorMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    total?: true
  }

  export type SectorMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    total?: true
  }

  export type SectorCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    total?: true
    _all?: true
  }

  export type SectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sector to aggregate.
     */
    where?: sectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sectors to fetch.
     */
    orderBy?: sectorOrderByWithRelationInput | sectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sectors
    **/
    _count?: true | SectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectorMaxAggregateInputType
  }

  export type GetSectorAggregateType<T extends SectorAggregateArgs> = {
        [P in keyof T & keyof AggregateSector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSector[P]>
      : GetScalarType<T[P], AggregateSector[P]>
  }




  export type sectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sectorWhereInput
    orderBy?: sectorOrderByWithAggregationInput | sectorOrderByWithAggregationInput[]
    by: SectorScalarFieldEnum[] | SectorScalarFieldEnum
    having?: sectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectorCountAggregateInputType | true
    _avg?: SectorAvgAggregateInputType
    _sum?: SectorSumAggregateInputType
    _min?: SectorMinAggregateInputType
    _max?: SectorMaxAggregateInputType
  }

  export type SectorGroupByOutputType = {
    id: number
    title: string
    description: string | null
    total: number
    _count: SectorCountAggregateOutputType | null
    _avg: SectorAvgAggregateOutputType | null
    _sum: SectorSumAggregateOutputType | null
    _min: SectorMinAggregateOutputType | null
    _max: SectorMaxAggregateOutputType | null
  }

  type GetSectorGroupByPayload<T extends sectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectorGroupByOutputType[P]>
            : GetScalarType<T[P], SectorGroupByOutputType[P]>
        }
      >
    >


  export type sectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    total?: boolean
    users?: boolean | sector$usersArgs<ExtArgs>
    Ticket?: boolean | sector$TicketArgs<ExtArgs>
    _count?: boolean | SectorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sector"]>

  export type sectorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    total?: boolean
  }, ExtArgs["result"]["sector"]>

  export type sectorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    total?: boolean
  }, ExtArgs["result"]["sector"]>

  export type sectorSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    total?: boolean
  }

  export type sectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "total", ExtArgs["result"]["sector"]>
  export type sectorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | sector$usersArgs<ExtArgs>
    Ticket?: boolean | sector$TicketArgs<ExtArgs>
    _count?: boolean | SectorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sectorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type sectorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $sectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sector"
    objects: {
      users: Prisma.$userPayload<ExtArgs>[]
      Ticket: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      total: number
    }, ExtArgs["result"]["sector"]>
    composites: {}
  }

  type sectorGetPayload<S extends boolean | null | undefined | sectorDefaultArgs> = $Result.GetResult<Prisma.$sectorPayload, S>

  type sectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectorCountAggregateInputType | true
    }

  export interface sectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sector'], meta: { name: 'sector' } }
    /**
     * Find zero or one Sector that matches the filter.
     * @param {sectorFindUniqueArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sectorFindUniqueArgs>(args: SelectSubset<T, sectorFindUniqueArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sectorFindUniqueOrThrowArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sectorFindUniqueOrThrowArgs>(args: SelectSubset<T, sectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectorFindFirstArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sectorFindFirstArgs>(args?: SelectSubset<T, sectorFindFirstArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectorFindFirstOrThrowArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sectorFindFirstOrThrowArgs>(args?: SelectSubset<T, sectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sectors
     * const sectors = await prisma.sector.findMany()
     * 
     * // Get first 10 Sectors
     * const sectors = await prisma.sector.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectorWithIdOnly = await prisma.sector.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sectorFindManyArgs>(args?: SelectSubset<T, sectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sector.
     * @param {sectorCreateArgs} args - Arguments to create a Sector.
     * @example
     * // Create one Sector
     * const Sector = await prisma.sector.create({
     *   data: {
     *     // ... data to create a Sector
     *   }
     * })
     * 
     */
    create<T extends sectorCreateArgs>(args: SelectSubset<T, sectorCreateArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sectors.
     * @param {sectorCreateManyArgs} args - Arguments to create many Sectors.
     * @example
     * // Create many Sectors
     * const sector = await prisma.sector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sectorCreateManyArgs>(args?: SelectSubset<T, sectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sectors and returns the data saved in the database.
     * @param {sectorCreateManyAndReturnArgs} args - Arguments to create many Sectors.
     * @example
     * // Create many Sectors
     * const sector = await prisma.sector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sectors and only return the `id`
     * const sectorWithIdOnly = await prisma.sector.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sectorCreateManyAndReturnArgs>(args?: SelectSubset<T, sectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sector.
     * @param {sectorDeleteArgs} args - Arguments to delete one Sector.
     * @example
     * // Delete one Sector
     * const Sector = await prisma.sector.delete({
     *   where: {
     *     // ... filter to delete one Sector
     *   }
     * })
     * 
     */
    delete<T extends sectorDeleteArgs>(args: SelectSubset<T, sectorDeleteArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sector.
     * @param {sectorUpdateArgs} args - Arguments to update one Sector.
     * @example
     * // Update one Sector
     * const sector = await prisma.sector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sectorUpdateArgs>(args: SelectSubset<T, sectorUpdateArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sectors.
     * @param {sectorDeleteManyArgs} args - Arguments to filter Sectors to delete.
     * @example
     * // Delete a few Sectors
     * const { count } = await prisma.sector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sectorDeleteManyArgs>(args?: SelectSubset<T, sectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sectors
     * const sector = await prisma.sector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sectorUpdateManyArgs>(args: SelectSubset<T, sectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sectors and returns the data updated in the database.
     * @param {sectorUpdateManyAndReturnArgs} args - Arguments to update many Sectors.
     * @example
     * // Update many Sectors
     * const sector = await prisma.sector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sectors and only return the `id`
     * const sectorWithIdOnly = await prisma.sector.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sectorUpdateManyAndReturnArgs>(args: SelectSubset<T, sectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sector.
     * @param {sectorUpsertArgs} args - Arguments to update or create a Sector.
     * @example
     * // Update or create a Sector
     * const sector = await prisma.sector.upsert({
     *   create: {
     *     // ... data to create a Sector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sector we want to update
     *   }
     * })
     */
    upsert<T extends sectorUpsertArgs>(args: SelectSubset<T, sectorUpsertArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectorCountArgs} args - Arguments to filter Sectors to count.
     * @example
     * // Count the number of Sectors
     * const count = await prisma.sector.count({
     *   where: {
     *     // ... the filter for the Sectors we want to count
     *   }
     * })
    **/
    count<T extends sectorCountArgs>(
      args?: Subset<T, sectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectorAggregateArgs>(args: Subset<T, SectorAggregateArgs>): Prisma.PrismaPromise<GetSectorAggregateType<T>>

    /**
     * Group by Sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sectorGroupByArgs['orderBy'] }
        : { orderBy?: sectorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sector model
   */
  readonly fields: sectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends sector$usersArgs<ExtArgs> = {}>(args?: Subset<T, sector$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Ticket<T extends sector$TicketArgs<ExtArgs> = {}>(args?: Subset<T, sector$TicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sector model
   */
  interface sectorFieldRefs {
    readonly id: FieldRef<"sector", 'Int'>
    readonly title: FieldRef<"sector", 'String'>
    readonly description: FieldRef<"sector", 'String'>
    readonly total: FieldRef<"sector", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sector findUnique
   */
  export type sectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * Filter, which sector to fetch.
     */
    where: sectorWhereUniqueInput
  }

  /**
   * sector findUniqueOrThrow
   */
  export type sectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * Filter, which sector to fetch.
     */
    where: sectorWhereUniqueInput
  }

  /**
   * sector findFirst
   */
  export type sectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * Filter, which sector to fetch.
     */
    where?: sectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sectors to fetch.
     */
    orderBy?: sectorOrderByWithRelationInput | sectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sectors.
     */
    cursor?: sectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sectors.
     */
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * sector findFirstOrThrow
   */
  export type sectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * Filter, which sector to fetch.
     */
    where?: sectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sectors to fetch.
     */
    orderBy?: sectorOrderByWithRelationInput | sectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sectors.
     */
    cursor?: sectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sectors.
     */
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * sector findMany
   */
  export type sectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * Filter, which sectors to fetch.
     */
    where?: sectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sectors to fetch.
     */
    orderBy?: sectorOrderByWithRelationInput | sectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sectors.
     */
    cursor?: sectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sectors.
     */
    skip?: number
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * sector create
   */
  export type sectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * The data needed to create a sector.
     */
    data: XOR<sectorCreateInput, sectorUncheckedCreateInput>
  }

  /**
   * sector createMany
   */
  export type sectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sectors.
     */
    data: sectorCreateManyInput | sectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sector createManyAndReturn
   */
  export type sectorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * The data used to create many sectors.
     */
    data: sectorCreateManyInput | sectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sector update
   */
  export type sectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * The data needed to update a sector.
     */
    data: XOR<sectorUpdateInput, sectorUncheckedUpdateInput>
    /**
     * Choose, which sector to update.
     */
    where: sectorWhereUniqueInput
  }

  /**
   * sector updateMany
   */
  export type sectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sectors.
     */
    data: XOR<sectorUpdateManyMutationInput, sectorUncheckedUpdateManyInput>
    /**
     * Filter which sectors to update
     */
    where?: sectorWhereInput
    /**
     * Limit how many sectors to update.
     */
    limit?: number
  }

  /**
   * sector updateManyAndReturn
   */
  export type sectorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * The data used to update sectors.
     */
    data: XOR<sectorUpdateManyMutationInput, sectorUncheckedUpdateManyInput>
    /**
     * Filter which sectors to update
     */
    where?: sectorWhereInput
    /**
     * Limit how many sectors to update.
     */
    limit?: number
  }

  /**
   * sector upsert
   */
  export type sectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * The filter to search for the sector to update in case it exists.
     */
    where: sectorWhereUniqueInput
    /**
     * In case the sector found by the `where` argument doesn't exist, create a new sector with this data.
     */
    create: XOR<sectorCreateInput, sectorUncheckedCreateInput>
    /**
     * In case the sector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sectorUpdateInput, sectorUncheckedUpdateInput>
  }

  /**
   * sector delete
   */
  export type sectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    /**
     * Filter which sector to delete.
     */
    where: sectorWhereUniqueInput
  }

  /**
   * sector deleteMany
   */
  export type sectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sectors to delete
     */
    where?: sectorWhereInput
    /**
     * Limit how many sectors to delete.
     */
    limit?: number
  }

  /**
   * sector.users
   */
  export type sector$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * sector.Ticket
   */
  export type sector$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * sector without action
   */
  export type sectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    sectorid: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    sectorid: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    sectorid: number | null
    status: $Enums.statusType | null
    priority: $Enums.priorityType | null
    created: Date | null
    finished: Date | null
    updated: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    sectorid: number | null
    status: $Enums.statusType | null
    priority: $Enums.priorityType | null
    created: Date | null
    finished: Date | null
    updated: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    title: number
    description: number
    sectorid: number
    status: number
    priority: number
    created: number
    finished: number
    updated: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    sectorid?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    sectorid?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    sectorid?: true
    status?: true
    priority?: true
    created?: true
    finished?: true
    updated?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    sectorid?: true
    status?: true
    priority?: true
    created?: true
    finished?: true
    updated?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    sectorid?: true
    status?: true
    priority?: true
    created?: true
    finished?: true
    updated?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    title: string
    description: string | null
    sectorid: number | null
    status: $Enums.statusType
    priority: $Enums.priorityType
    created: Date
    finished: Date
    updated: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    sectorid?: boolean
    status?: boolean
    priority?: boolean
    created?: boolean
    finished?: boolean
    updated?: boolean
    Taskc?: boolean | Ticket$TaskcArgs<ExtArgs>
    sector?: boolean | Ticket$sectorArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    sectorid?: boolean
    status?: boolean
    priority?: boolean
    created?: boolean
    finished?: boolean
    updated?: boolean
    sector?: boolean | Ticket$sectorArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    sectorid?: boolean
    status?: boolean
    priority?: boolean
    created?: boolean
    finished?: boolean
    updated?: boolean
    sector?: boolean | Ticket$sectorArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    sectorid?: boolean
    status?: boolean
    priority?: boolean
    created?: boolean
    finished?: boolean
    updated?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "sectorid" | "status" | "priority" | "created" | "finished" | "updated", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Taskc?: boolean | Ticket$TaskcArgs<ExtArgs>
    sector?: boolean | Ticket$sectorArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | Ticket$sectorArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | Ticket$sectorArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      Taskc: Prisma.$TaskcPayload<ExtArgs>[]
      sector: Prisma.$sectorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      sectorid: number | null
      status: $Enums.statusType
      priority: $Enums.priorityType
      created: Date
      finished: Date
      updated: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Taskc<T extends Ticket$TaskcArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$TaskcArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sector<T extends Ticket$sectorArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$sectorArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly title: FieldRef<"Ticket", 'String'>
    readonly description: FieldRef<"Ticket", 'String'>
    readonly sectorid: FieldRef<"Ticket", 'Int'>
    readonly status: FieldRef<"Ticket", 'statusType'>
    readonly priority: FieldRef<"Ticket", 'priorityType'>
    readonly created: FieldRef<"Ticket", 'DateTime'>
    readonly finished: FieldRef<"Ticket", 'DateTime'>
    readonly updated: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.Taskc
   */
  export type Ticket$TaskcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskc
     */
    select?: TaskcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskc
     */
    omit?: TaskcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcInclude<ExtArgs> | null
    where?: TaskcWhereInput
    orderBy?: TaskcOrderByWithRelationInput | TaskcOrderByWithRelationInput[]
    cursor?: TaskcWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskcScalarFieldEnum | TaskcScalarFieldEnum[]
  }

  /**
   * Ticket.sector
   */
  export type Ticket$sectorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    where?: sectorWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    sectorid: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    sectorid: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastname: string | null
    email: string | null
    tel: string | null
    password: string | null
    bio: string | null
    type: $Enums.userType | null
    sectorid: number | null
    created: Date | null
    updated: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastname: string | null
    email: string | null
    tel: string | null
    password: string | null
    bio: string | null
    type: $Enums.userType | null
    sectorid: number | null
    created: Date | null
    updated: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    lastname: number
    email: number
    tel: number
    password: number
    bio: number
    type: number
    sectorid: number
    created: number
    updated: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    sectorid?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    sectorid?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    tel?: true
    password?: true
    bio?: true
    type?: true
    sectorid?: true
    created?: true
    updated?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    tel?: true
    password?: true
    bio?: true
    type?: true
    sectorid?: true
    created?: true
    updated?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    email?: true
    tel?: true
    password?: true
    bio?: true
    type?: true
    sectorid?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    lastname: string
    email: string
    tel: string
    password: string
    bio: string | null
    type: $Enums.userType
    sectorid: number | null
    created: Date
    updated: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    bio?: boolean
    type?: boolean
    sectorid?: boolean
    created?: boolean
    updated?: boolean
    sector?: boolean | user$sectorArgs<ExtArgs>
    Taskc?: boolean | user$TaskcArgs<ExtArgs>
    notification?: boolean | user$notificationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    bio?: boolean
    type?: boolean
    sectorid?: boolean
    created?: boolean
    updated?: boolean
    sector?: boolean | user$sectorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    bio?: boolean
    type?: boolean
    sectorid?: boolean
    created?: boolean
    updated?: boolean
    sector?: boolean | user$sectorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    lastname?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    bio?: boolean
    type?: boolean
    sectorid?: boolean
    created?: boolean
    updated?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastname" | "email" | "tel" | "password" | "bio" | "type" | "sectorid" | "created" | "updated", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | user$sectorArgs<ExtArgs>
    Taskc?: boolean | user$TaskcArgs<ExtArgs>
    notification?: boolean | user$notificationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | user$sectorArgs<ExtArgs>
  }
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sector?: boolean | user$sectorArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      sector: Prisma.$sectorPayload<ExtArgs> | null
      Taskc: Prisma.$TaskcPayload<ExtArgs>[]
      notification: Prisma.$notificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lastname: string
      email: string
      tel: string
      password: string
      bio: string | null
      type: $Enums.userType
      sectorid: number | null
      created: Date
      updated: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sector<T extends user$sectorArgs<ExtArgs> = {}>(args?: Subset<T, user$sectorArgs<ExtArgs>>): Prisma__sectorClient<$Result.GetResult<Prisma.$sectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Taskc<T extends user$TaskcArgs<ExtArgs> = {}>(args?: Subset<T, user$TaskcArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notification<T extends user$notificationArgs<ExtArgs> = {}>(args?: Subset<T, user$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly lastname: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly tel: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly bio: FieldRef<"user", 'String'>
    readonly type: FieldRef<"user", 'userType'>
    readonly sectorid: FieldRef<"user", 'Int'>
    readonly created: FieldRef<"user", 'DateTime'>
    readonly updated: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.sector
   */
  export type user$sectorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sector
     */
    select?: sectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sector
     */
    omit?: sectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectorInclude<ExtArgs> | null
    where?: sectorWhereInput
  }

  /**
   * user.Taskc
   */
  export type user$TaskcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskc
     */
    select?: TaskcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskc
     */
    omit?: TaskcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcInclude<ExtArgs> | null
    where?: TaskcWhereInput
    orderBy?: TaskcOrderByWithRelationInput | TaskcOrderByWithRelationInput[]
    cursor?: TaskcWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskcScalarFieldEnum | TaskcScalarFieldEnum[]
  }

  /**
   * user.notification
   */
  export type user$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    cursor?: notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model Taskc
   */

  export type AggregateTaskc = {
    _count: TaskcCountAggregateOutputType | null
    _avg: TaskcAvgAggregateOutputType | null
    _sum: TaskcSumAggregateOutputType | null
    _min: TaskcMinAggregateOutputType | null
    _max: TaskcMaxAggregateOutputType | null
  }

  export type TaskcAvgAggregateOutputType = {
    id: number | null
    ticketId: number | null
    owner: number | null
  }

  export type TaskcSumAggregateOutputType = {
    id: number | null
    ticketId: number | null
    owner: number | null
  }

  export type TaskcMinAggregateOutputType = {
    id: number | null
    ticketId: number | null
    status: $Enums.statusType | null
    title: string | null
    description: string | null
    owner: number | null
    created: Date | null
    updated: Date | null
    finished: Date | null
  }

  export type TaskcMaxAggregateOutputType = {
    id: number | null
    ticketId: number | null
    status: $Enums.statusType | null
    title: string | null
    description: string | null
    owner: number | null
    created: Date | null
    updated: Date | null
    finished: Date | null
  }

  export type TaskcCountAggregateOutputType = {
    id: number
    ticketId: number
    status: number
    title: number
    description: number
    owner: number
    created: number
    updated: number
    finished: number
    _all: number
  }


  export type TaskcAvgAggregateInputType = {
    id?: true
    ticketId?: true
    owner?: true
  }

  export type TaskcSumAggregateInputType = {
    id?: true
    ticketId?: true
    owner?: true
  }

  export type TaskcMinAggregateInputType = {
    id?: true
    ticketId?: true
    status?: true
    title?: true
    description?: true
    owner?: true
    created?: true
    updated?: true
    finished?: true
  }

  export type TaskcMaxAggregateInputType = {
    id?: true
    ticketId?: true
    status?: true
    title?: true
    description?: true
    owner?: true
    created?: true
    updated?: true
    finished?: true
  }

  export type TaskcCountAggregateInputType = {
    id?: true
    ticketId?: true
    status?: true
    title?: true
    description?: true
    owner?: true
    created?: true
    updated?: true
    finished?: true
    _all?: true
  }

  export type TaskcAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taskc to aggregate.
     */
    where?: TaskcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taskcs to fetch.
     */
    orderBy?: TaskcOrderByWithRelationInput | TaskcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taskcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taskcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Taskcs
    **/
    _count?: true | TaskcCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskcAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskcSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskcMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskcMaxAggregateInputType
  }

  export type GetTaskcAggregateType<T extends TaskcAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskc[P]>
      : GetScalarType<T[P], AggregateTaskc[P]>
  }




  export type TaskcGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskcWhereInput
    orderBy?: TaskcOrderByWithAggregationInput | TaskcOrderByWithAggregationInput[]
    by: TaskcScalarFieldEnum[] | TaskcScalarFieldEnum
    having?: TaskcScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskcCountAggregateInputType | true
    _avg?: TaskcAvgAggregateInputType
    _sum?: TaskcSumAggregateInputType
    _min?: TaskcMinAggregateInputType
    _max?: TaskcMaxAggregateInputType
  }

  export type TaskcGroupByOutputType = {
    id: number
    ticketId: number | null
    status: $Enums.statusType
    title: string
    description: string
    owner: number | null
    created: Date
    updated: Date
    finished: Date | null
    _count: TaskcCountAggregateOutputType | null
    _avg: TaskcAvgAggregateOutputType | null
    _sum: TaskcSumAggregateOutputType | null
    _min: TaskcMinAggregateOutputType | null
    _max: TaskcMaxAggregateOutputType | null
  }

  type GetTaskcGroupByPayload<T extends TaskcGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskcGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskcGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskcGroupByOutputType[P]>
            : GetScalarType<T[P], TaskcGroupByOutputType[P]>
        }
      >
    >


  export type TaskcSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    owner?: boolean
    created?: boolean
    updated?: boolean
    finished?: boolean
    user?: boolean | Taskc$userArgs<ExtArgs>
    tikect?: boolean | Taskc$tikectArgs<ExtArgs>
  }, ExtArgs["result"]["taskc"]>

  export type TaskcSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    owner?: boolean
    created?: boolean
    updated?: boolean
    finished?: boolean
    user?: boolean | Taskc$userArgs<ExtArgs>
    tikect?: boolean | Taskc$tikectArgs<ExtArgs>
  }, ExtArgs["result"]["taskc"]>

  export type TaskcSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    owner?: boolean
    created?: boolean
    updated?: boolean
    finished?: boolean
    user?: boolean | Taskc$userArgs<ExtArgs>
    tikect?: boolean | Taskc$tikectArgs<ExtArgs>
  }, ExtArgs["result"]["taskc"]>

  export type TaskcSelectScalar = {
    id?: boolean
    ticketId?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    owner?: boolean
    created?: boolean
    updated?: boolean
    finished?: boolean
  }

  export type TaskcOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "status" | "title" | "description" | "owner" | "created" | "updated" | "finished", ExtArgs["result"]["taskc"]>
  export type TaskcInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Taskc$userArgs<ExtArgs>
    tikect?: boolean | Taskc$tikectArgs<ExtArgs>
  }
  export type TaskcIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Taskc$userArgs<ExtArgs>
    tikect?: boolean | Taskc$tikectArgs<ExtArgs>
  }
  export type TaskcIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Taskc$userArgs<ExtArgs>
    tikect?: boolean | Taskc$tikectArgs<ExtArgs>
  }

  export type $TaskcPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Taskc"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      tikect: Prisma.$TicketPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticketId: number | null
      status: $Enums.statusType
      title: string
      description: string
      owner: number | null
      created: Date
      updated: Date
      finished: Date | null
    }, ExtArgs["result"]["taskc"]>
    composites: {}
  }

  type TaskcGetPayload<S extends boolean | null | undefined | TaskcDefaultArgs> = $Result.GetResult<Prisma.$TaskcPayload, S>

  type TaskcCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskcFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskcCountAggregateInputType | true
    }

  export interface TaskcDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Taskc'], meta: { name: 'Taskc' } }
    /**
     * Find zero or one Taskc that matches the filter.
     * @param {TaskcFindUniqueArgs} args - Arguments to find a Taskc
     * @example
     * // Get one Taskc
     * const taskc = await prisma.taskc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskcFindUniqueArgs>(args: SelectSubset<T, TaskcFindUniqueArgs<ExtArgs>>): Prisma__TaskcClient<$Result.GetResult<Prisma.$TaskcPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Taskc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskcFindUniqueOrThrowArgs} args - Arguments to find a Taskc
     * @example
     * // Get one Taskc
     * const taskc = await prisma.taskc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskcFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskcFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskcClient<$Result.GetResult<Prisma.$TaskcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taskc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskcFindFirstArgs} args - Arguments to find a Taskc
     * @example
     * // Get one Taskc
     * const taskc = await prisma.taskc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskcFindFirstArgs>(args?: SelectSubset<T, TaskcFindFirstArgs<ExtArgs>>): Prisma__TaskcClient<$Result.GetResult<Prisma.$TaskcPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taskc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskcFindFirstOrThrowArgs} args - Arguments to find a Taskc
     * @example
     * // Get one Taskc
     * const taskc = await prisma.taskc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskcFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskcFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskcClient<$Result.GetResult<Prisma.$TaskcPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Taskcs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskcFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taskcs
     * const taskcs = await prisma.taskc.findMany()
     * 
     * // Get first 10 Taskcs
     * const taskcs = await prisma.taskc.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskcWithIdOnly = await prisma.taskc.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskcFindManyArgs>(args?: SelectSubset<T, TaskcFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Taskc.
     * @param {TaskcCreateArgs} args - Arguments to create a Taskc.
     * @example
     * // Create one Taskc
     * const Taskc = await prisma.taskc.create({
     *   data: {
     *     // ... data to create a Taskc
     *   }
     * })
     * 
     */
    create<T extends TaskcCreateArgs>(args: SelectSubset<T, TaskcCreateArgs<ExtArgs>>): Prisma__TaskcClient<$Result.GetResult<Prisma.$TaskcPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Taskcs.
     * @param {TaskcCreateManyArgs} args - Arguments to create many Taskcs.
     * @example
     * // Create many Taskcs
     * const taskc = await prisma.taskc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskcCreateManyArgs>(args?: SelectSubset<T, TaskcCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Taskcs and returns the data saved in the database.
     * @param {TaskcCreateManyAndReturnArgs} args - Arguments to create many Taskcs.
     * @example
     * // Create many Taskcs
     * const taskc = await prisma.taskc.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Taskcs and only return the `id`
     * const taskcWithIdOnly = await prisma.taskc.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskcCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskcCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskcPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Taskc.
     * @param {TaskcDeleteArgs} args - Arguments to delete one Taskc.
     * @example
     * // Delete one Taskc
     * const Taskc = await prisma.taskc.delete({
     *   where: {
     *     // ... filter to delete one Taskc
     *   }
     * })
     * 
     */
    delete<T extends TaskcDeleteArgs>(args: SelectSubset<T, TaskcDeleteArgs<ExtArgs>>): Prisma__TaskcClient<$Result.GetResult<Prisma.$TaskcPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Taskc.
     * @param {TaskcUpdateArgs} args - Arguments to update one Taskc.
     * @example
     * // Update one Taskc
     * const taskc = await prisma.taskc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskcUpdateArgs>(args: SelectSubset<T, TaskcUpdateArgs<ExtArgs>>): Prisma__TaskcClient<$Result.GetResult<Prisma.$TaskcPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Taskcs.
     * @param {TaskcDeleteManyArgs} args - Arguments to filter Taskcs to delete.
     * @example
     * // Delete a few Taskcs
     * const { count } = await prisma.taskc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskcDeleteManyArgs>(args?: SelectSubset<T, TaskcDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taskcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskcUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taskcs
     * const taskc = await prisma.taskc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskcUpdateManyArgs>(args: SelectSubset<T, TaskcUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taskcs and returns the data updated in the database.
     * @param {TaskcUpdateManyAndReturnArgs} args - Arguments to update many Taskcs.
     * @example
     * // Update many Taskcs
     * const taskc = await prisma.taskc.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Taskcs and only return the `id`
     * const taskcWithIdOnly = await prisma.taskc.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskcUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskcUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskcPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Taskc.
     * @param {TaskcUpsertArgs} args - Arguments to update or create a Taskc.
     * @example
     * // Update or create a Taskc
     * const taskc = await prisma.taskc.upsert({
     *   create: {
     *     // ... data to create a Taskc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taskc we want to update
     *   }
     * })
     */
    upsert<T extends TaskcUpsertArgs>(args: SelectSubset<T, TaskcUpsertArgs<ExtArgs>>): Prisma__TaskcClient<$Result.GetResult<Prisma.$TaskcPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Taskcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskcCountArgs} args - Arguments to filter Taskcs to count.
     * @example
     * // Count the number of Taskcs
     * const count = await prisma.taskc.count({
     *   where: {
     *     // ... the filter for the Taskcs we want to count
     *   }
     * })
    **/
    count<T extends TaskcCountArgs>(
      args?: Subset<T, TaskcCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskcCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taskc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskcAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskcAggregateArgs>(args: Subset<T, TaskcAggregateArgs>): Prisma.PrismaPromise<GetTaskcAggregateType<T>>

    /**
     * Group by Taskc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskcGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskcGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskcGroupByArgs['orderBy'] }
        : { orderBy?: TaskcGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskcGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskcGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Taskc model
   */
  readonly fields: TaskcFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Taskc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskcClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Taskc$userArgs<ExtArgs> = {}>(args?: Subset<T, Taskc$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tikect<T extends Taskc$tikectArgs<ExtArgs> = {}>(args?: Subset<T, Taskc$tikectArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Taskc model
   */
  interface TaskcFieldRefs {
    readonly id: FieldRef<"Taskc", 'Int'>
    readonly ticketId: FieldRef<"Taskc", 'Int'>
    readonly status: FieldRef<"Taskc", 'statusType'>
    readonly title: FieldRef<"Taskc", 'String'>
    readonly description: FieldRef<"Taskc", 'String'>
    readonly owner: FieldRef<"Taskc", 'Int'>
    readonly created: FieldRef<"Taskc", 'DateTime'>
    readonly updated: FieldRef<"Taskc", 'DateTime'>
    readonly finished: FieldRef<"Taskc", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Taskc findUnique
   */
  export type TaskcFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskc
     */
    select?: TaskcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskc
     */
    omit?: TaskcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcInclude<ExtArgs> | null
    /**
     * Filter, which Taskc to fetch.
     */
    where: TaskcWhereUniqueInput
  }

  /**
   * Taskc findUniqueOrThrow
   */
  export type TaskcFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskc
     */
    select?: TaskcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskc
     */
    omit?: TaskcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcInclude<ExtArgs> | null
    /**
     * Filter, which Taskc to fetch.
     */
    where: TaskcWhereUniqueInput
  }

  /**
   * Taskc findFirst
   */
  export type TaskcFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskc
     */
    select?: TaskcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskc
     */
    omit?: TaskcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcInclude<ExtArgs> | null
    /**
     * Filter, which Taskc to fetch.
     */
    where?: TaskcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taskcs to fetch.
     */
    orderBy?: TaskcOrderByWithRelationInput | TaskcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taskcs.
     */
    cursor?: TaskcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taskcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taskcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taskcs.
     */
    distinct?: TaskcScalarFieldEnum | TaskcScalarFieldEnum[]
  }

  /**
   * Taskc findFirstOrThrow
   */
  export type TaskcFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskc
     */
    select?: TaskcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskc
     */
    omit?: TaskcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcInclude<ExtArgs> | null
    /**
     * Filter, which Taskc to fetch.
     */
    where?: TaskcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taskcs to fetch.
     */
    orderBy?: TaskcOrderByWithRelationInput | TaskcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taskcs.
     */
    cursor?: TaskcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taskcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taskcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taskcs.
     */
    distinct?: TaskcScalarFieldEnum | TaskcScalarFieldEnum[]
  }

  /**
   * Taskc findMany
   */
  export type TaskcFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskc
     */
    select?: TaskcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskc
     */
    omit?: TaskcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcInclude<ExtArgs> | null
    /**
     * Filter, which Taskcs to fetch.
     */
    where?: TaskcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taskcs to fetch.
     */
    orderBy?: TaskcOrderByWithRelationInput | TaskcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Taskcs.
     */
    cursor?: TaskcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taskcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taskcs.
     */
    skip?: number
    distinct?: TaskcScalarFieldEnum | TaskcScalarFieldEnum[]
  }

  /**
   * Taskc create
   */
  export type TaskcCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskc
     */
    select?: TaskcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskc
     */
    omit?: TaskcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcInclude<ExtArgs> | null
    /**
     * The data needed to create a Taskc.
     */
    data: XOR<TaskcCreateInput, TaskcUncheckedCreateInput>
  }

  /**
   * Taskc createMany
   */
  export type TaskcCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Taskcs.
     */
    data: TaskcCreateManyInput | TaskcCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Taskc createManyAndReturn
   */
  export type TaskcCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskc
     */
    select?: TaskcSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Taskc
     */
    omit?: TaskcOmit<ExtArgs> | null
    /**
     * The data used to create many Taskcs.
     */
    data: TaskcCreateManyInput | TaskcCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Taskc update
   */
  export type TaskcUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskc
     */
    select?: TaskcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskc
     */
    omit?: TaskcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcInclude<ExtArgs> | null
    /**
     * The data needed to update a Taskc.
     */
    data: XOR<TaskcUpdateInput, TaskcUncheckedUpdateInput>
    /**
     * Choose, which Taskc to update.
     */
    where: TaskcWhereUniqueInput
  }

  /**
   * Taskc updateMany
   */
  export type TaskcUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Taskcs.
     */
    data: XOR<TaskcUpdateManyMutationInput, TaskcUncheckedUpdateManyInput>
    /**
     * Filter which Taskcs to update
     */
    where?: TaskcWhereInput
    /**
     * Limit how many Taskcs to update.
     */
    limit?: number
  }

  /**
   * Taskc updateManyAndReturn
   */
  export type TaskcUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskc
     */
    select?: TaskcSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Taskc
     */
    omit?: TaskcOmit<ExtArgs> | null
    /**
     * The data used to update Taskcs.
     */
    data: XOR<TaskcUpdateManyMutationInput, TaskcUncheckedUpdateManyInput>
    /**
     * Filter which Taskcs to update
     */
    where?: TaskcWhereInput
    /**
     * Limit how many Taskcs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Taskc upsert
   */
  export type TaskcUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskc
     */
    select?: TaskcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskc
     */
    omit?: TaskcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcInclude<ExtArgs> | null
    /**
     * The filter to search for the Taskc to update in case it exists.
     */
    where: TaskcWhereUniqueInput
    /**
     * In case the Taskc found by the `where` argument doesn't exist, create a new Taskc with this data.
     */
    create: XOR<TaskcCreateInput, TaskcUncheckedCreateInput>
    /**
     * In case the Taskc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskcUpdateInput, TaskcUncheckedUpdateInput>
  }

  /**
   * Taskc delete
   */
  export type TaskcDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskc
     */
    select?: TaskcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskc
     */
    omit?: TaskcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcInclude<ExtArgs> | null
    /**
     * Filter which Taskc to delete.
     */
    where: TaskcWhereUniqueInput
  }

  /**
   * Taskc deleteMany
   */
  export type TaskcDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taskcs to delete
     */
    where?: TaskcWhereInput
    /**
     * Limit how many Taskcs to delete.
     */
    limit?: number
  }

  /**
   * Taskc.user
   */
  export type Taskc$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * Taskc.tikect
   */
  export type Taskc$tikectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
  }

  /**
   * Taskc without action
   */
  export type TaskcDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taskc
     */
    select?: TaskcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taskc
     */
    omit?: TaskcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskcInclude<ExtArgs> | null
  }


  /**
   * Model notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    owner: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    owner: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    owner: number | null
    read: boolean | null
    text: string | null
    deeplink: string | null
    message: string | null
    type: $Enums.notificationType | null
    created: Date | null
    updated: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    owner: number | null
    read: boolean | null
    text: string | null
    deeplink: string | null
    message: string | null
    type: $Enums.notificationType | null
    created: Date | null
    updated: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    owner: number
    read: number
    text: number
    deeplink: number
    message: number
    type: number
    created: number
    updated: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    owner?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    owner?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    owner?: true
    read?: true
    text?: true
    deeplink?: true
    message?: true
    type?: true
    created?: true
    updated?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    owner?: true
    read?: true
    text?: true
    deeplink?: true
    message?: true
    type?: true
    created?: true
    updated?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    owner?: true
    read?: true
    text?: true
    deeplink?: true
    message?: true
    type?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notification to aggregate.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type notificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithAggregationInput | notificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: notificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    owner: number
    read: boolean
    text: string
    deeplink: string | null
    message: string
    type: $Enums.notificationType
    created: Date
    updated: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends notificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type notificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    read?: boolean
    text?: boolean
    deeplink?: boolean
    message?: boolean
    type?: boolean
    created?: boolean
    updated?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    read?: boolean
    text?: boolean
    deeplink?: boolean
    message?: boolean
    type?: boolean
    created?: boolean
    updated?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    read?: boolean
    text?: boolean
    deeplink?: boolean
    message?: boolean
    type?: boolean
    created?: boolean
    updated?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectScalar = {
    id?: boolean
    owner?: boolean
    read?: boolean
    text?: boolean
    deeplink?: boolean
    message?: boolean
    type?: boolean
    created?: boolean
    updated?: boolean
  }

  export type notificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner" | "read" | "text" | "deeplink" | "message" | "type" | "created" | "updated", ExtArgs["result"]["notification"]>
  export type notificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type notificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type notificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $notificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notification"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      owner: number
      read: boolean
      text: string
      deeplink: string | null
      message: string
      type: $Enums.notificationType
      created: Date
      updated: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type notificationGetPayload<S extends boolean | null | undefined | notificationDefaultArgs> = $Result.GetResult<Prisma.$notificationPayload, S>

  type notificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface notificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notification'], meta: { name: 'notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {notificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationFindUniqueArgs>(args: SelectSubset<T, notificationFindUniqueArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationFindFirstArgs>(args?: SelectSubset<T, notificationFindFirstArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationFindManyArgs>(args?: SelectSubset<T, notificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {notificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends notificationCreateArgs>(args: SelectSubset<T, notificationCreateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationCreateManyArgs>(args?: SelectSubset<T, notificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {notificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends notificationDeleteArgs>(args: SelectSubset<T, notificationDeleteArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {notificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationUpdateArgs>(args: SelectSubset<T, notificationUpdateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationDeleteManyArgs>(args?: SelectSubset<T, notificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationUpdateManyArgs>(args: SelectSubset<T, notificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificationUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {notificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends notificationUpsertArgs>(args: SelectSubset<T, notificationUpsertArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationCountArgs>(
      args?: Subset<T, notificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationGroupByArgs['orderBy'] }
        : { orderBy?: notificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notification model
   */
  readonly fields: notificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notification model
   */
  interface notificationFieldRefs {
    readonly id: FieldRef<"notification", 'Int'>
    readonly owner: FieldRef<"notification", 'Int'>
    readonly read: FieldRef<"notification", 'Boolean'>
    readonly text: FieldRef<"notification", 'String'>
    readonly deeplink: FieldRef<"notification", 'String'>
    readonly message: FieldRef<"notification", 'String'>
    readonly type: FieldRef<"notification", 'notificationType'>
    readonly created: FieldRef<"notification", 'DateTime'>
    readonly updated: FieldRef<"notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notification findUnique
   */
  export type notificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findUniqueOrThrow
   */
  export type notificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findFirst
   */
  export type notificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findFirstOrThrow
   */
  export type notificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findMany
   */
  export type notificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification create
   */
  export type notificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to create a notification.
     */
    data: XOR<notificationCreateInput, notificationUncheckedCreateInput>
  }

  /**
   * notification createMany
   */
  export type notificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notification createManyAndReturn
   */
  export type notificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notification update
   */
  export type notificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to update a notification.
     */
    data: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
    /**
     * Choose, which notification to update.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification updateMany
   */
  export type notificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notification updateManyAndReturn
   */
  export type notificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notification upsert
   */
  export type notificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The filter to search for the notification to update in case it exists.
     */
    where: notificationWhereUniqueInput
    /**
     * In case the notification found by the `where` argument doesn't exist, create a new notification with this data.
     */
    create: XOR<notificationCreateInput, notificationUncheckedCreateInput>
    /**
     * In case the notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
  }

  /**
   * notification delete
   */
  export type notificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter which notification to delete.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification deleteMany
   */
  export type notificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notification without action
   */
  export type notificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SectorScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    total: 'total'
  };

  export type SectorScalarFieldEnum = (typeof SectorScalarFieldEnum)[keyof typeof SectorScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    sectorid: 'sectorid',
    status: 'status',
    priority: 'priority',
    created: 'created',
    finished: 'finished',
    updated: 'updated'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastname: 'lastname',
    email: 'email',
    tel: 'tel',
    password: 'password',
    bio: 'bio',
    type: 'type',
    sectorid: 'sectorid',
    created: 'created',
    updated: 'updated'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TaskcScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    status: 'status',
    title: 'title',
    description: 'description',
    owner: 'owner',
    created: 'created',
    updated: 'updated',
    finished: 'finished'
  };

  export type TaskcScalarFieldEnum = (typeof TaskcScalarFieldEnum)[keyof typeof TaskcScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    owner: 'owner',
    read: 'read',
    text: 'text',
    deeplink: 'deeplink',
    message: 'message',
    type: 'type',
    created: 'created',
    updated: 'updated'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'statusType'
   */
  export type EnumstatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusType'>
    


  /**
   * Reference to a field of type 'statusType[]'
   */
  export type ListEnumstatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusType[]'>
    


  /**
   * Reference to a field of type 'priorityType'
   */
  export type EnumpriorityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'priorityType'>
    


  /**
   * Reference to a field of type 'priorityType[]'
   */
  export type ListEnumpriorityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'priorityType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'userType'
   */
  export type EnumuserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userType'>
    


  /**
   * Reference to a field of type 'userType[]'
   */
  export type ListEnumuserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'notificationType'
   */
  export type EnumnotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notificationType'>
    


  /**
   * Reference to a field of type 'notificationType[]'
   */
  export type ListEnumnotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notificationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type sectorWhereInput = {
    AND?: sectorWhereInput | sectorWhereInput[]
    OR?: sectorWhereInput[]
    NOT?: sectorWhereInput | sectorWhereInput[]
    id?: IntFilter<"sector"> | number
    title?: StringFilter<"sector"> | string
    description?: StringNullableFilter<"sector"> | string | null
    total?: IntFilter<"sector"> | number
    users?: UserListRelationFilter
    Ticket?: TicketListRelationFilter
  }

  export type sectorOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    total?: SortOrder
    users?: userOrderByRelationAggregateInput
    Ticket?: TicketOrderByRelationAggregateInput
  }

  export type sectorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: sectorWhereInput | sectorWhereInput[]
    OR?: sectorWhereInput[]
    NOT?: sectorWhereInput | sectorWhereInput[]
    description?: StringNullableFilter<"sector"> | string | null
    total?: IntFilter<"sector"> | number
    users?: UserListRelationFilter
    Ticket?: TicketListRelationFilter
  }, "id" | "title">

  export type sectorOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    total?: SortOrder
    _count?: sectorCountOrderByAggregateInput
    _avg?: sectorAvgOrderByAggregateInput
    _max?: sectorMaxOrderByAggregateInput
    _min?: sectorMinOrderByAggregateInput
    _sum?: sectorSumOrderByAggregateInput
  }

  export type sectorScalarWhereWithAggregatesInput = {
    AND?: sectorScalarWhereWithAggregatesInput | sectorScalarWhereWithAggregatesInput[]
    OR?: sectorScalarWhereWithAggregatesInput[]
    NOT?: sectorScalarWhereWithAggregatesInput | sectorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sector"> | number
    title?: StringWithAggregatesFilter<"sector"> | string
    description?: StringNullableWithAggregatesFilter<"sector"> | string | null
    total?: IntWithAggregatesFilter<"sector"> | number
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    title?: StringFilter<"Ticket"> | string
    description?: StringNullableFilter<"Ticket"> | string | null
    sectorid?: IntNullableFilter<"Ticket"> | number | null
    status?: EnumstatusTypeFilter<"Ticket"> | $Enums.statusType
    priority?: EnumpriorityTypeFilter<"Ticket"> | $Enums.priorityType
    created?: DateTimeFilter<"Ticket"> | Date | string
    finished?: DateTimeFilter<"Ticket"> | Date | string
    updated?: DateTimeFilter<"Ticket"> | Date | string
    Taskc?: TaskcListRelationFilter
    sector?: XOR<SectorNullableScalarRelationFilter, sectorWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    sectorid?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    created?: SortOrder
    finished?: SortOrder
    updated?: SortOrder
    Taskc?: TaskcOrderByRelationAggregateInput
    sector?: sectorOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    title?: StringFilter<"Ticket"> | string
    description?: StringNullableFilter<"Ticket"> | string | null
    sectorid?: IntNullableFilter<"Ticket"> | number | null
    status?: EnumstatusTypeFilter<"Ticket"> | $Enums.statusType
    priority?: EnumpriorityTypeFilter<"Ticket"> | $Enums.priorityType
    created?: DateTimeFilter<"Ticket"> | Date | string
    finished?: DateTimeFilter<"Ticket"> | Date | string
    updated?: DateTimeFilter<"Ticket"> | Date | string
    Taskc?: TaskcListRelationFilter
    sector?: XOR<SectorNullableScalarRelationFilter, sectorWhereInput> | null
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    sectorid?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    created?: SortOrder
    finished?: SortOrder
    updated?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    title?: StringWithAggregatesFilter<"Ticket"> | string
    description?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    sectorid?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    status?: EnumstatusTypeWithAggregatesFilter<"Ticket"> | $Enums.statusType
    priority?: EnumpriorityTypeWithAggregatesFilter<"Ticket"> | $Enums.priorityType
    created?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    finished?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    lastname?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    tel?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    bio?: StringNullableFilter<"user"> | string | null
    type?: EnumuserTypeFilter<"user"> | $Enums.userType
    sectorid?: IntNullableFilter<"user"> | number | null
    created?: DateTimeFilter<"user"> | Date | string
    updated?: DateTimeFilter<"user"> | Date | string
    sector?: XOR<SectorNullableScalarRelationFilter, sectorWhereInput> | null
    Taskc?: TaskcListRelationFilter
    notification?: NotificationListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    bio?: SortOrderInput | SortOrder
    type?: SortOrder
    sectorid?: SortOrderInput | SortOrder
    created?: SortOrder
    updated?: SortOrder
    sector?: sectorOrderByWithRelationInput
    Taskc?: TaskcOrderByRelationAggregateInput
    notification?: notificationOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    tel?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    lastname?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    bio?: StringNullableFilter<"user"> | string | null
    type?: EnumuserTypeFilter<"user"> | $Enums.userType
    sectorid?: IntNullableFilter<"user"> | number | null
    created?: DateTimeFilter<"user"> | Date | string
    updated?: DateTimeFilter<"user"> | Date | string
    sector?: XOR<SectorNullableScalarRelationFilter, sectorWhereInput> | null
    Taskc?: TaskcListRelationFilter
    notification?: NotificationListRelationFilter
  }, "id" | "email" | "tel">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    bio?: SortOrderInput | SortOrder
    type?: SortOrder
    sectorid?: SortOrderInput | SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    lastname?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    tel?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    bio?: StringNullableWithAggregatesFilter<"user"> | string | null
    type?: EnumuserTypeWithAggregatesFilter<"user"> | $Enums.userType
    sectorid?: IntNullableWithAggregatesFilter<"user"> | number | null
    created?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type TaskcWhereInput = {
    AND?: TaskcWhereInput | TaskcWhereInput[]
    OR?: TaskcWhereInput[]
    NOT?: TaskcWhereInput | TaskcWhereInput[]
    id?: IntFilter<"Taskc"> | number
    ticketId?: IntNullableFilter<"Taskc"> | number | null
    status?: EnumstatusTypeFilter<"Taskc"> | $Enums.statusType
    title?: StringFilter<"Taskc"> | string
    description?: StringFilter<"Taskc"> | string
    owner?: IntNullableFilter<"Taskc"> | number | null
    created?: DateTimeFilter<"Taskc"> | Date | string
    updated?: DateTimeFilter<"Taskc"> | Date | string
    finished?: DateTimeNullableFilter<"Taskc"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    tikect?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
  }

  export type TaskcOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    owner?: SortOrderInput | SortOrder
    created?: SortOrder
    updated?: SortOrder
    finished?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    tikect?: TicketOrderByWithRelationInput
  }

  export type TaskcWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ticketId_owner?: TaskcTicketIdOwnerCompoundUniqueInput
    AND?: TaskcWhereInput | TaskcWhereInput[]
    OR?: TaskcWhereInput[]
    NOT?: TaskcWhereInput | TaskcWhereInput[]
    ticketId?: IntNullableFilter<"Taskc"> | number | null
    status?: EnumstatusTypeFilter<"Taskc"> | $Enums.statusType
    title?: StringFilter<"Taskc"> | string
    description?: StringFilter<"Taskc"> | string
    owner?: IntNullableFilter<"Taskc"> | number | null
    created?: DateTimeFilter<"Taskc"> | Date | string
    updated?: DateTimeFilter<"Taskc"> | Date | string
    finished?: DateTimeNullableFilter<"Taskc"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    tikect?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
  }, "id" | "ticketId_owner">

  export type TaskcOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    owner?: SortOrderInput | SortOrder
    created?: SortOrder
    updated?: SortOrder
    finished?: SortOrderInput | SortOrder
    _count?: TaskcCountOrderByAggregateInput
    _avg?: TaskcAvgOrderByAggregateInput
    _max?: TaskcMaxOrderByAggregateInput
    _min?: TaskcMinOrderByAggregateInput
    _sum?: TaskcSumOrderByAggregateInput
  }

  export type TaskcScalarWhereWithAggregatesInput = {
    AND?: TaskcScalarWhereWithAggregatesInput | TaskcScalarWhereWithAggregatesInput[]
    OR?: TaskcScalarWhereWithAggregatesInput[]
    NOT?: TaskcScalarWhereWithAggregatesInput | TaskcScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Taskc"> | number
    ticketId?: IntNullableWithAggregatesFilter<"Taskc"> | number | null
    status?: EnumstatusTypeWithAggregatesFilter<"Taskc"> | $Enums.statusType
    title?: StringWithAggregatesFilter<"Taskc"> | string
    description?: StringWithAggregatesFilter<"Taskc"> | string
    owner?: IntNullableWithAggregatesFilter<"Taskc"> | number | null
    created?: DateTimeWithAggregatesFilter<"Taskc"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Taskc"> | Date | string
    finished?: DateTimeNullableWithAggregatesFilter<"Taskc"> | Date | string | null
  }

  export type notificationWhereInput = {
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    id?: IntFilter<"notification"> | number
    owner?: IntFilter<"notification"> | number
    read?: BoolFilter<"notification"> | boolean
    text?: StringFilter<"notification"> | string
    deeplink?: StringNullableFilter<"notification"> | string | null
    message?: StringFilter<"notification"> | string
    type?: EnumnotificationTypeFilter<"notification"> | $Enums.notificationType
    created?: DateTimeFilter<"notification"> | Date | string
    updated?: DateTimeFilter<"notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type notificationOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    read?: SortOrder
    text?: SortOrder
    deeplink?: SortOrderInput | SortOrder
    message?: SortOrder
    type?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type notificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    owner?: IntFilter<"notification"> | number
    read?: BoolFilter<"notification"> | boolean
    text?: StringFilter<"notification"> | string
    deeplink?: StringNullableFilter<"notification"> | string | null
    message?: StringFilter<"notification"> | string
    type?: EnumnotificationTypeFilter<"notification"> | $Enums.notificationType
    created?: DateTimeFilter<"notification"> | Date | string
    updated?: DateTimeFilter<"notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type notificationOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    read?: SortOrder
    text?: SortOrder
    deeplink?: SortOrderInput | SortOrder
    message?: SortOrder
    type?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: notificationCountOrderByAggregateInput
    _avg?: notificationAvgOrderByAggregateInput
    _max?: notificationMaxOrderByAggregateInput
    _min?: notificationMinOrderByAggregateInput
    _sum?: notificationSumOrderByAggregateInput
  }

  export type notificationScalarWhereWithAggregatesInput = {
    AND?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    OR?: notificationScalarWhereWithAggregatesInput[]
    NOT?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notification"> | number
    owner?: IntWithAggregatesFilter<"notification"> | number
    read?: BoolWithAggregatesFilter<"notification"> | boolean
    text?: StringWithAggregatesFilter<"notification"> | string
    deeplink?: StringNullableWithAggregatesFilter<"notification"> | string | null
    message?: StringWithAggregatesFilter<"notification"> | string
    type?: EnumnotificationTypeWithAggregatesFilter<"notification"> | $Enums.notificationType
    created?: DateTimeWithAggregatesFilter<"notification"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"notification"> | Date | string
  }

  export type sectorCreateInput = {
    title: string
    description?: string | null
    total?: number
    users?: userCreateNestedManyWithoutSectorInput
    Ticket?: TicketCreateNestedManyWithoutSectorInput
  }

  export type sectorUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    total?: number
    users?: userUncheckedCreateNestedManyWithoutSectorInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutSectorInput
  }

  export type sectorUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
    users?: userUpdateManyWithoutSectorNestedInput
    Ticket?: TicketUpdateManyWithoutSectorNestedInput
  }

  export type sectorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
    users?: userUncheckedUpdateManyWithoutSectorNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutSectorNestedInput
  }

  export type sectorCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    total?: number
  }

  export type sectorUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
  }

  export type sectorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateInput = {
    title: string
    description?: string | null
    status?: $Enums.statusType
    priority?: $Enums.priorityType
    created?: Date | string
    finished: Date | string
    updated?: Date | string
    Taskc?: TaskcCreateNestedManyWithoutTikectInput
    sector?: sectorCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    sectorid?: number | null
    status?: $Enums.statusType
    priority?: $Enums.priorityType
    created?: Date | string
    finished: Date | string
    updated?: Date | string
    Taskc?: TaskcUncheckedCreateNestedManyWithoutTikectInput
  }

  export type TicketUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    priority?: EnumpriorityTypeFieldUpdateOperationsInput | $Enums.priorityType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    Taskc?: TaskcUpdateManyWithoutTikectNestedInput
    sector?: sectorUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sectorid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    priority?: EnumpriorityTypeFieldUpdateOperationsInput | $Enums.priorityType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    Taskc?: TaskcUncheckedUpdateManyWithoutTikectNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    sectorid?: number | null
    status?: $Enums.statusType
    priority?: $Enums.priorityType
    created?: Date | string
    finished: Date | string
    updated?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    priority?: EnumpriorityTypeFieldUpdateOperationsInput | $Enums.priorityType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sectorid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    priority?: EnumpriorityTypeFieldUpdateOperationsInput | $Enums.priorityType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    name: string
    lastname: string
    email: string
    tel: string
    password: string
    bio?: string | null
    type?: $Enums.userType
    created?: Date | string
    updated?: Date | string
    sector?: sectorCreateNestedOneWithoutUsersInput
    Taskc?: TaskcCreateNestedManyWithoutUserInput
    notification?: notificationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    lastname: string
    email: string
    tel: string
    password: string
    bio?: string | null
    type?: $Enums.userType
    sectorid?: number | null
    created?: Date | string
    updated?: Date | string
    Taskc?: TaskcUncheckedCreateNestedManyWithoutUserInput
    notification?: notificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sector?: sectorUpdateOneWithoutUsersNestedInput
    Taskc?: TaskcUpdateManyWithoutUserNestedInput
    notification?: notificationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    sectorid?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    Taskc?: TaskcUncheckedUpdateManyWithoutUserNestedInput
    notification?: notificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    lastname: string
    email: string
    tel: string
    password: string
    bio?: string | null
    type?: $Enums.userType
    sectorid?: number | null
    created?: Date | string
    updated?: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    sectorid?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskcCreateInput = {
    status?: $Enums.statusType
    title: string
    description: string
    created?: Date | string
    updated?: Date | string
    finished?: Date | string | null
    user?: userCreateNestedOneWithoutTaskcInput
    tikect?: TicketCreateNestedOneWithoutTaskcInput
  }

  export type TaskcUncheckedCreateInput = {
    id?: number
    ticketId?: number | null
    status?: $Enums.statusType
    title: string
    description: string
    owner?: number | null
    created?: Date | string
    updated?: Date | string
    finished?: Date | string | null
  }

  export type TaskcUpdateInput = {
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutTaskcNestedInput
    tikect?: TicketUpdateOneWithoutTaskcNestedInput
  }

  export type TaskcUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    owner?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskcCreateManyInput = {
    id?: number
    ticketId?: number | null
    status?: $Enums.statusType
    title: string
    description: string
    owner?: number | null
    created?: Date | string
    updated?: Date | string
    finished?: Date | string | null
  }

  export type TaskcUpdateManyMutationInput = {
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskcUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    owner?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationCreateInput = {
    read?: boolean
    text: string
    deeplink?: string | null
    message: string
    type?: $Enums.notificationType
    created?: Date | string
    updated?: Date | string
    user: userCreateNestedOneWithoutNotificationInput
  }

  export type notificationUncheckedCreateInput = {
    id?: number
    owner: number
    read?: boolean
    text: string
    deeplink?: string | null
    message: string
    type?: $Enums.notificationType
    created?: Date | string
    updated?: Date | string
  }

  export type notificationUpdateInput = {
    read?: BoolFieldUpdateOperationsInput | boolean
    text?: StringFieldUpdateOperationsInput | string
    deeplink?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumnotificationTypeFieldUpdateOperationsInput | $Enums.notificationType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type notificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner?: IntFieldUpdateOperationsInput | number
    read?: BoolFieldUpdateOperationsInput | boolean
    text?: StringFieldUpdateOperationsInput | string
    deeplink?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumnotificationTypeFieldUpdateOperationsInput | $Enums.notificationType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationCreateManyInput = {
    id?: number
    owner: number
    read?: boolean
    text: string
    deeplink?: string | null
    message: string
    type?: $Enums.notificationType
    created?: Date | string
    updated?: Date | string
  }

  export type notificationUpdateManyMutationInput = {
    read?: BoolFieldUpdateOperationsInput | boolean
    text?: StringFieldUpdateOperationsInput | string
    deeplink?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumnotificationTypeFieldUpdateOperationsInput | $Enums.notificationType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner?: IntFieldUpdateOperationsInput | number
    read?: BoolFieldUpdateOperationsInput | boolean
    text?: StringFieldUpdateOperationsInput | string
    deeplink?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumnotificationTypeFieldUpdateOperationsInput | $Enums.notificationType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sectorCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    total?: SortOrder
  }

  export type sectorAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type sectorMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    total?: SortOrder
  }

  export type sectorMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    total?: SortOrder
  }

  export type sectorSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumstatusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.statusType | EnumstatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.statusType[] | ListEnumstatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusType[] | ListEnumstatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusTypeFilter<$PrismaModel> | $Enums.statusType
  }

  export type EnumpriorityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.priorityType | EnumpriorityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.priorityType[] | ListEnumpriorityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.priorityType[] | ListEnumpriorityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpriorityTypeFilter<$PrismaModel> | $Enums.priorityType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TaskcListRelationFilter = {
    every?: TaskcWhereInput
    some?: TaskcWhereInput
    none?: TaskcWhereInput
  }

  export type SectorNullableScalarRelationFilter = {
    is?: sectorWhereInput | null
    isNot?: sectorWhereInput | null
  }

  export type TaskcOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sectorid?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    created?: SortOrder
    finished?: SortOrder
    updated?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    sectorid?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sectorid?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    created?: SortOrder
    finished?: SortOrder
    updated?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sectorid?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    created?: SortOrder
    finished?: SortOrder
    updated?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    sectorid?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumstatusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusType | EnumstatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.statusType[] | ListEnumstatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusType[] | ListEnumstatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusTypeWithAggregatesFilter<$PrismaModel> | $Enums.statusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusTypeFilter<$PrismaModel>
    _max?: NestedEnumstatusTypeFilter<$PrismaModel>
  }

  export type EnumpriorityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.priorityType | EnumpriorityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.priorityType[] | ListEnumpriorityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.priorityType[] | ListEnumpriorityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpriorityTypeWithAggregatesFilter<$PrismaModel> | $Enums.priorityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpriorityTypeFilter<$PrismaModel>
    _max?: NestedEnumpriorityTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumuserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.userType | EnumuserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumuserTypeFilter<$PrismaModel> | $Enums.userType
  }

  export type NotificationListRelationFilter = {
    every?: notificationWhereInput
    some?: notificationWhereInput
    none?: notificationWhereInput
  }

  export type notificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    type?: SortOrder
    sectorid?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    sectorid?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    type?: SortOrder
    sectorid?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    type?: SortOrder
    sectorid?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    sectorid?: SortOrder
  }

  export type EnumuserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userType | EnumuserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumuserTypeWithAggregatesFilter<$PrismaModel> | $Enums.userType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserTypeFilter<$PrismaModel>
    _max?: NestedEnumuserTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type TicketNullableScalarRelationFilter = {
    is?: TicketWhereInput | null
    isNot?: TicketWhereInput | null
  }

  export type TaskcTicketIdOwnerCompoundUniqueInput = {
    ticketId: number
    owner: number
  }

  export type TaskcCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    owner?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    finished?: SortOrder
  }

  export type TaskcAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    owner?: SortOrder
  }

  export type TaskcMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    owner?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    finished?: SortOrder
  }

  export type TaskcMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    owner?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    finished?: SortOrder
  }

  export type TaskcSumOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    owner?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumnotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.notificationType | EnumnotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.notificationType[] | ListEnumnotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.notificationType[] | ListEnumnotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumnotificationTypeFilter<$PrismaModel> | $Enums.notificationType
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type notificationCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    read?: SortOrder
    text?: SortOrder
    deeplink?: SortOrder
    message?: SortOrder
    type?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type notificationAvgOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type notificationMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    read?: SortOrder
    text?: SortOrder
    deeplink?: SortOrder
    message?: SortOrder
    type?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type notificationMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    read?: SortOrder
    text?: SortOrder
    deeplink?: SortOrder
    message?: SortOrder
    type?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type notificationSumOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumnotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notificationType | EnumnotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.notificationType[] | ListEnumnotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.notificationType[] | ListEnumnotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumnotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.notificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumnotificationTypeFilter<$PrismaModel>
  }

  export type userCreateNestedManyWithoutSectorInput = {
    create?: XOR<userCreateWithoutSectorInput, userUncheckedCreateWithoutSectorInput> | userCreateWithoutSectorInput[] | userUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: userCreateOrConnectWithoutSectorInput | userCreateOrConnectWithoutSectorInput[]
    createMany?: userCreateManySectorInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutSectorInput = {
    create?: XOR<TicketCreateWithoutSectorInput, TicketUncheckedCreateWithoutSectorInput> | TicketCreateWithoutSectorInput[] | TicketUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSectorInput | TicketCreateOrConnectWithoutSectorInput[]
    createMany?: TicketCreateManySectorInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutSectorInput = {
    create?: XOR<userCreateWithoutSectorInput, userUncheckedCreateWithoutSectorInput> | userCreateWithoutSectorInput[] | userUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: userCreateOrConnectWithoutSectorInput | userCreateOrConnectWithoutSectorInput[]
    createMany?: userCreateManySectorInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutSectorInput = {
    create?: XOR<TicketCreateWithoutSectorInput, TicketUncheckedCreateWithoutSectorInput> | TicketCreateWithoutSectorInput[] | TicketUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSectorInput | TicketCreateOrConnectWithoutSectorInput[]
    createMany?: TicketCreateManySectorInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateManyWithoutSectorNestedInput = {
    create?: XOR<userCreateWithoutSectorInput, userUncheckedCreateWithoutSectorInput> | userCreateWithoutSectorInput[] | userUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: userCreateOrConnectWithoutSectorInput | userCreateOrConnectWithoutSectorInput[]
    upsert?: userUpsertWithWhereUniqueWithoutSectorInput | userUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: userCreateManySectorInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutSectorInput | userUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: userUpdateManyWithWhereWithoutSectorInput | userUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutSectorNestedInput = {
    create?: XOR<TicketCreateWithoutSectorInput, TicketUncheckedCreateWithoutSectorInput> | TicketCreateWithoutSectorInput[] | TicketUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSectorInput | TicketCreateOrConnectWithoutSectorInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSectorInput | TicketUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: TicketCreateManySectorInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSectorInput | TicketUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSectorInput | TicketUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutSectorNestedInput = {
    create?: XOR<userCreateWithoutSectorInput, userUncheckedCreateWithoutSectorInput> | userCreateWithoutSectorInput[] | userUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: userCreateOrConnectWithoutSectorInput | userCreateOrConnectWithoutSectorInput[]
    upsert?: userUpsertWithWhereUniqueWithoutSectorInput | userUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: userCreateManySectorInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutSectorInput | userUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: userUpdateManyWithWhereWithoutSectorInput | userUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutSectorNestedInput = {
    create?: XOR<TicketCreateWithoutSectorInput, TicketUncheckedCreateWithoutSectorInput> | TicketCreateWithoutSectorInput[] | TicketUncheckedCreateWithoutSectorInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSectorInput | TicketCreateOrConnectWithoutSectorInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSectorInput | TicketUpsertWithWhereUniqueWithoutSectorInput[]
    createMany?: TicketCreateManySectorInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSectorInput | TicketUpdateWithWhereUniqueWithoutSectorInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSectorInput | TicketUpdateManyWithWhereWithoutSectorInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TaskcCreateNestedManyWithoutTikectInput = {
    create?: XOR<TaskcCreateWithoutTikectInput, TaskcUncheckedCreateWithoutTikectInput> | TaskcCreateWithoutTikectInput[] | TaskcUncheckedCreateWithoutTikectInput[]
    connectOrCreate?: TaskcCreateOrConnectWithoutTikectInput | TaskcCreateOrConnectWithoutTikectInput[]
    createMany?: TaskcCreateManyTikectInputEnvelope
    connect?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
  }

  export type sectorCreateNestedOneWithoutTicketInput = {
    create?: XOR<sectorCreateWithoutTicketInput, sectorUncheckedCreateWithoutTicketInput>
    connectOrCreate?: sectorCreateOrConnectWithoutTicketInput
    connect?: sectorWhereUniqueInput
  }

  export type TaskcUncheckedCreateNestedManyWithoutTikectInput = {
    create?: XOR<TaskcCreateWithoutTikectInput, TaskcUncheckedCreateWithoutTikectInput> | TaskcCreateWithoutTikectInput[] | TaskcUncheckedCreateWithoutTikectInput[]
    connectOrCreate?: TaskcCreateOrConnectWithoutTikectInput | TaskcCreateOrConnectWithoutTikectInput[]
    createMany?: TaskcCreateManyTikectInputEnvelope
    connect?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
  }

  export type EnumstatusTypeFieldUpdateOperationsInput = {
    set?: $Enums.statusType
  }

  export type EnumpriorityTypeFieldUpdateOperationsInput = {
    set?: $Enums.priorityType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TaskcUpdateManyWithoutTikectNestedInput = {
    create?: XOR<TaskcCreateWithoutTikectInput, TaskcUncheckedCreateWithoutTikectInput> | TaskcCreateWithoutTikectInput[] | TaskcUncheckedCreateWithoutTikectInput[]
    connectOrCreate?: TaskcCreateOrConnectWithoutTikectInput | TaskcCreateOrConnectWithoutTikectInput[]
    upsert?: TaskcUpsertWithWhereUniqueWithoutTikectInput | TaskcUpsertWithWhereUniqueWithoutTikectInput[]
    createMany?: TaskcCreateManyTikectInputEnvelope
    set?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    disconnect?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    delete?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    connect?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    update?: TaskcUpdateWithWhereUniqueWithoutTikectInput | TaskcUpdateWithWhereUniqueWithoutTikectInput[]
    updateMany?: TaskcUpdateManyWithWhereWithoutTikectInput | TaskcUpdateManyWithWhereWithoutTikectInput[]
    deleteMany?: TaskcScalarWhereInput | TaskcScalarWhereInput[]
  }

  export type sectorUpdateOneWithoutTicketNestedInput = {
    create?: XOR<sectorCreateWithoutTicketInput, sectorUncheckedCreateWithoutTicketInput>
    connectOrCreate?: sectorCreateOrConnectWithoutTicketInput
    upsert?: sectorUpsertWithoutTicketInput
    disconnect?: sectorWhereInput | boolean
    delete?: sectorWhereInput | boolean
    connect?: sectorWhereUniqueInput
    update?: XOR<XOR<sectorUpdateToOneWithWhereWithoutTicketInput, sectorUpdateWithoutTicketInput>, sectorUncheckedUpdateWithoutTicketInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskcUncheckedUpdateManyWithoutTikectNestedInput = {
    create?: XOR<TaskcCreateWithoutTikectInput, TaskcUncheckedCreateWithoutTikectInput> | TaskcCreateWithoutTikectInput[] | TaskcUncheckedCreateWithoutTikectInput[]
    connectOrCreate?: TaskcCreateOrConnectWithoutTikectInput | TaskcCreateOrConnectWithoutTikectInput[]
    upsert?: TaskcUpsertWithWhereUniqueWithoutTikectInput | TaskcUpsertWithWhereUniqueWithoutTikectInput[]
    createMany?: TaskcCreateManyTikectInputEnvelope
    set?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    disconnect?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    delete?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    connect?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    update?: TaskcUpdateWithWhereUniqueWithoutTikectInput | TaskcUpdateWithWhereUniqueWithoutTikectInput[]
    updateMany?: TaskcUpdateManyWithWhereWithoutTikectInput | TaskcUpdateManyWithWhereWithoutTikectInput[]
    deleteMany?: TaskcScalarWhereInput | TaskcScalarWhereInput[]
  }

  export type sectorCreateNestedOneWithoutUsersInput = {
    create?: XOR<sectorCreateWithoutUsersInput, sectorUncheckedCreateWithoutUsersInput>
    connectOrCreate?: sectorCreateOrConnectWithoutUsersInput
    connect?: sectorWhereUniqueInput
  }

  export type TaskcCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskcCreateWithoutUserInput, TaskcUncheckedCreateWithoutUserInput> | TaskcCreateWithoutUserInput[] | TaskcUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskcCreateOrConnectWithoutUserInput | TaskcCreateOrConnectWithoutUserInput[]
    createMany?: TaskcCreateManyUserInputEnvelope
    connect?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
  }

  export type notificationCreateNestedManyWithoutUserInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type TaskcUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskcCreateWithoutUserInput, TaskcUncheckedCreateWithoutUserInput> | TaskcCreateWithoutUserInput[] | TaskcUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskcCreateOrConnectWithoutUserInput | TaskcCreateOrConnectWithoutUserInput[]
    createMany?: TaskcCreateManyUserInputEnvelope
    connect?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
  }

  export type notificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type EnumuserTypeFieldUpdateOperationsInput = {
    set?: $Enums.userType
  }

  export type sectorUpdateOneWithoutUsersNestedInput = {
    create?: XOR<sectorCreateWithoutUsersInput, sectorUncheckedCreateWithoutUsersInput>
    connectOrCreate?: sectorCreateOrConnectWithoutUsersInput
    upsert?: sectorUpsertWithoutUsersInput
    disconnect?: sectorWhereInput | boolean
    delete?: sectorWhereInput | boolean
    connect?: sectorWhereUniqueInput
    update?: XOR<XOR<sectorUpdateToOneWithWhereWithoutUsersInput, sectorUpdateWithoutUsersInput>, sectorUncheckedUpdateWithoutUsersInput>
  }

  export type TaskcUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskcCreateWithoutUserInput, TaskcUncheckedCreateWithoutUserInput> | TaskcCreateWithoutUserInput[] | TaskcUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskcCreateOrConnectWithoutUserInput | TaskcCreateOrConnectWithoutUserInput[]
    upsert?: TaskcUpsertWithWhereUniqueWithoutUserInput | TaskcUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskcCreateManyUserInputEnvelope
    set?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    disconnect?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    delete?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    connect?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    update?: TaskcUpdateWithWhereUniqueWithoutUserInput | TaskcUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskcUpdateManyWithWhereWithoutUserInput | TaskcUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskcScalarWhereInput | TaskcScalarWhereInput[]
  }

  export type notificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUserInput | notificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUserInput | notificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUserInput | notificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type TaskcUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskcCreateWithoutUserInput, TaskcUncheckedCreateWithoutUserInput> | TaskcCreateWithoutUserInput[] | TaskcUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskcCreateOrConnectWithoutUserInput | TaskcCreateOrConnectWithoutUserInput[]
    upsert?: TaskcUpsertWithWhereUniqueWithoutUserInput | TaskcUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskcCreateManyUserInputEnvelope
    set?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    disconnect?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    delete?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    connect?: TaskcWhereUniqueInput | TaskcWhereUniqueInput[]
    update?: TaskcUpdateWithWhereUniqueWithoutUserInput | TaskcUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskcUpdateManyWithWhereWithoutUserInput | TaskcUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskcScalarWhereInput | TaskcScalarWhereInput[]
  }

  export type notificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUserInput | notificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUserInput | notificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUserInput | notificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutTaskcInput = {
    create?: XOR<userCreateWithoutTaskcInput, userUncheckedCreateWithoutTaskcInput>
    connectOrCreate?: userCreateOrConnectWithoutTaskcInput
    connect?: userWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutTaskcInput = {
    create?: XOR<TicketCreateWithoutTaskcInput, TicketUncheckedCreateWithoutTaskcInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTaskcInput
    connect?: TicketWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneWithoutTaskcNestedInput = {
    create?: XOR<userCreateWithoutTaskcInput, userUncheckedCreateWithoutTaskcInput>
    connectOrCreate?: userCreateOrConnectWithoutTaskcInput
    upsert?: userUpsertWithoutTaskcInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTaskcInput, userUpdateWithoutTaskcInput>, userUncheckedUpdateWithoutTaskcInput>
  }

  export type TicketUpdateOneWithoutTaskcNestedInput = {
    create?: XOR<TicketCreateWithoutTaskcInput, TicketUncheckedCreateWithoutTaskcInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTaskcInput
    upsert?: TicketUpsertWithoutTaskcInput
    disconnect?: TicketWhereInput | boolean
    delete?: TicketWhereInput | boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutTaskcInput, TicketUpdateWithoutTaskcInput>, TicketUncheckedUpdateWithoutTaskcInput>
  }

  export type userCreateNestedOneWithoutNotificationInput = {
    create?: XOR<userCreateWithoutNotificationInput, userUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: userCreateOrConnectWithoutNotificationInput
    connect?: userWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumnotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.notificationType
  }

  export type userUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<userCreateWithoutNotificationInput, userUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: userCreateOrConnectWithoutNotificationInput
    upsert?: userUpsertWithoutNotificationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutNotificationInput, userUpdateWithoutNotificationInput>, userUncheckedUpdateWithoutNotificationInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumstatusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.statusType | EnumstatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.statusType[] | ListEnumstatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusType[] | ListEnumstatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusTypeFilter<$PrismaModel> | $Enums.statusType
  }

  export type NestedEnumpriorityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.priorityType | EnumpriorityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.priorityType[] | ListEnumpriorityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.priorityType[] | ListEnumpriorityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpriorityTypeFilter<$PrismaModel> | $Enums.priorityType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumstatusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusType | EnumstatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.statusType[] | ListEnumstatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusType[] | ListEnumstatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusTypeWithAggregatesFilter<$PrismaModel> | $Enums.statusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusTypeFilter<$PrismaModel>
    _max?: NestedEnumstatusTypeFilter<$PrismaModel>
  }

  export type NestedEnumpriorityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.priorityType | EnumpriorityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.priorityType[] | ListEnumpriorityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.priorityType[] | ListEnumpriorityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpriorityTypeWithAggregatesFilter<$PrismaModel> | $Enums.priorityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpriorityTypeFilter<$PrismaModel>
    _max?: NestedEnumpriorityTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumuserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.userType | EnumuserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumuserTypeFilter<$PrismaModel> | $Enums.userType
  }

  export type NestedEnumuserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userType | EnumuserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumuserTypeWithAggregatesFilter<$PrismaModel> | $Enums.userType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserTypeFilter<$PrismaModel>
    _max?: NestedEnumuserTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumnotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.notificationType | EnumnotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.notificationType[] | ListEnumnotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.notificationType[] | ListEnumnotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumnotificationTypeFilter<$PrismaModel> | $Enums.notificationType
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumnotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notificationType | EnumnotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.notificationType[] | ListEnumnotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.notificationType[] | ListEnumnotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumnotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.notificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumnotificationTypeFilter<$PrismaModel>
  }

  export type userCreateWithoutSectorInput = {
    name: string
    lastname: string
    email: string
    tel: string
    password: string
    bio?: string | null
    type?: $Enums.userType
    created?: Date | string
    updated?: Date | string
    Taskc?: TaskcCreateNestedManyWithoutUserInput
    notification?: notificationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutSectorInput = {
    id?: number
    name: string
    lastname: string
    email: string
    tel: string
    password: string
    bio?: string | null
    type?: $Enums.userType
    created?: Date | string
    updated?: Date | string
    Taskc?: TaskcUncheckedCreateNestedManyWithoutUserInput
    notification?: notificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutSectorInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSectorInput, userUncheckedCreateWithoutSectorInput>
  }

  export type userCreateManySectorInputEnvelope = {
    data: userCreateManySectorInput | userCreateManySectorInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutSectorInput = {
    title: string
    description?: string | null
    status?: $Enums.statusType
    priority?: $Enums.priorityType
    created?: Date | string
    finished: Date | string
    updated?: Date | string
    Taskc?: TaskcCreateNestedManyWithoutTikectInput
  }

  export type TicketUncheckedCreateWithoutSectorInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.statusType
    priority?: $Enums.priorityType
    created?: Date | string
    finished: Date | string
    updated?: Date | string
    Taskc?: TaskcUncheckedCreateNestedManyWithoutTikectInput
  }

  export type TicketCreateOrConnectWithoutSectorInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutSectorInput, TicketUncheckedCreateWithoutSectorInput>
  }

  export type TicketCreateManySectorInputEnvelope = {
    data: TicketCreateManySectorInput | TicketCreateManySectorInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithWhereUniqueWithoutSectorInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutSectorInput, userUncheckedUpdateWithoutSectorInput>
    create: XOR<userCreateWithoutSectorInput, userUncheckedCreateWithoutSectorInput>
  }

  export type userUpdateWithWhereUniqueWithoutSectorInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutSectorInput, userUncheckedUpdateWithoutSectorInput>
  }

  export type userUpdateManyWithWhereWithoutSectorInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutSectorInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    lastname?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    tel?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    bio?: StringNullableFilter<"user"> | string | null
    type?: EnumuserTypeFilter<"user"> | $Enums.userType
    sectorid?: IntNullableFilter<"user"> | number | null
    created?: DateTimeFilter<"user"> | Date | string
    updated?: DateTimeFilter<"user"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutSectorInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutSectorInput, TicketUncheckedUpdateWithoutSectorInput>
    create: XOR<TicketCreateWithoutSectorInput, TicketUncheckedCreateWithoutSectorInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutSectorInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutSectorInput, TicketUncheckedUpdateWithoutSectorInput>
  }

  export type TicketUpdateManyWithWhereWithoutSectorInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutSectorInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    title?: StringFilter<"Ticket"> | string
    description?: StringNullableFilter<"Ticket"> | string | null
    sectorid?: IntNullableFilter<"Ticket"> | number | null
    status?: EnumstatusTypeFilter<"Ticket"> | $Enums.statusType
    priority?: EnumpriorityTypeFilter<"Ticket"> | $Enums.priorityType
    created?: DateTimeFilter<"Ticket"> | Date | string
    finished?: DateTimeFilter<"Ticket"> | Date | string
    updated?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type TaskcCreateWithoutTikectInput = {
    status?: $Enums.statusType
    title: string
    description: string
    created?: Date | string
    updated?: Date | string
    finished?: Date | string | null
    user?: userCreateNestedOneWithoutTaskcInput
  }

  export type TaskcUncheckedCreateWithoutTikectInput = {
    id?: number
    status?: $Enums.statusType
    title: string
    description: string
    owner?: number | null
    created?: Date | string
    updated?: Date | string
    finished?: Date | string | null
  }

  export type TaskcCreateOrConnectWithoutTikectInput = {
    where: TaskcWhereUniqueInput
    create: XOR<TaskcCreateWithoutTikectInput, TaskcUncheckedCreateWithoutTikectInput>
  }

  export type TaskcCreateManyTikectInputEnvelope = {
    data: TaskcCreateManyTikectInput | TaskcCreateManyTikectInput[]
    skipDuplicates?: boolean
  }

  export type sectorCreateWithoutTicketInput = {
    title: string
    description?: string | null
    total?: number
    users?: userCreateNestedManyWithoutSectorInput
  }

  export type sectorUncheckedCreateWithoutTicketInput = {
    id?: number
    title: string
    description?: string | null
    total?: number
    users?: userUncheckedCreateNestedManyWithoutSectorInput
  }

  export type sectorCreateOrConnectWithoutTicketInput = {
    where: sectorWhereUniqueInput
    create: XOR<sectorCreateWithoutTicketInput, sectorUncheckedCreateWithoutTicketInput>
  }

  export type TaskcUpsertWithWhereUniqueWithoutTikectInput = {
    where: TaskcWhereUniqueInput
    update: XOR<TaskcUpdateWithoutTikectInput, TaskcUncheckedUpdateWithoutTikectInput>
    create: XOR<TaskcCreateWithoutTikectInput, TaskcUncheckedCreateWithoutTikectInput>
  }

  export type TaskcUpdateWithWhereUniqueWithoutTikectInput = {
    where: TaskcWhereUniqueInput
    data: XOR<TaskcUpdateWithoutTikectInput, TaskcUncheckedUpdateWithoutTikectInput>
  }

  export type TaskcUpdateManyWithWhereWithoutTikectInput = {
    where: TaskcScalarWhereInput
    data: XOR<TaskcUpdateManyMutationInput, TaskcUncheckedUpdateManyWithoutTikectInput>
  }

  export type TaskcScalarWhereInput = {
    AND?: TaskcScalarWhereInput | TaskcScalarWhereInput[]
    OR?: TaskcScalarWhereInput[]
    NOT?: TaskcScalarWhereInput | TaskcScalarWhereInput[]
    id?: IntFilter<"Taskc"> | number
    ticketId?: IntNullableFilter<"Taskc"> | number | null
    status?: EnumstatusTypeFilter<"Taskc"> | $Enums.statusType
    title?: StringFilter<"Taskc"> | string
    description?: StringFilter<"Taskc"> | string
    owner?: IntNullableFilter<"Taskc"> | number | null
    created?: DateTimeFilter<"Taskc"> | Date | string
    updated?: DateTimeFilter<"Taskc"> | Date | string
    finished?: DateTimeNullableFilter<"Taskc"> | Date | string | null
  }

  export type sectorUpsertWithoutTicketInput = {
    update: XOR<sectorUpdateWithoutTicketInput, sectorUncheckedUpdateWithoutTicketInput>
    create: XOR<sectorCreateWithoutTicketInput, sectorUncheckedCreateWithoutTicketInput>
    where?: sectorWhereInput
  }

  export type sectorUpdateToOneWithWhereWithoutTicketInput = {
    where?: sectorWhereInput
    data: XOR<sectorUpdateWithoutTicketInput, sectorUncheckedUpdateWithoutTicketInput>
  }

  export type sectorUpdateWithoutTicketInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
    users?: userUpdateManyWithoutSectorNestedInput
  }

  export type sectorUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
    users?: userUncheckedUpdateManyWithoutSectorNestedInput
  }

  export type sectorCreateWithoutUsersInput = {
    title: string
    description?: string | null
    total?: number
    Ticket?: TicketCreateNestedManyWithoutSectorInput
  }

  export type sectorUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    description?: string | null
    total?: number
    Ticket?: TicketUncheckedCreateNestedManyWithoutSectorInput
  }

  export type sectorCreateOrConnectWithoutUsersInput = {
    where: sectorWhereUniqueInput
    create: XOR<sectorCreateWithoutUsersInput, sectorUncheckedCreateWithoutUsersInput>
  }

  export type TaskcCreateWithoutUserInput = {
    status?: $Enums.statusType
    title: string
    description: string
    created?: Date | string
    updated?: Date | string
    finished?: Date | string | null
    tikect?: TicketCreateNestedOneWithoutTaskcInput
  }

  export type TaskcUncheckedCreateWithoutUserInput = {
    id?: number
    ticketId?: number | null
    status?: $Enums.statusType
    title: string
    description: string
    created?: Date | string
    updated?: Date | string
    finished?: Date | string | null
  }

  export type TaskcCreateOrConnectWithoutUserInput = {
    where: TaskcWhereUniqueInput
    create: XOR<TaskcCreateWithoutUserInput, TaskcUncheckedCreateWithoutUserInput>
  }

  export type TaskcCreateManyUserInputEnvelope = {
    data: TaskcCreateManyUserInput | TaskcCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type notificationCreateWithoutUserInput = {
    read?: boolean
    text: string
    deeplink?: string | null
    message: string
    type?: $Enums.notificationType
    created?: Date | string
    updated?: Date | string
  }

  export type notificationUncheckedCreateWithoutUserInput = {
    id?: number
    read?: boolean
    text: string
    deeplink?: string | null
    message: string
    type?: $Enums.notificationType
    created?: Date | string
    updated?: Date | string
  }

  export type notificationCreateOrConnectWithoutUserInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput>
  }

  export type notificationCreateManyUserInputEnvelope = {
    data: notificationCreateManyUserInput | notificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sectorUpsertWithoutUsersInput = {
    update: XOR<sectorUpdateWithoutUsersInput, sectorUncheckedUpdateWithoutUsersInput>
    create: XOR<sectorCreateWithoutUsersInput, sectorUncheckedCreateWithoutUsersInput>
    where?: sectorWhereInput
  }

  export type sectorUpdateToOneWithWhereWithoutUsersInput = {
    where?: sectorWhereInput
    data: XOR<sectorUpdateWithoutUsersInput, sectorUncheckedUpdateWithoutUsersInput>
  }

  export type sectorUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
    Ticket?: TicketUpdateManyWithoutSectorNestedInput
  }

  export type sectorUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: IntFieldUpdateOperationsInput | number
    Ticket?: TicketUncheckedUpdateManyWithoutSectorNestedInput
  }

  export type TaskcUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskcWhereUniqueInput
    update: XOR<TaskcUpdateWithoutUserInput, TaskcUncheckedUpdateWithoutUserInput>
    create: XOR<TaskcCreateWithoutUserInput, TaskcUncheckedCreateWithoutUserInput>
  }

  export type TaskcUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskcWhereUniqueInput
    data: XOR<TaskcUpdateWithoutUserInput, TaskcUncheckedUpdateWithoutUserInput>
  }

  export type TaskcUpdateManyWithWhereWithoutUserInput = {
    where: TaskcScalarWhereInput
    data: XOR<TaskcUpdateManyMutationInput, TaskcUncheckedUpdateManyWithoutUserInput>
  }

  export type notificationUpsertWithWhereUniqueWithoutUserInput = {
    where: notificationWhereUniqueInput
    update: XOR<notificationUpdateWithoutUserInput, notificationUncheckedUpdateWithoutUserInput>
    create: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput>
  }

  export type notificationUpdateWithWhereUniqueWithoutUserInput = {
    where: notificationWhereUniqueInput
    data: XOR<notificationUpdateWithoutUserInput, notificationUncheckedUpdateWithoutUserInput>
  }

  export type notificationUpdateManyWithWhereWithoutUserInput = {
    where: notificationScalarWhereInput
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyWithoutUserInput>
  }

  export type notificationScalarWhereInput = {
    AND?: notificationScalarWhereInput | notificationScalarWhereInput[]
    OR?: notificationScalarWhereInput[]
    NOT?: notificationScalarWhereInput | notificationScalarWhereInput[]
    id?: IntFilter<"notification"> | number
    owner?: IntFilter<"notification"> | number
    read?: BoolFilter<"notification"> | boolean
    text?: StringFilter<"notification"> | string
    deeplink?: StringNullableFilter<"notification"> | string | null
    message?: StringFilter<"notification"> | string
    type?: EnumnotificationTypeFilter<"notification"> | $Enums.notificationType
    created?: DateTimeFilter<"notification"> | Date | string
    updated?: DateTimeFilter<"notification"> | Date | string
  }

  export type userCreateWithoutTaskcInput = {
    name: string
    lastname: string
    email: string
    tel: string
    password: string
    bio?: string | null
    type?: $Enums.userType
    created?: Date | string
    updated?: Date | string
    sector?: sectorCreateNestedOneWithoutUsersInput
    notification?: notificationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutTaskcInput = {
    id?: number
    name: string
    lastname: string
    email: string
    tel: string
    password: string
    bio?: string | null
    type?: $Enums.userType
    sectorid?: number | null
    created?: Date | string
    updated?: Date | string
    notification?: notificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutTaskcInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTaskcInput, userUncheckedCreateWithoutTaskcInput>
  }

  export type TicketCreateWithoutTaskcInput = {
    title: string
    description?: string | null
    status?: $Enums.statusType
    priority?: $Enums.priorityType
    created?: Date | string
    finished: Date | string
    updated?: Date | string
    sector?: sectorCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTaskcInput = {
    id?: number
    title: string
    description?: string | null
    sectorid?: number | null
    status?: $Enums.statusType
    priority?: $Enums.priorityType
    created?: Date | string
    finished: Date | string
    updated?: Date | string
  }

  export type TicketCreateOrConnectWithoutTaskcInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTaskcInput, TicketUncheckedCreateWithoutTaskcInput>
  }

  export type userUpsertWithoutTaskcInput = {
    update: XOR<userUpdateWithoutTaskcInput, userUncheckedUpdateWithoutTaskcInput>
    create: XOR<userCreateWithoutTaskcInput, userUncheckedCreateWithoutTaskcInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTaskcInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTaskcInput, userUncheckedUpdateWithoutTaskcInput>
  }

  export type userUpdateWithoutTaskcInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sector?: sectorUpdateOneWithoutUsersNestedInput
    notification?: notificationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutTaskcInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    sectorid?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: notificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TicketUpsertWithoutTaskcInput = {
    update: XOR<TicketUpdateWithoutTaskcInput, TicketUncheckedUpdateWithoutTaskcInput>
    create: XOR<TicketCreateWithoutTaskcInput, TicketUncheckedCreateWithoutTaskcInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutTaskcInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutTaskcInput, TicketUncheckedUpdateWithoutTaskcInput>
  }

  export type TicketUpdateWithoutTaskcInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    priority?: EnumpriorityTypeFieldUpdateOperationsInput | $Enums.priorityType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sector?: sectorUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTaskcInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sectorid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    priority?: EnumpriorityTypeFieldUpdateOperationsInput | $Enums.priorityType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateWithoutNotificationInput = {
    name: string
    lastname: string
    email: string
    tel: string
    password: string
    bio?: string | null
    type?: $Enums.userType
    created?: Date | string
    updated?: Date | string
    sector?: sectorCreateNestedOneWithoutUsersInput
    Taskc?: TaskcCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutNotificationInput = {
    id?: number
    name: string
    lastname: string
    email: string
    tel: string
    password: string
    bio?: string | null
    type?: $Enums.userType
    sectorid?: number | null
    created?: Date | string
    updated?: Date | string
    Taskc?: TaskcUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutNotificationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutNotificationInput, userUncheckedCreateWithoutNotificationInput>
  }

  export type userUpsertWithoutNotificationInput = {
    update: XOR<userUpdateWithoutNotificationInput, userUncheckedUpdateWithoutNotificationInput>
    create: XOR<userCreateWithoutNotificationInput, userUncheckedCreateWithoutNotificationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutNotificationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutNotificationInput, userUncheckedUpdateWithoutNotificationInput>
  }

  export type userUpdateWithoutNotificationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sector?: sectorUpdateOneWithoutUsersNestedInput
    Taskc?: TaskcUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    sectorid?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    Taskc?: TaskcUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManySectorInput = {
    id?: number
    name: string
    lastname: string
    email: string
    tel: string
    password: string
    bio?: string | null
    type?: $Enums.userType
    created?: Date | string
    updated?: Date | string
  }

  export type TicketCreateManySectorInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.statusType
    priority?: $Enums.priorityType
    created?: Date | string
    finished: Date | string
    updated?: Date | string
  }

  export type userUpdateWithoutSectorInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    Taskc?: TaskcUpdateManyWithoutUserNestedInput
    notification?: notificationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    Taskc?: TaskcUncheckedUpdateManyWithoutUserNestedInput
    notification?: notificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateManyWithoutSectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutSectorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    priority?: EnumpriorityTypeFieldUpdateOperationsInput | $Enums.priorityType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    Taskc?: TaskcUpdateManyWithoutTikectNestedInput
  }

  export type TicketUncheckedUpdateWithoutSectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    priority?: EnumpriorityTypeFieldUpdateOperationsInput | $Enums.priorityType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    Taskc?: TaskcUncheckedUpdateManyWithoutTikectNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutSectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    priority?: EnumpriorityTypeFieldUpdateOperationsInput | $Enums.priorityType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskcCreateManyTikectInput = {
    id?: number
    status?: $Enums.statusType
    title: string
    description: string
    owner?: number | null
    created?: Date | string
    updated?: Date | string
    finished?: Date | string | null
  }

  export type TaskcUpdateWithoutTikectInput = {
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutTaskcNestedInput
  }

  export type TaskcUncheckedUpdateWithoutTikectInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    owner?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskcUncheckedUpdateManyWithoutTikectInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    owner?: NullableIntFieldUpdateOperationsInput | number | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskcCreateManyUserInput = {
    id?: number
    ticketId?: number | null
    status?: $Enums.statusType
    title: string
    description: string
    created?: Date | string
    updated?: Date | string
    finished?: Date | string | null
  }

  export type notificationCreateManyUserInput = {
    id?: number
    read?: boolean
    text: string
    deeplink?: string | null
    message: string
    type?: $Enums.notificationType
    created?: Date | string
    updated?: Date | string
  }

  export type TaskcUpdateWithoutUserInput = {
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tikect?: TicketUpdateOneWithoutTaskcNestedInput
  }

  export type TaskcUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskcUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumstatusTypeFieldUpdateOperationsInput | $Enums.statusType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationUpdateWithoutUserInput = {
    read?: BoolFieldUpdateOperationsInput | boolean
    text?: StringFieldUpdateOperationsInput | string
    deeplink?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumnotificationTypeFieldUpdateOperationsInput | $Enums.notificationType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    read?: BoolFieldUpdateOperationsInput | boolean
    text?: StringFieldUpdateOperationsInput | string
    deeplink?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumnotificationTypeFieldUpdateOperationsInput | $Enums.notificationType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    read?: BoolFieldUpdateOperationsInput | boolean
    text?: StringFieldUpdateOperationsInput | string
    deeplink?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumnotificationTypeFieldUpdateOperationsInput | $Enums.notificationType
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}