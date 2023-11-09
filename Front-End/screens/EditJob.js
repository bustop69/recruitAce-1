import { Provider } from 'react-redux';
import { Store } from '../redux/Store';
import {COLORS,icons} from '../styles/Theme'
import EditJobForm from '../components/forms/EditJobForm';
import { getSpecificJob } from '../redux/Action';

const EditJob = ({navigation}) => {

const jobID = navigation.getParam('id')

return(
        <Provider store={Store}>
            <EditJobForm
                jobID={jobID}
                navigation={navigation}
            />
        </Provider>

)
}

export default EditJob;