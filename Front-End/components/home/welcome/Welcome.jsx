import React, { useState } from 'react';
import { View, 
        Text ,
        TouchableOpacity,
        Image,
        FlatList,
        TextInput} from 'react-native';
import {useRouter} from 'expo-router';
import styles from './welcome.style';
import { icons,SIZES, } from '../../../constants';
import { useSelector } from 'react-redux';
import { changeSkillType } from '../../../Utilities/redux/action'
import { useDispatch } from 'react-redux';

const Welcome = ({searchTerm,setSearchterm,handleClick}) => {
  const router = useRouter();
  const selectedSkillType = useSelector(state => state.Reducer.selectedSkillType);
  const allSkillTypes = useSelector(state => state.Reducer.allSkillTypes);
  const dispatch = useDispatch()

  return (
    <View>
      <View
        style={styles.container}
      />
      <Text style={styles.userName}>Morning Peter</Text>
      <Text style={styles.welcomeMessage}>Find talented people for your team</Text>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
          style={styles.searchInput}
          value={{searchTerm}}
          placeholder="What skills are you looking for?"
          onChange={(text)=>setSearchterm(text)}
          >
          </TextInput>
        </View>
        <TouchableOpacity style ={styles.searchBtn} >
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={allSkillTypes}
          renderItem={({item})=>(
            <TouchableOpacity style={styles.tab(selectedSkillType,item)} onPress={()=>{
              dispatch(changeSkillType(item));
            }}>
              <Text style={styles.tabText(selectedSkillType,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome