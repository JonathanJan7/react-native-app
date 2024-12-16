import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    deleteButton: {
        backgroundColor: 'darkred', // Fondo rojo
        padding: 10,           // Espaciado interno
        borderRadius: 5,       // Bordes redondeados
        alignItems: 'center',  // Centrado del texto
    },
    deleteButtonText: {
        color: 'white',        // Texto blanco
        fontWeight: 'bold',    // Negrita para resaltar
        fontSize: 16,          // Tamaño de fuente
    },
    title: {
        fontSize: 22,
        marginTop: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});