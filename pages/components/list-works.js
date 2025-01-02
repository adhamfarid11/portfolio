import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot, query } from "@firebase/firestore";
import Card from "../../components/card";

export default function ListWorksMain() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, "works");
        const q = query(collectionRef);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            fetchedData.sort((a, b) => {
                if (!a.year_end) return -1;
                if (!b.year_end) return 1;
                return b.year_end - a.year_end;
            });

            setDatas(fetchedData);
        });
        return unsubscribe;
    }, []);

    return (
        <div>
            {datas.map((data) => (
                <Card
                    key={data.id}
                    title={data.title}
                    companyName={data.companyName}
                    position={data.contractType}
                    desc={data.desc}
                    tech_stack={data.tech_stack}
                    url_website={data.url_website}
                    year_start={data.year_start}
                    year_end={data.year_end}
                />
            ))}
        </div>
    );
}
