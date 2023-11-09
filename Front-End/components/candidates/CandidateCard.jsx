import React from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'
import {profilePictures} from '../../constants/CandidatePictures'
import styles from './CandidateCardStyle'

const CandidateCard = ({item,selectedJob}) => {

  const imageUrl = profilePictures[item.name];
  
  return (
    <TouchableOpacity
    style={styles.container(selectedJob,item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
       <Image 
        source={{ uri: imageUrl }}
        size={styles.logoImage}
        style={styles.logoImage}
       />
      </TouchableOpacity>
       <Text style={styles.companyName} numberOfLines={1}>{item.name}</Text>
       <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob,item)}>
          {item.job}
        </Text>
        <Text style={styles.location}>{item.location}</Text>
       </View>

    </TouchableOpacity>
  )
}

export default CandidateCard