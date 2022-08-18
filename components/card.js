import { Image } from "@chakra-ui/react";
import { useState } from "react";
import { tech_stacks_list } from "../data/tech_stack";

import { motion } from "framer-motion";

function handleTechStack(dataTechStack) {
    return dataTechStack?.map((tech) =>
        tech_stacks_list?.map((data) => {
            if (tech.toString() === data.tech.toString()) {
                return (
                    <>
                        <Image
                            alt="alt-image"
                            src={data.link}
                            h="30px"
                            borderRadius="5px"
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
                            <h3>{props.position}</h3>
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
                        <Image
                            alt="alt-image"
                            src={props.image}
                            w="100%"
                            h="100%"
                        />

                        <div className={`cover ${isHover ? "hovered" : ""}`}>
                            Visit www.
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Card;
