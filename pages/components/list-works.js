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
    var counter = 2;
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
        newData = datas.slice(0, counter);
        console.log(newData);
        counter += 2;
        console.log("masuk");
        return () => {
            newData;
        };
    }

    return (
        <>
            <div>
                {console.log("baru" + counter)}
                {datas.map((data) => (
                    <>
                        <Card
                            key={data.id}
                            title={data.title}
                            position={data.contractType}
                            desc={data.desc}
                            image={data.image}
                            tech_stack={data.tech_stack}
                        />
                    </>
                ))}
            </div>
            {/* <button onClick={() => seeMore()}>See more</button> */}
            <SeeMore onClick={() => seeMore()} />
        </>
    );
}
