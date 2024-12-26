import { color } from "framer-motion";
import { Youtube, Linkedin, Facebook, Instagram } from "lucide-react";

export default function SocialLogos({ dark }: { dark: boolean }) {
  const Logos = [
    {
      Name: "youtube",
      href: "https://www.youtube.com/@menaspeakers4868",
      logo: (
        <Youtube
          className={`${
            dark
              ? "text-slate-100"
              : "text-gray-800 hover:text-slate-100 duration-300"
          }`}
        />
      ),
      color: "red-600",
    },
    {
      Name: "linkedin",
      href: "https://www.linkedin.com/company/mena-speakers/mycompany",
      logo: (
        <Linkedin
          className={`${
            dark
              ? "text-slate-100"
              : "text-gray-800 hover:text-slate-100 duration-300"
          }`}
        />
      ),
      color: "blue-800",
    },
    {
      Name: "facebook",
      href: "https://www.facebook.com/menaspeakers",
      logo: (
        <Facebook
          className={`${
            dark
              ? "text-slate-100"
              : "text-gray-800 hover:text-slate-100 duration-300"
          }`}
        />
      ),
      color: "blue-600",
    },
    {
      Name: "instagram",
      href: "https://www.instagram.com/menaspeakers/",
      logo: (
        <Instagram
          className={`${
            dark
              ? "text-slate-100"
              : "text-gray-800 hover:text-slate-100 duration-300"
          }`}
        />
      ),
      color: "pink-600",
    },
  ];

  return (
    <div className="flex space-x-2 mb-4 ">
      {Logos.map((item) => (
        <a
          key={item.Name}
          target={"_blank"}
          href={item.href}
          className={`p-2 ${
            dark ? "bg-gray-800" : "bg-slate-200"
          } transition duration-300 hover:bg-${item.color}  rounded-lg`}
        >
          {item.logo}
        </a>
      ))}
      <a
        target={"_blank"}
        href={"https://twitter.com/menaspeakers"}
        className={`p-2 ${
          dark ? "bg-gray-800" : "bg-slate-200"
        } transition duration-300 hover:bg-blue-500 rounded-lg`}
      >
        <img
          src="/icons/x-twitter-brands-solid.svg"
          alt=""
          className={`${dark ? "invert" : "hover:invert duration-300"} w-6`}
        />
      </a>
    </div>
  );
}
