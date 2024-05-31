import Image from "next/image";
import Form from "./ui/form/form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-none flex-col items-center justify-between pt-24 md:p-24">
     <Form />
    </main>
  );
}
