import Head from "next/head";
import { Fragment } from "react";
import Card from "../components/card";
import SeeMore from "../components/button/see-more";
import { Image } from "@chakra-ui/react";

export default function Home() {
    const data = [
        {
            title: "Front-End Web Developer at MassCoco Indonesia",
            position: "CTO",
            description: "test",
            image: "https://cdn.discordapp.com/attachments/1000437373240361102/1000437465896714280/Screen_Shot_2022-07-23_at_23.18.24.png",
        },
        {
            title: "UI/UX Designer at Kaya Creative",
            position: "FREELANCE",
            description: "test",
            image: "https://cdn.discordapp.com/attachments/1000437373240361102/1000437465896714280/Screen_Shot_2022-07-23_at_23.18.24.png",
        },
    ];
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
                        <h2>HI, THERE!</h2>
                        <p>I&apos;m a student at Universitas Indonesia,</p>
                        <p>who is extremely determined to learn</p>
                        <div className="wrapper">
                            <p>new things related to</p>
                            <div className="words">
                                <span>Creative Dev.</span>
                                <span>Business.</span>
                                <span>Web Dev.</span>
                                <span>Design.</span>
                                <span>Creative Dev.</span>
                            </div>
                        </div>
                    </div>
                    <div className="mid"></div>
                    <div className="lower">
                        <div className="nama-adham">
                            <h2>ADHAM</h2>
                            <h2>FARID</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-me">
                <div className="wrapper">
                    <div className="wrapper-fixed">
                        <div className="fixed">
                            <p>About Me</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <p className="upper">
                        A HARD-WORKER, A SELF-TAUGHT PERSON, AND A CRITICAL
                        THINKER. I LOVE TO SURF THE INTERNET AND EXPLORE NEW
                        THINGS RELATED TO BUSINESS AND COMPUTER.
                    </p>
                    <p className="upper">
                        I LIKE TO SURROUND MY SELF WITH LOTS OF CREATIVE MINDS,
                        AND PEOPLE WITH THE SAME INTEREST AS MINE. RECENTLY I
                        TOOK AS MANY PROJECTS AS I CAN, TO MAKE SURE I
                        UNDERSTAND THOSE FIELD WELL.
                    </p>
                    <p className="lower">
                        My hobbies take up a good portion of my leisure time.
                        I&apos;m either watching sports, playing football, or
                        listening to delightful music.
                    </p>
                </div>
            </section>
            <section className="experience">
                <h2 className="h2-title">EXPERIENCE</h2>
                <div className="outer">
                    <div className="wrapper">
                        <div className="wrapper-fixed">
                            <div className="fixed">
                                <p className="desktop-only">Projects</p>
                                <Image
                                    src="https://cdn.discordapp.com/attachments/1000437373240361102/1000437465896714280/Screen_Shot_2022-07-23_at_23.18.24.png"
                                    alt="test"
                                    w="20px"
                                    h="50px"
                                    className="mobile-only"
                                    style={{ display: "none" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        {data?.map((item) => (
                            <Card
                                title={item.title}
                                position={item.position}
                                desc={item.description}
                                image={item.image}
                            />
                        ))}
                        {/* <Card image="https://cdn.discordapp.com/attachments/1000437373240361102/1000437465896714280/Screen_Shot_2022-07-23_at_23.18.24.png" /> */}
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
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pharetra ligula ligula, eu faucibus sapien suscipit
                    sed. Ut ut maximus risus, et ornare enim. Quisque interdum,
                    quam sit amet bibendum aliquam, leo tellus malesuada tortor,
                    in consectetur nunc est in nisl. Quisque accumsan porta sem
                    nec volutpat. Quisque dignissim cursus tempor. Pellentesque
                    in scelerisque tortor, eget posuere leo. Sed vel suscipit
                    quam. Phasellus ac maximus dui, quis pretium risus.
                    Suspendisse id hendrerit risus. Nunc dui justo, ultricies at
                    pellentesque in, scelerisque ac justo. Nunc varius, neque
                    imperdiet iaculis sagittis, sem ipsum volutpat velit, id
                    pretium augue nibh ac nibh.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pharetra ligula ligula, eu faucibus sapien suscipit
                    sed. Ut ut maximus risus, et ornare enim. Quisque interdum,
                    quam sit amet bibendum aliquam, leo tellus malesuada tortor,
                    in consectetur nunc est in nisl. Quisque accumsan porta sem
                    nec volutpat. Quisque dignissim cursus tempor. Pellentesque
                    in scelerisque tortor, eget posuere leo. Sed vel suscipit
                    quam. Phasellus ac maximus dui, quis pretium risus.
                    Suspendisse id hendrerit risus. Nunc dui justo, ultricies at
                    pellentesque in, scelerisque ac justo. Nunc varius, neque
                    imperdiet iaculis sagittis, sem ipsum volutpat velit, id
                    pretium augue nibh ac nibh.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pharetra ligula ligula, eu faucibus sapien suscipit
                    sed. Ut ut maximus risus, et ornare enim. Quisque interdum,
                    quam sit amet bibendum aliquam, leo tellus malesuada tortor,
                    in consectetur nunc est in nisl. Quisque accumsan porta sem
                    nec volutpat. Quisque dignissim cursus tempor. Pellentesque
                    in scelerisque tortor, eget posuere leo. Sed vel suscipit
                    quam. Phasellus ac maximus dui, quis pretium risus.
                    Suspendisse id hendrerit risus. Nunc dui justo, ultricies at
                    pellentesque in, scelerisque ac justo. Nunc varius, neque
                    imperdiet iaculis sagittis, sem ipsum volutpat velit, id
                    pretium augue nibh ac nibh.
                </p>
            </section>
        </Fragment>
    );
}
