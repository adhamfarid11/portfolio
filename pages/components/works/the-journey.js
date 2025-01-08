"use client";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function TheJourney() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch images from the Cloudinary API
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
                    {loading
                        ? [...Array(8)].map((_, index) => (
                              <Skeleton variant="rectangular" height={300} />
                          ))
                        : images.map((src, index) => (
                              <div className="masonry-item" key={index}>
                                  <img
                                      src={`${src}?q_auto,f_auto,w_500`} // Add Cloudinary transformations
                                      alt={`image-${index}`}
                                      loading="lazy"
                                      onError={(e) => {
                                          e.target.src = "/fallback-image.jpg"; // Fallback image
                                      }}
                                      style={{
                                          width: "100%",
                                          display: "block",
                                          borderRadius: "5px",
                                          boxShadow:
                                              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                                      }}
                                  />
                              </div>
                          ))}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    );
}
