import React, { useState } from 'react';
import { View, Button, Image, Alert, PermissionsAndroid, Platform } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ImageUploader = () => {
    const [imageUri, setImageUri] = useState(null);

    // Función para solicitar permisos en Android
    const requestPermissions = async () => {
        if (Platform.OS === 'android') {
            try {
                if (Platform.Version >= 30) {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                        {
                            title: "Permiso para acceder a la galería",
                            message: "Esta aplicación necesita acceso a tu galería para seleccionar imágenes.",
                            buttonNeutral: "Preguntar después",
                            buttonNegative: "Cancelar",
                            buttonPositive: "OK",
                        }
                    );
                    return granted === PermissionsAndroid.RESULTS.GRANTED;
                } else {
                    const granted = await PermissionsAndroid.requestMultiple([
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    ]);

                    return (
                        granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
                        granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
                    );
                }
            } catch (err) {
                console.warn(err);
                return false;
            }
        }
        return true; // iOS no requiere permisos manuales en tiempo de ejecución para la galería
    };

    const selectImage = async () => {
        const hasPermission = await requestPermissions();

        if (!hasPermission) {
            Alert.alert('Permisos denegados', 'Necesitamos permisos para acceder a la galería.');
            return;
        }

        try {
            const result = await launchImageLibrary({
                mediaType: 'photo',
            });
            console.log('Resultado de la selección de imagen: ', result);

            if (result.didCancel) {
                console.log('User cancelled image picker');
            } else if (result.errorCode) {
                console.log('ImagePicker Error: ', result.errorMessage);
            } else {
                const uri = result.assets[0].uri;
                setImageUri(uri);
            }
        } catch (error) {
            console.error('Error selecting image: ', error);
        }
    };

    return (
        <View>
            <Button title="Select Image" onPress={selectImage} />
            {imageUri && (
                <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, marginTop: 20 }} />
            )}
        </View>
    );
};

export default ImageUploader;
