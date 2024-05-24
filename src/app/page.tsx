import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center justify-center max-w-3xl">
      <h1 className="">High-end staff <span className="text-blue-600">HERE</span></h1>
      </div>
    </MaxWidthWrapper>
  );
}
