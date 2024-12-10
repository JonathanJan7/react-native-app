import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Button, Icon } from '@rneui/themed';
import { BASE_URL } from '../api'

const NewsDetail = (props) => {
    //recibo el item que me pasa la screen anterior
    console.log(props.route.params.item);
    const item = props.route.params.item;

    return (
        <ScrollView >
            <Card key={item.id}>
                {/* Imagen */}
                <Card.Image source={{ uri: `${BASE_URL}/news/img/${item.id}` }} />
                {/* Título de la Card */}
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider />
                {/* Boton para mas detalles */}
                <Text style={{ marginBottom: 10 }}>
                    Fecha: {item.date}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Descripcion: {item.description}
                </Text>
            </Card>
        </ScrollView>
    )
}

export default NewsDetail