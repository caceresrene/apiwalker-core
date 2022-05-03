import { useEffect, useState } from 'react';
import axios from 'axios';

const Apiwalker = () => {
	const [category, setCategory] = useState('people');
	const [id, setId] = useState('');
	const [clicked, setClicked] = useState(1);
	const [results, setResults] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const apiCall = async () => {
		const { data } = await axios.get(`https://swapi.dev/api/${category}/${id}`);
		setResults(data);
	};

	useEffect(() => {
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
				<input
					type='submit'
					value='Search'
					onClick={() => setClicked((prev) => (prev += 1))}
				/>
			</form>
			{/* {category}/{id} */}
			<div>
				<h1>{results.name}</h1>
				<p>height {results.height}</p>
				<p>hair color {results.hair_color}</p>
				<p>birth year {results.birth_year}</p>
				<p>homeworld {results.homeworld}</p>
			</div>
		</>
	);
};

export default Apiwalker;
