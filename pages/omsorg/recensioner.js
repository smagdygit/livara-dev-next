/* eslint-disable */
import Review from '../../components/Review';
import { Divider } from 'semantic-ui-react';



function App() {

	const reviews = [
		{
			name: 'Gun Britt',
			stars: '⭐⭐⭐⭐',
			text: '"Redigt bra service och dom kommer alltid i tid, en gång fick jag även en chokladkaka!"',
		},
		{
			name: 'Jonas Sjöstedt',
			stars: '⭐⭐⭐⭐⭐',
			text: '"Mycket bra omtanke! Kommunism för alla! Viva la revolution!"',
		},
		{
			name: 'Dua',
			stars: '⭐⭐⭐⭐',
			text: '"Bästa jobbet på planeten! Och den där IT-Snubben är ju fantastisk på allt han gör, helt gudomligt!"',
		},
	]

	const reviewsHtml = reviews.map((item, index) => {
		return (
			<>
				<Review key={index} name={item.name} stars={item.stars} text={item.text} className="p-5" />
				<br />
			</>
		);
	})

	return (
		<>
			<center>
				<h2>
					Recensioner
				</h2>
				<Divider />
			</center>
			{reviewsHtml}
		</>
	);
}

export default App;
