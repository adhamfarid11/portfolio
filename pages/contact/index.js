import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Index() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });
    const [cursorVariant, setCursorVariant] = useState("default");
    const [underlineStart, setUnderlineStart] = useState(false);
    const [underlineComplete, setUnderlineComplete] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUnderlineStart(true);
        }, 2200);
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "#faf9f6",
            mixBlendMode: "difference",
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "#faf9f6",
            mixBlendMode: "difference",
        },
    };

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    function handleDivVariants() {
        return {
            hidden: { opacity: 0, y: -70 },
            visible: { opacity: 1, y: 0 },
        };
    }

    return (
        <div className="cursor-custom">
            <div className="section-contact">
                <p>SEND ME A MESSAGE</p>
                <div
                    className="hover"
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                >
                    <div
                        className={`wrapper ${
                            underlineStart ? "underline" : ""
                        }`}
                    >
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">f</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">a</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">r</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.4,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">i</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">d</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.6,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">a</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.7,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">d</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.8,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">m</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.9,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">u</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 1,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">h</a>
                        </motion.div>
                    </div>
                    <div
                        className={`wrapper bawah ${
                            underlineStart ? "underline" : ""
                        }`}
                    >
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">@</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">g</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">m</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.4,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">a</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">i</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.6,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">l</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.7,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">.</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.8,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">c</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 0.9,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">o</a>
                        </motion.div>
                        <motion.div
                            className="wrapper-a"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: 1,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                            variants={handleDivVariants()}
                        >
                            <a href="mailto:faridadmuh@gmail.com">m</a>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div
                className="cursor"
                variants={variants}
                animate={cursorVariant}
            />
        </div>
    );
}

export default Index;
