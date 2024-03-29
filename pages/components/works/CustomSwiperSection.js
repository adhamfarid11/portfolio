import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";
import { tech_stacks_list } from "../../../data/tech_stack";
import { Image } from "@chakra-ui/react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CustomSwiperSection(props) {
    const { width } = useWindowSize();
    const isMobile = width < 768;

    const [colorChange, setColorChange] = useState("#000000");

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
                                borderRadius="15%"
                                marginRight="10px"
                            />
                        </>
                    );
                }
            })
        );
    }

    return (
        <>
            {props?.datas?.length ? (
                props?.datas?.map((data) => (
                    <>
                        <div className={`section`} key={data.id}>
                            <div className="overlay-bg"></div>
                            <div
                                className="background-color"
                                style={{ backgroundColor: `${data.color}` }}
                            ></div>
                            <div className="desc-content">
                                <div className="content">
                                    <h2>{data.title}</h2>
                                    <div className="position-wrapper">
                                        <h3>
                                            {data.companyName +
                                                " (" +
                                                data.contractType +
                                                ")"}
                                        </h3>
                                        <h5>2022 - 2023</h5>
                                    </div>
                                    <p>
                                        <p>{data.desc}</p>
                                    </p>
                                </div>
                                <div className="tech-stack">
                                    {handleTechStack(data.tech_stack)}
                                </div>
                            </div>
                            <Swiper
                                key={data.id}
                                slidesPerView={"auto"}
                                centeredSlides={true}
                                spaceBetween={isMobile ? 0 : 15}
                                grabCursor={true}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                className="mySwiper"
                                navigation={isMobile ? true : false}
                                modules={
                                    isMobile
                                        ? [Navigation, Pagination]
                                        : [Pagination]
                                }
                            >
                                <SwiperSlide>
                                    <Image
                                        src="https://cdn.discordapp.com/attachments/1000437373240361102/1065896542218764318/image.png"
                                        alt="image website preview"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        src="https://cdn.discordapp.com/attachments/1000437373240361102/1065896542218764318/image.png"
                                        alt="image website preview"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        src="https://cdn.discordapp.com/attachments/1000437373240361102/1065896542218764318/image.png"
                                        alt="image website preview"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        src="https://cdn.discordapp.com/attachments/1000437373240361102/1065896542218764318/image.png"
                                        alt="image website preview"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        src="https://cdn.discordapp.com/attachments/1000437373240361102/1065896542218764318/image.png"
                                        alt="image website preview"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </>
                ))
            ) : (
                <></>
            )}
        </>
    );
}
