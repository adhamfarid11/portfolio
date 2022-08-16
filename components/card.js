import { Image } from "@chakra-ui/react";
import { useState } from "react";
import { tech_stacks_list } from "../data/tech_stack";

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
    return (
        <>
            <div className="card">
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
                    <Image
                        alt="alt-image"
                        src={props.image}
                        w="auto"
                        h="auto"
                        className="image"
                    />
                </div>
            </div>
        </>
    );
}

export default Card;
