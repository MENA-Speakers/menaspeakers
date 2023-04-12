import React from 'react';
import {Link} from "@inertiajs/react";
import {useCountdown} from "@/Hooks/useCountDownDate";

function HomeCountdownSection({targetDate}) {

  //write countdown function return array of days, hours, minutes, seconds
  const [days, hours, minutes, seconds] = useCountdown('April 29, 2023, 00:00:00');

  return (
    <section className="bg-white py-24 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center px-6 lg:px-0">
        <div className="flex flex-col p-6 lg:p-12  justify-center space-y-4 p-6">
          <h3 className="font-semibold text-2xl leading-tight">Public speaking Masterclass start in: </h3>
          <p>The workshop provides valuable insights and practical tips for delivering powerful presentations, engaging the audience, and developing a strong personal brand.</p>

        </div>

        <div className="col-span-1  w-full lg:pl-32 lg:pr-6 pt-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="shadow-2xl p-8">
              <p className="text-5xl text-mena-200">
                {days}
              </p>
              <p className="text-xs text-center">Days</p>
            </div>
            <div className="shadow-2xl p-8">
              <p className="text-5xl text-mena-200">
                {hours}
              </p>
              <p className="text-xs text-center">Hours</p>
            </div>
            <div className="shadow-2xl p-8">
              <p className="text-5xl text-mena-200">
                {minutes}
              </p>
              <p className="text-xs text-center">Minutes</p>
            </div>
            <div className="shadow-2xl p-8">
              <p className="text-5xl text-mena-200">
                {seconds}
              </p>
              <p className="text-xs text-center"></p>
            </div>
          </div>

          <div className="flex justify-end mt-24 lg:mt-12 ">
            <Link href={route('pages.contact')} className="gradient-btn font-semibold py-3 px-4 py-2 px-4 text-white">
              Register Now
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}

export default HomeCountdownSection;
