import { Image } from "@chakra-ui/react";

function Card(props) {
    return (
        <>
            <div className="card">
                <div className="description">
                    <h2>UI/UX Designer</h2>
                    <h3>FREELANCE</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi tincidunt lacus sed libero viverra, eget dignissim
                        odio vulputate. Fusce placerat viverra hendrerit. Aenean
                        ac tempor velit.
                    </p>
                </div>
                <div className="image">
                    <Image
                        alt="alt-image"
                        src={props.image}
                        w="100%"
                        h="auto"
                    />
                </div>
            </div>
        </>
    );
}

export default Card;
