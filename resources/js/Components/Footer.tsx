import React from "react";
import { Link } from "@inertiajs/react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

function Footer() {
  return (
    <div className={"bg-mena-brand py-12 lg:pt-24 pb-12 px-6"}>
      <div className="max-w-7xl mx-auto pb-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-2/3 space-y-3">
          <div className={" items-center justify-center  hidden lg:block"}>
            <img
              width={260}
              height={160}
              src="/images/white-logo.png"
              alt="MENA Speaker's logo"
            />
          </div>
          <div className={" items-center justify-center lg:hidden"}>
            <img
              width={160}
              height={80}
              src="/images/white-logo.png"
              alt="MENA Speaker's logo"
            />
          </div>
          <div className="flex items-center group">
            <Phone
              size={20}
              className={"text-slate-300 group-hover:text-white mr-2 stroke-1"}
            />
            <a
              href="tel:+971 52 630 6673"
              className={"text-slate-300 hover:text-white"}
            >
              +971 52 630 6673
            </a>
          </div>
          <div className="flex items-center group">
            <Mail
              size={20}
              className={"text-slate-300 group-hover:text-white mr-2 stroke-1"}
            />
            <a
              href="mailto:info@mena-speakers.com"
              className={"text-slate-300 hover:text-white"}
            >
              info@mena-speakers.com
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/3 pt-8 lg:pt-0 gap-8">
          <h3 className="text-white text-lg font-semibold">Quick Links</h3>
          <div className={"w-full"}>
            <nav className="mt-4 flex  ">
              <div className={"w-full lg:w-1/2"}>
                <Link
                  href={"/speakers"}
                  className={"text-slate-300 hover:text-white block py-2"}
                >
                  Speakers
                </Link>
                <Link
                  href={"/about-us"}
                  className={"text-slate-300 hover:text-white block py-2"}
                >
                  About
                </Link>
              </div>
              <div className="w-full lg:w-1/2">
                <Link
                  href={"/topics"}
                  className={"text-slate-300 hover:text-white block py-2"}
                >
                  Topics
                </Link>
                <Link
                  href={"/blogs"}
                  className={"text-slate-300 hover:text-white block py-2"}
                >
                  Blogs
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-slate-400 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
        <div className={"flex gap-6"}>
          <div className={"flex space-x-4 "}>
            <a
              target={"_blank"}
              href={"https://www.linkedin.com/company/mena-speakers/mycompany/"}
              className="p-2 rounded-full border"
            >
              <Linkedin className={"h-4 w-4 stroke-1 text-slate-50"} />
            </a>

            <a
              target={"_blank"}
              href={"https://twitter.com/menaspeakers"}
              className="p-2 rounded-full border"
            >
              <Twitter className={"h-4 w-4 stroke-1 text-slate-50"} />
            </a>

            <a
              target={"_blank"}
              href={"https://www.facebook.com/menaspeakers"}
              className="p-2 rounded-full border"
            >
              <Facebook className={"h-4 w-4 stroke-1 text-slate-50"} />
            </a>
            <a
              target={"_blank"}
              href={"https://www.instagram.com/menaspeakers/"}
              className="p-2 rounded-full border"
            >
              <Instagram className={"h-4 w-4 stroke-1 text-slate-50"} />
            </a>

            <a
              target={"_blank"}
              href={"https://www.youtube.com"}
              className="p-2 rounded-full border"
            >
              <Youtube className={"h-4 w-4 stroke-1 text-slate-50"} />
            </a>
          </div>
        </div>
        <div className={"text-slate-300 hover:text-white text-sm"}>
          <p>© Copyright MENA Speakers All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
