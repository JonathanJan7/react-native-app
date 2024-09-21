import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image } from 'react-native';
import { getFleets } from '../api';

import { Card, Button, Icon } from '@rneui/themed';


const FleetList = (props) => {

    const [fleets, setFleets] = useState([])

    //load fleets from backend
    const loadFleets = async () => {
        const data = await getFleets();
        setFleets(data);
    }

    useEffect(() => {
        loadFleets();
    }, [])

    return(
        <ScrollView style={styles.container}>
            {fleets.map((item) => (
                <Card key={item.plate}>
                    {/* Imagen */}
                    <Card.Image source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }} />
                    {/* Título de la Card */}
                    <Card.Title>{item.model}</Card.Title>
                    <Card.Divider />
                    {/* Boton para mas detalles */}
                    <View>
                        <Button title='Ver Mas' onPress={() => props.navigation.navigate('FleetDetail',{item})} />
                    </View>
                </Card>
            ))}
        </ScrollView>
    )

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
