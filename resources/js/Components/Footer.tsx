import { Link } from "@inertiajs/react";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import SocialLogos from "./ui/SocialLogos";

const Footer = () => {
  return (
    <div className="bg-mena-secondary py-12 rounded-tr-3xl rounded-tl-3xl">
      <div className="container mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        <div className="text-gray-400 flex-col items-center flex sm:flex-none sm:items-start">
          {" "}
          <img
            width={100}
            height={100}
            src="/images/white-logo.png"
            alt="MENA Speaker's logo"
            className="mb-4"
          />
          <SocialLogos dark={true} />
          <p className="text-balance">
            The <b className="text-white">#1</b> Speakers Bureau in the MENA
            Region since <b className="text-white">2016</b>.
          </p>
        </div>
        <div className="text-gray-400">
          <ul className="list-none">
            <li className="py-2 border-b border-gray-600 hover:text-white cursor-pointer transition duration-300 font-bold">
              <Link
                href={"/speakers"}
                className={
                  "flex gap-2 items-center text-slate-300 hover:text-white py-2 duration-300 hover:translate-x-2"
                }
              >
                <ArrowRight className="size-5" />
                Speakers
              </Link>
            </li>
            <li className="py-2 border-b border-gray-600 hover:text-white cursor-pointer transition duration-300 font-bold">
              <Link
                href={"/about-us"}
                className={
                  "flex gap-2 items-center text-slate-300 hover:text-white py-2 duration-300 hover:translate-x-2"
                }
              >
                <ArrowRight className="size-5" />
                About Us
              </Link>
            </li>{" "}
            <li className="py-2 border-b border-gray-600 hover:text-white cursor-pointer transition duration-300 font-bold">
              <Link
                href={"/topics"}
                className={
                  "flex gap-2 items-center text-slate-300 hover:text-white py-2 duration-300 hover:translate-x-2"
                }
              >
                <ArrowRight className="size-5" />
                Topics
              </Link>
            </li>
            <li className="items-center py-2 border-b border-gray-600 hover:text-white cursor-pointer transition duration-300 font-bold">
              <Link
                href={"/blogs"}
                className={
                  "flex gap-2 items-center text-slate-300 hover:text-white py-2 duration-300 hover:translate-x-2"
                }
              >
                <ArrowRight className="size-5" />
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-gray-400">
          <div className=" flex items-center mb-8">
            <div className="flex lg:flex-col gap-4 flex-row">
              <div className="flex items-center">
                <Mail
                  size={20}
                  className={
                    "text-slate-300 group-hover:text-white mr-2 stroke-1 duration-300"
                  }
                />
                <a
                  href="mailto:info@mena-speakers.com"
                  className={
                    "text-slate-300 hover:text-white duration-300 font-bold"
                  }
                >
                  info@mena-speakers.com
                </a>
              </div>
              <div className="flex items-center group">
                <Phone
                  size={20}
                  className={
                    "text-slate-300 group-hover:text-white mr-2 stroke-1 duration-300"
                  }
                />
                <a
                  href="tel:+971 52 630 6673"
                  className={
                    "text-slate-300 hover:text-white duration-300 font-bold"
                  }
                >
                  +971 52 630 6673
                </a>
              </div>
            </div>
          </div>
          <span className="text-sm text-textSeconday">
            © MENA Speakers | All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
