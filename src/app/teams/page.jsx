"use client";

import TeamCard from "@/components/TeamCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Teams() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const titles = [
    "General Manager",
    "Marketing Manager",
    "Storage Officer",
    "Sales Associate",
    "Customer Service Representative",
    "Online Store Manager",
    "Events Coordinator",
    "Graphic Designer",
    "Purchasing Manager",
  ];

  useEffect(() => {
    const fetchRandomMembers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=9",
        );

        const combinedData = response.data.results.map((user, index) => ({
          ...user,
          title: titles[index % titles.length],
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
    <>
      <h2 className="my-6 text-3xl font-semibold text-cyan-700">
        Meet Our Teams !
      </h2>
      <section className="lg mx-8 flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <li key={index} className="mb-8 flex">
            <TeamCard member={member} />
          </li>
        ))}
      </section>
    </>
  );
}
