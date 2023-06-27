import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDetails(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            <h1>Loading</h1>
            <div>
                {details.map((detail) => (
                    <div key={detail.id}>
                        <img src={detail.medium_cover_iamge} alt={detail.id} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Detail;
