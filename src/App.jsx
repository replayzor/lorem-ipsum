import { useState } from "react";
import { nanoid } from "nanoid";

import { Text } from "./components/Text";
import { Title } from "./components/Title";
import { Form } from "./components/Form";

import data from "./data";

function App() {
	const [count, setCount] = useState(1);
	const [text, setText] = useState([]);

	const handleChange = (e) => {
		setCount(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Extract the first count paragraphs from the data array
		const newText = data.slice(0, count);
		setText(newText);
	};

	return (
		<section className="section-center">
			<Title title="tired of boring lorem ipsum?" />
			<Form
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				count={count}
			/>
			<Text text={text} nanoid={nanoid} />
		</section>
	);
}

export default App;
