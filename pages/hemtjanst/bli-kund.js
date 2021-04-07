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
					Bli Kund
				</h2>
				<Divider />
				<br />
			</center>
			<div style={{ maxWidth: '500px' }}>
				<h4>Vad kul att du vill bli kund hos oss!</h4>
				<p>Vi ska göra vårt bästa för att du ska bli en nöjd och glad del av vårat arbete. Boka gärna ett samtal med oss för att ta dig vidare eller skicka ett mejl, information hittar du på våran kontaktsida.</p>
				<Link href={'/kontakt/'}>Klicka här för att komma till kontaktsidan</Link>
			</div>
			<div style={{height: 'auto'}} />
		</>
	);
}

export default App;