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

export default function ListWorksMain() {
    const [datas, setDatas] = useState([]);
    const [counter, setCounter] = useState(2);
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
    }
    datas.map((data) => {
        console.log(data.title);
    });
    console.log("test di home");

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

            <button className="see-more" onClick={() => seeMore()}>
                <p>See</p>
                <p>More</p>
            </button>
        </>
    );
}
