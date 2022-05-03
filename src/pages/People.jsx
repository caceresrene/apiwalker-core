import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Home = () => {
	// sacar id
	const { id } = useParams();

	const [results, setResults] = useState({});
	const [image, setImage] = useState(null);

	useEffect(() => {
		const apiCall = async () => {
			try {
				const { data: mainResults } = await axios.get(
					`https://swapi.dev/api/people/${id}`
				);
				setImage(null);
				setResults(mainResults);
			} catch (error) {
				setImage(
					'https://as01.epimg.net/meristation/imagenes/2021/06/14/noticias/1623664330_153031_1623664379_noticia_normal.jpg'
				);
				setResults({});
			}
		};
		apiCall();
	}, []);

	return (
		<>
			<div>
				{results.name && <h1>{results.name}</h1>}
				{results.height && <p>Height: {results.height}</p>}
				{results.hair_color && <p>Hair color: {results.hair_color}</p>}
				{results.eye_color && <p>Eye color: {results.eye_color}</p>}
				{results.gender && <p>Gender: {results.gender}</p>}
				{image && <img src={image} alt='error' />}
			</div>
		</>
	);
};

export default Home;
