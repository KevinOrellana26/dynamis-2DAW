import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progreso",
};

function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl">Progress</h1>
    </div>
  );
}

export default Page;
