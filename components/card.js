import Image from "next/image";
import { Image as ImageChakra } from "@chakra-ui/react";
import { useState } from "react";
import { tech_stacks_list } from "../data/tech_stack";
import myLogo from "../public/Logo.svg";

import { motion } from "framer-motion";

function handleTechStack(dataTechStack) {
    return dataTechStack?.map((tech) =>
        tech_stacks_list?.map((data) => {
            if (tech.toString() === data.tech.toString()) {
                return (
                    <>
                        <ImageChakra
                            alt="alt-image"
                            src={data.link}
                            h="30px"
                            borderRadius="15%"
                            marginRight="10px"
                        />
                    </>
                );
            }
        })
    );
}

function handleYear(year_start, year_end) {
    if (!year_end) {
        year_end = "Present";
    }

    if (!year_start) {
        return <h5>{year_end}</h5>;
    }

    return (
        <h5>
            {year_start} - {year_end}
        </h5>
    );
}

function Card({
    title,
    companyName,
    position,
    desc,
    image_url,
    tech_stack,
    year_start,
    year_end,
}) {
    console.log(image_url);
    return (
        <>
            <motion.div
                className="card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                }}
            >
                <div className="line"></div>
                <div className="card-content">
                    <div className="description">
                        <div className="content">
                            <h2>{title}</h2>
                            <div className="position-wrapper">
                                <h3>{companyName + " (" + position + ")"}</h3>
                                {handleYear(year_start, year_end)}
                            </div>
                            <p>{desc}</p>
                        </div>
                        <div className="tech-stack">
                            {handleTechStack(tech_stack)}
                        </div>
                    </div>
                    <div className="image">
                        {image_url ? (
                            <Image
                                alt="Adham Farid Logo"
                                layout="fill"
                                src={image_url}
                                objectFit="fit"
                            />
                        ) : (
                            <a className="web-content-image">
                                <Image
                                    alt="Adham Farid Logo"
                                    width="100%"
                                    height="100%"
                                    src={myLogo}
                                    objectFit="fit"
                                />
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Card;
