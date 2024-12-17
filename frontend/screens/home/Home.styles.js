import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    container:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 20,
        paddingTop: 120,
        // borderRadius: 10,
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 15,
        color: '#0D2154',
    },
    subTitle:{
        fontSize: 18,
        color: '#0D2154',
    },
    logo:{
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    description:{
        fontSize: 16,
        color: '#0D2154',
        textAlign: 'justify',
        marginTop: 20,
        lineHeight: 22,
    },
    socialContainer: {
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