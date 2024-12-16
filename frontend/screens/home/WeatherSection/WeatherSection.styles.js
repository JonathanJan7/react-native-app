import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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