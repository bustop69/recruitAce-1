import { Text, View, SafeAreaView, ScrollView, ActivityIndicator,RefreshControl } from 'react-native'
import {Company, JobAbout,JobFooter,JobTabs,ScreenHeaderBtn,Specifics} from '../../components'
import Description from './description'
import {COLORS, icons,SIZES} from '../../constants'
import { getSpecificJob } from '../../Utilities/redux/action'
import { Reducer } from '../../Utilities/redux/reducer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const JobDetailsContainer = ({id}) => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSpecificJob(id))
    }, []);

    const specificJob = useSelector(state => state.Reducer.specificJob);


    return(
    <>
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
                <View style={{padding:SIZES.medium,padding:100}}>
                <Company 
                    jobTitle={specificJob.title}
                    salary={specificJob.salary}
                    companyName={specificJob.company}
                />
                <Description 
                Description = {specificJob.description}
                />

                <JobTabs
                    description={specificJob.description}
                    jobID = {specificJob.id}
                />
                    
                </View>
        </SafeAreaView>
    </> 
    )
   
}

export default JobDetailsContainer;