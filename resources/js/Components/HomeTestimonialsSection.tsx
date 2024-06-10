import React from 'react';
import {TestimonialType} from "@/types/testimonial-type";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface HomeTestimonialsSectionProps {
  testimonials: TestimonialType[];
}

function HomeTestimonialsSection({testimonials}: HomeTestimonialsSectionProps) {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <h3 className="text-4xl text-mena-brand font-semibold">
        Testimonials
      </h3>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {
          testimonials.map((testimonial) => (
            <SwiperSlide>


              <div className={'py-6 max-w-4xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12 items-start'}>
                <div className={'w-full flex items-center justify-center'}>
                  <svg
                    className={'w-12 lg:w-20 h-12 lg:h-20 opacity-10'}
                    viewBox="0 0 84 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M67.673 32.631C76.8922 32.631 83.1049 38.8737 83.1049 48.1236C83.1049 56.4473 75.9644 63.3819 66.2931 63.3819C55.6998 63.3819 47.8723 55.0581 47.8723 42.3439C47.8723 13.4452 69.5169 1.88577 83.1049 0.496582V13.2108C73.8916 14.8287 63.5332 23.8442 63.0693 33.7915C63.5332 33.5628 65.3712 32.631 67.673 32.631ZM20.7021 32.631C29.9096 32.631 36.1281 38.8737 36.1281 48.1236C36.1281 56.4473 28.9876 63.3819 19.3163 63.3819C8.72302 63.3819 0.895508 55.0581 0.895508 42.3439C0.895508 13.4452 22.5401 1.88577 36.1281 0.496582V13.2108C26.9148 14.8287 16.5564 23.8442 16.0925 33.7915C16.5564 33.5628 18.3944 32.631 20.7021 32.631Z"
                      fill="#050505"/>
                  </svg>
                </div>

                <div>
                  <p className="text-slate-500">
                    {testimonial.content}
                  </p>

                  <div className="mt-6 flex justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-mena-brand">{testimonial.author}</h4>
                      <p className="text-sm text-[#F15A29]">{testimonial.author_title}</p>
                    </div>

                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>

    </div>
  );
}

export default HomeTestimonialsSection;
