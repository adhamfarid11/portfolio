"use client";
import { Skeleton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// 🧩 1. Child component for a single image

function CloudinaryImage({ src, index }) {
    const [isInView, setIsInView] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const imageRef = useRef(null);

    const lowQualitySrc = `${src}?q_1,w_10,blur=200`;
    const fullQualitySrc = `${src}?q_auto,f_auto,w_500`;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className="masonry-item"
            ref={imageRef}
            style={{ position: "relative" }}
        >
            {/* Placeholder (blurred) */}
            <img
                src={lowQualitySrc}
                alt={`placeholder-${index}`}
                style={{
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: loaded ? 0 : 1,
                    transition: "opacity 0.3s ease",
                    filter: "blur(10px)",
                    borderRadius: "5px",
                }}
            />

            {/* Full image only loads if in view */}
            {isInView && (
                <img
                    src={fullQualitySrc}
                    alt={`image-${index}`}
                    onLoad={() => setLoaded(true)}
                    onError={(e) => {
                        e.currentTarget.src = "/logo.png";
                    }}
                    style={{
                        width: "100%",
                        opacity: loaded ? 1 : 0,
                        transition: "opacity 0.3s ease-in-out",
                        borderRadius: "5px",
                        boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                />
            )}
        </div>
    );
}


// 🧩 2. Main component
export default function TheJourney() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/the-journey");
                const data = await res.json();
                setImages(data);
            } catch (error) {
                console.error("Error fetching images:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    return (
        <section className="wrapper-the-journey">
            <div className="the-journey-title">
                <p>Every Step, a Story Worth Telling.</p>
                <h2>The Journey</h2>
            </div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    350: 1,
                    750: 2,
                    900: 3,
                    1200: 4,
                }}
            >
                <Masonry gutter="10px">
                    {loading
                        ? [...Array(8)].map((_, index) => (
                              <Skeleton
                                  variant="rectangular"
                                  height={300}
                                  key={index}
                              />
                          ))
                        : images.map((src, index) => (
                              <CloudinaryImage src={src} key={index} index={index} />
                          ))}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    );
}
