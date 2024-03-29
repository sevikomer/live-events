import React from "react";

export default function Informations(posts) {
    /*
    state = {
        informations: []
    };
    componentDidMount() {
        axios.get('http://localhost/live-events/wp-json/wp/v2/pages')
            .then(res => {
                const informations = res.data;
                this.setState({ informations });
            })
    };
    */
    console.log(posts);

    return (
        <>
            <h1 className='text-white bg-black text-6xl font-extrabold text-center pt-2'>INFORMATIONS</h1>
        </>
    )
}
