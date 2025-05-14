import { cn } from "@/lib/utils";
import { TestimonialType } from "@/types/testimonial-type";
import React, { useState, useEffect, useRef } from "react";

interface HomeTestimonialsSectionProps {
  testimonials: TestimonialType[];
}

const TestimonialCard = ({
  author,
  author_title,
  content,
  id,
  onExpand,
  isExpanded,
}: TestimonialType & {
  onExpand: (id: number | string) => void;
  isExpanded: boolean;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isExpanded && isMobile && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isExpanded, isMobile]);

  const handleCardClick = () => {
    if (isMobile) {
      onExpand(id);
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative h-full shrink-0 overflow-hidden rounded-xl border p-4 transition-all duration-300",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        isExpanded && "z-20 shadow-lg",
        isMobile
          ? "w-[85vw] max-w-[300px] cursor-pointer"
          : "w-64 cursor-pointer",
        isExpanded && isMobile && "bg-white dark:bg-gray-900"
      )}
      onClick={handleCardClick}
      onMouseEnter={() => !isMobile && onExpand(id)}
      onMouseLeave={() => !isMobile && onExpand("")}
    >
      <div>
        <blockquote
          className={cn(
            "mt-2 text-sm transition-all duration-300",
            isExpanded ? "line-clamp-none" : "line-clamp-4"
          )}
        >
          {content}
        </blockquote>
        <div className="flex flex-col mt-4">
          <div className="text-sm font-medium dark:text-white text-mena-brand">
            {author}
          </div>
          {author_title && (
            <p className="text-xs font-medium text-gray-500 dark:text-white/40">
              {author_title}
            </p>
          )}
        </div>
      </div>
      {isMobile && (
        <div className="absolute bottom-2 right-2 text-xs text-gray-400">
          {isExpanded ? "Tap to close" : "Tap to read"}
        </div>
      )}
    </div>
  );
};

export default function HomeTestimonialsSection({
  testimonials,
}: HomeTestimonialsSectionProps) {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState<string | number>("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Pause animation when a card is expanded on mobile
    if (isMobile) {
      setIsPaused(!!expandedCardId);
    }
  }, [expandedCardId, isMobile]);

  const handleExpandCard = (id: string | number) => {
    setExpandedCardId(expandedCardId === id ? "" : id);
  };

  // Handle clicks outside cards to close expanded card
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        expandedCardId &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setExpandedCardId("");
      }
    };

    if (isMobile && expandedCardId) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [expandedCardId, isMobile]);

  return (
    <div className="max-w-7xl mx-auto sm:px-6">
      <h2 className="text-3xl font-bold mb-8 text-mena-brand lg:px-8 px-4">
        What Our Clients Say
      </h2>

      <div
        ref={containerRef}
        className="relative flex w-full flex-col items-center justify-center overflow-hidden"
        onMouseEnter={() => !isMobile && setIsPaused(true)}
        onMouseLeave={() => !isMobile && setIsPaused(false)}
      >
        {testimonials.length > 0 ? (
          <>
            {/* Marquee Container */}
            <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_20%,_black_80%,_transparent_100%)]">
              {/* Animated Row */}
              <div
                className={cn(
                  "flex w-fit gap-4 py-4",
                  isPaused
                    ? "animate-paused"
                    : isMobile
                    ? "animate-marquee-slow"
                    : "animate-marquee"
                )}
              >
                {duplicatedTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`${testimonial.id}-${index}`}
                    {...testimonial}
                    onExpand={handleExpandCard}
                    isExpanded={expandedCardId === testimonial.id}
                  />
                ))}
              </div>
            </div>

            {/* Only show second row on desktop */}
            {!isMobile && (
              <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_20%,_black_80%,_transparent_100%)]">
                <div
                  className={cn(
                    "flex w-fit gap-4 py-4",
                    isPaused ? "animate-paused" : "animate-marquee-reverse"
                  )}
                >
                  {duplicatedTestimonials.map((testimonial, index) => (
                    <TestimonialCard
                      key={`${testimonial.id}-${index}-reverse`}
                      {...testimonial}
                      onExpand={handleExpandCard}
                      isExpanded={expandedCardId === testimonial.id}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
          </>
        ) : (
          <p className="text-center py-8 text-gray-500">
            No testimonials available
          </p>
        )}
      </div>

      {isMobile && (
        <div className="text-center text-sm text-gray-500 mt-4 px-4">
          Tap a card to read the full testimonial
        </div>
      )}

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-slow {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 70s linear infinite;
        }

        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 70s linear infinite;
        }

        .animate-paused {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
