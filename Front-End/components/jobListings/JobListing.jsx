import React from 'react'
import { useEffect } from 'react';
import { View, 
        Text,
        TouchableOpacity} from 'react-native'

import {COLORS, SIZES} from '../../styles/Theme'
import styles from './JobListingStyle'
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../redux/Action';
import JobListingCard from './JobListingCard';
import PostJobButton from './PostJobButton/PostJobButton';
import { finishUpdate } from '../../redux/Action';
import { update } from '../../redux/Action';


const JobListing = ({navigation}) => {
  const dispatch = useDispatch();

  const handleRoute = () =>{
    navigation.navigate("Addjob")
  }
  const shouldRefreshData = useSelector(state => state.Reducer.shouldRefreshData);

  useEffect(() => {
    if (shouldRefreshData) {
      dispatch(fetchJobs())
      dispatch(finishUpdate())
    }
  }, [shouldRefreshData]);

  const joblist = useSelector(state => state.Reducer.joblist);



  return (
    <View style={styles.container}>
       <View style={styles.header}>
          <Text style={styles.headerTitle}>Your job listings</Text>
          <TouchableOpacity onPress={()=>{
              handleRoute()
            }}>
                <Text style={styles.headerBtn}>Post new job</Text>
          </TouchableOpacity>
        </View >

      <View style={styles.cardsContainer}>
      {joblist.map((job)=>(
        <JobListingCard 
          job={job}
          key={job.id}
          navigation={navigation}
        />
      ))}
      </View>
  </View>
  )
}

export default JobListing