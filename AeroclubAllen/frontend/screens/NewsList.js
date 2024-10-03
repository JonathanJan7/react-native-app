import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { getNews } from '../api';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';

import { Card, Button, Icon } from '@rneui/themed';


const NewsList = (props) => {

    const [fleets, setFleets] = useState([])
    const [desde, setDesde] = useState(0); // Valor inicial de "desde"
    const [hasta, setHasta] = useState(4); // Cuántos objetos cargar por consulta
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // Para saber si hay más datos por cargar

    //load news from backend
    /*const loadFleets = async () => {
        const data = await getNews();
        setFleets(data);
    }*/

    const loadFleets = async () => {
        if (loading || !hasMore) return;

        setLoading(true);
        try {
            const data = await getNews(desde, hasta); // Pasamos "desde" y "hasta"

            // Si no hay más datos, detenemos la carga
            if (data.length === 0) {
                setHasMore(false);
            } else {
                // Filtrar duplicados de los nuevos datos
                const uniqueData = data.filter(newFleet =>
                    !fleets.some(existingFleet => existingFleet.id === newFleet.id)
                );

                // Solo concatenar los datos únicos
                if (uniqueData.length > 0) {
                    setFleets((fleets) => [...fleets, ...uniqueData]);
                } else {
                    console.log('No se encontraron nuevos datos únicos.');
                }
                //setFleets([...fleets, ...data]); // Concatenamos los nuevos datos con los existentes
                setDesde(hasta); // Actualizamos "desde" para la próxima consulta
                setHasta(hasta + 4); // Actualizamos "hasta"
            }
        } catch (error) {
            console.error('Error al cargar los fleets:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadFleets();
        console.log(fleets); // Verifica si hay duplicados después de cargar datos
    }, [fleets])

    const loadMore = () => {
        if (hasMore && !loading) {
            loadFleets(); // Cargamos más datos cuando sea necesario
        }
    };

    const newObject = props.route.params?.row;//hay un nuevo ojbeto?
    
    useFocusEffect(
        React.useCallback(() => {
            if (newObject) {
                // Agregar el nuevo objeto a la lista existente
                console.log(newObject);
                setFleets((fleets) => [...fleets, newObject]);
                props.route.params.row = 0;//limpiar variable
            }
        }, [newObject])
    );


    const renderFleet = ({ item }) => (
        <Card key={item.id}>
            <Card.Image source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }} />
            <Card.Title>{item.title}</Card.Title>
            <Card.Divider />
            <View>
                <Button title='Ver Mas' onPress={() => props.navigation.navigate('NewsDetail', { item })} />
            </View>
        </Card>
    );

    const Tab = createBottomTabNavigator();

    return (
            <FlatList
                data={fleets}
                renderItem={renderFleet}
                keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5} // Cargar más cuando estemos al 50% del final
                style={styles.container}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <Button
                            title="Agregar Noticia"
                            onPress={() => {
                                props.navigation.navigate('CreateNews')
                            }}
                        />
                    </View>
                }
                ListFooterComponent={loading ? (
                    <View style={{ padding: 20 }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text style={{ textAlign: 'center', marginTop: 10 }}>Loading...</Text>
                    </View>
                ) : null}
            />
    )

    /*return(
        <FlatList
            data={fleets}
            renderItem={renderFleet}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5} // Cargar más cuando estemos al 50% del final
            style={styles.container}
            ListFooterComponent={loading ? (
                <View style={{ padding: 20 }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>Loading...</Text>
                </View>
            ) : null}
        />
    )*/

    /*return (
        <ScrollView style={styles.container}>
            {fleets.map((item) => (
                <Card key={item.id}>
                    
                    <Card.Image source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }} />
                    
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Divider />
                    
                    <View>
                        <Button title='Ver Mas' onPress={() => props.navigation.navigate('NewsDetail', { item })} />
                    </View>
                </Card>
            ))}

        </ScrollView>
    )*/
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    header: {
        marginBottom: 20,
    },
})

export default NewsList