import { prisma } from "@/lib/prisma";

async function seedExercises() {
  await prisma.exercise.createMany({
    data: [
      {
        name: "Press de banca",
        muscle: "pecho",
        videoImgUrl: "/exercise/press-banca.jpg",
        description:
          "Ejercicio compuesto para el desarrollo del pecho, tríceps y hombros.",
        executionSteps:
          "1. Acuéstate en un banco plano con los pies apoyados en el suelo. \n2. Toma la barra con un agarre ligeramente más ancho que los hombros. \n3. Baja la barra hacia el pecho contolando el movimiento. \n4. Empuja hacia arriba hasta extender los brazos sin bloquear los codos.",
        tips: "Manten los pies apoyados en el suelo y evita arquear excesivamente la espalda.",
      },
      {
        name: "Sentadilla con barra",
        muscle: "pierna",
        videoImgUrl: "/exercise/sentadilla-barra.jpg",
        description: "Ejercicio base para trabajar piernas y glúteos.",
        executionSteps:
          "1. Párate con los pies al ancho de tus hombros. Mantén la curvatura natural de tu espalda, apretando tus omóplatos y levantando tu pecho. \n2. Sujeta la barra a lo largo de tus hombros y apóyala en la parte superior de tu espalda. Desencaja la barra estirando las piernas y da un paso hacia atrás. \n3. Dobla tus rodillas mientras bajas el peso sin alterar la forma de tu espalda hasta que tus caderas estén por debajo de tus rodillas. \n4. Levanta la barra hasta la posición inicial, levanta con tus piernas y exhala en la parte superior.",
        tips: "1. Evita cargar un peso que no controles, evita el riesgo a lesiones. \n2. Evita que las rodillas colapsen hacia dentro. \n3. Evita que la espalda se curve. \n4. Mantén la cabeza mirando hacia adelante y saca el pecho.",
      },
      {
        name: "Dominadas",
        muscle: "espalda",
        videoImgUrl: "/exercise/dominadas.jpg",
        description: "Ejercicio básico para fortalecer la espalda y bíceps.",
        executionSteps:
          "1. Agarra la barra con un agarre en pronación, los brazos y los hombros completamente extendidos. \n2. Levanta tu cuerpo hasta que tu barbilla esté por encima de la barra. \n3. Baja tu cuerpo lentamente hasta la posición inicial.",
        tips: "1. Mantén el cuerpo recto y evita balancearte. \n2. Evita usar impulso para levantarte.",
      },
      {
        name: "Plancha abdominal",
        muscle: "abdomen",
        videoImgUrl: "/exercise/plancha-abdominal.jpg",
        description: "Ejercicio isométrico para fortalecer el core.",
        executionSteps:
          "1. Coloca los antebrazos en el suelo con los codos doblados a un ángulo de 90 grados alineados debajo de los hombros, con tus brazos en paralelo al ancho de tus hombros. \n2. Tus pies deben estar juntos, con solo tus dedos tocando el suelo. \n3. Levanta tu cuerpo manteniendo una línea recta desde los talones hasta la cabeza. \n4. Mantén esa posición durante el tiempo deseado.",
        tips: "1. Mantén el abdomen contraído y la espalda recta. \n2. Evita que las caderas se hundan o se levanten demasiado.",
      },
      {
        name: "Curl de bíceps con mancuernas",
        muscle: "bíceps",
        videoImgUrl: "/exercise/curl-biceps-mancuerna.jpg",
        description: "Ejercicio para trabajar los bíceps.",
        executionSteps:
          "1. De pie, mantente erguido con una mancuerna en cada mano. \n2. Flexiona los codos y lleva las mancuernas hacia los hombros. \n3. Baja lentamente las mancuernas a la posición incial. \n4. Repite el movimiento. ",
        tips: "1. Mantén los codos pegados al cuerpo durante el movimiento. \n2. Evita usar impulso para levantar las mancuernas.",
      },
      {
        name: "Peso muerto",
        muscle: "espalda",
        videoImgUrl: "/exercise/peso-muerto.jpg",
        description: "Ejercicio para trabajar la espalda baja y glúteos.",
        executionSteps:
          "1. Coloca los pies al ancho de los hombros y la barra frente a tus espinillas. \n2. Agarra la barra con un agarre en pronación o mixto. \n3. Mantén la espalda recta y levanta la barra manteniéndola cerca de tu cuerpo. \n4. Baja la barra controlando el moviento. \n5. Repite el moviemiento.",
        tips: "1. Mantén la espalda recta durante todo el movimiento. \n2. Evita que la barra se aleje de tu cuerpo al levantarla.",
      },
      {
        name: "Elevaciones laterales con mancuernas",
        muscle: "hombro",
        videoImgUrl: "/exercise/elevaciones-laterales-mancuernas.jpg",
        description: "Ejercicio para trabajar los hombros.",
        executionSteps:
          " 1. De pie, sujeta una mancuerna en cada mano. \n2. Levanta los brazos hacia los lados hasta que estén paralelos al suelo. \n3. Baja lentamente las mancuernas a la posición inicial.",
        tips: "1. Mantén una ligera flexión en los codos durante el movimiento. \n2. Evita usar impulso para levantar las mancuernas.",
      },
      {
        name: "Fondos en paralelas",
        muscle: "tríceps",
        videoImgUrl: "/exercise/fondos-paralelas.jpg",
        description: "Ejercicio para trabajar trícpes.",
        executionSteps:
          "1. Sujeta las barras paralelas con los brazos extendidos. \n2. Baja el cuerpo flexionando los codos hasta que los hombros estén por debajo de los codos. \n3. Empuja hacia arriba hasta la posición inicial.",
        tips: "1. Mantén el cuerpo recto y evita balancearte. \n2. Evita que los codos se abran hacia los lados.",
      },
      {
        name: "Press militar con barra",
        muscle: "hombro",
        videoImgUrl: "/exercise/press-militar-barra.jpg",
        description: "Ejercicio para trabajar los hombros.",
        executionSteps:
          "1. De pie, sujeta la barra a la altura de los hombros con un agarre en pronación. \n2. Levanta la barra por encima de la cabeza hasta que los brazos estén completamente extendidos. \n3. Baja la barra a la posición inicial controlando el movimiento.",
        tips: "1. Mantén la espalda recta y evita arquearla. \n2. Evita que la barra se desplace hacia adelante o hacia atrás.",
      },
      {
        name: "Remo con barra",
        muscle: "espalda",
        videoImgUrl: "/exercise/remo-barra.jpg",
        description: "Ejericicio para trabajar la espalda.",
        executionSteps:
          " 1. De pie, sujeta la barra con un agarre en pronación. \n2. Flexiona ligeramente las rodillas y mantén la espalda recta. \n3. Lleva la barra hacia el abdomen manteniendo los codos cerca del cuerpo. \n4. Baja la barra a la posición inicial controlando el movimiento.",
        tips: "1. Mantén la espalda recta durante todo el movimiento. \n2. Evita que la barra se aleje de tu cuerpo al levantarla.",
      },
      {
        name: "Zancadas con mancuernas",
        muscle: "pierna",
        videoImgUrl: "/exercise/zancadas-mancuernas.jpg",
        description: "Ejercicio para trabajar piernas y glúteos.",
        executionSteps:
          "1. De pie, sujeta una mancuerna en cada mano. \n2. Da un paso hacia adelante con una pierna y baja el cuerpo hasta que ambas rodillas estén dobladas a 90 grados. \n3. Empuja hacia atrás hasta la posición inicial y repite con la otra pierna.",
        tips: "1. Mantén la espalda recta y el pecho hacia arriba. \n2. Evita que la rodilla de la pierna delantera sobrepase los dedos del pie.",
      },
      {
        name: "Crunch abdominal",
        muscle: "abdomen",
        videoImgUrl: "/exercise/crunch-abdominal.jpg",
        description: "Ejercicio para trabajar el abdomen.",
        executionSteps:
          "1. Acuéstate boca arriba con las rodillas dobladas. \n2. Coloca las manos detrás de la cabeza o cruzadas sobre el pecho. \n3. Levanta los hombros del suelo contrayendo los abdominales. \n4. Baja lentamente a la posición inicial.",
        tips: "1. Evita tirar de la cabeza con las manos. \n2. Mantén la espalda baja en contacto con el suelo.",
      },
      {
        name: "Extensión de tríceps en polea",
        muscle: "tríceps",
        videoImgUrl: "/exercise/extension-triceps-polea.jpg",
        description: "Ejercicio para trabajar los trícpes.",
        executionSteps:
          " 1. Coloca la polea en la parte alta. \n2. Sujeta la cuerda con ambas manos. \n3. Flexiona los codos y lleva la cuerda hacia abajo hasta que los brazos estén completamente extendidos. \n4. Baja lentamente la cuerda a la posición inicial.",
        tips: "1. Mantén los codos pegados al cuerpo durante el movimiento. \n2. Evita usar impulso para levantar la cuerda.",
      },
      {
        name: "Curl femoral tumbado",
        muscle: "pierna",
        videoImgUrl: "/exercise/curl-femoral-tumbado.jpg",
        description: "Ejercicio para trabajar los isquiotibiales.",
        executionSteps:
          " 1. Acuéstate boca abajo en la máquina de curl femoral. \n2. Coloca los tobillos debajo de la almohadilla. \n3. Flexiona las rodillas llevando los talones hacia los glúteos. \n4. Baja lentamente a la posición inicial.",
        tips: "1. Mantén la espalda pegada al banco durante el movimiento. \n2. Evita usar impulso para levantar el peso.",
      },
      {
        name: "Elevación de talones de pie",
        muscle: "pantorrilla",
        videoImgUrl: "/exercise/elevacion-talones.jpg",
        description: "Ejercicio para trabajar las pantorrillas.",
        executionSteps:
          "1. De pie, coloca los pies al ancho de los hombros. \n2. Levanta los talones del suelo manteniendo el equilibrio. \n3. Baja lentamente los talones a la posición inicial.",
        tips: "1. Mantén la espalda recta durante todo el movimiento. \n2. Evita balancearte hacia adelante o hacia atrás.",
      },
      {
        name: "Face Pull en polea",
        muscle: "hombro",
        videoImgUrl: "/exercise/face-pull-polea.jpg",
        description:
          "Ejercicio para trabajar el deltoides postrerior y la espalda alta.",
        executionSteps:
          "1. Coloca la polea a la altura de la cara. \n2. Sujeta la cuerda con ambas manos. \n3. Tira de la cuerda hacia la cara manteniendo los codos altos. \n4. Baja lentamente la cuerda a la posición inicial.",
        tips: "1. Mantén la espalda recta durante todo el movimiento. \n2. Evita usar impulso para levantar la cuerda.",
      },
      {
        name: "Press banca inclinado con mancuernas",
        muscle: "pecho",
        videoImgUrl: "/exercise/press-banca-inclinada.jpg",
        description: "Ejercicio para trabajar la parte superior del pecho.",
        executionSteps:
          "1. Acuéstate en un banco inclinado con una mancuerna en cada mano. \n2. Baja las mancuernas hacia los lados del pecho. \n3. Empuja las mancuernas hacia arriba hasta que los brazos estén completamente extendidos. \n4. Baja lentamente las mancuernas a la posición inicial.",
        tips: "1. Mantén los pies apoyados en el suelo durante todo el movimiento. \n2. Evita que las muñecas se doblen hacia atrás.",
      },
      {
        name: "Prensa",
        muscle: "pierna",
        videoImgUrl: "/exercise/prensa.jpg",
        description: "Ejercicio para trabajar piernas y glúteos.",
        executionSteps:
          "1. Siéntate en la máquina de prensa con la espalda apoyada. \n2. Coloca los pies en la plataforma al ancho de los hombros. \n3. Baja el peso flexionando las rodillas hasta que estén a 90 grados. \n4. Empuja hacia arriba hasta la posición inicial.",
        tips: "1. Mantén la espalda apoyada en el respaldo durante todo el movimiento. \n2. Evita que las rodillas se desplacen hacia adentro.",
      },
    ],
  });
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
        password:
          "$2b$10$H5T1Ki4rqz3WQbsZuhuVvOb9KKJySD8VgZbjwRZnCeLUBwxu7DAem",
        emailVerified: null,
      },
      {
        name: "Admin",
        email: "admin@gmail.com",
        avatar: "/profile/defaultAvatar.png",
        role: "ADMIN",
        password:
          "$2b$10$jeGlBsxks02ZY2EkBNU9k.IQLlTlNg7yJRK92fsFZKmvrOhdEx32G",
        emailVerified: null,
      },
    ],
  });
  console.log("Usuarios insertados");
}

