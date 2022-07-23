import { Image } from "@chakra-ui/react";

function Card(props) {
    return (
        <>
            <div className="card">
                <div className="line"></div>
                <div className="card-content">
                    <div className="description">
                        <h2>UI/UX Designer</h2>
                        <h3>FREELANCE</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi tincidunt lacus sed libero viverra, eget
                            dignissim odio vulputate. Fusce placerat viverra
                            hendrerit. Aenean ac tempor velit.
                        </p>
                    </div>
                    <Image
                        alt="alt-image"
                        src={props.image}
                        w="auto"
                        h="100%"
                        className="image"
                    />
                </div>
            </div>
        </>
    );
}

export default Card;
