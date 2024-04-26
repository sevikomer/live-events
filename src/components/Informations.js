import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../style.css";

const Informations = () => {

    const [infos, setInfos] = useState({})

    useEffect(() => {
        axios
            .get("http://localhost/live-events/wp-json/wp/v2/pages/35")
            .then((res) => {
                const data = res.data
                setInfos(data);
            });
    }, [])

    return (
        <>

            <div className='text-white bg-black p-8'>
                <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2'>INFORMATIONS</h1>
            </div>
            <div className='bg-black text-white'>
                {
                    infos.content && (
                        <div dangerouslySetInnerHTML={{ __html: infos.content.rendered }} />)
                }
            </div>
        </>
    )
}

export default Informations