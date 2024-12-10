import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { getFleets } from '../api';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BASE_URL } from '../api'

import { Card, Button, Icon } from '@rneui/themed';


const FleetList = (props) => {

    const [fleets, setFleets] = useState([])
    const [desde, setDesde] = useState(0); // Valor inicial de "desde"
    const [hasta, setHasta] = useState(4); // Cuántos objetos cargar por consulta
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // Para saber si hay más datos por cargar

    //load fleets from backend
    /*const loadFleets = async () => {
        const data = await getFleets();
        setFleets(data);
    }*/

    const loadFleets = async () => {
        if (loading || !hasMore) return;

        setLoading(true);
        try {
            const data = await getFleets(desde, hasta); // Pasamos "desde" y "hasta"

            // Si no hay más datos, detenemos la carga
            if (data.length === 0) {
                setHasMore(false);
            } else {
                setFleets([...fleets, ...data]); // Concatenamos los nuevos datos con los existentes
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
    }, [])

    const loadMore = () => {
        if (hasMore && !loading) {
            loadFleets(); // Cargamos más datos cuando sea necesario
        }
    };

    const Tab = createBottomTabNavigator();

    const renderFleet = ({ item }) => (
        <Card key={item.plate}>
            <Card.Image source={{ uri: `${BASE_URL}/airplane/img/${item.plate}` }} />     
            <Card.Title>{item.model}</Card.Title>
            <Card.Divider />
            <View>
                <Button title='Ver Mas' onPress={() => props.navigation.navigate('FleetDetail', { item })} />
            </View>
        </Card>
    );

    return(
        <FlatList
            data={fleets}
            renderItem={renderFleet}
            keyExtractor={(item) => item.plate.toString()}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            style={styles.container}
            ListFooterComponent={loading ? (
                <View style={{ padding: 20 }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>Loading...</Text>
                </View>
            ) : null}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    }
})

export default FleetList
