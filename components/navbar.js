/* eslint-disable */
import { Grid, Icon, Divider, Button, Image } from 'semantic-ui-react';
import Link from 'next/link';
import styled from 'styled-components';
//import { useMediaQuery } from 'react-responsive';
import { useState, useCallback, useEffect } from 'react';

const StyledOverlayElement = styled.a`
	padding: 8px;
	text-decoration: none;
	font-size: 26px;
	color: #a6a6a6;
	display: block;
	transition: 0.3s;
	color: white;
	`;

const StyledOverlayElementHeader = styled.h1`
	padding: 8px;
	text-decoration: none;
	font-size: 42px;
	color: #818181;
	display: block;
	transition: 0.3s;
	color: white;
	`;

const useMediaQuery = (width) => {
	const [targetReached, setTargetReached] = useState(false);

	const updateTarget = useCallback((e) => {
		if (e.matches) {
			setTargetReached(true);
		} else {
			setTargetReached(false);
		}
	}, []);

	useEffect(() => {
		const media = window.matchMedia(`(max-width: ${width}px)`);
		media.addListener(updateTarget);

		// Check on mount (callback is not called until a change occurs)
		if (media.matches) {
			setTargetReached(true);
		}

		return () => media.removeListener(updateTarget);
	}, []);

	return targetReached;
}

function Navbar() {
	const overlayActive = { display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.9)', overflowX: 'hidden', transition: '0.3s', position: 'fixed', zIndex: '10', left: '0', top: '0', height: '100%', width: '100%' }
	const [isOverlayActive, setIsOverlayActive] = useState(false);


	/*const isDesktop = useMediaQuery({
		query: '(min-device-width: 1224px)'
	});*/

	function openFullscreenNav() {
		setIsOverlayActive(true);
		document.documentElement.style.overflow = 'hidden';
		document.body.scroll = "no";
	}

	function closeFullscreenNav() {
		setIsOverlayActive(false);
		console.log("eee");
	}


	const isBreakpoint = useMediaQuery(1224);

	return (
		<div>
			<div className="overlay" style={isOverlayActive ? overlayActive : {}}>
				{isOverlayActive &&
					<>
						<div onClick={() => closeFullscreenNav()} style={{ position: 'absolute', top: '10px', right: '45px', fontSize: '60px', color: 'white' }}>&times;</div>
						<div style={{ position: 'relative', top: '10%', width: '100%', textAlign: 'center' }}>
							<StyledOverlayElementHeader><u>Omsorg</u></StyledOverlayElementHeader>
							<StyledOverlayElement href="#">Vill du bli kund?</StyledOverlayElement>
							<StyledOverlayElement href="#">Hur fungerar hemtjänst?</StyledOverlayElement>
							<StyledOverlayElement href="#">Hur jobbar vi på Livara?</StyledOverlayElement>
							<StyledOverlayElement href="#">Recensioner om Livara</StyledOverlayElement>
							<StyledOverlayElementHeader><u>Assistans</u></StyledOverlayElementHeader>
							<StyledOverlayElement href="#">Vill du bli kund?</StyledOverlayElement>
							<StyledOverlayElement href="#">Hur fungerar hemtjänst?</StyledOverlayElement>
							<StyledOverlayElement href="#">Hur jobbar vi på Livara?</StyledOverlayElement>
							<StyledOverlayElement href="#">Recensioner om Livara</StyledOverlayElement>
							<StyledOverlayElementHeader><u>Övrigt</u></StyledOverlayElementHeader>
							<StyledOverlayElement href="#">Om Företaget</StyledOverlayElement>
							<StyledOverlayElement href="#">Kontakt</StyledOverlayElement>
						</div>
					</>
				}
			</div>
			<header style={{ backgroundColor: '#f5f5f5' }} className="mb-2">
				<center>
					<Grid padded centered verticalAlign='middle' style={{ maxWidth: '1100px', height: '110px' }}>
						<Grid.Row style={{ height: '100%' }} className="p-0">
							{isBreakpoint &&
								<>
									<Grid.Column width={4} className="p-3">
										<a href="tel:072345678" style={{ textDecoration: 'none', color: 'black' }}>
											<center>
												<Icon style={{ color: 'green' }} name="phone" size="big" />
												<p>Ring</p>
											</center>
										</a>
									</Grid.Column>
									<Grid.Column width={8} className="p-3">
										<Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>
											<center>
												<h1>Livara</h1>
												<p>Vi Finns för Dig</p>
											</center>
										</Link>
									</Grid.Column>
									<Grid.Column width={4} onClick={e => openFullscreenNav()} className="p-3">
										<center>
											<Icon name="inbox" size="big" />
											<p>Meny</p>
										</center>
									</Grid.Column>
								</>
							}
							{!isBreakpoint &&
								<>
									<Grid.Column width={2} className="m-0 p-0" style={{ cursor: 'pointer' }}>
										<Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>
											<div>
												<Image src="/livara_logga_0.png" size="tiny" alt="Livara Logga" className="m-0" />
											</div>
										</Link>
									</Grid.Column>
									<Grid.Column width={8} style={{ cursor: 'pointer' }}>
										<Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>
											<div>
												<h1>Livara Grupp AB</h1>
												<p>Hemtjänst och Assistans</p>
											</div>
										</Link>
									</Grid.Column>
									<Grid.Column width={2}>

									</Grid.Column>
									<Grid.Column width={4} onClick={e => openFullscreenNav()} style={{ height: '100%', width: '100%', verticalAlign: 'middle', paddingRight: '0' }}>
										{/*<div className="float-right d-flex text-center justify-content-center" style={{height: '100%', width: '100%'}}>
											<Button size="big" className="align-self-center" style={{}}>Meny</Button>
										</div>*/}
										<Button size="big" className="float-right" style={{ marginTop: '12%' }}>Meny</Button>
									</Grid.Column>
								</>
							}
						</Grid.Row>
					</Grid>
					<Divider className="mt-0" />
				</center>
			</header>
		</div>
	);
}

export default Navbar;
