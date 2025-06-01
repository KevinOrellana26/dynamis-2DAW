import AddExerciseForm from "./_components/AddExerciseForm";

export default function NewExercisePage() {
  return (
    <div className="flex flex-col m-9 gap-8">
      <header className="flex flex-col items-center md:flex-row md:items-start">
        <h1 className="font-semibold text-4xl md:text-5xl text-accent-blue dark:text-accent-blue">
          Añadir un nuevo ejercicio
        </h1>
      </header>
      <AddExerciseForm />
    </div>
  );
}
