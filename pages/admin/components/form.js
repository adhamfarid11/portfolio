// firebase
import {
    addDoc,
    collection,
    serverTimestamp,
    updateDoc,
    doc,
} from "firebase/firestore";
import { db } from "../../../firebase";

import {
    Button,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import { Image } from "@chakra-ui/react";
import MuiToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";

import { tech_stacks_list } from "../../../data/tech_stack";

export default function Form(props) {
    const [data, setData] = useState({
        title: "",
        contractType: "",
        desc: "",
        image: "",
        tech_stack: [],
    });

    const handleFormat = (event, newFormats) => {
        setData({ ...data, tech_stack: newFormats });
    };

    const onSubmit = async () => {
        console.log(data);
        const collectionRef = collection(db, props.type);
        const docRef = await addDoc(collectionRef, {
            ...data,
        });
        setData({
            title: "",
            contractType: "",
            desc: "",
            image: "",
            tech_stack: [],
        });

        alert(
            `Data with id ${docRef.id} is added successfully to ${props.type}`
        );
    };

    const ToggleButton = styled(MuiToggleButton)({
        "&.Mui-selected, &.Mui-selected:hover": {
            color: "white",
            // backgroundColor: "#000000AA",
        },
    });

    return (
        <>
            {/* <pre>{data.tech_stack}</pre> */}
            <TextField
                fullWidth
                label="Title"
                className="text-field"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            <TextField
                fullWidth
                label="Contract Type"
                className="text-field"
                value={data.contractType}
                onChange={(e) =>
                    setData({ ...data, contractType: e.target.value })
                }
            />
            <TextField
                fullWidth
                label="Description"
                multiline
                maxRows={4}
                className="text-field"
                value={data.desc}
                onChange={(e) => setData({ ...data, desc: e.target.value })}
            />
            <TextField
                fullWidth
                label="Image Link"
                className="text-field"
                value={data.image}
                onChange={(e) => setData({ ...data, image: e.target.value })}
            />
            <div className="tech-stack">
                <ToggleButtonGroup
                    value={data.tech_stack}
                    onChange={handleFormat}
                >
                    {tech_stacks_list?.map((data) => (
                        <ToggleButton value={data.tech}>
                            <Image
                                src={data.link}
                                h="35px"
                                borderRadius="5px"
                            />
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
            <Button
                variant="contained"
                className="enter-btn"
                onClick={onSubmit}
            >
                Add a New {props.type}
            </Button>
        </>
    );
}

{
    /* <ToggleButton value="wordpress">
                        <Image
                            src="https://media.discordapp.net/attachments/1000437373240361102/1008634949013876868/logos_wordpress.png?width=410&height=94"
                            h="35px"
                        />
                    </ToggleButton>
                    <ToggleButton value="html">
                        <Image
                            src="https://media.discordapp.net/attachments/1000437373240361102/1008634369704996905/logos_html-5.png?width=205&height=289"
                            h="35px"
                        />
                    </ToggleButton>
                    <ToggleButton value="css">
                        <Image
                            src="https://media.discordapp.net/attachments/1000437373240361102/1008634368924852265/logos_css-3.png?width=205&height=289"
                            h="35px"
                        />
                    </ToggleButton>
                    <ToggleButton value="js">
                        <Image
                            src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
                            h="35px"
                        />
                    </ToggleButton>
                    <ToggleButton value="ts">
                        <Image
                            src="https://media.discordapp.net/attachments/1000437373240361102/1008910909965598761/typescript.png?width=410&height=410"
                            h="35px"
                        />
                    </ToggleButton>
                    <ToggleButton value="react">
                        <Image
                            src="https://media.discordapp.net/attachments/1000437373240361102/1008910909550374922/logo-react-icon.png?width=353&height=353"
                            h="35px"
                        />
                    </ToggleButton>
                    <ToggleButton value="next">
                        <Image
                            src="https://media.discordapp.net/attachments/1000437373240361102/1008634371089117214/logos_nextjs.png?width=410&height=247"
                            h="35px"
                        />
                    </ToggleButton>
                    <ToggleButton value="django">
                        <Image
                            src="https://media.discordapp.net/attachments/1000437373240361102/1009014769153491034/django_2.png?width=960&height=437"
                            h="35px"
                            borderRadius="5px"
                        />
                    </ToggleButton>
                    <ToggleButton value="sass">
                        <Image
                            src="https://media.discordapp.net/attachments/1000437373240361102/1008634948544122910/logos_sass.png?width=205&height=154"
                            h="35px"
                        />
                    </ToggleButton>
                    <ToggleButton value="tailwind">
                        <Image
                            src="https://media.discordapp.net/attachments/1000437373240361102/1009015315142807602/tailwind.png?width=180&height=180"
                            h="35px"
                        />
                    </ToggleButton>
                    <ToggleButton value="figma">
                        <Image
                            src="https://media.discordapp.net/attachments/1000437373240361102/1008634369289764885/logos_figma.png?width=205&height=307"
                            h="35px"
                        />
                    </ToggleButton>*/
}
