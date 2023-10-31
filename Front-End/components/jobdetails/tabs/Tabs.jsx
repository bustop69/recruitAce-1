import React from 'react'
import { View, Text ,FlatList,TouchableOpacity, Alert} from 'react-native'
import styles from './tabs.style'
import {SIZES} from '../../../constants'
import { removeSpecificJob } from '../../../Utilities/redux/action'
import { useDispatch } from 'react-redux'
import { useRouter } from 'expo-router'

const Tabs = ({jobID}) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const removeJob = () =>{
    Alert.alert("Warning","Do you wish to proceed?",[{
      text:"Cancel",
    },
    {
      text:"Confirm",
      onPress:()=>{
        dispatch(removeSpecificJob(jobID))
        setTimeout(()=>{
          router.push("/")
        },500)

      }
    }
  ])
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={styles.editBtn()}
      onPress={()=>{
        router.push(`/edit-job/${jobID}`)
      }}
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.deleteBtn()}
        onPress={()=>removeJob()}
      >
        <Text style={styles.buttonText}>Delete  </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Tabs