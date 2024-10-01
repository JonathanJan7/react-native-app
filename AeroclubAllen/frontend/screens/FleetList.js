import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { getFleets } from '../api';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

    const BASE_URL = 'C:/Users/Jonathan/Documents/LabProg/react-native-app/LaboratorioProgramacion/AeroclubAllen/backend/src/static'; // Cambia esto a tu URL base real

    const renderFleet = ({ item }) => (
        <Card key={item.plate}>
            <Card.Image source={{ uri: `{BASE_URL}{item.img}` }} />  
            <Text>`{BASE_URL}{item.img}`</Text>      
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
            onEndReachedThreshold={0.5} // Cargar más cuando estemos al 50% del final
            style={styles.container}
            ListFooterComponent={loading ? (
                <View style={{ padding: 20 }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>Loading...</Text>
                </View>
            ) : null}
        />
    )

    /*return(
        <ScrollView style={styles.container}>
            {fleets.map((item) => (
                <Card key={item.plate}>
                    
                    <Card.Image source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }} />
                    
                    <Card.Title>{item.model}</Card.Title>
                    <Card.Divider />
                    
                    <View>
                        <Button title='Ver Mas' onPress={() => props.navigation.navigate('FleetDetail',{item})} />
                    </View>
                </Card>
            ))}
            
        </ScrollView>
    )*/

    /*return (
        <View>  
            <FlatList
                data={fleets}
                renderItem={({item})=>{
                    console.log(item);
                    return <Text>{item.model}</Text>;
                }}
            />

            <Card>
                <Card.Title>HELLO WORLD</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={{ padding: 0 }}
                    source={{
                        uri:
                            'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                    }}
                />
                <Text style={{ marginBottom: 10 }}>
                    The idea with React Native Elements is more about component
                    structure than actual design.
                </Text>
                <Button
                    icon={
                        <Icon
                            name="code"
                            color="#ffffff"
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                    }}
                    title="VIEW NOW"
                />
            </Card>

        </View>
    )*/
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    }
})

export default FleetList
