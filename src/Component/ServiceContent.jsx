import React from "react";
import "../Styles/serviceContent.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
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
import { useEffect } from "react";
import { useRef } from "react";

const ServiceContent = () => {
  const navigate = useNavigate();
  const serviceContent = useRef(null);

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    serviceContent.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const serviceData = [
    {
      id: 1,
      image: indian,
      name: "Indian Medicine",
      content: `Indian Medicine is an ancient system of healing that has been practiced for  
                Siddha Medicine, originating in South India, is one of the oldest branches of Indian Medicine and is known for its powerful herbal formulations, rejuvenation therapies, and personalized treatment methods. Ayurveda emphasizes the balance of the three doshas—Vata, Pitta, and Kapha—while Unani blends traditional Greek and Indian knowledge for natural healing.

                Unlike modern medicine, which often focuses on symptom relief, Indian Medicine works at the root cause of illness, aiming to restore natural harmony and strengthen the body’s immunity. It encourages a lifestyle in tune with nature, mindful eating, yoga, and meditation for complete health.

                With its deep cultural heritage and proven effectiveness, Indian Medicine continues to be a trusted choice for those seeking safe, natural, and holistic healthcare.`,
    },
    {
      id: 2,
      image: varma,
      name: "Varma Therapy",
      content: `Varma Therapy is an ancient South Indian healing practice that focuses on stimulating specific pressure points (known as “Varmam”) in the body to restore health, energy flow, and balance. It is an integral part of Siddha Medicine and is traditionally used for pain relief, injury recovery, and overall wellness.<br><br>
  <ul>
     <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Originated in Tamil Nadu and has been practiced for thousands of years.</li>
      <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Works on 108 vital points in the body to regulate energy (Prana).</li>
      <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Uses gentle pressure, massage, and manipulation techniques.</li>
     <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Helps in treating musculoskeletal pain, joint stiffness, and nerve-related issues.</li>
      <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Supports recovery from sports injuries and physical trauma.</li>
      <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Improves blood circulation and enhances flexibility.</li>
      <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Balances the nervous system and promotes relaxation.</li>
     <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Can be combined with herbal oils for faster healing.</li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Non-invasive and completely natural method of treatment.</li>
   <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Also used to enhance martial arts performance and prevent injuries.</li>
  </ul>`,
    },
    {
      id: 3,
      image: auricular,
      name: "Auricular Therapy",
      content: `Auricular Therapy, also known as ear acupuncture or ear reflexology, is a natural healing technique that stimulates specific points on the outer ear to promote physical, emotional, and mental well-being. It is based on the idea that the ear is a microsystem representing the entire body, and stimulating these points can influence corresponding organs and systems.<br><br>
        <ul style="list-style: none; padding-left: 0;">
        <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Originates from traditional Chinese and Indian healing practices.
        </li>
        <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Uses gentle pressure, seeds, magnets, or fine needles on ear reflex points.
        </li>
        <li style="display: flex; align-items:center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Supports pain relief for headaches, migraines, and musculoskeletal issues.
        </li>
        <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Helps manage stress, anxiety, and sleep disorders.
        </li>
        <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Aids in weight management and reducing food cravings.
        </li>
        <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Non-invasive and suitable for all age groups.
        </li>
      </ul>`,
    },
    {
      id: 4,
      image: Cupping,
      name: "Cupping Therapy",
      content: `Cupping Therapy
Cupping Therapy is a time-tested healing method that involves placing special cups on the skin to create gentle suction. This suction stimulates blood circulation, promotes the removal of toxins, and encourages the body’s natural healing process. Widely practiced in Siddha medicine, Traditional Chinese Medicine, and various ancient cultures, cupping is known for its ability to relieve muscle stiffness, reduce inflammation, and restore energy balance.

The therapy works by drawing stagnant blood and toxins to the skin’s surface, where the body can process and eliminate them more efficiently. It also helps relax deep muscle tissue, release tension, and support joint mobility. Cupping can be done in different forms—dry cupping, wet cupping, or moving cupping—depending on the condition being treated.
<ul>
<strong>This gentle yet powerful technique is used for a range of health concerns, including:</strong>

  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
Chronic back and neck pain
</li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
Headaches and migraines
</li>

  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
Sports injuries and muscle recovery
</li>

  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
Stress, anxiety, and fatigue
</li>

  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
Digestive imbalances
</li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
Respiratory issues like asthma and bronchitis
</li>
</ul>

Cupping Therapy is safe, non-invasive, and deeply relaxing, making it an excellent choice for those seeking natural and holistic healing.`,
    },
    {
      id: 5,
      image: magnetic,
      name: "Magnetic Therapy",
      content: `Magnetic Therapy is a natural healing practice that harnesses the power of magnetic fields to improve overall health and well-being. It works on the principle that magnets can influence the body’s bioenergy field, enhance blood circulation, and stimulate the natural healing process. This therapy is widely used for relieving pain, reducing inflammation, and accelerating recovery from injuries.<br>

      By placing magnets on specific parts of the body, Magnetic Therapy is believed to restore energy balance, improve oxygen supply to tissues, and promote better nutrient absorption. It may also help in easing joint stiffness, supporting muscle relaxation, and reducing stress levels. In holistic health systems like Siddha and Ayurveda, magnets are sometimes combined with other natural therapies to boost their effectiveness.<br>

      Magnetic Therapy is safe, non-invasive, and drug-free, making it suitable for long-term use and for people seeking alternative approaches to pain management and wellness. It is often used for conditions such as arthritis, migraines, sports injuries, chronic fatigue, and poor circulation, offering a gentle yet effective path to improved vitality and comfort.`,
    },
    {
      id: 6,
      image: foot,
      name: "Foot Reflexology",
      content: `Foot Reflexology is an ancient healing practice that applies gentle pressure to specific points on the feet, which are believed to correspond to different organs and systems of the body. Rooted in traditional medicine systems like Siddha and Traditional Chinese Medicine, this therapy aims to restore balance, relieve tension, and improve overall health by stimulating the body's natural energy pathways.<br><br>

  <strong>Main Benefits:</strong>
  <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 10px;">
      <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Promotes deep relaxation and reduces stress.</li>
     <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Improves blood circulation and energy flow.</li>
      <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Helps relieve headaches and migraines.</li>
      <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Supports the body’s natural detoxification process.</li>
  </ul>

  <strong>Additional Advantages:</strong>
  <ul style="list-style-type: square; padding-left: 20px; margin-bottom: 10px;">
     <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Alleviates foot pain and stiffness.</li>
      <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Improves sleep quality and reduces fatigue.</li>
      <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Boosts immunity and overall vitality.</li>
      <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>Complements other natural therapies for better results.</li>
  </ul>

  <strong style="margin-bottom:10px; display:block;">Why People Choose Foot Reflexology:</strong>
  <ul style="list-style: none; padding-left: 0;">
    <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
      Safe, non-invasive, and suitable for all age groups.
    </li>
     <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span> 
      Can be enjoyed as a wellness or preventive care routine.
    </li>
  </ul>`,
    },
    {
      id: 7,
      image: seed,
      name: "Seed Therapy",
      content: `Seed Therapy is a natural healing technique rooted in the principles of acupressure and Sujok therapy, where seeds, pulses, or small grains are applied to specific points on the body—often the hands or feet—to stimulate energy flow and promote healing. Each seed is chosen for its shape, size, and vibrational qualities, believed to correspond with particular organs or body functions. The gentle pressure from the seeds helps activate the body’s self-healing mechanisms, improve circulation, and restore balance in the affected areas. This therapy is simple, non-invasive, and cost-effective, making it suitable for people of all ages. Seed Therapy is often used to manage conditions such as joint pain, digestive problems, respiratory issues, and stress, and can be combined with other holistic treatments for enhanced results.`,
    },
    {
      id: 8,
      image: accupressure,
      name: "Acupressure Therapy",
      content: `Acupressure Therapy is a traditional healing method that involves applying gentle, targeted pressure to specific points on the body, known as acupoints, to stimulate the body’s natural self-healing abilities. Rooted in ancient medicine systems like Siddha, Ayurveda, and Traditional Chinese Medicine, this therapy works by balancing the flow of life energy (Prana or Qi) through energy pathways called meridians. It is widely used to relieve pain, reduce stress, improve circulation, and enhance overall well-being. Acupressure is completely natural, non-invasive, and suitable for all age groups, making it an effective option for managing headaches, back pain, digestive disorders, fatigue, and emotional imbalances.<br><br>

  <strong>Key Benefits:</strong>
  <ul style="list-style: none; padding-left: 0;">
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
      Relieves muscle tension and chronic pain.
    </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
      Reduces stress, anxiety, and mental fatigue.
    </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
      Improves blood circulation and energy flow.
    </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
      Supports better sleep and relaxation.
    </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
      Strengthens immunity and promotes holistic wellness.
    </li>
  </ul>`,
    },
    {
      id: 9,
      image: hypno,
      name: "Hypno Therapy",
      content: `Hypno Therapy is a powerful mind–body healing technique that uses guided relaxation, focused attention, and deep concentration to reach a heightened state of awareness known as a trance. In this deeply relaxed state, the subconscious mind becomes more receptive to positive suggestions, making it easier to release unwanted habits, reduce stress, and address emotional challenges.<br>

This gentle and non-invasive therapy is widely used to overcome issues such as anxiety, phobias, insomnia, chronic pain, weight management, and smoking cessation. By working directly with the subconscious, Hypno Therapy helps reframe limiting beliefs, build self-confidence, and promote lasting personal transformation.<br>

Sessions are tailored to the individual, ensuring a safe and supportive environment where clients can explore the root causes of their concerns. It can also be combined with other holistic treatments to enhance results, making it a versatile and effective approach for mental, emotional, and behavioral well-being.`,
    },
    {
      id: 10,
      image: neuro,
      name: "Neuro Therapy",
      content: `Neuro Therapy is a holistic healing method that focuses on stimulating specific nerve points and pressure zones in the body to improve the functioning of the nervous system and restore overall health. This therapy works on the principle that many health issues arise from imbalances or blockages in nerve signals, which can affect the proper functioning of organs and body systems. By applying gentle, targeted pressure to key points—often along the spine, head, and extremities—Neuro Therapy helps regulate nerve impulses, improve blood and oxygen flow, and support the body’s natural healing process.<br><br>

  <strong>Benefits of Neuro Therapy:</strong>
  <ul style="list-style: none; padding-left: 0;">
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
      Relieves chronic pain and improves mobility.
    </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
      Helps manage paralysis, migraines, and nerve disorders.
    </li>
      <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
      Improves blood circulation and oxygen supply to tissues.
    </li>
    <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
      Reduces stress and enhances nervous system balance.
    </li>
     <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
      Safe, drug-free, and suitable for people of all ages.
    </li>
  </ul>`,
    },
    {
      id: 11,
      image: chiro,
      name: "Chiro Therapy",
      content: `Chiro Therapy, short for Chiropractic Therapy, is a holistic treatment method that focuses on diagnosing and correcting misalignments in the spine and joints to improve overall health. It is based on the principle that proper alignment of the musculoskeletal structure allows the body to heal naturally without surgery or medication. Gentle manual adjustments are used to restore mobility, relieve pain, and support optimal nervous system function.<br>

This therapy is commonly used to address back pain, neck stiffness, headaches, posture problems, and sports injuries. By improving spinal alignment, Chiro Therapy also enhances flexibility, boosts energy levels, and promotes better balance and coordination. Non-invasive and drug-free, it offers a safe, natural approach to managing pain and maintaining long-term musculoskeletal health.`,
    },
    {
      id: 12,
      image: oilMassage,
      name: "Medicated Oil Massage",
      content: `Medicated Oil Massage is a time-honored healing technique in Siddha and Ayurveda, where specially prepared herbal oils are applied and massaged into the body using gentle, rhythmic strokes. These oils are infused with carefully chosen medicinal herbs to address specific health needs, ranging from joint pain and muscle stiffness to skin health and stress relief. By penetrating deep into the skin, the oils help detoxify the body, improve circulation, and lubricate the joints, while the massage techniques stimulate vital energy points to restore balance.<br>

The therapy is personalized based on the individual’s body constitution, lifestyle, and health conditions. Warm oil massage also aids in relieving fatigue, improving sleep, and supporting the nervous system. In addition to its therapeutic benefits, it leaves the skin soft, nourished, and radiant.<br>

<ul>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Relieves muscle stiffness and joint pain.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
        Improves flexibility and mobility.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Enhances blood circulation and oxygen supply to tissues.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
        Reduces stress, anxiety, and mental fatigue.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Strengthens the immune system.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Promotes better sleep and deep relaxation.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Supports detoxification by flushing out impurities.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Improves skin tone and texture.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Helps in managing chronic conditions like arthritis and spondylitis.
          </li>
</ul>`,
    },
    {
      id: 13,
      image: yoga,
      name: "Yoga Therapy",
      content: `Yoga Therapy is a time-tested, holistic healing approach that blends traditional yoga practices with modern therapeutic understanding to improve overall health and address specific ailments. It integrates physical postures (asanas), breathing exercises (pranayama), meditation, guided relaxation, and lifestyle advice to restore balance and vitality. Unlike general yoga, Yoga Therapy is tailored to suit each individual’s condition, making it suitable for people of all ages and abilities.<br>

It is highly effective for managing chronic conditions such as back pain, arthritis, hypertension, diabetes, asthma, depression, and anxiety. By gently stretching and strengthening the body, it enhances flexibility, improves posture, boosts immunity, and promotes better digestion and circulation. Yoga Therapy also helps regulate hormones, improve sleep quality, and strengthen the nervous system.<br>

More than just physical exercise, Yoga Therapy nurtures mental clarity, emotional stability, and inner peace. It encourages mindfulness, self-awareness, and a positive outlook on life—creating harmony between body, mind, and spirit. Safe, non-invasive, and deeply rejuvenating, it can be practiced as a standalone healing system or in combination with other natural therapies for optimal results.`,
    },
    {
      id: 14,
      image: mudra,
      name: "Mudra Therapy",
      content: `Mudra Therapy
Mudra Therapy is an ancient healing practice that involves specific hand gestures or positions to channel the body’s energy flow and restore balance. Rooted in yoga and Ayurveda, it is based on the belief that the five fingers represent the five elements—Fire, Air, Space, Earth, and Water—and that imbalances in these elements can lead to illness. By practicing mudras, these elements are balanced, activating the body’s self-healing powers.<br>
<ul>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Improves concentration, focus, and mental clarity.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Helps in managing stress, anxiety, and emotional imbalance.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Boosts immunity and strengthens the body’s resistance to illness.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Supports respiratory health and improves lung capacity.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Promotes better digestion and metabolism.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
         Assists in pain relief and alleviating chronic health conditions.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Can be practiced anytime and anywhere—no equipment required.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
         Complements meditation and pranayama for deeper relaxation.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Non-invasive, safe, and suitable for all age groups.
          </li>
  <li style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="display: inline-flex; justify-content: center; align-items: center; width: 15px; height: 15px; border-radius: 50%; background-color: #b6e17dff; color: white; font-size: 10px; margin-right: 8px;">✓</span>
          Regular practice can enhance energy, vitality, and overall well-being.
          </li>
</ul>
`,
    },
  ];
  return (
    <>
      <div id="serviceContent" ref={serviceContent}>
        <div className="imageContainer" />
        <div className="service-header">
          <div className="title">
            <h1>Services</h1>
          </div>
          <div className="breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb d-flex align-items-center">
                <li className="breadcrumb-item">
                  <a onClick={() => goToHome()}>Home</a>
                </li>

                <li className="breadcrumb-separator">
                  <FontAwesomeIcon icon={faGreaterThan} />
                </li>

                <li className="breadcrumb-link active" aria-current="page">
                  Services
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="service-page container">
        <h2>Voice of Chenduraan Services</h2>
        <p>
          At Voice of Chenduraan, we embrace the timeless power of Siddha
          medicine, guided by centuries-old knowledge and personalized care. Our
          healing philosophy blends traditional practices with a deep
          understanding of individual well-being. More than a service, we offer
          a journey — one that restores balance, revitalizes the body, and
          reconnects you with nature’s rhythm.
        </p>
        <h2>Consultation</h2>
        <p>
          Our team of consultants will examine you. To help us provide the best
          care, please prepare a brief summary of your medical history,
          including any medications you are currently taking. It may also be
          helpful to write down any questions you have
        </p>
      </div>
      <div>
        <div className="container">
          {serviceData.map((item) => (
            <>
              {item.id % 2 === 0 ? (
                <div className="mb-5">
                  <div className="service-title">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="row service-section-right ">
                    <div className="service-card-right col-lg-4 col-md-5 col-sm-12">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div
                      className="col-lg-8 col-md-7 col-sm-12 service-content"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                </div>
              ) : (
                <div className="mb-5">
                  <div className="service-title">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="row service-section-left">
                    <div
                      className="col-lg-8 col-md-7 col-sm-12 service-content"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                    <div className="service-card-left col-lg-4 col-md-5 col-sm-12">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceContent;
