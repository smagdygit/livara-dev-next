/* eslint-disable */
import Link from 'next/link';
import { Divider } from 'semantic-ui-react';
import Head from "next/head";


function App() {

	return (
		<>
			<Head>
				<title>Tilläggstjänster</title>
			</Head>
			<center>
				<h2>
					<b>Tilläggstjänster</b>
				</h2>
				<Divider />
				<br />
			</center>
			<div>
				<h3>Tilläggstjänster</h3>
				<p>Behöver du hjälp med något utöver din vanliga hemtjänst? Inga bekymmer, vi hjälper dig. Här nedan listar vi <u>förslag</u> på extra tjänster du kan köpa hos oss på Livara, timkostnaden är densamma som för din vanliga hemtjänst inklusive RUT-avdrag. Timpriset är fast, oavsett utförande. Varför krångla till det i onödan. 
				</p>
				<ul style={{fontSize: '1.3rem'}}>
					<li>Fönsterputs</li>
					<li>Städning</li>
					<li>Ledsagning</li>
					<li>Städning av vitvaror eller andra ovanliga städytor</li>
					<li>Hemtjänst - Extra hjälp i hemmet eller med ärenden utanför hemmet</li>
				</ul>
				<br />
				<p>Behöver du en extratjänst utöver din vanliga hemtjänst? Vänligen hör av dig till oss så förklarar vi mer om tjänsterna och dess utföranden, samt om det finns möjlighet att planera in i dem i din redan existerande hemtjänst utan extra kostnader. Hörs snart!</p>
				<p>Kontaktuppgifter hittar du under avsnittet ”kontakta oss” </p>

			</div>
			<div style={{height: 'auto'}} />
		</>
	);
}

export default App;