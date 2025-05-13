import { cn } from "@/lib/utils";
import { Marquee } from "@/Components/ui/marquee";
import { TestimonialType } from "@/types/testimonial-type";

interface HomeTestimonialsSectionProps {
  testimonials: TestimonialType[];
}

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

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((testimonial) => (
          <ReviewCard key={testimonial.id} {...testimonial} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((testimonial) => (
          <ReviewCard key={testimonial.id} {...testimonial} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default HomeTestimonialsSection;
