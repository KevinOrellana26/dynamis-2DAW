
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Progress
 * 
 */
export type Progress = $Result.DefaultSelection<Prisma.$ProgressPayload>
/**
 * Model Routine
 * 
 */
export type Routine = $Result.DefaultSelection<Prisma.$RoutinePayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model Rutina_ejercicio
 * 
 */
export type Rutina_ejercicio = $Result.DefaultSelection<Prisma.$Rutina_ejercicioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  INVITADO: 'INVITADO',
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progress`: Exposes CRUD operations for the **Progress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progresses
    * const progresses = await prisma.progress.findMany()
    * ```
    */
  get progress(): Prisma.ProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routine`: Exposes CRUD operations for the **Routine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routines
    * const routines = await prisma.routine.findMany()
    * ```
    */
  get routine(): Prisma.RoutineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rutina_ejercicio`: Exposes CRUD operations for the **Rutina_ejercicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rutina_ejercicios
    * const rutina_ejercicios = await prisma.rutina_ejercicio.findMany()
    * ```
    */
  get rutina_ejercicio(): Prisma.Rutina_ejercicioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Progress: 'Progress',
    Routine: 'Routine',
    Favorite: 'Favorite',
    Exercise: 'Exercise',
    Rutina_ejercicio: 'Rutina_ejercicio'
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
      modelProps: "user" | "progress" | "routine" | "favorite" | "exercise" | "rutina_ejercicio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Progress: {
        payload: Prisma.$ProgressPayload<ExtArgs>
        fields: Prisma.ProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          findFirst: {
            args: Prisma.ProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          findMany: {
            args: Prisma.ProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>[]
          }
          create: {
            args: Prisma.ProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          createMany: {
            args: Prisma.ProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>[]
          }
          delete: {
            args: Prisma.ProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          update: {
            args: Prisma.ProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          deleteMany: {
            args: Prisma.ProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>[]
          }
          upsert: {
            args: Prisma.ProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          aggregate: {
            args: Prisma.ProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgress>
          }
          groupBy: {
            args: Prisma.ProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressCountAggregateOutputType> | number
          }
        }
      }
      Routine: {
        payload: Prisma.$RoutinePayload<ExtArgs>
        fields: Prisma.RoutineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          findFirst: {
            args: Prisma.RoutineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          findMany: {
            args: Prisma.RoutineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          create: {
            args: Prisma.RoutineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          createMany: {
            args: Prisma.RoutineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          delete: {
            args: Prisma.RoutineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          update: {
            args: Prisma.RoutineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          deleteMany: {
            args: Prisma.RoutineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoutineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          upsert: {
            args: Prisma.RoutineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          aggregate: {
            args: Prisma.RoutineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutine>
          }
          groupBy: {
            args: Prisma.RoutineGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      Rutina_ejercicio: {
        payload: Prisma.$Rutina_ejercicioPayload<ExtArgs>
        fields: Prisma.Rutina_ejercicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Rutina_ejercicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rutina_ejercicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Rutina_ejercicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rutina_ejercicioPayload>
          }
          findFirst: {
            args: Prisma.Rutina_ejercicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rutina_ejercicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Rutina_ejercicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rutina_ejercicioPayload>
          }
          findMany: {
            args: Prisma.Rutina_ejercicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rutina_ejercicioPayload>[]
          }
          create: {
            args: Prisma.Rutina_ejercicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rutina_ejercicioPayload>
          }
          createMany: {
            args: Prisma.Rutina_ejercicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Rutina_ejercicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rutina_ejercicioPayload>[]
          }
          delete: {
            args: Prisma.Rutina_ejercicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rutina_ejercicioPayload>
          }
          update: {
            args: Prisma.Rutina_ejercicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rutina_ejercicioPayload>
          }
          deleteMany: {
            args: Prisma.Rutina_ejercicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Rutina_ejercicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Rutina_ejercicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rutina_ejercicioPayload>[]
          }
          upsert: {
            args: Prisma.Rutina_ejercicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rutina_ejercicioPayload>
          }
          aggregate: {
            args: Prisma.Rutina_ejercicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRutina_ejercicio>
          }
          groupBy: {
            args: Prisma.Rutina_ejercicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rutina_ejercicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.Rutina_ejercicioCountArgs<ExtArgs>
            result: $Utils.Optional<Rutina_ejercicioCountAggregateOutputType> | number
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
    user?: UserOmit
    progress?: ProgressOmit
    routine?: RoutineOmit
    favorite?: FavoriteOmit
    exercise?: ExerciseOmit
    rutina_ejercicio?: Rutina_ejercicioOmit
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
    Progress: number
    Routine: number
    Favorite: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Progress?: boolean | UserCountOutputTypeCountProgressArgs
    Routine?: boolean | UserCountOutputTypeCountRoutineArgs
    Favorite?: boolean | UserCountOutputTypeCountFavoriteArgs
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
    where?: ProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type RoutineCountOutputType
   */

  export type RoutineCountOutputType = {
    Rutina_ejercicio: number
  }

  export type RoutineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rutina_ejercicio?: boolean | RoutineCountOutputTypeCountRutina_ejercicioArgs
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
  export type RoutineCountOutputTypeCountRutina_ejercicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rutina_ejercicioWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    Progreso: number
    Favorito: number
    Rutina_ejercicio: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Progreso?: boolean | ExerciseCountOutputTypeCountProgresoArgs
    Favorito?: boolean | ExerciseCountOutputTypeCountFavoritoArgs
    Rutina_ejercicio?: boolean | ExerciseCountOutputTypeCountRutina_ejercicioArgs
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
  export type ExerciseCountOutputTypeCountProgresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressWhereInput
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountFavoritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountRutina_ejercicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rutina_ejercicioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
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
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    rol: $Enums.Rol | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    rol: $Enums.Rol | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    password: number
    image: number
    createdAt: number
    updatedAt: number
    rol: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    rol?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    rol?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    rol?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    password: string
    image: string | null
    createdAt: Date
    updatedAt: Date
    rol: $Enums.Rol
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rol?: boolean
    Progress?: boolean | User$ProgressArgs<ExtArgs>
    Routine?: boolean | User$RoutineArgs<ExtArgs>
    Favorite?: boolean | User$FavoriteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rol?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rol?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rol?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "password" | "image" | "createdAt" | "updatedAt" | "rol", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Progress?: boolean | User$ProgressArgs<ExtArgs>
    Routine?: boolean | User$RoutineArgs<ExtArgs>
    Favorite?: boolean | User$FavoriteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Progress: Prisma.$ProgressPayload<ExtArgs>[]
      Routine: Prisma.$RoutinePayload<ExtArgs>[]
      Favorite: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      password: string
      image: string | null
      createdAt: Date
      updatedAt: Date
      rol: $Enums.Rol
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Progress<T extends User$ProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$ProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Routine<T extends User$RoutineArgs<ExtArgs> = {}>(args?: Subset<T, User$RoutineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Favorite<T extends User$FavoriteArgs<ExtArgs> = {}>(args?: Subset<T, User$FavoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly rol: FieldRef<"User", 'Rol'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Progress
   */
  export type User$ProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    where?: ProgressWhereInput
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    cursor?: ProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * User.Routine
   */
  export type User$RoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    cursor?: RoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * User.Favorite
   */
  export type User$FavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Progress
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
    ejercicio_id: number | null
    peso_usado: number | null
    repeticiones: number | null
  }

  export type ProgressSumAggregateOutputType = {
    id: number | null
    ejercicio_id: number | null
    peso_usado: number | null
    repeticiones: number | null
  }

  export type ProgressMinAggregateOutputType = {
    id: number | null
    usuario_id: string | null
    ejercicio_id: number | null
    fecha: Date | null
    peso_usado: number | null
    repeticiones: number | null
  }

  export type ProgressMaxAggregateOutputType = {
    id: number | null
    usuario_id: string | null
    ejercicio_id: number | null
    fecha: Date | null
    peso_usado: number | null
    repeticiones: number | null
  }

  export type ProgressCountAggregateOutputType = {
    id: number
    usuario_id: number
    ejercicio_id: number
    fecha: number
    peso_usado: number
    repeticiones: number
    _all: number
  }


  export type ProgressAvgAggregateInputType = {
    id?: true
    ejercicio_id?: true
    peso_usado?: true
    repeticiones?: true
  }

  export type ProgressSumAggregateInputType = {
    id?: true
    ejercicio_id?: true
    peso_usado?: true
    repeticiones?: true
  }

  export type ProgressMinAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
    fecha?: true
    peso_usado?: true
    repeticiones?: true
  }

  export type ProgressMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
    fecha?: true
    peso_usado?: true
    repeticiones?: true
  }

  export type ProgressCountAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
    fecha?: true
    peso_usado?: true
    repeticiones?: true
    _all?: true
  }

  export type ProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progress to aggregate.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Progresses
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




  export type ProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressWhereInput
    orderBy?: ProgressOrderByWithAggregationInput | ProgressOrderByWithAggregationInput[]
    by: ProgressScalarFieldEnum[] | ProgressScalarFieldEnum
    having?: ProgressScalarWhereWithAggregatesInput
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
    usuario_id: string
    ejercicio_id: number
    fecha: Date | null
    peso_usado: number
    repeticiones: number
    _count: ProgressCountAggregateOutputType | null
    _avg: ProgressAvgAggregateOutputType | null
    _sum: ProgressSumAggregateOutputType | null
    _min: ProgressMinAggregateOutputType | null
    _max: ProgressMaxAggregateOutputType | null
  }

  type GetProgressGroupByPayload<T extends ProgressGroupByArgs> = Prisma.PrismaPromise<
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


  export type ProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
    fecha?: boolean
    peso_usado?: boolean
    repeticiones?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progress"]>

  export type ProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
    fecha?: boolean
    peso_usado?: boolean
    repeticiones?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progress"]>

  export type ProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
    fecha?: boolean
    peso_usado?: boolean
    repeticiones?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progress"]>

  export type ProgressSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
    fecha?: boolean
    peso_usado?: boolean
    repeticiones?: boolean
  }

  export type ProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "ejercicio_id" | "fecha" | "peso_usado" | "repeticiones", ExtArgs["result"]["progress"]>
  export type ProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type ProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type ProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $ProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Progress"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
      ejercicio: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: string
      ejercicio_id: number
      fecha: Date | null
      peso_usado: number
      repeticiones: number
    }, ExtArgs["result"]["progress"]>
    composites: {}
  }

  type ProgressGetPayload<S extends boolean | null | undefined | ProgressDefaultArgs> = $Result.GetResult<Prisma.$ProgressPayload, S>

  type ProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressCountAggregateInputType | true
    }

  export interface ProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Progress'], meta: { name: 'Progress' } }
    /**
     * Find zero or one Progress that matches the filter.
     * @param {ProgressFindUniqueArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressFindUniqueArgs>(args: SelectSubset<T, ProgressFindUniqueArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Progress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressFindUniqueOrThrowArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindFirstArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressFindFirstArgs>(args?: SelectSubset<T, ProgressFindFirstArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindFirstOrThrowArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends ProgressFindManyArgs>(args?: SelectSubset<T, ProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Progress.
     * @param {ProgressCreateArgs} args - Arguments to create a Progress.
     * @example
     * // Create one Progress
     * const Progress = await prisma.progress.create({
     *   data: {
     *     // ... data to create a Progress
     *   }
     * })
     * 
     */
    create<T extends ProgressCreateArgs>(args: SelectSubset<T, ProgressCreateArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Progresses.
     * @param {ProgressCreateManyArgs} args - Arguments to create many Progresses.
     * @example
     * // Create many Progresses
     * const progress = await prisma.progress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressCreateManyArgs>(args?: SelectSubset<T, ProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Progresses and returns the data saved in the database.
     * @param {ProgressCreateManyAndReturnArgs} args - Arguments to create many Progresses.
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
    createManyAndReturn<T extends ProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Progress.
     * @param {ProgressDeleteArgs} args - Arguments to delete one Progress.
     * @example
     * // Delete one Progress
     * const Progress = await prisma.progress.delete({
     *   where: {
     *     // ... filter to delete one Progress
     *   }
     * })
     * 
     */
    delete<T extends ProgressDeleteArgs>(args: SelectSubset<T, ProgressDeleteArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Progress.
     * @param {ProgressUpdateArgs} args - Arguments to update one Progress.
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
    update<T extends ProgressUpdateArgs>(args: SelectSubset<T, ProgressUpdateArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Progresses.
     * @param {ProgressDeleteManyArgs} args - Arguments to filter Progresses to delete.
     * @example
     * // Delete a few Progresses
     * const { count } = await prisma.progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressDeleteManyArgs>(args?: SelectSubset<T, ProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends ProgressUpdateManyArgs>(args: SelectSubset<T, ProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresses and returns the data updated in the database.
     * @param {ProgressUpdateManyAndReturnArgs} args - Arguments to update many Progresses.
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
    updateManyAndReturn<T extends ProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Progress.
     * @param {ProgressUpsertArgs} args - Arguments to update or create a Progress.
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
    upsert<T extends ProgressUpsertArgs>(args: SelectSubset<T, ProgressUpsertArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressCountArgs} args - Arguments to filter Progresses to count.
     * @example
     * // Count the number of Progresses
     * const count = await prisma.progress.count({
     *   where: {
     *     // ... the filter for the Progresses we want to count
     *   }
     * })
    **/
    count<T extends ProgressCountArgs>(
      args?: Subset<T, ProgressCountArgs>,
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
     * @param {ProgressGroupByArgs} args - Group by arguments.
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
      T extends ProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressGroupByArgs['orderBy'] }
        : { orderBy?: ProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Progress model
   */
  readonly fields: ProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ejercicio<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Progress model
   */
  interface ProgressFieldRefs {
    readonly id: FieldRef<"Progress", 'Int'>
    readonly usuario_id: FieldRef<"Progress", 'String'>
    readonly ejercicio_id: FieldRef<"Progress", 'Int'>
    readonly fecha: FieldRef<"Progress", 'DateTime'>
    readonly peso_usado: FieldRef<"Progress", 'Float'>
    readonly repeticiones: FieldRef<"Progress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Progress findUnique
   */
  export type ProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where: ProgressWhereUniqueInput
  }

  /**
   * Progress findUniqueOrThrow
   */
  export type ProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where: ProgressWhereUniqueInput
  }

  /**
   * Progress findFirst
   */
  export type ProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresses.
     */
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * Progress findFirstOrThrow
   */
  export type ProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresses.
     */
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * Progress findMany
   */
  export type ProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progresses to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * Progress create
   */
  export type ProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a Progress.
     */
    data: XOR<ProgressCreateInput, ProgressUncheckedCreateInput>
  }

  /**
   * Progress createMany
   */
  export type ProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Progresses.
     */
    data: ProgressCreateManyInput | ProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Progress createManyAndReturn
   */
  export type ProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * The data used to create many Progresses.
     */
    data: ProgressCreateManyInput | ProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progress update
   */
  export type ProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a Progress.
     */
    data: XOR<ProgressUpdateInput, ProgressUncheckedUpdateInput>
    /**
     * Choose, which Progress to update.
     */
    where: ProgressWhereUniqueInput
  }

  /**
   * Progress updateMany
   */
  export type ProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Progresses.
     */
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyInput>
    /**
     * Filter which Progresses to update
     */
    where?: ProgressWhereInput
    /**
     * Limit how many Progresses to update.
     */
    limit?: number
  }

  /**
   * Progress updateManyAndReturn
   */
  export type ProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * The data used to update Progresses.
     */
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyInput>
    /**
     * Filter which Progresses to update
     */
    where?: ProgressWhereInput
    /**
     * Limit how many Progresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progress upsert
   */
  export type ProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the Progress to update in case it exists.
     */
    where: ProgressWhereUniqueInput
    /**
     * In case the Progress found by the `where` argument doesn't exist, create a new Progress with this data.
     */
    create: XOR<ProgressCreateInput, ProgressUncheckedCreateInput>
    /**
     * In case the Progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressUpdateInput, ProgressUncheckedUpdateInput>
  }

  /**
   * Progress delete
   */
  export type ProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter which Progress to delete.
     */
    where: ProgressWhereUniqueInput
  }

  /**
   * Progress deleteMany
   */
  export type ProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progresses to delete
     */
    where?: ProgressWhereInput
    /**
     * Limit how many Progresses to delete.
     */
    limit?: number
  }

  /**
   * Progress without action
   */
  export type ProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
  }


  /**
   * Model Routine
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
  }

  export type RoutineSumAggregateOutputType = {
    id: number | null
  }

  export type RoutineMinAggregateOutputType = {
    id: number | null
    usuario_id: string | null
    nombre: string | null
    fecha_creacion: Date | null
  }

  export type RoutineMaxAggregateOutputType = {
    id: number | null
    usuario_id: string | null
    nombre: string | null
    fecha_creacion: Date | null
  }

  export type RoutineCountAggregateOutputType = {
    id: number
    usuario_id: number
    nombre: number
    fecha_creacion: number
    _all: number
  }


  export type RoutineAvgAggregateInputType = {
    id?: true
  }

  export type RoutineSumAggregateInputType = {
    id?: true
  }

  export type RoutineMinAggregateInputType = {
    id?: true
    usuario_id?: true
    nombre?: true
    fecha_creacion?: true
  }

  export type RoutineMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    nombre?: true
    fecha_creacion?: true
  }

  export type RoutineCountAggregateInputType = {
    id?: true
    usuario_id?: true
    nombre?: true
    fecha_creacion?: true
    _all?: true
  }

  export type RoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routine to aggregate.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routines
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




  export type RoutineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithAggregationInput | RoutineOrderByWithAggregationInput[]
    by: RoutineScalarFieldEnum[] | RoutineScalarFieldEnum
    having?: RoutineScalarWhereWithAggregatesInput
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
    usuario_id: string
    nombre: string
    fecha_creacion: Date | null
    _count: RoutineCountAggregateOutputType | null
    _avg: RoutineAvgAggregateOutputType | null
    _sum: RoutineSumAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  type GetRoutineGroupByPayload<T extends RoutineGroupByArgs> = Prisma.PrismaPromise<
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


  export type RoutineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    nombre?: boolean
    fecha_creacion?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    Rutina_ejercicio?: boolean | Routine$Rutina_ejercicioArgs<ExtArgs>
    _count?: boolean | RoutineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    nombre?: boolean
    fecha_creacion?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    nombre?: boolean
    fecha_creacion?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    nombre?: boolean
    fecha_creacion?: boolean
  }

  export type RoutineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "nombre" | "fecha_creacion", ExtArgs["result"]["routine"]>
  export type RoutineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    Rutina_ejercicio?: boolean | Routine$Rutina_ejercicioArgs<ExtArgs>
    _count?: boolean | RoutineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoutineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoutineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoutinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Routine"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
      Rutina_ejercicio: Prisma.$Rutina_ejercicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: string
      nombre: string
      fecha_creacion: Date | null
    }, ExtArgs["result"]["routine"]>
    composites: {}
  }

  type RoutineGetPayload<S extends boolean | null | undefined | RoutineDefaultArgs> = $Result.GetResult<Prisma.$RoutinePayload, S>

  type RoutineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutineCountAggregateInputType | true
    }

  export interface RoutineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Routine'], meta: { name: 'Routine' } }
    /**
     * Find zero or one Routine that matches the filter.
     * @param {RoutineFindUniqueArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineFindUniqueArgs>(args: SelectSubset<T, RoutineFindUniqueArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Routine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutineFindUniqueOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindFirstArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineFindFirstArgs>(args?: SelectSubset<T, RoutineFindFirstArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindFirstOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends RoutineFindManyArgs>(args?: SelectSubset<T, RoutineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Routine.
     * @param {RoutineCreateArgs} args - Arguments to create a Routine.
     * @example
     * // Create one Routine
     * const Routine = await prisma.routine.create({
     *   data: {
     *     // ... data to create a Routine
     *   }
     * })
     * 
     */
    create<T extends RoutineCreateArgs>(args: SelectSubset<T, RoutineCreateArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routines.
     * @param {RoutineCreateManyArgs} args - Arguments to create many Routines.
     * @example
     * // Create many Routines
     * const routine = await prisma.routine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineCreateManyArgs>(args?: SelectSubset<T, RoutineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routines and returns the data saved in the database.
     * @param {RoutineCreateManyAndReturnArgs} args - Arguments to create many Routines.
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
    createManyAndReturn<T extends RoutineCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Routine.
     * @param {RoutineDeleteArgs} args - Arguments to delete one Routine.
     * @example
     * // Delete one Routine
     * const Routine = await prisma.routine.delete({
     *   where: {
     *     // ... filter to delete one Routine
     *   }
     * })
     * 
     */
    delete<T extends RoutineDeleteArgs>(args: SelectSubset<T, RoutineDeleteArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Routine.
     * @param {RoutineUpdateArgs} args - Arguments to update one Routine.
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
    update<T extends RoutineUpdateArgs>(args: SelectSubset<T, RoutineUpdateArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routines.
     * @param {RoutineDeleteManyArgs} args - Arguments to filter Routines to delete.
     * @example
     * // Delete a few Routines
     * const { count } = await prisma.routine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineDeleteManyArgs>(args?: SelectSubset<T, RoutineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends RoutineUpdateManyArgs>(args: SelectSubset<T, RoutineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routines and returns the data updated in the database.
     * @param {RoutineUpdateManyAndReturnArgs} args - Arguments to update many Routines.
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
    updateManyAndReturn<T extends RoutineUpdateManyAndReturnArgs>(args: SelectSubset<T, RoutineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Routine.
     * @param {RoutineUpsertArgs} args - Arguments to update or create a Routine.
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
    upsert<T extends RoutineUpsertArgs>(args: SelectSubset<T, RoutineUpsertArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineCountArgs} args - Arguments to filter Routines to count.
     * @example
     * // Count the number of Routines
     * const count = await prisma.routine.count({
     *   where: {
     *     // ... the filter for the Routines we want to count
     *   }
     * })
    **/
    count<T extends RoutineCountArgs>(
      args?: Subset<T, RoutineCountArgs>,
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
     * @param {RoutineGroupByArgs} args - Group by arguments.
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
      T extends RoutineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineGroupByArgs['orderBy'] }
        : { orderBy?: RoutineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Routine model
   */
  readonly fields: RoutineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Routine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Rutina_ejercicio<T extends Routine$Rutina_ejercicioArgs<ExtArgs> = {}>(args?: Subset<T, Routine$Rutina_ejercicioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Routine model
   */
  interface RoutineFieldRefs {
    readonly id: FieldRef<"Routine", 'Int'>
    readonly usuario_id: FieldRef<"Routine", 'String'>
    readonly nombre: FieldRef<"Routine", 'String'>
    readonly fecha_creacion: FieldRef<"Routine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Routine findUnique
   */
  export type RoutineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine findUniqueOrThrow
   */
  export type RoutineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine findFirst
   */
  export type RoutineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine findFirstOrThrow
   */
  export type RoutineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine findMany
   */
  export type RoutineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routines to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine create
   */
  export type RoutineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The data needed to create a Routine.
     */
    data: XOR<RoutineCreateInput, RoutineUncheckedCreateInput>
  }

  /**
   * Routine createMany
   */
  export type RoutineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routines.
     */
    data: RoutineCreateManyInput | RoutineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Routine createManyAndReturn
   */
  export type RoutineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * The data used to create many Routines.
     */
    data: RoutineCreateManyInput | RoutineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Routine update
   */
  export type RoutineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The data needed to update a Routine.
     */
    data: XOR<RoutineUpdateInput, RoutineUncheckedUpdateInput>
    /**
     * Choose, which Routine to update.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine updateMany
   */
  export type RoutineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routines.
     */
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyInput>
    /**
     * Filter which Routines to update
     */
    where?: RoutineWhereInput
    /**
     * Limit how many Routines to update.
     */
    limit?: number
  }

  /**
   * Routine updateManyAndReturn
   */
  export type RoutineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * The data used to update Routines.
     */
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyInput>
    /**
     * Filter which Routines to update
     */
    where?: RoutineWhereInput
    /**
     * Limit how many Routines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Routine upsert
   */
  export type RoutineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The filter to search for the Routine to update in case it exists.
     */
    where: RoutineWhereUniqueInput
    /**
     * In case the Routine found by the `where` argument doesn't exist, create a new Routine with this data.
     */
    create: XOR<RoutineCreateInput, RoutineUncheckedCreateInput>
    /**
     * In case the Routine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineUpdateInput, RoutineUncheckedUpdateInput>
  }

  /**
   * Routine delete
   */
  export type RoutineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter which Routine to delete.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine deleteMany
   */
  export type RoutineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routines to delete
     */
    where?: RoutineWhereInput
    /**
     * Limit how many Routines to delete.
     */
    limit?: number
  }

  /**
   * Routine.Rutina_ejercicio
   */
  export type Routine$Rutina_ejercicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina_ejercicio
     */
    select?: Rutina_ejercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina_ejercicio
     */
    omit?: Rutina_ejercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rutina_ejercicioInclude<ExtArgs> | null
    where?: Rutina_ejercicioWhereInput
    orderBy?: Rutina_ejercicioOrderByWithRelationInput | Rutina_ejercicioOrderByWithRelationInput[]
    cursor?: Rutina_ejercicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rutina_ejercicioScalarFieldEnum | Rutina_ejercicioScalarFieldEnum[]
  }

  /**
   * Routine without action
   */
  export type RoutineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
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
    ejercicio_id: number | null
  }

  export type FavoriteSumAggregateOutputType = {
    id: number | null
    ejercicio_id: number | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: number | null
    usuario_id: string | null
    ejercicio_id: number | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: number | null
    usuario_id: string | null
    ejercicio_id: number | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    usuario_id: number
    ejercicio_id: number
    _all: number
  }


  export type FavoriteAvgAggregateInputType = {
    id?: true
    ejercicio_id?: true
  }

  export type FavoriteSumAggregateInputType = {
    id?: true
    ejercicio_id?: true
  }

  export type FavoriteMinAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
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




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
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
    usuario_id: string
    ejercicio_id: number
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
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


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "ejercicio_id", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
      ejercicio: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: string
      ejercicio_id: number
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
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
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
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
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
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
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
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
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
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
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ejercicio<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'Int'>
    readonly usuario_id: FieldRef<"Favorite", 'String'>
    readonly ejercicio_id: FieldRef<"Favorite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
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
    nombre: string | null
    musculo: string | null
    video_img_url: string | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    musculo: string | null
    video_img_url: string | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    nombre: number
    musculo: number
    video_img_url: number
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
    nombre?: true
    musculo?: true
    video_img_url?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    nombre?: true
    musculo?: true
    video_img_url?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    nombre?: true
    musculo?: true
    video_img_url?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
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




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
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
    nombre: string
    musculo: string
    video_img_url: string
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
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


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    musculo?: boolean
    video_img_url?: boolean
    Progreso?: boolean | Exercise$ProgresoArgs<ExtArgs>
    Favorito?: boolean | Exercise$FavoritoArgs<ExtArgs>
    Rutina_ejercicio?: boolean | Exercise$Rutina_ejercicioArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    musculo?: boolean
    video_img_url?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    musculo?: boolean
    video_img_url?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    nombre?: boolean
    musculo?: boolean
    video_img_url?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "musculo" | "video_img_url", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Progreso?: boolean | Exercise$ProgresoArgs<ExtArgs>
    Favorito?: boolean | Exercise$FavoritoArgs<ExtArgs>
    Rutina_ejercicio?: boolean | Exercise$Rutina_ejercicioArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      Progreso: Prisma.$ProgressPayload<ExtArgs>[]
      Favorito: Prisma.$FavoritePayload<ExtArgs>[]
      Rutina_ejercicio: Prisma.$Rutina_ejercicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      musculo: string
      video_img_url: string
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
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
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
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
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
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
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
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
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
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
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Progreso<T extends Exercise$ProgresoArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$ProgresoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Favorito<T extends Exercise$FavoritoArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$FavoritoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Rutina_ejercicio<T extends Exercise$Rutina_ejercicioArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$Rutina_ejercicioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'Int'>
    readonly nombre: FieldRef<"Exercise", 'String'>
    readonly musculo: FieldRef<"Exercise", 'String'>
    readonly video_img_url: FieldRef<"Exercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.Progreso
   */
  export type Exercise$ProgresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    where?: ProgressWhereInput
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    cursor?: ProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * Exercise.Favorito
   */
  export type Exercise$FavoritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Exercise.Rutina_ejercicio
   */
  export type Exercise$Rutina_ejercicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina_ejercicio
     */
    select?: Rutina_ejercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina_ejercicio
     */
    omit?: Rutina_ejercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rutina_ejercicioInclude<ExtArgs> | null
    where?: Rutina_ejercicioWhereInput
    orderBy?: Rutina_ejercicioOrderByWithRelationInput | Rutina_ejercicioOrderByWithRelationInput[]
    cursor?: Rutina_ejercicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rutina_ejercicioScalarFieldEnum | Rutina_ejercicioScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model Rutina_ejercicio
   */

  export type AggregateRutina_ejercicio = {
    _count: Rutina_ejercicioCountAggregateOutputType | null
    _avg: Rutina_ejercicioAvgAggregateOutputType | null
    _sum: Rutina_ejercicioSumAggregateOutputType | null
    _min: Rutina_ejercicioMinAggregateOutputType | null
    _max: Rutina_ejercicioMaxAggregateOutputType | null
  }

  export type Rutina_ejercicioAvgAggregateOutputType = {
    id: number | null
    rutina_id: number | null
    ejercicio_id: number | null
    series: number | null
    repeticiones: number | null
  }

  export type Rutina_ejercicioSumAggregateOutputType = {
    id: number | null
    rutina_id: number | null
    ejercicio_id: number | null
    series: number | null
    repeticiones: number | null
  }

  export type Rutina_ejercicioMinAggregateOutputType = {
    id: number | null
    rutina_id: number | null
    ejercicio_id: number | null
    series: number | null
    repeticiones: number | null
  }

  export type Rutina_ejercicioMaxAggregateOutputType = {
    id: number | null
    rutina_id: number | null
    ejercicio_id: number | null
    series: number | null
    repeticiones: number | null
  }

  export type Rutina_ejercicioCountAggregateOutputType = {
    id: number
    rutina_id: number
    ejercicio_id: number
    series: number
    repeticiones: number
    _all: number
  }


  export type Rutina_ejercicioAvgAggregateInputType = {
    id?: true
    rutina_id?: true
    ejercicio_id?: true
    series?: true
    repeticiones?: true
  }

  export type Rutina_ejercicioSumAggregateInputType = {
    id?: true
    rutina_id?: true
    ejercicio_id?: true
    series?: true
    repeticiones?: true
  }

  export type Rutina_ejercicioMinAggregateInputType = {
    id?: true
    rutina_id?: true
    ejercicio_id?: true
    series?: true
    repeticiones?: true
  }

  export type Rutina_ejercicioMaxAggregateInputType = {
    id?: true
    rutina_id?: true
    ejercicio_id?: true
    series?: true
    repeticiones?: true
  }

  export type Rutina_ejercicioCountAggregateInputType = {
    id?: true
    rutina_id?: true
    ejercicio_id?: true
    series?: true
    repeticiones?: true
    _all?: true
  }

  export type Rutina_ejercicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutina_ejercicio to aggregate.
     */
    where?: Rutina_ejercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutina_ejercicios to fetch.
     */
    orderBy?: Rutina_ejercicioOrderByWithRelationInput | Rutina_ejercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Rutina_ejercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutina_ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutina_ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rutina_ejercicios
    **/
    _count?: true | Rutina_ejercicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rutina_ejercicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rutina_ejercicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rutina_ejercicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rutina_ejercicioMaxAggregateInputType
  }

  export type GetRutina_ejercicioAggregateType<T extends Rutina_ejercicioAggregateArgs> = {
        [P in keyof T & keyof AggregateRutina_ejercicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRutina_ejercicio[P]>
      : GetScalarType<T[P], AggregateRutina_ejercicio[P]>
  }




  export type Rutina_ejercicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rutina_ejercicioWhereInput
    orderBy?: Rutina_ejercicioOrderByWithAggregationInput | Rutina_ejercicioOrderByWithAggregationInput[]
    by: Rutina_ejercicioScalarFieldEnum[] | Rutina_ejercicioScalarFieldEnum
    having?: Rutina_ejercicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rutina_ejercicioCountAggregateInputType | true
    _avg?: Rutina_ejercicioAvgAggregateInputType
    _sum?: Rutina_ejercicioSumAggregateInputType
    _min?: Rutina_ejercicioMinAggregateInputType
    _max?: Rutina_ejercicioMaxAggregateInputType
  }

  export type Rutina_ejercicioGroupByOutputType = {
    id: number
    rutina_id: number
    ejercicio_id: number
    series: number
    repeticiones: number
    _count: Rutina_ejercicioCountAggregateOutputType | null
    _avg: Rutina_ejercicioAvgAggregateOutputType | null
    _sum: Rutina_ejercicioSumAggregateOutputType | null
    _min: Rutina_ejercicioMinAggregateOutputType | null
    _max: Rutina_ejercicioMaxAggregateOutputType | null
  }

  type GetRutina_ejercicioGroupByPayload<T extends Rutina_ejercicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rutina_ejercicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rutina_ejercicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rutina_ejercicioGroupByOutputType[P]>
            : GetScalarType<T[P], Rutina_ejercicioGroupByOutputType[P]>
        }
      >
    >


  export type Rutina_ejercicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutina_id?: boolean
    ejercicio_id?: boolean
    series?: boolean
    repeticiones?: boolean
    rutina?: boolean | RoutineDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina_ejercicio"]>

  export type Rutina_ejercicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutina_id?: boolean
    ejercicio_id?: boolean
    series?: boolean
    repeticiones?: boolean
    rutina?: boolean | RoutineDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina_ejercicio"]>

  export type Rutina_ejercicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutina_id?: boolean
    ejercicio_id?: boolean
    series?: boolean
    repeticiones?: boolean
    rutina?: boolean | RoutineDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina_ejercicio"]>

  export type Rutina_ejercicioSelectScalar = {
    id?: boolean
    rutina_id?: boolean
    ejercicio_id?: boolean
    series?: boolean
    repeticiones?: boolean
  }

  export type Rutina_ejercicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rutina_id" | "ejercicio_id" | "series" | "repeticiones", ExtArgs["result"]["rutina_ejercicio"]>
  export type Rutina_ejercicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RoutineDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type Rutina_ejercicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RoutineDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type Rutina_ejercicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RoutineDefaultArgs<ExtArgs>
    ejercicio?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $Rutina_ejercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rutina_ejercicio"
    objects: {
      rutina: Prisma.$RoutinePayload<ExtArgs>
      ejercicio: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rutina_id: number
      ejercicio_id: number
      series: number
      repeticiones: number
    }, ExtArgs["result"]["rutina_ejercicio"]>
    composites: {}
  }

  type Rutina_ejercicioGetPayload<S extends boolean | null | undefined | Rutina_ejercicioDefaultArgs> = $Result.GetResult<Prisma.$Rutina_ejercicioPayload, S>

  type Rutina_ejercicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Rutina_ejercicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rutina_ejercicioCountAggregateInputType | true
    }

  export interface Rutina_ejercicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rutina_ejercicio'], meta: { name: 'Rutina_ejercicio' } }
    /**
     * Find zero or one Rutina_ejercicio that matches the filter.
     * @param {Rutina_ejercicioFindUniqueArgs} args - Arguments to find a Rutina_ejercicio
     * @example
     * // Get one Rutina_ejercicio
     * const rutina_ejercicio = await prisma.rutina_ejercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Rutina_ejercicioFindUniqueArgs>(args: SelectSubset<T, Rutina_ejercicioFindUniqueArgs<ExtArgs>>): Prisma__Rutina_ejercicioClient<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rutina_ejercicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Rutina_ejercicioFindUniqueOrThrowArgs} args - Arguments to find a Rutina_ejercicio
     * @example
     * // Get one Rutina_ejercicio
     * const rutina_ejercicio = await prisma.rutina_ejercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Rutina_ejercicioFindUniqueOrThrowArgs>(args: SelectSubset<T, Rutina_ejercicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Rutina_ejercicioClient<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rutina_ejercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rutina_ejercicioFindFirstArgs} args - Arguments to find a Rutina_ejercicio
     * @example
     * // Get one Rutina_ejercicio
     * const rutina_ejercicio = await prisma.rutina_ejercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Rutina_ejercicioFindFirstArgs>(args?: SelectSubset<T, Rutina_ejercicioFindFirstArgs<ExtArgs>>): Prisma__Rutina_ejercicioClient<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rutina_ejercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rutina_ejercicioFindFirstOrThrowArgs} args - Arguments to find a Rutina_ejercicio
     * @example
     * // Get one Rutina_ejercicio
     * const rutina_ejercicio = await prisma.rutina_ejercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Rutina_ejercicioFindFirstOrThrowArgs>(args?: SelectSubset<T, Rutina_ejercicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__Rutina_ejercicioClient<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rutina_ejercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rutina_ejercicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rutina_ejercicios
     * const rutina_ejercicios = await prisma.rutina_ejercicio.findMany()
     * 
     * // Get first 10 Rutina_ejercicios
     * const rutina_ejercicios = await prisma.rutina_ejercicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rutina_ejercicioWithIdOnly = await prisma.rutina_ejercicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Rutina_ejercicioFindManyArgs>(args?: SelectSubset<T, Rutina_ejercicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rutina_ejercicio.
     * @param {Rutina_ejercicioCreateArgs} args - Arguments to create a Rutina_ejercicio.
     * @example
     * // Create one Rutina_ejercicio
     * const Rutina_ejercicio = await prisma.rutina_ejercicio.create({
     *   data: {
     *     // ... data to create a Rutina_ejercicio
     *   }
     * })
     * 
     */
    create<T extends Rutina_ejercicioCreateArgs>(args: SelectSubset<T, Rutina_ejercicioCreateArgs<ExtArgs>>): Prisma__Rutina_ejercicioClient<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rutina_ejercicios.
     * @param {Rutina_ejercicioCreateManyArgs} args - Arguments to create many Rutina_ejercicios.
     * @example
     * // Create many Rutina_ejercicios
     * const rutina_ejercicio = await prisma.rutina_ejercicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Rutina_ejercicioCreateManyArgs>(args?: SelectSubset<T, Rutina_ejercicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rutina_ejercicios and returns the data saved in the database.
     * @param {Rutina_ejercicioCreateManyAndReturnArgs} args - Arguments to create many Rutina_ejercicios.
     * @example
     * // Create many Rutina_ejercicios
     * const rutina_ejercicio = await prisma.rutina_ejercicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rutina_ejercicios and only return the `id`
     * const rutina_ejercicioWithIdOnly = await prisma.rutina_ejercicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Rutina_ejercicioCreateManyAndReturnArgs>(args?: SelectSubset<T, Rutina_ejercicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rutina_ejercicio.
     * @param {Rutina_ejercicioDeleteArgs} args - Arguments to delete one Rutina_ejercicio.
     * @example
     * // Delete one Rutina_ejercicio
     * const Rutina_ejercicio = await prisma.rutina_ejercicio.delete({
     *   where: {
     *     // ... filter to delete one Rutina_ejercicio
     *   }
     * })
     * 
     */
    delete<T extends Rutina_ejercicioDeleteArgs>(args: SelectSubset<T, Rutina_ejercicioDeleteArgs<ExtArgs>>): Prisma__Rutina_ejercicioClient<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rutina_ejercicio.
     * @param {Rutina_ejercicioUpdateArgs} args - Arguments to update one Rutina_ejercicio.
     * @example
     * // Update one Rutina_ejercicio
     * const rutina_ejercicio = await prisma.rutina_ejercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Rutina_ejercicioUpdateArgs>(args: SelectSubset<T, Rutina_ejercicioUpdateArgs<ExtArgs>>): Prisma__Rutina_ejercicioClient<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rutina_ejercicios.
     * @param {Rutina_ejercicioDeleteManyArgs} args - Arguments to filter Rutina_ejercicios to delete.
     * @example
     * // Delete a few Rutina_ejercicios
     * const { count } = await prisma.rutina_ejercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Rutina_ejercicioDeleteManyArgs>(args?: SelectSubset<T, Rutina_ejercicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutina_ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rutina_ejercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rutina_ejercicios
     * const rutina_ejercicio = await prisma.rutina_ejercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Rutina_ejercicioUpdateManyArgs>(args: SelectSubset<T, Rutina_ejercicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutina_ejercicios and returns the data updated in the database.
     * @param {Rutina_ejercicioUpdateManyAndReturnArgs} args - Arguments to update many Rutina_ejercicios.
     * @example
     * // Update many Rutina_ejercicios
     * const rutina_ejercicio = await prisma.rutina_ejercicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rutina_ejercicios and only return the `id`
     * const rutina_ejercicioWithIdOnly = await prisma.rutina_ejercicio.updateManyAndReturn({
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
    updateManyAndReturn<T extends Rutina_ejercicioUpdateManyAndReturnArgs>(args: SelectSubset<T, Rutina_ejercicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rutina_ejercicio.
     * @param {Rutina_ejercicioUpsertArgs} args - Arguments to update or create a Rutina_ejercicio.
     * @example
     * // Update or create a Rutina_ejercicio
     * const rutina_ejercicio = await prisma.rutina_ejercicio.upsert({
     *   create: {
     *     // ... data to create a Rutina_ejercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rutina_ejercicio we want to update
     *   }
     * })
     */
    upsert<T extends Rutina_ejercicioUpsertArgs>(args: SelectSubset<T, Rutina_ejercicioUpsertArgs<ExtArgs>>): Prisma__Rutina_ejercicioClient<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rutina_ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rutina_ejercicioCountArgs} args - Arguments to filter Rutina_ejercicios to count.
     * @example
     * // Count the number of Rutina_ejercicios
     * const count = await prisma.rutina_ejercicio.count({
     *   where: {
     *     // ... the filter for the Rutina_ejercicios we want to count
     *   }
     * })
    **/
    count<T extends Rutina_ejercicioCountArgs>(
      args?: Subset<T, Rutina_ejercicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rutina_ejercicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rutina_ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rutina_ejercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rutina_ejercicioAggregateArgs>(args: Subset<T, Rutina_ejercicioAggregateArgs>): Prisma.PrismaPromise<GetRutina_ejercicioAggregateType<T>>

    /**
     * Group by Rutina_ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rutina_ejercicioGroupByArgs} args - Group by arguments.
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
      T extends Rutina_ejercicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Rutina_ejercicioGroupByArgs['orderBy'] }
        : { orderBy?: Rutina_ejercicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Rutina_ejercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutina_ejercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rutina_ejercicio model
   */
  readonly fields: Rutina_ejercicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rutina_ejercicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Rutina_ejercicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rutina<T extends RoutineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoutineDefaultArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ejercicio<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rutina_ejercicio model
   */
  interface Rutina_ejercicioFieldRefs {
    readonly id: FieldRef<"Rutina_ejercicio", 'Int'>
    readonly rutina_id: FieldRef<"Rutina_ejercicio", 'Int'>
    readonly ejercicio_id: FieldRef<"Rutina_ejercicio", 'Int'>
    readonly series: FieldRef<"Rutina_ejercicio", 'Int'>
    readonly repeticiones: FieldRef<"Rutina_ejercicio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rutina_ejercicio findUnique
   */
  export type Rutina_ejercicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina_ejercicio
     */
    select?: Rutina_ejercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina_ejercicio
     */
    omit?: Rutina_ejercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rutina_ejercicioInclude<ExtArgs> | null
    /**
     * Filter, which Rutina_ejercicio to fetch.
     */
    where: Rutina_ejercicioWhereUniqueInput
  }

  /**
   * Rutina_ejercicio findUniqueOrThrow
   */
  export type Rutina_ejercicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina_ejercicio
     */
    select?: Rutina_ejercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina_ejercicio
     */
    omit?: Rutina_ejercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rutina_ejercicioInclude<ExtArgs> | null
    /**
     * Filter, which Rutina_ejercicio to fetch.
     */
    where: Rutina_ejercicioWhereUniqueInput
  }

  /**
   * Rutina_ejercicio findFirst
   */
  export type Rutina_ejercicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina_ejercicio
     */
    select?: Rutina_ejercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina_ejercicio
     */
    omit?: Rutina_ejercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rutina_ejercicioInclude<ExtArgs> | null
    /**
     * Filter, which Rutina_ejercicio to fetch.
     */
    where?: Rutina_ejercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutina_ejercicios to fetch.
     */
    orderBy?: Rutina_ejercicioOrderByWithRelationInput | Rutina_ejercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutina_ejercicios.
     */
    cursor?: Rutina_ejercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutina_ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutina_ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutina_ejercicios.
     */
    distinct?: Rutina_ejercicioScalarFieldEnum | Rutina_ejercicioScalarFieldEnum[]
  }

  /**
   * Rutina_ejercicio findFirstOrThrow
   */
  export type Rutina_ejercicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina_ejercicio
     */
    select?: Rutina_ejercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina_ejercicio
     */
    omit?: Rutina_ejercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rutina_ejercicioInclude<ExtArgs> | null
    /**
     * Filter, which Rutina_ejercicio to fetch.
     */
    where?: Rutina_ejercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutina_ejercicios to fetch.
     */
    orderBy?: Rutina_ejercicioOrderByWithRelationInput | Rutina_ejercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutina_ejercicios.
     */
    cursor?: Rutina_ejercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutina_ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutina_ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutina_ejercicios.
     */
    distinct?: Rutina_ejercicioScalarFieldEnum | Rutina_ejercicioScalarFieldEnum[]
  }

  /**
   * Rutina_ejercicio findMany
   */
  export type Rutina_ejercicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina_ejercicio
     */
    select?: Rutina_ejercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina_ejercicio
     */
    omit?: Rutina_ejercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rutina_ejercicioInclude<ExtArgs> | null
    /**
     * Filter, which Rutina_ejercicios to fetch.
     */
    where?: Rutina_ejercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutina_ejercicios to fetch.
     */
    orderBy?: Rutina_ejercicioOrderByWithRelationInput | Rutina_ejercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rutina_ejercicios.
     */
    cursor?: Rutina_ejercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutina_ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutina_ejercicios.
     */
    skip?: number
    distinct?: Rutina_ejercicioScalarFieldEnum | Rutina_ejercicioScalarFieldEnum[]
  }

  /**
   * Rutina_ejercicio create
   */
  export type Rutina_ejercicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina_ejercicio
     */
    select?: Rutina_ejercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina_ejercicio
     */
    omit?: Rutina_ejercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rutina_ejercicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Rutina_ejercicio.
     */
    data: XOR<Rutina_ejercicioCreateInput, Rutina_ejercicioUncheckedCreateInput>
  }

  /**
   * Rutina_ejercicio createMany
   */
  export type Rutina_ejercicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rutina_ejercicios.
     */
    data: Rutina_ejercicioCreateManyInput | Rutina_ejercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rutina_ejercicio createManyAndReturn
   */
  export type Rutina_ejercicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina_ejercicio
     */
    select?: Rutina_ejercicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina_ejercicio
     */
    omit?: Rutina_ejercicioOmit<ExtArgs> | null
    /**
     * The data used to create many Rutina_ejercicios.
     */
    data: Rutina_ejercicioCreateManyInput | Rutina_ejercicioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rutina_ejercicioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rutina_ejercicio update
   */
  export type Rutina_ejercicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina_ejercicio
     */
    select?: Rutina_ejercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina_ejercicio
     */
    omit?: Rutina_ejercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rutina_ejercicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Rutina_ejercicio.
     */
    data: XOR<Rutina_ejercicioUpdateInput, Rutina_ejercicioUncheckedUpdateInput>
    /**
     * Choose, which Rutina_ejercicio to update.
     */
    where: Rutina_ejercicioWhereUniqueInput
  }

  /**
   * Rutina_ejercicio updateMany
   */
  export type Rutina_ejercicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rutina_ejercicios.
     */
    data: XOR<Rutina_ejercicioUpdateManyMutationInput, Rutina_ejercicioUncheckedUpdateManyInput>
    /**
     * Filter which Rutina_ejercicios to update
     */
    where?: Rutina_ejercicioWhereInput
    /**
     * Limit how many Rutina_ejercicios to update.
     */
    limit?: number
  }

  /**
   * Rutina_ejercicio updateManyAndReturn
   */
  export type Rutina_ejercicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina_ejercicio
     */
    select?: Rutina_ejercicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina_ejercicio
     */
    omit?: Rutina_ejercicioOmit<ExtArgs> | null
    /**
     * The data used to update Rutina_ejercicios.
     */
    data: XOR<Rutina_ejercicioUpdateManyMutationInput, Rutina_ejercicioUncheckedUpdateManyInput>
    /**
     * Filter which Rutina_ejercicios to update
     */
    where?: Rutina_ejercicioWhereInput
    /**
     * Limit how many Rutina_ejercicios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rutina_ejercicioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rutina_ejercicio upsert
   */
  export type Rutina_ejercicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina_ejercicio
     */
    select?: Rutina_ejercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina_ejercicio
     */
    omit?: Rutina_ejercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rutina_ejercicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Rutina_ejercicio to update in case it exists.
     */
    where: Rutina_ejercicioWhereUniqueInput
    /**
     * In case the Rutina_ejercicio found by the `where` argument doesn't exist, create a new Rutina_ejercicio with this data.
     */
    create: XOR<Rutina_ejercicioCreateInput, Rutina_ejercicioUncheckedCreateInput>
    /**
     * In case the Rutina_ejercicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Rutina_ejercicioUpdateInput, Rutina_ejercicioUncheckedUpdateInput>
  }

  /**
   * Rutina_ejercicio delete
   */
  export type Rutina_ejercicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina_ejercicio
     */
    select?: Rutina_ejercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina_ejercicio
     */
    omit?: Rutina_ejercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rutina_ejercicioInclude<ExtArgs> | null
    /**
     * Filter which Rutina_ejercicio to delete.
     */
    where: Rutina_ejercicioWhereUniqueInput
  }

  /**
   * Rutina_ejercicio deleteMany
   */
  export type Rutina_ejercicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutina_ejercicios to delete
     */
    where?: Rutina_ejercicioWhereInput
    /**
     * Limit how many Rutina_ejercicios to delete.
     */
    limit?: number
  }

  /**
   * Rutina_ejercicio without action
   */
  export type Rutina_ejercicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina_ejercicio
     */
    select?: Rutina_ejercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina_ejercicio
     */
    omit?: Rutina_ejercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rutina_ejercicioInclude<ExtArgs> | null
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
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    rol: 'rol'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProgressScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    ejercicio_id: 'ejercicio_id',
    fecha: 'fecha',
    peso_usado: 'peso_usado',
    repeticiones: 'repeticiones'
  };

  export type ProgressScalarFieldEnum = (typeof ProgressScalarFieldEnum)[keyof typeof ProgressScalarFieldEnum]


  export const RoutineScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    nombre: 'nombre',
    fecha_creacion: 'fecha_creacion'
  };

  export type RoutineScalarFieldEnum = (typeof RoutineScalarFieldEnum)[keyof typeof RoutineScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    ejercicio_id: 'ejercicio_id'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    musculo: 'musculo',
    video_img_url: 'video_img_url'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const Rutina_ejercicioScalarFieldEnum: {
    id: 'id',
    rutina_id: 'rutina_id',
    ejercicio_id: 'ejercicio_id',
    series: 'series',
    repeticiones: 'repeticiones'
  };

  export type Rutina_ejercicioScalarFieldEnum = (typeof Rutina_ejercicioScalarFieldEnum)[keyof typeof Rutina_ejercicioScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    rol?: EnumRolFilter<"User"> | $Enums.Rol
    Progress?: ProgressListRelationFilter
    Routine?: RoutineListRelationFilter
    Favorite?: FavoriteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rol?: SortOrder
    Progress?: ProgressOrderByRelationAggregateInput
    Routine?: RoutineOrderByRelationAggregateInput
    Favorite?: FavoriteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    rol?: EnumRolFilter<"User"> | $Enums.Rol
    Progress?: ProgressListRelationFilter
    Routine?: RoutineListRelationFilter
    Favorite?: FavoriteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rol?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    rol?: EnumRolWithAggregatesFilter<"User"> | $Enums.Rol
  }

  export type ProgressWhereInput = {
    AND?: ProgressWhereInput | ProgressWhereInput[]
    OR?: ProgressWhereInput[]
    NOT?: ProgressWhereInput | ProgressWhereInput[]
    id?: IntFilter<"Progress"> | number
    usuario_id?: StringFilter<"Progress"> | string
    ejercicio_id?: IntFilter<"Progress"> | number
    fecha?: DateTimeNullableFilter<"Progress"> | Date | string | null
    peso_usado?: FloatFilter<"Progress"> | number
    repeticiones?: IntFilter<"Progress"> | number
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    ejercicio?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type ProgressOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    fecha?: SortOrderInput | SortOrder
    peso_usado?: SortOrder
    repeticiones?: SortOrder
    usuario?: UserOrderByWithRelationInput
    ejercicio?: ExerciseOrderByWithRelationInput
  }

  export type ProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProgressWhereInput | ProgressWhereInput[]
    OR?: ProgressWhereInput[]
    NOT?: ProgressWhereInput | ProgressWhereInput[]
    usuario_id?: StringFilter<"Progress"> | string
    ejercicio_id?: IntFilter<"Progress"> | number
    fecha?: DateTimeNullableFilter<"Progress"> | Date | string | null
    peso_usado?: FloatFilter<"Progress"> | number
    repeticiones?: IntFilter<"Progress"> | number
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    ejercicio?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id">

  export type ProgressOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    fecha?: SortOrderInput | SortOrder
    peso_usado?: SortOrder
    repeticiones?: SortOrder
    _count?: ProgressCountOrderByAggregateInput
    _avg?: ProgressAvgOrderByAggregateInput
    _max?: ProgressMaxOrderByAggregateInput
    _min?: ProgressMinOrderByAggregateInput
    _sum?: ProgressSumOrderByAggregateInput
  }

  export type ProgressScalarWhereWithAggregatesInput = {
    AND?: ProgressScalarWhereWithAggregatesInput | ProgressScalarWhereWithAggregatesInput[]
    OR?: ProgressScalarWhereWithAggregatesInput[]
    NOT?: ProgressScalarWhereWithAggregatesInput | ProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Progress"> | number
    usuario_id?: StringWithAggregatesFilter<"Progress"> | string
    ejercicio_id?: IntWithAggregatesFilter<"Progress"> | number
    fecha?: DateTimeNullableWithAggregatesFilter<"Progress"> | Date | string | null
    peso_usado?: FloatWithAggregatesFilter<"Progress"> | number
    repeticiones?: IntWithAggregatesFilter<"Progress"> | number
  }

  export type RoutineWhereInput = {
    AND?: RoutineWhereInput | RoutineWhereInput[]
    OR?: RoutineWhereInput[]
    NOT?: RoutineWhereInput | RoutineWhereInput[]
    id?: IntFilter<"Routine"> | number
    usuario_id?: StringFilter<"Routine"> | string
    nombre?: StringFilter<"Routine"> | string
    fecha_creacion?: DateTimeNullableFilter<"Routine"> | Date | string | null
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    Rutina_ejercicio?: Rutina_ejercicioListRelationFilter
  }

  export type RoutineOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    nombre?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    usuario?: UserOrderByWithRelationInput
    Rutina_ejercicio?: Rutina_ejercicioOrderByRelationAggregateInput
  }

  export type RoutineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoutineWhereInput | RoutineWhereInput[]
    OR?: RoutineWhereInput[]
    NOT?: RoutineWhereInput | RoutineWhereInput[]
    usuario_id?: StringFilter<"Routine"> | string
    nombre?: StringFilter<"Routine"> | string
    fecha_creacion?: DateTimeNullableFilter<"Routine"> | Date | string | null
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    Rutina_ejercicio?: Rutina_ejercicioListRelationFilter
  }, "id">

  export type RoutineOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    nombre?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    _count?: RoutineCountOrderByAggregateInput
    _avg?: RoutineAvgOrderByAggregateInput
    _max?: RoutineMaxOrderByAggregateInput
    _min?: RoutineMinOrderByAggregateInput
    _sum?: RoutineSumOrderByAggregateInput
  }

  export type RoutineScalarWhereWithAggregatesInput = {
    AND?: RoutineScalarWhereWithAggregatesInput | RoutineScalarWhereWithAggregatesInput[]
    OR?: RoutineScalarWhereWithAggregatesInput[]
    NOT?: RoutineScalarWhereWithAggregatesInput | RoutineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Routine"> | number
    usuario_id?: StringWithAggregatesFilter<"Routine"> | string
    nombre?: StringWithAggregatesFilter<"Routine"> | string
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"Routine"> | Date | string | null
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: IntFilter<"Favorite"> | number
    usuario_id?: StringFilter<"Favorite"> | string
    ejercicio_id?: IntFilter<"Favorite"> | number
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    ejercicio?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    usuario?: UserOrderByWithRelationInput
    ejercicio?: ExerciseOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    usuario_id?: StringFilter<"Favorite"> | string
    ejercicio_id?: IntFilter<"Favorite"> | number
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    ejercicio?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _avg?: FavoriteAvgOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
    _sum?: FavoriteSumOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Favorite"> | number
    usuario_id?: StringWithAggregatesFilter<"Favorite"> | string
    ejercicio_id?: IntWithAggregatesFilter<"Favorite"> | number
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: IntFilter<"Exercise"> | number
    nombre?: StringFilter<"Exercise"> | string
    musculo?: StringFilter<"Exercise"> | string
    video_img_url?: StringFilter<"Exercise"> | string
    Progreso?: ProgressListRelationFilter
    Favorito?: FavoriteListRelationFilter
    Rutina_ejercicio?: Rutina_ejercicioListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    musculo?: SortOrder
    video_img_url?: SortOrder
    Progreso?: ProgressOrderByRelationAggregateInput
    Favorito?: FavoriteOrderByRelationAggregateInput
    Rutina_ejercicio?: Rutina_ejercicioOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    nombre?: StringFilter<"Exercise"> | string
    musculo?: StringFilter<"Exercise"> | string
    video_img_url?: StringFilter<"Exercise"> | string
    Progreso?: ProgressListRelationFilter
    Favorito?: FavoriteListRelationFilter
    Rutina_ejercicio?: Rutina_ejercicioListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    musculo?: SortOrder
    video_img_url?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _avg?: ExerciseAvgOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
    _sum?: ExerciseSumOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exercise"> | number
    nombre?: StringWithAggregatesFilter<"Exercise"> | string
    musculo?: StringWithAggregatesFilter<"Exercise"> | string
    video_img_url?: StringWithAggregatesFilter<"Exercise"> | string
  }

  export type Rutina_ejercicioWhereInput = {
    AND?: Rutina_ejercicioWhereInput | Rutina_ejercicioWhereInput[]
    OR?: Rutina_ejercicioWhereInput[]
    NOT?: Rutina_ejercicioWhereInput | Rutina_ejercicioWhereInput[]
    id?: IntFilter<"Rutina_ejercicio"> | number
    rutina_id?: IntFilter<"Rutina_ejercicio"> | number
    ejercicio_id?: IntFilter<"Rutina_ejercicio"> | number
    series?: IntFilter<"Rutina_ejercicio"> | number
    repeticiones?: IntFilter<"Rutina_ejercicio"> | number
    rutina?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
    ejercicio?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type Rutina_ejercicioOrderByWithRelationInput = {
    id?: SortOrder
    rutina_id?: SortOrder
    ejercicio_id?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    rutina?: RoutineOrderByWithRelationInput
    ejercicio?: ExerciseOrderByWithRelationInput
  }

  export type Rutina_ejercicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Rutina_ejercicioWhereInput | Rutina_ejercicioWhereInput[]
    OR?: Rutina_ejercicioWhereInput[]
    NOT?: Rutina_ejercicioWhereInput | Rutina_ejercicioWhereInput[]
    rutina_id?: IntFilter<"Rutina_ejercicio"> | number
    ejercicio_id?: IntFilter<"Rutina_ejercicio"> | number
    series?: IntFilter<"Rutina_ejercicio"> | number
    repeticiones?: IntFilter<"Rutina_ejercicio"> | number
    rutina?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
    ejercicio?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id">

  export type Rutina_ejercicioOrderByWithAggregationInput = {
    id?: SortOrder
    rutina_id?: SortOrder
    ejercicio_id?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    _count?: Rutina_ejercicioCountOrderByAggregateInput
    _avg?: Rutina_ejercicioAvgOrderByAggregateInput
    _max?: Rutina_ejercicioMaxOrderByAggregateInput
    _min?: Rutina_ejercicioMinOrderByAggregateInput
    _sum?: Rutina_ejercicioSumOrderByAggregateInput
  }

  export type Rutina_ejercicioScalarWhereWithAggregatesInput = {
    AND?: Rutina_ejercicioScalarWhereWithAggregatesInput | Rutina_ejercicioScalarWhereWithAggregatesInput[]
    OR?: Rutina_ejercicioScalarWhereWithAggregatesInput[]
    NOT?: Rutina_ejercicioScalarWhereWithAggregatesInput | Rutina_ejercicioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rutina_ejercicio"> | number
    rutina_id?: IntWithAggregatesFilter<"Rutina_ejercicio"> | number
    ejercicio_id?: IntWithAggregatesFilter<"Rutina_ejercicio"> | number
    series?: IntWithAggregatesFilter<"Rutina_ejercicio"> | number
    repeticiones?: IntWithAggregatesFilter<"Rutina_ejercicio"> | number
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rol?: $Enums.Rol
    Progress?: ProgressCreateNestedManyWithoutUsuarioInput
    Routine?: RoutineCreateNestedManyWithoutUsuarioInput
    Favorite?: FavoriteCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rol?: $Enums.Rol
    Progress?: ProgressUncheckedCreateNestedManyWithoutUsuarioInput
    Routine?: RoutineUncheckedCreateNestedManyWithoutUsuarioInput
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    Progress?: ProgressUpdateManyWithoutUsuarioNestedInput
    Routine?: RoutineUpdateManyWithoutUsuarioNestedInput
    Favorite?: FavoriteUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    Progress?: ProgressUncheckedUpdateManyWithoutUsuarioNestedInput
    Routine?: RoutineUncheckedUpdateManyWithoutUsuarioNestedInput
    Favorite?: FavoriteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rol?: $Enums.Rol
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
  }

  export type ProgressCreateInput = {
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
    usuario: UserCreateNestedOneWithoutProgressInput
    ejercicio: ExerciseCreateNestedOneWithoutProgresoInput
  }

  export type ProgressUncheckedCreateInput = {
    id?: number
    usuario_id: string
    ejercicio_id: number
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
  }

  export type ProgressUpdateInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    usuario?: UserUpdateOneRequiredWithoutProgressNestedInput
    ejercicio?: ExerciseUpdateOneRequiredWithoutProgresoNestedInput
  }

  export type ProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
    ejercicio_id?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type ProgressCreateManyInput = {
    id?: number
    usuario_id: string
    ejercicio_id: number
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
  }

  export type ProgressUpdateManyMutationInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type ProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
    ejercicio_id?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineCreateInput = {
    nombre: string
    fecha_creacion?: Date | string | null
    usuario: UserCreateNestedOneWithoutRoutineInput
    Rutina_ejercicio?: Rutina_ejercicioCreateNestedManyWithoutRutinaInput
  }

  export type RoutineUncheckedCreateInput = {
    id?: number
    usuario_id: string
    nombre: string
    fecha_creacion?: Date | string | null
    Rutina_ejercicio?: Rutina_ejercicioUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RoutineUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UserUpdateOneRequiredWithoutRoutineNestedInput
    Rutina_ejercicio?: Rutina_ejercicioUpdateManyWithoutRutinaNestedInput
  }

  export type RoutineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rutina_ejercicio?: Rutina_ejercicioUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type RoutineCreateManyInput = {
    id?: number
    usuario_id: string
    nombre: string
    fecha_creacion?: Date | string | null
  }

  export type RoutineUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoutineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FavoriteCreateInput = {
    usuario: UserCreateNestedOneWithoutFavoriteInput
    ejercicio: ExerciseCreateNestedOneWithoutFavoritoInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: number
    usuario_id: string
    ejercicio_id: number
  }

  export type FavoriteUpdateInput = {
    usuario?: UserUpdateOneRequiredWithoutFavoriteNestedInput
    ejercicio?: ExerciseUpdateOneRequiredWithoutFavoritoNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
    ejercicio_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteCreateManyInput = {
    id?: number
    usuario_id: string
    ejercicio_id: number
  }

  export type FavoriteUpdateManyMutationInput = {

  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
    ejercicio_id?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseCreateInput = {
    nombre: string
    musculo: string
    video_img_url: string
    Progreso?: ProgressCreateNestedManyWithoutEjercicioInput
    Favorito?: FavoriteCreateNestedManyWithoutEjercicioInput
    Rutina_ejercicio?: Rutina_ejercicioCreateNestedManyWithoutEjercicioInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: number
    nombre: string
    musculo: string
    video_img_url: string
    Progreso?: ProgressUncheckedCreateNestedManyWithoutEjercicioInput
    Favorito?: FavoriteUncheckedCreateNestedManyWithoutEjercicioInput
    Rutina_ejercicio?: Rutina_ejercicioUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type ExerciseUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Progreso?: ProgressUpdateManyWithoutEjercicioNestedInput
    Favorito?: FavoriteUpdateManyWithoutEjercicioNestedInput
    Rutina_ejercicio?: Rutina_ejercicioUpdateManyWithoutEjercicioNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Progreso?: ProgressUncheckedUpdateManyWithoutEjercicioNestedInput
    Favorito?: FavoriteUncheckedUpdateManyWithoutEjercicioNestedInput
    Rutina_ejercicio?: Rutina_ejercicioUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: number
    nombre: string
    musculo: string
    video_img_url: string
  }

  export type ExerciseUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
  }

  export type Rutina_ejercicioCreateInput = {
    series: number
    repeticiones: number
    rutina: RoutineCreateNestedOneWithoutRutina_ejercicioInput
    ejercicio: ExerciseCreateNestedOneWithoutRutina_ejercicioInput
  }

  export type Rutina_ejercicioUncheckedCreateInput = {
    id?: number
    rutina_id: number
    ejercicio_id: number
    series: number
    repeticiones: number
  }

  export type Rutina_ejercicioUpdateInput = {
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    rutina?: RoutineUpdateOneRequiredWithoutRutina_ejercicioNestedInput
    ejercicio?: ExerciseUpdateOneRequiredWithoutRutina_ejercicioNestedInput
  }

  export type Rutina_ejercicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutina_id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type Rutina_ejercicioCreateManyInput = {
    id?: number
    rutina_id: number
    ejercicio_id: number
    series: number
    repeticiones: number
  }

  export type Rutina_ejercicioUpdateManyMutationInput = {
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type Rutina_ejercicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutina_id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
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
    every?: ProgressWhereInput
    some?: ProgressWhereInput
    none?: ProgressWhereInput
  }

  export type RoutineListRelationFilter = {
    every?: RoutineWhereInput
    some?: RoutineWhereInput
    none?: RoutineWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rol?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rol?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rol?: SortOrder
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
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type ProgressCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    fecha?: SortOrder
    peso_usado?: SortOrder
    repeticiones?: SortOrder
  }

  export type ProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    ejercicio_id?: SortOrder
    peso_usado?: SortOrder
    repeticiones?: SortOrder
  }

  export type ProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    fecha?: SortOrder
    peso_usado?: SortOrder
    repeticiones?: SortOrder
  }

  export type ProgressMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    fecha?: SortOrder
    peso_usado?: SortOrder
    repeticiones?: SortOrder
  }

  export type ProgressSumOrderByAggregateInput = {
    id?: SortOrder
    ejercicio_id?: SortOrder
    peso_usado?: SortOrder
    repeticiones?: SortOrder
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

  export type Rutina_ejercicioListRelationFilter = {
    every?: Rutina_ejercicioWhereInput
    some?: Rutina_ejercicioWhereInput
    none?: Rutina_ejercicioWhereInput
  }

  export type Rutina_ejercicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    nombre?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type RoutineAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoutineMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    nombre?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type RoutineMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    nombre?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type RoutineSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
  }

  export type FavoriteAvgOrderByAggregateInput = {
    id?: SortOrder
    ejercicio_id?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
  }

  export type FavoriteSumOrderByAggregateInput = {
    id?: SortOrder
    ejercicio_id?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    musculo?: SortOrder
    video_img_url?: SortOrder
  }

  export type ExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    musculo?: SortOrder
    video_img_url?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    musculo?: SortOrder
    video_img_url?: SortOrder
  }

  export type ExerciseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoutineScalarRelationFilter = {
    is?: RoutineWhereInput
    isNot?: RoutineWhereInput
  }

  export type Rutina_ejercicioCountOrderByAggregateInput = {
    id?: SortOrder
    rutina_id?: SortOrder
    ejercicio_id?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
  }

  export type Rutina_ejercicioAvgOrderByAggregateInput = {
    id?: SortOrder
    rutina_id?: SortOrder
    ejercicio_id?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
  }

  export type Rutina_ejercicioMaxOrderByAggregateInput = {
    id?: SortOrder
    rutina_id?: SortOrder
    ejercicio_id?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
  }

  export type Rutina_ejercicioMinOrderByAggregateInput = {
    id?: SortOrder
    rutina_id?: SortOrder
    ejercicio_id?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
  }

  export type Rutina_ejercicioSumOrderByAggregateInput = {
    id?: SortOrder
    rutina_id?: SortOrder
    ejercicio_id?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
  }

  export type ProgressCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProgressCreateWithoutUsuarioInput, ProgressUncheckedCreateWithoutUsuarioInput> | ProgressCreateWithoutUsuarioInput[] | ProgressUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUsuarioInput | ProgressCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProgressCreateManyUsuarioInputEnvelope
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
  }

  export type RoutineCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RoutineCreateWithoutUsuarioInput, RoutineUncheckedCreateWithoutUsuarioInput> | RoutineCreateWithoutUsuarioInput[] | RoutineUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUsuarioInput | RoutineCreateOrConnectWithoutUsuarioInput[]
    createMany?: RoutineCreateManyUsuarioInputEnvelope
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FavoriteCreateWithoutUsuarioInput, FavoriteUncheckedCreateWithoutUsuarioInput> | FavoriteCreateWithoutUsuarioInput[] | FavoriteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUsuarioInput | FavoriteCreateOrConnectWithoutUsuarioInput[]
    createMany?: FavoriteCreateManyUsuarioInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ProgressUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProgressCreateWithoutUsuarioInput, ProgressUncheckedCreateWithoutUsuarioInput> | ProgressCreateWithoutUsuarioInput[] | ProgressUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUsuarioInput | ProgressCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProgressCreateManyUsuarioInputEnvelope
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
  }

  export type RoutineUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RoutineCreateWithoutUsuarioInput, RoutineUncheckedCreateWithoutUsuarioInput> | RoutineCreateWithoutUsuarioInput[] | RoutineUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUsuarioInput | RoutineCreateOrConnectWithoutUsuarioInput[]
    createMany?: RoutineCreateManyUsuarioInputEnvelope
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FavoriteCreateWithoutUsuarioInput, FavoriteUncheckedCreateWithoutUsuarioInput> | FavoriteCreateWithoutUsuarioInput[] | FavoriteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUsuarioInput | FavoriteCreateOrConnectWithoutUsuarioInput[]
    createMany?: FavoriteCreateManyUsuarioInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type ProgressUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProgressCreateWithoutUsuarioInput, ProgressUncheckedCreateWithoutUsuarioInput> | ProgressCreateWithoutUsuarioInput[] | ProgressUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUsuarioInput | ProgressCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProgressUpsertWithWhereUniqueWithoutUsuarioInput | ProgressUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProgressCreateManyUsuarioInputEnvelope
    set?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    disconnect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    delete?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    update?: ProgressUpdateWithWhereUniqueWithoutUsuarioInput | ProgressUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProgressUpdateManyWithWhereWithoutUsuarioInput | ProgressUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
  }

  export type RoutineUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RoutineCreateWithoutUsuarioInput, RoutineUncheckedCreateWithoutUsuarioInput> | RoutineCreateWithoutUsuarioInput[] | RoutineUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUsuarioInput | RoutineCreateOrConnectWithoutUsuarioInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutUsuarioInput | RoutineUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RoutineCreateManyUsuarioInputEnvelope
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutUsuarioInput | RoutineUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutUsuarioInput | RoutineUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FavoriteCreateWithoutUsuarioInput, FavoriteUncheckedCreateWithoutUsuarioInput> | FavoriteCreateWithoutUsuarioInput[] | FavoriteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUsuarioInput | FavoriteCreateOrConnectWithoutUsuarioInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUsuarioInput | FavoriteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FavoriteCreateManyUsuarioInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUsuarioInput | FavoriteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUsuarioInput | FavoriteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ProgressUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProgressCreateWithoutUsuarioInput, ProgressUncheckedCreateWithoutUsuarioInput> | ProgressCreateWithoutUsuarioInput[] | ProgressUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUsuarioInput | ProgressCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProgressUpsertWithWhereUniqueWithoutUsuarioInput | ProgressUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProgressCreateManyUsuarioInputEnvelope
    set?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    disconnect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    delete?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    update?: ProgressUpdateWithWhereUniqueWithoutUsuarioInput | ProgressUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProgressUpdateManyWithWhereWithoutUsuarioInput | ProgressUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
  }

  export type RoutineUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RoutineCreateWithoutUsuarioInput, RoutineUncheckedCreateWithoutUsuarioInput> | RoutineCreateWithoutUsuarioInput[] | RoutineUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUsuarioInput | RoutineCreateOrConnectWithoutUsuarioInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutUsuarioInput | RoutineUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RoutineCreateManyUsuarioInputEnvelope
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutUsuarioInput | RoutineUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutUsuarioInput | RoutineUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FavoriteCreateWithoutUsuarioInput, FavoriteUncheckedCreateWithoutUsuarioInput> | FavoriteCreateWithoutUsuarioInput[] | FavoriteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUsuarioInput | FavoriteCreateOrConnectWithoutUsuarioInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUsuarioInput | FavoriteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FavoriteCreateManyUsuarioInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUsuarioInput | FavoriteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUsuarioInput | FavoriteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProgressInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    connect?: UserWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutProgresoInput = {
    create?: XOR<ExerciseCreateWithoutProgresoInput, ExerciseUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutProgresoInput
    connect?: ExerciseWhereUniqueInput
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

  export type UserUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    upsert?: UserUpsertWithoutProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressInput, UserUpdateWithoutProgressInput>, UserUncheckedUpdateWithoutProgressInput>
  }

  export type ExerciseUpdateOneRequiredWithoutProgresoNestedInput = {
    create?: XOR<ExerciseCreateWithoutProgresoInput, ExerciseUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutProgresoInput
    upsert?: ExerciseUpsertWithoutProgresoInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutProgresoInput, ExerciseUpdateWithoutProgresoInput>, ExerciseUncheckedUpdateWithoutProgresoInput>
  }

  export type UserCreateNestedOneWithoutRoutineInput = {
    create?: XOR<UserCreateWithoutRoutineInput, UserUncheckedCreateWithoutRoutineInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutineInput
    connect?: UserWhereUniqueInput
  }

  export type Rutina_ejercicioCreateNestedManyWithoutRutinaInput = {
    create?: XOR<Rutina_ejercicioCreateWithoutRutinaInput, Rutina_ejercicioUncheckedCreateWithoutRutinaInput> | Rutina_ejercicioCreateWithoutRutinaInput[] | Rutina_ejercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: Rutina_ejercicioCreateOrConnectWithoutRutinaInput | Rutina_ejercicioCreateOrConnectWithoutRutinaInput[]
    createMany?: Rutina_ejercicioCreateManyRutinaInputEnvelope
    connect?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
  }

  export type Rutina_ejercicioUncheckedCreateNestedManyWithoutRutinaInput = {
    create?: XOR<Rutina_ejercicioCreateWithoutRutinaInput, Rutina_ejercicioUncheckedCreateWithoutRutinaInput> | Rutina_ejercicioCreateWithoutRutinaInput[] | Rutina_ejercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: Rutina_ejercicioCreateOrConnectWithoutRutinaInput | Rutina_ejercicioCreateOrConnectWithoutRutinaInput[]
    createMany?: Rutina_ejercicioCreateManyRutinaInputEnvelope
    connect?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRoutineNestedInput = {
    create?: XOR<UserCreateWithoutRoutineInput, UserUncheckedCreateWithoutRoutineInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutineInput
    upsert?: UserUpsertWithoutRoutineInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoutineInput, UserUpdateWithoutRoutineInput>, UserUncheckedUpdateWithoutRoutineInput>
  }

  export type Rutina_ejercicioUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<Rutina_ejercicioCreateWithoutRutinaInput, Rutina_ejercicioUncheckedCreateWithoutRutinaInput> | Rutina_ejercicioCreateWithoutRutinaInput[] | Rutina_ejercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: Rutina_ejercicioCreateOrConnectWithoutRutinaInput | Rutina_ejercicioCreateOrConnectWithoutRutinaInput[]
    upsert?: Rutina_ejercicioUpsertWithWhereUniqueWithoutRutinaInput | Rutina_ejercicioUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: Rutina_ejercicioCreateManyRutinaInputEnvelope
    set?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    disconnect?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    delete?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    connect?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    update?: Rutina_ejercicioUpdateWithWhereUniqueWithoutRutinaInput | Rutina_ejercicioUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: Rutina_ejercicioUpdateManyWithWhereWithoutRutinaInput | Rutina_ejercicioUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: Rutina_ejercicioScalarWhereInput | Rutina_ejercicioScalarWhereInput[]
  }

  export type Rutina_ejercicioUncheckedUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<Rutina_ejercicioCreateWithoutRutinaInput, Rutina_ejercicioUncheckedCreateWithoutRutinaInput> | Rutina_ejercicioCreateWithoutRutinaInput[] | Rutina_ejercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: Rutina_ejercicioCreateOrConnectWithoutRutinaInput | Rutina_ejercicioCreateOrConnectWithoutRutinaInput[]
    upsert?: Rutina_ejercicioUpsertWithWhereUniqueWithoutRutinaInput | Rutina_ejercicioUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: Rutina_ejercicioCreateManyRutinaInputEnvelope
    set?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    disconnect?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    delete?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    connect?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    update?: Rutina_ejercicioUpdateWithWhereUniqueWithoutRutinaInput | Rutina_ejercicioUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: Rutina_ejercicioUpdateManyWithWhereWithoutRutinaInput | Rutina_ejercicioUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: Rutina_ejercicioScalarWhereInput | Rutina_ejercicioScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteInput
    connect?: UserWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutFavoritoInput = {
    create?: XOR<ExerciseCreateWithoutFavoritoInput, ExerciseUncheckedCreateWithoutFavoritoInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutFavoritoInput
    connect?: ExerciseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteInput
    upsert?: UserUpsertWithoutFavoriteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteInput, UserUpdateWithoutFavoriteInput>, UserUncheckedUpdateWithoutFavoriteInput>
  }

  export type ExerciseUpdateOneRequiredWithoutFavoritoNestedInput = {
    create?: XOR<ExerciseCreateWithoutFavoritoInput, ExerciseUncheckedCreateWithoutFavoritoInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutFavoritoInput
    upsert?: ExerciseUpsertWithoutFavoritoInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutFavoritoInput, ExerciseUpdateWithoutFavoritoInput>, ExerciseUncheckedUpdateWithoutFavoritoInput>
  }

  export type ProgressCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<ProgressCreateWithoutEjercicioInput, ProgressUncheckedCreateWithoutEjercicioInput> | ProgressCreateWithoutEjercicioInput[] | ProgressUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutEjercicioInput | ProgressCreateOrConnectWithoutEjercicioInput[]
    createMany?: ProgressCreateManyEjercicioInputEnvelope
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<FavoriteCreateWithoutEjercicioInput, FavoriteUncheckedCreateWithoutEjercicioInput> | FavoriteCreateWithoutEjercicioInput[] | FavoriteUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutEjercicioInput | FavoriteCreateOrConnectWithoutEjercicioInput[]
    createMany?: FavoriteCreateManyEjercicioInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type Rutina_ejercicioCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<Rutina_ejercicioCreateWithoutEjercicioInput, Rutina_ejercicioUncheckedCreateWithoutEjercicioInput> | Rutina_ejercicioCreateWithoutEjercicioInput[] | Rutina_ejercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: Rutina_ejercicioCreateOrConnectWithoutEjercicioInput | Rutina_ejercicioCreateOrConnectWithoutEjercicioInput[]
    createMany?: Rutina_ejercicioCreateManyEjercicioInputEnvelope
    connect?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
  }

  export type ProgressUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<ProgressCreateWithoutEjercicioInput, ProgressUncheckedCreateWithoutEjercicioInput> | ProgressCreateWithoutEjercicioInput[] | ProgressUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutEjercicioInput | ProgressCreateOrConnectWithoutEjercicioInput[]
    createMany?: ProgressCreateManyEjercicioInputEnvelope
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<FavoriteCreateWithoutEjercicioInput, FavoriteUncheckedCreateWithoutEjercicioInput> | FavoriteCreateWithoutEjercicioInput[] | FavoriteUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutEjercicioInput | FavoriteCreateOrConnectWithoutEjercicioInput[]
    createMany?: FavoriteCreateManyEjercicioInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type Rutina_ejercicioUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<Rutina_ejercicioCreateWithoutEjercicioInput, Rutina_ejercicioUncheckedCreateWithoutEjercicioInput> | Rutina_ejercicioCreateWithoutEjercicioInput[] | Rutina_ejercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: Rutina_ejercicioCreateOrConnectWithoutEjercicioInput | Rutina_ejercicioCreateOrConnectWithoutEjercicioInput[]
    createMany?: Rutina_ejercicioCreateManyEjercicioInputEnvelope
    connect?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
  }

  export type ProgressUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<ProgressCreateWithoutEjercicioInput, ProgressUncheckedCreateWithoutEjercicioInput> | ProgressCreateWithoutEjercicioInput[] | ProgressUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutEjercicioInput | ProgressCreateOrConnectWithoutEjercicioInput[]
    upsert?: ProgressUpsertWithWhereUniqueWithoutEjercicioInput | ProgressUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: ProgressCreateManyEjercicioInputEnvelope
    set?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    disconnect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    delete?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    update?: ProgressUpdateWithWhereUniqueWithoutEjercicioInput | ProgressUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: ProgressUpdateManyWithWhereWithoutEjercicioInput | ProgressUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<FavoriteCreateWithoutEjercicioInput, FavoriteUncheckedCreateWithoutEjercicioInput> | FavoriteCreateWithoutEjercicioInput[] | FavoriteUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutEjercicioInput | FavoriteCreateOrConnectWithoutEjercicioInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutEjercicioInput | FavoriteUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: FavoriteCreateManyEjercicioInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutEjercicioInput | FavoriteUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutEjercicioInput | FavoriteUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type Rutina_ejercicioUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<Rutina_ejercicioCreateWithoutEjercicioInput, Rutina_ejercicioUncheckedCreateWithoutEjercicioInput> | Rutina_ejercicioCreateWithoutEjercicioInput[] | Rutina_ejercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: Rutina_ejercicioCreateOrConnectWithoutEjercicioInput | Rutina_ejercicioCreateOrConnectWithoutEjercicioInput[]
    upsert?: Rutina_ejercicioUpsertWithWhereUniqueWithoutEjercicioInput | Rutina_ejercicioUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: Rutina_ejercicioCreateManyEjercicioInputEnvelope
    set?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    disconnect?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    delete?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    connect?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    update?: Rutina_ejercicioUpdateWithWhereUniqueWithoutEjercicioInput | Rutina_ejercicioUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: Rutina_ejercicioUpdateManyWithWhereWithoutEjercicioInput | Rutina_ejercicioUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: Rutina_ejercicioScalarWhereInput | Rutina_ejercicioScalarWhereInput[]
  }

  export type ProgressUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<ProgressCreateWithoutEjercicioInput, ProgressUncheckedCreateWithoutEjercicioInput> | ProgressCreateWithoutEjercicioInput[] | ProgressUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutEjercicioInput | ProgressCreateOrConnectWithoutEjercicioInput[]
    upsert?: ProgressUpsertWithWhereUniqueWithoutEjercicioInput | ProgressUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: ProgressCreateManyEjercicioInputEnvelope
    set?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    disconnect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    delete?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    update?: ProgressUpdateWithWhereUniqueWithoutEjercicioInput | ProgressUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: ProgressUpdateManyWithWhereWithoutEjercicioInput | ProgressUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<FavoriteCreateWithoutEjercicioInput, FavoriteUncheckedCreateWithoutEjercicioInput> | FavoriteCreateWithoutEjercicioInput[] | FavoriteUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutEjercicioInput | FavoriteCreateOrConnectWithoutEjercicioInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutEjercicioInput | FavoriteUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: FavoriteCreateManyEjercicioInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutEjercicioInput | FavoriteUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutEjercicioInput | FavoriteUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type Rutina_ejercicioUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<Rutina_ejercicioCreateWithoutEjercicioInput, Rutina_ejercicioUncheckedCreateWithoutEjercicioInput> | Rutina_ejercicioCreateWithoutEjercicioInput[] | Rutina_ejercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: Rutina_ejercicioCreateOrConnectWithoutEjercicioInput | Rutina_ejercicioCreateOrConnectWithoutEjercicioInput[]
    upsert?: Rutina_ejercicioUpsertWithWhereUniqueWithoutEjercicioInput | Rutina_ejercicioUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: Rutina_ejercicioCreateManyEjercicioInputEnvelope
    set?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    disconnect?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    delete?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    connect?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
    update?: Rutina_ejercicioUpdateWithWhereUniqueWithoutEjercicioInput | Rutina_ejercicioUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: Rutina_ejercicioUpdateManyWithWhereWithoutEjercicioInput | Rutina_ejercicioUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: Rutina_ejercicioScalarWhereInput | Rutina_ejercicioScalarWhereInput[]
  }

  export type RoutineCreateNestedOneWithoutRutina_ejercicioInput = {
    create?: XOR<RoutineCreateWithoutRutina_ejercicioInput, RoutineUncheckedCreateWithoutRutina_ejercicioInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutRutina_ejercicioInput
    connect?: RoutineWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutRutina_ejercicioInput = {
    create?: XOR<ExerciseCreateWithoutRutina_ejercicioInput, ExerciseUncheckedCreateWithoutRutina_ejercicioInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutRutina_ejercicioInput
    connect?: ExerciseWhereUniqueInput
  }

  export type RoutineUpdateOneRequiredWithoutRutina_ejercicioNestedInput = {
    create?: XOR<RoutineCreateWithoutRutina_ejercicioInput, RoutineUncheckedCreateWithoutRutina_ejercicioInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutRutina_ejercicioInput
    upsert?: RoutineUpsertWithoutRutina_ejercicioInput
    connect?: RoutineWhereUniqueInput
    update?: XOR<XOR<RoutineUpdateToOneWithWhereWithoutRutina_ejercicioInput, RoutineUpdateWithoutRutina_ejercicioInput>, RoutineUncheckedUpdateWithoutRutina_ejercicioInput>
  }

  export type ExerciseUpdateOneRequiredWithoutRutina_ejercicioNestedInput = {
    create?: XOR<ExerciseCreateWithoutRutina_ejercicioInput, ExerciseUncheckedCreateWithoutRutina_ejercicioInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutRutina_ejercicioInput
    upsert?: ExerciseUpsertWithoutRutina_ejercicioInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutRutina_ejercicioInput, ExerciseUpdateWithoutRutina_ejercicioInput>, ExerciseUncheckedUpdateWithoutRutina_ejercicioInput>
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

  export type ProgressCreateWithoutUsuarioInput = {
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
    ejercicio: ExerciseCreateNestedOneWithoutProgresoInput
  }

  export type ProgressUncheckedCreateWithoutUsuarioInput = {
    id?: number
    ejercicio_id: number
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
  }

  export type ProgressCreateOrConnectWithoutUsuarioInput = {
    where: ProgressWhereUniqueInput
    create: XOR<ProgressCreateWithoutUsuarioInput, ProgressUncheckedCreateWithoutUsuarioInput>
  }

  export type ProgressCreateManyUsuarioInputEnvelope = {
    data: ProgressCreateManyUsuarioInput | ProgressCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RoutineCreateWithoutUsuarioInput = {
    nombre: string
    fecha_creacion?: Date | string | null
    Rutina_ejercicio?: Rutina_ejercicioCreateNestedManyWithoutRutinaInput
  }

  export type RoutineUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nombre: string
    fecha_creacion?: Date | string | null
    Rutina_ejercicio?: Rutina_ejercicioUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RoutineCreateOrConnectWithoutUsuarioInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutUsuarioInput, RoutineUncheckedCreateWithoutUsuarioInput>
  }

  export type RoutineCreateManyUsuarioInputEnvelope = {
    data: RoutineCreateManyUsuarioInput | RoutineCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutUsuarioInput = {
    ejercicio: ExerciseCreateNestedOneWithoutFavoritoInput
  }

  export type FavoriteUncheckedCreateWithoutUsuarioInput = {
    id?: number
    ejercicio_id: number
  }

  export type FavoriteCreateOrConnectWithoutUsuarioInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUsuarioInput, FavoriteUncheckedCreateWithoutUsuarioInput>
  }

  export type FavoriteCreateManyUsuarioInputEnvelope = {
    data: FavoriteCreateManyUsuarioInput | FavoriteCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ProgressUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ProgressWhereUniqueInput
    update: XOR<ProgressUpdateWithoutUsuarioInput, ProgressUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProgressCreateWithoutUsuarioInput, ProgressUncheckedCreateWithoutUsuarioInput>
  }

  export type ProgressUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ProgressWhereUniqueInput
    data: XOR<ProgressUpdateWithoutUsuarioInput, ProgressUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProgressUpdateManyWithWhereWithoutUsuarioInput = {
    where: ProgressScalarWhereInput
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ProgressScalarWhereInput = {
    AND?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
    OR?: ProgressScalarWhereInput[]
    NOT?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
    id?: IntFilter<"Progress"> | number
    usuario_id?: StringFilter<"Progress"> | string
    ejercicio_id?: IntFilter<"Progress"> | number
    fecha?: DateTimeNullableFilter<"Progress"> | Date | string | null
    peso_usado?: FloatFilter<"Progress"> | number
    repeticiones?: IntFilter<"Progress"> | number
  }

  export type RoutineUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RoutineWhereUniqueInput
    update: XOR<RoutineUpdateWithoutUsuarioInput, RoutineUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RoutineCreateWithoutUsuarioInput, RoutineUncheckedCreateWithoutUsuarioInput>
  }

  export type RoutineUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RoutineWhereUniqueInput
    data: XOR<RoutineUpdateWithoutUsuarioInput, RoutineUncheckedUpdateWithoutUsuarioInput>
  }

  export type RoutineUpdateManyWithWhereWithoutUsuarioInput = {
    where: RoutineScalarWhereInput
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RoutineScalarWhereInput = {
    AND?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
    OR?: RoutineScalarWhereInput[]
    NOT?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
    id?: IntFilter<"Routine"> | number
    usuario_id?: StringFilter<"Routine"> | string
    nombre?: StringFilter<"Routine"> | string
    fecha_creacion?: DateTimeNullableFilter<"Routine"> | Date | string | null
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUsuarioInput, FavoriteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FavoriteCreateWithoutUsuarioInput, FavoriteUncheckedCreateWithoutUsuarioInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUsuarioInput, FavoriteUncheckedUpdateWithoutUsuarioInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUsuarioInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: IntFilter<"Favorite"> | number
    usuario_id?: StringFilter<"Favorite"> | string
    ejercicio_id?: IntFilter<"Favorite"> | number
  }

  export type UserCreateWithoutProgressInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rol?: $Enums.Rol
    Routine?: RoutineCreateNestedManyWithoutUsuarioInput
    Favorite?: FavoriteCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutProgressInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rol?: $Enums.Rol
    Routine?: RoutineUncheckedCreateNestedManyWithoutUsuarioInput
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
  }

  export type ExerciseCreateWithoutProgresoInput = {
    nombre: string
    musculo: string
    video_img_url: string
    Favorito?: FavoriteCreateNestedManyWithoutEjercicioInput
    Rutina_ejercicio?: Rutina_ejercicioCreateNestedManyWithoutEjercicioInput
  }

  export type ExerciseUncheckedCreateWithoutProgresoInput = {
    id?: number
    nombre: string
    musculo: string
    video_img_url: string
    Favorito?: FavoriteUncheckedCreateNestedManyWithoutEjercicioInput
    Rutina_ejercicio?: Rutina_ejercicioUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type ExerciseCreateOrConnectWithoutProgresoInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutProgresoInput, ExerciseUncheckedCreateWithoutProgresoInput>
  }

  export type UserUpsertWithoutProgressInput = {
    update: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
  }

  export type UserUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    Routine?: RoutineUpdateManyWithoutUsuarioNestedInput
    Favorite?: FavoriteUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    Routine?: RoutineUncheckedUpdateManyWithoutUsuarioNestedInput
    Favorite?: FavoriteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ExerciseUpsertWithoutProgresoInput = {
    update: XOR<ExerciseUpdateWithoutProgresoInput, ExerciseUncheckedUpdateWithoutProgresoInput>
    create: XOR<ExerciseCreateWithoutProgresoInput, ExerciseUncheckedCreateWithoutProgresoInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutProgresoInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutProgresoInput, ExerciseUncheckedUpdateWithoutProgresoInput>
  }

  export type ExerciseUpdateWithoutProgresoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Favorito?: FavoriteUpdateManyWithoutEjercicioNestedInput
    Rutina_ejercicio?: Rutina_ejercicioUpdateManyWithoutEjercicioNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutProgresoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Favorito?: FavoriteUncheckedUpdateManyWithoutEjercicioNestedInput
    Rutina_ejercicio?: Rutina_ejercicioUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type UserCreateWithoutRoutineInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rol?: $Enums.Rol
    Progress?: ProgressCreateNestedManyWithoutUsuarioInput
    Favorite?: FavoriteCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutRoutineInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rol?: $Enums.Rol
    Progress?: ProgressUncheckedCreateNestedManyWithoutUsuarioInput
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutRoutineInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoutineInput, UserUncheckedCreateWithoutRoutineInput>
  }

  export type Rutina_ejercicioCreateWithoutRutinaInput = {
    series: number
    repeticiones: number
    ejercicio: ExerciseCreateNestedOneWithoutRutina_ejercicioInput
  }

  export type Rutina_ejercicioUncheckedCreateWithoutRutinaInput = {
    id?: number
    ejercicio_id: number
    series: number
    repeticiones: number
  }

  export type Rutina_ejercicioCreateOrConnectWithoutRutinaInput = {
    where: Rutina_ejercicioWhereUniqueInput
    create: XOR<Rutina_ejercicioCreateWithoutRutinaInput, Rutina_ejercicioUncheckedCreateWithoutRutinaInput>
  }

  export type Rutina_ejercicioCreateManyRutinaInputEnvelope = {
    data: Rutina_ejercicioCreateManyRutinaInput | Rutina_ejercicioCreateManyRutinaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoutineInput = {
    update: XOR<UserUpdateWithoutRoutineInput, UserUncheckedUpdateWithoutRoutineInput>
    create: XOR<UserCreateWithoutRoutineInput, UserUncheckedCreateWithoutRoutineInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoutineInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoutineInput, UserUncheckedUpdateWithoutRoutineInput>
  }

  export type UserUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    Progress?: ProgressUpdateManyWithoutUsuarioNestedInput
    Favorite?: FavoriteUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    Progress?: ProgressUncheckedUpdateManyWithoutUsuarioNestedInput
    Favorite?: FavoriteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type Rutina_ejercicioUpsertWithWhereUniqueWithoutRutinaInput = {
    where: Rutina_ejercicioWhereUniqueInput
    update: XOR<Rutina_ejercicioUpdateWithoutRutinaInput, Rutina_ejercicioUncheckedUpdateWithoutRutinaInput>
    create: XOR<Rutina_ejercicioCreateWithoutRutinaInput, Rutina_ejercicioUncheckedCreateWithoutRutinaInput>
  }

  export type Rutina_ejercicioUpdateWithWhereUniqueWithoutRutinaInput = {
    where: Rutina_ejercicioWhereUniqueInput
    data: XOR<Rutina_ejercicioUpdateWithoutRutinaInput, Rutina_ejercicioUncheckedUpdateWithoutRutinaInput>
  }

  export type Rutina_ejercicioUpdateManyWithWhereWithoutRutinaInput = {
    where: Rutina_ejercicioScalarWhereInput
    data: XOR<Rutina_ejercicioUpdateManyMutationInput, Rutina_ejercicioUncheckedUpdateManyWithoutRutinaInput>
  }

  export type Rutina_ejercicioScalarWhereInput = {
    AND?: Rutina_ejercicioScalarWhereInput | Rutina_ejercicioScalarWhereInput[]
    OR?: Rutina_ejercicioScalarWhereInput[]
    NOT?: Rutina_ejercicioScalarWhereInput | Rutina_ejercicioScalarWhereInput[]
    id?: IntFilter<"Rutina_ejercicio"> | number
    rutina_id?: IntFilter<"Rutina_ejercicio"> | number
    ejercicio_id?: IntFilter<"Rutina_ejercicio"> | number
    series?: IntFilter<"Rutina_ejercicio"> | number
    repeticiones?: IntFilter<"Rutina_ejercicio"> | number
  }

  export type UserCreateWithoutFavoriteInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rol?: $Enums.Rol
    Progress?: ProgressCreateNestedManyWithoutUsuarioInput
    Routine?: RoutineCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutFavoriteInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rol?: $Enums.Rol
    Progress?: ProgressUncheckedCreateNestedManyWithoutUsuarioInput
    Routine?: RoutineUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutFavoriteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
  }

  export type ExerciseCreateWithoutFavoritoInput = {
    nombre: string
    musculo: string
    video_img_url: string
    Progreso?: ProgressCreateNestedManyWithoutEjercicioInput
    Rutina_ejercicio?: Rutina_ejercicioCreateNestedManyWithoutEjercicioInput
  }

  export type ExerciseUncheckedCreateWithoutFavoritoInput = {
    id?: number
    nombre: string
    musculo: string
    video_img_url: string
    Progreso?: ProgressUncheckedCreateNestedManyWithoutEjercicioInput
    Rutina_ejercicio?: Rutina_ejercicioUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type ExerciseCreateOrConnectWithoutFavoritoInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutFavoritoInput, ExerciseUncheckedCreateWithoutFavoritoInput>
  }

  export type UserUpsertWithoutFavoriteInput = {
    update: XOR<UserUpdateWithoutFavoriteInput, UserUncheckedUpdateWithoutFavoriteInput>
    create: XOR<UserCreateWithoutFavoriteInput, UserUncheckedCreateWithoutFavoriteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteInput, UserUncheckedUpdateWithoutFavoriteInput>
  }

  export type UserUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    Progress?: ProgressUpdateManyWithoutUsuarioNestedInput
    Routine?: RoutineUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    Progress?: ProgressUncheckedUpdateManyWithoutUsuarioNestedInput
    Routine?: RoutineUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ExerciseUpsertWithoutFavoritoInput = {
    update: XOR<ExerciseUpdateWithoutFavoritoInput, ExerciseUncheckedUpdateWithoutFavoritoInput>
    create: XOR<ExerciseCreateWithoutFavoritoInput, ExerciseUncheckedCreateWithoutFavoritoInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutFavoritoInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutFavoritoInput, ExerciseUncheckedUpdateWithoutFavoritoInput>
  }

  export type ExerciseUpdateWithoutFavoritoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Progreso?: ProgressUpdateManyWithoutEjercicioNestedInput
    Rutina_ejercicio?: Rutina_ejercicioUpdateManyWithoutEjercicioNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutFavoritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Progreso?: ProgressUncheckedUpdateManyWithoutEjercicioNestedInput
    Rutina_ejercicio?: Rutina_ejercicioUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type ProgressCreateWithoutEjercicioInput = {
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
    usuario: UserCreateNestedOneWithoutProgressInput
  }

  export type ProgressUncheckedCreateWithoutEjercicioInput = {
    id?: number
    usuario_id: string
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
  }

  export type ProgressCreateOrConnectWithoutEjercicioInput = {
    where: ProgressWhereUniqueInput
    create: XOR<ProgressCreateWithoutEjercicioInput, ProgressUncheckedCreateWithoutEjercicioInput>
  }

  export type ProgressCreateManyEjercicioInputEnvelope = {
    data: ProgressCreateManyEjercicioInput | ProgressCreateManyEjercicioInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutEjercicioInput = {
    usuario: UserCreateNestedOneWithoutFavoriteInput
  }

  export type FavoriteUncheckedCreateWithoutEjercicioInput = {
    id?: number
    usuario_id: string
  }

  export type FavoriteCreateOrConnectWithoutEjercicioInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutEjercicioInput, FavoriteUncheckedCreateWithoutEjercicioInput>
  }

  export type FavoriteCreateManyEjercicioInputEnvelope = {
    data: FavoriteCreateManyEjercicioInput | FavoriteCreateManyEjercicioInput[]
    skipDuplicates?: boolean
  }

  export type Rutina_ejercicioCreateWithoutEjercicioInput = {
    series: number
    repeticiones: number
    rutina: RoutineCreateNestedOneWithoutRutina_ejercicioInput
  }

  export type Rutina_ejercicioUncheckedCreateWithoutEjercicioInput = {
    id?: number
    rutina_id: number
    series: number
    repeticiones: number
  }

  export type Rutina_ejercicioCreateOrConnectWithoutEjercicioInput = {
    where: Rutina_ejercicioWhereUniqueInput
    create: XOR<Rutina_ejercicioCreateWithoutEjercicioInput, Rutina_ejercicioUncheckedCreateWithoutEjercicioInput>
  }

  export type Rutina_ejercicioCreateManyEjercicioInputEnvelope = {
    data: Rutina_ejercicioCreateManyEjercicioInput | Rutina_ejercicioCreateManyEjercicioInput[]
    skipDuplicates?: boolean
  }

  export type ProgressUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: ProgressWhereUniqueInput
    update: XOR<ProgressUpdateWithoutEjercicioInput, ProgressUncheckedUpdateWithoutEjercicioInput>
    create: XOR<ProgressCreateWithoutEjercicioInput, ProgressUncheckedCreateWithoutEjercicioInput>
  }

  export type ProgressUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: ProgressWhereUniqueInput
    data: XOR<ProgressUpdateWithoutEjercicioInput, ProgressUncheckedUpdateWithoutEjercicioInput>
  }

  export type ProgressUpdateManyWithWhereWithoutEjercicioInput = {
    where: ProgressScalarWhereInput
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyWithoutEjercicioInput>
  }

  export type FavoriteUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutEjercicioInput, FavoriteUncheckedUpdateWithoutEjercicioInput>
    create: XOR<FavoriteCreateWithoutEjercicioInput, FavoriteUncheckedCreateWithoutEjercicioInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutEjercicioInput, FavoriteUncheckedUpdateWithoutEjercicioInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutEjercicioInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutEjercicioInput>
  }

  export type Rutina_ejercicioUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: Rutina_ejercicioWhereUniqueInput
    update: XOR<Rutina_ejercicioUpdateWithoutEjercicioInput, Rutina_ejercicioUncheckedUpdateWithoutEjercicioInput>
    create: XOR<Rutina_ejercicioCreateWithoutEjercicioInput, Rutina_ejercicioUncheckedCreateWithoutEjercicioInput>
  }

  export type Rutina_ejercicioUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: Rutina_ejercicioWhereUniqueInput
    data: XOR<Rutina_ejercicioUpdateWithoutEjercicioInput, Rutina_ejercicioUncheckedUpdateWithoutEjercicioInput>
  }

  export type Rutina_ejercicioUpdateManyWithWhereWithoutEjercicioInput = {
    where: Rutina_ejercicioScalarWhereInput
    data: XOR<Rutina_ejercicioUpdateManyMutationInput, Rutina_ejercicioUncheckedUpdateManyWithoutEjercicioInput>
  }

  export type RoutineCreateWithoutRutina_ejercicioInput = {
    nombre: string
    fecha_creacion?: Date | string | null
    usuario: UserCreateNestedOneWithoutRoutineInput
  }

  export type RoutineUncheckedCreateWithoutRutina_ejercicioInput = {
    id?: number
    usuario_id: string
    nombre: string
    fecha_creacion?: Date | string | null
  }

  export type RoutineCreateOrConnectWithoutRutina_ejercicioInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutRutina_ejercicioInput, RoutineUncheckedCreateWithoutRutina_ejercicioInput>
  }

  export type ExerciseCreateWithoutRutina_ejercicioInput = {
    nombre: string
    musculo: string
    video_img_url: string
    Progreso?: ProgressCreateNestedManyWithoutEjercicioInput
    Favorito?: FavoriteCreateNestedManyWithoutEjercicioInput
  }

  export type ExerciseUncheckedCreateWithoutRutina_ejercicioInput = {
    id?: number
    nombre: string
    musculo: string
    video_img_url: string
    Progreso?: ProgressUncheckedCreateNestedManyWithoutEjercicioInput
    Favorito?: FavoriteUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type ExerciseCreateOrConnectWithoutRutina_ejercicioInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutRutina_ejercicioInput, ExerciseUncheckedCreateWithoutRutina_ejercicioInput>
  }

  export type RoutineUpsertWithoutRutina_ejercicioInput = {
    update: XOR<RoutineUpdateWithoutRutina_ejercicioInput, RoutineUncheckedUpdateWithoutRutina_ejercicioInput>
    create: XOR<RoutineCreateWithoutRutina_ejercicioInput, RoutineUncheckedCreateWithoutRutina_ejercicioInput>
    where?: RoutineWhereInput
  }

  export type RoutineUpdateToOneWithWhereWithoutRutina_ejercicioInput = {
    where?: RoutineWhereInput
    data: XOR<RoutineUpdateWithoutRutina_ejercicioInput, RoutineUncheckedUpdateWithoutRutina_ejercicioInput>
  }

  export type RoutineUpdateWithoutRutina_ejercicioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UserUpdateOneRequiredWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateWithoutRutina_ejercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExerciseUpsertWithoutRutina_ejercicioInput = {
    update: XOR<ExerciseUpdateWithoutRutina_ejercicioInput, ExerciseUncheckedUpdateWithoutRutina_ejercicioInput>
    create: XOR<ExerciseCreateWithoutRutina_ejercicioInput, ExerciseUncheckedCreateWithoutRutina_ejercicioInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutRutina_ejercicioInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutRutina_ejercicioInput, ExerciseUncheckedUpdateWithoutRutina_ejercicioInput>
  }

  export type ExerciseUpdateWithoutRutina_ejercicioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Progreso?: ProgressUpdateManyWithoutEjercicioNestedInput
    Favorito?: FavoriteUpdateManyWithoutEjercicioNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutRutina_ejercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Progreso?: ProgressUncheckedUpdateManyWithoutEjercicioNestedInput
    Favorito?: FavoriteUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type ProgressCreateManyUsuarioInput = {
    id?: number
    ejercicio_id: number
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
  }

  export type RoutineCreateManyUsuarioInput = {
    id?: number
    nombre: string
    fecha_creacion?: Date | string | null
  }

  export type FavoriteCreateManyUsuarioInput = {
    id?: number
    ejercicio_id: number
  }

  export type ProgressUpdateWithoutUsuarioInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    ejercicio?: ExerciseUpdateOneRequiredWithoutProgresoNestedInput
  }

  export type ProgressUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type ProgressUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rutina_ejercicio?: Rutina_ejercicioUpdateManyWithoutRutinaNestedInput
  }

  export type RoutineUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rutina_ejercicio?: Rutina_ejercicioUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type RoutineUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FavoriteUpdateWithoutUsuarioInput = {
    ejercicio?: ExerciseUpdateOneRequiredWithoutFavoritoNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
  }

  export type Rutina_ejercicioCreateManyRutinaInput = {
    id?: number
    ejercicio_id: number
    series: number
    repeticiones: number
  }

  export type Rutina_ejercicioUpdateWithoutRutinaInput = {
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    ejercicio?: ExerciseUpdateOneRequiredWithoutRutina_ejercicioNestedInput
  }

  export type Rutina_ejercicioUncheckedUpdateWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type Rutina_ejercicioUncheckedUpdateManyWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type ProgressCreateManyEjercicioInput = {
    id?: number
    usuario_id: string
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
  }

  export type FavoriteCreateManyEjercicioInput = {
    id?: number
    usuario_id: string
  }

  export type Rutina_ejercicioCreateManyEjercicioInput = {
    id?: number
    rutina_id: number
    series: number
    repeticiones: number
  }

  export type ProgressUpdateWithoutEjercicioInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    usuario?: UserUpdateOneRequiredWithoutProgressNestedInput
  }

  export type ProgressUncheckedUpdateWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type ProgressUncheckedUpdateManyWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteUpdateWithoutEjercicioInput = {
    usuario?: UserUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUncheckedUpdateManyWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: StringFieldUpdateOperationsInput | string
  }

  export type Rutina_ejercicioUpdateWithoutEjercicioInput = {
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    rutina?: RoutineUpdateOneRequiredWithoutRutina_ejercicioNestedInput
  }

  export type Rutina_ejercicioUncheckedUpdateWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutina_id?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type Rutina_ejercicioUncheckedUpdateManyWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutina_id?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
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