# 🏋🏽‍♂️Dýnamis - Fitness Web App
Este proyecto es una aplicación web para gestionar rutinas de entrenamiento, ejercicios y progreso personal, diseñada con tecnologías modernas.

## 📘 Índice
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
