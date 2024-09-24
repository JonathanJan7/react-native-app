import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Button, Icon } from '@rneui/themed';

const NewsDetail = (props) => {
    //recibo el item que me pasa la screen anterior
    console.log(props.route.params.item);
    const item = props.route.params.item;

    return (
        <ScrollView >
            <Card key={item.id}>
                {/* Imagen */}
                <Card.Image source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }} />
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