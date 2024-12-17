import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        textAlign: 'center',
        backgroundColor: '#0D2154',
        color: 'white',
        borderRadius: 8,
        padding: 10,
        width: '100%'
    },
    listContainer: {
        paddingBottom: 20,
        margin: 20,
        marginLeft: 25
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: '40%',
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