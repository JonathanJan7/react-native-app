import React from "react";
import { Text, ScrollView } from "react-native";
import { Card } from "@rneui/themed";

const DetailCard = ({ details, imgUrl, title }) => {
	return (
		<ScrollView>
			<Card key={details.class}>
				<Card.Image source={{ uri: imgUrl }} />
				<Card.Title>{title}</Card.Title>

				<Card.Divider />
				{Object.keys(details).map(
					(key) => (
							<Text key={key} style={{ marginBottom: 10 }}>
								{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${details[key]}`}
							</Text>
						),
				)}
			</Card>
		</ScrollView>
	);
};

export default DetailCard;
