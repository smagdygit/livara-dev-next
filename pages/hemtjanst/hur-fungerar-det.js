/* eslint-disable */
import Link from 'next/link';
import { Divider, Image, Button, Icon } from 'semantic-ui-react';
import Head from "next/head";


function App() {

	return (
		<>
			<Head>
				<title>Hur Fungerar Det?</title>
			</Head>
			<center>
				<h2>
					<b>Hur fungerar hemtjänst?</b>
				</h2>
				<Divider />
				<br />
			</center>
			<div>
				<h3>Hemtjänst</h3>
				<div className="d-flex">
					<div className="">
						<p>Hemtjänst är en samhällsfunktion som finns till för att stötta människor i sina hem för att slippa flytta hemifrån på grund av sina behov. Hemtjänsten skall fungera som en växtpinne i en blomstrande kruka, erbjuda stabilitet och främja växande! Men all hemtjänst är inte alltid vad det bör vara. Nu finns därför fler utförare av hemtjänst i samhället, efter att den så kallade Lagen om valfrihet vunnit laga kraft i Göteborg, behöver medborgarna inte längre stå ut med den kommunala hemtjänsten utan kan fritt välja bland oss privata aktörer. Detta anser vi på Livara omsorg vara en fundamental rättighet för medborgarna, för att på egen hand kunna påverka sin egen omsorg i hemmet, vilket vi på Livara möjliggör för våra kunder.</p>
						<p>Med hemtjänst kan du få hjälp med allt i hemmet, och de sysslor du kan tänkas behöva hjälp med utanför hemmet också. Exempel på hemtjänst är bland annat städ, tvätt, matlagning/matberedning, inhandling, hjälp med dusch och annan hygienomsorg, promenader. Vi stöttar dig i allt du kan tänkas behöva helt enkelt.</p>
					</div>
					{/*<div style={{ width: '300%', float: 'right', marginLeft: '2%', marginBottom: '2%' }}>
						<Image src="/hemtjanst.png" alt="Livara Logga" className="m-0" />
					</div>*/}
				</div>
				<br />
				<h3>Ledsagning?</h3>
				<p>Behöver du hjälp och sällskap att ta dig till sjukvård eller fritidsaktiviteten? Då finns en avgiftsfri tjänst som kallas ledsagning, där en ledsagare från Livara omsorg följer med dig och uträttar dina behov. Ansökan om ledsagning görs också hos din biståndsbedömare.</p>
				<br />
				<h3>Avlösning?</h3>
				<p>Den tredje tjänsten inom hemtjänst-kategorin kallas avlösning och är också avgiftsfri.
				Avlösning är när du som kund behöver hjälp med avlösning av en annan person i ditt hushåll medan du gör andra ärenden eller vilar upp dig på annat håll. Avlösningen möjliggör egen tid för dig som vanligtvis sköter om en annan person i hemmet.
				</p>
				<p>Vill du söka hemtjänst, ledsagning eller avlösning gör du detta hos din biståndsbedömare på ditt lokala socialtjänstkontor, skriftligt eller över telefon. Du förklarar då dina behov och biståndsbedömaren avgör vad som anses vara rimligt med tid för att tillgodose dina behov.
				Vill du överklaga beslutet hjälper din biståndsbedömare dig med det också, eller så hjälper vi på Livara omsorg dig om det känns bättre.
				</p>
				<br />
				<h3>Vad kostar hemtjänst?</h3>
				<p>Kostnader för hemtjänst bestäms av Socialstyrelsen och är samma för både kommunala och privata utförare.</p>
				<p>För dig som kund kostar hemtjänsten 208 kr/timme, upp till ungefär 11h i månaden. Därefter finns ett högkostnadsskydd på alla kostnader över 2200kr i månaden, likt inköp av medicin på apoteket.
				Alla kostnader över 2200kr täcks av högkostnadsskyddet. Du kan med andra ord exempelvis ha 100 timmar hemtjänst, och fortfarande endast betala upp till högkostnadsskyddet om cirka 2200kr i månaden. Din biståndsbedömare avgör dock efter en utredning av dina behov hur många timmar du skall beviljas. Är det mindre än högkostnadsskyddet betalar du givetvis bara för det som utförs i ditt hem.
				</p>
				<p>Kontakta oss gärna, eller din biståndsbedömare för mer information</p>
				<br />
				<h3>Tilläggstjänster</h3>
				<p>Om du anser dig behöva mer hemtjänst än vad din biståndsbedömare vill godkänna så kan du enkelt utöka din hemtjänst hos oss till samma kostnad som du vanligtvis betalar, det vill säga 208kr per timme inklusive rutavdrag som vi själva ordnar åt dig. Behöver du hjälp med att exempelvis putsa fönster, få extra städ av ugnen eller frysen?</p>
				<p>Vad du än kan tänkas behöva hjälp med, så finns vi här för dig, tillgängliga att hjälpa till.
				Observera att tilläggstjänsterna inte innefattas av kommunens högkostnadsskydd, utan är tjänster vi på Livara säljer utöver biståndsbedömarens beslut, för att självständigt kunna tillgodose våra kunders eventuella extra behov.
				</p>
				<Link href={'/hemtjanst/tillaggstjanster'}>
					<a href={'/hemtjanst/tillaggstjanster'}>
						<Button size='big' color="purple">Klicka här för mer information om tilläggstjänster</Button>
					</a>
				</Link>


			</div>
			<div style={{ height: 'auto' }} />
		</>
	);
}

export default App;