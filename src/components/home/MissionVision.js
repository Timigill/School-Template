"use client";
import Image from "next/image";
import { FaUserTie, FaHandshake, FaHeart, FaLightbulb, FaBook, FaGlobe } from "react-icons/fa";

export default function VisionMissionValues() {
    const values = [
        {
            icon: <FaLightbulb size={30} className="mb-2" />,
            title: "Leadership",
            description: "Inspire students to lead with confidence.",
        },
        {
            icon: <FaUserTie size={30} className="mb-2" />,
            title: "Integrity",
            description: "Foster honesty and strong moral values.",
        },
        {
            icon: <FaHeart size={30} className="mb-2" />,
            title: "Passionate",
            description: "Encourage love for learning every day.",
        },
        {
            icon: <FaHandshake size={30} className="mb-2" />,
            title: "Collaboration",
            description: "Promote teamwork and community spirit.",
        },
        {
            icon: <FaBook size={30} className="mb-2" />,
            title: "Knowledge",
            description: "Build curiosity and a thirst for learning.",
        },
        {
            icon: <FaGlobe size={30} className="mb-2" />,
            title: "Respect",
            description: "Value diversity and treat everyone kindly.",
        },
    ];

    return (
        <section
            className="container-fluid p-5   w-80 bg-white"
            style={{ color: "var(--primary-color)" }}
        >
            <h1 className="text-center fw-bold px-5 mb-3 my-5">
                School Vision, Mission and Values
            </h1>
            <p className="text-center mb-5">
                Explore the guiding principles and  
                goals that shape our students' learning,
                 growth, and character development.
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
                        Empowering future leaders through excellence in education, 
                        we nurture global citizens who learn without limits. 
                        By inspiring lifelong learning, we create meaningful opportunities for every student to grow, 
                        explore, and reach their fullest potential.
                        </ul>
                    </div>
                </div>

                <div className="col-md-4 text-center mb-4 mb-md-0">
                    <Image
                        src="/logo1.png"
                        alt="business team"
                        width={200}
                        height={200}
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
                         Fostering creativity and growth while building character daily,
                          we nurture global citizens with holistic skills.
                           By engaging both minds and hearts,
                           we cultivate an environment where learners thrive, develop,
                          and pursue their highest aspirations.
                        </ul>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <h2 className="text-center fw-bold pt-5 my-4">Values</h2>
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
