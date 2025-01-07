"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function TheJourney() {
    const images = [
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        "https://images.unsplash.com/photo-1542300057-1705d0217213",
        "https://images.unsplash.com/photo-1494173853739-c21f58b16055",
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
        "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
        "https://images.unsplash.com/photo-1465146633011-14f8e85f06f2",
        "https://images.unsplash.com/photo-1527549993586-dff825b37782",
        "https://images.unsplash.com/photo-1550418290-a8d86ad674cd",
        "https://images.unsplash.com/photo-1564866657315-3934f1f10cfb",
        "https://images.unsplash.com/photo-1518081444512-371ec4a18765",
        "https://images.unsplash.com/photo-1534515722748-df22769c1eb3",
        "https://images.unsplash.com/photo-1558980664-10b26ac1ab2e",
        "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe",
        "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe",
        "https://images.unsplash.com/photo-1558981403-c5f9891b1e96",
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
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
