import { Image } from "@chakra-ui/react";

function Card(props) {
    return (
        <>
            <div className="card">
                <div className="line"></div>
                <div className="card-content">
                    <div className="description">
                        <h2>{props.title}</h2>
                        <h3>{props.position}</h3>
                        <p>{props.desc}</p>
                    </div>
                    <Image
                        alt="alt-image"
                        src={props.image}
                        w="auto"
                        h="auto"
                        className="image"
                    />
                </div>
            </div>
        </>
    );
}

export default Card;
