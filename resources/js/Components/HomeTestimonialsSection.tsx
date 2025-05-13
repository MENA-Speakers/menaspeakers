import { cn } from "@/lib/utils";
import { TestimonialType } from "@/types/testimonial-type";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 8560592 (edited animation duration)
interface HomeTestimonialsSectionProps {
  testimonials: TestimonialType[];
}

<<<<<<< HEAD
<<<<<<< HEAD
const HomeTestimonialsSection = ({
  testimonials,
}: HomeTestimonialsSectionProps) => {
  // Split testimonials into two rows for the marquee effect
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  const ReviewCard = ({ author, author_title, content }: TestimonialType) => {
    return (
      <figure
        className={cn(
          "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
=======
=======
>>>>>>> parent of 882ee8e (added the shadcn component)
=======
>>>>>>> parent of 8560592 (edited animation duration)
const TestimonialCard = ({
  author,
  author_title,
  content,
  id,
}: TestimonialType) => {
<<<<<<< HEAD
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
>>>>>>> parent of 8560592 (edited animation duration)
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {author}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">
              {author_title}
            </p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{content}</blockquote>
      </figure>
    );
  };

=======
>>>>>>> parent of 882ee8e (added the shadcn component)
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

<<<<<<< HEAD
<<<<<<< HEAD
export default HomeTestimonialsSection;
=======
export default function HomeTestimonialsSection({
  testimonials,
}: HomeTestimonialsSectionProps) {
=======
export default function HomeTestimonialsSection({
  testimonials,
<<<<<<< HEAD
}: {
  testimonials: TestimonialType[];
}) {
>>>>>>> parent of 882ee8e (added the shadcn component)
=======
}: HomeTestimonialsSectionProps) {
>>>>>>> parent of 8560592 (edited animation duration)
  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
    <div className="w-full overflow-hidden py-12">
>>>>>>> parent of 882ee8e (added the shadcn component)
=======
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> parent of 8560592 (edited animation duration)
      <h2 className="text-3xl font-bold text-center mb-8 text-mena-brand">
        What Our Clients Say
      </h2>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 8560592 (edited animation duration)
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        {testimonials.length > 0 ? (
          <>
            {/* Marquee Container */}
            <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_20%,_black_80%,_transparent_100%)]">
              {/* Animated Row */}
              <div className="animate-marquee flex w-fit gap-4 py-4">
                {duplicatedTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`${testimonial.id}-${index}`}
                    {...testimonial}
                  />
                ))}
              </div>
            </div>
<<<<<<< HEAD

            {/* Reverse Row */}
            <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_20%,_black_80%,_transparent_100%)]">
              <div className="animate-marquee-reverse flex w-fit gap-4 py-4">
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
=======
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
=======
>>>>>>> parent of 8560592 (edited animation duration)

            {/* Reverse Row */}
            <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_20%,_black_80%,_transparent_100%)]">
              <div className="animate-marquee-reverse flex w-fit gap-4 py-4">
                {duplicatedTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`${testimonial.id}-${index}-reverse`}
                    {...testimonial}
                  />
                ))}
              </div>
            </div>

<<<<<<< HEAD
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
>>>>>>> parent of 882ee8e (added the shadcn component)
=======
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
          </>
        ) : (
          <p className="text-center py-8 text-gray-500">
            No testimonials available
          </p>
        )}
>>>>>>> parent of 8560592 (edited animation duration)
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
<<<<<<< HEAD
<<<<<<< HEAD
          animation: marquee 40s linear infinite;
=======
          animation: marquee 60s linear infinite;
>>>>>>> parent of 882ee8e (added the shadcn component)
=======
          animation: marquee 40s linear infinite;
>>>>>>> parent of 8560592 (edited animation duration)
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======

        /* Pause animation on parent hover */
        .group:hover .animate-marquee,
        .group:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
>>>>>>> parent of 882ee8e (added the shadcn component)
=======
>>>>>>> parent of 8560592 (edited animation duration)
      `}</style>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> parent of 8560592 (edited animation duration)
=======
>>>>>>> parent of 882ee8e (added the shadcn component)
