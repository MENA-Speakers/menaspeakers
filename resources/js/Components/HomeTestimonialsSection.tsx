import { cn } from "@/lib/utils";
import { Marquee } from "@/Components/ui/marquee";
import { TestimonialType } from "@/types/testimonial-type";

interface HomeTestimonialsSectionProps {
  testimonials: TestimonialType[];
}

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
}: HomeTestimonialsSectionProps) {
  // Duplicate testimonials to ensure seamless marquee animation
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-mena-brand">
        What Our Clients Say
      </h2>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        {testimonials.length > 0 ? (
          <>
            <Marquee pauseOnHover className="[--duration:40s] gap-4">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${index}`}
                  {...testimonial}
                />
              ))}
            </Marquee>

            <Marquee
              reverse
              pauseOnHover
              className="mt-4 [--duration:40s] gap-4"
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${index}-reverse`}
                  {...testimonial}
                />
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
          </>
        ) : (
          <p className="text-center py-8 text-gray-500">
            No testimonials available
          </p>
        )}
      </div>
    </div>
  );
}
