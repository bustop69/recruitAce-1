import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert,Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { postJob } from '../../Utilities/redux/action';
import checkFormCharacters from '../../Utilities/checkCharacters';
import checkFormValues from '../../Utilities/checkNumbers';
import { useRouter } from 'expo-router';
import { Dispatch } from 'redux';
import {update} from "../../Utilities/redux/action"

const AddJobForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');
    const [company, setCompany] = useState('');
    const router = useRouter()

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (!checkFormCharacters(title, company, description,salary)) {
            return; 
         }
        if (!checkFormValues(salary)) {
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
            onPress:()=>router.push('/')
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