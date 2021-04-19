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
					type: 'image',
					data: 'https://i.imgur.com/zQCBmAx.png'
				},
				{
					type: 'title',
					data: 'Byggd i React & Next med ett fokus på användarvänlighet'
				},
				{
					type: 'text',
					data: 'Det har länge varit dags för ett nytt kapitel i Livaras online-befintlighet, och vi har under dem senaste månaderna jobbat hårt med att bygga upp en ny hemsida från grunden. Stort fokus har lagts på användarvänlighet och modern design, som vi har kombinerat för att ge den bästa hemsideupplevelsen vi kan. Vi kommer fortsätta att jobba med hemsidan framöver för att integrera ännu mer tekniker som kan hjälpa användaren att hitta den information den söker.'
				},
				{
					type: 'title',
					data: 'Framtida uppdateringar'
				},
				{
					type: 'text',
					data: 'Nu när vi har fått färdigt själva hemsidan fokuserar vi på att göra den ännu mer användarvänlig. Specifikt har vi kollat på textuppläsare för den som har svårare att läsa mindre texter, och även globala översättningar för dem som vill läsa informationen på ett språk annat än svenska.'
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
					<>
					<br />
					<h2 key={subIndex}>{subItem.data}</h2>
					</>
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
