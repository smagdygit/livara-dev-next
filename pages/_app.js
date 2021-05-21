import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import "react-square-div/lib/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from '../components/navbar';
import Link from 'next/link';
import { Image } from 'semantic-ui-react';
import Head from "next/head";



function MyApp({ Component, pageProps }) {
	const Logo = React.forwardRef((props, ref) => (
		<a ref={ref} {...props}>
			<Image src="/livara_logga_0.png" size="small" alt="Livara Logga" />
		</a>
	));

	const Kontakt = React.forwardRef((props, ref) => (
		<a ref={ref} {...props}>
			<p style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }} className="mb-0">Kontakt</p>
		</a>
	));

	return (
		<>
			<Head>
				<meta httpEquiv="content-language" content="sv" />
			</Head>
			<div>
				<Navbar>
				</Navbar>
				<div className="container mt-4" style={{ minHeight: 'calc(100vh - 431px)' }}>
					<Component {...pageProps} />
				</div>
				<footer style={{ backgroundColor: 'rgb(0, 0, 0, 0.9)', width: '' }} className="mt-5">
					<center className="p-4">
						<div className="w-25">
							<Link href={'/'} passHref>
								<Logo />
							</Link>
						</div>
						<br />
						<div style={{ width: '50%', color: 'white' }} className="d-flex justify-content-center">
							<Link href={'/kontakt/'} style={{ width: 'auto' }}>
								<a style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }} className="mb-0">Kontakt</a>
							</Link>
							&nbsp;|&nbsp;
							<a href={'https://seniorval.se/hemtjanst/goteborg/livara-hemtjänst/'} style={{ textDecoration: 'none', color: 'white' }}>
								<p style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>Seniorval</p>
							</a>
							&nbsp;|&nbsp;
							<a href={'https://www.allabolag.se/5591696603/livara-hemtjänst-ab'} style={{ textDecoration: 'none', color: 'white' }}>
								<p style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>Allabolag</p>
							</a>
						</div>
						<br />
						<p className="text-white">Livara © 2021</p>
					</center>
				</footer>
			</div>
		</>
	);
}

export default MyApp;