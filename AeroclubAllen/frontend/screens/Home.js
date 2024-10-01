import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity   } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

/*const { width: viewportWidth } = Dimensions.get('window');

const images = [
    require('../assets/1.jpeg'),  // Asegúrate de que la ruta sea correcta
    require('../assets/jet.jpg'),
    require('../assets/cessna.jpg'),
];*/

function Home() {
    return (
        <ImageBackground
            source={{ uri:'https://images.unsplash.com/photo-1506503214502-57cafe4201a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}  // Imagen de fondo local
            style={styles.background}
        >
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')} style={styles.logo}/>
                <Text style={styles.title}>Aeroclub Allen</Text>
                <Text style={styles.subTitle}>El Cielo es el Limite</Text>
                <Text style={styles.description}>
                    Bienvenido al Aeroclub Allen, un lugar donde tu pasión por volar se convierte en realidad. Únete a nuestra comunidad de aviadores y descubre la libertad que ofrece el cielo.
                </Text>
            </View>

            {/* Sección de Redes Sociales */}
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
        
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    container:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',  // Fondo semi-transparente sobre la imagen
        padding: 20,
        marginTop:120,
        borderRadius: 10,
        /*flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',*/
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    subTitle:{
        fontSize: 18,
        color: 'white',
    },
    logo:{
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    description:{
        fontSize: 16,
        color: '#eee',                // Texto claro para el párrafo
        textAlign: 'center',           // Centra el texto
        marginTop: 20,                 // Espacio entre el subtítulo y el párrafo
        lineHeight: 22,                // Mejora la legibilidad
    },
    socialContainer: {
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
    },
    socialTitle: {
        fontSize: 16,
        marginBottom: 10,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 100,
    },
})

export default Home
