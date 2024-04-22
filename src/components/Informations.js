import React from 'react';
import axios from "axios";
import "../style.css";

class Informations extends React.Component {
    state = {
        infos: []
    }
    componentDidMount() {
        axios
            .get("http://localhost/live-events/wp-json/wp/v2/pages/35")
            .then((res) => {
                const infos = res.data
                this.setState({ infos });
                console.log(infos)

            });
    };

    render() {
        return (
            <>

                <div className='text-white bg-black p-8'>
                    <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2'>INFORMATIONS</h1>
                </div>
                <div className='bg-black text-white'>
                    {
                        this.state.infos.content && (
                            <div dangerouslySetInnerHTML={{ __html: this.state.infos.content.rendered }} />)
                    }
                </div>
            </>
        )
    }
}

export default Informations