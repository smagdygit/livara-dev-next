/* eslint-disable */
import Link from 'next/link';
import { Divider } from 'semantic-ui-react';
import Head from "next/head";


function App() {

	return (
		<>
			<Head>
				<title>Hur Jobbar Vi?</title>
			</Head>
			<center>
				<h2>
					Hur Jobbar Vi?
				</h2>
				<Divider />
				<br />
			</center>
			<div style={{ maxWidth: '500px' }}>
				<h4>Ja du..</h4>
				<p>Effektivt, hoppas jag.</p>
			</div>
			<div style={{height: 'auto'}} />
		</>
	);
}

export default App;