import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getWeather } from '../../../api';
import { BASE_URL } from '../../../api';
import { styles } from './WeatherSection.styles';

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

export default WeatherSection;