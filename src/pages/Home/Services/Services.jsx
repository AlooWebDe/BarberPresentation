import React from "react";
import "./Services.css";
import pic from "../../../assets/2149141757.jpg";
import pic2 from "../../../assets/20978.jpg";
import pic3 from "../../../assets/2147737069.jpg";
import { AiOutlineScissor } from "react-icons/ai";

export default function Services() {
  const posts = [
    {
      title: "Hair Cut",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature.",
      img: pic,
      price: 80,
    },
    {
      title: "Beard Cut",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      img: pic2,
      price: 60,
    },
    {
      title: "Hair Cut",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      img: pic3,
      price: 40,
    },
  ];
  return (
    <>
      <section className="my-12" id="services">
        <div className="text-center">
          <h3 className="text-[#625c56] font-bold">WHAT WE'RE OFFERING</h3>
          <h1 className="text-3xl font-bold sm:text-6xl">Barber Services</h1>
        </div>
        <div className="mt-12 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3 md:mx-16 lg:mx-20">
          {posts.map((items, key) => (
            <div className="card-container" key={key}>
              <div className="card md:h-72 lg:h-[350px]">
                <div className="front-content h-full">
                  <img
                    src={items.img}
                    alt={items.title}
                    className="object-cover h-full"
                  />
                </div>
                <div className="content">
                  <AiOutlineScissor className="text-4xl" />

                  <p className="heading text-2xl font-bold">{items.title}</p>
                  <p>{items.desc}</p>
                  <p className="font-bold text-3xl">${items.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
