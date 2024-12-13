import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { getNews } from '../../api'; // Assuming this is correctly fetching data
import { BASE_URL } from '../../api'
import { useFocusEffect } from '@react-navigation/native';

function NewsSection() {
    const [newsList, setNewsList] = useState([]);

    const loadNews = async () => {
        const data = await getNews(0, 1);
        setNewsList(data);
    };

    useEffect(() => {
        loadNews();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            loadNews();
        }, [])
    );

    return (
        <View style={styles.container}>
            {/* <Text style={styles.sectionTitle}>Ultima Noticia</Text> */}
            <View style={styles.newsContainer}>
                {newsList.map((news, index) => (
                    <View key={index} style={styles.newsCard}>
                        <View style={styles.newsCardImage}>
							<Image source={{ uri: `${BASE_URL}/news/img/${news.id}` }} />
                        </View>
                        <View style={styles.newsCardContent}>
                            <Text style={styles.newsTitle}>{news.title}</Text>
                            <Text style={styles.newsDescription}>{news.description}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e1',
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
    newsContainer: {
        marginBottom: 16,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    newsCard: {
        marginBottom: 12,
        borderRadius: 8,
		width: 320,
		objectFit: 'cover',
        overflow: 'hidden',
    },
    newsCardImage: {
        width: '100%',
        height: 200,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    newsCardContent: {
        padding: 12,
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    newsDescription: {
        fontSize: 14,
        color: '#555',
    },
    showMoreButton: {
        padding: 10,
        paddingHorizontal: 15,
        backgroundColor: '#0D2154',
        borderRadius: 5,
        alignItems: 'center',
        width: '85%'
    },
    showMoreText: {
        color: '#fff',
        fontSize: 16,
    },
});


export default NewsSection;
