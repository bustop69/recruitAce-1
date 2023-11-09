import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert,Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { postJob } from '../../redux/Action';
import CheckCharacters from '../../utilities/CheckCharacters';
import CheckNumbers from '../../utilities/CheckNumbers';
import { Dispatch } from 'redux';
import { update } from '../../redux/Action';

const AddJobForm = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');
    const [company, setCompany] = useState('');

    const handleRoute = () =>{
        navigation.goBack()
    }

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (!CheckCharacters(title, company, description,salary)) {
            return; 
         }
        if (!CheckNumbers(salary)) {
            return;  
        }
        const jobData = {
            title,
            description,
            salary,
            company
        };

        dispatch(postJob(jobData));
        dispatch(update())

        Alert.alert('Success', 'Job posted successfully!',[{
            text:"OK",
            onPress:()=>handleRoute()
        }]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title:</Text>
            <TextInput 
                placeholder="Title" 
                value={title} 
                onChangeText={setTitle} 
                style={styles.input} 
            />
            <Text style={styles.label}>Description:</Text>
            <TextInput 
                placeholder="Description" 
                value={description} 
                onChangeText={setDescription} 
                style={styles.input} 
            />
            <Text style={styles.label}>Salary:</Text>
            <TextInput 
                placeholder="salary" 
                value={salary} 
                onChangeText={setSalary} 
                style={styles.input} 
            />
            <Text style={styles.label}>Company:</Text>
            <TextInput 
                placeholder="Company" 
                value={company} 
                onChangeText={setCompany} 
                style={styles.input} 
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
    }
});

export default AddJobForm;