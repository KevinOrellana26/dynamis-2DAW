# 🏋🏽‍♂️Dýnamis - Fitness Web App
Dýnamis **(δύναμις)** es una aplicación web desarrollada para ayudar a las personas a gestionar sus entrenamientos, crear rutinas personalizadas y obtener información clara y detallada sobre ejercicios de gimnasio. Su objetivo es centralizar todo lo necesario para que cualquier usuario —ya sea principiante o con experiencia previa— pueda progresar.

El nombre de la aplicación proviene del término griego **dýnamis**, traducido como *capacidad*, *potencia* o *poder*. En la filosofía aristotélica, dýnamis representa la potencia latente en los seres: la posibilidad de transformarse y alcanzar una forma superior a través del movimiento y el cambio. Esta idea conecta profundamente con la motivación principal de esta aplicación: brindar las herramientas necesarias para pasar de la intención al logro, del deseo al resultado.

Así, Dýnamis no solo es una aplicación web: es un símbolo del proceso de evolución personal que vive cada persona al decidir mejorar su cuerpo, su salud y su autoestima.

## 📘 Índice
- [🏋🏽‍♂️Dýnamis - Fitness Web App](#️dýnamis---fitness-web-app)
  - [📘 Índice](#-índice)
  - [📌 Tecnologías y liberías utilizadas](#-tecnologías-y-liberías-utilizadas)
  - [🛠️ Pasos para levantar la aplicación localmente](#️-pasos-para-levantar-la-aplicación-localmente)
  - [📂 Estructura principal del proyecto](#-estructura-principal-del-proyecto)

## 📌 Tecnologías y liberías utilizadas
- **Next.js 15 con App Router** 
- **React**
- **TypeScript**
- **TailwindCSS + Shadcn/UI**
- **Prisma ORM**
- **PostgreSQL**
- **Docker / Docker Compose**
- **React Hook Form**
- **Zod (validaciones)**
- **Iron Session (autenticación sin JWT)**
- **React Icons (íconos SVG)**

## 🛠️ Pasos para levantar la aplicación localmente
1. Clonar el repositorio
    ``` bash
        git clone https://github.com/KevinOrellana26/dynamis-2DAW.git
        cd dynamis-2DAW
    ```
2. Asegurate de tener Docker y Docker Compose instalados.
   
3. Levanta la base de datos con Docker Compose.
    ```bash
        docker-compose up -d
    ```
4. Crea un archivo **``.env``** en la raíz del proyecto con el siguiente contenido. Antes deberás generar el secreto para pasarlo a la key de Iron Session. Utiliza el siguiente comando: **``$ openssl rand -base64 32``** y pega el resultado en **IRON_SESSION_SECRET_KEY**: 
    ```env
        # Prisma
        DATABASE_URL="postgresql://postgres:postgres@localhost:5432/dynamis?schema=public"

        # PostgreSQL (para docker-compose)
        POSTGRES_USER=postgres
        POSTGRES_PASSWORD=postgres
        POSTGRES_DB=dynamis
        POSTGRES_IP=192.168.1.100

        # Secrets
        IRON_SESSION_SECRET_KEY=[key]
        
        NEXT_PUBLIC_APP_URL=http://localhost:3000
    ```
5. Prepara la base de datos
Ejecuta los siguientes comandos para instalar las dependencias, ejecutar las migraciones, generar el cliente de Prisma e insertar los datos:
    ```bash
        pnpm install

        pnpm prisma migrate dev
        pnpm prisma generate

        pnpx tsx prisma/seed.ts
    ```

6. Levanta la aplicación
    ```bash 
        pnpm dev
    ```
    La aplicación ahora estará disponible en [http://localhost:3000](http://localhost:3000)

## 📂 Estructura principal del proyecto
    ```
    ├── prisma/                  # Esquema de la BD y migraciones
    │   ├── schema.prisma
    │   ├── seed.ts
    │   └── migrations/
    ├── public/                  # Archivos estáticos (imágenes de ejercicios, íconos, etc.)
    │   ├── exercise/
    │   ├── profile/
    │   └── icons/
    ├── src/
    │   ├── app/                 # Páginas y rutas principales (auth, dashboard, rutinas, etc.)
    │   ├── components/          # Componentes reutilizables globales
    │   ├── config/              # Archivos de configuración (env, temas, etc.)
    │   ├── generated/           # Cliente de Prisma generado automáticamente
    │   ├── hooks/               # Custom hooks
    │   ├── lib/                 # Librerías auxiliares
    │   ├── mocks/               # Datos simulados
    │   └── styles/              # Estilos globales y fuentes
    ├── docker-compose.yml       # Configuración Docker para PostgreSQL
    └── .env                     # Variables de entorno

    ```
