import { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    startAt,
} from "@firebase/firestore";
import Card from "../../components/card";
import SeeMore from "../../components/button/see-more";
import { motion } from "framer-motion";
import { width } from "@mui/system";
import Link from "next/link";

export default function ListWorksMain() {
    const [datas, setDatas] = useState([]);
    const [counter, setCounter] = useState(2);
    const [newButton, setNewButton] = useState(false);
    // var counter = 2;
    let newData = [];

    useEffect(() => {
        const collectionRef = collection(db, "works");
        const q = query(collectionRef);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setDatas(
                querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
            );
        });
        return unsubscribe;
    }, []);

    function seeMore() {
        setCounter(counter + 2);
        if (counter + 2 >= datas.length) {
            setNewButton(true);
        }
    }
    // datas.map((data) => {
    //     console.log(data.title);
    // });
    // console.log("test di home");

    return (
        <>
            <div>
                {datas.slice(0, counter).map((data) => (
                    <>
                        <Card
                            key={data.id}
                            title={data.title}
                            companyName={data.companyName}
                            position={data.contractType}
                            desc={data.desc}
                            image={data.image}
                            tech_stack={data.tech_stack}
                            url_website={data.url_website}
                        />
                    </>
                ))}
            </div>
            {newButton ? (
                <motion.div
                    className="see-more visit"
                    initial={{ width: 0 }}
                    animate={{ width: 150 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        damping: 6,
                        stiffness: 70,
                        restDelta: 0.1,
                    }}
                >
                    <Link href="/works">Visit Works</Link>
                </motion.div>
            ) : (
                <button className="see-more" onClick={() => seeMore()}>
                    <p>See</p>
                    <p>More</p>
                </button>
            )}
        </>
    );
}
