"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const companyHistory = [
    {
      year: 2018,
      milestone: "The Inception",
      details:
        "Mangabanana was founded in 2018 by Emma Tanaka and David Smith, two passionate manga enthusiasts who wanted to create a dedicated space for manga lovers. The company started as a small, independent bookstore in San Francisco, aiming to provide a comprehensive collection of manga titles for both hardcore fans and new readers.",
    },
    {
      year: 2019,
      milestone: "Establishing an Online Presence",
      details:
        "Recognizing the potential to reach a wider audience, Mangabanana launched its online store in 2019. This move allowed customers nationwide to access their extensive catalog of manga titles and related merchandise, significantly boosting the company's reach and sales.",
    },
    {
      year: 2020,
      milestone: "Subscription Service Launch",
      details:
        "To foster a sense of community among manga fans, Mangabanana began hosting events in 2021, such as book signings, manga reading clubs, and cosplay competitions. These events were designed to bring fans together and celebrate their shared love for manga.",
    },
    {
      year: 2021,
      milestone: "Community Events",
      details:
        "To foster a sense of community among manga fans, Mangabanana began hosting events in 2021, such as book signings, manga reading clubs, and cosplay competitions. These events were designed to bring fans together and celebrate their shared love for manga.",
    },
    {
      year: 2022,
      milestone: "Technological Advancements",
      details:
        "In 2022, Mangabanana invested in enhancing their online platform with interactive features, including augmented reality (AR) previews and virtual reality (VR) experiences. These technological innovations provided customers with immersive ways to explore and enjoy manga.",
    },
    {
      year: 2023,
      milestone: "Commitment to Sustainability",
      details:
        "Mangabanana committed to sustainability in 2023 by implementing eco-friendly practices in packaging and operations. The company introduced recycled packaging materials and launched green initiatives to reduce its environmental footprint.",
    },
    {
      year: 2024,
      milestone: "Anniversary and Future Plans",
      details:
        "Mangabanana celebrated its 6th anniversary in 2024 with special events and promotions. The company also announced plans to open new retail locations and further enhance its digital offerings, continuing its mission to serve the global manga community.",
    },
  ];

  const workers = [
    {
      title: "General Manager",
      overview:
        "General Manager at Mangabanana, oversees the company's overall operations and ensures that all departments work seamlessly together to achieve the company's goals.",
    },
    {
      title: "Marketing Manager",
      overview:
        "Marketing Manager at Mangabanana, is responsible for promoting the company's products and services, enhancing brand awareness, and driving sales through innovative marketing strategies.",
    },
    {
      title: "Storage Officer",
      overview:
        "Storage Officer at Mangabanana, manages the company's inventory and warehousing operations.",
    },
  ];

  useEffect(() => {
    const fetchRandomMembers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=3",
        );

        const combinedData = response.data.results.map((user, index) => ({
          ...user,
          position: workers[index % workers.length],
        }));

        setMembers(combinedData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchRandomMembers();
  }, []);

  if (loading) {
    return <div>Loading... ⌛</div>;
  }

  return (
    <section>
      <h2 className="my-6 text-3xl font-semibold text-cyan-700">About Us</h2>

      <div className="sm:mx-10">
        <h3 className="text-xl font-semibold underline">Company History</h3>
        <p className="mx-4">
          Mangabanana&apos;s journey from a small bookstore to a growing hub for
          manga fans demonstrates its dedication to the manga community and its
          continuous efforts to innovate and expand.
        </p>
        <ul className="mx-6">
          {companyHistory.map((history, index) => (
            <li key={index} className="my-4 flex flex-wrap gap-x-4 text-left">
              <div className="mb-2 cursor-default rounded-md border border-cyan-400 bg-cyan-200 px-2 shadow-sm shadow-cyan-500 duration-150 ease-in-out hover:shadow-md hover:shadow-cyan-600">
                <h4 className="font-semibold text-cyan-700">{history.year}</h4>
              </div>
              <p className="font-semibold">{history.milestone}</p>
              <p className="font-light">{history.details}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {members.map((member, index) => (
          <li key={index} className="my-6">
            <div className="mb-2 flex justify-center">
              <Image
                src={member.picture.large}
                alt="Member Image"
                width={100}
                height={100}
                className="rounded-lg shadow-md shadow-cyan-400 duration-150 ease-in-out hover:scale-110"
              />
            </div>
            <div className="mx-8">
              <h4 className="mb-2 font-semibold">
                {member.name.first} {member.name.last}
              </h4>
              <p className="text-center text-sm font-normal">
                {member.position.title}
                <br />
                {member.position.overview}
              </p>
            </div>
          </li>
        ))}
      </div>
    </section>
  );
}
