import { View} from 'react-native';
import { Provider } from 'react-redux';
import { Store } from '../redux/Store';
import AddJobForm from '../components/forms/AddJobForm';



const Addjob = ({navigation}) => {
return(
        <Provider store={Store}>
            <AddJobForm 
                navigation={navigation}
            />
        </Provider>

)
}

export default Addjob;