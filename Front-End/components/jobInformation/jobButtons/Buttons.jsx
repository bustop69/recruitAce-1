import React from 'react'
import { View, Text ,TouchableOpacity, Alert} from 'react-native'
import styles from './ButtonsStyle'
import { removeSpecificJob } from '../../../redux/Action'
import { useDispatch } from 'react-redux'


const Buttons = ({jobID,navigation}) => {
  const dispatch = useDispatch()

    const goBack =  () => {
        navigation.goBack();
    }

    const editJob = () =>{
        navigation.navigate("EditJob",{ id:jobID })
    }


  const removeJob = () =>{
    Alert.alert("Warning","Do you wish to proceed?",[{
      text:"Cancel",
    },
    {
      text:"Confirm",
      onPress:()=>{
        dispatch(removeSpecificJob(jobID))
        setTimeout(()=>{
            goBack()
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
        editJob()
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

export default Buttons