async function seedProgress() {
  //consulta user
  const user = await prisma.user.findFirst({ where: { name: "Kevin" } });
  const pressBanca = await prisma.exercise.findUnique({
    where: { name: "Press de banca" },
  });
  const sentadilla = await prisma.exercise.findUnique({
    where: { name: "Sentadilla con barra" },
  });
  const curlBiceps = await prisma.exercise.findUnique({
    where: { name: "Curl de bíceps con mancuernas" },
  });

  await prisma.progress.createMany({
    data: [
      {
        userId: user!.id,
        exerciseId: pressBanca!.id,
        weightUsed: 80,
        repetitions: 10,
      },
      {
        userId: user!.id,
        exerciseId: sentadilla!.id,
        weightUsed: 100,
        repetitions: 8,
      },
      {
        userId: user!.id,
        exerciseId: curlBiceps!.id,
        weightUsed: 14,
        repetitions: 12,
      },
    ],
  });
  console.log("Progresos insertados");
}

async function seedFavorites() {
  const user = await prisma.user.findFirst({ where: { name: "Kevin" } });
  const pressBanca = await prisma.exercise.findUnique({
    where: { name: "Press de banca" },
  });
  const curlBiceps = await prisma.exercise.findUnique({
    where: { name: "Curl de bíceps con mancuernas" },
  });
  const remoBarra = await prisma.exercise.findUnique({
    where: { name: "Remo con barra" },
  });

  await prisma.favorite.createMany({
    data: [
      {
        userId: user!.id,
        exerciseId: pressBanca!.id,
      },
      {
        userId: user!.id,
        exerciseId: curlBiceps!.id,
      },
      {
        userId: user!.id,
        exerciseId: remoBarra!.id,
      },
    ],
  });
  console.log("Favoritos insertados");
}

