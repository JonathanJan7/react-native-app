import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image } from 'react-native';
import { getCourses } from '../api';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BASE_URL } from '../api'
import { Card, Button, Icon } from '@rneui/themed';


const CourseList = (props) => {

    const [fleets, setFleets] = useState([])

    //load fleets from backend
    const loadFleets = async () => {
        const data = await getCourses();
        setFleets(data);
    }

    useEffect(() => {
        loadFleets();
    }, [])

    const Tab = createBottomTabNavigator();

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
                    <Card.Title>{getTitle(item.class)}</Card.Title>
                    <Card.Divider />
                    <View>
                        <Button title='Ver Mas' onPress={() => props.navigation.navigate('CourseDetail', { item })} />
                    </View>
                </Card>
            ))}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    }
})

export default CourseList