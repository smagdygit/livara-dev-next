/* eslint-disable */
import Review from '../../components/Review';
import { Divider, Image } from 'semantic-ui-react';
import Head from "next/head";
import Link from 'next/link';


function App() {

	const reviews = [
		{
			title: 'Ny Hemsida',
			date: '2021-05-05',
			content: [
				{
					type: 'title',
					data: 'Vi har skaffat en ny hemsida haha!'
				},
				{
					type: 'image',
					data: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
				},
				{
					type: 'title',
					data: 'Brödtext'
				},
				{
					type: 'text',
					data: 'Ja men, typ, aa, ja. JA!'
				},
				{
					type: 'text',
					data: '...o lite till, i en ny paragraph!'
				},
				{
					type: 'link',
					data: '/',
					text: 'Klicka här för att komma till vår nya startsida!'
				},
				
			]
		},
	]

	const reviewsHtml = reviews.map((item, index) => {
		const content = item.content.map((subItem, subIndex) => {
			if (subItem.type === 'title') {
				return(
					<h2 key={subIndex}>{subItem.data}</h2>
				)
			}
			if (subItem.type === 'image') {
				return(
					<Image key={subIndex} src={subItem.data} className="mt-4 mb-4"></Image>
				)
			}
			if (subItem.type === 'text') {
				return(
					<p key={subIndex}>{subItem.data}</p>
				)
			}
			if (subItem.type === 'link') {
				return(
					<Link key={subIndex} href={subItem.data}>{subItem.text}</Link>
				)
			}
		})

		return (
			<>
				<h1 key={index}>{item.title}</h1>
				<h4 style={{color: 'gray'}}>{item.date}</h4>
				<br />
				{content}
				<br />
			</>
		);
	})

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
			{reviewsHtml}
		</>
	);
}

export default App;
