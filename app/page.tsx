import Image from "next/image";
import PatientForm from "../components/forms/PatientForm";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container msx-w-[496px]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={100}
            width={100}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              ~ 2026 CarePulse
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
