import React from "react";
import { Input } from "@/Components/ui/input";
import { useFormik } from "formik";
import { router } from "@inertiajs/react";
import { Search } from "lucide-react";
import { TextAnimate } from "@/Components/ui/text-animate";

function HomePageHeroSection() {
  const formik = useFormik({
    initialValues: {
      query: "",
    },
    onSubmit: (values) => {
      if (values.query === "") return;
      router.get(route("speakers.index"), values);
    },
  });

  return (
    <div className={"h-[600px] lg:h-screen relative"}>
      <img
        className={"lg:h-full h-[600px] w-full object-cover"}
        src="/images/home-hero-bg.webp"
        alt=""
      />
      <div className="absolute bg-gradient-to-br from-black/90 via-slate-900/90 to-zinc-900/70  px-6 inset-0 z-0">
        <div className="w-full lg:h-full flex h-[600px]  items-center justify-center flex-col space-y-8">
          <div className={"space-y-8 py-12"}>
            <TextAnimate
              animation="blurInUp"
              as="h1"
              duration={0.5}
              className="text-3xl lg:text-5xl text-mena-100 text-center font-bold text-balance"
            >
              The leading speakers bureau
            </TextAnimate>{" "}
            <TextAnimate
              animation="blurInUp"
              as="h1"
              duration={0.5}
              className="text-3xl lg:text-5xl text-mena-100 text-center font-bold text-balance mt-4"
            >
              in the MENA Region
            </TextAnimate>
            <div className={"w-full lg:w-[70%] space-y-2 mx-auto"}>
              <form
                onSubmit={formik.handleSubmit}
                className={"relative w-full flex"}
              >
                <Input
                  name={"query"}
                  value={formik.values.query}
                  onChange={formik.handleChange}
                  className={
                    "w-full flex-1 z-2  rounded-2xl py-3 lg:text-lg px-5 text-sm"
                  }
                  placeholder={"Search by topics, speakers, categories etc"}
                />
                <button
                  type={"submit"}
                  className={
                    "absolute top-1/2 transform -translate-y-1/2 right-4 "
                  }
                >
                  <Search size={26} className={"text-slate-500"} />
                </button>
              </form>
              <p className={" hidden text-white lg:text-xs mx-1 text-sm"}>
                Popular searches:{" "}
                <span className="underline cursor-pointer">Geopolitics,</span>{" "}
                <span className="underline cursor-pointer">
                  Artificial intelligence,{" "}
                </span>{" "}
                <span className="underline cursor-pointer">diversity, </span>{" "}
                <span className="underline cursor-pointer">
                  future of work,
                </span>{" "}
                <span className="underline cursor-pointer">TED talks</span>{" "}
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default HomePageHeroSection;
