import { Text ,View} from 'react-native';
import { Provider } from 'react-redux';
import {Store} from '../Utilities/redux/store'
import AddJobForm from '../components/forms/addjobform';
import { Stack } from 'expo-router';
import {COLORS,icons} from '../constants'
import { ScreenHeaderBtn } from '../components';


const Addjob = () => {
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
                    headerTitle:"Add job",
                    headerTitleAlign:'center'
                }}
            >
            </Stack.Screen>
    
            <AddJobForm />
        </Provider>

)
}

export default Addjob;