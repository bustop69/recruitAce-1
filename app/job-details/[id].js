import {Text } from 'react-native'
import { Stack, useRouter,useSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { Provider } from 'react-redux';
import { Store } from '../../Utilities/redux/store';
import JobDetailsContainer from '../../components/jobdetails/jobdetailscontainer';
import { ScreenHeaderBtn } from '../../components';
import {COLORS, icons,SIZES} from '../../constants'

 
const JobDetails = () =>{
    const params = useSearchParams();
    const id = params.id
    const router = useRouter()

    return(
        <Provider store={Store}>
            <Stack.Screen
                options={{
                    headerStyle:{backgroundColor:COLORS.lightWhite},
                    headerShadowVisible:false,
                    headerBackVisible:false,
                    headerLeft:()=>(
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={()=> router.back()}
                        />
                    ),
                    headerRight:()=>(
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%"
                        />
                    ),
                    headerTitle:""
                }}
            >
            </Stack.Screen>
                <JobDetailsContainer
                    id={id}
                />
        </Provider>

    )
}

export default JobDetails;