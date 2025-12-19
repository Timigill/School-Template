"use client";
import { useEffect, useRef, useState } from "react";
import { LuUserCheck, LuUsers, LuHeart, LuLightbulb, LuBookOpen, LuGlobe } from "react-icons/lu";

function AnimatedSection({ children, delay = 0 }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`fade-section ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export default function CoreValues() {
    const values = [
        {
            icon: <LuLightbulb size={28} />,
            title: "Leadership",
            description: "Inspiring students to lead with confidence.",
        },
        {
            icon: <LuUserCheck size={28} />,
            title: "Integrity",
            description: "Fostering honesty, ethics, and strong morals.",
        },
        {
            icon: <LuHeart size={28} />,
            title: "Passionate",
            description: "Encouraging a deep love for learning.",
        },
        {
            icon: <LuUsers size={28} />,
            title: "Collaboration",
            description: "Promoting teamwork and community spirit.",
        },
        {
            icon: <LuBookOpen size={28} />,
            title: "Knowledge",
            description: "Building curiosity and a thirst for wisdom.",
        },
        {
            icon: <LuGlobe size={28} />,
            title: "Respect",
            description: "Valuing diversity and treating everyone kindly.",
        },
    ];

    return (
        <section
            className="container-fluid py-5 bg-light position-relative"
            style={{ color: "#01311f" }}
        >
            <AnimatedSection>
                <div className="text-center mb-5">
                    <h2 className="fw-bold  mb-1">Our Core Values</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: '400px' }}>
                        The pillars that define our culture and guide our students towards success.
                    </p>
                    <div className="mx-auto mt-1" style={{ width: '80px', height: '4px', background: '#ffc107', borderRadius: '2px' }}></div>
                </div>

                <div className="container-fluid">
                    <div className="row g-4 justify-content-center">
                        {values.map((value, index) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2 d-flex justify-content-center" key={index}>
                                <div className="value-card position-relative bg-white shadow-sm d-flex flex-column align-items-center justify-content-center text-center p-3"
                                    style={{
                                        width: '210px',
                                        height: '210px',
                                        borderRadius: '50%',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid rgba(0,0,0,0.05)'
                                    }}>

                                    <div className="icon-wrapper mb-2 d-flex align-items-center justify-content-center rounded-circle"
                                        style={{ width: '50px', height: '50px', background: 'rgba(1, 49, 31, 0.05)', color: '#01311f', transition: 'all 0.3s ease' }}>
                                        {value.icon}
                                    </div>

                                    <h5 className="fw-bold mb-2" style={{ color: '#01311f', fontSize: '1.1rem' }}>{value.title}</h5>
                                    <p className="text-muted mb-0 px-1" style={{ fontSize: '0.75rem', lineHeight: '1.3' }}>
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <style jsx>{`
                .fade-section {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }
                .is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .value-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
                    background: #fff;
                    border: 2px solid #01311f !important;
                }
                .value-card:hover .icon-wrapper {
                    background: #01311f !important;
                    color: #ffc107 !important;
                    transform: scale(1.1);
                }
            `}</style>
        </section>
    );
}
