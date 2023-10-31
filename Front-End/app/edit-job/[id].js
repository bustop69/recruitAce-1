import { Text ,View} from 'react-native';
import { Provider } from 'react-redux';
import { Store } from '../../Utilities/redux/store';
import {COLORS,icons} from '../../constants'
import { ScreenHeaderBtn } from '../../components';
import EditJobForm from '../../components/forms/editjobform';
import { Stack, useRouter,useSearchParams } from 'expo-router';
import { getSpecificJob } from '../../Utilities/redux/action';


const EditJob = () => {


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
                    headerTitle:"Edit job",
                    headerTitleAlign:'center'
                }}
            >
            </Stack.Screen>
    
            <EditJobForm 
                jobID = {id}
            />

        </Provider>

)
}

export default EditJob;