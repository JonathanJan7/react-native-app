import React, {useState} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet, Text } from 'react-native'
import ImageUploader from '../components/ImageUploader'



const CreateFleet = () => {

    
    const [state, setState] = useState({
        plate:'',
        name:'',
        engine:'',
        brand:'',
        model:'',
        speed:'',
        consumption:''
    })

    //Capture data from form
    const handleChangeText = (name, value) =>{
        setState({ ...state, [name]: value })
    }
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Insert plate of fleet' onChangeText={(value) => handleChangeText('plate', value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Insert name of fleet' onChangeText={(value) => handleChangeText('name', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Insert engine of fleet' onChangeText={(value) => handleChangeText('engine', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Insert brand of fleet' onChangeText={(value) => handleChangeText('brand', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Insert model of fleet' onChangeText={(value) => handleChangeText('model', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Insert speed of fleet' onChangeText={(value) => handleChangeText('speed', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Insert consumption of fleet' onChangeText={(value) => handleChangeText('consumption', value)} />
            </View>
            <View>
                <Button title='Save Fleet' onPress={() => console.log(state)}/>
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
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
    }
})

export default CreateFleet