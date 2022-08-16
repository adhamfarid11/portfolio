import Router from "next/router";

import { useState, useEffect } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import { db } from "../../firebase";
import { collection, onSnapshot, query } from "@firebase/firestore";

import { doc, getDoc } from "firebase/firestore";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        setPassword(event.target.value);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //buat detect dari firebase

    const [passwordCode, setPasswordCode] = useState([]);
    useEffect(() => {
        const collectionRef = collection(db, "admin");
        const q = query(collectionRef);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setPasswordCode(querySnapshot.docs);
        });
        return unsubscribe;
    }, []);
    // console.log(passwordCode);
    const handleEnterAsAdmin = () => {
        // if (password == passwordCode) {
        //     console.log("mew");
        // }
        if (password == "meongmeong") {
            console.log("mew");
            Router.push("/admin");
        }
    };
    return (
        <>
            <section className="adminLogin">
                <pre>{password}</pre>
                <h1>Login as Admin</h1>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        Password
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        label="Password"
                        className="input-login"
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <VisibilityIcon />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button
                    variant="contained"
                    className="enter-btn"
                    onClick={handleEnterAsAdmin}
                >
                    Enter as Admin
                </Button>
            </section>
        </>
    );
}
