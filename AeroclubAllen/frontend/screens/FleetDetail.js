import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Button, Icon } from '@rneui/themed';

const FleetDetail = (props) => {
    //recibo el item que me pasa la screen anterior
    console.log(props.route.params.item);
    const item = props.route.params.item;
    
    return (
        <ScrollView >
                <Card key={item.plate}>
                    {/* Imagen */}
                    <Card.Image source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }} />
                    {/* Título de la Card */}
                    <Card.Title>{item.model}</Card.Title>
                    <Card.Divider />
                    {/* Boton para mas detalles */}
                    <Text style={{ marginBottom: 10 }}>
                        Brand: {item.brand}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Consumption: {item.consumption}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Engine: {item.engine}
                    </Text>
                <Text style={{ marginBottom: 10 }}>
                    Speed: {item.speed}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Plate: {item.plate}
                </Text>
                </Card>
        </ScrollView>
    )
}

export default FleetDetail