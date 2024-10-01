import React, { useState } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet, Text } from 'react-native'
import ImageUploader from '../components/ImageUploader'



const CreateNews = () => {


    const [state, setState] = useState({
        date: '',
        title: '',
        description: '',
    })

    //Capture data from form
    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Insert date' onChangeText={(value) => handleChangeText('date', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Insert Title' onChangeText={(value) => handleChangeText('title', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Insert Description' onChangeText={(value) => handleChangeText('description', value)} />
            </View>
            <View>
                <Button title='Save Fleet' onPress={() => console.log(state)} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default CreateNews