import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { getTrajectories } from '../../../api';
import { BASE_URL } from '../../../api';
import { styles } from './TrajectorySection.styles';

const TrajectorySection = () => {
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

export default TrajectorySection;