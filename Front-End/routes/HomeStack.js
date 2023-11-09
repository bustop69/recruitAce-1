import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import JobDetails from '../screens/JobDetails';
import EditJob from '../screens/EditJob';
import Addjob from '../screens/AddJob';
import { COLORS } from '../styles/Theme';
import { icons } from '../styles/Icons';
import ProfileImage from '../constants/ProfileImage';
import ScreenHeaderBtn from '../components/header/ScreenHeaderBtn';

const handlePress = function (){
}

const screens = {
    Home:{
        screen:Home,
        navigationOptions:{
            headerStyle:{backgroundColor:COLORS.lightWhite},
            headerShadowVisible:false,
            headerTitle:"",
            headerTitleAlign:"center",
            headerLeft:()=>(
                < ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={handlePress}/>
              ),
              headerRight:()=>(
                < ScreenHeaderBtn iconUrl={ProfileImage.profile} dimension="100%" />
              )
        }
    },
    JobDetails:{
        screen:JobDetails,
        navigationOptions:{
            headerStyle:{backgroundColor:COLORS.lightWhite},
            headerShadowVisible:false,
            headerBackVisible:false,
            headerTitle:"Job details",
            headerTitleAlign:'center'
        }
    },
    EditJob:{
        screen:EditJob,
        navigationOptions:{
            headerStyle:{backgroundColor:COLORS.lightWhite},
            headerShadowVisible:false,
            headerBackVisible:false,
            headerTitle:"Edit job",
            headerTitleAlign:'center'
        }
    },
    Addjob:{
        screen:Addjob,
        navigationOptions:{
            headerStyle:{backgroundColor:COLORS.lightWhite},
            headerShadowVisible:false,
            headerBackVisible:false,
            headerTitle:"Add new job",
            headerTitleAlign:'center'
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);