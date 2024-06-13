import React from "react";

export default function Pricing() {
  const posts = [
    {
      title: "Wash and Cut",
      desc: "Lorem nestibulum sceisue can varius the dis monte.",
      price: 20,
    },
    {
      title: "Head Shave with Razor",
      desc: "Lorem nestibulum sceisue can varius the dis monte.",
      price: 30,
    },
    {
      title: "Long Hair",
      desc: "Lorem nestibulum sceisue can varius the dis monte.",
      price: 45,
    },
    {
      title: "Children Wash & Cut",
      desc: "Lorem nestibulum sceisue can varius the dis monte.",
      price: 25,
    },
    {
      title: "Wash and Style",
      desc: "Lorem nestibulum sceisue can varius the dis monte.",
      price: 10,
    },
    {
      title: "Short Beard Tidy",
      desc: "Lorem nestibulum sceisue can varius the dis monte.",
      price: 15,
    },
    {
      title: "Large beard trim",
      desc: "Lorem nestibulum sceisue can varius the dis monte.",
      price: 25,
    },
    {
      title: "Luxury Full Service",
      desc: "Lorem nestibulum sceisue can varius the dis monte.",
      price: 60,
    },
  ];
  return (
    <>
      <div className="dark:bg-gray-950 rounded-lg p-6 md:p-8 lg:p-10">
        <div className="grid gap-6 md:gap-8 lg:gap-10">
          <div className="text-center">
            <h3 className="text-[#625c56] font-bold">PRICING PLAN</h3>
            <h1 className="text-3xl font-bold sm:text-6xl text-[#14100c]">
              Barber Pricing
            </h1>
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((items, key) => (
              <div
                className=" dark:bg-gray-800 hover:shadow-lg hover:-translate-y-3 rounded-lg p-4 md:p-6 text-white transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(0deg, hsla(30, 7%, 36%, 1) 0%, hsla(60, 22%, 30%, 1) 100%)",
                }}
                key={key}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {items.title}
                    </h3>
                    <p className="dark:text-gray-400 mt-1 md:text-base">
                      {items.desc}
                    </p>
                  </div>
                  <div className="text-lg md:text-xl font-bold">
                    ${items.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
