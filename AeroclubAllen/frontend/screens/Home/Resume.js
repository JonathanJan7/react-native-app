import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { getTrajectories } from '../../api';
import { BASE_URL } from '../../api';

const Resume = () => {
    const [trajectoryData, setTrajectoryData] = useState([]);

    const loadTrajectories = async () =>{
        const data = await getTrajectories();
        //console.log(data);
        setTrajectoryData(data);

    }

    useEffect(() => {
        // Aquí puedes hacer un fetch a tu API o cargar datos locales
       /* const data = [
            { type: 'aeronaves', data: '6 Aeronaves', icon: require('./assets/icons/trajectory/aeronaves.png') },
            { type: 'alumnos', data: '82 Alumnos Activos', icon: require('./assets/icons/trajectory/alumnos.png') },
            { type: 'annos', data: 'Más de 80 años', icon: require('./assets/icons/trajectory/antiguedad.png') },
            { type: 'socios', data: '151 Socios Activos', icon: require('./assets/icons/trajectory/socios.png') },
        
        <Image source={item.icon} style={styles.icon} />
            ];*/
        loadTrajectories();
        console.log('Datos de trajectoryData:', trajectoryData);
        //console.log(`${BASE_URL}${trajectoryData[0].icon}`);
        
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
                horizontal={false} // Cambiar a true si deseas un carrusel horizontal
                numColumns={2} // Para mostrar elementos en columnas
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
        textAlign: 'center', // This centers the title text
        backgroundColor: '#0D2154',
        color: 'white',
        borderRadius: 8,
        padding: 10,
        width: '100%'
    },
    listContainer: {
        paddingBottom: 20, // Espaciado al final del listado
    },
    card: {
        alignItems: 'center', // Centra el contenido en horizontal
        justifyContent: 'center', // Centra el contenido en vertical
        margin: 10,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: '40%', // Ajusta el ancho para dos columnas (evitar conflictos con el flex)
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