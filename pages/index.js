import Head from "next/head";
import { Fragment } from "react";
import Card from "../components/card";
import SeeMore from "../components/button/see-more";
import { Image } from "@chakra-ui/react";
import ListProjectMain from "./components/list-project";
import ListWorksMain from "./components/list-works";
import ListCommitteeMain from "./components/list-committee";

import { motion } from "framer-motion";

import { useWindowSize } from "../hooks/useWindowSize";
import Loader from "./components/loader";

import DownloadIcon from "@mui/icons-material/Download";
import { Button, styled, TextField } from "@mui/material";

export default function Home() {
    const { width } = useWindowSize();
    const isMobile = width < 768;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delay: 0.5,
            },
        },
    };

    function handleMotionValue() {
        if (isMobile) {
            return 20;
        }
        return 50;
    }

    const ColorButton = styled(Button)(({}) => ({
        color: "white",
        backgroundColor: "black",
        boxShadow: "none",
        "&:hover": {
            backgroundColor: "rgb(60, 60, 60)",
            boxShadow: "none",
        },
    }));

    return (
        <Fragment>
            <Head>
                <title>Adham Farid | Portfolio</title>
                <meta
                    name="description"
                    content="Hi There! I'm Adham Farid and I'm a student majoring Information System at Universitas Indonesia who is extremely determined to learn new things related to business and computer. "
                />
            </Head>
            <section className="hero-wrapper">
                <div className="hero">
                    <div className="upper">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 50 },
                            }}
                        >
                            HI, THERE!
                        </motion.h2>
                        <motion.p
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
                            I&apos;m a student at Universitas Indonesia,
                        </motion.p>
                        <motion.p
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
                            who is extremely determined to learn
                        </motion.p>
                        <motion.div
                            className="wrapper"
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
                            <p>new things related to</p>
                            <div className="words">
                                <span>Creative Dev.</span>
                                <span>Business.</span>
                                <span>Web Dev.</span>
                                <span>Design.</span>
                                <span>Creative Dev.</span>
                            </div>
                        </motion.div>
                    </div>
                    <div className="mid"></div>
                    <motion.div
                        className="lower"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 50 },
                        }}
                    >
                        <div className="nama-adham">
                            <h2>ADHAM</h2>
                            <h2>FARID</h2>
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="about-me">
                <motion.div
                    className="wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.7,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: handleMotionValue() },
                    }}
                >
                    <div className="wrapper-fixed">
                        <div className="fixed">
                            <p>ABOUT ME</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.7,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: handleMotionValue() },
                    }}
                >
                    <p className="upper">
                        A HARD-WORKER, A SELF-TAUGHT PERSON, AND A CRITICAL
                        THINKER. I LOVE TO SURF THE INTERNET AND EXPLORE NEW
                        THINGS RELATED TO BUSINESS AND COMPUTER.
                    </p>
                    <p className="upper">
                        I LIKE TO SURROUND MY SELF WITH LOTS OF CREATIVE MINDS,
                        AND PEOPLE WITH THE SAME INTEREST AS MINE. RECENTLY I
                        TOOK AS MANY PROJECTS AS I CAN, TO MAKE SURE I
                        UNDERSTOOD THOSE FIELD WELL.
                    </p>
                    <p className="lower">
                        My hobbies take up a good portion of my leisure time.
                        I&apos;m either watching sports, playing football, or
                        listening to delightful music.
                    </p>
                    <ColorButton
                        variant="contained"
                        color="success"
                        endIcon={<DownloadIcon />}
                    >
                        Download Resume
                    </ColorButton>
                </motion.div>
            </section>
            <section className="experience">
                <h2 className="h2-title">EXPERIENCE</h2>
                <div className="outer">
                    <div className="wrapper">
                        <div className="wrapper-fixed">
                            <div className="fixed">
                                <p className="desktop-only">WORKS</p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <ListWorksMain />
                    </div>
                </div>
                <div className="outer">
                    <div className="wrapper">
                        <div className="wrapper-fixed">
                            <div className="fixed">
                                <p className="desktop-only">PROJECTS</p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <ListProjectMain />

                        <SeeMore />
                    </div>
                </div>
                <div className="outer">
                    <div className="wrapper">
                        <div className="wrapper-fixed">
                            <div className="fixed">
                                <p className="desktop-only">COMMITTTE</p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <ListCommitteeMain />
                        <SeeMore />
                    </div>
                </div>
            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <section className="dummy">
                <strong>THIS WEBSITE IS CURRENTLY UNDER-DEVELOPMENT.</strong>
            </section>
        </Fragment>
    );
}
