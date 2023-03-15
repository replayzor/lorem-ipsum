export function Form({ handleSubmit, handleChange, count }) {
	return (
		<form className="lorem-form" onSubmit={handleSubmit}>
			<label htmlFor="amount">paragraphs:</label>
			<input
				onChange={handleChange}
				value={count}
				type="number"
				name="amount"
				id="amount"
				min="1"
				max="8"
				step="1"
			/>
			<button className="btn">generate</button>
		</form>
	);
}
