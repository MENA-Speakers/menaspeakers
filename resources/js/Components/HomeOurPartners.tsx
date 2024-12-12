import { useState } from "react";

const HomeOurPartners = () => {
  const clients = [
    { name: "NEOM", logo: "/images/partner/neom.png" },
    { name: "ORACLE", logo: "/images/partner/oracle.svg" },
    { name: "PHILIPS", logo: "/images/partner/philips.svg" },
    { name: "Al-MASAOOD", logo: "/images/partner/MENA-pst-logo-01.png" },
    { name: "Ministry of Media", logo: "/images/partner/MENA-pst-logo-02.png" },
    { name: "ADNOC", logo: "/images/partner/MENA-pst-logo-03.png" },
    { name: "TOSHIBA", logo: "/images/partner/MENA-pst-logo-04.png" },
    {
      name: "Standard Chartered",
      logo: "/images/partner/MENA-pst-logo-05.png",
    },
    { name: "PEPSICO", logo: "/images/partner/MENA-pst-logo-06.png" },
    { name: "Goodyear", logo: "/images/partner/MENA-pst-logo-07.png" },
    { name: "DP WORLD", logo: "/images/partner/novo.png" },
    { name: "SKY  JEWELLERY", logo: "/images/partner/key.png" },
    { name: "Al-Rajhi bank", logo: "/images/partner/al-rajhi-bank-logo.svg" },
    { name: "DHL", logo: "/images/partner/dhl.svg" },
    { name: "Johnson & Johnson", logo: "/images/partner/johnson.svg" },
    { name: "Lilly", logo: "/images/partner/lilly.svg" },
    { name: "Gilead", logo: "/images/partner/gilead.svg" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const clientsPerView = 6;
  const translateXPercentage = -(
    currentIndex *
    (100 / (window.innerWidth < 768 ? 8.5 : 6))
  );
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < clients.length - clientsPerView) {
        console.log(prevIndex);
        console.log(currentIndex);
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  return (
    <section className="container flex flex-col w-full">
      <div className="flex flex-col justify-between items-center mb-4 md:flex-row">
        <h2 className="text-mena-brand text-2xl font-semibold lg:text-4xl">
          Trusted by Awesome Clients
        </h2>
        <div className="flex gap-2 my-2">
          <button
            className=" prev-button bg-gray-600 text-white py-2 px-4 rounded disabled:opacity-50"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <button
            className=" next-button bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50"
            onClick={handleNext}
            disabled={currentIndex >= 3}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex justify-center gap-2 transition-transform duration-500 ease-in-out w-[calc(60%*12/1)] md:w-[calc(100%*12/6)]"
          style={{
            transform: `translateX(${translateXPercentage}%)`,
          }}
        >
          {clients.map((client, index) => (
            <div
              className="flex justify-center items-center border border-gray-300 rounded-lg bg-white p-2 m-1 w-28 md:w-36 h-24 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              key={index}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeOurPartners;

// 8.5;
