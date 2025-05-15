import { Youtube, Linkedin, Facebook, Instagram } from "lucide-react";

export default function SocialLogos({ dark }: { dark: boolean }) {
  const Logos = [
    {
      Name: "youtube",
      href: "https://www.youtube.com/@menaspeakers4868",
      logo: (
        <Youtube
          className={
            dark ? "text-slate-100" : "hover:text-slate-100 text-gray-800"
          }
        />
      ),
      hoverClass: "hover:bg-[#FF0000]",
    },
    {
      Name: "linkedin",
      href: "https://www.linkedin.com/company/mena-speakers/mycompany",
      logo: (
        <Linkedin
          className={
            dark ? "text-slate-100" : "hover:text-slate-100 text-gray-800"
          }
        />
      ),
      hoverClass: "hover:bg-[#0A66C2]",
    },
    {
      Name: "facebook",
      href: "https://www.facebook.com/menaspeakers",
      logo: (
        <Facebook
          className={
            dark ? "text-slate-100" : "hover:text-slate-100 text-gray-800"
          }
        />
      ),
      hoverClass: "hover:bg-[#1877F2]",
    },
    {
      Name: "instagram",
      href: "https://www.instagram.com/menaspeakers/",
      logo: (
        <Instagram
          className={
            dark ? "text-slate-100" : "hover:text-slate-100 text-gray-800"
          }
        />
      ),
      hoverClass: "hover:bg-[#E4405F]",
    },
  ];

  return (
    <div className="flex space-x-2 mb-4">
      {Logos.map((item) => (
        <a
          key={item.Name}
          target="_blank"
          rel="noopener noreferrer"
          href={item.href}
          className={`p-2 rounded-lg transition duration-300 ${
            dark ? "bg-gray-800" : "bg-slate-200"
          } ${item.hoverClass} hover:text-white`} // Added hover:text-white here
        >
          {item.logo}
        </a>
      ))}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/menaspeakers"
        className={`p-2 rounded-lg transition duration-300 ${
          dark ? "bg-gray-800" : "bg-slate-200"
        } hover:bg-[#000000]`}
      >
        <img
          src="/icons/x-twitter-brands-solid.svg"
          alt="Twitter/X"
          className={`w-6 ${dark ? "invert" : ""} hover:invert`}
        />
      </a>
    </div>
  );
}
