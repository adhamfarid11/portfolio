"use client";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function TheJourney() {
    const [images, setImages] = useState([]);

    // Fetch images from the Cloudinary API
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch("/api/the-journey");
                const data = await res.json();
                setImages(data);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []);

    return (
        <section className="wrapper-the-journey">
            <div className="the-journey-title">
                <h2>The Journey</h2>
            </div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    350: 1, // 1 column for very small screens
                    750: 2, // 2 columns for small screens
                    900: 3, // 3 columns for medium screens
                    1200: 4, // 4 columns for larger screens
                }}
            >
                <Masonry gutter="10px">
                    {images.map((src, index) => (
                        <div className="masonry-item" key={index}>
                            <img
                                src={src}
                                alt={`image-${index}`}
                                style={{
                                    width: "100%", // Makes the image fill the column
                                    display: "block", // Removes inline gaps
                                    borderRadius: "5px", // Optional: Add some styling
                                }}
                            />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    );
}
