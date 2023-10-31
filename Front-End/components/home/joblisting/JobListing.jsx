import React from 'react'
import { useEffect } from 'react';
import { View, 
        Text,
        FlatList ,
        TouchableOpacity,
        Button} from 'react-native'

import {COLORS, SIZES} from '../../../constants'
import CandidateCard from '../../common/cards/candidates/CandidateCard';
import styles from './joblisting.style'
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../../Utilities/redux/action';
import JobListingCard from '../../common/cards/joblisting/JobListingCard';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import PostJobButton from '../../button/button';
import buttonStyle from '../candidates/candidate.style'
import {finishUpdate} from "../../../Utilities/redux/action"
import {update} from "../../../Utilities/redux/action"



const JobListing = () => {
  router = useRouter()
  const dispatch = useDispatch();

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
              router.push("/addjob")
            }}>
                <Text style={buttonStyle.headerBtn}>Post new job</Text>
          </TouchableOpacity>
        </View >

      <View style={styles.cardsContainer}>
      {joblist.map((job)=>(
        <JobListingCard 
          job={job}
          key={job.id}
          handleNavigate={()=>router.push(`/job-details/${job.id}`)}
        />
      ))}
      </View>
  </View>
  )
}

export default JobListing