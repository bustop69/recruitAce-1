import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Welcome from "../components/welcome/Welcome";
import Candidates from "../components/candidates/Candidate";
import JobListing from "../components/jobListings/JobListing";
import { useState } from "react";
import { Provider } from "react-redux";
import { Store } from "../redux/Store";
import { SIZES } from "../styles/Theme";


export default function Home ({navigation}){

    const [serachTerm ,setSearchTerm] = useState("")

    const handlePress = function (){
    }
    return (
        <Provider store={Store}>
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
                <Candidates />
                <JobListing 
                    navigation = {navigation}
                />
            </View>
        </ScrollView>
        </Provider>
    )
}

