import React from "react";
import { Text, ScrollView } from "react-native";
import { Card } from "@rneui/themed";

const DetailCard = ({ details, imgUrl, title }) => {
	return (
		<ScrollView>
			<Card key={details.class}>
				<Card.Image source={{ uri: imgUrl }} style={{borderRadius: 5}} />
				<Card.Title style={{fontSize: 25,marginTop: 13}}>{title}</Card.Title>

				<Card.Divider />
				{Object.keys(details).map((key) => (
					<Text key={key} style={{ marginBottom: 10, fontSize: 20 }}>
						<Text style={{ fontWeight: "bold" }}>
							{`${key.charAt(0).toUpperCase() + key.slice(1)}: `}
						</Text>
						<Text>{details[key]}</Text>
					</Text>
				))}
			</Card>
		</ScrollView>
	);
};

export default DetailCard;