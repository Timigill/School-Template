import Image from "next/image";

const events = [
  {
    id: 1,
    title: "World Book Day Celebration",
    date: "6 March 2025",
    description:
      "Children enjoyed storytelling, costume day, and interactive reading activities.",
    image: "/event.png",
  },
  {
    id: 2,
    title: "Earth Day Activities",
    date: "22 April 2025",
    description:
      "Kids learned about recycling, planting trees, and caring for the environment.",
    image: "/event.png",
  },
  {
    id: 3,
    title: "Father’s Day Event",
    date: "15 June 2025",
    description:
      "A special day with games, crafts, and bonding activities for fathers and children.",
    image: "/event.png",
  },
];

export default function EventsPage() {
  return (
    <div className="wrapper py-5 my-5">
      <h1 className="heading">School Events & Activities</h1>
      <p className=" lead subHeading my-3">
        Latest events and celebrations from our learning community
      </p>
      <p className="subHeading text-center mb-5">
        Our school events are designed to inspire creativity, build confidence,
         and nurture young minds through fun and meaningful experiences.
      </p>

      <div className="grid">
        {events.map((event) => (
          <div key={event.id} className="card">
            <div className="imageWrapper">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="image"
              />
            </div>

            <div className="content">
              <span className="date">{event.date}</span>
              <h2>{event.title}</h2>
              <p>{event.description}</p>

              <button className="btn btn-outline-primary">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
