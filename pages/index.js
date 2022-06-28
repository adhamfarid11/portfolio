import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
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
