import { View, SafeAreaView } from 'react-native'
import Company from './company/Company'
import {COLORS, icons,SIZES} from '../../styles/Theme'
import { getSpecificJob } from '../../redux/Action'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Buttons from './jobButtons/Buttons'

const JobInformationContainer = ({id,navigation}) => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSpecificJob(id))
    }, []);

    const specificJob = useSelector(state => state.Reducer.specificJob);


    return(
    <>
        <SafeAreaView>
            <View>

                <Company 
                    jobTitle={specificJob.title}
                    salary={specificJob.salary}
                    description = {specificJob.description}
                    companyName={specificJob.company}
                />

                <Buttons
                    jobID = {specificJob.id}
                    navigation={navigation}
                />
                    
                </View>
        </SafeAreaView>
    </> 

    )
   
}

export default JobInformationContainer;