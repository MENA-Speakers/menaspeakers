import { cn } from "@/lib/utils";
import { TestimonialType } from "@/types/testimonial-type";
import React, { useState } from "react";

interface HomeTestimonialsSectionProps {
  testimonials: TestimonialType[];
}

const TestimonialCard = ({
  author,
  author_title,
  content,
}: TestimonialType) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <figure
      className={cn(
        "relative h-full w-64 shrink-0 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-300",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        isHovered && "z-10 shadow-lg transform scale-105"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <blockquote
        className={cn(
          "mt-2 text-sm transition-all duration-300",
          isHovered ? "line-clamp-none" : "line-clamp-4"
        )}
      >
        {content}
      </blockquote>
      <div className="flex flex-col mt-4">
        <figcaption className="text-sm font-medium dark:text-white">
          {author}
        </figcaption>
        {author_title && (
          <p className="text-xs font-medium text-gray-500 dark:text-white/40">
            {author_title}
          </p>
        )}
      </div>
    </figure>
  );
};

export default function HomeTestimonialsSection({
  testimonials,
}: HomeTestimonialsSectionProps) {
  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-mena-brand">
        What Our Clients Say
      </h2>

      <div
        className="relative flex w-full flex-col items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {testimonials.length > 0 ? (
          <>
            {/* Marquee Container */}
            <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_20%,_black_80%,_transparent_100%)]">
              {/* Animated Row */}
              <div
                className={cn(
                  "flex w-fit gap-4 py-4",
                  isPaused ? "animate-paused" : "animate-marquee"
                )}
              >
                {duplicatedTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`${testimonial.id}-${index}`}
                    {...testimonial}
                  />
                ))}
              </div>
            </div>

            {/* Reverse Row */}
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
                  />
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
          </>
        ) : (
          <p className="text-center py-8 text-gray-500">
            No testimonials available
          </p>
        )}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
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

        .animate-marquee-reverse {
          animation: marquee-reverse 70s linear infinite;
        }

        .animate-paused {
          animation-play-state: paused;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .line-clamp-none {
          display: -webkit-box;
          -webkit-line-clamp: initial;
          -webkit-box-orient: vertical;
          overflow: visible;
          animation: fade-in 0.3s ease-in;
        }
      `}</style>
    </div>
  );
}
