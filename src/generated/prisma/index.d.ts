
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Progreso
 * 
 */
export type Progreso = $Result.DefaultSelection<Prisma.$ProgresoPayload>
/**
 * Model Rutina
 * 
 */
export type Rutina = $Result.DefaultSelection<Prisma.$RutinaPayload>
/**
 * Model Favorito
 * 
 */
export type Favorito = $Result.DefaultSelection<Prisma.$FavoritoPayload>
/**
 * Model Ejercicio
 * 
 */
export type Ejercicio = $Result.DefaultSelection<Prisma.$EjercicioPayload>
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
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progreso`: Exposes CRUD operations for the **Progreso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progresos
    * const progresos = await prisma.progreso.findMany()
    * ```
    */
  get progreso(): Prisma.ProgresoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rutina`: Exposes CRUD operations for the **Rutina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rutinas
    * const rutinas = await prisma.rutina.findMany()
    * ```
    */
  get rutina(): Prisma.RutinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorito`: Exposes CRUD operations for the **Favorito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favoritos
    * const favoritos = await prisma.favorito.findMany()
    * ```
    */
  get favorito(): Prisma.FavoritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ejercicio`: Exposes CRUD operations for the **Ejercicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ejercicios
    * const ejercicios = await prisma.ejercicio.findMany()
    * ```
    */
  get ejercicio(): Prisma.EjercicioDelegate<ExtArgs, ClientOptions>;

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
    Usuario: 'Usuario',
    Progreso: 'Progreso',
    Rutina: 'Rutina',
    Favorito: 'Favorito',
    Ejercicio: 'Ejercicio',
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
      modelProps: "usuario" | "progreso" | "rutina" | "favorito" | "ejercicio" | "rutina_ejercicio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Progreso: {
        payload: Prisma.$ProgresoPayload<ExtArgs>
        fields: Prisma.ProgresoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgresoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgresoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          findFirst: {
            args: Prisma.ProgresoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgresoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          findMany: {
            args: Prisma.ProgresoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>[]
          }
          create: {
            args: Prisma.ProgresoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          createMany: {
            args: Prisma.ProgresoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgresoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>[]
          }
          delete: {
            args: Prisma.ProgresoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          update: {
            args: Prisma.ProgresoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          deleteMany: {
            args: Prisma.ProgresoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgresoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgresoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>[]
          }
          upsert: {
            args: Prisma.ProgresoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoPayload>
          }
          aggregate: {
            args: Prisma.ProgresoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgreso>
          }
          groupBy: {
            args: Prisma.ProgresoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgresoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgresoCountArgs<ExtArgs>
            result: $Utils.Optional<ProgresoCountAggregateOutputType> | number
          }
        }
      }
      Rutina: {
        payload: Prisma.$RutinaPayload<ExtArgs>
        fields: Prisma.RutinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          findFirst: {
            args: Prisma.RutinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          findMany: {
            args: Prisma.RutinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          create: {
            args: Prisma.RutinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          createMany: {
            args: Prisma.RutinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          delete: {
            args: Prisma.RutinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          update: {
            args: Prisma.RutinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          deleteMany: {
            args: Prisma.RutinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RutinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          upsert: {
            args: Prisma.RutinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          aggregate: {
            args: Prisma.RutinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRutina>
          }
          groupBy: {
            args: Prisma.RutinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutinaCountArgs<ExtArgs>
            result: $Utils.Optional<RutinaCountAggregateOutputType> | number
          }
        }
      }
      Favorito: {
        payload: Prisma.$FavoritoPayload<ExtArgs>
        fields: Prisma.FavoritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findFirst: {
            args: Prisma.FavoritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findMany: {
            args: Prisma.FavoritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          create: {
            args: Prisma.FavoritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          createMany: {
            args: Prisma.FavoritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoritoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          delete: {
            args: Prisma.FavoritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          update: {
            args: Prisma.FavoritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          deleteMany: {
            args: Prisma.FavoritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoritoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          upsert: {
            args: Prisma.FavoritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          aggregate: {
            args: Prisma.FavoritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorito>
          }
          groupBy: {
            args: Prisma.FavoritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritoCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritoCountAggregateOutputType> | number
          }
        }
      }
      Ejercicio: {
        payload: Prisma.$EjercicioPayload<ExtArgs>
        fields: Prisma.EjercicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EjercicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EjercicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          findFirst: {
            args: Prisma.EjercicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EjercicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          findMany: {
            args: Prisma.EjercicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          create: {
            args: Prisma.EjercicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          createMany: {
            args: Prisma.EjercicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EjercicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          delete: {
            args: Prisma.EjercicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          update: {
            args: Prisma.EjercicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          deleteMany: {
            args: Prisma.EjercicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EjercicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EjercicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          upsert: {
            args: Prisma.EjercicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          aggregate: {
            args: Prisma.EjercicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEjercicio>
          }
          groupBy: {
            args: Prisma.EjercicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EjercicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EjercicioCountArgs<ExtArgs>
            result: $Utils.Optional<EjercicioCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    progreso?: ProgresoOmit
    rutina?: RutinaOmit
    favorito?: FavoritoOmit
    ejercicio?: EjercicioOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    Progreso: number
    Rutina: number
    Favorito: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Progreso?: boolean | UsuarioCountOutputTypeCountProgresoArgs
    Rutina?: boolean | UsuarioCountOutputTypeCountRutinaArgs
    Favorito?: boolean | UsuarioCountOutputTypeCountFavoritoArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProgresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRutinaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFavoritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }


  /**
   * Count Type RutinaCountOutputType
   */

  export type RutinaCountOutputType = {
    Rutina_ejercicio: number
  }

  export type RutinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rutina_ejercicio?: boolean | RutinaCountOutputTypeCountRutina_ejercicioArgs
  }

  // Custom InputTypes
  /**
   * RutinaCountOutputType without action
   */
  export type RutinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaCountOutputType
     */
    select?: RutinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RutinaCountOutputType without action
   */
  export type RutinaCountOutputTypeCountRutina_ejercicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rutina_ejercicioWhereInput
  }


  /**
   * Count Type EjercicioCountOutputType
   */

  export type EjercicioCountOutputType = {
    Progreso: number
    Favorito: number
    Rutina_ejercicio: number
  }

  export type EjercicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Progreso?: boolean | EjercicioCountOutputTypeCountProgresoArgs
    Favorito?: boolean | EjercicioCountOutputTypeCountFavoritoArgs
    Rutina_ejercicio?: boolean | EjercicioCountOutputTypeCountRutina_ejercicioArgs
  }

  // Custom InputTypes
  /**
   * EjercicioCountOutputType without action
   */
  export type EjercicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioCountOutputType
     */
    select?: EjercicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EjercicioCountOutputType without action
   */
  export type EjercicioCountOutputTypeCountProgresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoWhereInput
  }

  /**
   * EjercicioCountOutputType without action
   */
  export type EjercicioCountOutputTypeCountFavoritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * EjercicioCountOutputType without action
   */
  export type EjercicioCountOutputTypeCountRutina_ejercicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rutina_ejercicioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
    rol: $Enums.Rol | null
    fecha_creacion: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
    rol: $Enums.Rol | null
    fecha_creacion: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password: number
    rol: number
    fecha_creacion: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    fecha_creacion?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    fecha_creacion?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    fecha_creacion?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    email: string
    password: string
    rol: $Enums.Rol
    fecha_creacion: Date | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    fecha_creacion?: boolean
    Progreso?: boolean | Usuario$ProgresoArgs<ExtArgs>
    Rutina?: boolean | Usuario$RutinaArgs<ExtArgs>
    Favorito?: boolean | Usuario$FavoritoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    fecha_creacion?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    fecha_creacion?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    fecha_creacion?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password" | "rol" | "fecha_creacion", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Progreso?: boolean | Usuario$ProgresoArgs<ExtArgs>
    Rutina?: boolean | Usuario$RutinaArgs<ExtArgs>
    Favorito?: boolean | Usuario$FavoritoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      Progreso: Prisma.$ProgresoPayload<ExtArgs>[]
      Rutina: Prisma.$RutinaPayload<ExtArgs>[]
      Favorito: Prisma.$FavoritoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      password: string
      rol: $Enums.Rol
      fecha_creacion: Date | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Progreso<T extends Usuario$ProgresoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ProgresoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Rutina<T extends Usuario$RutinaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$RutinaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Favorito<T extends Usuario$FavoritoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$FavoritoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly fecha_creacion: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.Progreso
   */
  export type Usuario$ProgresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    where?: ProgresoWhereInput
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    cursor?: ProgresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Usuario.Rutina
   */
  export type Usuario$RutinaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    where?: RutinaWhereInput
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    cursor?: RutinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Usuario.Favorito
   */
  export type Usuario$FavoritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Progreso
   */

  export type AggregateProgreso = {
    _count: ProgresoCountAggregateOutputType | null
    _avg: ProgresoAvgAggregateOutputType | null
    _sum: ProgresoSumAggregateOutputType | null
    _min: ProgresoMinAggregateOutputType | null
    _max: ProgresoMaxAggregateOutputType | null
  }

  export type ProgresoAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    ejercicio_id: number | null
    peso_usado: number | null
    repeticiones: number | null
  }

  export type ProgresoSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    ejercicio_id: number | null
    peso_usado: number | null
    repeticiones: number | null
  }

  export type ProgresoMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    ejercicio_id: number | null
    fecha: Date | null
    peso_usado: number | null
    repeticiones: number | null
  }

  export type ProgresoMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    ejercicio_id: number | null
    fecha: Date | null
    peso_usado: number | null
    repeticiones: number | null
  }

  export type ProgresoCountAggregateOutputType = {
    id: number
    usuario_id: number
    ejercicio_id: number
    fecha: number
    peso_usado: number
    repeticiones: number
    _all: number
  }


  export type ProgresoAvgAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
    peso_usado?: true
    repeticiones?: true
  }

  export type ProgresoSumAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
    peso_usado?: true
    repeticiones?: true
  }

  export type ProgresoMinAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
    fecha?: true
    peso_usado?: true
    repeticiones?: true
  }

  export type ProgresoMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
    fecha?: true
    peso_usado?: true
    repeticiones?: true
  }

  export type ProgresoCountAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
    fecha?: true
    peso_usado?: true
    repeticiones?: true
    _all?: true
  }

  export type ProgresoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progreso to aggregate.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Progresos
    **/
    _count?: true | ProgresoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgresoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgresoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgresoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgresoMaxAggregateInputType
  }

  export type GetProgresoAggregateType<T extends ProgresoAggregateArgs> = {
        [P in keyof T & keyof AggregateProgreso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgreso[P]>
      : GetScalarType<T[P], AggregateProgreso[P]>
  }




  export type ProgresoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoWhereInput
    orderBy?: ProgresoOrderByWithAggregationInput | ProgresoOrderByWithAggregationInput[]
    by: ProgresoScalarFieldEnum[] | ProgresoScalarFieldEnum
    having?: ProgresoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgresoCountAggregateInputType | true
    _avg?: ProgresoAvgAggregateInputType
    _sum?: ProgresoSumAggregateInputType
    _min?: ProgresoMinAggregateInputType
    _max?: ProgresoMaxAggregateInputType
  }

  export type ProgresoGroupByOutputType = {
    id: number
    usuario_id: number
    ejercicio_id: number
    fecha: Date | null
    peso_usado: number
    repeticiones: number
    _count: ProgresoCountAggregateOutputType | null
    _avg: ProgresoAvgAggregateOutputType | null
    _sum: ProgresoSumAggregateOutputType | null
    _min: ProgresoMinAggregateOutputType | null
    _max: ProgresoMaxAggregateOutputType | null
  }

  type GetProgresoGroupByPayload<T extends ProgresoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgresoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgresoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgresoGroupByOutputType[P]>
            : GetScalarType<T[P], ProgresoGroupByOutputType[P]>
        }
      >
    >


  export type ProgresoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
    fecha?: boolean
    peso_usado?: boolean
    repeticiones?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type ProgresoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
    fecha?: boolean
    peso_usado?: boolean
    repeticiones?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type ProgresoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
    fecha?: boolean
    peso_usado?: boolean
    repeticiones?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progreso"]>

  export type ProgresoSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
    fecha?: boolean
    peso_usado?: boolean
    repeticiones?: boolean
  }

  export type ProgresoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "ejercicio_id" | "fecha" | "peso_usado" | "repeticiones", ExtArgs["result"]["progreso"]>
  export type ProgresoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type ProgresoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type ProgresoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }

  export type $ProgresoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Progreso"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      ejercicio: Prisma.$EjercicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      ejercicio_id: number
      fecha: Date | null
      peso_usado: number
      repeticiones: number
    }, ExtArgs["result"]["progreso"]>
    composites: {}
  }

  type ProgresoGetPayload<S extends boolean | null | undefined | ProgresoDefaultArgs> = $Result.GetResult<Prisma.$ProgresoPayload, S>

  type ProgresoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgresoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgresoCountAggregateInputType | true
    }

  export interface ProgresoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Progreso'], meta: { name: 'Progreso' } }
    /**
     * Find zero or one Progreso that matches the filter.
     * @param {ProgresoFindUniqueArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgresoFindUniqueArgs>(args: SelectSubset<T, ProgresoFindUniqueArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Progreso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgresoFindUniqueOrThrowArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgresoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgresoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progreso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoFindFirstArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgresoFindFirstArgs>(args?: SelectSubset<T, ProgresoFindFirstArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progreso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoFindFirstOrThrowArgs} args - Arguments to find a Progreso
     * @example
     * // Get one Progreso
     * const progreso = await prisma.progreso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgresoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgresoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Progresos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progresos
     * const progresos = await prisma.progreso.findMany()
     * 
     * // Get first 10 Progresos
     * const progresos = await prisma.progreso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progresoWithIdOnly = await prisma.progreso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgresoFindManyArgs>(args?: SelectSubset<T, ProgresoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Progreso.
     * @param {ProgresoCreateArgs} args - Arguments to create a Progreso.
     * @example
     * // Create one Progreso
     * const Progreso = await prisma.progreso.create({
     *   data: {
     *     // ... data to create a Progreso
     *   }
     * })
     * 
     */
    create<T extends ProgresoCreateArgs>(args: SelectSubset<T, ProgresoCreateArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Progresos.
     * @param {ProgresoCreateManyArgs} args - Arguments to create many Progresos.
     * @example
     * // Create many Progresos
     * const progreso = await prisma.progreso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgresoCreateManyArgs>(args?: SelectSubset<T, ProgresoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Progresos and returns the data saved in the database.
     * @param {ProgresoCreateManyAndReturnArgs} args - Arguments to create many Progresos.
     * @example
     * // Create many Progresos
     * const progreso = await prisma.progreso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Progresos and only return the `id`
     * const progresoWithIdOnly = await prisma.progreso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgresoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgresoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Progreso.
     * @param {ProgresoDeleteArgs} args - Arguments to delete one Progreso.
     * @example
     * // Delete one Progreso
     * const Progreso = await prisma.progreso.delete({
     *   where: {
     *     // ... filter to delete one Progreso
     *   }
     * })
     * 
     */
    delete<T extends ProgresoDeleteArgs>(args: SelectSubset<T, ProgresoDeleteArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Progreso.
     * @param {ProgresoUpdateArgs} args - Arguments to update one Progreso.
     * @example
     * // Update one Progreso
     * const progreso = await prisma.progreso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgresoUpdateArgs>(args: SelectSubset<T, ProgresoUpdateArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Progresos.
     * @param {ProgresoDeleteManyArgs} args - Arguments to filter Progresos to delete.
     * @example
     * // Delete a few Progresos
     * const { count } = await prisma.progreso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgresoDeleteManyArgs>(args?: SelectSubset<T, ProgresoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progresos
     * const progreso = await prisma.progreso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgresoUpdateManyArgs>(args: SelectSubset<T, ProgresoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresos and returns the data updated in the database.
     * @param {ProgresoUpdateManyAndReturnArgs} args - Arguments to update many Progresos.
     * @example
     * // Update many Progresos
     * const progreso = await prisma.progreso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Progresos and only return the `id`
     * const progresoWithIdOnly = await prisma.progreso.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgresoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgresoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Progreso.
     * @param {ProgresoUpsertArgs} args - Arguments to update or create a Progreso.
     * @example
     * // Update or create a Progreso
     * const progreso = await prisma.progreso.upsert({
     *   create: {
     *     // ... data to create a Progreso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progreso we want to update
     *   }
     * })
     */
    upsert<T extends ProgresoUpsertArgs>(args: SelectSubset<T, ProgresoUpsertArgs<ExtArgs>>): Prisma__ProgresoClient<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Progresos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoCountArgs} args - Arguments to filter Progresos to count.
     * @example
     * // Count the number of Progresos
     * const count = await prisma.progreso.count({
     *   where: {
     *     // ... the filter for the Progresos we want to count
     *   }
     * })
    **/
    count<T extends ProgresoCountArgs>(
      args?: Subset<T, ProgresoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgresoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgresoAggregateArgs>(args: Subset<T, ProgresoAggregateArgs>): Prisma.PrismaPromise<GetProgresoAggregateType<T>>

    /**
     * Group by Progreso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoGroupByArgs} args - Group by arguments.
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
      T extends ProgresoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgresoGroupByArgs['orderBy'] }
        : { orderBy?: ProgresoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgresoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgresoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Progreso model
   */
  readonly fields: ProgresoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Progreso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgresoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ejercicio<T extends EjercicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EjercicioDefaultArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Progreso model
   */
  interface ProgresoFieldRefs {
    readonly id: FieldRef<"Progreso", 'Int'>
    readonly usuario_id: FieldRef<"Progreso", 'Int'>
    readonly ejercicio_id: FieldRef<"Progreso", 'Int'>
    readonly fecha: FieldRef<"Progreso", 'DateTime'>
    readonly peso_usado: FieldRef<"Progreso", 'Float'>
    readonly repeticiones: FieldRef<"Progreso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Progreso findUnique
   */
  export type ProgresoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso findUniqueOrThrow
   */
  export type ProgresoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso findFirst
   */
  export type ProgresoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresos.
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresos.
     */
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Progreso findFirstOrThrow
   */
  export type ProgresoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progreso to fetch.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresos.
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresos.
     */
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Progreso findMany
   */
  export type ProgresoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter, which Progresos to fetch.
     */
    where?: ProgresoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresos to fetch.
     */
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Progresos.
     */
    cursor?: ProgresoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresos.
     */
    skip?: number
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Progreso create
   */
  export type ProgresoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * The data needed to create a Progreso.
     */
    data: XOR<ProgresoCreateInput, ProgresoUncheckedCreateInput>
  }

  /**
   * Progreso createMany
   */
  export type ProgresoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Progresos.
     */
    data: ProgresoCreateManyInput | ProgresoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Progreso createManyAndReturn
   */
  export type ProgresoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * The data used to create many Progresos.
     */
    data: ProgresoCreateManyInput | ProgresoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progreso update
   */
  export type ProgresoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * The data needed to update a Progreso.
     */
    data: XOR<ProgresoUpdateInput, ProgresoUncheckedUpdateInput>
    /**
     * Choose, which Progreso to update.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso updateMany
   */
  export type ProgresoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Progresos.
     */
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyInput>
    /**
     * Filter which Progresos to update
     */
    where?: ProgresoWhereInput
    /**
     * Limit how many Progresos to update.
     */
    limit?: number
  }

  /**
   * Progreso updateManyAndReturn
   */
  export type ProgresoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * The data used to update Progresos.
     */
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyInput>
    /**
     * Filter which Progresos to update
     */
    where?: ProgresoWhereInput
    /**
     * Limit how many Progresos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progreso upsert
   */
  export type ProgresoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * The filter to search for the Progreso to update in case it exists.
     */
    where: ProgresoWhereUniqueInput
    /**
     * In case the Progreso found by the `where` argument doesn't exist, create a new Progreso with this data.
     */
    create: XOR<ProgresoCreateInput, ProgresoUncheckedCreateInput>
    /**
     * In case the Progreso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgresoUpdateInput, ProgresoUncheckedUpdateInput>
  }

  /**
   * Progreso delete
   */
  export type ProgresoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    /**
     * Filter which Progreso to delete.
     */
    where: ProgresoWhereUniqueInput
  }

  /**
   * Progreso deleteMany
   */
  export type ProgresoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progresos to delete
     */
    where?: ProgresoWhereInput
    /**
     * Limit how many Progresos to delete.
     */
    limit?: number
  }

  /**
   * Progreso without action
   */
  export type ProgresoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
  }


  /**
   * Model Rutina
   */

  export type AggregateRutina = {
    _count: RutinaCountAggregateOutputType | null
    _avg: RutinaAvgAggregateOutputType | null
    _sum: RutinaSumAggregateOutputType | null
    _min: RutinaMinAggregateOutputType | null
    _max: RutinaMaxAggregateOutputType | null
  }

  export type RutinaAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type RutinaSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type RutinaMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    nombre: string | null
    fecha_creacion: Date | null
  }

  export type RutinaMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    nombre: string | null
    fecha_creacion: Date | null
  }

  export type RutinaCountAggregateOutputType = {
    id: number
    usuario_id: number
    nombre: number
    fecha_creacion: number
    _all: number
  }


  export type RutinaAvgAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type RutinaSumAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type RutinaMinAggregateInputType = {
    id?: true
    usuario_id?: true
    nombre?: true
    fecha_creacion?: true
  }

  export type RutinaMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    nombre?: true
    fecha_creacion?: true
  }

  export type RutinaCountAggregateInputType = {
    id?: true
    usuario_id?: true
    nombre?: true
    fecha_creacion?: true
    _all?: true
  }

  export type RutinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutina to aggregate.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rutinas
    **/
    _count?: true | RutinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutinaMaxAggregateInputType
  }

  export type GetRutinaAggregateType<T extends RutinaAggregateArgs> = {
        [P in keyof T & keyof AggregateRutina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRutina[P]>
      : GetScalarType<T[P], AggregateRutina[P]>
  }




  export type RutinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaWhereInput
    orderBy?: RutinaOrderByWithAggregationInput | RutinaOrderByWithAggregationInput[]
    by: RutinaScalarFieldEnum[] | RutinaScalarFieldEnum
    having?: RutinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutinaCountAggregateInputType | true
    _avg?: RutinaAvgAggregateInputType
    _sum?: RutinaSumAggregateInputType
    _min?: RutinaMinAggregateInputType
    _max?: RutinaMaxAggregateInputType
  }

  export type RutinaGroupByOutputType = {
    id: number
    usuario_id: number
    nombre: string
    fecha_creacion: Date | null
    _count: RutinaCountAggregateOutputType | null
    _avg: RutinaAvgAggregateOutputType | null
    _sum: RutinaSumAggregateOutputType | null
    _min: RutinaMinAggregateOutputType | null
    _max: RutinaMaxAggregateOutputType | null
  }

  type GetRutinaGroupByPayload<T extends RutinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutinaGroupByOutputType[P]>
            : GetScalarType<T[P], RutinaGroupByOutputType[P]>
        }
      >
    >


  export type RutinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    nombre?: boolean
    fecha_creacion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Rutina_ejercicio?: boolean | Rutina$Rutina_ejercicioArgs<ExtArgs>
    _count?: boolean | RutinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    nombre?: boolean
    fecha_creacion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    nombre?: boolean
    fecha_creacion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    nombre?: boolean
    fecha_creacion?: boolean
  }

  export type RutinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "nombre" | "fecha_creacion", ExtArgs["result"]["rutina"]>
  export type RutinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Rutina_ejercicio?: boolean | Rutina$Rutina_ejercicioArgs<ExtArgs>
    _count?: boolean | RutinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RutinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RutinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $RutinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rutina"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      Rutina_ejercicio: Prisma.$Rutina_ejercicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      nombre: string
      fecha_creacion: Date | null
    }, ExtArgs["result"]["rutina"]>
    composites: {}
  }

  type RutinaGetPayload<S extends boolean | null | undefined | RutinaDefaultArgs> = $Result.GetResult<Prisma.$RutinaPayload, S>

  type RutinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RutinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RutinaCountAggregateInputType | true
    }

  export interface RutinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rutina'], meta: { name: 'Rutina' } }
    /**
     * Find zero or one Rutina that matches the filter.
     * @param {RutinaFindUniqueArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutinaFindUniqueArgs>(args: SelectSubset<T, RutinaFindUniqueArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rutina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RutinaFindUniqueOrThrowArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutinaFindUniqueOrThrowArgs>(args: SelectSubset<T, RutinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rutina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindFirstArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutinaFindFirstArgs>(args?: SelectSubset<T, RutinaFindFirstArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rutina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindFirstOrThrowArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutinaFindFirstOrThrowArgs>(args?: SelectSubset<T, RutinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rutinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rutinas
     * const rutinas = await prisma.rutina.findMany()
     * 
     * // Get first 10 Rutinas
     * const rutinas = await prisma.rutina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rutinaWithIdOnly = await prisma.rutina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RutinaFindManyArgs>(args?: SelectSubset<T, RutinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rutina.
     * @param {RutinaCreateArgs} args - Arguments to create a Rutina.
     * @example
     * // Create one Rutina
     * const Rutina = await prisma.rutina.create({
     *   data: {
     *     // ... data to create a Rutina
     *   }
     * })
     * 
     */
    create<T extends RutinaCreateArgs>(args: SelectSubset<T, RutinaCreateArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rutinas.
     * @param {RutinaCreateManyArgs} args - Arguments to create many Rutinas.
     * @example
     * // Create many Rutinas
     * const rutina = await prisma.rutina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutinaCreateManyArgs>(args?: SelectSubset<T, RutinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rutinas and returns the data saved in the database.
     * @param {RutinaCreateManyAndReturnArgs} args - Arguments to create many Rutinas.
     * @example
     * // Create many Rutinas
     * const rutina = await prisma.rutina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rutinas and only return the `id`
     * const rutinaWithIdOnly = await prisma.rutina.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutinaCreateManyAndReturnArgs>(args?: SelectSubset<T, RutinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rutina.
     * @param {RutinaDeleteArgs} args - Arguments to delete one Rutina.
     * @example
     * // Delete one Rutina
     * const Rutina = await prisma.rutina.delete({
     *   where: {
     *     // ... filter to delete one Rutina
     *   }
     * })
     * 
     */
    delete<T extends RutinaDeleteArgs>(args: SelectSubset<T, RutinaDeleteArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rutina.
     * @param {RutinaUpdateArgs} args - Arguments to update one Rutina.
     * @example
     * // Update one Rutina
     * const rutina = await prisma.rutina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutinaUpdateArgs>(args: SelectSubset<T, RutinaUpdateArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rutinas.
     * @param {RutinaDeleteManyArgs} args - Arguments to filter Rutinas to delete.
     * @example
     * // Delete a few Rutinas
     * const { count } = await prisma.rutina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutinaDeleteManyArgs>(args?: SelectSubset<T, RutinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rutinas
     * const rutina = await prisma.rutina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutinaUpdateManyArgs>(args: SelectSubset<T, RutinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutinas and returns the data updated in the database.
     * @param {RutinaUpdateManyAndReturnArgs} args - Arguments to update many Rutinas.
     * @example
     * // Update many Rutinas
     * const rutina = await prisma.rutina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rutinas and only return the `id`
     * const rutinaWithIdOnly = await prisma.rutina.updateManyAndReturn({
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
    updateManyAndReturn<T extends RutinaUpdateManyAndReturnArgs>(args: SelectSubset<T, RutinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rutina.
     * @param {RutinaUpsertArgs} args - Arguments to update or create a Rutina.
     * @example
     * // Update or create a Rutina
     * const rutina = await prisma.rutina.upsert({
     *   create: {
     *     // ... data to create a Rutina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rutina we want to update
     *   }
     * })
     */
    upsert<T extends RutinaUpsertArgs>(args: SelectSubset<T, RutinaUpsertArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rutinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaCountArgs} args - Arguments to filter Rutinas to count.
     * @example
     * // Count the number of Rutinas
     * const count = await prisma.rutina.count({
     *   where: {
     *     // ... the filter for the Rutinas we want to count
     *   }
     * })
    **/
    count<T extends RutinaCountArgs>(
      args?: Subset<T, RutinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rutina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RutinaAggregateArgs>(args: Subset<T, RutinaAggregateArgs>): Prisma.PrismaPromise<GetRutinaAggregateType<T>>

    /**
     * Group by Rutina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaGroupByArgs} args - Group by arguments.
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
      T extends RutinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutinaGroupByArgs['orderBy'] }
        : { orderBy?: RutinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RutinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rutina model
   */
  readonly fields: RutinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rutina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Rutina_ejercicio<T extends Rutina$Rutina_ejercicioArgs<ExtArgs> = {}>(args?: Subset<T, Rutina$Rutina_ejercicioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rutina model
   */
  interface RutinaFieldRefs {
    readonly id: FieldRef<"Rutina", 'Int'>
    readonly usuario_id: FieldRef<"Rutina", 'Int'>
    readonly nombre: FieldRef<"Rutina", 'String'>
    readonly fecha_creacion: FieldRef<"Rutina", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rutina findUnique
   */
  export type RutinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina findUniqueOrThrow
   */
  export type RutinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina findFirst
   */
  export type RutinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutinas.
     */
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina findFirstOrThrow
   */
  export type RutinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutinas.
     */
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina findMany
   */
  export type RutinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutinas to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina create
   */
  export type RutinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Rutina.
     */
    data: XOR<RutinaCreateInput, RutinaUncheckedCreateInput>
  }

  /**
   * Rutina createMany
   */
  export type RutinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rutinas.
     */
    data: RutinaCreateManyInput | RutinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rutina createManyAndReturn
   */
  export type RutinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * The data used to create many Rutinas.
     */
    data: RutinaCreateManyInput | RutinaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rutina update
   */
  export type RutinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Rutina.
     */
    data: XOR<RutinaUpdateInput, RutinaUncheckedUpdateInput>
    /**
     * Choose, which Rutina to update.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina updateMany
   */
  export type RutinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rutinas.
     */
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyInput>
    /**
     * Filter which Rutinas to update
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to update.
     */
    limit?: number
  }

  /**
   * Rutina updateManyAndReturn
   */
  export type RutinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * The data used to update Rutinas.
     */
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyInput>
    /**
     * Filter which Rutinas to update
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rutina upsert
   */
  export type RutinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Rutina to update in case it exists.
     */
    where: RutinaWhereUniqueInput
    /**
     * In case the Rutina found by the `where` argument doesn't exist, create a new Rutina with this data.
     */
    create: XOR<RutinaCreateInput, RutinaUncheckedCreateInput>
    /**
     * In case the Rutina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutinaUpdateInput, RutinaUncheckedUpdateInput>
  }

  /**
   * Rutina delete
   */
  export type RutinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter which Rutina to delete.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina deleteMany
   */
  export type RutinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutinas to delete
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to delete.
     */
    limit?: number
  }

  /**
   * Rutina.Rutina_ejercicio
   */
  export type Rutina$Rutina_ejercicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Rutina without action
   */
  export type RutinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
  }


  /**
   * Model Favorito
   */

  export type AggregateFavorito = {
    _count: FavoritoCountAggregateOutputType | null
    _avg: FavoritoAvgAggregateOutputType | null
    _sum: FavoritoSumAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  export type FavoritoAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    ejercicio_id: number | null
  }

  export type FavoritoSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    ejercicio_id: number | null
  }

  export type FavoritoMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    ejercicio_id: number | null
  }

  export type FavoritoMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    ejercicio_id: number | null
  }

  export type FavoritoCountAggregateOutputType = {
    id: number
    usuario_id: number
    ejercicio_id: number
    _all: number
  }


  export type FavoritoAvgAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
  }

  export type FavoritoSumAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
  }

  export type FavoritoMinAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
  }

  export type FavoritoMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
  }

  export type FavoritoCountAggregateInputType = {
    id?: true
    usuario_id?: true
    ejercicio_id?: true
    _all?: true
  }

  export type FavoritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorito to aggregate.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favoritos
    **/
    _count?: true | FavoritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoritoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoritoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritoMaxAggregateInputType
  }

  export type GetFavoritoAggregateType<T extends FavoritoAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorito[P]>
      : GetScalarType<T[P], AggregateFavorito[P]>
  }




  export type FavoritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithAggregationInput | FavoritoOrderByWithAggregationInput[]
    by: FavoritoScalarFieldEnum[] | FavoritoScalarFieldEnum
    having?: FavoritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritoCountAggregateInputType | true
    _avg?: FavoritoAvgAggregateInputType
    _sum?: FavoritoSumAggregateInputType
    _min?: FavoritoMinAggregateInputType
    _max?: FavoritoMaxAggregateInputType
  }

  export type FavoritoGroupByOutputType = {
    id: number
    usuario_id: number
    ejercicio_id: number
    _count: FavoritoCountAggregateOutputType | null
    _avg: FavoritoAvgAggregateOutputType | null
    _sum: FavoritoSumAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  type GetFavoritoGroupByPayload<T extends FavoritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
        }
      >
    >


  export type FavoritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    ejercicio_id?: boolean
  }

  export type FavoritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "ejercicio_id", ExtArgs["result"]["favorito"]>
  export type FavoritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }

  export type $FavoritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorito"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      ejercicio: Prisma.$EjercicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      ejercicio_id: number
    }, ExtArgs["result"]["favorito"]>
    composites: {}
  }

  type FavoritoGetPayload<S extends boolean | null | undefined | FavoritoDefaultArgs> = $Result.GetResult<Prisma.$FavoritoPayload, S>

  type FavoritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritoCountAggregateInputType | true
    }

  export interface FavoritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorito'], meta: { name: 'Favorito' } }
    /**
     * Find zero or one Favorito that matches the filter.
     * @param {FavoritoFindUniqueArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoritoFindUniqueArgs>(args: SelectSubset<T, FavoritoFindUniqueArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoritoFindUniqueOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoritoFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoritoFindFirstArgs>(args?: SelectSubset<T, FavoritoFindFirstArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoritoFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favoritos
     * const favoritos = await prisma.favorito.findMany()
     * 
     * // Get first 10 Favoritos
     * const favoritos = await prisma.favorito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritoWithIdOnly = await prisma.favorito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoritoFindManyArgs>(args?: SelectSubset<T, FavoritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorito.
     * @param {FavoritoCreateArgs} args - Arguments to create a Favorito.
     * @example
     * // Create one Favorito
     * const Favorito = await prisma.favorito.create({
     *   data: {
     *     // ... data to create a Favorito
     *   }
     * })
     * 
     */
    create<T extends FavoritoCreateArgs>(args: SelectSubset<T, FavoritoCreateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favoritos.
     * @param {FavoritoCreateManyArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoritoCreateManyArgs>(args?: SelectSubset<T, FavoritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favoritos and returns the data saved in the database.
     * @param {FavoritoCreateManyAndReturnArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favoritos and only return the `id`
     * const favoritoWithIdOnly = await prisma.favorito.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoritoCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoritoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorito.
     * @param {FavoritoDeleteArgs} args - Arguments to delete one Favorito.
     * @example
     * // Delete one Favorito
     * const Favorito = await prisma.favorito.delete({
     *   where: {
     *     // ... filter to delete one Favorito
     *   }
     * })
     * 
     */
    delete<T extends FavoritoDeleteArgs>(args: SelectSubset<T, FavoritoDeleteArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorito.
     * @param {FavoritoUpdateArgs} args - Arguments to update one Favorito.
     * @example
     * // Update one Favorito
     * const favorito = await prisma.favorito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoritoUpdateArgs>(args: SelectSubset<T, FavoritoUpdateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favoritos.
     * @param {FavoritoDeleteManyArgs} args - Arguments to filter Favoritos to delete.
     * @example
     * // Delete a few Favoritos
     * const { count } = await prisma.favorito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoritoDeleteManyArgs>(args?: SelectSubset<T, FavoritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoritoUpdateManyArgs>(args: SelectSubset<T, FavoritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos and returns the data updated in the database.
     * @param {FavoritoUpdateManyAndReturnArgs} args - Arguments to update many Favoritos.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favoritos and only return the `id`
     * const favoritoWithIdOnly = await prisma.favorito.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavoritoUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoritoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorito.
     * @param {FavoritoUpsertArgs} args - Arguments to update or create a Favorito.
     * @example
     * // Update or create a Favorito
     * const favorito = await prisma.favorito.upsert({
     *   create: {
     *     // ... data to create a Favorito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorito we want to update
     *   }
     * })
     */
    upsert<T extends FavoritoUpsertArgs>(args: SelectSubset<T, FavoritoUpsertArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoCountArgs} args - Arguments to filter Favoritos to count.
     * @example
     * // Count the number of Favoritos
     * const count = await prisma.favorito.count({
     *   where: {
     *     // ... the filter for the Favoritos we want to count
     *   }
     * })
    **/
    count<T extends FavoritoCountArgs>(
      args?: Subset<T, FavoritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoritoAggregateArgs>(args: Subset<T, FavoritoAggregateArgs>): Prisma.PrismaPromise<GetFavoritoAggregateType<T>>

    /**
     * Group by Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoGroupByArgs} args - Group by arguments.
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
      T extends FavoritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritoGroupByArgs['orderBy'] }
        : { orderBy?: FavoritoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorito model
   */
  readonly fields: FavoritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ejercicio<T extends EjercicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EjercicioDefaultArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorito model
   */
  interface FavoritoFieldRefs {
    readonly id: FieldRef<"Favorito", 'Int'>
    readonly usuario_id: FieldRef<"Favorito", 'Int'>
    readonly ejercicio_id: FieldRef<"Favorito", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Favorito findUnique
   */
  export type FavoritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findUniqueOrThrow
   */
  export type FavoritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findFirst
   */
  export type FavoritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findFirstOrThrow
   */
  export type FavoritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findMany
   */
  export type FavoritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito create
   */
  export type FavoritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorito.
     */
    data: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
  }

  /**
   * Favorito createMany
   */
  export type FavoritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorito createManyAndReturn
   */
  export type FavoritoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorito update
   */
  export type FavoritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorito.
     */
    data: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
    /**
     * Choose, which Favorito to update.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito updateMany
   */
  export type FavoritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
  }

  /**
   * Favorito updateManyAndReturn
   */
  export type FavoritoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorito upsert
   */
  export type FavoritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorito to update in case it exists.
     */
    where: FavoritoWhereUniqueInput
    /**
     * In case the Favorito found by the `where` argument doesn't exist, create a new Favorito with this data.
     */
    create: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
    /**
     * In case the Favorito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
  }

  /**
   * Favorito delete
   */
  export type FavoritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter which Favorito to delete.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito deleteMany
   */
  export type FavoritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favoritos to delete
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to delete.
     */
    limit?: number
  }

  /**
   * Favorito without action
   */
  export type FavoritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
  }


  /**
   * Model Ejercicio
   */

  export type AggregateEjercicio = {
    _count: EjercicioCountAggregateOutputType | null
    _avg: EjercicioAvgAggregateOutputType | null
    _sum: EjercicioSumAggregateOutputType | null
    _min: EjercicioMinAggregateOutputType | null
    _max: EjercicioMaxAggregateOutputType | null
  }

  export type EjercicioAvgAggregateOutputType = {
    id: number | null
  }

  export type EjercicioSumAggregateOutputType = {
    id: number | null
  }

  export type EjercicioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    musculo: string | null
    video_img_url: string | null
  }

  export type EjercicioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    musculo: string | null
    video_img_url: string | null
  }

  export type EjercicioCountAggregateOutputType = {
    id: number
    nombre: number
    musculo: number
    video_img_url: number
    _all: number
  }


  export type EjercicioAvgAggregateInputType = {
    id?: true
  }

  export type EjercicioSumAggregateInputType = {
    id?: true
  }

  export type EjercicioMinAggregateInputType = {
    id?: true
    nombre?: true
    musculo?: true
    video_img_url?: true
  }

  export type EjercicioMaxAggregateInputType = {
    id?: true
    nombre?: true
    musculo?: true
    video_img_url?: true
  }

  export type EjercicioCountAggregateInputType = {
    id?: true
    nombre?: true
    musculo?: true
    video_img_url?: true
    _all?: true
  }

  export type EjercicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ejercicio to aggregate.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ejercicios
    **/
    _count?: true | EjercicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EjercicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EjercicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EjercicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EjercicioMaxAggregateInputType
  }

  export type GetEjercicioAggregateType<T extends EjercicioAggregateArgs> = {
        [P in keyof T & keyof AggregateEjercicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEjercicio[P]>
      : GetScalarType<T[P], AggregateEjercicio[P]>
  }




  export type EjercicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EjercicioWhereInput
    orderBy?: EjercicioOrderByWithAggregationInput | EjercicioOrderByWithAggregationInput[]
    by: EjercicioScalarFieldEnum[] | EjercicioScalarFieldEnum
    having?: EjercicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EjercicioCountAggregateInputType | true
    _avg?: EjercicioAvgAggregateInputType
    _sum?: EjercicioSumAggregateInputType
    _min?: EjercicioMinAggregateInputType
    _max?: EjercicioMaxAggregateInputType
  }

  export type EjercicioGroupByOutputType = {
    id: number
    nombre: string
    musculo: string
    video_img_url: string
    _count: EjercicioCountAggregateOutputType | null
    _avg: EjercicioAvgAggregateOutputType | null
    _sum: EjercicioSumAggregateOutputType | null
    _min: EjercicioMinAggregateOutputType | null
    _max: EjercicioMaxAggregateOutputType | null
  }

  type GetEjercicioGroupByPayload<T extends EjercicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EjercicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EjercicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EjercicioGroupByOutputType[P]>
            : GetScalarType<T[P], EjercicioGroupByOutputType[P]>
        }
      >
    >


  export type EjercicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    musculo?: boolean
    video_img_url?: boolean
    Progreso?: boolean | Ejercicio$ProgresoArgs<ExtArgs>
    Favorito?: boolean | Ejercicio$FavoritoArgs<ExtArgs>
    Rutina_ejercicio?: boolean | Ejercicio$Rutina_ejercicioArgs<ExtArgs>
    _count?: boolean | EjercicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    musculo?: boolean
    video_img_url?: boolean
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    musculo?: boolean
    video_img_url?: boolean
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectScalar = {
    id?: boolean
    nombre?: boolean
    musculo?: boolean
    video_img_url?: boolean
  }

  export type EjercicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "musculo" | "video_img_url", ExtArgs["result"]["ejercicio"]>
  export type EjercicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Progreso?: boolean | Ejercicio$ProgresoArgs<ExtArgs>
    Favorito?: boolean | Ejercicio$FavoritoArgs<ExtArgs>
    Rutina_ejercicio?: boolean | Ejercicio$Rutina_ejercicioArgs<ExtArgs>
    _count?: boolean | EjercicioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EjercicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EjercicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EjercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ejercicio"
    objects: {
      Progreso: Prisma.$ProgresoPayload<ExtArgs>[]
      Favorito: Prisma.$FavoritoPayload<ExtArgs>[]
      Rutina_ejercicio: Prisma.$Rutina_ejercicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      musculo: string
      video_img_url: string
    }, ExtArgs["result"]["ejercicio"]>
    composites: {}
  }

  type EjercicioGetPayload<S extends boolean | null | undefined | EjercicioDefaultArgs> = $Result.GetResult<Prisma.$EjercicioPayload, S>

  type EjercicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EjercicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EjercicioCountAggregateInputType | true
    }

  export interface EjercicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ejercicio'], meta: { name: 'Ejercicio' } }
    /**
     * Find zero or one Ejercicio that matches the filter.
     * @param {EjercicioFindUniqueArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EjercicioFindUniqueArgs>(args: SelectSubset<T, EjercicioFindUniqueArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ejercicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EjercicioFindUniqueOrThrowArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EjercicioFindUniqueOrThrowArgs>(args: SelectSubset<T, EjercicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ejercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindFirstArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EjercicioFindFirstArgs>(args?: SelectSubset<T, EjercicioFindFirstArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ejercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindFirstOrThrowArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EjercicioFindFirstOrThrowArgs>(args?: SelectSubset<T, EjercicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ejercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ejercicios
     * const ejercicios = await prisma.ejercicio.findMany()
     * 
     * // Get first 10 Ejercicios
     * const ejercicios = await prisma.ejercicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EjercicioFindManyArgs>(args?: SelectSubset<T, EjercicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ejercicio.
     * @param {EjercicioCreateArgs} args - Arguments to create a Ejercicio.
     * @example
     * // Create one Ejercicio
     * const Ejercicio = await prisma.ejercicio.create({
     *   data: {
     *     // ... data to create a Ejercicio
     *   }
     * })
     * 
     */
    create<T extends EjercicioCreateArgs>(args: SelectSubset<T, EjercicioCreateArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ejercicios.
     * @param {EjercicioCreateManyArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicio = await prisma.ejercicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EjercicioCreateManyArgs>(args?: SelectSubset<T, EjercicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ejercicios and returns the data saved in the database.
     * @param {EjercicioCreateManyAndReturnArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicio = await prisma.ejercicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ejercicios and only return the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EjercicioCreateManyAndReturnArgs>(args?: SelectSubset<T, EjercicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ejercicio.
     * @param {EjercicioDeleteArgs} args - Arguments to delete one Ejercicio.
     * @example
     * // Delete one Ejercicio
     * const Ejercicio = await prisma.ejercicio.delete({
     *   where: {
     *     // ... filter to delete one Ejercicio
     *   }
     * })
     * 
     */
    delete<T extends EjercicioDeleteArgs>(args: SelectSubset<T, EjercicioDeleteArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ejercicio.
     * @param {EjercicioUpdateArgs} args - Arguments to update one Ejercicio.
     * @example
     * // Update one Ejercicio
     * const ejercicio = await prisma.ejercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EjercicioUpdateArgs>(args: SelectSubset<T, EjercicioUpdateArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ejercicios.
     * @param {EjercicioDeleteManyArgs} args - Arguments to filter Ejercicios to delete.
     * @example
     * // Delete a few Ejercicios
     * const { count } = await prisma.ejercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EjercicioDeleteManyArgs>(args?: SelectSubset<T, EjercicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ejercicios
     * const ejercicio = await prisma.ejercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EjercicioUpdateManyArgs>(args: SelectSubset<T, EjercicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios and returns the data updated in the database.
     * @param {EjercicioUpdateManyAndReturnArgs} args - Arguments to update many Ejercicios.
     * @example
     * // Update many Ejercicios
     * const ejercicio = await prisma.ejercicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ejercicios and only return the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.updateManyAndReturn({
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
    updateManyAndReturn<T extends EjercicioUpdateManyAndReturnArgs>(args: SelectSubset<T, EjercicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ejercicio.
     * @param {EjercicioUpsertArgs} args - Arguments to update or create a Ejercicio.
     * @example
     * // Update or create a Ejercicio
     * const ejercicio = await prisma.ejercicio.upsert({
     *   create: {
     *     // ... data to create a Ejercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ejercicio we want to update
     *   }
     * })
     */
    upsert<T extends EjercicioUpsertArgs>(args: SelectSubset<T, EjercicioUpsertArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioCountArgs} args - Arguments to filter Ejercicios to count.
     * @example
     * // Count the number of Ejercicios
     * const count = await prisma.ejercicio.count({
     *   where: {
     *     // ... the filter for the Ejercicios we want to count
     *   }
     * })
    **/
    count<T extends EjercicioCountArgs>(
      args?: Subset<T, EjercicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EjercicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EjercicioAggregateArgs>(args: Subset<T, EjercicioAggregateArgs>): Prisma.PrismaPromise<GetEjercicioAggregateType<T>>

    /**
     * Group by Ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioGroupByArgs} args - Group by arguments.
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
      T extends EjercicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EjercicioGroupByArgs['orderBy'] }
        : { orderBy?: EjercicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EjercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEjercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ejercicio model
   */
  readonly fields: EjercicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ejercicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EjercicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Progreso<T extends Ejercicio$ProgresoArgs<ExtArgs> = {}>(args?: Subset<T, Ejercicio$ProgresoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Favorito<T extends Ejercicio$FavoritoArgs<ExtArgs> = {}>(args?: Subset<T, Ejercicio$FavoritoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Rutina_ejercicio<T extends Ejercicio$Rutina_ejercicioArgs<ExtArgs> = {}>(args?: Subset<T, Ejercicio$Rutina_ejercicioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rutina_ejercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ejercicio model
   */
  interface EjercicioFieldRefs {
    readonly id: FieldRef<"Ejercicio", 'Int'>
    readonly nombre: FieldRef<"Ejercicio", 'String'>
    readonly musculo: FieldRef<"Ejercicio", 'String'>
    readonly video_img_url: FieldRef<"Ejercicio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ejercicio findUnique
   */
  export type EjercicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio findUniqueOrThrow
   */
  export type EjercicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio findFirst
   */
  export type EjercicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio findFirstOrThrow
   */
  export type EjercicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio findMany
   */
  export type EjercicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicios to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio create
   */
  export type EjercicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Ejercicio.
     */
    data: XOR<EjercicioCreateInput, EjercicioUncheckedCreateInput>
  }

  /**
   * Ejercicio createMany
   */
  export type EjercicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ejercicios.
     */
    data: EjercicioCreateManyInput | EjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ejercicio createManyAndReturn
   */
  export type EjercicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * The data used to create many Ejercicios.
     */
    data: EjercicioCreateManyInput | EjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ejercicio update
   */
  export type EjercicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Ejercicio.
     */
    data: XOR<EjercicioUpdateInput, EjercicioUncheckedUpdateInput>
    /**
     * Choose, which Ejercicio to update.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio updateMany
   */
  export type EjercicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ejercicios.
     */
    data: XOR<EjercicioUpdateManyMutationInput, EjercicioUncheckedUpdateManyInput>
    /**
     * Filter which Ejercicios to update
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to update.
     */
    limit?: number
  }

  /**
   * Ejercicio updateManyAndReturn
   */
  export type EjercicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * The data used to update Ejercicios.
     */
    data: XOR<EjercicioUpdateManyMutationInput, EjercicioUncheckedUpdateManyInput>
    /**
     * Filter which Ejercicios to update
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to update.
     */
    limit?: number
  }

  /**
   * Ejercicio upsert
   */
  export type EjercicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Ejercicio to update in case it exists.
     */
    where: EjercicioWhereUniqueInput
    /**
     * In case the Ejercicio found by the `where` argument doesn't exist, create a new Ejercicio with this data.
     */
    create: XOR<EjercicioCreateInput, EjercicioUncheckedCreateInput>
    /**
     * In case the Ejercicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EjercicioUpdateInput, EjercicioUncheckedUpdateInput>
  }

  /**
   * Ejercicio delete
   */
  export type EjercicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter which Ejercicio to delete.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio deleteMany
   */
  export type EjercicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ejercicios to delete
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to delete.
     */
    limit?: number
  }

  /**
   * Ejercicio.Progreso
   */
  export type Ejercicio$ProgresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progreso
     */
    select?: ProgresoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progreso
     */
    omit?: ProgresoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInclude<ExtArgs> | null
    where?: ProgresoWhereInput
    orderBy?: ProgresoOrderByWithRelationInput | ProgresoOrderByWithRelationInput[]
    cursor?: ProgresoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresoScalarFieldEnum | ProgresoScalarFieldEnum[]
  }

  /**
   * Ejercicio.Favorito
   */
  export type Ejercicio$FavoritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Ejercicio.Rutina_ejercicio
   */
  export type Ejercicio$Rutina_ejercicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Ejercicio without action
   */
  export type EjercicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
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
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina_ejercicio"]>

  export type Rutina_ejercicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutina_id?: boolean
    ejercicio_id?: boolean
    series?: boolean
    repeticiones?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina_ejercicio"]>

  export type Rutina_ejercicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutina_id?: boolean
    ejercicio_id?: boolean
    series?: boolean
    repeticiones?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
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
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type Rutina_ejercicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type Rutina_ejercicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }

  export type $Rutina_ejercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rutina_ejercicio"
    objects: {
      rutina: Prisma.$RutinaPayload<ExtArgs>
      ejercicio: Prisma.$EjercicioPayload<ExtArgs>
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
    rutina<T extends RutinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutinaDefaultArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ejercicio<T extends EjercicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EjercicioDefaultArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    rol: 'rol',
    fecha_creacion: 'fecha_creacion'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ProgresoScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    ejercicio_id: 'ejercicio_id',
    fecha: 'fecha',
    peso_usado: 'peso_usado',
    repeticiones: 'repeticiones'
  };

  export type ProgresoScalarFieldEnum = (typeof ProgresoScalarFieldEnum)[keyof typeof ProgresoScalarFieldEnum]


  export const RutinaScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    nombre: 'nombre',
    fecha_creacion: 'fecha_creacion'
  };

  export type RutinaScalarFieldEnum = (typeof RutinaScalarFieldEnum)[keyof typeof RutinaScalarFieldEnum]


  export const FavoritoScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    ejercicio_id: 'ejercicio_id'
  };

  export type FavoritoScalarFieldEnum = (typeof FavoritoScalarFieldEnum)[keyof typeof FavoritoScalarFieldEnum]


  export const EjercicioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    musculo: 'musculo',
    video_img_url: 'video_img_url'
  };

  export type EjercicioScalarFieldEnum = (typeof EjercicioScalarFieldEnum)[keyof typeof EjercicioScalarFieldEnum]


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
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    fecha_creacion?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    Progreso?: ProgresoListRelationFilter
    Rutina?: RutinaListRelationFilter
    Favorito?: FavoritoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    Progreso?: ProgresoOrderByRelationAggregateInput
    Rutina?: RutinaOrderByRelationAggregateInput
    Favorito?: FavoritoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    fecha_creacion?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    Progreso?: ProgresoListRelationFilter
    Rutina?: RutinaListRelationFilter
    Favorito?: FavoritoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
  }

  export type ProgresoWhereInput = {
    AND?: ProgresoWhereInput | ProgresoWhereInput[]
    OR?: ProgresoWhereInput[]
    NOT?: ProgresoWhereInput | ProgresoWhereInput[]
    id?: IntFilter<"Progreso"> | number
    usuario_id?: IntFilter<"Progreso"> | number
    ejercicio_id?: IntFilter<"Progreso"> | number
    fecha?: DateTimeNullableFilter<"Progreso"> | Date | string | null
    peso_usado?: FloatFilter<"Progreso"> | number
    repeticiones?: IntFilter<"Progreso"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ejercicio?: XOR<EjercicioScalarRelationFilter, EjercicioWhereInput>
  }

  export type ProgresoOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    fecha?: SortOrderInput | SortOrder
    peso_usado?: SortOrder
    repeticiones?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    ejercicio?: EjercicioOrderByWithRelationInput
  }

  export type ProgresoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProgresoWhereInput | ProgresoWhereInput[]
    OR?: ProgresoWhereInput[]
    NOT?: ProgresoWhereInput | ProgresoWhereInput[]
    usuario_id?: IntFilter<"Progreso"> | number
    ejercicio_id?: IntFilter<"Progreso"> | number
    fecha?: DateTimeNullableFilter<"Progreso"> | Date | string | null
    peso_usado?: FloatFilter<"Progreso"> | number
    repeticiones?: IntFilter<"Progreso"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ejercicio?: XOR<EjercicioScalarRelationFilter, EjercicioWhereInput>
  }, "id">

  export type ProgresoOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    fecha?: SortOrderInput | SortOrder
    peso_usado?: SortOrder
    repeticiones?: SortOrder
    _count?: ProgresoCountOrderByAggregateInput
    _avg?: ProgresoAvgOrderByAggregateInput
    _max?: ProgresoMaxOrderByAggregateInput
    _min?: ProgresoMinOrderByAggregateInput
    _sum?: ProgresoSumOrderByAggregateInput
  }

  export type ProgresoScalarWhereWithAggregatesInput = {
    AND?: ProgresoScalarWhereWithAggregatesInput | ProgresoScalarWhereWithAggregatesInput[]
    OR?: ProgresoScalarWhereWithAggregatesInput[]
    NOT?: ProgresoScalarWhereWithAggregatesInput | ProgresoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Progreso"> | number
    usuario_id?: IntWithAggregatesFilter<"Progreso"> | number
    ejercicio_id?: IntWithAggregatesFilter<"Progreso"> | number
    fecha?: DateTimeNullableWithAggregatesFilter<"Progreso"> | Date | string | null
    peso_usado?: FloatWithAggregatesFilter<"Progreso"> | number
    repeticiones?: IntWithAggregatesFilter<"Progreso"> | number
  }

  export type RutinaWhereInput = {
    AND?: RutinaWhereInput | RutinaWhereInput[]
    OR?: RutinaWhereInput[]
    NOT?: RutinaWhereInput | RutinaWhereInput[]
    id?: IntFilter<"Rutina"> | number
    usuario_id?: IntFilter<"Rutina"> | number
    nombre?: StringFilter<"Rutina"> | string
    fecha_creacion?: DateTimeNullableFilter<"Rutina"> | Date | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Rutina_ejercicio?: Rutina_ejercicioListRelationFilter
  }

  export type RutinaOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    nombre?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    Rutina_ejercicio?: Rutina_ejercicioOrderByRelationAggregateInput
  }

  export type RutinaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RutinaWhereInput | RutinaWhereInput[]
    OR?: RutinaWhereInput[]
    NOT?: RutinaWhereInput | RutinaWhereInput[]
    usuario_id?: IntFilter<"Rutina"> | number
    nombre?: StringFilter<"Rutina"> | string
    fecha_creacion?: DateTimeNullableFilter<"Rutina"> | Date | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Rutina_ejercicio?: Rutina_ejercicioListRelationFilter
  }, "id">

  export type RutinaOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    nombre?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    _count?: RutinaCountOrderByAggregateInput
    _avg?: RutinaAvgOrderByAggregateInput
    _max?: RutinaMaxOrderByAggregateInput
    _min?: RutinaMinOrderByAggregateInput
    _sum?: RutinaSumOrderByAggregateInput
  }

  export type RutinaScalarWhereWithAggregatesInput = {
    AND?: RutinaScalarWhereWithAggregatesInput | RutinaScalarWhereWithAggregatesInput[]
    OR?: RutinaScalarWhereWithAggregatesInput[]
    NOT?: RutinaScalarWhereWithAggregatesInput | RutinaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rutina"> | number
    usuario_id?: IntWithAggregatesFilter<"Rutina"> | number
    nombre?: StringWithAggregatesFilter<"Rutina"> | string
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"Rutina"> | Date | string | null
  }

  export type FavoritoWhereInput = {
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    id?: IntFilter<"Favorito"> | number
    usuario_id?: IntFilter<"Favorito"> | number
    ejercicio_id?: IntFilter<"Favorito"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ejercicio?: XOR<EjercicioScalarRelationFilter, EjercicioWhereInput>
  }

  export type FavoritoOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    ejercicio?: EjercicioOrderByWithRelationInput
  }

  export type FavoritoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    usuario_id?: IntFilter<"Favorito"> | number
    ejercicio_id?: IntFilter<"Favorito"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ejercicio?: XOR<EjercicioScalarRelationFilter, EjercicioWhereInput>
  }, "id">

  export type FavoritoOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    _count?: FavoritoCountOrderByAggregateInput
    _avg?: FavoritoAvgOrderByAggregateInput
    _max?: FavoritoMaxOrderByAggregateInput
    _min?: FavoritoMinOrderByAggregateInput
    _sum?: FavoritoSumOrderByAggregateInput
  }

  export type FavoritoScalarWhereWithAggregatesInput = {
    AND?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    OR?: FavoritoScalarWhereWithAggregatesInput[]
    NOT?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Favorito"> | number
    usuario_id?: IntWithAggregatesFilter<"Favorito"> | number
    ejercicio_id?: IntWithAggregatesFilter<"Favorito"> | number
  }

  export type EjercicioWhereInput = {
    AND?: EjercicioWhereInput | EjercicioWhereInput[]
    OR?: EjercicioWhereInput[]
    NOT?: EjercicioWhereInput | EjercicioWhereInput[]
    id?: IntFilter<"Ejercicio"> | number
    nombre?: StringFilter<"Ejercicio"> | string
    musculo?: StringFilter<"Ejercicio"> | string
    video_img_url?: StringFilter<"Ejercicio"> | string
    Progreso?: ProgresoListRelationFilter
    Favorito?: FavoritoListRelationFilter
    Rutina_ejercicio?: Rutina_ejercicioListRelationFilter
  }

  export type EjercicioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    musculo?: SortOrder
    video_img_url?: SortOrder
    Progreso?: ProgresoOrderByRelationAggregateInput
    Favorito?: FavoritoOrderByRelationAggregateInput
    Rutina_ejercicio?: Rutina_ejercicioOrderByRelationAggregateInput
  }

  export type EjercicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EjercicioWhereInput | EjercicioWhereInput[]
    OR?: EjercicioWhereInput[]
    NOT?: EjercicioWhereInput | EjercicioWhereInput[]
    nombre?: StringFilter<"Ejercicio"> | string
    musculo?: StringFilter<"Ejercicio"> | string
    video_img_url?: StringFilter<"Ejercicio"> | string
    Progreso?: ProgresoListRelationFilter
    Favorito?: FavoritoListRelationFilter
    Rutina_ejercicio?: Rutina_ejercicioListRelationFilter
  }, "id">

  export type EjercicioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    musculo?: SortOrder
    video_img_url?: SortOrder
    _count?: EjercicioCountOrderByAggregateInput
    _avg?: EjercicioAvgOrderByAggregateInput
    _max?: EjercicioMaxOrderByAggregateInput
    _min?: EjercicioMinOrderByAggregateInput
    _sum?: EjercicioSumOrderByAggregateInput
  }

  export type EjercicioScalarWhereWithAggregatesInput = {
    AND?: EjercicioScalarWhereWithAggregatesInput | EjercicioScalarWhereWithAggregatesInput[]
    OR?: EjercicioScalarWhereWithAggregatesInput[]
    NOT?: EjercicioScalarWhereWithAggregatesInput | EjercicioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ejercicio"> | number
    nombre?: StringWithAggregatesFilter<"Ejercicio"> | string
    musculo?: StringWithAggregatesFilter<"Ejercicio"> | string
    video_img_url?: StringWithAggregatesFilter<"Ejercicio"> | string
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
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
    ejercicio?: XOR<EjercicioScalarRelationFilter, EjercicioWhereInput>
  }

  export type Rutina_ejercicioOrderByWithRelationInput = {
    id?: SortOrder
    rutina_id?: SortOrder
    ejercicio_id?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    rutina?: RutinaOrderByWithRelationInput
    ejercicio?: EjercicioOrderByWithRelationInput
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
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
    ejercicio?: XOR<EjercicioScalarRelationFilter, EjercicioWhereInput>
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

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fecha_creacion?: Date | string | null
    Progreso?: ProgresoCreateNestedManyWithoutUsuarioInput
    Rutina?: RutinaCreateNestedManyWithoutUsuarioInput
    Favorito?: FavoritoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fecha_creacion?: Date | string | null
    Progreso?: ProgresoUncheckedCreateNestedManyWithoutUsuarioInput
    Rutina?: RutinaUncheckedCreateNestedManyWithoutUsuarioInput
    Favorito?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Progreso?: ProgresoUpdateManyWithoutUsuarioNestedInput
    Rutina?: RutinaUpdateManyWithoutUsuarioNestedInput
    Favorito?: FavoritoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Progreso?: ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput
    Rutina?: RutinaUncheckedUpdateManyWithoutUsuarioNestedInput
    Favorito?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fecha_creacion?: Date | string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgresoCreateInput = {
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
    usuario: UsuarioCreateNestedOneWithoutProgresoInput
    ejercicio: EjercicioCreateNestedOneWithoutProgresoInput
  }

  export type ProgresoUncheckedCreateInput = {
    id?: number
    usuario_id: number
    ejercicio_id: number
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
  }

  export type ProgresoUpdateInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutProgresoNestedInput
    ejercicio?: EjercicioUpdateOneRequiredWithoutProgresoNestedInput
  }

  export type ProgresoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type ProgresoCreateManyInput = {
    id?: number
    usuario_id: number
    ejercicio_id: number
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
  }

  export type ProgresoUpdateManyMutationInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type ProgresoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type RutinaCreateInput = {
    nombre: string
    fecha_creacion?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutRutinaInput
    Rutina_ejercicio?: Rutina_ejercicioCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateInput = {
    id?: number
    usuario_id: number
    nombre: string
    fecha_creacion?: Date | string | null
    Rutina_ejercicio?: Rutina_ejercicioUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutRutinaNestedInput
    Rutina_ejercicio?: Rutina_ejercicioUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rutina_ejercicio?: Rutina_ejercicioUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaCreateManyInput = {
    id?: number
    usuario_id: number
    nombre: string
    fecha_creacion?: Date | string | null
  }

  export type RutinaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RutinaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FavoritoCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutFavoritoInput
    ejercicio: EjercicioCreateNestedOneWithoutFavoritoInput
  }

  export type FavoritoUncheckedCreateInput = {
    id?: number
    usuario_id: number
    ejercicio_id: number
  }

  export type FavoritoUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutFavoritoNestedInput
    ejercicio?: EjercicioUpdateOneRequiredWithoutFavoritoNestedInput
  }

  export type FavoritoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoritoCreateManyInput = {
    id?: number
    usuario_id: number
    ejercicio_id: number
  }

  export type FavoritoUpdateManyMutationInput = {

  }

  export type FavoritoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
  }

  export type EjercicioCreateInput = {
    nombre: string
    musculo: string
    video_img_url: string
    Progreso?: ProgresoCreateNestedManyWithoutEjercicioInput
    Favorito?: FavoritoCreateNestedManyWithoutEjercicioInput
    Rutina_ejercicio?: Rutina_ejercicioCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUncheckedCreateInput = {
    id?: number
    nombre: string
    musculo: string
    video_img_url: string
    Progreso?: ProgresoUncheckedCreateNestedManyWithoutEjercicioInput
    Favorito?: FavoritoUncheckedCreateNestedManyWithoutEjercicioInput
    Rutina_ejercicio?: Rutina_ejercicioUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Progreso?: ProgresoUpdateManyWithoutEjercicioNestedInput
    Favorito?: FavoritoUpdateManyWithoutEjercicioNestedInput
    Rutina_ejercicio?: Rutina_ejercicioUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Progreso?: ProgresoUncheckedUpdateManyWithoutEjercicioNestedInput
    Favorito?: FavoritoUncheckedUpdateManyWithoutEjercicioNestedInput
    Rutina_ejercicio?: Rutina_ejercicioUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioCreateManyInput = {
    id?: number
    nombre: string
    musculo: string
    video_img_url: string
  }

  export type EjercicioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
  }

  export type EjercicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
  }

  export type Rutina_ejercicioCreateInput = {
    series: number
    repeticiones: number
    rutina: RutinaCreateNestedOneWithoutRutina_ejercicioInput
    ejercicio: EjercicioCreateNestedOneWithoutRutina_ejercicioInput
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
    rutina?: RutinaUpdateOneRequiredWithoutRutina_ejercicioNestedInput
    ejercicio?: EjercicioUpdateOneRequiredWithoutRutina_ejercicioNestedInput
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

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type ProgresoListRelationFilter = {
    every?: ProgresoWhereInput
    some?: ProgresoWhereInput
    none?: ProgresoWhereInput
  }

  export type RutinaListRelationFilter = {
    every?: RutinaWhereInput
    some?: RutinaWhereInput
    none?: RutinaWhereInput
  }

  export type FavoritoListRelationFilter = {
    every?: FavoritoWhereInput
    some?: FavoritoWhereInput
    none?: FavoritoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProgresoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RutinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type EjercicioScalarRelationFilter = {
    is?: EjercicioWhereInput
    isNot?: EjercicioWhereInput
  }

  export type ProgresoCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    fecha?: SortOrder
    peso_usado?: SortOrder
    repeticiones?: SortOrder
  }

  export type ProgresoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    peso_usado?: SortOrder
    repeticiones?: SortOrder
  }

  export type ProgresoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    fecha?: SortOrder
    peso_usado?: SortOrder
    repeticiones?: SortOrder
  }

  export type ProgresoMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    fecha?: SortOrder
    peso_usado?: SortOrder
    repeticiones?: SortOrder
  }

  export type ProgresoSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
    peso_usado?: SortOrder
    repeticiones?: SortOrder
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

  export type RutinaCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    nombre?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type RutinaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type RutinaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    nombre?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type RutinaMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    nombre?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type RutinaSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type FavoritoCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
  }

  export type FavoritoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
  }

  export type FavoritoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
  }

  export type FavoritoMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
  }

  export type FavoritoSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    ejercicio_id?: SortOrder
  }

  export type EjercicioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    musculo?: SortOrder
    video_img_url?: SortOrder
  }

  export type EjercicioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EjercicioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    musculo?: SortOrder
    video_img_url?: SortOrder
  }

  export type EjercicioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    musculo?: SortOrder
    video_img_url?: SortOrder
  }

  export type EjercicioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RutinaScalarRelationFilter = {
    is?: RutinaWhereInput
    isNot?: RutinaWhereInput
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

  export type ProgresoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
  }

  export type RutinaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput> | RutinaCreateWithoutUsuarioInput[] | RutinaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutUsuarioInput | RutinaCreateOrConnectWithoutUsuarioInput[]
    createMany?: RutinaCreateManyUsuarioInputEnvelope
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type ProgresoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
  }

  export type RutinaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput> | RutinaCreateWithoutUsuarioInput[] | RutinaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutUsuarioInput | RutinaCreateOrConnectWithoutUsuarioInput[]
    createMany?: RutinaCreateManyUsuarioInputEnvelope
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProgresoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProgresoUpsertWithWhereUniqueWithoutUsuarioInput | ProgresoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    set?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    disconnect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    delete?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    update?: ProgresoUpdateWithWhereUniqueWithoutUsuarioInput | ProgresoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProgresoUpdateManyWithWhereWithoutUsuarioInput | ProgresoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
  }

  export type RutinaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput> | RutinaCreateWithoutUsuarioInput[] | RutinaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutUsuarioInput | RutinaCreateOrConnectWithoutUsuarioInput[]
    upsert?: RutinaUpsertWithWhereUniqueWithoutUsuarioInput | RutinaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RutinaCreateManyUsuarioInputEnvelope
    set?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    disconnect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    delete?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    update?: RutinaUpdateWithWhereUniqueWithoutUsuarioInput | RutinaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RutinaUpdateManyWithWhereWithoutUsuarioInput | RutinaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUsuarioInput | FavoritoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUsuarioInput | FavoritoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUsuarioInput | FavoritoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput> | ProgresoCreateWithoutUsuarioInput[] | ProgresoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutUsuarioInput | ProgresoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProgresoUpsertWithWhereUniqueWithoutUsuarioInput | ProgresoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProgresoCreateManyUsuarioInputEnvelope
    set?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    disconnect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    delete?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    update?: ProgresoUpdateWithWhereUniqueWithoutUsuarioInput | ProgresoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProgresoUpdateManyWithWhereWithoutUsuarioInput | ProgresoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
  }

  export type RutinaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput> | RutinaCreateWithoutUsuarioInput[] | RutinaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutUsuarioInput | RutinaCreateOrConnectWithoutUsuarioInput[]
    upsert?: RutinaUpsertWithWhereUniqueWithoutUsuarioInput | RutinaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RutinaCreateManyUsuarioInputEnvelope
    set?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    disconnect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    delete?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    update?: RutinaUpdateWithWhereUniqueWithoutUsuarioInput | RutinaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RutinaUpdateManyWithWhereWithoutUsuarioInput | RutinaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUsuarioInput | FavoritoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUsuarioInput | FavoritoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUsuarioInput | FavoritoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutProgresoInput = {
    create?: XOR<UsuarioCreateWithoutProgresoInput, UsuarioUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgresoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EjercicioCreateNestedOneWithoutProgresoInput = {
    create?: XOR<EjercicioCreateWithoutProgresoInput, EjercicioUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutProgresoInput
    connect?: EjercicioWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutProgresoNestedInput = {
    create?: XOR<UsuarioCreateWithoutProgresoInput, UsuarioUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgresoInput
    upsert?: UsuarioUpsertWithoutProgresoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProgresoInput, UsuarioUpdateWithoutProgresoInput>, UsuarioUncheckedUpdateWithoutProgresoInput>
  }

  export type EjercicioUpdateOneRequiredWithoutProgresoNestedInput = {
    create?: XOR<EjercicioCreateWithoutProgresoInput, EjercicioUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutProgresoInput
    upsert?: EjercicioUpsertWithoutProgresoInput
    connect?: EjercicioWhereUniqueInput
    update?: XOR<XOR<EjercicioUpdateToOneWithWhereWithoutProgresoInput, EjercicioUpdateWithoutProgresoInput>, EjercicioUncheckedUpdateWithoutProgresoInput>
  }

  export type UsuarioCreateNestedOneWithoutRutinaInput = {
    create?: XOR<UsuarioCreateWithoutRutinaInput, UsuarioUncheckedCreateWithoutRutinaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRutinaInput
    connect?: UsuarioWhereUniqueInput
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

  export type UsuarioUpdateOneRequiredWithoutRutinaNestedInput = {
    create?: XOR<UsuarioCreateWithoutRutinaInput, UsuarioUncheckedCreateWithoutRutinaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRutinaInput
    upsert?: UsuarioUpsertWithoutRutinaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRutinaInput, UsuarioUpdateWithoutRutinaInput>, UsuarioUncheckedUpdateWithoutRutinaInput>
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

  export type UsuarioCreateNestedOneWithoutFavoritoInput = {
    create?: XOR<UsuarioCreateWithoutFavoritoInput, UsuarioUncheckedCreateWithoutFavoritoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFavoritoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EjercicioCreateNestedOneWithoutFavoritoInput = {
    create?: XOR<EjercicioCreateWithoutFavoritoInput, EjercicioUncheckedCreateWithoutFavoritoInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutFavoritoInput
    connect?: EjercicioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutFavoritoNestedInput = {
    create?: XOR<UsuarioCreateWithoutFavoritoInput, UsuarioUncheckedCreateWithoutFavoritoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFavoritoInput
    upsert?: UsuarioUpsertWithoutFavoritoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFavoritoInput, UsuarioUpdateWithoutFavoritoInput>, UsuarioUncheckedUpdateWithoutFavoritoInput>
  }

  export type EjercicioUpdateOneRequiredWithoutFavoritoNestedInput = {
    create?: XOR<EjercicioCreateWithoutFavoritoInput, EjercicioUncheckedCreateWithoutFavoritoInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutFavoritoInput
    upsert?: EjercicioUpsertWithoutFavoritoInput
    connect?: EjercicioWhereUniqueInput
    update?: XOR<XOR<EjercicioUpdateToOneWithWhereWithoutFavoritoInput, EjercicioUpdateWithoutFavoritoInput>, EjercicioUncheckedUpdateWithoutFavoritoInput>
  }

  export type ProgresoCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<ProgresoCreateWithoutEjercicioInput, ProgresoUncheckedCreateWithoutEjercicioInput> | ProgresoCreateWithoutEjercicioInput[] | ProgresoUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutEjercicioInput | ProgresoCreateOrConnectWithoutEjercicioInput[]
    createMany?: ProgresoCreateManyEjercicioInputEnvelope
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<FavoritoCreateWithoutEjercicioInput, FavoritoUncheckedCreateWithoutEjercicioInput> | FavoritoCreateWithoutEjercicioInput[] | FavoritoUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutEjercicioInput | FavoritoCreateOrConnectWithoutEjercicioInput[]
    createMany?: FavoritoCreateManyEjercicioInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type Rutina_ejercicioCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<Rutina_ejercicioCreateWithoutEjercicioInput, Rutina_ejercicioUncheckedCreateWithoutEjercicioInput> | Rutina_ejercicioCreateWithoutEjercicioInput[] | Rutina_ejercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: Rutina_ejercicioCreateOrConnectWithoutEjercicioInput | Rutina_ejercicioCreateOrConnectWithoutEjercicioInput[]
    createMany?: Rutina_ejercicioCreateManyEjercicioInputEnvelope
    connect?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
  }

  export type ProgresoUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<ProgresoCreateWithoutEjercicioInput, ProgresoUncheckedCreateWithoutEjercicioInput> | ProgresoCreateWithoutEjercicioInput[] | ProgresoUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutEjercicioInput | ProgresoCreateOrConnectWithoutEjercicioInput[]
    createMany?: ProgresoCreateManyEjercicioInputEnvelope
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<FavoritoCreateWithoutEjercicioInput, FavoritoUncheckedCreateWithoutEjercicioInput> | FavoritoCreateWithoutEjercicioInput[] | FavoritoUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutEjercicioInput | FavoritoCreateOrConnectWithoutEjercicioInput[]
    createMany?: FavoritoCreateManyEjercicioInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type Rutina_ejercicioUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<Rutina_ejercicioCreateWithoutEjercicioInput, Rutina_ejercicioUncheckedCreateWithoutEjercicioInput> | Rutina_ejercicioCreateWithoutEjercicioInput[] | Rutina_ejercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: Rutina_ejercicioCreateOrConnectWithoutEjercicioInput | Rutina_ejercicioCreateOrConnectWithoutEjercicioInput[]
    createMany?: Rutina_ejercicioCreateManyEjercicioInputEnvelope
    connect?: Rutina_ejercicioWhereUniqueInput | Rutina_ejercicioWhereUniqueInput[]
  }

  export type ProgresoUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<ProgresoCreateWithoutEjercicioInput, ProgresoUncheckedCreateWithoutEjercicioInput> | ProgresoCreateWithoutEjercicioInput[] | ProgresoUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutEjercicioInput | ProgresoCreateOrConnectWithoutEjercicioInput[]
    upsert?: ProgresoUpsertWithWhereUniqueWithoutEjercicioInput | ProgresoUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: ProgresoCreateManyEjercicioInputEnvelope
    set?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    disconnect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    delete?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    update?: ProgresoUpdateWithWhereUniqueWithoutEjercicioInput | ProgresoUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: ProgresoUpdateManyWithWhereWithoutEjercicioInput | ProgresoUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<FavoritoCreateWithoutEjercicioInput, FavoritoUncheckedCreateWithoutEjercicioInput> | FavoritoCreateWithoutEjercicioInput[] | FavoritoUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutEjercicioInput | FavoritoCreateOrConnectWithoutEjercicioInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutEjercicioInput | FavoritoUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: FavoritoCreateManyEjercicioInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutEjercicioInput | FavoritoUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutEjercicioInput | FavoritoUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
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

  export type ProgresoUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<ProgresoCreateWithoutEjercicioInput, ProgresoUncheckedCreateWithoutEjercicioInput> | ProgresoCreateWithoutEjercicioInput[] | ProgresoUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: ProgresoCreateOrConnectWithoutEjercicioInput | ProgresoCreateOrConnectWithoutEjercicioInput[]
    upsert?: ProgresoUpsertWithWhereUniqueWithoutEjercicioInput | ProgresoUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: ProgresoCreateManyEjercicioInputEnvelope
    set?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    disconnect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    delete?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    connect?: ProgresoWhereUniqueInput | ProgresoWhereUniqueInput[]
    update?: ProgresoUpdateWithWhereUniqueWithoutEjercicioInput | ProgresoUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: ProgresoUpdateManyWithWhereWithoutEjercicioInput | ProgresoUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<FavoritoCreateWithoutEjercicioInput, FavoritoUncheckedCreateWithoutEjercicioInput> | FavoritoCreateWithoutEjercicioInput[] | FavoritoUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutEjercicioInput | FavoritoCreateOrConnectWithoutEjercicioInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutEjercicioInput | FavoritoUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: FavoritoCreateManyEjercicioInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutEjercicioInput | FavoritoUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutEjercicioInput | FavoritoUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
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

  export type RutinaCreateNestedOneWithoutRutina_ejercicioInput = {
    create?: XOR<RutinaCreateWithoutRutina_ejercicioInput, RutinaUncheckedCreateWithoutRutina_ejercicioInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutRutina_ejercicioInput
    connect?: RutinaWhereUniqueInput
  }

  export type EjercicioCreateNestedOneWithoutRutina_ejercicioInput = {
    create?: XOR<EjercicioCreateWithoutRutina_ejercicioInput, EjercicioUncheckedCreateWithoutRutina_ejercicioInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutRutina_ejercicioInput
    connect?: EjercicioWhereUniqueInput
  }

  export type RutinaUpdateOneRequiredWithoutRutina_ejercicioNestedInput = {
    create?: XOR<RutinaCreateWithoutRutina_ejercicioInput, RutinaUncheckedCreateWithoutRutina_ejercicioInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutRutina_ejercicioInput
    upsert?: RutinaUpsertWithoutRutina_ejercicioInput
    connect?: RutinaWhereUniqueInput
    update?: XOR<XOR<RutinaUpdateToOneWithWhereWithoutRutina_ejercicioInput, RutinaUpdateWithoutRutina_ejercicioInput>, RutinaUncheckedUpdateWithoutRutina_ejercicioInput>
  }

  export type EjercicioUpdateOneRequiredWithoutRutina_ejercicioNestedInput = {
    create?: XOR<EjercicioCreateWithoutRutina_ejercicioInput, EjercicioUncheckedCreateWithoutRutina_ejercicioInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutRutina_ejercicioInput
    upsert?: EjercicioUpsertWithoutRutina_ejercicioInput
    connect?: EjercicioWhereUniqueInput
    update?: XOR<XOR<EjercicioUpdateToOneWithWhereWithoutRutina_ejercicioInput, EjercicioUpdateWithoutRutina_ejercicioInput>, EjercicioUncheckedUpdateWithoutRutina_ejercicioInput>
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

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type ProgresoCreateWithoutUsuarioInput = {
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
    ejercicio: EjercicioCreateNestedOneWithoutProgresoInput
  }

  export type ProgresoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    ejercicio_id: number
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
  }

  export type ProgresoCreateOrConnectWithoutUsuarioInput = {
    where: ProgresoWhereUniqueInput
    create: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput>
  }

  export type ProgresoCreateManyUsuarioInputEnvelope = {
    data: ProgresoCreateManyUsuarioInput | ProgresoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RutinaCreateWithoutUsuarioInput = {
    nombre: string
    fecha_creacion?: Date | string | null
    Rutina_ejercicio?: Rutina_ejercicioCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nombre: string
    fecha_creacion?: Date | string | null
    Rutina_ejercicio?: Rutina_ejercicioUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaCreateOrConnectWithoutUsuarioInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput>
  }

  export type RutinaCreateManyUsuarioInputEnvelope = {
    data: RutinaCreateManyUsuarioInput | RutinaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FavoritoCreateWithoutUsuarioInput = {
    ejercicio: EjercicioCreateNestedOneWithoutFavoritoInput
  }

  export type FavoritoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    ejercicio_id: number
  }

  export type FavoritoCreateOrConnectWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput>
  }

  export type FavoritoCreateManyUsuarioInputEnvelope = {
    data: FavoritoCreateManyUsuarioInput | FavoritoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ProgresoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ProgresoWhereUniqueInput
    update: XOR<ProgresoUpdateWithoutUsuarioInput, ProgresoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProgresoCreateWithoutUsuarioInput, ProgresoUncheckedCreateWithoutUsuarioInput>
  }

  export type ProgresoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ProgresoWhereUniqueInput
    data: XOR<ProgresoUpdateWithoutUsuarioInput, ProgresoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProgresoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ProgresoScalarWhereInput
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ProgresoScalarWhereInput = {
    AND?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
    OR?: ProgresoScalarWhereInput[]
    NOT?: ProgresoScalarWhereInput | ProgresoScalarWhereInput[]
    id?: IntFilter<"Progreso"> | number
    usuario_id?: IntFilter<"Progreso"> | number
    ejercicio_id?: IntFilter<"Progreso"> | number
    fecha?: DateTimeNullableFilter<"Progreso"> | Date | string | null
    peso_usado?: FloatFilter<"Progreso"> | number
    repeticiones?: IntFilter<"Progreso"> | number
  }

  export type RutinaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RutinaWhereUniqueInput
    update: XOR<RutinaUpdateWithoutUsuarioInput, RutinaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput>
  }

  export type RutinaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RutinaWhereUniqueInput
    data: XOR<RutinaUpdateWithoutUsuarioInput, RutinaUncheckedUpdateWithoutUsuarioInput>
  }

  export type RutinaUpdateManyWithWhereWithoutUsuarioInput = {
    where: RutinaScalarWhereInput
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RutinaScalarWhereInput = {
    AND?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
    OR?: RutinaScalarWhereInput[]
    NOT?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
    id?: IntFilter<"Rutina"> | number
    usuario_id?: IntFilter<"Rutina"> | number
    nombre?: StringFilter<"Rutina"> | string
    fecha_creacion?: DateTimeNullableFilter<"Rutina"> | Date | string | null
  }

  export type FavoritoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutUsuarioInput, FavoritoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutUsuarioInput, FavoritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutUsuarioInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type FavoritoScalarWhereInput = {
    AND?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    OR?: FavoritoScalarWhereInput[]
    NOT?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    id?: IntFilter<"Favorito"> | number
    usuario_id?: IntFilter<"Favorito"> | number
    ejercicio_id?: IntFilter<"Favorito"> | number
  }

  export type UsuarioCreateWithoutProgresoInput = {
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fecha_creacion?: Date | string | null
    Rutina?: RutinaCreateNestedManyWithoutUsuarioInput
    Favorito?: FavoritoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProgresoInput = {
    id?: number
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fecha_creacion?: Date | string | null
    Rutina?: RutinaUncheckedCreateNestedManyWithoutUsuarioInput
    Favorito?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProgresoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProgresoInput, UsuarioUncheckedCreateWithoutProgresoInput>
  }

  export type EjercicioCreateWithoutProgresoInput = {
    nombre: string
    musculo: string
    video_img_url: string
    Favorito?: FavoritoCreateNestedManyWithoutEjercicioInput
    Rutina_ejercicio?: Rutina_ejercicioCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUncheckedCreateWithoutProgresoInput = {
    id?: number
    nombre: string
    musculo: string
    video_img_url: string
    Favorito?: FavoritoUncheckedCreateNestedManyWithoutEjercicioInput
    Rutina_ejercicio?: Rutina_ejercicioUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioCreateOrConnectWithoutProgresoInput = {
    where: EjercicioWhereUniqueInput
    create: XOR<EjercicioCreateWithoutProgresoInput, EjercicioUncheckedCreateWithoutProgresoInput>
  }

  export type UsuarioUpsertWithoutProgresoInput = {
    update: XOR<UsuarioUpdateWithoutProgresoInput, UsuarioUncheckedUpdateWithoutProgresoInput>
    create: XOR<UsuarioCreateWithoutProgresoInput, UsuarioUncheckedCreateWithoutProgresoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProgresoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProgresoInput, UsuarioUncheckedUpdateWithoutProgresoInput>
  }

  export type UsuarioUpdateWithoutProgresoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rutina?: RutinaUpdateManyWithoutUsuarioNestedInput
    Favorito?: FavoritoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProgresoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rutina?: RutinaUncheckedUpdateManyWithoutUsuarioNestedInput
    Favorito?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type EjercicioUpsertWithoutProgresoInput = {
    update: XOR<EjercicioUpdateWithoutProgresoInput, EjercicioUncheckedUpdateWithoutProgresoInput>
    create: XOR<EjercicioCreateWithoutProgresoInput, EjercicioUncheckedCreateWithoutProgresoInput>
    where?: EjercicioWhereInput
  }

  export type EjercicioUpdateToOneWithWhereWithoutProgresoInput = {
    where?: EjercicioWhereInput
    data: XOR<EjercicioUpdateWithoutProgresoInput, EjercicioUncheckedUpdateWithoutProgresoInput>
  }

  export type EjercicioUpdateWithoutProgresoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Favorito?: FavoritoUpdateManyWithoutEjercicioNestedInput
    Rutina_ejercicio?: Rutina_ejercicioUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioUncheckedUpdateWithoutProgresoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Favorito?: FavoritoUncheckedUpdateManyWithoutEjercicioNestedInput
    Rutina_ejercicio?: Rutina_ejercicioUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type UsuarioCreateWithoutRutinaInput = {
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fecha_creacion?: Date | string | null
    Progreso?: ProgresoCreateNestedManyWithoutUsuarioInput
    Favorito?: FavoritoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRutinaInput = {
    id?: number
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fecha_creacion?: Date | string | null
    Progreso?: ProgresoUncheckedCreateNestedManyWithoutUsuarioInput
    Favorito?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRutinaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRutinaInput, UsuarioUncheckedCreateWithoutRutinaInput>
  }

  export type Rutina_ejercicioCreateWithoutRutinaInput = {
    series: number
    repeticiones: number
    ejercicio: EjercicioCreateNestedOneWithoutRutina_ejercicioInput
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

  export type UsuarioUpsertWithoutRutinaInput = {
    update: XOR<UsuarioUpdateWithoutRutinaInput, UsuarioUncheckedUpdateWithoutRutinaInput>
    create: XOR<UsuarioCreateWithoutRutinaInput, UsuarioUncheckedCreateWithoutRutinaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRutinaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRutinaInput, UsuarioUncheckedUpdateWithoutRutinaInput>
  }

  export type UsuarioUpdateWithoutRutinaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Progreso?: ProgresoUpdateManyWithoutUsuarioNestedInput
    Favorito?: FavoritoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Progreso?: ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput
    Favorito?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
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

  export type UsuarioCreateWithoutFavoritoInput = {
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fecha_creacion?: Date | string | null
    Progreso?: ProgresoCreateNestedManyWithoutUsuarioInput
    Rutina?: RutinaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFavoritoInput = {
    id?: number
    nombre: string
    email: string
    password: string
    rol?: $Enums.Rol
    fecha_creacion?: Date | string | null
    Progreso?: ProgresoUncheckedCreateNestedManyWithoutUsuarioInput
    Rutina?: RutinaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFavoritoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFavoritoInput, UsuarioUncheckedCreateWithoutFavoritoInput>
  }

  export type EjercicioCreateWithoutFavoritoInput = {
    nombre: string
    musculo: string
    video_img_url: string
    Progreso?: ProgresoCreateNestedManyWithoutEjercicioInput
    Rutina_ejercicio?: Rutina_ejercicioCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUncheckedCreateWithoutFavoritoInput = {
    id?: number
    nombre: string
    musculo: string
    video_img_url: string
    Progreso?: ProgresoUncheckedCreateNestedManyWithoutEjercicioInput
    Rutina_ejercicio?: Rutina_ejercicioUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioCreateOrConnectWithoutFavoritoInput = {
    where: EjercicioWhereUniqueInput
    create: XOR<EjercicioCreateWithoutFavoritoInput, EjercicioUncheckedCreateWithoutFavoritoInput>
  }

  export type UsuarioUpsertWithoutFavoritoInput = {
    update: XOR<UsuarioUpdateWithoutFavoritoInput, UsuarioUncheckedUpdateWithoutFavoritoInput>
    create: XOR<UsuarioCreateWithoutFavoritoInput, UsuarioUncheckedCreateWithoutFavoritoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFavoritoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFavoritoInput, UsuarioUncheckedUpdateWithoutFavoritoInput>
  }

  export type UsuarioUpdateWithoutFavoritoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Progreso?: ProgresoUpdateManyWithoutUsuarioNestedInput
    Rutina?: RutinaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFavoritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Progreso?: ProgresoUncheckedUpdateManyWithoutUsuarioNestedInput
    Rutina?: RutinaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type EjercicioUpsertWithoutFavoritoInput = {
    update: XOR<EjercicioUpdateWithoutFavoritoInput, EjercicioUncheckedUpdateWithoutFavoritoInput>
    create: XOR<EjercicioCreateWithoutFavoritoInput, EjercicioUncheckedCreateWithoutFavoritoInput>
    where?: EjercicioWhereInput
  }

  export type EjercicioUpdateToOneWithWhereWithoutFavoritoInput = {
    where?: EjercicioWhereInput
    data: XOR<EjercicioUpdateWithoutFavoritoInput, EjercicioUncheckedUpdateWithoutFavoritoInput>
  }

  export type EjercicioUpdateWithoutFavoritoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Progreso?: ProgresoUpdateManyWithoutEjercicioNestedInput
    Rutina_ejercicio?: Rutina_ejercicioUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioUncheckedUpdateWithoutFavoritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Progreso?: ProgresoUncheckedUpdateManyWithoutEjercicioNestedInput
    Rutina_ejercicio?: Rutina_ejercicioUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type ProgresoCreateWithoutEjercicioInput = {
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
    usuario: UsuarioCreateNestedOneWithoutProgresoInput
  }

  export type ProgresoUncheckedCreateWithoutEjercicioInput = {
    id?: number
    usuario_id: number
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
  }

  export type ProgresoCreateOrConnectWithoutEjercicioInput = {
    where: ProgresoWhereUniqueInput
    create: XOR<ProgresoCreateWithoutEjercicioInput, ProgresoUncheckedCreateWithoutEjercicioInput>
  }

  export type ProgresoCreateManyEjercicioInputEnvelope = {
    data: ProgresoCreateManyEjercicioInput | ProgresoCreateManyEjercicioInput[]
    skipDuplicates?: boolean
  }

  export type FavoritoCreateWithoutEjercicioInput = {
    usuario: UsuarioCreateNestedOneWithoutFavoritoInput
  }

  export type FavoritoUncheckedCreateWithoutEjercicioInput = {
    id?: number
    usuario_id: number
  }

  export type FavoritoCreateOrConnectWithoutEjercicioInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutEjercicioInput, FavoritoUncheckedCreateWithoutEjercicioInput>
  }

  export type FavoritoCreateManyEjercicioInputEnvelope = {
    data: FavoritoCreateManyEjercicioInput | FavoritoCreateManyEjercicioInput[]
    skipDuplicates?: boolean
  }

  export type Rutina_ejercicioCreateWithoutEjercicioInput = {
    series: number
    repeticiones: number
    rutina: RutinaCreateNestedOneWithoutRutina_ejercicioInput
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

  export type ProgresoUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: ProgresoWhereUniqueInput
    update: XOR<ProgresoUpdateWithoutEjercicioInput, ProgresoUncheckedUpdateWithoutEjercicioInput>
    create: XOR<ProgresoCreateWithoutEjercicioInput, ProgresoUncheckedCreateWithoutEjercicioInput>
  }

  export type ProgresoUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: ProgresoWhereUniqueInput
    data: XOR<ProgresoUpdateWithoutEjercicioInput, ProgresoUncheckedUpdateWithoutEjercicioInput>
  }

  export type ProgresoUpdateManyWithWhereWithoutEjercicioInput = {
    where: ProgresoScalarWhereInput
    data: XOR<ProgresoUpdateManyMutationInput, ProgresoUncheckedUpdateManyWithoutEjercicioInput>
  }

  export type FavoritoUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutEjercicioInput, FavoritoUncheckedUpdateWithoutEjercicioInput>
    create: XOR<FavoritoCreateWithoutEjercicioInput, FavoritoUncheckedCreateWithoutEjercicioInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutEjercicioInput, FavoritoUncheckedUpdateWithoutEjercicioInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutEjercicioInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutEjercicioInput>
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

  export type RutinaCreateWithoutRutina_ejercicioInput = {
    nombre: string
    fecha_creacion?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutRutinaInput
  }

  export type RutinaUncheckedCreateWithoutRutina_ejercicioInput = {
    id?: number
    usuario_id: number
    nombre: string
    fecha_creacion?: Date | string | null
  }

  export type RutinaCreateOrConnectWithoutRutina_ejercicioInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutRutina_ejercicioInput, RutinaUncheckedCreateWithoutRutina_ejercicioInput>
  }

  export type EjercicioCreateWithoutRutina_ejercicioInput = {
    nombre: string
    musculo: string
    video_img_url: string
    Progreso?: ProgresoCreateNestedManyWithoutEjercicioInput
    Favorito?: FavoritoCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUncheckedCreateWithoutRutina_ejercicioInput = {
    id?: number
    nombre: string
    musculo: string
    video_img_url: string
    Progreso?: ProgresoUncheckedCreateNestedManyWithoutEjercicioInput
    Favorito?: FavoritoUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioCreateOrConnectWithoutRutina_ejercicioInput = {
    where: EjercicioWhereUniqueInput
    create: XOR<EjercicioCreateWithoutRutina_ejercicioInput, EjercicioUncheckedCreateWithoutRutina_ejercicioInput>
  }

  export type RutinaUpsertWithoutRutina_ejercicioInput = {
    update: XOR<RutinaUpdateWithoutRutina_ejercicioInput, RutinaUncheckedUpdateWithoutRutina_ejercicioInput>
    create: XOR<RutinaCreateWithoutRutina_ejercicioInput, RutinaUncheckedCreateWithoutRutina_ejercicioInput>
    where?: RutinaWhereInput
  }

  export type RutinaUpdateToOneWithWhereWithoutRutina_ejercicioInput = {
    where?: RutinaWhereInput
    data: XOR<RutinaUpdateWithoutRutina_ejercicioInput, RutinaUncheckedUpdateWithoutRutina_ejercicioInput>
  }

  export type RutinaUpdateWithoutRutina_ejercicioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateWithoutRutina_ejercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EjercicioUpsertWithoutRutina_ejercicioInput = {
    update: XOR<EjercicioUpdateWithoutRutina_ejercicioInput, EjercicioUncheckedUpdateWithoutRutina_ejercicioInput>
    create: XOR<EjercicioCreateWithoutRutina_ejercicioInput, EjercicioUncheckedCreateWithoutRutina_ejercicioInput>
    where?: EjercicioWhereInput
  }

  export type EjercicioUpdateToOneWithWhereWithoutRutina_ejercicioInput = {
    where?: EjercicioWhereInput
    data: XOR<EjercicioUpdateWithoutRutina_ejercicioInput, EjercicioUncheckedUpdateWithoutRutina_ejercicioInput>
  }

  export type EjercicioUpdateWithoutRutina_ejercicioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Progreso?: ProgresoUpdateManyWithoutEjercicioNestedInput
    Favorito?: FavoritoUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioUncheckedUpdateWithoutRutina_ejercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    musculo?: StringFieldUpdateOperationsInput | string
    video_img_url?: StringFieldUpdateOperationsInput | string
    Progreso?: ProgresoUncheckedUpdateManyWithoutEjercicioNestedInput
    Favorito?: FavoritoUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type ProgresoCreateManyUsuarioInput = {
    id?: number
    ejercicio_id: number
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
  }

  export type RutinaCreateManyUsuarioInput = {
    id?: number
    nombre: string
    fecha_creacion?: Date | string | null
  }

  export type FavoritoCreateManyUsuarioInput = {
    id?: number
    ejercicio_id: number
  }

  export type ProgresoUpdateWithoutUsuarioInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    ejercicio?: EjercicioUpdateOneRequiredWithoutProgresoNestedInput
  }

  export type ProgresoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type ProgresoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type RutinaUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rutina_ejercicio?: Rutina_ejercicioUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rutina_ejercicio?: Rutina_ejercicioUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FavoritoUpdateWithoutUsuarioInput = {
    ejercicio?: EjercicioUpdateOneRequiredWithoutFavoritoNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicio_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoritoUncheckedUpdateManyWithoutUsuarioInput = {
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
    ejercicio?: EjercicioUpdateOneRequiredWithoutRutina_ejercicioNestedInput
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

  export type ProgresoCreateManyEjercicioInput = {
    id?: number
    usuario_id: number
    fecha?: Date | string | null
    peso_usado: number
    repeticiones: number
  }

  export type FavoritoCreateManyEjercicioInput = {
    id?: number
    usuario_id: number
  }

  export type Rutina_ejercicioCreateManyEjercicioInput = {
    id?: number
    rutina_id: number
    series: number
    repeticiones: number
  }

  export type ProgresoUpdateWithoutEjercicioInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutProgresoNestedInput
  }

  export type ProgresoUncheckedUpdateWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type ProgresoUncheckedUpdateManyWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso_usado?: FloatFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
  }

  export type FavoritoUpdateWithoutEjercicioInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutFavoritoNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoritoUncheckedUpdateManyWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type Rutina_ejercicioUpdateWithoutEjercicioInput = {
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    rutina?: RutinaUpdateOneRequiredWithoutRutina_ejercicioNestedInput
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