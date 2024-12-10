import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Button, Icon } from '@rneui/themed';
import { BASE_URL } from '../api'

const FleetDetail = (props) => {
    //recibo el item que me pasa la screen anterior
    console.log(props.route.params.item);
    const item = props.route.params.item;
    
    return (
        <ScrollView >
                <Card key={item.plate}>
                    {/* Imagen */}
                    <Card.Image source={{ uri: `${BASE_URL}/airplane/img/${item.plate}` }} />
                    {/* Título de la Card */}
                    <Card.Title>{item.model}</Card.Title>
                    <Card.Divider />
                    {/* Boton para mas detalles */}
                    <Text style={{ marginBottom: 10 }}>
                        Marca: {item.brand}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Consumo: {item.consumption}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Motor: {item.engine}
                    </Text>
                <Text style={{ marginBottom: 10 }}>
                    Velocidad: {item.speed}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Patente: {item.plate}
                </Text>
                </Card>
        </ScrollView>
    )
}

export default FleetDetail