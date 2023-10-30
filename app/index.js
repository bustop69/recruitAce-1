import { View, Text,ScrollView, SafeAreaView} from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import {COLORS, icons, images ,SIZES} from '../constants';
import {JobListing,ScreenHeaderBtn,Candidates,Welcome } from '../components';
import {CandidatList} from '../components';
import { Provider } from 'react-redux';
import { Store } from '../Utilities/redux/store';
import Addjob from './addjob';

const Home = () => {
    const router = useRouter();
    const [serachTerm ,setSearchTerm] = useState("")
    const handlePress = function (){
    }
      return(
        <Provider store={Store}>
          <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
              <Stack.Screen  
                options={{
                  headerStyle:{backgroundColor:COLORS.lightWhite},
                  headerShadowVisible:false,
                  headerTitle:"",
                  headerTitleAlign:"center",
                  headerLeft:()=>(
                    < ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={handlePress}/>
                  ),
                  headerRight:()=>(
                    < ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                  ),
                }}/>

              <ScrollView showsVerticalScrollIndicator={false}> 
                  <View style={{
                    flex:1,
                    padding:SIZES.medium 
                  }}>

                  <Welcome
                  searchTerm = {serachTerm}
                    setSearchterm = {setSearchTerm}
                    handleClick = {()=>{
                      if (searchTerm){
                        router.push(`/search/${searchTerm}`)
                      }
                    }}

                  />
                  
                  <Candidates/>

                  <JobListing/>

                  </View>
            </ScrollView>
          </SafeAreaView>
        </Provider>
      )
  }

export default Home;