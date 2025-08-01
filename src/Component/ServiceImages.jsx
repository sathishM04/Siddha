import React, { useState } from "react";
import Service from "./Service";
import indian from "../assets/ServiceImages/indian-medicine.png";
import varma from "../assets/ServiceImages/varma.jpg";
import auricular from "../assets/ServiceImages/auricular.jpg";
import Cupping from "../assets/ServiceImages/cupping.png";
import magnetic from "../assets/ServiceImages/magnetic.jpg";
import foot from "../assets/ServiceImages/foot.png";
import seed from "../assets/ServiceImages/seed.jpg";
import accupressure from "../assets/ServiceImages/accupressure.png";
import hypno from "../assets/ServiceImages/hypno.jpeg";
import neuro from "../assets/ServiceImages/neuro.png";
import chiro from "../assets/ServiceImages/chiro.png";
import oilMassage from "../assets/ServiceImages/massage.png";
import yoga from "../assets/ServiceImages/yoga.png";
import mudra from "../assets/ServiceImages/mudra.jpg";

const ServiceImages = () => {
  const serviceData = [
    {
      id: 1,
      image: indian,
      name: "Indian Medicine",
    },
    {
      id: 2,
      image: varma,
      name: "Varma Theraphy",
    },
    {
      id: 3,
      image: auricular,
      name: "Auricular Theraphy",
    },
    {
      id: 4,
      image: Cupping,
      name: "Cupping Theraphy",
    },
    {
      id: 5,
      image: magnetic,
      name: "Magnatic Theraphy",
    },
    {
      id: 6,
      image: foot,
      name: "Foot Reflexology",
    },
    {
      id: 7,
      image: seed,
      name: "Seed Theraphy",
    },
    {
      id: 8,
      image: accupressure,
      name: "Accupressure Theraphy",
    },
    {
      id: 9,
      image: hypno,
      name: "Hypno Theraphy",
    },
    {
      id: 10,
      image: neuro,
      name: "Neuro Theraphy",
    },
    {
      id: 11,
      image: chiro,
      name: "Chiro Theraphy",
    },
    {
      id: 12,
      image: oilMassage,
      name: "Medicated Oil Masssage",
    },
    {
      id: 13,
      image: yoga,
      name: "Yoga Theraphy",
    },
    {
      id: 14,
      image: mudra,
      name: "Mudra Theraphy",
    },
  ];
  return <Service data={serviceData} />;
};

export default ServiceImages;
