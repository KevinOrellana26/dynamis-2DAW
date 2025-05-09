
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model progress
 * 
 */
export type progress = $Result.DefaultSelection<Prisma.$progressPayload>
/**
 * Model routine
 * 
 */
export type routine = $Result.DefaultSelection<Prisma.$routinePayload>
/**
 * Model favorite
 * 
 */
export type favorite = $Result.DefaultSelection<Prisma.$favoritePayload>
/**
 * Model exercise
 * 
 */
export type exercise = $Result.DefaultSelection<Prisma.$exercisePayload>
/**
 * Model exerciseRoutine
 * 
 */
export type exerciseRoutine = $Result.DefaultSelection<Prisma.$exerciseRoutinePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  GUEST: 'GUEST',
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Rol = (typeof Rol)[keyof typeof Rol]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progress`: Exposes CRUD operations for the **progress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progresses
    * const progresses = await prisma.progress.findMany()
    * ```
    */
  get progress(): Prisma.progressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routine`: Exposes CRUD operations for the **routine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routines
    * const routines = await prisma.routine.findMany()
    * ```
    */
  get routine(): Prisma.routineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.favoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.exerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseRoutine`: Exposes CRUD operations for the **exerciseRoutine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseRoutines
    * const exerciseRoutines = await prisma.exerciseRoutine.findMany()
    * ```
    */
  get exerciseRoutine(): Prisma.exerciseRoutineDelegate<ExtArgs, ClientOptions>;
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
    user: 'user',
    progress: 'progress',
    routine: 'routine',
    favorite: 'favorite',
    exercise: 'exercise',
    exerciseRoutine: 'exerciseRoutine'
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
      modelProps: "user" | "progress" | "routine" | "favorite" | "exercise" | "exerciseRoutine"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      progress: {
        payload: Prisma.$progressPayload<ExtArgs>
        fields: Prisma.progressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.progressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.progressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressPayload>
          }
          findFirst: {
            args: Prisma.progressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.progressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressPayload>
          }
          findMany: {
            args: Prisma.progressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressPayload>[]
          }
          create: {
            args: Prisma.progressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressPayload>
          }
          createMany: {
            args: Prisma.progressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.progressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressPayload>[]
          }
          delete: {
            args: Prisma.progressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressPayload>
          }
          update: {
            args: Prisma.progressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressPayload>
          }
          deleteMany: {
            args: Prisma.progressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.progressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.progressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressPayload>[]
          }
          upsert: {
            args: Prisma.progressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$progressPayload>
          }
          aggregate: {
            args: Prisma.ProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgress>
          }
          groupBy: {
            args: Prisma.progressGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.progressCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressCountAggregateOutputType> | number
          }
        }
      }
      routine: {
        payload: Prisma.$routinePayload<ExtArgs>
        fields: Prisma.routineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.routineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.routineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routinePayload>
          }
          findFirst: {
            args: Prisma.routineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.routineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routinePayload>
          }
          findMany: {
            args: Prisma.routineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routinePayload>[]
          }
          create: {
            args: Prisma.routineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routinePayload>
          }
          createMany: {
            args: Prisma.routineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.routineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routinePayload>[]
          }
          delete: {
            args: Prisma.routineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routinePayload>
          }
          update: {
            args: Prisma.routineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routinePayload>
          }
          deleteMany: {
            args: Prisma.routineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.routineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.routineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routinePayload>[]
          }
          upsert: {
            args: Prisma.routineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$routinePayload>
          }
          aggregate: {
            args: Prisma.RoutineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutine>
          }
          groupBy: {
            args: Prisma.routineGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.routineCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineCountAggregateOutputType> | number
          }
        }
      }
      favorite: {
        payload: Prisma.$favoritePayload<ExtArgs>
        fields: Prisma.favoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.favoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.favoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          findFirst: {
            args: Prisma.favoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.favoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          findMany: {
            args: Prisma.favoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>[]
          }
          create: {
            args: Prisma.favoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          createMany: {
            args: Prisma.favoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.favoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>[]
          }
          delete: {
            args: Prisma.favoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          update: {
            args: Prisma.favoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          deleteMany: {
            args: Prisma.favoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.favoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.favoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>[]
          }
          upsert: {
            args: Prisma.favoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.favoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.favoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      exercise: {
        payload: Prisma.$exercisePayload<ExtArgs>
        fields: Prisma.exerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>
          }
          findFirst: {
            args: Prisma.exerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>
          }
          findMany: {
            args: Prisma.exerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>[]
          }
          create: {
            args: Prisma.exerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>
          }
          createMany: {
            args: Prisma.exerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.exerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>[]
          }
          delete: {
            args: Prisma.exerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>
          }
          update: {
            args: Prisma.exerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>
          }
          deleteMany: {
            args: Prisma.exerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.exerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>[]
          }
          upsert: {
            args: Prisma.exerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.exerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.exerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      exerciseRoutine: {
        payload: Prisma.$exerciseRoutinePayload<ExtArgs>
        fields: Prisma.exerciseRoutineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exerciseRoutineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciseRoutinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exerciseRoutineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciseRoutinePayload>
          }
          findFirst: {
            args: Prisma.exerciseRoutineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciseRoutinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exerciseRoutineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciseRoutinePayload>
          }
          findMany: {
            args: Prisma.exerciseRoutineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciseRoutinePayload>[]
          }
          create: {
            args: Prisma.exerciseRoutineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciseRoutinePayload>
          }
          createMany: {
            args: Prisma.exerciseRoutineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.exerciseRoutineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciseRoutinePayload>[]
          }
          delete: {
            args: Prisma.exerciseRoutineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciseRoutinePayload>
          }
          update: {
            args: Prisma.exerciseRoutineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciseRoutinePayload>
          }
          deleteMany: {
            args: Prisma.exerciseRoutineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exerciseRoutineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.exerciseRoutineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciseRoutinePayload>[]
          }
          upsert: {
            args: Prisma.exerciseRoutineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciseRoutinePayload>
          }
          aggregate: {
            args: Prisma.ExerciseRoutineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseRoutine>
          }
          groupBy: {
            args: Prisma.exerciseRoutineGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseRoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.exerciseRoutineCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseRoutineCountAggregateOutputType> | number
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
    user?: userOmit
    progress?: progressOmit
    routine?: routineOmit
    favorite?: favoriteOmit
    exercise?: exerciseOmit
    exerciseRoutine?: exerciseRoutineOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    progress: number
    routine: number
    favorites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | UserCountOutputTypeCountProgressArgs
    routine?: boolean | UserCountOutputTypeCountRoutineArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
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
  export type UserCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: routineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoriteWhereInput
  }


  /**
   * Count Type RoutineCountOutputType
   */

  export type RoutineCountOutputType = {
    exerciseRoutine: number
  }

  export type RoutineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exerciseRoutine?: boolean | RoutineCountOutputTypeCountExerciseRoutineArgs
  }

  // Custom InputTypes
  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineCountOutputType
     */
    select?: RoutineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeCountExerciseRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exerciseRoutineWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    progress: number
    favorite: number
    exerciseRoutine: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | ExerciseCountOutputTypeCountProgressArgs
    favorite?: boolean | ExerciseCountOutputTypeCountFavoriteArgs
    exerciseRoutine?: boolean | ExerciseCountOutputTypeCountExerciseRoutineArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progressWhereInput
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoriteWhereInput
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountExerciseRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exerciseRoutineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Rol | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Rol | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    password: number
    avatar: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    role?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: Date | null
    password: string
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.Rol
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    progress?: boolean | user$progressArgs<ExtArgs>
    routine?: boolean | user$routineArgs<ExtArgs>
    favorites?: boolean | user$favoritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "password" | "avatar" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | user$progressArgs<ExtArgs>
    routine?: boolean | user$routineArgs<ExtArgs>
    favorites?: boolean | user$favoritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      progress: Prisma.$progressPayload<ExtArgs>[]
      routine: Prisma.$routinePayload<ExtArgs>[]
      favorites: Prisma.$favoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: Date | null
      password: string
      avatar: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.Rol
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
    progress<T extends user$progressArgs<ExtArgs> = {}>(args?: Subset<T, user$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routine<T extends user$routineArgs<ExtArgs> = {}>(args?: Subset<T, user$routineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$routinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends user$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, user$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly emailVerified: FieldRef<"user", 'DateTime'>
    readonly password: FieldRef<"user", 'String'>
    readonly avatar: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
    readonly role: FieldRef<"user", 'Rol'>
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
   * user.progress
   */
  export type user$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progress
     */
    omit?: progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressInclude<ExtArgs> | null
    where?: progressWhereInput
    orderBy?: progressOrderByWithRelationInput | progressOrderByWithRelationInput[]
    cursor?: progressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * user.routine
   */
  export type user$routineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routine
     */
    select?: routineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routine
     */
    omit?: routineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routineInclude<ExtArgs> | null
    where?: routineWhereInput
    orderBy?: routineOrderByWithRelationInput | routineOrderByWithRelationInput[]
    cursor?: routineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * user.favorites
   */
  export type user$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    where?: favoriteWhereInput
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    cursor?: favoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
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
   * Model progress
   */

  export type AggregateProgress = {
    _count: ProgressCountAggregateOutputType | null
    _avg: ProgressAvgAggregateOutputType | null
    _sum: ProgressSumAggregateOutputType | null
    _min: ProgressMinAggregateOutputType | null
    _max: ProgressMaxAggregateOutputType | null
  }

  export type ProgressAvgAggregateOutputType = {
    id: number | null
    exerciseId: number | null
    weightUsed: number | null
    repetitions: number | null
  }

  export type ProgressSumAggregateOutputType = {
    id: number | null
    exerciseId: number | null
    weightUsed: number | null
    repetitions: number | null
  }

  export type ProgressMinAggregateOutputType = {
    id: number | null
    userId: string | null
    exerciseId: number | null
    date: Date | null
    weightUsed: number | null
    repetitions: number | null
  }

  export type ProgressMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    exerciseId: number | null
    date: Date | null
    weightUsed: number | null
    repetitions: number | null
  }

  export type ProgressCountAggregateOutputType = {
    id: number
    userId: number
    exerciseId: number
    date: number
    weightUsed: number
    repetitions: number
    _all: number
  }


  export type ProgressAvgAggregateInputType = {
    id?: true
    exerciseId?: true
    weightUsed?: true
    repetitions?: true
  }

  export type ProgressSumAggregateInputType = {
    id?: true
    exerciseId?: true
    weightUsed?: true
    repetitions?: true
  }

  export type ProgressMinAggregateInputType = {
    id?: true
    userId?: true
    exerciseId?: true
    date?: true
    weightUsed?: true
    repetitions?: true
  }

  export type ProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    exerciseId?: true
    date?: true
    weightUsed?: true
    repetitions?: true
  }

  export type ProgressCountAggregateInputType = {
    id?: true
    userId?: true
    exerciseId?: true
    date?: true
    weightUsed?: true
    repetitions?: true
    _all?: true
  }

  export type ProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progress to aggregate.
     */
    where?: progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progresses to fetch.
     */
    orderBy?: progressOrderByWithRelationInput | progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned progresses
    **/
    _count?: true | ProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressMaxAggregateInputType
  }

  export type GetProgressAggregateType<T extends ProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgress[P]>
      : GetScalarType<T[P], AggregateProgress[P]>
  }




  export type progressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progressWhereInput
    orderBy?: progressOrderByWithAggregationInput | progressOrderByWithAggregationInput[]
    by: ProgressScalarFieldEnum[] | ProgressScalarFieldEnum
    having?: progressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressCountAggregateInputType | true
    _avg?: ProgressAvgAggregateInputType
    _sum?: ProgressSumAggregateInputType
    _min?: ProgressMinAggregateInputType
    _max?: ProgressMaxAggregateInputType
  }

  export type ProgressGroupByOutputType = {
    id: number
    userId: string
    exerciseId: number
    date: Date
    weightUsed: number
    repetitions: number
    _count: ProgressCountAggregateOutputType | null
    _avg: ProgressAvgAggregateOutputType | null
    _sum: ProgressSumAggregateOutputType | null
    _min: ProgressMinAggregateOutputType | null
    _max: ProgressMaxAggregateOutputType | null
  }

  type GetProgressGroupByPayload<T extends progressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressGroupByOutputType[P]>
        }
      >
    >


  export type progressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exerciseId?: boolean
    date?: boolean
    weightUsed?: boolean
    repetitions?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progress"]>

  export type progressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exerciseId?: boolean
    date?: boolean
    weightUsed?: boolean
    repetitions?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progress"]>

  export type progressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exerciseId?: boolean
    date?: boolean
    weightUsed?: boolean
    repetitions?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progress"]>

  export type progressSelectScalar = {
    id?: boolean
    userId?: boolean
    exerciseId?: boolean
    date?: boolean
    weightUsed?: boolean
    repetitions?: boolean
  }

  export type progressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "exerciseId" | "date" | "weightUsed" | "repetitions", ExtArgs["result"]["progress"]>
  export type progressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }
  export type progressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }
  export type progressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }

  export type $progressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "progress"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      exercise: Prisma.$exercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      exerciseId: number
      date: Date
      weightUsed: number
      repetitions: number
    }, ExtArgs["result"]["progress"]>
    composites: {}
  }

  type progressGetPayload<S extends boolean | null | undefined | progressDefaultArgs> = $Result.GetResult<Prisma.$progressPayload, S>

  type progressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<progressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressCountAggregateInputType | true
    }

  export interface progressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['progress'], meta: { name: 'progress' } }
    /**
     * Find zero or one Progress that matches the filter.
     * @param {progressFindUniqueArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends progressFindUniqueArgs>(args: SelectSubset<T, progressFindUniqueArgs<ExtArgs>>): Prisma__progressClient<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Progress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {progressFindUniqueOrThrowArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends progressFindUniqueOrThrowArgs>(args: SelectSubset<T, progressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__progressClient<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressFindFirstArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends progressFindFirstArgs>(args?: SelectSubset<T, progressFindFirstArgs<ExtArgs>>): Prisma__progressClient<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressFindFirstOrThrowArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends progressFindFirstOrThrowArgs>(args?: SelectSubset<T, progressFindFirstOrThrowArgs<ExtArgs>>): Prisma__progressClient<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progresses
     * const progresses = await prisma.progress.findMany()
     * 
     * // Get first 10 Progresses
     * const progresses = await prisma.progress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressWithIdOnly = await prisma.progress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends progressFindManyArgs>(args?: SelectSubset<T, progressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Progress.
     * @param {progressCreateArgs} args - Arguments to create a Progress.
     * @example
     * // Create one Progress
     * const Progress = await prisma.progress.create({
     *   data: {
     *     // ... data to create a Progress
     *   }
     * })
     * 
     */
    create<T extends progressCreateArgs>(args: SelectSubset<T, progressCreateArgs<ExtArgs>>): Prisma__progressClient<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Progresses.
     * @param {progressCreateManyArgs} args - Arguments to create many Progresses.
     * @example
     * // Create many Progresses
     * const progress = await prisma.progress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends progressCreateManyArgs>(args?: SelectSubset<T, progressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Progresses and returns the data saved in the database.
     * @param {progressCreateManyAndReturnArgs} args - Arguments to create many Progresses.
     * @example
     * // Create many Progresses
     * const progress = await prisma.progress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Progresses and only return the `id`
     * const progressWithIdOnly = await prisma.progress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends progressCreateManyAndReturnArgs>(args?: SelectSubset<T, progressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Progress.
     * @param {progressDeleteArgs} args - Arguments to delete one Progress.
     * @example
     * // Delete one Progress
     * const Progress = await prisma.progress.delete({
     *   where: {
     *     // ... filter to delete one Progress
     *   }
     * })
     * 
     */
    delete<T extends progressDeleteArgs>(args: SelectSubset<T, progressDeleteArgs<ExtArgs>>): Prisma__progressClient<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Progress.
     * @param {progressUpdateArgs} args - Arguments to update one Progress.
     * @example
     * // Update one Progress
     * const progress = await prisma.progress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends progressUpdateArgs>(args: SelectSubset<T, progressUpdateArgs<ExtArgs>>): Prisma__progressClient<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Progresses.
     * @param {progressDeleteManyArgs} args - Arguments to filter Progresses to delete.
     * @example
     * // Delete a few Progresses
     * const { count } = await prisma.progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends progressDeleteManyArgs>(args?: SelectSubset<T, progressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progresses
     * const progress = await prisma.progress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends progressUpdateManyArgs>(args: SelectSubset<T, progressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresses and returns the data updated in the database.
     * @param {progressUpdateManyAndReturnArgs} args - Arguments to update many Progresses.
     * @example
     * // Update many Progresses
     * const progress = await prisma.progress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Progresses and only return the `id`
     * const progressWithIdOnly = await prisma.progress.updateManyAndReturn({
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
    updateManyAndReturn<T extends progressUpdateManyAndReturnArgs>(args: SelectSubset<T, progressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Progress.
     * @param {progressUpsertArgs} args - Arguments to update or create a Progress.
     * @example
     * // Update or create a Progress
     * const progress = await prisma.progress.upsert({
     *   create: {
     *     // ... data to create a Progress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progress we want to update
     *   }
     * })
     */
    upsert<T extends progressUpsertArgs>(args: SelectSubset<T, progressUpsertArgs<ExtArgs>>): Prisma__progressClient<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressCountArgs} args - Arguments to filter Progresses to count.
     * @example
     * // Count the number of Progresses
     * const count = await prisma.progress.count({
     *   where: {
     *     // ... the filter for the Progresses we want to count
     *   }
     * })
    **/
    count<T extends progressCountArgs>(
      args?: Subset<T, progressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressAggregateArgs>(args: Subset<T, ProgressAggregateArgs>): Prisma.PrismaPromise<GetProgressAggregateType<T>>

    /**
     * Group by Progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progressGroupByArgs} args - Group by arguments.
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
      T extends progressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: progressGroupByArgs['orderBy'] }
        : { orderBy?: progressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, progressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the progress model
   */
  readonly fields: progressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__progressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends exerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, exerciseDefaultArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the progress model
   */
  interface progressFieldRefs {
    readonly id: FieldRef<"progress", 'Int'>
    readonly userId: FieldRef<"progress", 'String'>
    readonly exerciseId: FieldRef<"progress", 'Int'>
    readonly date: FieldRef<"progress", 'DateTime'>
    readonly weightUsed: FieldRef<"progress", 'Float'>
    readonly repetitions: FieldRef<"progress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * progress findUnique
   */
  export type progressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progress
     */
    omit?: progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressInclude<ExtArgs> | null
    /**
     * Filter, which progress to fetch.
     */
    where: progressWhereUniqueInput
  }

  /**
   * progress findUniqueOrThrow
   */
  export type progressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progress
     */
    omit?: progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressInclude<ExtArgs> | null
    /**
     * Filter, which progress to fetch.
     */
    where: progressWhereUniqueInput
  }

  /**
   * progress findFirst
   */
  export type progressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progress
     */
    omit?: progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressInclude<ExtArgs> | null
    /**
     * Filter, which progress to fetch.
     */
    where?: progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progresses to fetch.
     */
    orderBy?: progressOrderByWithRelationInput | progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for progresses.
     */
    cursor?: progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progresses.
     */
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * progress findFirstOrThrow
   */
  export type progressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progress
     */
    omit?: progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressInclude<ExtArgs> | null
    /**
     * Filter, which progress to fetch.
     */
    where?: progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progresses to fetch.
     */
    orderBy?: progressOrderByWithRelationInput | progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for progresses.
     */
    cursor?: progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progresses.
     */
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * progress findMany
   */
  export type progressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progress
     */
    omit?: progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressInclude<ExtArgs> | null
    /**
     * Filter, which progresses to fetch.
     */
    where?: progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progresses to fetch.
     */
    orderBy?: progressOrderByWithRelationInput | progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing progresses.
     */
    cursor?: progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progresses.
     */
    skip?: number
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * progress create
   */
  export type progressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progress
     */
    omit?: progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressInclude<ExtArgs> | null
    /**
     * The data needed to create a progress.
     */
    data: XOR<progressCreateInput, progressUncheckedCreateInput>
  }

  /**
   * progress createMany
   */
  export type progressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many progresses.
     */
    data: progressCreateManyInput | progressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * progress createManyAndReturn
   */
  export type progressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the progress
     */
    omit?: progressOmit<ExtArgs> | null
    /**
     * The data used to create many progresses.
     */
    data: progressCreateManyInput | progressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * progress update
   */
  export type progressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progress
     */
    omit?: progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressInclude<ExtArgs> | null
    /**
     * The data needed to update a progress.
     */
    data: XOR<progressUpdateInput, progressUncheckedUpdateInput>
    /**
     * Choose, which progress to update.
     */
    where: progressWhereUniqueInput
  }

  /**
   * progress updateMany
   */
  export type progressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update progresses.
     */
    data: XOR<progressUpdateManyMutationInput, progressUncheckedUpdateManyInput>
    /**
     * Filter which progresses to update
     */
    where?: progressWhereInput
    /**
     * Limit how many progresses to update.
     */
    limit?: number
  }

  /**
   * progress updateManyAndReturn
   */
  export type progressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the progress
     */
    omit?: progressOmit<ExtArgs> | null
    /**
     * The data used to update progresses.
     */
    data: XOR<progressUpdateManyMutationInput, progressUncheckedUpdateManyInput>
    /**
     * Filter which progresses to update
     */
    where?: progressWhereInput
    /**
     * Limit how many progresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * progress upsert
   */
  export type progressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progress
     */
    omit?: progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressInclude<ExtArgs> | null
    /**
     * The filter to search for the progress to update in case it exists.
     */
    where: progressWhereUniqueInput
    /**
     * In case the progress found by the `where` argument doesn't exist, create a new progress with this data.
     */
    create: XOR<progressCreateInput, progressUncheckedCreateInput>
    /**
     * In case the progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<progressUpdateInput, progressUncheckedUpdateInput>
  }

  /**
   * progress delete
   */
  export type progressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progress
     */
    omit?: progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressInclude<ExtArgs> | null
    /**
     * Filter which progress to delete.
     */
    where: progressWhereUniqueInput
  }

  /**
   * progress deleteMany
   */
  export type progressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progresses to delete
     */
    where?: progressWhereInput
    /**
     * Limit how many progresses to delete.
     */
    limit?: number
  }

  /**
   * progress without action
   */
  export type progressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progress
     */
    omit?: progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressInclude<ExtArgs> | null
  }


  /**
   * Model routine
   */

  export type AggregateRoutine = {
    _count: RoutineCountAggregateOutputType | null
    _avg: RoutineAvgAggregateOutputType | null
    _sum: RoutineSumAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  export type RoutineAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    totalExercise: number | null
  }

  export type RoutineSumAggregateOutputType = {
    id: number | null
    duration: number | null
    totalExercise: number | null
  }

  export type RoutineMinAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    createdAt: Date | null
    description: string | null
    duration: number | null
    totalExercise: number | null
  }

  export type RoutineMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    createdAt: Date | null
    description: string | null
    duration: number | null
    totalExercise: number | null
  }

  export type RoutineCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    createdAt: number
    description: number
    duration: number
    totalExercise: number
    _all: number
  }


  export type RoutineAvgAggregateInputType = {
    id?: true
    duration?: true
    totalExercise?: true
  }

  export type RoutineSumAggregateInputType = {
    id?: true
    duration?: true
    totalExercise?: true
  }

  export type RoutineMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    createdAt?: true
    description?: true
    duration?: true
    totalExercise?: true
  }

  export type RoutineMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    createdAt?: true
    description?: true
    duration?: true
    totalExercise?: true
  }

  export type RoutineCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    createdAt?: true
    description?: true
    duration?: true
    totalExercise?: true
    _all?: true
  }

  export type RoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which routine to aggregate.
     */
    where?: routineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of routines to fetch.
     */
    orderBy?: routineOrderByWithRelationInput | routineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: routineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned routines
    **/
    _count?: true | RoutineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineMaxAggregateInputType
  }

  export type GetRoutineAggregateType<T extends RoutineAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutine[P]>
      : GetScalarType<T[P], AggregateRoutine[P]>
  }




  export type routineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: routineWhereInput
    orderBy?: routineOrderByWithAggregationInput | routineOrderByWithAggregationInput[]
    by: RoutineScalarFieldEnum[] | RoutineScalarFieldEnum
    having?: routineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineCountAggregateInputType | true
    _avg?: RoutineAvgAggregateInputType
    _sum?: RoutineSumAggregateInputType
    _min?: RoutineMinAggregateInputType
    _max?: RoutineMaxAggregateInputType
  }

  export type RoutineGroupByOutputType = {
    id: number
    userId: string
    name: string
    createdAt: Date | null
    description: string
    duration: number
    totalExercise: number
    _count: RoutineCountAggregateOutputType | null
    _avg: RoutineAvgAggregateOutputType | null
    _sum: RoutineSumAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  type GetRoutineGroupByPayload<T extends routineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineGroupByOutputType[P]>
        }
      >
    >


  export type routineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    createdAt?: boolean
    description?: boolean
    duration?: boolean
    totalExercise?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    exerciseRoutine?: boolean | routine$exerciseRoutineArgs<ExtArgs>
    _count?: boolean | RoutineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type routineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    createdAt?: boolean
    description?: boolean
    duration?: boolean
    totalExercise?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type routineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    createdAt?: boolean
    description?: boolean
    duration?: boolean
    totalExercise?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type routineSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    createdAt?: boolean
    description?: boolean
    duration?: boolean
    totalExercise?: boolean
  }

  export type routineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "createdAt" | "description" | "duration" | "totalExercise", ExtArgs["result"]["routine"]>
  export type routineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    exerciseRoutine?: boolean | routine$exerciseRoutineArgs<ExtArgs>
    _count?: boolean | RoutineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type routineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type routineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $routinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "routine"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      exerciseRoutine: Prisma.$exerciseRoutinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      name: string
      createdAt: Date | null
      description: string
      duration: number
      totalExercise: number
    }, ExtArgs["result"]["routine"]>
    composites: {}
  }

  type routineGetPayload<S extends boolean | null | undefined | routineDefaultArgs> = $Result.GetResult<Prisma.$routinePayload, S>

  type routineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<routineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutineCountAggregateInputType | true
    }

  export interface routineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['routine'], meta: { name: 'routine' } }
    /**
     * Find zero or one Routine that matches the filter.
     * @param {routineFindUniqueArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends routineFindUniqueArgs>(args: SelectSubset<T, routineFindUniqueArgs<ExtArgs>>): Prisma__routineClient<$Result.GetResult<Prisma.$routinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Routine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {routineFindUniqueOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends routineFindUniqueOrThrowArgs>(args: SelectSubset<T, routineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__routineClient<$Result.GetResult<Prisma.$routinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {routineFindFirstArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends routineFindFirstArgs>(args?: SelectSubset<T, routineFindFirstArgs<ExtArgs>>): Prisma__routineClient<$Result.GetResult<Prisma.$routinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {routineFindFirstOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends routineFindFirstOrThrowArgs>(args?: SelectSubset<T, routineFindFirstOrThrowArgs<ExtArgs>>): Prisma__routineClient<$Result.GetResult<Prisma.$routinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {routineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routines
     * const routines = await prisma.routine.findMany()
     * 
     * // Get first 10 Routines
     * const routines = await prisma.routine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineWithIdOnly = await prisma.routine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends routineFindManyArgs>(args?: SelectSubset<T, routineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$routinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Routine.
     * @param {routineCreateArgs} args - Arguments to create a Routine.
     * @example
     * // Create one Routine
     * const Routine = await prisma.routine.create({
     *   data: {
     *     // ... data to create a Routine
     *   }
     * })
     * 
     */
    create<T extends routineCreateArgs>(args: SelectSubset<T, routineCreateArgs<ExtArgs>>): Prisma__routineClient<$Result.GetResult<Prisma.$routinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routines.
     * @param {routineCreateManyArgs} args - Arguments to create many Routines.
     * @example
     * // Create many Routines
     * const routine = await prisma.routine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends routineCreateManyArgs>(args?: SelectSubset<T, routineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routines and returns the data saved in the database.
     * @param {routineCreateManyAndReturnArgs} args - Arguments to create many Routines.
     * @example
     * // Create many Routines
     * const routine = await prisma.routine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routines and only return the `id`
     * const routineWithIdOnly = await prisma.routine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends routineCreateManyAndReturnArgs>(args?: SelectSubset<T, routineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$routinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Routine.
     * @param {routineDeleteArgs} args - Arguments to delete one Routine.
     * @example
     * // Delete one Routine
     * const Routine = await prisma.routine.delete({
     *   where: {
     *     // ... filter to delete one Routine
     *   }
     * })
     * 
     */
    delete<T extends routineDeleteArgs>(args: SelectSubset<T, routineDeleteArgs<ExtArgs>>): Prisma__routineClient<$Result.GetResult<Prisma.$routinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Routine.
     * @param {routineUpdateArgs} args - Arguments to update one Routine.
     * @example
     * // Update one Routine
     * const routine = await prisma.routine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends routineUpdateArgs>(args: SelectSubset<T, routineUpdateArgs<ExtArgs>>): Prisma__routineClient<$Result.GetResult<Prisma.$routinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routines.
     * @param {routineDeleteManyArgs} args - Arguments to filter Routines to delete.
     * @example
     * // Delete a few Routines
     * const { count } = await prisma.routine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends routineDeleteManyArgs>(args?: SelectSubset<T, routineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {routineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routines
     * const routine = await prisma.routine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends routineUpdateManyArgs>(args: SelectSubset<T, routineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routines and returns the data updated in the database.
     * @param {routineUpdateManyAndReturnArgs} args - Arguments to update many Routines.
     * @example
     * // Update many Routines
     * const routine = await prisma.routine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routines and only return the `id`
     * const routineWithIdOnly = await prisma.routine.updateManyAndReturn({
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
    updateManyAndReturn<T extends routineUpdateManyAndReturnArgs>(args: SelectSubset<T, routineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$routinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Routine.
     * @param {routineUpsertArgs} args - Arguments to update or create a Routine.
     * @example
     * // Update or create a Routine
     * const routine = await prisma.routine.upsert({
     *   create: {
     *     // ... data to create a Routine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Routine we want to update
     *   }
     * })
     */
    upsert<T extends routineUpsertArgs>(args: SelectSubset<T, routineUpsertArgs<ExtArgs>>): Prisma__routineClient<$Result.GetResult<Prisma.$routinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {routineCountArgs} args - Arguments to filter Routines to count.
     * @example
     * // Count the number of Routines
     * const count = await prisma.routine.count({
     *   where: {
     *     // ... the filter for the Routines we want to count
     *   }
     * })
    **/
    count<T extends routineCountArgs>(
      args?: Subset<T, routineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Routine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutineAggregateArgs>(args: Subset<T, RoutineAggregateArgs>): Prisma.PrismaPromise<GetRoutineAggregateType<T>>

    /**
     * Group by Routine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {routineGroupByArgs} args - Group by arguments.
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
      T extends routineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: routineGroupByArgs['orderBy'] }
        : { orderBy?: routineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, routineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the routine model
   */
  readonly fields: routineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for routine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__routineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exerciseRoutine<T extends routine$exerciseRoutineArgs<ExtArgs> = {}>(args?: Subset<T, routine$exerciseRoutineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exerciseRoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the routine model
   */
  interface routineFieldRefs {
    readonly id: FieldRef<"routine", 'Int'>
    readonly userId: FieldRef<"routine", 'String'>
    readonly name: FieldRef<"routine", 'String'>
    readonly createdAt: FieldRef<"routine", 'DateTime'>
    readonly description: FieldRef<"routine", 'String'>
    readonly duration: FieldRef<"routine", 'Int'>
    readonly totalExercise: FieldRef<"routine", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * routine findUnique
   */
  export type routineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routine
     */
    select?: routineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routine
     */
    omit?: routineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routineInclude<ExtArgs> | null
    /**
     * Filter, which routine to fetch.
     */
    where: routineWhereUniqueInput
  }

  /**
   * routine findUniqueOrThrow
   */
  export type routineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routine
     */
    select?: routineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routine
     */
    omit?: routineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routineInclude<ExtArgs> | null
    /**
     * Filter, which routine to fetch.
     */
    where: routineWhereUniqueInput
  }

  /**
   * routine findFirst
   */
  export type routineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routine
     */
    select?: routineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routine
     */
    omit?: routineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routineInclude<ExtArgs> | null
    /**
     * Filter, which routine to fetch.
     */
    where?: routineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of routines to fetch.
     */
    orderBy?: routineOrderByWithRelationInput | routineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for routines.
     */
    cursor?: routineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * routine findFirstOrThrow
   */
  export type routineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routine
     */
    select?: routineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routine
     */
    omit?: routineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routineInclude<ExtArgs> | null
    /**
     * Filter, which routine to fetch.
     */
    where?: routineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of routines to fetch.
     */
    orderBy?: routineOrderByWithRelationInput | routineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for routines.
     */
    cursor?: routineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * routine findMany
   */
  export type routineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routine
     */
    select?: routineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routine
     */
    omit?: routineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routineInclude<ExtArgs> | null
    /**
     * Filter, which routines to fetch.
     */
    where?: routineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of routines to fetch.
     */
    orderBy?: routineOrderByWithRelationInput | routineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing routines.
     */
    cursor?: routineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` routines.
     */
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * routine create
   */
  export type routineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routine
     */
    select?: routineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routine
     */
    omit?: routineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routineInclude<ExtArgs> | null
    /**
     * The data needed to create a routine.
     */
    data: XOR<routineCreateInput, routineUncheckedCreateInput>
  }

  /**
   * routine createMany
   */
  export type routineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many routines.
     */
    data: routineCreateManyInput | routineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * routine createManyAndReturn
   */
  export type routineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routine
     */
    select?: routineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the routine
     */
    omit?: routineOmit<ExtArgs> | null
    /**
     * The data used to create many routines.
     */
    data: routineCreateManyInput | routineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * routine update
   */
  export type routineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routine
     */
    select?: routineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routine
     */
    omit?: routineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routineInclude<ExtArgs> | null
    /**
     * The data needed to update a routine.
     */
    data: XOR<routineUpdateInput, routineUncheckedUpdateInput>
    /**
     * Choose, which routine to update.
     */
    where: routineWhereUniqueInput
  }

  /**
   * routine updateMany
   */
  export type routineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update routines.
     */
    data: XOR<routineUpdateManyMutationInput, routineUncheckedUpdateManyInput>
    /**
     * Filter which routines to update
     */
    where?: routineWhereInput
    /**
     * Limit how many routines to update.
     */
    limit?: number
  }

  /**
   * routine updateManyAndReturn
   */
  export type routineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routine
     */
    select?: routineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the routine
     */
    omit?: routineOmit<ExtArgs> | null
    /**
     * The data used to update routines.
     */
    data: XOR<routineUpdateManyMutationInput, routineUncheckedUpdateManyInput>
    /**
     * Filter which routines to update
     */
    where?: routineWhereInput
    /**
     * Limit how many routines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * routine upsert
   */
  export type routineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routine
     */
    select?: routineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routine
     */
    omit?: routineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routineInclude<ExtArgs> | null
    /**
     * The filter to search for the routine to update in case it exists.
     */
    where: routineWhereUniqueInput
    /**
     * In case the routine found by the `where` argument doesn't exist, create a new routine with this data.
     */
    create: XOR<routineCreateInput, routineUncheckedCreateInput>
    /**
     * In case the routine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<routineUpdateInput, routineUncheckedUpdateInput>
  }

  /**
   * routine delete
   */
  export type routineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routine
     */
    select?: routineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routine
     */
    omit?: routineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routineInclude<ExtArgs> | null
    /**
     * Filter which routine to delete.
     */
    where: routineWhereUniqueInput
  }

  /**
   * routine deleteMany
   */
  export type routineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which routines to delete
     */
    where?: routineWhereInput
    /**
     * Limit how many routines to delete.
     */
    limit?: number
  }

  /**
   * routine.exerciseRoutine
   */
  export type routine$exerciseRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exerciseRoutine
     */
    select?: exerciseRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exerciseRoutine
     */
    omit?: exerciseRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseRoutineInclude<ExtArgs> | null
    where?: exerciseRoutineWhereInput
    orderBy?: exerciseRoutineOrderByWithRelationInput | exerciseRoutineOrderByWithRelationInput[]
    cursor?: exerciseRoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseRoutineScalarFieldEnum | ExerciseRoutineScalarFieldEnum[]
  }

  /**
   * routine without action
   */
  export type routineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the routine
     */
    select?: routineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the routine
     */
    omit?: routineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: routineInclude<ExtArgs> | null
  }


  /**
   * Model favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteAvgAggregateOutputType = {
    id: number | null
    exerciseId: number | null
  }

  export type FavoriteSumAggregateOutputType = {
    id: number | null
    exerciseId: number | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: number | null
    userId: string | null
    exerciseId: number | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    exerciseId: number | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    exerciseId: number
    _all: number
  }


  export type FavoriteAvgAggregateInputType = {
    id?: true
    exerciseId?: true
  }

  export type FavoriteSumAggregateInputType = {
    id?: true
    exerciseId?: true
  }

  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    exerciseId?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    exerciseId?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    exerciseId?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favorite to aggregate.
     */
    where?: favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type favoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoriteWhereInput
    orderBy?: favoriteOrderByWithAggregationInput | favoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: favoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _avg?: FavoriteAvgAggregateInputType
    _sum?: FavoriteSumAggregateInputType
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: number
    userId: string
    exerciseId: number
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends favoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type favoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exerciseId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type favoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exerciseId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type favoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exerciseId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type favoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    exerciseId?: boolean
  }

  export type favoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "exerciseId", ExtArgs["result"]["favorite"]>
  export type favoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }
  export type favoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }
  export type favoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }

  export type $favoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "favorite"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      exercise: Prisma.$exercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      exerciseId: number
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type favoriteGetPayload<S extends boolean | null | undefined | favoriteDefaultArgs> = $Result.GetResult<Prisma.$favoritePayload, S>

  type favoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<favoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface favoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['favorite'], meta: { name: 'favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {favoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends favoriteFindUniqueArgs>(args: SelectSubset<T, favoriteFindUniqueArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {favoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends favoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, favoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends favoriteFindFirstArgs>(args?: SelectSubset<T, favoriteFindFirstArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends favoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, favoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends favoriteFindManyArgs>(args?: SelectSubset<T, favoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {favoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends favoriteCreateArgs>(args: SelectSubset<T, favoriteCreateArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {favoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends favoriteCreateManyArgs>(args?: SelectSubset<T, favoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {favoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends favoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, favoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {favoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends favoriteDeleteArgs>(args: SelectSubset<T, favoriteDeleteArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {favoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends favoriteUpdateArgs>(args: SelectSubset<T, favoriteUpdateArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {favoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends favoriteDeleteManyArgs>(args?: SelectSubset<T, favoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends favoriteUpdateManyArgs>(args: SelectSubset<T, favoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {favoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
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
    updateManyAndReturn<T extends favoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, favoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {favoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends favoriteUpsertArgs>(args: SelectSubset<T, favoriteUpsertArgs<ExtArgs>>): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends favoriteCountArgs>(
      args?: Subset<T, favoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteGroupByArgs} args - Group by arguments.
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
      T extends favoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: favoriteGroupByArgs['orderBy'] }
        : { orderBy?: favoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, favoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the favorite model
   */
  readonly fields: favoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__favoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends exerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, exerciseDefaultArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the favorite model
   */
  interface favoriteFieldRefs {
    readonly id: FieldRef<"favorite", 'Int'>
    readonly userId: FieldRef<"favorite", 'String'>
    readonly exerciseId: FieldRef<"favorite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * favorite findUnique
   */
  export type favoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorite to fetch.
     */
    where: favoriteWhereUniqueInput
  }

  /**
   * favorite findUniqueOrThrow
   */
  export type favoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorite to fetch.
     */
    where: favoriteWhereUniqueInput
  }

  /**
   * favorite findFirst
   */
  export type favoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorite to fetch.
     */
    where?: favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favorites.
     */
    cursor?: favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * favorite findFirstOrThrow
   */
  export type favoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorite to fetch.
     */
    where?: favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favorites.
     */
    cursor?: favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * favorite findMany
   */
  export type favoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorites to fetch.
     */
    where?: favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing favorites.
     */
    cursor?: favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * favorite create
   */
  export type favoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a favorite.
     */
    data: XOR<favoriteCreateInput, favoriteUncheckedCreateInput>
  }

  /**
   * favorite createMany
   */
  export type favoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many favorites.
     */
    data: favoriteCreateManyInput | favoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * favorite createManyAndReturn
   */
  export type favoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * The data used to create many favorites.
     */
    data: favoriteCreateManyInput | favoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * favorite update
   */
  export type favoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a favorite.
     */
    data: XOR<favoriteUpdateInput, favoriteUncheckedUpdateInput>
    /**
     * Choose, which favorite to update.
     */
    where: favoriteWhereUniqueInput
  }

  /**
   * favorite updateMany
   */
  export type favoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update favorites.
     */
    data: XOR<favoriteUpdateManyMutationInput, favoriteUncheckedUpdateManyInput>
    /**
     * Filter which favorites to update
     */
    where?: favoriteWhereInput
    /**
     * Limit how many favorites to update.
     */
    limit?: number
  }

  /**
   * favorite updateManyAndReturn
   */
  export type favoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * The data used to update favorites.
     */
    data: XOR<favoriteUpdateManyMutationInput, favoriteUncheckedUpdateManyInput>
    /**
     * Filter which favorites to update
     */
    where?: favoriteWhereInput
    /**
     * Limit how many favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * favorite upsert
   */
  export type favoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the favorite to update in case it exists.
     */
    where: favoriteWhereUniqueInput
    /**
     * In case the favorite found by the `where` argument doesn't exist, create a new favorite with this data.
     */
    create: XOR<favoriteCreateInput, favoriteUncheckedCreateInput>
    /**
     * In case the favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<favoriteUpdateInput, favoriteUncheckedUpdateInput>
  }

  /**
   * favorite delete
   */
  export type favoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter which favorite to delete.
     */
    where: favoriteWhereUniqueInput
  }

  /**
   * favorite deleteMany
   */
  export type favoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favorites to delete
     */
    where?: favoriteWhereInput
    /**
     * Limit how many favorites to delete.
     */
    limit?: number
  }

  /**
   * favorite without action
   */
  export type favoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
  }


  /**
   * Model exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    id: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    id: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: number | null
    name: string | null
    muscle: string | null
    videoImgUrl: string | null
    description: string | null
    executionSteps: string | null
    tips: string | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    muscle: string | null
    videoImgUrl: string | null
    description: string | null
    executionSteps: string | null
    tips: string | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    muscle: number
    videoImgUrl: number
    description: number
    executionSteps: number
    tips: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    id?: true
  }

  export type ExerciseSumAggregateInputType = {
    id?: true
  }

  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    muscle?: true
    videoImgUrl?: true
    description?: true
    executionSteps?: true
    tips?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    muscle?: true
    videoImgUrl?: true
    description?: true
    executionSteps?: true
    tips?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    muscle?: true
    videoImgUrl?: true
    description?: true
    executionSteps?: true
    tips?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercise to aggregate.
     */
    where?: exerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exerciseOrderByWithRelationInput | exerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type exerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exerciseWhereInput
    orderBy?: exerciseOrderByWithAggregationInput | exerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: exerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: number
    name: string
    muscle: string
    videoImgUrl: string
    description: string
    executionSteps: string
    tips: string
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends exerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type exerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscle?: boolean
    videoImgUrl?: boolean
    description?: boolean
    executionSteps?: boolean
    tips?: boolean
    progress?: boolean | exercise$progressArgs<ExtArgs>
    favorite?: boolean | exercise$favoriteArgs<ExtArgs>
    exerciseRoutine?: boolean | exercise$exerciseRoutineArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type exerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscle?: boolean
    videoImgUrl?: boolean
    description?: boolean
    executionSteps?: boolean
    tips?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type exerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscle?: boolean
    videoImgUrl?: boolean
    description?: boolean
    executionSteps?: boolean
    tips?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type exerciseSelectScalar = {
    id?: boolean
    name?: boolean
    muscle?: boolean
    videoImgUrl?: boolean
    description?: boolean
    executionSteps?: boolean
    tips?: boolean
  }

  export type exerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "muscle" | "videoImgUrl" | "description" | "executionSteps" | "tips", ExtArgs["result"]["exercise"]>
  export type exerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | exercise$progressArgs<ExtArgs>
    favorite?: boolean | exercise$favoriteArgs<ExtArgs>
    exerciseRoutine?: boolean | exercise$exerciseRoutineArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type exerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type exerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $exercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exercise"
    objects: {
      progress: Prisma.$progressPayload<ExtArgs>[]
      favorite: Prisma.$favoritePayload<ExtArgs>[]
      exerciseRoutine: Prisma.$exerciseRoutinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      muscle: string
      videoImgUrl: string
      description: string
      executionSteps: string
      tips: string
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type exerciseGetPayload<S extends boolean | null | undefined | exerciseDefaultArgs> = $Result.GetResult<Prisma.$exercisePayload, S>

  type exerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface exerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exercise'], meta: { name: 'exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {exerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exerciseFindUniqueArgs>(args: SelectSubset<T, exerciseFindUniqueArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, exerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exerciseFindFirstArgs>(args?: SelectSubset<T, exerciseFindFirstArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, exerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends exerciseFindManyArgs>(args?: SelectSubset<T, exerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {exerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends exerciseCreateArgs>(args: SelectSubset<T, exerciseCreateArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {exerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exerciseCreateManyArgs>(args?: SelectSubset<T, exerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {exerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends exerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, exerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {exerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends exerciseDeleteArgs>(args: SelectSubset<T, exerciseDeleteArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {exerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exerciseUpdateArgs>(args: SelectSubset<T, exerciseUpdateArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {exerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exerciseDeleteManyArgs>(args?: SelectSubset<T, exerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exerciseUpdateManyArgs>(args: SelectSubset<T, exerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {exerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends exerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, exerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {exerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends exerciseUpsertArgs>(args: SelectSubset<T, exerciseUpsertArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends exerciseCountArgs>(
      args?: Subset<T, exerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseGroupByArgs} args - Group by arguments.
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
      T extends exerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exerciseGroupByArgs['orderBy'] }
        : { orderBy?: exerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, exerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exercise model
   */
  readonly fields: exerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    progress<T extends exercise$progressArgs<ExtArgs> = {}>(args?: Subset<T, exercise$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorite<T extends exercise$favoriteArgs<ExtArgs> = {}>(args?: Subset<T, exercise$favoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exerciseRoutine<T extends exercise$exerciseRoutineArgs<ExtArgs> = {}>(args?: Subset<T, exercise$exerciseRoutineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exerciseRoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the exercise model
   */
  interface exerciseFieldRefs {
    readonly id: FieldRef<"exercise", 'Int'>
    readonly name: FieldRef<"exercise", 'String'>
    readonly muscle: FieldRef<"exercise", 'String'>
    readonly videoImgUrl: FieldRef<"exercise", 'String'>
    readonly description: FieldRef<"exercise", 'String'>
    readonly executionSteps: FieldRef<"exercise", 'String'>
    readonly tips: FieldRef<"exercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * exercise findUnique
   */
  export type exerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * Filter, which exercise to fetch.
     */
    where: exerciseWhereUniqueInput
  }

  /**
   * exercise findUniqueOrThrow
   */
  export type exerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * Filter, which exercise to fetch.
     */
    where: exerciseWhereUniqueInput
  }

  /**
   * exercise findFirst
   */
  export type exerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * Filter, which exercise to fetch.
     */
    where?: exerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exerciseOrderByWithRelationInput | exerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercises.
     */
    cursor?: exerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * exercise findFirstOrThrow
   */
  export type exerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * Filter, which exercise to fetch.
     */
    where?: exerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exerciseOrderByWithRelationInput | exerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercises.
     */
    cursor?: exerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * exercise findMany
   */
  export type exerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where?: exerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exerciseOrderByWithRelationInput | exerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exercises.
     */
    cursor?: exerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * exercise create
   */
  export type exerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a exercise.
     */
    data: XOR<exerciseCreateInput, exerciseUncheckedCreateInput>
  }

  /**
   * exercise createMany
   */
  export type exerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exercises.
     */
    data: exerciseCreateManyInput | exerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exercise createManyAndReturn
   */
  export type exerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * The data used to create many exercises.
     */
    data: exerciseCreateManyInput | exerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exercise update
   */
  export type exerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a exercise.
     */
    data: XOR<exerciseUpdateInput, exerciseUncheckedUpdateInput>
    /**
     * Choose, which exercise to update.
     */
    where: exerciseWhereUniqueInput
  }

  /**
   * exercise updateMany
   */
  export type exerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exercises.
     */
    data: XOR<exerciseUpdateManyMutationInput, exerciseUncheckedUpdateManyInput>
    /**
     * Filter which exercises to update
     */
    where?: exerciseWhereInput
    /**
     * Limit how many exercises to update.
     */
    limit?: number
  }

  /**
   * exercise updateManyAndReturn
   */
  export type exerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * The data used to update exercises.
     */
    data: XOR<exerciseUpdateManyMutationInput, exerciseUncheckedUpdateManyInput>
    /**
     * Filter which exercises to update
     */
    where?: exerciseWhereInput
    /**
     * Limit how many exercises to update.
     */
    limit?: number
  }

  /**
   * exercise upsert
   */
  export type exerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the exercise to update in case it exists.
     */
    where: exerciseWhereUniqueInput
    /**
     * In case the exercise found by the `where` argument doesn't exist, create a new exercise with this data.
     */
    create: XOR<exerciseCreateInput, exerciseUncheckedCreateInput>
    /**
     * In case the exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exerciseUpdateInput, exerciseUncheckedUpdateInput>
  }

  /**
   * exercise delete
   */
  export type exerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
    /**
     * Filter which exercise to delete.
     */
    where: exerciseWhereUniqueInput
  }

  /**
   * exercise deleteMany
   */
  export type exerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercises to delete
     */
    where?: exerciseWhereInput
    /**
     * Limit how many exercises to delete.
     */
    limit?: number
  }

  /**
   * exercise.progress
   */
  export type exercise$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress
     */
    select?: progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the progress
     */
    omit?: progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: progressInclude<ExtArgs> | null
    where?: progressWhereInput
    orderBy?: progressOrderByWithRelationInput | progressOrderByWithRelationInput[]
    cursor?: progressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * exercise.favorite
   */
  export type exercise$favoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favorite
     */
    omit?: favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    where?: favoriteWhereInput
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    cursor?: favoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * exercise.exerciseRoutine
   */
  export type exercise$exerciseRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exerciseRoutine
     */
    select?: exerciseRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exerciseRoutine
     */
    omit?: exerciseRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseRoutineInclude<ExtArgs> | null
    where?: exerciseRoutineWhereInput
    orderBy?: exerciseRoutineOrderByWithRelationInput | exerciseRoutineOrderByWithRelationInput[]
    cursor?: exerciseRoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseRoutineScalarFieldEnum | ExerciseRoutineScalarFieldEnum[]
  }

  /**
   * exercise without action
   */
  export type exerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercise
     */
    select?: exerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercise
     */
    omit?: exerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseInclude<ExtArgs> | null
  }


  /**
   * Model exerciseRoutine
   */

  export type AggregateExerciseRoutine = {
    _count: ExerciseRoutineCountAggregateOutputType | null
    _avg: ExerciseRoutineAvgAggregateOutputType | null
    _sum: ExerciseRoutineSumAggregateOutputType | null
    _min: ExerciseRoutineMinAggregateOutputType | null
    _max: ExerciseRoutineMaxAggregateOutputType | null
  }

  export type ExerciseRoutineAvgAggregateOutputType = {
    id: number | null
    routineId: number | null
    exerciseId: number | null
    series: number | null
    repetitions: number | null
  }

  export type ExerciseRoutineSumAggregateOutputType = {
    id: number | null
    routineId: number | null
    exerciseId: number | null
    series: number | null
    repetitions: number | null
  }

  export type ExerciseRoutineMinAggregateOutputType = {
    id: number | null
    routineId: number | null
    exerciseId: number | null
    series: number | null
    repetitions: number | null
  }

  export type ExerciseRoutineMaxAggregateOutputType = {
    id: number | null
    routineId: number | null
    exerciseId: number | null
    series: number | null
    repetitions: number | null
  }

  export type ExerciseRoutineCountAggregateOutputType = {
    id: number
    routineId: number
    exerciseId: number
    series: number
    repetitions: number
    _all: number
  }


  export type ExerciseRoutineAvgAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
    series?: true
    repetitions?: true
  }

  export type ExerciseRoutineSumAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
    series?: true
    repetitions?: true
  }

  export type ExerciseRoutineMinAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
    series?: true
    repetitions?: true
  }

  export type ExerciseRoutineMaxAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
    series?: true
    repetitions?: true
  }

  export type ExerciseRoutineCountAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
    series?: true
    repetitions?: true
    _all?: true
  }

  export type ExerciseRoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exerciseRoutine to aggregate.
     */
    where?: exerciseRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exerciseRoutines to fetch.
     */
    orderBy?: exerciseRoutineOrderByWithRelationInput | exerciseRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exerciseRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exerciseRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exerciseRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exerciseRoutines
    **/
    _count?: true | ExerciseRoutineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseRoutineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseRoutineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseRoutineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseRoutineMaxAggregateInputType
  }

  export type GetExerciseRoutineAggregateType<T extends ExerciseRoutineAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseRoutine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseRoutine[P]>
      : GetScalarType<T[P], AggregateExerciseRoutine[P]>
  }




  export type exerciseRoutineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exerciseRoutineWhereInput
    orderBy?: exerciseRoutineOrderByWithAggregationInput | exerciseRoutineOrderByWithAggregationInput[]
    by: ExerciseRoutineScalarFieldEnum[] | ExerciseRoutineScalarFieldEnum
    having?: exerciseRoutineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseRoutineCountAggregateInputType | true
    _avg?: ExerciseRoutineAvgAggregateInputType
    _sum?: ExerciseRoutineSumAggregateInputType
    _min?: ExerciseRoutineMinAggregateInputType
    _max?: ExerciseRoutineMaxAggregateInputType
  }

  export type ExerciseRoutineGroupByOutputType = {
    id: number
    routineId: number
    exerciseId: number
    series: number
    repetitions: number
    _count: ExerciseRoutineCountAggregateOutputType | null
    _avg: ExerciseRoutineAvgAggregateOutputType | null
    _sum: ExerciseRoutineSumAggregateOutputType | null
    _min: ExerciseRoutineMinAggregateOutputType | null
    _max: ExerciseRoutineMaxAggregateOutputType | null
  }

  type GetExerciseRoutineGroupByPayload<T extends exerciseRoutineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseRoutineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseRoutineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseRoutineGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseRoutineGroupByOutputType[P]>
        }
      >
    >


  export type exerciseRoutineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    exerciseId?: boolean
    series?: boolean
    repetitions?: boolean
    routine?: boolean | routineDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseRoutine"]>

  export type exerciseRoutineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    exerciseId?: boolean
    series?: boolean
    repetitions?: boolean
    routine?: boolean | routineDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseRoutine"]>

  export type exerciseRoutineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    exerciseId?: boolean
    series?: boolean
    repetitions?: boolean
    routine?: boolean | routineDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseRoutine"]>

  export type exerciseRoutineSelectScalar = {
    id?: boolean
    routineId?: boolean
    exerciseId?: boolean
    series?: boolean
    repetitions?: boolean
  }

  export type exerciseRoutineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routineId" | "exerciseId" | "series" | "repetitions", ExtArgs["result"]["exerciseRoutine"]>
  export type exerciseRoutineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | routineDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }
  export type exerciseRoutineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | routineDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }
  export type exerciseRoutineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | routineDefaultArgs<ExtArgs>
    exercise?: boolean | exerciseDefaultArgs<ExtArgs>
  }

  export type $exerciseRoutinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exerciseRoutine"
    objects: {
      routine: Prisma.$routinePayload<ExtArgs>
      exercise: Prisma.$exercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      routineId: number
      exerciseId: number
      series: number
      repetitions: number
    }, ExtArgs["result"]["exerciseRoutine"]>
    composites: {}
  }

  type exerciseRoutineGetPayload<S extends boolean | null | undefined | exerciseRoutineDefaultArgs> = $Result.GetResult<Prisma.$exerciseRoutinePayload, S>

  type exerciseRoutineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exerciseRoutineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseRoutineCountAggregateInputType | true
    }

  export interface exerciseRoutineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exerciseRoutine'], meta: { name: 'exerciseRoutine' } }
    /**
     * Find zero or one ExerciseRoutine that matches the filter.
     * @param {exerciseRoutineFindUniqueArgs} args - Arguments to find a ExerciseRoutine
     * @example
     * // Get one ExerciseRoutine
     * const exerciseRoutine = await prisma.exerciseRoutine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exerciseRoutineFindUniqueArgs>(args: SelectSubset<T, exerciseRoutineFindUniqueArgs<ExtArgs>>): Prisma__exerciseRoutineClient<$Result.GetResult<Prisma.$exerciseRoutinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseRoutine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exerciseRoutineFindUniqueOrThrowArgs} args - Arguments to find a ExerciseRoutine
     * @example
     * // Get one ExerciseRoutine
     * const exerciseRoutine = await prisma.exerciseRoutine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exerciseRoutineFindUniqueOrThrowArgs>(args: SelectSubset<T, exerciseRoutineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exerciseRoutineClient<$Result.GetResult<Prisma.$exerciseRoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseRoutine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseRoutineFindFirstArgs} args - Arguments to find a ExerciseRoutine
     * @example
     * // Get one ExerciseRoutine
     * const exerciseRoutine = await prisma.exerciseRoutine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exerciseRoutineFindFirstArgs>(args?: SelectSubset<T, exerciseRoutineFindFirstArgs<ExtArgs>>): Prisma__exerciseRoutineClient<$Result.GetResult<Prisma.$exerciseRoutinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseRoutine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseRoutineFindFirstOrThrowArgs} args - Arguments to find a ExerciseRoutine
     * @example
     * // Get one ExerciseRoutine
     * const exerciseRoutine = await prisma.exerciseRoutine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exerciseRoutineFindFirstOrThrowArgs>(args?: SelectSubset<T, exerciseRoutineFindFirstOrThrowArgs<ExtArgs>>): Prisma__exerciseRoutineClient<$Result.GetResult<Prisma.$exerciseRoutinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseRoutines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseRoutineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseRoutines
     * const exerciseRoutines = await prisma.exerciseRoutine.findMany()
     * 
     * // Get first 10 ExerciseRoutines
     * const exerciseRoutines = await prisma.exerciseRoutine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseRoutineWithIdOnly = await prisma.exerciseRoutine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends exerciseRoutineFindManyArgs>(args?: SelectSubset<T, exerciseRoutineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exerciseRoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseRoutine.
     * @param {exerciseRoutineCreateArgs} args - Arguments to create a ExerciseRoutine.
     * @example
     * // Create one ExerciseRoutine
     * const ExerciseRoutine = await prisma.exerciseRoutine.create({
     *   data: {
     *     // ... data to create a ExerciseRoutine
     *   }
     * })
     * 
     */
    create<T extends exerciseRoutineCreateArgs>(args: SelectSubset<T, exerciseRoutineCreateArgs<ExtArgs>>): Prisma__exerciseRoutineClient<$Result.GetResult<Prisma.$exerciseRoutinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseRoutines.
     * @param {exerciseRoutineCreateManyArgs} args - Arguments to create many ExerciseRoutines.
     * @example
     * // Create many ExerciseRoutines
     * const exerciseRoutine = await prisma.exerciseRoutine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exerciseRoutineCreateManyArgs>(args?: SelectSubset<T, exerciseRoutineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExerciseRoutines and returns the data saved in the database.
     * @param {exerciseRoutineCreateManyAndReturnArgs} args - Arguments to create many ExerciseRoutines.
     * @example
     * // Create many ExerciseRoutines
     * const exerciseRoutine = await prisma.exerciseRoutine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExerciseRoutines and only return the `id`
     * const exerciseRoutineWithIdOnly = await prisma.exerciseRoutine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends exerciseRoutineCreateManyAndReturnArgs>(args?: SelectSubset<T, exerciseRoutineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exerciseRoutinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExerciseRoutine.
     * @param {exerciseRoutineDeleteArgs} args - Arguments to delete one ExerciseRoutine.
     * @example
     * // Delete one ExerciseRoutine
     * const ExerciseRoutine = await prisma.exerciseRoutine.delete({
     *   where: {
     *     // ... filter to delete one ExerciseRoutine
     *   }
     * })
     * 
     */
    delete<T extends exerciseRoutineDeleteArgs>(args: SelectSubset<T, exerciseRoutineDeleteArgs<ExtArgs>>): Prisma__exerciseRoutineClient<$Result.GetResult<Prisma.$exerciseRoutinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseRoutine.
     * @param {exerciseRoutineUpdateArgs} args - Arguments to update one ExerciseRoutine.
     * @example
     * // Update one ExerciseRoutine
     * const exerciseRoutine = await prisma.exerciseRoutine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exerciseRoutineUpdateArgs>(args: SelectSubset<T, exerciseRoutineUpdateArgs<ExtArgs>>): Prisma__exerciseRoutineClient<$Result.GetResult<Prisma.$exerciseRoutinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseRoutines.
     * @param {exerciseRoutineDeleteManyArgs} args - Arguments to filter ExerciseRoutines to delete.
     * @example
     * // Delete a few ExerciseRoutines
     * const { count } = await prisma.exerciseRoutine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exerciseRoutineDeleteManyArgs>(args?: SelectSubset<T, exerciseRoutineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseRoutines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseRoutineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseRoutines
     * const exerciseRoutine = await prisma.exerciseRoutine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exerciseRoutineUpdateManyArgs>(args: SelectSubset<T, exerciseRoutineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseRoutines and returns the data updated in the database.
     * @param {exerciseRoutineUpdateManyAndReturnArgs} args - Arguments to update many ExerciseRoutines.
     * @example
     * // Update many ExerciseRoutines
     * const exerciseRoutine = await prisma.exerciseRoutine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExerciseRoutines and only return the `id`
     * const exerciseRoutineWithIdOnly = await prisma.exerciseRoutine.updateManyAndReturn({
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
    updateManyAndReturn<T extends exerciseRoutineUpdateManyAndReturnArgs>(args: SelectSubset<T, exerciseRoutineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exerciseRoutinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExerciseRoutine.
     * @param {exerciseRoutineUpsertArgs} args - Arguments to update or create a ExerciseRoutine.
     * @example
     * // Update or create a ExerciseRoutine
     * const exerciseRoutine = await prisma.exerciseRoutine.upsert({
     *   create: {
     *     // ... data to create a ExerciseRoutine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseRoutine we want to update
     *   }
     * })
     */
    upsert<T extends exerciseRoutineUpsertArgs>(args: SelectSubset<T, exerciseRoutineUpsertArgs<ExtArgs>>): Prisma__exerciseRoutineClient<$Result.GetResult<Prisma.$exerciseRoutinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExerciseRoutines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseRoutineCountArgs} args - Arguments to filter ExerciseRoutines to count.
     * @example
     * // Count the number of ExerciseRoutines
     * const count = await prisma.exerciseRoutine.count({
     *   where: {
     *     // ... the filter for the ExerciseRoutines we want to count
     *   }
     * })
    **/
    count<T extends exerciseRoutineCountArgs>(
      args?: Subset<T, exerciseRoutineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseRoutineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseRoutine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseRoutineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseRoutineAggregateArgs>(args: Subset<T, ExerciseRoutineAggregateArgs>): Prisma.PrismaPromise<GetExerciseRoutineAggregateType<T>>

    /**
     * Group by ExerciseRoutine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciseRoutineGroupByArgs} args - Group by arguments.
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
      T extends exerciseRoutineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exerciseRoutineGroupByArgs['orderBy'] }
        : { orderBy?: exerciseRoutineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, exerciseRoutineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exerciseRoutine model
   */
  readonly fields: exerciseRoutineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exerciseRoutine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exerciseRoutineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routine<T extends routineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, routineDefaultArgs<ExtArgs>>): Prisma__routineClient<$Result.GetResult<Prisma.$routinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends exerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, exerciseDefaultArgs<ExtArgs>>): Prisma__exerciseClient<$Result.GetResult<Prisma.$exercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the exerciseRoutine model
   */
  interface exerciseRoutineFieldRefs {
    readonly id: FieldRef<"exerciseRoutine", 'Int'>
    readonly routineId: FieldRef<"exerciseRoutine", 'Int'>
    readonly exerciseId: FieldRef<"exerciseRoutine", 'Int'>
    readonly series: FieldRef<"exerciseRoutine", 'Int'>
    readonly repetitions: FieldRef<"exerciseRoutine", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * exerciseRoutine findUnique
   */
  export type exerciseRoutineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exerciseRoutine
     */
    select?: exerciseRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exerciseRoutine
     */
    omit?: exerciseRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseRoutineInclude<ExtArgs> | null
    /**
     * Filter, which exerciseRoutine to fetch.
     */
    where: exerciseRoutineWhereUniqueInput
  }

  /**
   * exerciseRoutine findUniqueOrThrow
   */
  export type exerciseRoutineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exerciseRoutine
     */
    select?: exerciseRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exerciseRoutine
     */
    omit?: exerciseRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseRoutineInclude<ExtArgs> | null
    /**
     * Filter, which exerciseRoutine to fetch.
     */
    where: exerciseRoutineWhereUniqueInput
  }

  /**
   * exerciseRoutine findFirst
   */
  export type exerciseRoutineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exerciseRoutine
     */
    select?: exerciseRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exerciseRoutine
     */
    omit?: exerciseRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseRoutineInclude<ExtArgs> | null
    /**
     * Filter, which exerciseRoutine to fetch.
     */
    where?: exerciseRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exerciseRoutines to fetch.
     */
    orderBy?: exerciseRoutineOrderByWithRelationInput | exerciseRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exerciseRoutines.
     */
    cursor?: exerciseRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exerciseRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exerciseRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exerciseRoutines.
     */
    distinct?: ExerciseRoutineScalarFieldEnum | ExerciseRoutineScalarFieldEnum[]
  }

  /**
   * exerciseRoutine findFirstOrThrow
   */
  export type exerciseRoutineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exerciseRoutine
     */
    select?: exerciseRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exerciseRoutine
     */
    omit?: exerciseRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseRoutineInclude<ExtArgs> | null
    /**
     * Filter, which exerciseRoutine to fetch.
     */
    where?: exerciseRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exerciseRoutines to fetch.
     */
    orderBy?: exerciseRoutineOrderByWithRelationInput | exerciseRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exerciseRoutines.
     */
    cursor?: exerciseRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exerciseRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exerciseRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exerciseRoutines.
     */
    distinct?: ExerciseRoutineScalarFieldEnum | ExerciseRoutineScalarFieldEnum[]
  }

  /**
   * exerciseRoutine findMany
   */
  export type exerciseRoutineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exerciseRoutine
     */
    select?: exerciseRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exerciseRoutine
     */
    omit?: exerciseRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseRoutineInclude<ExtArgs> | null
    /**
     * Filter, which exerciseRoutines to fetch.
     */
    where?: exerciseRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exerciseRoutines to fetch.
     */
    orderBy?: exerciseRoutineOrderByWithRelationInput | exerciseRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exerciseRoutines.
     */
    cursor?: exerciseRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exerciseRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exerciseRoutines.
     */
    skip?: number
    distinct?: ExerciseRoutineScalarFieldEnum | ExerciseRoutineScalarFieldEnum[]
  }

  /**
   * exerciseRoutine create
   */
  export type exerciseRoutineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exerciseRoutine
     */
    select?: exerciseRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exerciseRoutine
     */
    omit?: exerciseRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseRoutineInclude<ExtArgs> | null
    /**
     * The data needed to create a exerciseRoutine.
     */
    data: XOR<exerciseRoutineCreateInput, exerciseRoutineUncheckedCreateInput>
  }

  /**
   * exerciseRoutine createMany
   */
  export type exerciseRoutineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exerciseRoutines.
     */
    data: exerciseRoutineCreateManyInput | exerciseRoutineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exerciseRoutine createManyAndReturn
   */
  export type exerciseRoutineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exerciseRoutine
     */
    select?: exerciseRoutineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exerciseRoutine
     */
    omit?: exerciseRoutineOmit<ExtArgs> | null
    /**
     * The data used to create many exerciseRoutines.
     */
    data: exerciseRoutineCreateManyInput | exerciseRoutineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseRoutineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * exerciseRoutine update
   */
  export type exerciseRoutineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exerciseRoutine
     */
    select?: exerciseRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exerciseRoutine
     */
    omit?: exerciseRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseRoutineInclude<ExtArgs> | null
    /**
     * The data needed to update a exerciseRoutine.
     */
    data: XOR<exerciseRoutineUpdateInput, exerciseRoutineUncheckedUpdateInput>
    /**
     * Choose, which exerciseRoutine to update.
     */
    where: exerciseRoutineWhereUniqueInput
  }

  /**
   * exerciseRoutine updateMany
   */
  export type exerciseRoutineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exerciseRoutines.
     */
    data: XOR<exerciseRoutineUpdateManyMutationInput, exerciseRoutineUncheckedUpdateManyInput>
    /**
     * Filter which exerciseRoutines to update
     */
    where?: exerciseRoutineWhereInput
    /**
     * Limit how many exerciseRoutines to update.
     */
    limit?: number
  }

  /**
   * exerciseRoutine updateManyAndReturn
   */
  export type exerciseRoutineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exerciseRoutine
     */
    select?: exerciseRoutineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exerciseRoutine
     */
    omit?: exerciseRoutineOmit<ExtArgs> | null
    /**
     * The data used to update exerciseRoutines.
     */
    data: XOR<exerciseRoutineUpdateManyMutationInput, exerciseRoutineUncheckedUpdateManyInput>
    /**
     * Filter which exerciseRoutines to update
     */
    where?: exerciseRoutineWhereInput
    /**
     * Limit how many exerciseRoutines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseRoutineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * exerciseRoutine upsert
   */
  export type exerciseRoutineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exerciseRoutine
     */
    select?: exerciseRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exerciseRoutine
     */
    omit?: exerciseRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseRoutineInclude<ExtArgs> | null
    /**
     * The filter to search for the exerciseRoutine to update in case it exists.
     */
    where: exerciseRoutineWhereUniqueInput
    /**
     * In case the exerciseRoutine found by the `where` argument doesn't exist, create a new exerciseRoutine with this data.
     */
    create: XOR<exerciseRoutineCreateInput, exerciseRoutineUncheckedCreateInput>
    /**
     * In case the exerciseRoutine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exerciseRoutineUpdateInput, exerciseRoutineUncheckedUpdateInput>
  }

  /**
   * exerciseRoutine delete
   */
  export type exerciseRoutineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exerciseRoutine
     */
    select?: exerciseRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exerciseRoutine
     */
    omit?: exerciseRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseRoutineInclude<ExtArgs> | null
    /**
     * Filter which exerciseRoutine to delete.
     */
    where: exerciseRoutineWhereUniqueInput
  }

  /**
   * exerciseRoutine deleteMany
   */
  export type exerciseRoutineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exerciseRoutines to delete
     */
    where?: exerciseRoutineWhereInput
    /**
     * Limit how many exerciseRoutines to delete.
     */
    limit?: number
  }

  /**
   * exerciseRoutine without action
   */
  export type exerciseRoutineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exerciseRoutine
     */
    select?: exerciseRoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exerciseRoutine
     */
    omit?: exerciseRoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciseRoutineInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    exerciseId: 'exerciseId',
    date: 'date',
    weightUsed: 'weightUsed',
    repetitions: 'repetitions'
  };

  export type ProgressScalarFieldEnum = (typeof ProgressScalarFieldEnum)[keyof typeof ProgressScalarFieldEnum]


  export const RoutineScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    createdAt: 'createdAt',
    description: 'description',
    duration: 'duration',
    totalExercise: 'totalExercise'
  };

  export type RoutineScalarFieldEnum = (typeof RoutineScalarFieldEnum)[keyof typeof RoutineScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    exerciseId: 'exerciseId'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    muscle: 'muscle',
    videoImgUrl: 'videoImgUrl',
    description: 'description',
    executionSteps: 'executionSteps',
    tips: 'tips'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const ExerciseRoutineScalarFieldEnum: {
    id: 'id',
    routineId: 'routineId',
    exerciseId: 'exerciseId',
    series: 'series',
    repetitions: 'repetitions'
  };

  export type ExerciseRoutineScalarFieldEnum = (typeof ExerciseRoutineScalarFieldEnum)[keyof typeof ExerciseRoutineScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    emailVerified?: DateTimeNullableFilter<"user"> | Date | string | null
    password?: StringFilter<"user"> | string
    avatar?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    role?: EnumRolFilter<"user"> | $Enums.Rol
    progress?: ProgressListRelationFilter
    routine?: RoutineListRelationFilter
    favorites?: FavoriteListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    progress?: progressOrderByRelationAggregateInput
    routine?: routineOrderByRelationAggregateInput
    favorites?: favoriteOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    emailVerified?: DateTimeNullableFilter<"user"> | Date | string | null
    password?: StringFilter<"user"> | string
    avatar?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    role?: EnumRolFilter<"user"> | $Enums.Rol
    progress?: ProgressListRelationFilter
    routine?: RoutineListRelationFilter
    favorites?: FavoriteListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    password?: StringWithAggregatesFilter<"user"> | string
    avatar?: StringNullableWithAggregatesFilter<"user"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    role?: EnumRolWithAggregatesFilter<"user"> | $Enums.Rol
  }

  export type progressWhereInput = {
    AND?: progressWhereInput | progressWhereInput[]
    OR?: progressWhereInput[]
    NOT?: progressWhereInput | progressWhereInput[]
    id?: IntFilter<"progress"> | number
    userId?: StringFilter<"progress"> | string
    exerciseId?: IntFilter<"progress"> | number
    date?: DateTimeFilter<"progress"> | Date | string
    weightUsed?: FloatFilter<"progress"> | number
    repetitions?: IntFilter<"progress"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, exerciseWhereInput>
  }

  export type progressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
    date?: SortOrder
    weightUsed?: SortOrder
    repetitions?: SortOrder
    user?: userOrderByWithRelationInput
    exercise?: exerciseOrderByWithRelationInput
  }

  export type progressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: progressWhereInput | progressWhereInput[]
    OR?: progressWhereInput[]
    NOT?: progressWhereInput | progressWhereInput[]
    userId?: StringFilter<"progress"> | string
    exerciseId?: IntFilter<"progress"> | number
    date?: DateTimeFilter<"progress"> | Date | string
    weightUsed?: FloatFilter<"progress"> | number
    repetitions?: IntFilter<"progress"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, exerciseWhereInput>
  }, "id">

  export type progressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
    date?: SortOrder
    weightUsed?: SortOrder
    repetitions?: SortOrder
    _count?: progressCountOrderByAggregateInput
    _avg?: progressAvgOrderByAggregateInput
    _max?: progressMaxOrderByAggregateInput
    _min?: progressMinOrderByAggregateInput
    _sum?: progressSumOrderByAggregateInput
  }

  export type progressScalarWhereWithAggregatesInput = {
    AND?: progressScalarWhereWithAggregatesInput | progressScalarWhereWithAggregatesInput[]
    OR?: progressScalarWhereWithAggregatesInput[]
    NOT?: progressScalarWhereWithAggregatesInput | progressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"progress"> | number
    userId?: StringWithAggregatesFilter<"progress"> | string
    exerciseId?: IntWithAggregatesFilter<"progress"> | number
    date?: DateTimeWithAggregatesFilter<"progress"> | Date | string
    weightUsed?: FloatWithAggregatesFilter<"progress"> | number
    repetitions?: IntWithAggregatesFilter<"progress"> | number
  }

  export type routineWhereInput = {
    AND?: routineWhereInput | routineWhereInput[]
    OR?: routineWhereInput[]
    NOT?: routineWhereInput | routineWhereInput[]
    id?: IntFilter<"routine"> | number
    userId?: StringFilter<"routine"> | string
    name?: StringFilter<"routine"> | string
    createdAt?: DateTimeNullableFilter<"routine"> | Date | string | null
    description?: StringFilter<"routine"> | string
    duration?: IntFilter<"routine"> | number
    totalExercise?: IntFilter<"routine"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    exerciseRoutine?: ExerciseRoutineListRelationFilter
  }

  export type routineOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    description?: SortOrder
    duration?: SortOrder
    totalExercise?: SortOrder
    user?: userOrderByWithRelationInput
    exerciseRoutine?: exerciseRoutineOrderByRelationAggregateInput
  }

  export type routineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: routineWhereInput | routineWhereInput[]
    OR?: routineWhereInput[]
    NOT?: routineWhereInput | routineWhereInput[]
    userId?: StringFilter<"routine"> | string
    name?: StringFilter<"routine"> | string
    createdAt?: DateTimeNullableFilter<"routine"> | Date | string | null
    description?: StringFilter<"routine"> | string
    duration?: IntFilter<"routine"> | number
    totalExercise?: IntFilter<"routine"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    exerciseRoutine?: ExerciseRoutineListRelationFilter
  }, "id">

  export type routineOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    description?: SortOrder
    duration?: SortOrder
    totalExercise?: SortOrder
    _count?: routineCountOrderByAggregateInput
    _avg?: routineAvgOrderByAggregateInput
    _max?: routineMaxOrderByAggregateInput
    _min?: routineMinOrderByAggregateInput
    _sum?: routineSumOrderByAggregateInput
  }

  export type routineScalarWhereWithAggregatesInput = {
    AND?: routineScalarWhereWithAggregatesInput | routineScalarWhereWithAggregatesInput[]
    OR?: routineScalarWhereWithAggregatesInput[]
    NOT?: routineScalarWhereWithAggregatesInput | routineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"routine"> | number
    userId?: StringWithAggregatesFilter<"routine"> | string
    name?: StringWithAggregatesFilter<"routine"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"routine"> | Date | string | null
    description?: StringWithAggregatesFilter<"routine"> | string
    duration?: IntWithAggregatesFilter<"routine"> | number
    totalExercise?: IntWithAggregatesFilter<"routine"> | number
  }

  export type favoriteWhereInput = {
    AND?: favoriteWhereInput | favoriteWhereInput[]
    OR?: favoriteWhereInput[]
    NOT?: favoriteWhereInput | favoriteWhereInput[]
    id?: IntFilter<"favorite"> | number
    userId?: StringFilter<"favorite"> | string
    exerciseId?: IntFilter<"favorite"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, exerciseWhereInput>
  }

  export type favoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
    user?: userOrderByWithRelationInput
    exercise?: exerciseOrderByWithRelationInput
  }

  export type favoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_exerciseId?: favoriteUserIdExerciseIdCompoundUniqueInput
    AND?: favoriteWhereInput | favoriteWhereInput[]
    OR?: favoriteWhereInput[]
    NOT?: favoriteWhereInput | favoriteWhereInput[]
    userId?: StringFilter<"favorite"> | string
    exerciseId?: IntFilter<"favorite"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, exerciseWhereInput>
  }, "id" | "userId_exerciseId">

  export type favoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
    _count?: favoriteCountOrderByAggregateInput
    _avg?: favoriteAvgOrderByAggregateInput
    _max?: favoriteMaxOrderByAggregateInput
    _min?: favoriteMinOrderByAggregateInput
    _sum?: favoriteSumOrderByAggregateInput
  }

  export type favoriteScalarWhereWithAggregatesInput = {
    AND?: favoriteScalarWhereWithAggregatesInput | favoriteScalarWhereWithAggregatesInput[]
    OR?: favoriteScalarWhereWithAggregatesInput[]
    NOT?: favoriteScalarWhereWithAggregatesInput | favoriteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"favorite"> | number
    userId?: StringWithAggregatesFilter<"favorite"> | string
    exerciseId?: IntWithAggregatesFilter<"favorite"> | number
  }

  export type exerciseWhereInput = {
    AND?: exerciseWhereInput | exerciseWhereInput[]
    OR?: exerciseWhereInput[]
    NOT?: exerciseWhereInput | exerciseWhereInput[]
    id?: IntFilter<"exercise"> | number
    name?: StringFilter<"exercise"> | string
    muscle?: StringFilter<"exercise"> | string
    videoImgUrl?: StringFilter<"exercise"> | string
    description?: StringFilter<"exercise"> | string
    executionSteps?: StringFilter<"exercise"> | string
    tips?: StringFilter<"exercise"> | string
    progress?: ProgressListRelationFilter
    favorite?: FavoriteListRelationFilter
    exerciseRoutine?: ExerciseRoutineListRelationFilter
  }

  export type exerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    muscle?: SortOrder
    videoImgUrl?: SortOrder
    description?: SortOrder
    executionSteps?: SortOrder
    tips?: SortOrder
    progress?: progressOrderByRelationAggregateInput
    favorite?: favoriteOrderByRelationAggregateInput
    exerciseRoutine?: exerciseRoutineOrderByRelationAggregateInput
  }

  export type exerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: exerciseWhereInput | exerciseWhereInput[]
    OR?: exerciseWhereInput[]
    NOT?: exerciseWhereInput | exerciseWhereInput[]
    muscle?: StringFilter<"exercise"> | string
    videoImgUrl?: StringFilter<"exercise"> | string
    description?: StringFilter<"exercise"> | string
    executionSteps?: StringFilter<"exercise"> | string
    tips?: StringFilter<"exercise"> | string
    progress?: ProgressListRelationFilter
    favorite?: FavoriteListRelationFilter
    exerciseRoutine?: ExerciseRoutineListRelationFilter
  }, "id" | "name">

  export type exerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    muscle?: SortOrder
    videoImgUrl?: SortOrder
    description?: SortOrder
    executionSteps?: SortOrder
    tips?: SortOrder
    _count?: exerciseCountOrderByAggregateInput
    _avg?: exerciseAvgOrderByAggregateInput
    _max?: exerciseMaxOrderByAggregateInput
    _min?: exerciseMinOrderByAggregateInput
    _sum?: exerciseSumOrderByAggregateInput
  }

  export type exerciseScalarWhereWithAggregatesInput = {
    AND?: exerciseScalarWhereWithAggregatesInput | exerciseScalarWhereWithAggregatesInput[]
    OR?: exerciseScalarWhereWithAggregatesInput[]
    NOT?: exerciseScalarWhereWithAggregatesInput | exerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"exercise"> | number
    name?: StringWithAggregatesFilter<"exercise"> | string
    muscle?: StringWithAggregatesFilter<"exercise"> | string
    videoImgUrl?: StringWithAggregatesFilter<"exercise"> | string
    description?: StringWithAggregatesFilter<"exercise"> | string
    executionSteps?: StringWithAggregatesFilter<"exercise"> | string
    tips?: StringWithAggregatesFilter<"exercise"> | string
  }

  export type exerciseRoutineWhereInput = {
    AND?: exerciseRoutineWhereInput | exerciseRoutineWhereInput[]
    OR?: exerciseRoutineWhereInput[]
    NOT?: exerciseRoutineWhereInput | exerciseRoutineWhereInput[]
    id?: IntFilter<"exerciseRoutine"> | number
    routineId?: IntFilter<"exerciseRoutine"> | number
    exerciseId?: IntFilter<"exerciseRoutine"> | number
    series?: IntFilter<"exerciseRoutine"> | number
    repetitions?: IntFilter<"exerciseRoutine"> | number
    routine?: XOR<RoutineScalarRelationFilter, routineWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, exerciseWhereInput>
  }

  export type exerciseRoutineOrderByWithRelationInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    series?: SortOrder
    repetitions?: SortOrder
    routine?: routineOrderByWithRelationInput
    exercise?: exerciseOrderByWithRelationInput
  }

  export type exerciseRoutineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: exerciseRoutineWhereInput | exerciseRoutineWhereInput[]
    OR?: exerciseRoutineWhereInput[]
    NOT?: exerciseRoutineWhereInput | exerciseRoutineWhereInput[]
    routineId?: IntFilter<"exerciseRoutine"> | number
    exerciseId?: IntFilter<"exerciseRoutine"> | number
    series?: IntFilter<"exerciseRoutine"> | number
    repetitions?: IntFilter<"exerciseRoutine"> | number
    routine?: XOR<RoutineScalarRelationFilter, routineWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, exerciseWhereInput>
  }, "id">

  export type exerciseRoutineOrderByWithAggregationInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    series?: SortOrder
    repetitions?: SortOrder
    _count?: exerciseRoutineCountOrderByAggregateInput
    _avg?: exerciseRoutineAvgOrderByAggregateInput
    _max?: exerciseRoutineMaxOrderByAggregateInput
    _min?: exerciseRoutineMinOrderByAggregateInput
    _sum?: exerciseRoutineSumOrderByAggregateInput
  }

  export type exerciseRoutineScalarWhereWithAggregatesInput = {
    AND?: exerciseRoutineScalarWhereWithAggregatesInput | exerciseRoutineScalarWhereWithAggregatesInput[]
    OR?: exerciseRoutineScalarWhereWithAggregatesInput[]
    NOT?: exerciseRoutineScalarWhereWithAggregatesInput | exerciseRoutineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"exerciseRoutine"> | number
    routineId?: IntWithAggregatesFilter<"exerciseRoutine"> | number
    exerciseId?: IntWithAggregatesFilter<"exerciseRoutine"> | number
    series?: IntWithAggregatesFilter<"exerciseRoutine"> | number
    repetitions?: IntWithAggregatesFilter<"exerciseRoutine"> | number
  }

  export type userCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Rol
    progress?: progressCreateNestedManyWithoutUserInput
    routine?: routineCreateNestedManyWithoutUserInput
    favorites?: favoriteCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Rol
    progress?: progressUncheckedCreateNestedManyWithoutUserInput
    routine?: routineUncheckedCreateNestedManyWithoutUserInput
    favorites?: favoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    progress?: progressUpdateManyWithoutUserNestedInput
    routine?: routineUpdateManyWithoutUserNestedInput
    favorites?: favoriteUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    progress?: progressUncheckedUpdateManyWithoutUserNestedInput
    routine?: routineUncheckedUpdateManyWithoutUserNestedInput
    favorites?: favoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Rol
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
  }

  export type progressCreateInput = {
    date?: Date | string
    weightUsed: number
    repetitions: number
    user: userCreateNestedOneWithoutProgressInput
    exercise: exerciseCreateNestedOneWithoutProgressInput
  }

  export type progressUncheckedCreateInput = {
    id?: number
    userId: string
    exerciseId: number
    date?: Date | string
    weightUsed: number
    repetitions: number
  }

  export type progressUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightUsed?: FloatFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutProgressNestedInput
    exercise?: exerciseUpdateOneRequiredWithoutProgressNestedInput
  }

  export type progressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    exerciseId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightUsed?: FloatFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
  }

  export type progressCreateManyInput = {
    id?: number
    userId: string
    exerciseId: number
    date?: Date | string
    weightUsed: number
    repetitions: number
  }

  export type progressUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightUsed?: FloatFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
  }

  export type progressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    exerciseId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightUsed?: FloatFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
  }

  export type routineCreateInput = {
    name: string
    createdAt?: Date | string | null
    description: string
    duration: number
    totalExercise: number
    user: userCreateNestedOneWithoutRoutineInput
    exerciseRoutine?: exerciseRoutineCreateNestedManyWithoutRoutineInput
  }

  export type routineUncheckedCreateInput = {
    id?: number
    userId: string
    name: string
    createdAt?: Date | string | null
    description: string
    duration: number
    totalExercise: number
    exerciseRoutine?: exerciseRoutineUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type routineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalExercise?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutRoutineNestedInput
    exerciseRoutine?: exerciseRoutineUpdateManyWithoutRoutineNestedInput
  }

  export type routineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalExercise?: IntFieldUpdateOperationsInput | number
    exerciseRoutine?: exerciseRoutineUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type routineCreateManyInput = {
    id?: number
    userId: string
    name: string
    createdAt?: Date | string | null
    description: string
    duration: number
    totalExercise: number
  }

  export type routineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalExercise?: IntFieldUpdateOperationsInput | number
  }

  export type routineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalExercise?: IntFieldUpdateOperationsInput | number
  }

  export type favoriteCreateInput = {
    user: userCreateNestedOneWithoutFavoritesInput
    exercise: exerciseCreateNestedOneWithoutFavoriteInput
  }

  export type favoriteUncheckedCreateInput = {
    id?: number
    userId: string
    exerciseId: number
  }

  export type favoriteUpdateInput = {
    user?: userUpdateOneRequiredWithoutFavoritesNestedInput
    exercise?: exerciseUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type favoriteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    exerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type favoriteCreateManyInput = {
    id?: number
    userId: string
    exerciseId: number
  }

  export type favoriteUpdateManyMutationInput = {

  }

  export type favoriteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    exerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type exerciseCreateInput = {
    name: string
    muscle: string
    videoImgUrl: string
    description: string
    executionSteps: string
    tips: string
    progress?: progressCreateNestedManyWithoutExerciseInput
    favorite?: favoriteCreateNestedManyWithoutExerciseInput
    exerciseRoutine?: exerciseRoutineCreateNestedManyWithoutExerciseInput
  }

  export type exerciseUncheckedCreateInput = {
    id?: number
    name: string
    muscle: string
    videoImgUrl: string
    description: string
    executionSteps: string
    tips: string
    progress?: progressUncheckedCreateNestedManyWithoutExerciseInput
    favorite?: favoriteUncheckedCreateNestedManyWithoutExerciseInput
    exerciseRoutine?: exerciseRoutineUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type exerciseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    videoImgUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    executionSteps?: StringFieldUpdateOperationsInput | string
    tips?: StringFieldUpdateOperationsInput | string
    progress?: progressUpdateManyWithoutExerciseNestedInput
    favorite?: favoriteUpdateManyWithoutExerciseNestedInput
    exerciseRoutine?: exerciseRoutineUpdateManyWithoutExerciseNestedInput
  }

  export type exerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    videoImgUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    executionSteps?: StringFieldUpdateOperationsInput | string
    tips?: StringFieldUpdateOperationsInput | string
    progress?: progressUncheckedUpdateManyWithoutExerciseNestedInput
    favorite?: favoriteUncheckedUpdateManyWithoutExerciseNestedInput
    exerciseRoutine?: exerciseRoutineUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type exerciseCreateManyInput = {
    id?: number
    name: string
    muscle: string
    videoImgUrl: string
    description: string
    executionSteps: string
    tips: string
  }

  export type exerciseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    videoImgUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    executionSteps?: StringFieldUpdateOperationsInput | string
    tips?: StringFieldUpdateOperationsInput | string
  }

  export type exerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    videoImgUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    executionSteps?: StringFieldUpdateOperationsInput | string
    tips?: StringFieldUpdateOperationsInput | string
  }

  export type exerciseRoutineCreateInput = {
    series: number
    repetitions: number
    routine: routineCreateNestedOneWithoutExerciseRoutineInput
    exercise: exerciseCreateNestedOneWithoutExerciseRoutineInput
  }

  export type exerciseRoutineUncheckedCreateInput = {
    id?: number
    routineId: number
    exerciseId: number
    series: number
    repetitions: number
  }

  export type exerciseRoutineUpdateInput = {
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    routine?: routineUpdateOneRequiredWithoutExerciseRoutineNestedInput
    exercise?: exerciseUpdateOneRequiredWithoutExerciseRoutineNestedInput
  }

  export type exerciseRoutineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    routineId?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
  }

  export type exerciseRoutineCreateManyInput = {
    id?: number
    routineId: number
    exerciseId: number
    series: number
    repetitions: number
  }

  export type exerciseRoutineUpdateManyMutationInput = {
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
  }

  export type exerciseRoutineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    routineId?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
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

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type ProgressListRelationFilter = {
    every?: progressWhereInput
    some?: progressWhereInput
    none?: progressWhereInput
  }

  export type RoutineListRelationFilter = {
    every?: routineWhereInput
    some?: routineWhereInput
    none?: routineWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: favoriteWhereInput
    some?: favoriteWhereInput
    none?: favoriteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type progressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type routineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type favoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
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

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type ExerciseScalarRelationFilter = {
    is?: exerciseWhereInput
    isNot?: exerciseWhereInput
  }

  export type progressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
    date?: SortOrder
    weightUsed?: SortOrder
    repetitions?: SortOrder
  }

  export type progressAvgOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    weightUsed?: SortOrder
    repetitions?: SortOrder
  }

  export type progressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
    date?: SortOrder
    weightUsed?: SortOrder
    repetitions?: SortOrder
  }

  export type progressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
    date?: SortOrder
    weightUsed?: SortOrder
    repetitions?: SortOrder
  }

  export type progressSumOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    weightUsed?: SortOrder
    repetitions?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ExerciseRoutineListRelationFilter = {
    every?: exerciseRoutineWhereInput
    some?: exerciseRoutineWhereInput
    none?: exerciseRoutineWhereInput
  }

  export type exerciseRoutineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type routineCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    totalExercise?: SortOrder
  }

  export type routineAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    totalExercise?: SortOrder
  }

  export type routineMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    totalExercise?: SortOrder
  }

  export type routineMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    totalExercise?: SortOrder
  }

  export type routineSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    totalExercise?: SortOrder
  }

  export type favoriteUserIdExerciseIdCompoundUniqueInput = {
    userId: string
    exerciseId: number
  }

  export type favoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
  }

  export type favoriteAvgOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
  }

  export type favoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
  }

  export type favoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
  }

  export type favoriteSumOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
  }

  export type exerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscle?: SortOrder
    videoImgUrl?: SortOrder
    description?: SortOrder
    executionSteps?: SortOrder
    tips?: SortOrder
  }

  export type exerciseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type exerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscle?: SortOrder
    videoImgUrl?: SortOrder
    description?: SortOrder
    executionSteps?: SortOrder
    tips?: SortOrder
  }

  export type exerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscle?: SortOrder
    videoImgUrl?: SortOrder
    description?: SortOrder
    executionSteps?: SortOrder
    tips?: SortOrder
  }

  export type exerciseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoutineScalarRelationFilter = {
    is?: routineWhereInput
    isNot?: routineWhereInput
  }

  export type exerciseRoutineCountOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    series?: SortOrder
    repetitions?: SortOrder
  }

  export type exerciseRoutineAvgOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    series?: SortOrder
    repetitions?: SortOrder
  }

  export type exerciseRoutineMaxOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    series?: SortOrder
    repetitions?: SortOrder
  }

  export type exerciseRoutineMinOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    series?: SortOrder
    repetitions?: SortOrder
  }

  export type exerciseRoutineSumOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    series?: SortOrder
    repetitions?: SortOrder
  }

  export type progressCreateNestedManyWithoutUserInput = {
    create?: XOR<progressCreateWithoutUserInput, progressUncheckedCreateWithoutUserInput> | progressCreateWithoutUserInput[] | progressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: progressCreateOrConnectWithoutUserInput | progressCreateOrConnectWithoutUserInput[]
    createMany?: progressCreateManyUserInputEnvelope
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[]
  }

  export type routineCreateNestedManyWithoutUserInput = {
    create?: XOR<routineCreateWithoutUserInput, routineUncheckedCreateWithoutUserInput> | routineCreateWithoutUserInput[] | routineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: routineCreateOrConnectWithoutUserInput | routineCreateOrConnectWithoutUserInput[]
    createMany?: routineCreateManyUserInputEnvelope
    connect?: routineWhereUniqueInput | routineWhereUniqueInput[]
  }

  export type favoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput> | favoriteCreateWithoutUserInput[] | favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[]
    createMany?: favoriteCreateManyUserInputEnvelope
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
  }

  export type progressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<progressCreateWithoutUserInput, progressUncheckedCreateWithoutUserInput> | progressCreateWithoutUserInput[] | progressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: progressCreateOrConnectWithoutUserInput | progressCreateOrConnectWithoutUserInput[]
    createMany?: progressCreateManyUserInputEnvelope
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[]
  }

  export type routineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<routineCreateWithoutUserInput, routineUncheckedCreateWithoutUserInput> | routineCreateWithoutUserInput[] | routineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: routineCreateOrConnectWithoutUserInput | routineCreateOrConnectWithoutUserInput[]
    createMany?: routineCreateManyUserInputEnvelope
    connect?: routineWhereUniqueInput | routineWhereUniqueInput[]
  }

  export type favoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput> | favoriteCreateWithoutUserInput[] | favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[]
    createMany?: favoriteCreateManyUserInputEnvelope
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type progressUpdateManyWithoutUserNestedInput = {
    create?: XOR<progressCreateWithoutUserInput, progressUncheckedCreateWithoutUserInput> | progressCreateWithoutUserInput[] | progressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: progressCreateOrConnectWithoutUserInput | progressCreateOrConnectWithoutUserInput[]
    upsert?: progressUpsertWithWhereUniqueWithoutUserInput | progressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: progressCreateManyUserInputEnvelope
    set?: progressWhereUniqueInput | progressWhereUniqueInput[]
    disconnect?: progressWhereUniqueInput | progressWhereUniqueInput[]
    delete?: progressWhereUniqueInput | progressWhereUniqueInput[]
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[]
    update?: progressUpdateWithWhereUniqueWithoutUserInput | progressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: progressUpdateManyWithWhereWithoutUserInput | progressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: progressScalarWhereInput | progressScalarWhereInput[]
  }

  export type routineUpdateManyWithoutUserNestedInput = {
    create?: XOR<routineCreateWithoutUserInput, routineUncheckedCreateWithoutUserInput> | routineCreateWithoutUserInput[] | routineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: routineCreateOrConnectWithoutUserInput | routineCreateOrConnectWithoutUserInput[]
    upsert?: routineUpsertWithWhereUniqueWithoutUserInput | routineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: routineCreateManyUserInputEnvelope
    set?: routineWhereUniqueInput | routineWhereUniqueInput[]
    disconnect?: routineWhereUniqueInput | routineWhereUniqueInput[]
    delete?: routineWhereUniqueInput | routineWhereUniqueInput[]
    connect?: routineWhereUniqueInput | routineWhereUniqueInput[]
    update?: routineUpdateWithWhereUniqueWithoutUserInput | routineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: routineUpdateManyWithWhereWithoutUserInput | routineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: routineScalarWhereInput | routineScalarWhereInput[]
  }

  export type favoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput> | favoriteCreateWithoutUserInput[] | favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[]
    upsert?: favoriteUpsertWithWhereUniqueWithoutUserInput | favoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: favoriteCreateManyUserInputEnvelope
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    update?: favoriteUpdateWithWhereUniqueWithoutUserInput | favoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: favoriteUpdateManyWithWhereWithoutUserInput | favoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
  }

  export type progressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<progressCreateWithoutUserInput, progressUncheckedCreateWithoutUserInput> | progressCreateWithoutUserInput[] | progressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: progressCreateOrConnectWithoutUserInput | progressCreateOrConnectWithoutUserInput[]
    upsert?: progressUpsertWithWhereUniqueWithoutUserInput | progressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: progressCreateManyUserInputEnvelope
    set?: progressWhereUniqueInput | progressWhereUniqueInput[]
    disconnect?: progressWhereUniqueInput | progressWhereUniqueInput[]
    delete?: progressWhereUniqueInput | progressWhereUniqueInput[]
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[]
    update?: progressUpdateWithWhereUniqueWithoutUserInput | progressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: progressUpdateManyWithWhereWithoutUserInput | progressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: progressScalarWhereInput | progressScalarWhereInput[]
  }

  export type routineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<routineCreateWithoutUserInput, routineUncheckedCreateWithoutUserInput> | routineCreateWithoutUserInput[] | routineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: routineCreateOrConnectWithoutUserInput | routineCreateOrConnectWithoutUserInput[]
    upsert?: routineUpsertWithWhereUniqueWithoutUserInput | routineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: routineCreateManyUserInputEnvelope
    set?: routineWhereUniqueInput | routineWhereUniqueInput[]
    disconnect?: routineWhereUniqueInput | routineWhereUniqueInput[]
    delete?: routineWhereUniqueInput | routineWhereUniqueInput[]
    connect?: routineWhereUniqueInput | routineWhereUniqueInput[]
    update?: routineUpdateWithWhereUniqueWithoutUserInput | routineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: routineUpdateManyWithWhereWithoutUserInput | routineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: routineScalarWhereInput | routineScalarWhereInput[]
  }

  export type favoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput> | favoriteCreateWithoutUserInput[] | favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[]
    upsert?: favoriteUpsertWithWhereUniqueWithoutUserInput | favoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: favoriteCreateManyUserInputEnvelope
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    update?: favoriteUpdateWithWhereUniqueWithoutUserInput | favoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: favoriteUpdateManyWithWhereWithoutUserInput | favoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutProgressInput = {
    create?: XOR<userCreateWithoutProgressInput, userUncheckedCreateWithoutProgressInput>
    connectOrCreate?: userCreateOrConnectWithoutProgressInput
    connect?: userWhereUniqueInput
  }

  export type exerciseCreateNestedOneWithoutProgressInput = {
    create?: XOR<exerciseCreateWithoutProgressInput, exerciseUncheckedCreateWithoutProgressInput>
    connectOrCreate?: exerciseCreateOrConnectWithoutProgressInput
    connect?: exerciseWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<userCreateWithoutProgressInput, userUncheckedCreateWithoutProgressInput>
    connectOrCreate?: userCreateOrConnectWithoutProgressInput
    upsert?: userUpsertWithoutProgressInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutProgressInput, userUpdateWithoutProgressInput>, userUncheckedUpdateWithoutProgressInput>
  }

  export type exerciseUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<exerciseCreateWithoutProgressInput, exerciseUncheckedCreateWithoutProgressInput>
    connectOrCreate?: exerciseCreateOrConnectWithoutProgressInput
    upsert?: exerciseUpsertWithoutProgressInput
    connect?: exerciseWhereUniqueInput
    update?: XOR<XOR<exerciseUpdateToOneWithWhereWithoutProgressInput, exerciseUpdateWithoutProgressInput>, exerciseUncheckedUpdateWithoutProgressInput>
  }

  export type userCreateNestedOneWithoutRoutineInput = {
    create?: XOR<userCreateWithoutRoutineInput, userUncheckedCreateWithoutRoutineInput>
    connectOrCreate?: userCreateOrConnectWithoutRoutineInput
    connect?: userWhereUniqueInput
  }

  export type exerciseRoutineCreateNestedManyWithoutRoutineInput = {
    create?: XOR<exerciseRoutineCreateWithoutRoutineInput, exerciseRoutineUncheckedCreateWithoutRoutineInput> | exerciseRoutineCreateWithoutRoutineInput[] | exerciseRoutineUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: exerciseRoutineCreateOrConnectWithoutRoutineInput | exerciseRoutineCreateOrConnectWithoutRoutineInput[]
    createMany?: exerciseRoutineCreateManyRoutineInputEnvelope
    connect?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
  }

  export type exerciseRoutineUncheckedCreateNestedManyWithoutRoutineInput = {
    create?: XOR<exerciseRoutineCreateWithoutRoutineInput, exerciseRoutineUncheckedCreateWithoutRoutineInput> | exerciseRoutineCreateWithoutRoutineInput[] | exerciseRoutineUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: exerciseRoutineCreateOrConnectWithoutRoutineInput | exerciseRoutineCreateOrConnectWithoutRoutineInput[]
    createMany?: exerciseRoutineCreateManyRoutineInputEnvelope
    connect?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutRoutineNestedInput = {
    create?: XOR<userCreateWithoutRoutineInput, userUncheckedCreateWithoutRoutineInput>
    connectOrCreate?: userCreateOrConnectWithoutRoutineInput
    upsert?: userUpsertWithoutRoutineInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRoutineInput, userUpdateWithoutRoutineInput>, userUncheckedUpdateWithoutRoutineInput>
  }

  export type exerciseRoutineUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<exerciseRoutineCreateWithoutRoutineInput, exerciseRoutineUncheckedCreateWithoutRoutineInput> | exerciseRoutineCreateWithoutRoutineInput[] | exerciseRoutineUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: exerciseRoutineCreateOrConnectWithoutRoutineInput | exerciseRoutineCreateOrConnectWithoutRoutineInput[]
    upsert?: exerciseRoutineUpsertWithWhereUniqueWithoutRoutineInput | exerciseRoutineUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: exerciseRoutineCreateManyRoutineInputEnvelope
    set?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    disconnect?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    delete?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    connect?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    update?: exerciseRoutineUpdateWithWhereUniqueWithoutRoutineInput | exerciseRoutineUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: exerciseRoutineUpdateManyWithWhereWithoutRoutineInput | exerciseRoutineUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: exerciseRoutineScalarWhereInput | exerciseRoutineScalarWhereInput[]
  }

  export type exerciseRoutineUncheckedUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<exerciseRoutineCreateWithoutRoutineInput, exerciseRoutineUncheckedCreateWithoutRoutineInput> | exerciseRoutineCreateWithoutRoutineInput[] | exerciseRoutineUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: exerciseRoutineCreateOrConnectWithoutRoutineInput | exerciseRoutineCreateOrConnectWithoutRoutineInput[]
    upsert?: exerciseRoutineUpsertWithWhereUniqueWithoutRoutineInput | exerciseRoutineUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: exerciseRoutineCreateManyRoutineInputEnvelope
    set?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    disconnect?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    delete?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    connect?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    update?: exerciseRoutineUpdateWithWhereUniqueWithoutRoutineInput | exerciseRoutineUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: exerciseRoutineUpdateManyWithWhereWithoutRoutineInput | exerciseRoutineUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: exerciseRoutineScalarWhereInput | exerciseRoutineScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<userCreateWithoutFavoritesInput, userUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: userCreateOrConnectWithoutFavoritesInput
    connect?: userWhereUniqueInput
  }

  export type exerciseCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<exerciseCreateWithoutFavoriteInput, exerciseUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: exerciseCreateOrConnectWithoutFavoriteInput
    connect?: exerciseWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<userCreateWithoutFavoritesInput, userUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: userCreateOrConnectWithoutFavoritesInput
    upsert?: userUpsertWithoutFavoritesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFavoritesInput, userUpdateWithoutFavoritesInput>, userUncheckedUpdateWithoutFavoritesInput>
  }

  export type exerciseUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<exerciseCreateWithoutFavoriteInput, exerciseUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: exerciseCreateOrConnectWithoutFavoriteInput
    upsert?: exerciseUpsertWithoutFavoriteInput
    connect?: exerciseWhereUniqueInput
    update?: XOR<XOR<exerciseUpdateToOneWithWhereWithoutFavoriteInput, exerciseUpdateWithoutFavoriteInput>, exerciseUncheckedUpdateWithoutFavoriteInput>
  }

  export type progressCreateNestedManyWithoutExerciseInput = {
    create?: XOR<progressCreateWithoutExerciseInput, progressUncheckedCreateWithoutExerciseInput> | progressCreateWithoutExerciseInput[] | progressUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: progressCreateOrConnectWithoutExerciseInput | progressCreateOrConnectWithoutExerciseInput[]
    createMany?: progressCreateManyExerciseInputEnvelope
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[]
  }

  export type favoriteCreateNestedManyWithoutExerciseInput = {
    create?: XOR<favoriteCreateWithoutExerciseInput, favoriteUncheckedCreateWithoutExerciseInput> | favoriteCreateWithoutExerciseInput[] | favoriteUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutExerciseInput | favoriteCreateOrConnectWithoutExerciseInput[]
    createMany?: favoriteCreateManyExerciseInputEnvelope
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
  }

  export type exerciseRoutineCreateNestedManyWithoutExerciseInput = {
    create?: XOR<exerciseRoutineCreateWithoutExerciseInput, exerciseRoutineUncheckedCreateWithoutExerciseInput> | exerciseRoutineCreateWithoutExerciseInput[] | exerciseRoutineUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: exerciseRoutineCreateOrConnectWithoutExerciseInput | exerciseRoutineCreateOrConnectWithoutExerciseInput[]
    createMany?: exerciseRoutineCreateManyExerciseInputEnvelope
    connect?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
  }

  export type progressUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<progressCreateWithoutExerciseInput, progressUncheckedCreateWithoutExerciseInput> | progressCreateWithoutExerciseInput[] | progressUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: progressCreateOrConnectWithoutExerciseInput | progressCreateOrConnectWithoutExerciseInput[]
    createMany?: progressCreateManyExerciseInputEnvelope
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[]
  }

  export type favoriteUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<favoriteCreateWithoutExerciseInput, favoriteUncheckedCreateWithoutExerciseInput> | favoriteCreateWithoutExerciseInput[] | favoriteUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutExerciseInput | favoriteCreateOrConnectWithoutExerciseInput[]
    createMany?: favoriteCreateManyExerciseInputEnvelope
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
  }

  export type exerciseRoutineUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<exerciseRoutineCreateWithoutExerciseInput, exerciseRoutineUncheckedCreateWithoutExerciseInput> | exerciseRoutineCreateWithoutExerciseInput[] | exerciseRoutineUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: exerciseRoutineCreateOrConnectWithoutExerciseInput | exerciseRoutineCreateOrConnectWithoutExerciseInput[]
    createMany?: exerciseRoutineCreateManyExerciseInputEnvelope
    connect?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
  }

  export type progressUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<progressCreateWithoutExerciseInput, progressUncheckedCreateWithoutExerciseInput> | progressCreateWithoutExerciseInput[] | progressUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: progressCreateOrConnectWithoutExerciseInput | progressCreateOrConnectWithoutExerciseInput[]
    upsert?: progressUpsertWithWhereUniqueWithoutExerciseInput | progressUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: progressCreateManyExerciseInputEnvelope
    set?: progressWhereUniqueInput | progressWhereUniqueInput[]
    disconnect?: progressWhereUniqueInput | progressWhereUniqueInput[]
    delete?: progressWhereUniqueInput | progressWhereUniqueInput[]
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[]
    update?: progressUpdateWithWhereUniqueWithoutExerciseInput | progressUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: progressUpdateManyWithWhereWithoutExerciseInput | progressUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: progressScalarWhereInput | progressScalarWhereInput[]
  }

  export type favoriteUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<favoriteCreateWithoutExerciseInput, favoriteUncheckedCreateWithoutExerciseInput> | favoriteCreateWithoutExerciseInput[] | favoriteUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutExerciseInput | favoriteCreateOrConnectWithoutExerciseInput[]
    upsert?: favoriteUpsertWithWhereUniqueWithoutExerciseInput | favoriteUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: favoriteCreateManyExerciseInputEnvelope
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    update?: favoriteUpdateWithWhereUniqueWithoutExerciseInput | favoriteUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: favoriteUpdateManyWithWhereWithoutExerciseInput | favoriteUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
  }

  export type exerciseRoutineUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<exerciseRoutineCreateWithoutExerciseInput, exerciseRoutineUncheckedCreateWithoutExerciseInput> | exerciseRoutineCreateWithoutExerciseInput[] | exerciseRoutineUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: exerciseRoutineCreateOrConnectWithoutExerciseInput | exerciseRoutineCreateOrConnectWithoutExerciseInput[]
    upsert?: exerciseRoutineUpsertWithWhereUniqueWithoutExerciseInput | exerciseRoutineUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: exerciseRoutineCreateManyExerciseInputEnvelope
    set?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    disconnect?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    delete?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    connect?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    update?: exerciseRoutineUpdateWithWhereUniqueWithoutExerciseInput | exerciseRoutineUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: exerciseRoutineUpdateManyWithWhereWithoutExerciseInput | exerciseRoutineUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: exerciseRoutineScalarWhereInput | exerciseRoutineScalarWhereInput[]
  }

  export type progressUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<progressCreateWithoutExerciseInput, progressUncheckedCreateWithoutExerciseInput> | progressCreateWithoutExerciseInput[] | progressUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: progressCreateOrConnectWithoutExerciseInput | progressCreateOrConnectWithoutExerciseInput[]
    upsert?: progressUpsertWithWhereUniqueWithoutExerciseInput | progressUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: progressCreateManyExerciseInputEnvelope
    set?: progressWhereUniqueInput | progressWhereUniqueInput[]
    disconnect?: progressWhereUniqueInput | progressWhereUniqueInput[]
    delete?: progressWhereUniqueInput | progressWhereUniqueInput[]
    connect?: progressWhereUniqueInput | progressWhereUniqueInput[]
    update?: progressUpdateWithWhereUniqueWithoutExerciseInput | progressUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: progressUpdateManyWithWhereWithoutExerciseInput | progressUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: progressScalarWhereInput | progressScalarWhereInput[]
  }

  export type favoriteUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<favoriteCreateWithoutExerciseInput, favoriteUncheckedCreateWithoutExerciseInput> | favoriteCreateWithoutExerciseInput[] | favoriteUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutExerciseInput | favoriteCreateOrConnectWithoutExerciseInput[]
    upsert?: favoriteUpsertWithWhereUniqueWithoutExerciseInput | favoriteUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: favoriteCreateManyExerciseInputEnvelope
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    update?: favoriteUpdateWithWhereUniqueWithoutExerciseInput | favoriteUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: favoriteUpdateManyWithWhereWithoutExerciseInput | favoriteUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
  }

  export type exerciseRoutineUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<exerciseRoutineCreateWithoutExerciseInput, exerciseRoutineUncheckedCreateWithoutExerciseInput> | exerciseRoutineCreateWithoutExerciseInput[] | exerciseRoutineUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: exerciseRoutineCreateOrConnectWithoutExerciseInput | exerciseRoutineCreateOrConnectWithoutExerciseInput[]
    upsert?: exerciseRoutineUpsertWithWhereUniqueWithoutExerciseInput | exerciseRoutineUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: exerciseRoutineCreateManyExerciseInputEnvelope
    set?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    disconnect?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    delete?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    connect?: exerciseRoutineWhereUniqueInput | exerciseRoutineWhereUniqueInput[]
    update?: exerciseRoutineUpdateWithWhereUniqueWithoutExerciseInput | exerciseRoutineUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: exerciseRoutineUpdateManyWithWhereWithoutExerciseInput | exerciseRoutineUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: exerciseRoutineScalarWhereInput | exerciseRoutineScalarWhereInput[]
  }

  export type routineCreateNestedOneWithoutExerciseRoutineInput = {
    create?: XOR<routineCreateWithoutExerciseRoutineInput, routineUncheckedCreateWithoutExerciseRoutineInput>
    connectOrCreate?: routineCreateOrConnectWithoutExerciseRoutineInput
    connect?: routineWhereUniqueInput
  }

  export type exerciseCreateNestedOneWithoutExerciseRoutineInput = {
    create?: XOR<exerciseCreateWithoutExerciseRoutineInput, exerciseUncheckedCreateWithoutExerciseRoutineInput>
    connectOrCreate?: exerciseCreateOrConnectWithoutExerciseRoutineInput
    connect?: exerciseWhereUniqueInput
  }

  export type routineUpdateOneRequiredWithoutExerciseRoutineNestedInput = {
    create?: XOR<routineCreateWithoutExerciseRoutineInput, routineUncheckedCreateWithoutExerciseRoutineInput>
    connectOrCreate?: routineCreateOrConnectWithoutExerciseRoutineInput
    upsert?: routineUpsertWithoutExerciseRoutineInput
    connect?: routineWhereUniqueInput
    update?: XOR<XOR<routineUpdateToOneWithWhereWithoutExerciseRoutineInput, routineUpdateWithoutExerciseRoutineInput>, routineUncheckedUpdateWithoutExerciseRoutineInput>
  }

  export type exerciseUpdateOneRequiredWithoutExerciseRoutineNestedInput = {
    create?: XOR<exerciseCreateWithoutExerciseRoutineInput, exerciseUncheckedCreateWithoutExerciseRoutineInput>
    connectOrCreate?: exerciseCreateOrConnectWithoutExerciseRoutineInput
    upsert?: exerciseUpsertWithoutExerciseRoutineInput
    connect?: exerciseWhereUniqueInput
    update?: XOR<XOR<exerciseUpdateToOneWithWhereWithoutExerciseRoutineInput, exerciseUpdateWithoutExerciseRoutineInput>, exerciseUncheckedUpdateWithoutExerciseRoutineInput>
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

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type progressCreateWithoutUserInput = {
    date?: Date | string
    weightUsed: number
    repetitions: number
    exercise: exerciseCreateNestedOneWithoutProgressInput
  }

  export type progressUncheckedCreateWithoutUserInput = {
    id?: number
    exerciseId: number
    date?: Date | string
    weightUsed: number
    repetitions: number
  }

  export type progressCreateOrConnectWithoutUserInput = {
    where: progressWhereUniqueInput
    create: XOR<progressCreateWithoutUserInput, progressUncheckedCreateWithoutUserInput>
  }

  export type progressCreateManyUserInputEnvelope = {
    data: progressCreateManyUserInput | progressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type routineCreateWithoutUserInput = {
    name: string
    createdAt?: Date | string | null
    description: string
    duration: number
    totalExercise: number
    exerciseRoutine?: exerciseRoutineCreateNestedManyWithoutRoutineInput
  }

  export type routineUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    createdAt?: Date | string | null
    description: string
    duration: number
    totalExercise: number
    exerciseRoutine?: exerciseRoutineUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type routineCreateOrConnectWithoutUserInput = {
    where: routineWhereUniqueInput
    create: XOR<routineCreateWithoutUserInput, routineUncheckedCreateWithoutUserInput>
  }

  export type routineCreateManyUserInputEnvelope = {
    data: routineCreateManyUserInput | routineCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type favoriteCreateWithoutUserInput = {
    exercise: exerciseCreateNestedOneWithoutFavoriteInput
  }

  export type favoriteUncheckedCreateWithoutUserInput = {
    id?: number
    exerciseId: number
  }

  export type favoriteCreateOrConnectWithoutUserInput = {
    where: favoriteWhereUniqueInput
    create: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput>
  }

  export type favoriteCreateManyUserInputEnvelope = {
    data: favoriteCreateManyUserInput | favoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type progressUpsertWithWhereUniqueWithoutUserInput = {
    where: progressWhereUniqueInput
    update: XOR<progressUpdateWithoutUserInput, progressUncheckedUpdateWithoutUserInput>
    create: XOR<progressCreateWithoutUserInput, progressUncheckedCreateWithoutUserInput>
  }

  export type progressUpdateWithWhereUniqueWithoutUserInput = {
    where: progressWhereUniqueInput
    data: XOR<progressUpdateWithoutUserInput, progressUncheckedUpdateWithoutUserInput>
  }

  export type progressUpdateManyWithWhereWithoutUserInput = {
    where: progressScalarWhereInput
    data: XOR<progressUpdateManyMutationInput, progressUncheckedUpdateManyWithoutUserInput>
  }

  export type progressScalarWhereInput = {
    AND?: progressScalarWhereInput | progressScalarWhereInput[]
    OR?: progressScalarWhereInput[]
    NOT?: progressScalarWhereInput | progressScalarWhereInput[]
    id?: IntFilter<"progress"> | number
    userId?: StringFilter<"progress"> | string
    exerciseId?: IntFilter<"progress"> | number
    date?: DateTimeFilter<"progress"> | Date | string
    weightUsed?: FloatFilter<"progress"> | number
    repetitions?: IntFilter<"progress"> | number
  }

  export type routineUpsertWithWhereUniqueWithoutUserInput = {
    where: routineWhereUniqueInput
    update: XOR<routineUpdateWithoutUserInput, routineUncheckedUpdateWithoutUserInput>
    create: XOR<routineCreateWithoutUserInput, routineUncheckedCreateWithoutUserInput>
  }

  export type routineUpdateWithWhereUniqueWithoutUserInput = {
    where: routineWhereUniqueInput
    data: XOR<routineUpdateWithoutUserInput, routineUncheckedUpdateWithoutUserInput>
  }

  export type routineUpdateManyWithWhereWithoutUserInput = {
    where: routineScalarWhereInput
    data: XOR<routineUpdateManyMutationInput, routineUncheckedUpdateManyWithoutUserInput>
  }

  export type routineScalarWhereInput = {
    AND?: routineScalarWhereInput | routineScalarWhereInput[]
    OR?: routineScalarWhereInput[]
    NOT?: routineScalarWhereInput | routineScalarWhereInput[]
    id?: IntFilter<"routine"> | number
    userId?: StringFilter<"routine"> | string
    name?: StringFilter<"routine"> | string
    createdAt?: DateTimeNullableFilter<"routine"> | Date | string | null
    description?: StringFilter<"routine"> | string
    duration?: IntFilter<"routine"> | number
    totalExercise?: IntFilter<"routine"> | number
  }

  export type favoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: favoriteWhereUniqueInput
    update: XOR<favoriteUpdateWithoutUserInput, favoriteUncheckedUpdateWithoutUserInput>
    create: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput>
  }

  export type favoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: favoriteWhereUniqueInput
    data: XOR<favoriteUpdateWithoutUserInput, favoriteUncheckedUpdateWithoutUserInput>
  }

  export type favoriteUpdateManyWithWhereWithoutUserInput = {
    where: favoriteScalarWhereInput
    data: XOR<favoriteUpdateManyMutationInput, favoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type favoriteScalarWhereInput = {
    AND?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
    OR?: favoriteScalarWhereInput[]
    NOT?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
    id?: IntFilter<"favorite"> | number
    userId?: StringFilter<"favorite"> | string
    exerciseId?: IntFilter<"favorite"> | number
  }

  export type userCreateWithoutProgressInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Rol
    routine?: routineCreateNestedManyWithoutUserInput
    favorites?: favoriteCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutProgressInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Rol
    routine?: routineUncheckedCreateNestedManyWithoutUserInput
    favorites?: favoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutProgressInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutProgressInput, userUncheckedCreateWithoutProgressInput>
  }

  export type exerciseCreateWithoutProgressInput = {
    name: string
    muscle: string
    videoImgUrl: string
    description: string
    executionSteps: string
    tips: string
    favorite?: favoriteCreateNestedManyWithoutExerciseInput
    exerciseRoutine?: exerciseRoutineCreateNestedManyWithoutExerciseInput
  }

  export type exerciseUncheckedCreateWithoutProgressInput = {
    id?: number
    name: string
    muscle: string
    videoImgUrl: string
    description: string
    executionSteps: string
    tips: string
    favorite?: favoriteUncheckedCreateNestedManyWithoutExerciseInput
    exerciseRoutine?: exerciseRoutineUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type exerciseCreateOrConnectWithoutProgressInput = {
    where: exerciseWhereUniqueInput
    create: XOR<exerciseCreateWithoutProgressInput, exerciseUncheckedCreateWithoutProgressInput>
  }

  export type userUpsertWithoutProgressInput = {
    update: XOR<userUpdateWithoutProgressInput, userUncheckedUpdateWithoutProgressInput>
    create: XOR<userCreateWithoutProgressInput, userUncheckedCreateWithoutProgressInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutProgressInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutProgressInput, userUncheckedUpdateWithoutProgressInput>
  }

  export type userUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    routine?: routineUpdateManyWithoutUserNestedInput
    favorites?: favoriteUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    routine?: routineUncheckedUpdateManyWithoutUserNestedInput
    favorites?: favoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type exerciseUpsertWithoutProgressInput = {
    update: XOR<exerciseUpdateWithoutProgressInput, exerciseUncheckedUpdateWithoutProgressInput>
    create: XOR<exerciseCreateWithoutProgressInput, exerciseUncheckedCreateWithoutProgressInput>
    where?: exerciseWhereInput
  }

  export type exerciseUpdateToOneWithWhereWithoutProgressInput = {
    where?: exerciseWhereInput
    data: XOR<exerciseUpdateWithoutProgressInput, exerciseUncheckedUpdateWithoutProgressInput>
  }

  export type exerciseUpdateWithoutProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    videoImgUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    executionSteps?: StringFieldUpdateOperationsInput | string
    tips?: StringFieldUpdateOperationsInput | string
    favorite?: favoriteUpdateManyWithoutExerciseNestedInput
    exerciseRoutine?: exerciseRoutineUpdateManyWithoutExerciseNestedInput
  }

  export type exerciseUncheckedUpdateWithoutProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    videoImgUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    executionSteps?: StringFieldUpdateOperationsInput | string
    tips?: StringFieldUpdateOperationsInput | string
    favorite?: favoriteUncheckedUpdateManyWithoutExerciseNestedInput
    exerciseRoutine?: exerciseRoutineUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type userCreateWithoutRoutineInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Rol
    progress?: progressCreateNestedManyWithoutUserInput
    favorites?: favoriteCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRoutineInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Rol
    progress?: progressUncheckedCreateNestedManyWithoutUserInput
    favorites?: favoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRoutineInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRoutineInput, userUncheckedCreateWithoutRoutineInput>
  }

  export type exerciseRoutineCreateWithoutRoutineInput = {
    series: number
    repetitions: number
    exercise: exerciseCreateNestedOneWithoutExerciseRoutineInput
  }

  export type exerciseRoutineUncheckedCreateWithoutRoutineInput = {
    id?: number
    exerciseId: number
    series: number
    repetitions: number
  }

  export type exerciseRoutineCreateOrConnectWithoutRoutineInput = {
    where: exerciseRoutineWhereUniqueInput
    create: XOR<exerciseRoutineCreateWithoutRoutineInput, exerciseRoutineUncheckedCreateWithoutRoutineInput>
  }

  export type exerciseRoutineCreateManyRoutineInputEnvelope = {
    data: exerciseRoutineCreateManyRoutineInput | exerciseRoutineCreateManyRoutineInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutRoutineInput = {
    update: XOR<userUpdateWithoutRoutineInput, userUncheckedUpdateWithoutRoutineInput>
    create: XOR<userCreateWithoutRoutineInput, userUncheckedCreateWithoutRoutineInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRoutineInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRoutineInput, userUncheckedUpdateWithoutRoutineInput>
  }

  export type userUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    progress?: progressUpdateManyWithoutUserNestedInput
    favorites?: favoriteUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    progress?: progressUncheckedUpdateManyWithoutUserNestedInput
    favorites?: favoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type exerciseRoutineUpsertWithWhereUniqueWithoutRoutineInput = {
    where: exerciseRoutineWhereUniqueInput
    update: XOR<exerciseRoutineUpdateWithoutRoutineInput, exerciseRoutineUncheckedUpdateWithoutRoutineInput>
    create: XOR<exerciseRoutineCreateWithoutRoutineInput, exerciseRoutineUncheckedCreateWithoutRoutineInput>
  }

  export type exerciseRoutineUpdateWithWhereUniqueWithoutRoutineInput = {
    where: exerciseRoutineWhereUniqueInput
    data: XOR<exerciseRoutineUpdateWithoutRoutineInput, exerciseRoutineUncheckedUpdateWithoutRoutineInput>
  }

  export type exerciseRoutineUpdateManyWithWhereWithoutRoutineInput = {
    where: exerciseRoutineScalarWhereInput
    data: XOR<exerciseRoutineUpdateManyMutationInput, exerciseRoutineUncheckedUpdateManyWithoutRoutineInput>
  }

  export type exerciseRoutineScalarWhereInput = {
    AND?: exerciseRoutineScalarWhereInput | exerciseRoutineScalarWhereInput[]
    OR?: exerciseRoutineScalarWhereInput[]
    NOT?: exerciseRoutineScalarWhereInput | exerciseRoutineScalarWhereInput[]
    id?: IntFilter<"exerciseRoutine"> | number
    routineId?: IntFilter<"exerciseRoutine"> | number
    exerciseId?: IntFilter<"exerciseRoutine"> | number
    series?: IntFilter<"exerciseRoutine"> | number
    repetitions?: IntFilter<"exerciseRoutine"> | number
  }

  export type userCreateWithoutFavoritesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Rol
    progress?: progressCreateNestedManyWithoutUserInput
    routine?: routineCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutFavoritesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    password: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Rol
    progress?: progressUncheckedCreateNestedManyWithoutUserInput
    routine?: routineUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutFavoritesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFavoritesInput, userUncheckedCreateWithoutFavoritesInput>
  }

  export type exerciseCreateWithoutFavoriteInput = {
    name: string
    muscle: string
    videoImgUrl: string
    description: string
    executionSteps: string
    tips: string
    progress?: progressCreateNestedManyWithoutExerciseInput
    exerciseRoutine?: exerciseRoutineCreateNestedManyWithoutExerciseInput
  }

  export type exerciseUncheckedCreateWithoutFavoriteInput = {
    id?: number
    name: string
    muscle: string
    videoImgUrl: string
    description: string
    executionSteps: string
    tips: string
    progress?: progressUncheckedCreateNestedManyWithoutExerciseInput
    exerciseRoutine?: exerciseRoutineUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type exerciseCreateOrConnectWithoutFavoriteInput = {
    where: exerciseWhereUniqueInput
    create: XOR<exerciseCreateWithoutFavoriteInput, exerciseUncheckedCreateWithoutFavoriteInput>
  }

  export type userUpsertWithoutFavoritesInput = {
    update: XOR<userUpdateWithoutFavoritesInput, userUncheckedUpdateWithoutFavoritesInput>
    create: XOR<userCreateWithoutFavoritesInput, userUncheckedCreateWithoutFavoritesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFavoritesInput, userUncheckedUpdateWithoutFavoritesInput>
  }

  export type userUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    progress?: progressUpdateManyWithoutUserNestedInput
    routine?: routineUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    progress?: progressUncheckedUpdateManyWithoutUserNestedInput
    routine?: routineUncheckedUpdateManyWithoutUserNestedInput
  }

  export type exerciseUpsertWithoutFavoriteInput = {
    update: XOR<exerciseUpdateWithoutFavoriteInput, exerciseUncheckedUpdateWithoutFavoriteInput>
    create: XOR<exerciseCreateWithoutFavoriteInput, exerciseUncheckedCreateWithoutFavoriteInput>
    where?: exerciseWhereInput
  }

  export type exerciseUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: exerciseWhereInput
    data: XOR<exerciseUpdateWithoutFavoriteInput, exerciseUncheckedUpdateWithoutFavoriteInput>
  }

  export type exerciseUpdateWithoutFavoriteInput = {
    name?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    videoImgUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    executionSteps?: StringFieldUpdateOperationsInput | string
    tips?: StringFieldUpdateOperationsInput | string
    progress?: progressUpdateManyWithoutExerciseNestedInput
    exerciseRoutine?: exerciseRoutineUpdateManyWithoutExerciseNestedInput
  }

  export type exerciseUncheckedUpdateWithoutFavoriteInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    videoImgUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    executionSteps?: StringFieldUpdateOperationsInput | string
    tips?: StringFieldUpdateOperationsInput | string
    progress?: progressUncheckedUpdateManyWithoutExerciseNestedInput
    exerciseRoutine?: exerciseRoutineUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type progressCreateWithoutExerciseInput = {
    date?: Date | string
    weightUsed: number
    repetitions: number
    user: userCreateNestedOneWithoutProgressInput
  }

  export type progressUncheckedCreateWithoutExerciseInput = {
    id?: number
    userId: string
    date?: Date | string
    weightUsed: number
    repetitions: number
  }

  export type progressCreateOrConnectWithoutExerciseInput = {
    where: progressWhereUniqueInput
    create: XOR<progressCreateWithoutExerciseInput, progressUncheckedCreateWithoutExerciseInput>
  }

  export type progressCreateManyExerciseInputEnvelope = {
    data: progressCreateManyExerciseInput | progressCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type favoriteCreateWithoutExerciseInput = {
    user: userCreateNestedOneWithoutFavoritesInput
  }

  export type favoriteUncheckedCreateWithoutExerciseInput = {
    id?: number
    userId: string
  }

  export type favoriteCreateOrConnectWithoutExerciseInput = {
    where: favoriteWhereUniqueInput
    create: XOR<favoriteCreateWithoutExerciseInput, favoriteUncheckedCreateWithoutExerciseInput>
  }

  export type favoriteCreateManyExerciseInputEnvelope = {
    data: favoriteCreateManyExerciseInput | favoriteCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type exerciseRoutineCreateWithoutExerciseInput = {
    series: number
    repetitions: number
    routine: routineCreateNestedOneWithoutExerciseRoutineInput
  }

  export type exerciseRoutineUncheckedCreateWithoutExerciseInput = {
    id?: number
    routineId: number
    series: number
    repetitions: number
  }

  export type exerciseRoutineCreateOrConnectWithoutExerciseInput = {
    where: exerciseRoutineWhereUniqueInput
    create: XOR<exerciseRoutineCreateWithoutExerciseInput, exerciseRoutineUncheckedCreateWithoutExerciseInput>
  }

  export type exerciseRoutineCreateManyExerciseInputEnvelope = {
    data: exerciseRoutineCreateManyExerciseInput | exerciseRoutineCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type progressUpsertWithWhereUniqueWithoutExerciseInput = {
    where: progressWhereUniqueInput
    update: XOR<progressUpdateWithoutExerciseInput, progressUncheckedUpdateWithoutExerciseInput>
    create: XOR<progressCreateWithoutExerciseInput, progressUncheckedCreateWithoutExerciseInput>
  }

  export type progressUpdateWithWhereUniqueWithoutExerciseInput = {
    where: progressWhereUniqueInput
    data: XOR<progressUpdateWithoutExerciseInput, progressUncheckedUpdateWithoutExerciseInput>
  }

  export type progressUpdateManyWithWhereWithoutExerciseInput = {
    where: progressScalarWhereInput
    data: XOR<progressUpdateManyMutationInput, progressUncheckedUpdateManyWithoutExerciseInput>
  }

  export type favoriteUpsertWithWhereUniqueWithoutExerciseInput = {
    where: favoriteWhereUniqueInput
    update: XOR<favoriteUpdateWithoutExerciseInput, favoriteUncheckedUpdateWithoutExerciseInput>
    create: XOR<favoriteCreateWithoutExerciseInput, favoriteUncheckedCreateWithoutExerciseInput>
  }

  export type favoriteUpdateWithWhereUniqueWithoutExerciseInput = {
    where: favoriteWhereUniqueInput
    data: XOR<favoriteUpdateWithoutExerciseInput, favoriteUncheckedUpdateWithoutExerciseInput>
  }

  export type favoriteUpdateManyWithWhereWithoutExerciseInput = {
    where: favoriteScalarWhereInput
    data: XOR<favoriteUpdateManyMutationInput, favoriteUncheckedUpdateManyWithoutExerciseInput>
  }

  export type exerciseRoutineUpsertWithWhereUniqueWithoutExerciseInput = {
    where: exerciseRoutineWhereUniqueInput
    update: XOR<exerciseRoutineUpdateWithoutExerciseInput, exerciseRoutineUncheckedUpdateWithoutExerciseInput>
    create: XOR<exerciseRoutineCreateWithoutExerciseInput, exerciseRoutineUncheckedCreateWithoutExerciseInput>
  }

  export type exerciseRoutineUpdateWithWhereUniqueWithoutExerciseInput = {
    where: exerciseRoutineWhereUniqueInput
    data: XOR<exerciseRoutineUpdateWithoutExerciseInput, exerciseRoutineUncheckedUpdateWithoutExerciseInput>
  }

  export type exerciseRoutineUpdateManyWithWhereWithoutExerciseInput = {
    where: exerciseRoutineScalarWhereInput
    data: XOR<exerciseRoutineUpdateManyMutationInput, exerciseRoutineUncheckedUpdateManyWithoutExerciseInput>
  }

  export type routineCreateWithoutExerciseRoutineInput = {
    name: string
    createdAt?: Date | string | null
    description: string
    duration: number
    totalExercise: number
    user: userCreateNestedOneWithoutRoutineInput
  }

  export type routineUncheckedCreateWithoutExerciseRoutineInput = {
    id?: number
    userId: string
    name: string
    createdAt?: Date | string | null
    description: string
    duration: number
    totalExercise: number
  }

  export type routineCreateOrConnectWithoutExerciseRoutineInput = {
    where: routineWhereUniqueInput
    create: XOR<routineCreateWithoutExerciseRoutineInput, routineUncheckedCreateWithoutExerciseRoutineInput>
  }

  export type exerciseCreateWithoutExerciseRoutineInput = {
    name: string
    muscle: string
    videoImgUrl: string
    description: string
    executionSteps: string
    tips: string
    progress?: progressCreateNestedManyWithoutExerciseInput
    favorite?: favoriteCreateNestedManyWithoutExerciseInput
  }

  export type exerciseUncheckedCreateWithoutExerciseRoutineInput = {
    id?: number
    name: string
    muscle: string
    videoImgUrl: string
    description: string
    executionSteps: string
    tips: string
    progress?: progressUncheckedCreateNestedManyWithoutExerciseInput
    favorite?: favoriteUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type exerciseCreateOrConnectWithoutExerciseRoutineInput = {
    where: exerciseWhereUniqueInput
    create: XOR<exerciseCreateWithoutExerciseRoutineInput, exerciseUncheckedCreateWithoutExerciseRoutineInput>
  }

  export type routineUpsertWithoutExerciseRoutineInput = {
    update: XOR<routineUpdateWithoutExerciseRoutineInput, routineUncheckedUpdateWithoutExerciseRoutineInput>
    create: XOR<routineCreateWithoutExerciseRoutineInput, routineUncheckedCreateWithoutExerciseRoutineInput>
    where?: routineWhereInput
  }

  export type routineUpdateToOneWithWhereWithoutExerciseRoutineInput = {
    where?: routineWhereInput
    data: XOR<routineUpdateWithoutExerciseRoutineInput, routineUncheckedUpdateWithoutExerciseRoutineInput>
  }

  export type routineUpdateWithoutExerciseRoutineInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalExercise?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutRoutineNestedInput
  }

  export type routineUncheckedUpdateWithoutExerciseRoutineInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalExercise?: IntFieldUpdateOperationsInput | number
  }

  export type exerciseUpsertWithoutExerciseRoutineInput = {
    update: XOR<exerciseUpdateWithoutExerciseRoutineInput, exerciseUncheckedUpdateWithoutExerciseRoutineInput>
    create: XOR<exerciseCreateWithoutExerciseRoutineInput, exerciseUncheckedCreateWithoutExerciseRoutineInput>
    where?: exerciseWhereInput
  }

  export type exerciseUpdateToOneWithWhereWithoutExerciseRoutineInput = {
    where?: exerciseWhereInput
    data: XOR<exerciseUpdateWithoutExerciseRoutineInput, exerciseUncheckedUpdateWithoutExerciseRoutineInput>
  }

  export type exerciseUpdateWithoutExerciseRoutineInput = {
    name?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    videoImgUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    executionSteps?: StringFieldUpdateOperationsInput | string
    tips?: StringFieldUpdateOperationsInput | string
    progress?: progressUpdateManyWithoutExerciseNestedInput
    favorite?: favoriteUpdateManyWithoutExerciseNestedInput
  }

  export type exerciseUncheckedUpdateWithoutExerciseRoutineInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    videoImgUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    executionSteps?: StringFieldUpdateOperationsInput | string
    tips?: StringFieldUpdateOperationsInput | string
    progress?: progressUncheckedUpdateManyWithoutExerciseNestedInput
    favorite?: favoriteUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type progressCreateManyUserInput = {
    id?: number
    exerciseId: number
    date?: Date | string
    weightUsed: number
    repetitions: number
  }

  export type routineCreateManyUserInput = {
    id?: number
    name: string
    createdAt?: Date | string | null
    description: string
    duration: number
    totalExercise: number
  }

  export type favoriteCreateManyUserInput = {
    id?: number
    exerciseId: number
  }

  export type progressUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightUsed?: FloatFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    exercise?: exerciseUpdateOneRequiredWithoutProgressNestedInput
  }

  export type progressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightUsed?: FloatFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
  }

  export type progressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightUsed?: FloatFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
  }

  export type routineUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalExercise?: IntFieldUpdateOperationsInput | number
    exerciseRoutine?: exerciseRoutineUpdateManyWithoutRoutineNestedInput
  }

  export type routineUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalExercise?: IntFieldUpdateOperationsInput | number
    exerciseRoutine?: exerciseRoutineUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type routineUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    totalExercise?: IntFieldUpdateOperationsInput | number
  }

  export type favoriteUpdateWithoutUserInput = {
    exercise?: exerciseUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type favoriteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type favoriteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type exerciseRoutineCreateManyRoutineInput = {
    id?: number
    exerciseId: number
    series: number
    repetitions: number
  }

  export type exerciseRoutineUpdateWithoutRoutineInput = {
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    exercise?: exerciseUpdateOneRequiredWithoutExerciseRoutineNestedInput
  }

  export type exerciseRoutineUncheckedUpdateWithoutRoutineInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
  }

  export type exerciseRoutineUncheckedUpdateManyWithoutRoutineInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
  }

  export type progressCreateManyExerciseInput = {
    id?: number
    userId: string
    date?: Date | string
    weightUsed: number
    repetitions: number
  }

  export type favoriteCreateManyExerciseInput = {
    id?: number
    userId: string
  }

  export type exerciseRoutineCreateManyExerciseInput = {
    id?: number
    routineId: number
    series: number
    repetitions: number
  }

  export type progressUpdateWithoutExerciseInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightUsed?: FloatFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutProgressNestedInput
  }

  export type progressUncheckedUpdateWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightUsed?: FloatFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
  }

  export type progressUncheckedUpdateManyWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightUsed?: FloatFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
  }

  export type favoriteUpdateWithoutExerciseInput = {
    user?: userUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type favoriteUncheckedUpdateWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type favoriteUncheckedUpdateManyWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type exerciseRoutineUpdateWithoutExerciseInput = {
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    routine?: routineUpdateOneRequiredWithoutExerciseRoutineNestedInput
  }

  export type exerciseRoutineUncheckedUpdateWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    routineId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
  }

  export type exerciseRoutineUncheckedUpdateManyWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    routineId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
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