async function seedRoutines() {
  const user = await prisma.user.findFirst({ where: { name: "Kevin" } });
  await prisma.routine.createMany({
    data: [
      {
        userId: user!.id,
        name: "Rutina Full Body",
        description: "Entrenamiento completo para todo el cuerpo",
        duration: 60,
        totalExercise: 4,
      },
    ],
  });
  console.log("Rutina insertada");
}

//Ejercicios dentro de rutinas
async function seedExerciseRoutines() {
  const rutina = await prisma.routine.findFirst({
    where: { name: "Rutina Full Body" },
  });
  const pressBanca = await prisma.exercise.findUnique({
    where: { name: "Press de banca" },
  });
  const sentadilla = await prisma.exercise.findUnique({
    where: { name: "Sentadilla con barra" },
  });
  const curlBiceps = await prisma.exercise.findUnique({
    where: { name: "Curl de bíceps con mancuernas" },
  });
  const remoBarra = await prisma.exercise.findUnique({
    where: { name: "Remo con barra" },
  });

  await prisma.exerciseRoutine.createMany({
    data: [
      {
        routineId: rutina!.id,
        exerciseId: pressBanca!.id,
        series: 3,
        repetitions: 10,
      },
      {
        routineId: rutina!.id,
        exerciseId: sentadilla!.id,
        series: 3,
        repetitions: 8,
      },
      {
        routineId: rutina!.id,
        exerciseId: curlBiceps!.id,
        series: 3,
        repetitions: 12,
      },
      {
        routineId: rutina!.id,
        exerciseId: remoBarra!.id,
        series: 3,
        repetitions: 10,
      },
    ],
  });
  console.log("Ejercicios en rutina insertados");
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
