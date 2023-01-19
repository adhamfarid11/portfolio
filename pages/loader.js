import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Loader() {
    const [count, setCount] = useState(50);
    const [loading, setLoading] = useState(false);
    var arrayCount = [20, 30, 60, 100];

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 8000);
    }, []);

    function svg() {
        return (
            <>
                {/* <defs>
                    <linearGradient id="first">
                        <stop
                            offset={asasfsf}
                            stop-color="black"
                        />
                        <stop offset={count + "%"} stop-color="white" />
                    </linearGradient>
                    <linearGradient id="second">
                        <stop offset={count + "%"} stop-color="black" />
                        <stop offset={count + "%"} stop-color="white" />
                    </linearGradient>
                </defs> */}
                <g fill="url(#first)" stroke="black" stroke-width={0.3}>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28.1148 65.0475H1.27588e-05L0.759686 62.7614H27.4004L14.0131 22.8783L21.6156 0L52.1187 92.6233H64.5492V94.9094H22.6854V92.6233H37.402L28.1148 65.0475Z"
                        // fill="#2E2E2E"
                    />
                </g>
                <g fill="url(#second)" stroke="black" stroke-width={0.3}>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M54.9951 49.2285H44.6479V46.9425H54.9951C57.0907 46.9425 58.7576 46.6567 59.9959 46.0852C61.2342 45.4184 62.1867 44.5135 62.8535 43.3705C63.6155 42.2274 64.187 40.8463 64.5681 39.2269C64.9491 37.6076 65.3301 35.7978 65.7111 33.7975C65.9968 32.464 66.3779 31.7972 66.8541 31.7972C67.4257 31.7972 67.7114 32.3687 67.7114 33.5118V62.5164C67.7114 63.7547 67.4257 64.3738 66.8541 64.3738C66.3779 64.3738 65.9968 63.707 65.7111 62.3735C65.3301 60.3732 64.9491 58.5634 64.5681 56.944C64.187 55.3247 63.6155 53.9436 62.8535 52.8005C62.1867 51.6575 61.2342 50.8002 59.9959 50.2287C58.7576 49.5619 57.0907 49.2285 54.9951 49.2285ZM65.4253 4.93577H44.6479V2.64969H81.4279C83.8092 2.64969 84.9999 3.79273 84.9999 6.07881V27.7966C84.9999 29.0348 84.6665 29.654 83.9997 29.654C83.2377 29.654 82.8567 28.9872 82.8567 27.6537C82.7614 25.5581 82.3804 23.2244 81.7136 20.6526C81.1421 17.9855 80.1896 15.5089 78.856 13.2228C77.5225 10.8415 75.7603 8.88878 73.5695 7.36473C71.3787 5.74542 68.6639 4.93577 65.4253 4.93577Z"
                        // fill="#2E2E2E"
                    />
                </g>
            </>
        );
    }
    return (
        <>
            <div className="loader">
                <Image
                    src="https://media.discordapp.net/attachments/1000437373240361102/1064911438361145415/Exclude-new.png"
                    className="top-layer"
                />
                <div className="bot-layer"></div>
                {/* <svg
                    width="85"
                    height="95"
                    viewBox="0 0 85 95"
                    // fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {svg()}
                </svg> */}
            </div>
        </>
    );
}
