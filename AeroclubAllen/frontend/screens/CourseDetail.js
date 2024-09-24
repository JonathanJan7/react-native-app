import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Button, Icon } from '@rneui/themed';

const CourseDetail = (props) => {
    //recibo el item que me pasa la screen anterior
    console.log(props.route.params.item);
    const item = props.route.params.item;

    return (
        <ScrollView >
            <Card key={item.plate}>
                {/* Imagen */}
                <Card.Image source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }} />
                {/* Título de la Card */}
                <Card.Title>{item.class}</Card.Title>
                <Card.Divider />
                {/* Boton para mas detalles */}
                <Text style={{ marginBottom: 10 }}>
                    Edad Minima: {item.age}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Duracion: {item.duration}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Horas de Vuelo: {item.hours}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Estudios Minimos: {item.studies}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Examen Psicofisico: {item.psychophysical}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Licencias Previas: {item.licenses}
                </Text>
            </Card>
        </ScrollView>
    )
}

export default CourseDetail