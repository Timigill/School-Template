"use client";
import Image from "next/image";
import { FaUserTie, FaHandshake, FaHeart, FaLightbulb, FaBook, FaGlobe } from "react-icons/fa";

export default function VisionMissionValues() {
  const values = [
  {
    icon: <FaLightbulb size={30} className="mb-2 text-primary" />,
    title: "Leadership",
    description: "Inspire students to lead with confidence.",
  },
  {
    icon: <FaUserTie size={30} className="mb-2 text-success" />,
    title: "Integrity",
    description: "Foster honesty and strong moral values.",
  },
  {
    icon: <FaHeart size={30} className="mb-2 text-danger" />,
    title: "Passionate",
    description: "Encourage love for learning every day.",
  },
  {
    icon: <FaHandshake size={30} className="mb-2 text-warning" />,
    title: "Collaboration",
    description: "Promote teamwork and community spirit.",
  },
  {
    icon: <FaBook size={30} className="mb-2 text-info" />,
    title: "Knowledge",
    description: "Build curiosity and a thirst for learning.",
  },
  {
    icon: <FaGlobe size={30} className="mb-2 text-secondary" />,
    title: "Respect",
    description: "Value diversity and treat everyone kindly.",
  },
];

    return (
        <section
            className="container-fluid  p-5 w-80 bg-white"
            style={{ color: "var(--primary-color)" }}
        >
          <h1 className="text-center fw-bold mb-3">
    School Vision, Mission and Values
</h1>
<p className="text-center mb-5">
    Explore the guiding principles and goals that shape our students' learning, growth, and character development.
</p>


            {/* Vision & Mission */}
            <div className="row align-items-center mb-5">
                <div className="col-md-4 text-center mb-4 mb-md-0">
                    <div className="box p-4 rounded shadow-sm">
                        <h4 className="text-white py-2 rounded"
                            style={
                                {
                                    background: "var(--primary-color)"
                                }
                            }
                        >VISION</h4>
                        <ul className="text-start mt-3">
                            <li>Empowering Future Leaders</li>

                            <li>Learning Without Limits</li>

                            <li>Nurturing Global Citizens</li>

                            <li>Excellence in Education</li>

                            <li>Inspiring Lifelong Learning</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-4 text-center mb-4 mb-md-0">
                    <Image
                        src="/logo.png"
                        alt="business team"
                        width={200}
                        height={200}
                        className="rounded-circle shadow"
                    />
                </div>

                <div className="col-md-4 text-center mb-4 mb-md-0">
                    <div className="box p-4 rounded shadow-sm">
                        <h4 className="text-white  py-2 rounded"
                            style={
                                {
                                    background: "var(--primary-color)"
                                }
                            }
                        >MISSION</h4>
                        <ul className="text-start mt-3">
                            <li>Foster Creativity & Growth</li>

                            <li>Build Character Daily</li>

                            <li>Nurturing Global Citizens</li>

                            <li>Develop Skills Holistically</li>
                            <li>Engage Minds & Hearts</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <h3 className="text-center mb-4">Values</h3>
            <div className="row justify-content-center">
                {values.map((value, index) => (
                    <div
                        className="col-md-3 mb-4 d-flex justify-content-center"
                        key={index}
                    >
                        <div
                            className="d-flex flex-column align-items-center justify-content-center shadow p-4"
                            style={{
                                borderRadius: "50%",
                                color: "var(--primary-color)",
                                width: "250px",
                                height: "250px",
                                backgroundColor: "white",
                                textAlign: "center",
                            }}
                        >
                            {value.icon}
                            <h5 className="fw-bold mt-2">{value.title}</h5>
                            <p style={{ fontSize: "0.85rem" }}>{value.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
