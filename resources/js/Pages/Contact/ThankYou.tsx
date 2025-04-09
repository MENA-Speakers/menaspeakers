import { Link } from "@inertiajs/react";
import { Mail } from "lucide-react";
import MainLayout from "@/Layouts/MainLayout";

export default function ThankYou() {
  return (
    <MainLayout>
      <section className="container text-center   flex justify-center items-center flex-col h-screen">
        <Mail size={100} className="text-mena-100 mb-2" />
        <h1 className="text-4xl font-bold mb-6">Thank you for reaching out!</h1>
        <p className="text-balance ">
          We appreciate you taking the time to fill out our form.
        </p>
        <p className="text-balance">
          Your submission has been successfully received, someone will get in
          touch with you soon!
        </p>
        <Link
          href="/"
          className="text-sm font-semibold bg-mena-brand py-3 px-6 rounded-xl text-white mt-2"
        >
          Go Home
        </Link>
      </section>
    </MainLayout>
  );
}
