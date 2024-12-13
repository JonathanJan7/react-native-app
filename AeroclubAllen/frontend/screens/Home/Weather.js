import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getWeather } from '../../api'; // Assuming this is correctly fetching data
import { BASE_URL } from '../../api';

function WeatherSection() {
    const [weather, setWeather] = useState({
        wind_direction: "Error",
        wind_speed: "Error",
        surface_pressure: "Error",
        temperature: "Error",
        dewpoint: "Error",
        cloud_cover: "Error",
    });

    const loadWeather = async () => {
        const data = await getWeather();
        setWeather(data);
    };

    useEffect(() => {
        loadWeather();
    }, []);

    const renderWeatherCard = (icon, text) => (
        <View style={styles.weatherCard}>
            <Image source={{ uri: `${BASE_URL}/assets/icons/clima/${icon}` }} style={styles.icon} />
            <View style={styles.hr} />
            <Text style={styles.weatherText}>{text}</Text>
        </View>
    );

    return (
        <View style={styles.weatherSection}>
            {/* <Text style={styles.sectionTitle}>Clima Allen</Text> */}
            <View style={styles.weather}>
                {renderWeatherCard("manga-viento.png", `${weather.wind_direction}° ${weather.wind_speed}kt`)}
                {renderWeatherCard("presion.png", weather.surface_pressure)}
                {renderWeatherCard("temperatura.png", `${weather.temperature} | ${weather.dewpoint}`)}
                {renderWeatherCard("nubes.png", weather.cloud_cover)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    weatherSection: {
        backgroundColor: 'rgba(224, 224, 225, 0.7)',
        width: '100%',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    sectionTitle: {
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
    weather: {
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginHorizontal: '2em',
    },
    weatherCard: {
        padding: 8,
        margin: 16,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        alignItems: 'center',
        transitionDuration: 400,
    },
    hr: {
        marginLeft: 16,
        marginBottom: 16,
        height: 80,
        backgroundColor: '#0D2055',
        width: 5,
    },
    icon: {
        height: 50,
        width: 50,
        padding: 5,
    },
    weatherText: {
        padding: 16,
        fontSize: 24,
    },
});

export default WeatherSection;