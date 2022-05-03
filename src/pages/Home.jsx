import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
	const [category, setCategory] = useState('people');
	const [id, setId] = useState('');
	const [clicked, setClicked] = useState(1);
	const [results, setResults] = useState({});
	const [image, setImage] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setClicked((prev) => (prev += 1));
	};

	useEffect(() => {
		const apiCall = async () => {
			try {
				const { data: mainResults } = await axios.get(
					`https://swapi.dev/api/${category}/${id}`
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
	}, [clicked]);

	return (
		<>
			<form action='' onSubmit={handleSubmit}>
				<label htmlFor='category'>Search for:</label>
				<select
					name='category'
					id='caterogy'
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					<option value='people'>People</option>
					<option value='films'>Films</option>
					<option value='starships'>Starships</option>
					<option value='vehicles'>Vehicles</option>
					<option value='species'>Species</option>
					<option value='planets'>Planets</option>
				</select>
				<label htmlFor='id'>Id:</label>
				<input
					type='text'
					name='id'
					id='id'
					value={id}
					onChange={(e) => setId(e.target.value)}
				/>
				<input type='submit' value='Search' />
			</form>
			<div>
				{results.name && <h1>{results.name}</h1>}
				{results.height && <p>Height: {results.height}</p>}
				{results.hair_color && <p>Hair color: {results.hair_color}</p>}
				{results.eye_color && <p>Eye color: {results.eye_color}</p>}
				{results.gender && <p>Gender: {results.gender}</p>}

				{results.title && <h1>{results.title}</h1>}
				{results.director && <p>Director: {results.director}</p>}
				{results.producer && <p>Producer: {results.producer}</p>}
				{results.release_date && <p>Release date: {results.release_date}</p>}
				{results.opening_crawl && <p>Opening: {results.opening_crawl}</p>}

				{results.manufacturer && <p>Manufacturer: {results.manufacturer}</p>}
				{results.passengers && <p>Passengers: {results.passengers}</p>}
				{results.cargo_capacity && <p>Cargo capacity: {results.cargo_capacity}</p>}
				{results.consumables && <p>Consumables: {results.consumables}</p>}

				{results.classification && <p>Classification: {results.classification}</p>}
				{results.designation && <p>Designation: {results.designation}</p>}
				{results.average_height && <p>Average height: {results.average_height}</p>}
				{results.average_lifespan && (
					<p>Average lifespan: {results.average_lifespan}</p>
				)}

				{results.rotation_period && (
					<p>Rotation period: {results.rotation_period}</p>
				)}
				{results.terrain && <p>Terrain: {results.terrain}</p>}
				{results.climate && <p>Climate: {results.climate}</p>}
				{results.population && <p>Population: {results.population}</p>}

				{image && <img src={image} alt='error' />}
			</div>
		</>
	);
};

export default Home;
