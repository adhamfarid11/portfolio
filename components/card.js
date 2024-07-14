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

function Card(props) {
    const variantsHover = {
        open: { y: 0 },
        closed: { y: 100 },
    };
    const [isHover, setIsHover] = useState(false);
    const [isHovered, setHovered] = useState(false);
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
                            <h2>{props.title}</h2>
                            <div className="position-wrapper">
                                <h3>
                                    {props.companyName +
                                        " (" +
                                        props.position +
                                        ")"}
                                </h3>
                                <h5>2022 - 2023</h5>
                            </div>
                            <p>{props.desc}</p>
                        </div>
                        <div className="tech-stack">
                            {handleTechStack(props.tech_stack)}
                        </div>
                    </div>
                    <div
                        className="image"
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <a
                            href={"//" + props.url_website}
                            className="web-content-image"
                        >
                            {/* <Image
                                alt="alt-image"
                                src={props.image[0]}
                                w="100%"
                                h="100%"
                            /> */}
                            <Image
                                alt="Adham Farid Logo"
                                width="100%"
                                height="100%"
                                src={myLogo}
                                objectFit="fit"
                            />
                        </a>

                        <a href={"//" + props.url_website}>
                            <div
                                className={`cover ${isHover ? "" : "covered"}`}
                            >
                                <p>Visit </p>
                                <p>{props.url_website}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Card;
