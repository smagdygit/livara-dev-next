/* eslint-disable */
import Review from '../../components/Review';
import { Divider, Image, Segment } from 'semantic-ui-react';
import Head from "next/head";
import Link from 'next/link';
import list from './list';


function App() {

	const newsHtml = list.map((item, index) => {
		return (
			<Link href={'./nyheter/' + item.link}>
				<Segment key={'news' + index} style={{ cursor: 'pointer' }}>
					<h3>
						{item.title}
					</h3>
					<p>
						{item.date}
					</p>
					<p>
						{item.description}
					</p>
				</Segment>
			</Link>
		)
	});


	return (
		<>
			<Head>
				<title>Nyheter</title>
			</Head>
			<center>
				<h2>
					Nyheter
				</h2>
				<Divider />
			</center>
			{newsHtml}
		</>
	);
}

export default App;
