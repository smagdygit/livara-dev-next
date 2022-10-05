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
						<p>Hemtjänst är en samhällsfunktion som finns till för att stötta människor i sina hem för att slippa flytta hemifrån på grund av sina behov. Hemtjänsten skall fungera som en växtpinne i en blomstrande kruka, erbjuda stabilitet och främja växande! Men all hemtjänst är inte alltid vad den bör vara. Nu finns därför fler utförare av hemtjänst i samhället, efter att den så kallade Lagen om valfrihet vunnit laga kraft i Göteborg. Medborgarna i Göteborg behöver inte stå ut med dåligt utförande av hemtjänst, utan kan alltså numera fritt välja.</p>
						<p>Detta anser vi på Livara Hemtjänst vara en fundamental rättighet för dig som individ, så att du på egen hand kan vara med och påverka din hjälp i ditt hem, vilket vi på Livara Hemtjänst möjliggör för våra kunder.</p>
						<p>Med hemtjänst kan du få hjälp med allt i hemmet och de sysslor du kan tänkas behöva hjälp med utanför hemmet också. Exempel på hemtjänst är bland annat städ, tvätt, matlagning/matberedning, inhandling, hjälp med dusch och annan hygienomsorg, promenader m.m. Vi stöttar dig i allt du kan tänkas behöva hjälp med helt enkelt.</p>
					</div>
					{/*<div style={{ width: '300%', float: 'right', marginLeft: '2%', marginBottom: '2%' }}>
						<Image src="/hemtjanst.png" alt="Livara Logga" className="m-0" />
					</div>*/}
				</div>
				<br />
				<h3>Ledsagning?</h3>
				<p>Behöver du hjälp och sällskap att ta dig till sjukvård eller fritidsaktiviteter? Då finns en avgiftsfri tjänst som kallas ledsagning, där en ledsagare från Livara Hemtjänst följer med dig och uträttar dina behov. Ansökan om ledsagning görs också hos din biståndsbedömare.</p>
				<br />
				<h3>Avlösning?</h3>
				<p>En tredje tjänst inom hemtjänst kallas avlösning och är också avgiftsfri. Avlösning är till för när du som kund behöver hjälp med avlösning av en annan person i ditt hushåll medan du gör andra ärenden eller vilar upp dig på annat håll. Avlösningen möjliggör egen tid för dig som vanligtvis sköter om en annan person i hemmet.
				</p>
				<p>Vill du söka hemtjänst, ledsagning eller avlösning gör du detta hos din biståndsbedömare på ditt lokala socialtjänstkontor, skriftligt eller över telefon. Du förklarar dina behov och biståndsbedömaren avgör vad som anses vara rimligt med tid för att tillgodose dina behov. Vill du överklaga beslutet hjälper din biståndsbedömare dig med det också.
				</p>
				<br />
				<h3>Vad kostar hemtjänst?</h3>
				<p>Kostnaden är densamma oavsett vilken hemtjänstutförare du väljer. Varken mer eller mindre. 
Det är kommunen som reglerar avgifterna för hemtjänst. Vänd dig till din biståndsbedömare för information om vad din hemtjänst hade kostat dig. Behöver du hjälp att nå din biståndsbedömare kan du kontakta Göteborgs stads kontaktcenter på <a href="tel:0313650000">031-365 00 00</a>.</p>
				<p>För mer information om kostnader inom hemtjänsten, <a href="https://goteborg.se/wps/portal/start/aldre/hjalp-i-hemmet/avgifter-och-kostnader">besök Göteborgs Kommun hemsida här.</a>
				</p>
				<p>Kontakta oss gärna, eller din biståndsbedömare för mer information.</p>
				<br />
				<h3>Tilläggstjänster</h3>
				<p>Om du anser dig behöva mer hemtjänst än vad din biståndsbedömare vill godkänna så kan du enkelt utöka din hemtjänst hos oss till samma timkostnad som du vanligtvis betalar, cirka 214kr per timme, inklusive rutavdrag, som vi själva ordnar avdrag för åt dig. Behöver du hjälp med att exempelvis putsa fönster, få extra städ av ugnen eller frysen, alternativt allmän extra hjälp i hemmet? </p>
				<p>Vad du än kan tänkas behöva hjälp med, så finns vi här för dig, tillgängliga att hjälpa till. Observera att tilläggstjänsterna inte innefattas av kommunens högkostnadsskydd, utan dessa är extra tjänster som vi på Livara säljer utöver biståndsbedömarens beslut, för att självständigt kunna tillgodose våra kunders eventuella extra behov. Om du har frågor eller funderingar kring extratjänsterna är du välkommen att kontakta oss.
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