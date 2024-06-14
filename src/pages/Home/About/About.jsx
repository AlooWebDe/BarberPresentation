import React from "react";
import pic1 from "../../../assets/20953.jpg";
export default function About() {
  return (
    <>
      <section className="py-14" id="about">
        <div className="lg:max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-12 px-4 md:px-0 lg:flex lg:flex-row-reverse">
            <div className="flex flex-row justify-center gap-5 ">
              <div>
                <img
                  src={pic1}
                  className="lg:max-w-[350px] lg:max-h-[400px] sm:rounded-sm mt-36"
                  alt=""
                />
              </div>
              <div>
                <img
                  src={pic1}
                  className="lg:max-w-[350px] lg:max-h-[400px] sm:rounded-sm"
                  alt=""
                />
              </div>
            </div>
            <div className="max-w-xl mx-auto space-y-3 mt-6 md:max-w-2xl">
              <h3 className="text-[#625c56] font-semibold">SINCE 2006</h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Perukar Barber Shop
              </p>
              <p className="mt-3 text-gray-600">
                Come experience a unique and edgy barbershop for all your hair
                and beard needs. ravida haretra nuam enim mi obortis eset uctus
                enec accumsan eu justo alisuame amet auctor orci donec vitae
                vehicula risus. <br /> Barber utate ons amet ravida haretra nuam
                the duru miss uctus the drana accumsan justo aliquam sit amet
                auctor orci done vitae risus duise nisan sapien silver on the
                accumsan id mauris apien.
              </p>
              <ul className="leading-9">
                <li className="flex items-center gap-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  We're professional and certified barbers
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  We use quality products to make you look perfect
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  We care about our customers satisfaction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 lg:px-20">
        <div className="container px-5 md:py-15 py-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full text-[#625c56] mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Cuts
                </h2>
                <p className="leading-relaxed text-base">
                  Cuts ut nisl quam nestibulum drana odio elementum sceisue the
                  can golden varius the dis monte.
                </p>
              </div>
            </div>
            <div className="p-4 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-[#625c56] mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Fades
                </h2>
                <p className="leading-relaxed text-base">
                  Fades ut nisl quam nestibulum drana odio elementum sceisue the
                  can golden varius the dis monte.
                </p>
              </div>
            </div>
            <div className="p-4 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-[#625c56] mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Shaves
                </h2>
                <p className="leading-relaxed text-base">
                  Shaves ut nisl quam nestibulum drana odio elementum sceisue
                  the can golden varius the dis monte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
