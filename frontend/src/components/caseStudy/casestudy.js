"use client";
import React from "react";
import Footer from "@/layouts/footer/Footer";
import Navbar from "@/layouts/navbar/Navbar";
import Header from "../header/Header";
import Image from 'next/image'
// import { useRouter } from 'next/navigation';

const appData = [
  {
    title: "Papa John Pizza Delivery App",
    image:
      "https://images.pexels.com/photos/5436053/pexels-photo-5436053.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    tags: ["Android", "iOS", "Node JS"],
  },
  {
    title: "Astral Adhesives – Resiwood Winners' Circle",
    image:
      "https://images.pexels.com/photos/5436053/pexels-photo-5436053.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    tags: ["Android", "iOS", "Node JS", "MySQL"],
  },
  {
    title: "Art of Living A Meditation App",
    image:
      "https://images.pexels.com/photos/5436053/pexels-photo-5436053.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    tags: ["Android", "Flutter", "Node JS", "iOS"],
  },
  {
    title: "Papa John Pizza Delivery App",
    image:
      "https://images.pexels.com/photos/5436053/pexels-photo-5436053.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    tags: ["Android", "iOS", "Node JS"],
  },
  {
    title: "Papa John Pizza Delivery App",
    image:
      "https://images.pexels.com/photos/5436053/pexels-photo-5436053.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    tags: ["Android", "iOS", "Node JS"],
  },
  {
    title: "Papa John Pizza Delivery App",
    image:
      "https://images.pexels.com/photos/5436053/pexels-photo-5436053.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    tags: ["Android", "iOS", "Node JS"],
  },
  {
    title: "Papa John Pizza Delivery App",
    image:
      "https://images.pexels.com/photos/5436053/pexels-photo-5436053.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    tags: ["Android", "iOS", "Node JS"],
  },
  {
    title: "Papa John Pizza Delivery App",
    image:
      "https://images.pexels.com/photos/5436053/pexels-photo-5436053.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    tags: ["Android", "iOS", "Node JS"],
  },
  {
    title: "Papa John Pizza Delivery App",
    image:
      "https://images.pexels.com/photos/5436053/pexels-photo-5436053.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    tags: ["Android", "iOS", "Node JS"],
  },
  {
    title: "Papa John Pizza Delivery App",
    image:
      "https://images.pexels.com/photos/5436053/pexels-photo-5436053.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    tags: ["Android", "iOS", "Node JS"],
  },
  {
    title: "Papa John Pizza Delivery App",
    image:
      "https://images.pexels.com/photos/5436053/pexels-photo-5436053.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    tags: ["Android", "iOS", "Node JS"],
  },
  {
    title: "Papa John Pizza Delivery App",
    image:
      "https://images.pexels.com/photos/5436053/pexels-photo-5436053.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    tags: ["Android", "iOS", "Node JS"],
  },
];

const Card = ({ title, image, tags }) => (
    <div className="bg-white rounded-xl shadow-md p-4 w-full sm:w-[30%] flex flex-col">
      <div className="w-full aspect-[4/3] overflow-hidden rounded-md mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
  

const CardList = () => (
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <div className="p-8">
      <div className="flex flex-wrap justify-between gap-6">
        {appData.map((app, index) => (
          <Card key={index} {...app} />
        ))}
      </div>
    </div>
    <Footer></Footer>
  </div>
);

export default CardList;
