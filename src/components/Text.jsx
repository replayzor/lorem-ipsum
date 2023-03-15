export function Text({ text, nanoid }) {
	return (
		<article className="lorem-text">
			{text.map((paragraph) => {
				return <p key={nanoid()}>{paragraph}</p>;
			})}
		</article>
	);
}
