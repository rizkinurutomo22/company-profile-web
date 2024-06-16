import Image from "next/image";

export default function TeamCard({ member }) {
  return (
    <>
      <div>
        <Image
          src={member.picture.large}
          alt="Members Image"
          width={125}
          height={125}
          className="ml-3 rounded-full shadow-md shadow-cyan-500 duration-100 ease-in-out hover:scale-105"
        />
      </div>
      <div className="ml-4 flex flex-col justify-center text-left">
        <h3 className="text-2xl font-semibold">
          {member.name.first} {member.name.last}
        </h3>
        <p className="font-light">
          {member.title}
          <br />
          {member.email} <br />
          {member.location.city}, {member.location.state} <br />
          {member.location.country}
        </p>
      </div>
    </>
  );
}
