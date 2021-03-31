/* eslint-disable */
import SquareDiv from 'react-square-div';
import { Grid } from 'semantic-ui-react';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
//import useMediaQuery from 'react-responsive';

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

function Thumbnail(props) {
	/*const isDesktop = useMediaQuery({
		query: '(min-device-width: 1224px)'
	});*/


	const isBreakpoint = useMediaQuery(1224);

	return (
		<>
			{!isBreakpoint &&
				<Grid.Column className="p-0" alt={props.alt} style={{ cursor: 'pointer', backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundImage: props.image, width: '47.5%', height: '100%', margin: '0', borderRadius: '10px' }}>
					<Link href={props.url}>
						<a href={props.url}>
							<center>
								<div style={{ height: '200px' }}>
									{/*<Image size="massive" src="https://react.semantic-ui.com/images/wireframe/square-image.png" />*/}
									<h1 style={{ padding: '5px', color: 'white', textShadow: '2px 2px 0px black', position: 'absolute', top: '40%', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }} className="text-center">{props.name}</h1>
								</div>
							</center>
						</a>
					</Link>
				</Grid.Column>
			}
			{isBreakpoint &&
				<Grid.Column className="p-0" alt={props.alt} style={{ cursor: 'pointer', backgroundSize: 'contain', backgroundImage: props.image, width: '47.5%', margin: '0', borderRadius: '10px' }}>
					<Link href={props.url}>
						<a href={props.url}>
							<center>
								<SquareDiv style={{ width: '40%' }}>
									{/*<Image size="massive" src="https://react.semantic-ui.com/images/wireframe/square-image.png" />*/}
									<h2 style={{ padding: '5px', color: 'white', textShadow: '2px 2px 0px black', position: 'absolute', top: '30%', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }} className="text-center">{props.name}</h2>
								</SquareDiv>
							</center>
						</a>
					</Link>
				</Grid.Column>
			}
		</>
	);
}

export default Thumbnail;
