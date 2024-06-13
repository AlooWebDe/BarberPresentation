import React from "react";
import "./Features.css";
import pic from "../../../assets/2149141757.jpg";
import pic2 from "../../../assets/2147737069.jpg";
import pic3 from "../../../assets/20978.jpg";

export default function Features() {
  const posts = [
    {
      title: "Groom's Shave",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      img: pic,
    },
    {
      title: "Kids Cuts",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      img: pic2,
    },
    {
      title: "Creative Barbers",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      img: pic3,
    },
  ];
  return (
    <>
      <section className="mb-20">
        <div className="text-center bg-[#14100c] py-20 pb-64">
          <h3 className="text-[#625c56] font-bold">FIRS-CLASS</h3>
          <h1 className="text-3xl font-bold sm:text-6xl text-white">
            Our Features
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 -mt-36 mx-5 md:mx-12 lg:mx-6 xl:mx-36">
          {posts.map((items, key) => (
            <div className="feature-card" key={key}>
              <div className="feature-card-content">
                <img src={items.img} alt={items.title} className="rounded-md" />
                <h1 className="heading">{items.title}</h1>
                <p className="para">{items.desc}</p>
                <button className="btn">Appoinment</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
