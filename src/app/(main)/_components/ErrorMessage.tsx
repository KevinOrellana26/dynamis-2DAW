import BackButton from "./BackButton";

type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage(params: ErrorMessageProps) {
  const { message } = params;
  return (
    <div className="col-span-full mt-20 flex flex-col items-center gap-3 text-sky-900 text-center text-xl">
      <p>{message}</p>
      <BackButton path="/exercises" />
    </div>
  );
}
