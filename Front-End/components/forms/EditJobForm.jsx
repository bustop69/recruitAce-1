import React, { useState,useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert,Text } from 'react-native';
import { useDispatch } from 'react-redux';
import CheckCharacters from '../../utilities/CheckCharacters';
import CheckNumbers from '../../utilities/CheckNumbers';
import { update } from '../../redux/Action';
import { getSpecificJob } from '../../redux/Action';
import {useSelector} from 'react-redux'
import { updateSpecificJob } from '../../redux/Action';


const EditJobForm = ({jobID,navigation}) => {

    const handleNavigate = () =>{
        navigation.navigate("Home")
    }
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificJob(jobID))
    }, []);

    const specificJob = useSelector(state => state.Reducer.specificJob);

    const { company: tempCompany, title: tempTitle, description: tempDescription,salary:tempSalary } = specificJob;


    const [title, setTitle] = useState(tempTitle);
    const [description, setDescription] = useState(tempDescription);
    const [salary, setSalary] = useState(tempSalary);
    const [company, setCompany] = useState(tempCompany);




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

        dispatch(updateSpecificJob(jobID,jobData));

        Alert.alert('Success', 'Job updated successfully!',[{
            text:"OK",
            onPress:(()=>{
                handleNavigate()
            })
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

export default EditJobForm;