import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { getTrajectories } from '../../../api/trajectory.api';
import { BASE_URL } from '../../../config';
import { styles } from './TrajectorySection.styles';

const TrajectorySection = () => {
    const [trajectoryData, setTrajectoryData] = useState([]);

    const loadTrajectories = async () => {
        const data = await getTrajectories();
        setTrajectoryData(data);
    };

    useEffect(() => {
        loadTrajectories();
    }, []);

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Nuestra Trayectoria</Text> */}
            <View style={styles.listContainer}>
                {trajectoryData.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Image source={{ uri: `${BASE_URL}${item.icon}` }} style={styles.icon} />
                        <Text style={styles.text}>{item.data}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default TrajectorySection;