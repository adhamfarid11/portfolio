import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";

export default function ListProject() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, "project");
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
                    // <
                    //     key={data.id}
                    //     id={data.id}
                    //     title={data.title}
                    //     detail={data.detail}
                    // />
                    <>
                        <h1>{data.title}</h1>
                        <h1>{data.detail}</h1>
                    </>
                ))}
            </div>
        </>
    );
}
