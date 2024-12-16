import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { getNews } from '../../../api/news.api';
import { BASE_URL } from '../../../config'
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './NewsSection.styles';

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

export default NewsSection;
