/* eslint-disable */
import { Card } from 'semantic-ui-react';

function Review(props) {
	return (
		<div className="container p-1">
			<Card fluid color="green" className="">
				<Card.Content>
					<Card.Header>{props.name}</Card.Header>
					<Card.Meta>{props.stars}</Card.Meta>
					<Card.Description>
						<b>
							{props.text}
						</b>
					</Card.Description>
				</Card.Content>
			</Card>
		</div>
	);
}

export default Review;
