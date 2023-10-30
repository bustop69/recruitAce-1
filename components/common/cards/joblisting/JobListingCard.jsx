import React from 'react'
import { 
  View, 
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

import { useSelector, useDispatch } from 'react-redux';
import styles from './joblisting.style';
import formatSalary from '../../../../Utilities/formatSalary';

const JobListingCard = ({job,handleNavigate}) => {
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
          {formatSalary(job.salary)}
        </Text>
      </View>
      <TouchableOpacity style={styles.logoContainer}>
      <Image 
          source={require('../../../../assets/images/job.jpg')}
          resizeMode='contain'
          style={styles.logImage}
        />
    </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default JobListingCard


