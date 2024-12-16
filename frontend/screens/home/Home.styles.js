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
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 20,
        marginTop:120,
        borderRadius: 10,
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
        color: '#eee',
        textAlign: 'center',
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