import React from 'react'
import { 
  View, 
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

import styles from './JobListingCardStyle'
import FormatSalary from '../../utilities/FormatSalary';

const JobListingCard = ({job,navigation}) => {

    const handleNavigate = () =>{
    navigation.navigate("JobDetails",job)
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <View styles={styles.container}>
        <Text 
          style={
            styles.jobName} 
            numberOfLines={1} 
        >
          {job.title}
        </Text>
        <Text 
          style={styles.jobType}>
          {FormatSalary(job.salary)}
        </Text>
      </View>
      <TouchableOpacity style={styles.logoContainer}>
      <Image 
          source={require('../../assets/images/job.jpg')}
          resizeMode='contain'
          style={styles.logImage}
        />
    </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default JobListingCard


