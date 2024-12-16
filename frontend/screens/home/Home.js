import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView   } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import NewsSection from './NewsSection/NewsSection';
import TrajectorySection from './TrajectorySection/TrajectorySection';
import WeatherSection from './WeatherSection/WeatherSection';
import { styles } from './Home.styles';

function Home() {
    return (

        <ScrollView>
            <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1506503214502-57cafe4201a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}  // Imagen de fondo local
                style={styles.background}
            >
                <View style={styles.container}>
                    <Image source={require('../../assets/logo.png')} style={styles.logo} />
                    <Text style={styles.title}>Aeroclub Allen</Text>
                    <Text style={styles.subTitle}>El Cielo es el Limite</Text>
                    <Text style={styles.description}>
                        Bienvenido al Aeroclub Allen, un lugar donde tu pasión por volar se convierte en realidad. Únete a nuestra comunidad de aviadores y descubre la libertad que ofrece el cielo.
                    </Text>
                </View>

                <TrajectorySection />

                <NewsSection />

                <WeatherSection />

                {/* Sección de Redes Sociales<NewsSection />  <NewsSection />*/}
                <View style={styles.socialContainer}>
                    <Text style={styles.socialTitle}>Síguenos en:</Text>
                    <View style={styles.socialIcons}>
                        <TouchableOpacity>
                            <Icon name="logo-facebook" size={30} color="#3b5998" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="logo-twitter" size={30} color="#1DA1F2" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="logo-instagram" size={30} color="#C13584" />
                        </TouchableOpacity>
                    </View>
                    <Text>Version 1.0</Text>
                </View>
            </ImageBackground>
        </ScrollView>
        
        
    )
}

export default Home
