import React from "react";
import "./Services.css";
import pic from "../../../assets/man-barbershop-salon-doing-haircut-beard-trim.jpg";

export default function Services() {
  const posts = [
    {
      title: "Hair Cut",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature.",
      img: pic,
      price: 30,
    },
    {
      title: "Hair Cut",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      img: pic,
      price: 30,
    },
    {
      title: "Hair Cut",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      img: pic,
      price: 30,
    },
  ];
  return (
    <>
      {" "}
      <section className="my-12">
        <div className="text-center">
          <h3 className="text-[#625c56] font-bold">WHAT WE'RE OFFERING</h3>
          <h1 className="text-3xl font-bold sm:text-6xl">Barber Services</h1>
        </div>
        <div className="mt-12 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3 md:mx-20">
          {posts.map((items, key) => (
            <div className="card-container" key={key}>
              <div className="card">
                <div className="front-content">
                  <img src={items.img} alt="" />
                </div>
                <div className="content">
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
