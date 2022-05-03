import { useEffect, useState } from 'react';
import axios from 'axios';

const Apiwalker = () => {
	const [category, setCategory] = useState('people');
	const [id, setId] = useState('');
	const [clicked, setClicked] = useState(1);
	const [results, setResults] = useState({});
	const [homeworld, setHomeworld] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const apiCall = async () => {
		const { data: mainResults } = await axios.get(
			`https://swapi.dev/api/${category}/${id}`
		);
		const { data: homeWorldResults } = await axios.get(mainResults.homeworld);
		setHomeworld(homeWorldResults.name);
		setResults({
			name: mainResults.name,
			height: mainResults.height,
			hair_color: mainResults.hair_color,
			birth_year: mainResults.birth_year,
		});
	};

	useEffect(() => {
		apiCall();
	}, [clicked]);

	// useEffect(() => {
	// 	// apiCall();
	// 	axios.get(`https://swapi.dev/api/${category}/${id}`).then(({ data }) => {
	// 		setResults(data);
	// 	});
	// }, [clicked]);

	// useEffect(() => {
	// 	axios.get(results.homeworld).then(({ data }) => {
	// 		setHomeworld(data.name);
	// 	});
	// }, [clicked, results]);

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
				<input
					type='submit'
					value='Search'
					onClick={() => setClicked((prev) => (prev += 1))}
				/>
			</form>
			{/* {category}/{id} */}
			{homeworld}
			<div>
				{results.name && <h1>{results.name}</h1>}
				{results.height && <p>height {results.height}</p>}
				{results.hair_color && <p>hair color {results.hair_color}</p>}
				{results.birth_year && <p>birth year {results.birth_year}</p>}
				{homeworld && <p>homeworld {homeworld}</p>}
			</div>
		</>
	);
};

export default Apiwalker;
