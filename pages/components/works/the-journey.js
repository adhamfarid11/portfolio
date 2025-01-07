"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function TheJourney() {
    const images = [
        "https://via.placeholder.com/300x300",
        "https://via.placeholder.com/400x250",
        "https://via.placeholder.com/350x400",
        "https://via.placeholder.com/300x500",
        "https://via.placeholder.com/450x300",
        "https://plus.unsplash.com/premium_photo-1664303218668-03fa4e612038?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

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
