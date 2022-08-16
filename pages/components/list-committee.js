import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import Card from "../../components/card";

export default function ListCommitteeMain() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, "committee");
        const q = query(collectionRef);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setDatas(
                querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
            );
        });
        console.log(datas);
        return unsubscribe;
    }, []);

    return (
        <>
            <div>
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
        </>
    );
}
