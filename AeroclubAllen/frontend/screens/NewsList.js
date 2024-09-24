import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image } from 'react-native';
import { getNews } from '../api';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Card, Button, Icon } from '@rneui/themed';


const NewsList = (props) => {

    const [fleets, setFleets] = useState([])

    //load news from backend
    const loadFleets = async () => {
        const data = await getNews();
        setFleets(data);
    }

    useEffect(() => {
        loadFleets();
    }, [])

    const Tab = createBottomTabNavigator();

    return (
        <ScrollView style={styles.container}>
            {fleets.map((item) => (
                <Card key={item.id}>
                    {/* Imagen */}
                    <Card.Image source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }} />
                    {/* Título de la Card */}
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Divider />
                    {/* Boton para mas detalles */}
                    <View>
                        <Button title='Ver Mas' onPress={() => props.navigation.navigate('NewsDetail', { item })} />
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

export default NewsList