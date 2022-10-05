/* eslint-disable */
import Link from 'next/link';
import { Divider } from 'semantic-ui-react';
import Head from "next/head";


function App() {

	return (
		<>
			<Head>
				<title>Bli Kund</title>
			</Head>
			<center>
				<h2>
					<b>Vill du bli kund?</b>
				</h2>
				<Divider />
				<br />
			</center>
			<div>
				<h3>Vill du bli kund? Inga konstigheter!</h3>
				<p>Slå oss en signal eller fyll i formuläret så kontaktar vi dig.</p>
					<p>Här förklarar vi steg för steg vad som behövs för att bli en del av Livara-familjen. Mer information finns under fliken ”Hur fungerar hemtjänst”.</p>
					<p>Så, för att bli kund behöver du först ha ett beslut från din biståndsbedömare på socialtjänsten. Om du inte vet vem din biståndsbedömare är, eller om du inte har någon biståndsbedömare, då går det att ringa till Göteborgs stads kontaktcenter med telefonnummer 031-365 00 00 så hjälper de dig att lokalisera ditt lokala socialtjänstkontor genom din adress och ålder. På ditt lokala kontor finns din nuvarande eller framtida biståndsbedömare. Behöver du hjälp att lokalisera din biståndsbedömare hjälper vi dig förstås. Våra kontaktuppgifter finner du under fliken ”Kontakta oss” högst upp.
					I det här avsnittet utgår vi vidare från att du redan har ett beslut från en biståndsbedömare. Har du inte det och önskar mer information ber vi dig välja avsnittet ”Hur fungerar hemtjänst” i menyvalet där vi förklarar mer ingående på hur hemtjänst fungerar och erbjuder även gratis konsultation om du så önskar på ett privat möte på vårt kontor eller via telefon.
				</p>
				<br />
				<h3>När du har fått ditt beslut</h3>
				<p>Kontakta oss på Livara Hemtjänst och berätta om dina behov och viljor så ser vi till att skapa en meningsfull och välfungerande planering, med dig som kund i fokus. När du känner dig nöjd och har fått en tydlig förståelse över ditt nya val, då kontaktar du helt enkelt din biståndsbedömare och begär att få byta hemtjänstutförare till Livara Hemtjänst. Biståndsbedömaren kontaktar oss sedan och meddelar ditt val som vi bekräftar. Tveka inte på att kontakta oss för hjälp eller ytterligare information.</p>
				<br />
				<p>Massa kärlek</p>
				<p>Livara Omsorg</p>
			</div>
			<div style={{ height: 'auto' }} />
		</>
	);
}

export default App;