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
					Tilläggstjänster
				</h2>
				<Divider />
				<br />
			</center>
			<div>
				<h3>Tilläggstjänster</h3>
				<p>Behöver du hjälp med något utöver din vanliga hemtjänst? 
					Inga bekymmer, vi hjälper dig. Här nedan listar vi <u>förslag</u> på extra tjänster du kan köpa hos oss på Livara, kostnaden är densamma som för din vanliga hemtjänst (214kr/h) med RUT-avdrag inkluderat! Priset är detsamma, oavsett utförande. 
				</p>
				<ul style={{fontSize: '1.3rem'}}>
					<li>Fönsterputs</li>
					<li>Städning</li>
					<li>Ledsagning</li>
					<li>Städning av vitvaror</li>
					<li>Hemtjänst - Extra hjälp i hemmet eller med ärenden utanför hemmet.</li>
				</ul>
				<br />
				<p>Behöver du en extratjänst utöver din vanliga hemtjänst? Vänligen hör av dig till oss så förklarar vi mer om tjänsterna och dess utföranden, samt om det finns möjlighet att planera in i dem i din redan existerande hemtjänst utan extra kostnader. Hörs snart!</p>


			</div>
			<div style={{height: 'auto'}} />
		</>
	);
}

export default App;