import { cn } from "@/lib/utils";
import { TestimonialType } from "@/types/testimonial-type";

const TestimonialCard = ({
  author,
  author_title,
  content,
  id,
}: TestimonialType) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 shrink-0 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <blockquote className="mt-2 text-sm line-clamp-4">{content}</blockquote>
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
}: {
  testimonials: TestimonialType[];
}) {
  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full overflow-hidden py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-mena-brand">
        What Our Clients Say
      </h2>

      <div className="relative group">
        {/* Top Marquee */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_10%,_black_90%,_transparent_100%)]">
          <div className="animate-marquee flex w-fit gap-4 py-4 group-hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                {...testimonial}
              />
            ))}
          </div>
        </div>

        {/* Bottom Marquee (Reverse) */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_10%,_black_90%,_transparent_100%)]">
          <div className="animate-marquee-reverse flex w-fit gap-4 py-4 group-hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}-reverse`}
                {...testimonial}
              />
            ))}
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
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
          animation: marquee 60s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }

        /* Pause animation on parent hover */
        .group:hover .animate-marquee,
        .group:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
