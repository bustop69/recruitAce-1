import React from 'react'
import { View, Text,Image, } from 'react-native'

import styles from './CompanyStyle'
import FormatSalaryJobInformation from '../../../utilities/FormatSalaryJobInformation'


const Company = ({jobTitle,description,salary,companyName}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={require('../../../assets/images/job.jpg')}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
      <Text style={styles.companyName}>{companyName}</Text>
      </View>
      <View>
        <Text>{FormatSalaryJobInformation(salary)}</Text>
      </View>
      <View>
        <Text>{description}</Text>
      </View>
    </View>
  )
}

export default Company