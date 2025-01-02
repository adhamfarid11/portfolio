import { motion } from "framer-motion";
import { Button, styled } from "@mui/material";

import { useWindowSize } from "../../../hooks/useWindowSize";

import DownloadIcon from "@mui/icons-material/Download";

export default function HomeAboutMe() {
    const { width } = useWindowSize();
    const isMobile = width < 768;

    function handleMotionValue() {
        if (isMobile) {
            return 20;
        }
        return 50;
    }
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delay: 0.5,
            },
        },
    };

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
                    A HARD-WORKER, A SELF-TAUGHT PERSON, AND A CRITICAL THINKER.
                    I LOVE TO SURF THE INTERNET AND EXPLORE NEW THINGS RELATED
                    TO BUSINESS AND COMPUTER.
                </p>
                <p className="upper">
                    I LIKE TO SURROUND MY SELF WITH LOTS OF CREATIVE MINDS, AND
                    PEOPLE WITH THE SAME INTEREST AS MINE. RECENTLY I TOOK AS
                    MANY PROJECTS AS I CAN, TO MAKE SURE I UNDERSTOOD THOSE
                    FIELD WELL.
                </p>
                <p className="lower">
                    My hobbies take up a good portion of my leisure time.
                    I&apos;m either watching sports, playing football, or
                    listening to delightful music.
                </p>
                <a
                    href="resume/Adham Muhammad Farid-resume.pdf"
                    download="Adham Muhammad Farid-resume"
                >
                    <ColorButton
                        variant="contained"
                        color="success"
                        endIcon={<DownloadIcon />}
                    >
                        Download Resume
                    </ColorButton>
                </a>
            </motion.div>
        </section>
    );
}
