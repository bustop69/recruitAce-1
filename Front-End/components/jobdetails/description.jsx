import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import styles from './company/company.style'

const Description = ({Description}) => {
  return (
    <View style={styles.companyInfoBox} >
      <Text style={styles.companyName} >{Description}</Text>
    </View>
  )
}

export default Description;