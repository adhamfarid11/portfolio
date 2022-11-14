import "../styles/globals.css";
import "../styles/global/footer.scss";
import "../styles/global/form-container.scss";

import "../styles/card.css";
import "../styles/seeMore.css";
import "../styles/admin.scss";

import "../styles/hover-cursor.css";

import myLogo from "../public/Logo.svg";
import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { styled, TextField } from "@mui/material";

function MyApp({ Component, pageProps }) {
    const [navActive, setNavActive] = useState(false);
    const [navSticky, setNavSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY >= 80) {
            setNavSticky(true);
        } else {
            setNavSticky(false);
        }
    };

    const StyledTextField = styled(TextField)({
        "& label.Mui-focused": {
            color: "white",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "white",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "white",
            },
            "&:hover fieldset": {
                borderColor: "white",
            },
            "&.Mui-focused fieldset": {
                borderColor: "white",
            },
        },
        input: {
            color: "white",
        },
    });

    return (
        <Fragment>
            <nav
                className={`nav ${navSticky ? "sticky" : ""} ${
                    navActive ? "unset" : ""
                }`}
            >
                <div className="center">
                    <div className="left">
                        <div className="image-logo">
                            <Image
                                src={myLogo}
                                alt="Adham Farid Logo"
                                width="100%"
                                height="100%"
                                objectFit="fit"
                            />
                        </div>
                        <Link href="/">
                            <a className="text-logo">Adham Farid</a>
                        </Link>
                    </div>
                    <div
                        className="menu-bar"
                        onClick={() => setNavActive(!navActive)}
                    >
                        <div className={`${navActive ? "active" : ""}`}></div>
                        <div className={`${navActive ? "active" : ""}`}></div>
                    </div>
                    <div className={`menu-list ${navActive ? "active" : ""}`}>
                        <div className="menu-item">
                            <Link href="#">Home</Link>
                            <p className="desktop">,</p>
                        </div>

                        <div className="menu-item">
                            <Link href="#">Works</Link>
                            <p className="desktop">,</p>
                        </div>

                        <div className="menu-item">
                            <Link href="#">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Component {...pageProps} />

            <footer>
                <div className="footer-form-container">
                    <motion.div
                        className="left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -50 },
                        }}
                    >
                        <div className="upper">
                            <p>Got some</p>
                            <div className="words">
                                <span>difficult</span>
                                <span>impossible</span>
                                <span>undoable</span>
                                <span>unrealizable</span>
                                <span>syulit</span>
                                <span>difficult</span>
                            </div>
                        </div>
                        <p>ideas in your mind?</p>
                    </motion.div>
                    <motion.div
                        className="right"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 50 },
                        }}
                    >
                        <StyledTextField
                            fullWidth
                            input="white"
                            id="outlined-basic"
                            label="E-Mail"
                            variant="outlined"
                            InputLabelProps={{
                                style: { color: "#fff" },
                            }}
                        />
                        <StyledTextField
                            multiline
                            fullWidth
                            rows={3}
                            input="white"
                            id="outlined-basic"
                            label="Message"
                            variant="outlined"
                            inputProps={{ style: { color: "white" } }}
                            InputLabelProps={{
                                style: { color: "#fff" },
                            }}
                        />
                    </motion.div>
                </div>
                <div className="upper">
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.4,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                        }}
                    >
                        A
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.45,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                        }}
                    >
                        D
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                        }}
                    >
                        H
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.55,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                        }}
                    >
                        A
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.6,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                        }}
                    >
                        M
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.65,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                        }}
                    >
                        &nbsp;
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                        }}
                    >
                        F
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.75,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                        }}
                    >
                        A
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.8,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                        }}
                    >
                        R
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.85,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                        }}
                    >
                        I
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.9,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                        }}
                    >
                        D
                    </motion.span>
                </div>
                <div className="lower">
                    <div className="left">
                        <p>Not yet a Software Engineer</p>
                    </div>
                    <div className="mid">
                        <div className="menu-item">
                            <Link href="https://github.com/adhamfarid11">
                                GitHub
                            </Link>
                            <p>,</p>
                        </div>
                        <div className="menu-item">
                            <Link href="https://www.linkedin.com/in/adham-farid-072905191/">
                                LinkedIn
                            </Link>
                            <p>,</p>
                        </div>
                        <div className="menu-item">
                            <Link href="https://www.instagram.com/adhammfarid/">
                                Instagram
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                        <p>Developed by Adham Farid</p>
                        <p>Designed by Adham Farid</p>
                    </div>
                </div>
                <div className="desktop">
                    <div className="copyright">
                        <p className="desktop">
                            i kno i dont have any copyright on dis web but pls
                            dont copy my design :(
                        </p>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default MyApp;
