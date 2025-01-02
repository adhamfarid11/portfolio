import { motion } from "framer-motion";

export default function HomeHero() {
    return (
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
                            hidden: { opacity: 0, y: 30 },
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
                            hidden: { opacity: 0, y: 30 },
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
                            hidden: { opacity: 0, y: 30 },
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
                            hidden: { opacity: 0, y: 30 },
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
                        hidden: { opacity: 0, y: 30 },
                    }}
                >
                    <div className="nama-adham">
                        <h2>ADHAM</h2>
                        <h2>FARID</h2>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
