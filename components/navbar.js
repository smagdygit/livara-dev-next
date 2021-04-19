/* eslint-disable */
import { Grid, Icon, Divider, Button, Image } from 'semantic-ui-react';
import Link from 'next/link';
import styled from 'styled-components';
//import { useMediaQuery } from 'react-responsive';
import { useState, useCallback, useEffect } from 'react';
import React from 'react';

const StyledOverlayElement = styled.a`
	padding: 2px;
	text-decoration: none;
	font-size: 26px;
	color: #a6a6a6;
	display: block;
	transition: 0.3s;
	color: white;
	`;

const StyledOverlayElementHeader = styled.h2`
	padding: 8px;
	text-decoration: none;
	font-size: 42px;
	color: #98b6e3;
	display: block;
	transition: 0.3s;
	margin-bottom: 0;
	margin-top: 30px;
	cursor: default;
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

	const MenuElement = ((props) => {
		return (
			<Link href={props.url}>
				<StyledOverlayElement href={props.url} onClick={() => closeFullscreenNav()}>
					{props.name}
				</StyledOverlayElement>
			</Link>
		);
	});

	const menuData = [
		{
			type: 'title',
			name: 'Hemtjänst',
		},
		{
			type: 'link',
			url: '/hemtjanst/bli-kund',
			name: 'Vill du bli kund?',
		},
		{
			type: 'link',
			url: '/hemtjanst/hur-fungerar-det',
			name: 'Hur fungerar hemtjänst?',
		},
		{
			type: 'link',
			url: '/hemtjanst/hur-jobbar-vi',
			name: 'Hur jobbar vi på Livara?',
		},
		{
			type: 'link',
			url: '/hemtjanst/recensioner',
			name: 'Recensioner om Livara',
		},
		{
			type: 'title',
			name: 'Assistans',
		},
		{
			type: 'link',
			url: '/assistans/bli-kund',
			name: 'Vill du bli kund?',
		},
		{
			type: 'link',
			url: '/assistans/hur-fungerar-det',
			name: 'Hur fungerar hemtjänst?',
		},
		{
			type: 'link',
			url: '/assistans/hur-jobbar-vi',
			name: 'Hur jobbar vi på Livara?',
		},
		{
			type: 'link',
			url: '/assistans/recensioner',
			name: 'Recensioner om Livara',
		},
		{
			type: 'title',
			name: 'Övrigt',
		},
		{
			type: 'link',
			url: '/om-oss',
			name: 'Om Oss',
		},
		{
			type: 'link',
			url: '/kontakt',
			name: 'Kontakt',
		},
		{
			type: 'link',
			url: '/nyheter',
			name: 'Nyheter',
		},
	];

	const menuCollection = menuData.map((item, index) => {
		return (
			<React.Fragment key={index}>
				{item.type === 'title' &&
					<StyledOverlayElementHeader>{item.name}</StyledOverlayElementHeader>
				}
				{item.type === 'link' &&
					<MenuElement url={item.url} name={item.name} />
				}
			</React.Fragment>
		)
	});


	const isBreakpoint = useMediaQuery(1224);

	return (
		<div>
			<div className="overlay" style={isOverlayActive ? overlayActive : {}}>
				{isOverlayActive &&
					<>
						<div onClick={() => closeFullscreenNav()} style={{ position: 'absolute', top: '10px', right: '45px', fontSize: '60px', color: 'white', cursor: 'pointer' }}>&times;</div>
						<div style={{ position: 'relative', top: '10%', width: '100%', textAlign: 'center' }}>
							{menuCollection}
						</div>
					</>
				}
			</div>
			<header style={{ backgroundColor: 'rgb(245, 245, 245, 0.6)' }} className="mb-2">
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
											<a href={'/'} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
												<center>
													<h1>Livara</h1>
													<p>Vi Finns för Dig</p>
												</center>
											</a>
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
											<a href={'/'} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
												<div>
													<Image src="/livara_logga_0.png" size="tiny" alt="Livara Logga" className="m-0" />
												</div>
											</a>
										</Link>
									</Grid.Column>
									<Grid.Column width={8} style={{ cursor: 'pointer' }}>
										<Link href={'/'} style={{ textDecoration: 'none', color: 'black' }}>
											<a href={'/'} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
												<div>
													<h1>Livara Omsorg AB</h1>
													<p>Hemtjänst och Assistans</p>
												</div>
											</a>
										</Link>
									</Grid.Column>
									<Grid.Column width={2}>
									</Grid.Column>
									<Grid.Column width={4}  style={{ height: '100%', width: '100%', verticalAlign: 'middle', paddingRight: '0' }}>
										{/*<div className="float-right d-flex text-center justify-content-center" style={{height: '100%', width: '100%'}}>
											<Button size="big" className="align-self-center" style={{}}>Meny</Button>
										</div>*/}
										<div>			
											<Button size="big" className="float-right" style={{ marginTop: '12%', marginLeft: '6%' }} onClick={e => openFullscreenNav()}>Meny</Button>
										</div>
										<div>
										<Link href={'/kontakt'}>
											<Button size="big" className="float-right" style={{ marginTop: '12%' }} >Kontakt</Button>
										</Link>
										</div>
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
