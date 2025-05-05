import { prisma } from "@/lib/prisma";

async function seedExercises() {
    await prisma.exercise.createMany({
        data: [
            {
                name: "Press de banca",
                muscle: "pecho",
                video_img_url: "/exercise/press-banca.jpg",
            },
            {
                name: "Sentadilla con barra",
                muscle: "pierna",
                video_img_url: "/exercise/sentadilla-barra.jpg",
            },
            {
                name: "Dominadas",
                muscle: "espalda",
                video_img_url: "/exercise/dominadas.jpg",
            },
            {
                name: "Plancha abdominal",
                muscle: "abdomen",
                video_img_url: "/exercise/plancha-abdominal.jpg",
            },
            {
                name: "Curl de bíceps con mancuernas",
                muscle: "brazo",
                video_img_url: "/exercise/curl-biceps-mancuerna.jpg",
            },
            {
                name: "Peso muerto",
                muscle: "espalda",
                video_img_url: "/exercise/peso-muerto.jpg",
            },
            {
                name: "Elevaciones laterales con mancuernas",
                muscle: "hombro",
                video_img_url: "/exercise/elevaciones-laterales-mancuernas.jpg",
            },
            {
                name: "Fondos en paralelas",
                muscle: "tríceps",
                video_img_url: "/exercise/fondos-paralelas.jpg",
            },
            {
                name: "Press militar con barra",
                muscle: "hombro",
                video_img_url: "/exercise/press-militar-barra.jpg",
            },
            {
                name: "Remo con barra",
                muscle: "espalda",
                video_img_url: "/exercise/remo-barra.jpg",
            },
            {
                name: "Zancadas con mancuernas",
                muscle: "pierna",
                video_img_url: "/exercise/zancadas-mancuernas.jpg",
            },
            {
                name: "Crunch abdominal",
                muscle: "abdomen",
                video_img_url: "/exercise/crunch-abdominal.jpg",
            },
            {
                name: "Extensión de tríceps en polea",
                muscle: "tríceps",
                video_img_url: "/exercise/extension-triceps-polea.jpg",
            },
            {
                name: "Curl femoral tumbado",
                muscle: "pierna",
                video_img_url: "/exercise/curl-femoral-tumbado.jpg",
            },
            {
                name: "Elevación de talones de pie",
                muscle: "pantorrilla",
                video_img_url: "/exercise/elevacion-talones.jpg",
            },
            {
                name: "Face Pull en polea",
                muscle: "hombro",
                video_img_url: "/exercise/face-pull-polea.jpg",
            },
            {
                name: "Press banca inclinado con mancuernas",
                muscle: "pecho",
                video_img_url: "/exercise/press-banca-inclinada.jpg"
            },
            {
                name: "Prensa",
                muscle: "pierna",
                video_img_url: "/exercise/prensa.jpg"
            }

        ]
    })
    console.log("Ejercicios insertados");
}

async function seedUsers() {
    await prisma.user.createMany({
        data: [
            {
                name: "Kevin",
                email: "kevin@gmail.com",
                avatar: "/profile/defaultAvatar.png",
                role: "USER",
                password: "$2b$10$H5T1Ki4rqz3WQbsZuhuVvOb9KKJySD8VgZbjwRZnCeLUBwxu7DAem",
                emailVerified: null,
            },
            {
                name: "Admin",
                email: "admin@gmail.com",
                avatar: "/profile/defaultAvatar.png",
                role: "ADMIN",
                password: "$2b$10$jeGlBsxks02ZY2EkBNU9k.IQLlTlNg7yJRK92fsFZKmvrOhdEx32G",
                emailVerified: null,
            }
        ]
    })
    console.log("Usuarios insertados");
}

async function seedProgress() {
    //consulta user
    const user = await prisma.user.findFirst({ where: { name: "Kevin" } });
    const pressBanca = await prisma.exercise.findUnique({ where: { name: "Press de banca" } });
    const sentadilla = await prisma.exercise.findUnique({ where: { name: "Sentadilla con barra" } });
    const curlBiceps = await prisma.exercise.findUnique({ where: { name: "Curl de bíceps con mancuernas" } });


    await prisma.progress.createMany({
        data: [
            {
                user_id: user!.id,
                exercise_id: pressBanca!.id,
                weight_used: 80,
                repetitions: 10
            },
            {
                user_id: user!.id,
                exercise_id: sentadilla!.id,
                weight_used: 100,
                repetitions: 8,
            },
            {
                user_id: user!.id,
                exercise_id: curlBiceps!.id,
                weight_used: 14,
                repetitions: 12,
            },
        ]
    })
    console.log("Progresos insertados")
}

async function seedFavorites() {
    const user = await prisma.user.findFirst({ where: { name: "Kevin" } });
    const pressBanca = await prisma.exercise.findUnique({ where: { name: "Press de banca" } });
    const curlBiceps = await prisma.exercise.findUnique({ where: { name: "Curl de bíceps con mancuernas" } });
    const remoBarra = await prisma.exercise.findUnique({ where: { name: "Remo con barra" } });

    await prisma.favorite.createMany({
        data: [
            {
                user_id: user!.id,
                exercise_id: pressBanca!.id
            },
            {
                user_id: user!.id,
                exercise_id: curlBiceps!.id
            },
            {
                user_id: user!.id,
                exercise_id: remoBarra!.id
            },
        ]
    })
    console.log("Favoritos insertados")
}

async function seedRoutines() {
    const user = await prisma.user.findFirst({ where: { name: "Kevin" } });
    await prisma.routine.createMany({
        data: [
            {
                user_id: user!.id,
                name: "Rutina Full Body",
                description: "Entrenamiento completo para todo el cuerpo",
                duration: 60,
                totalExercise: 4,
            }
        ]
    })
    console.log("Rutina insertada")
}

//Ejercicios dentro de rutinas
async function seedExerciseRoutines() {
    const rutina = await prisma.routine.findFirst({ where: { name: "Rutina Full Body" } });
    const pressBanca = await prisma.exercise.findUnique({ where: { name: "Press de banca" } });
    const sentadilla = await prisma.exercise.findUnique({ where: { name: "Sentadilla con barra" } });
    const curlBiceps = await prisma.exercise.findUnique({ where: { name: "Curl de bíceps con mancuernas" } });
    const remoBarra = await prisma.exercise.findUnique({ where: { name: "Remo con barra" } });

    await prisma.exercise_routine.createMany({
        data: [
            {
                routine_id: rutina!.id,
                exercise_id: pressBanca!.id,
                series: 3,
                repetitions: 10
            },
            {
                routine_id: rutina!.id,
                exercise_id: sentadilla!.id,
                series: 3,
                repetitions: 8
            },
            {
                routine_id: rutina!.id,
                exercise_id: curlBiceps!.id,
                series: 3,
                repetitions: 12
            },
            {
                routine_id: rutina!.id,
                exercise_id: remoBarra!.id,
                series: 3, repetitions: 10
            },
        ]
    });
    console.log("Ejercicios en rutina insertados")
}

async function main() {
    await seedExercises();
    await seedUsers();
    await seedProgress();
    await seedFavorites();
    await seedRoutines();
    await seedExerciseRoutines();
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error("Error durante el seed:", e);
        await prisma.$disconnect();
        process.exit(1);
    });