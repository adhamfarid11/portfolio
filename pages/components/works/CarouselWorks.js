import ReactFullpage from "@fullpage/react-fullpage";
import { useEffect, useState } from "react";
import CustomSwiperSection from "./CustomSwiperSection";

export default function CarouselWorks(props) {
    console.log(props);
    // const anchors = ["lombacademy", "secondPage", "thirdPage"];
    const [arrayColor, setArrayColor] = useState([]);
    const [companyName, setCompanyName] = useState([]);
    const [companyName2, setCompanyName2] = useState([]);
    useEffect(() => {
        props?.datas?.map((item) => {
            setCompanyName((companyName) => [
                ...companyName,
                item.companyName.replace(" ", "-"),
            ]);
            setCompanyName2((companyName2) => [
                ...companyName2,
                item.companyName,
            ]);

            setArrayColor((arrayColor) => [...arrayColor, item.color]);
        });
    }, []);
    console.log(arrayColor);

    return (
        <ReactFullpage
            licenseKey="gplv3-license"
            anchors={companyName}
            navigation
            navigationTooltips={companyName2}
            navigat
            sectionsColor={arrayColor}
            onLeave={(origin, destination, direction) => {
                console.log("onLeave event", {
                    origin,
                    destination,
                    direction,
                });
            }}
            render={({ state, fullpageApi }) => {
                // console.log("render prop change", state, fullpageApi);
                return (
                    <>
                        {/* {console.log(props.datas.length)} */}
                        <div className="carousel">
                            <CustomSwiperSection
                                sectionType="light"
                                datas={props?.datas || []}
                            />
                            ;
                        </div>
                    </>
                );
            }}
        />
    );
}
