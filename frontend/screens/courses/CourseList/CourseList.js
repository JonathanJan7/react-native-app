import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { getCourses } from '../../../api';
import { BASE_URL } from '../../../api'
import { Card, Button } from '@rneui/themed';
import { styles } from './CourseList.styles';


const CourseList = (props) => {
    const [fleets, setFleets] = useState([])

    //load fleets from backend
    const loadFleets = async () => {
        const data = await getCourses();
        data.forEach(course => {
            course.translatedClass = getTitle(course.class);
        });
        setFleets(data);
    }

    useEffect(() => {
        loadFleets();
    }, [])

    const getTitle = (item) => {
        const titles = {
            'ppa': 'Piloto Privado de Avion',
            'instructor': 'Instructor de Vuelo',
            'comercial': 'Piloto Comercial de Avion',
            'primera': 'Piloto de Primera Clase',
        };
        return titles[item];
    }

    return (
        <ScrollView style={styles.container}>
            {fleets.map((item) => (
                <Card key={item.class}>
                    <Card.Image source={{ uri: `${BASE_URL}/courses/img/${item.class}` }} />
                    <Card.Title style={styles.title}>{item.translatedClass}</Card.Title>
                    <Card.Divider />
                    <View>
                        <Button color="#0D2154" title='Ver Mas' onPress={() => props.navigation.navigate('CourseDetail', { item })} />
                    </View>
                </Card>
            ))}

        </ScrollView>
    )
}

export default CourseList;