import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { getTrajectories } from '../../api';
import { BASE_URL } from '../../api';

const Resume = () => {
    const [trajectoryData, setTrajectoryData] = useState([]);

    const loadTrajectories = async () =>{
        const data = await getTrajectories();
        setTrajectoryData(data);
    }

    useEffect(() => {
        loadTrajectories();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.card} >
            <Image source={{ uri: `${BASE_URL}${item.icon}` }} style={styles.icon} />
            <Text style={styles.text}>{item.data}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {/*<Text style={styles.title}>Nuestra Trayectoria</Text>*/}
            <FlatList
                data={trajectoryData}
                renderItem={renderItem}
                keyExtractor={(item) => item.type}
                horizontal={false} 
                numColumns={2}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(224, 224, 225, 0.7)',
        width: '100%',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        backgroundColor: '#0D2154',
        color: 'white',
        borderRadius: 8,
        padding: 10,
        width: '100%'
    },
    listContainer: {
        paddingBottom: 20,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: '40%',
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
    },
});

export default Resume;