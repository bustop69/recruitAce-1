import React from "react";
import { View } from "react-native";
import { Provider } from 'react-redux';
import { Store } from "../redux/Store";
import JobInformationContainer from "../components/jobInformation/JobInformationContainer";


export default function JobDetails ({navigation}){
    const jobID = navigation.getParam('id')
    return (
        <Provider store={Store}>
            <View > 
                <JobInformationContainer
                    id={jobID}
                    navigation={navigation}
                />
            </View>
        </Provider>
    )
}


