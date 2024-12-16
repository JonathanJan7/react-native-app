import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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