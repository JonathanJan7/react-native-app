import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { getNews } from '../../../api';
import { useFocusEffect } from '@react-navigation/native';
import { BASE_URL } from '../../../api'
import { styles } from './NewsList.styles';
import { Card, Button, Icon } from '@rneui/themed';


const NewsList = (props) => {

    const [newsList, setNewsList] = useState([])
    const [desde, setDesde] = useState(0); // Valor inicial de "desde"
    const [hasta, setHasta] = useState(4); // Cuántos objetos cargar por consulta
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // Para saber si hay más datos por cargar
    const [refreshing, setRefreshing] = useState(false); // Estado para controlar la recarga


    const loadNews = async (reset = false) => {
        if (loading) return;

        setLoading(true);
        try {
            if (reset) {
                setDesde(0);
                setHasta(4);
                setHasMore(true);
            }

            const data = await getNews(reset ? 0 : desde, reset ? 4 : hasta);

            if (reset) {
                setNewsList(data);
            } else if (data.length === 0) {
                setHasMore(false);
            } else {
                const uniqueData = data.filter(
                    newNews => !newsList.some(existing => existing.id === newNews.id)
                );
                if (uniqueData.length > 0) {
                    setNewsList((news) => [...news, ...uniqueData]);
                }
                setDesde(hasta);
                setHasta(hasta + 4);
            }
        } catch (error) {
            console.error('Error al cargar las noticias:', error);
        } finally {
            setLoading(false);
            if (reset) setRefreshing(false);
        }
    };

    useEffect(() => {
        loadNews();
    }, [newsList]);

    const loadMore = () => {
        if (hasMore && !loading) {
            loadNews();
        }
    };

    const handleRefresh = () => {
        setRefreshing(true);
        loadNews(true);
    };

    const newObject = props.route.params?.row;
    
    useFocusEffect(
        React.useCallback(() => {
            if (newObject) {
                setNewsList([newObject, ...newsList]);
                props.route.params.row = 0;
            }else{
                handleRefresh();
            }
        }, [newObject])
    );

    const renderNews = ({ item }) => (
        <Card key={item.id}>
            <Card.Image source={{ uri: `${BASE_URL}/news/img/${item.id}` }} />
            <Card.Title>{item.title}</Card.Title>
            <Card.Divider />
            <View>
                <Button color="#0D2154" title='Ver Mas' onPress={() => props.navigation.navigate('NewsDetail', { item })} />
            </View>
        </Card>
    );

    return (
            <FlatList
                data={newsList}
                renderItem={renderNews}
                keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5} // Cargar más cuando estemos al 50% del final
                refreshing={refreshing} // Controla el estado de recarga
                onRefresh={handleRefresh} // Define qué hacer al recargar
                style={styles.container}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <Button
                            color="#0D2154"
                            title="Agregar Noticia"
                            onPress={() => {
                                props.navigation.navigate('CreateNews')
                            }}
                        />
                    </View>
                }
                ListFooterComponent={loading ? (
                    <View style={{ padding: 20 }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text style={{ textAlign: 'center', marginTop: 10 }}>Loading...</Text>
                    </View>
                ) : null}
            />
    )

}

export default NewsList