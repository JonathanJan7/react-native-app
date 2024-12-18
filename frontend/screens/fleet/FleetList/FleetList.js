import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { getFleets } from '../../../api/fleet.api';
import { BASE_URL } from '../../../config';
import { styles } from './FleetList.styles';
import { Card, Button } from '@rneui/themed';

const FleetList = (props) => {
    const maxPerLoad = 4;
    const [fleets, setFleets] = useState([])
    const [desde, setDesde] = useState(0); // Valor inicial de "desde"
    const [hasta, setHasta] = useState(maxPerLoad); // Cuántos objetos cargar por consulta
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // Para saber si hay más datos por cargar

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
                setHasta(hasta + maxPerLoad); // Actualizamos "hasta"
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

    const renderFleet = ({ item }) => (
        <Card key={item.plate}>
            <Card.Image source={{ uri: `${BASE_URL}/airplane/img/${item.plate}` }} />     
            <Card.Title style={styles.title}>{item.model}</Card.Title>
            <Card.Divider />
            <View>
                <Button color="#0D2154" title='Ver Mas' onPress={() => props.navigation.navigate('FleetDetail', { item })} />
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

export default FleetList
