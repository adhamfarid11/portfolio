import { useState } from "react";
import { useRouter } from "next/router";

// mui material
import ToggleButton from "@mui/material/ToggleButton";
import MuiToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";

// mui icons
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";

// forms
import Form from "./components/form";
import ListProject from "./components/list-project";
import ListCommittee from "./components/list-committee";
import ListWorks from "./components/list-works";

export default function IndexAdmin() {
    const [alignment, setAlignment] = useState("works");
    const [selected, setSelected] = useState(false);

    const router = useRouter();

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleListToggle = () => {
        if (alignment == "works") {
            return <ListWorks />;
        } else if (alignment == "project") {
            return <ListProject />;
        } else {
            return <ListCommittee />;
        }
    };
    const handleFormToggle = () => {
        if (selected) {
            return <Form type={alignment} />;
        } else {
            return null;
        }
    };

    const ToggleButton = styled(MuiToggleButton)(({}) => ({
        "&.Mui-selected, &.Mui-selected:hover": {
            color: "white",
            backgroundColor: "black",
        },
    }));

    return (
        <>
            <section className="admin-index">
                <h1>Admin</h1>

                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="works">Works</ToggleButton>
                    <ToggleButton value="project">Project</ToggleButton>
                    <ToggleButton value="committee">Committee</ToggleButton>
                </ToggleButtonGroup>

                {handleListToggle()}

                <ToggleButton
                    value="check"
                    selected={selected}
                    onChange={() => {
                        setSelected(!selected);
                    }}
                    padding={0}
                >
                    {selected ? <CancelIcon /> : <AddCircleIcon />}
                </ToggleButton>

                {handleFormToggle()}
            </section>
        </>
    );
}
