import { useState } from 'react'
import React from 'react'
import { View, 
          Text, 
          TouchableOpacity,
          FlatList,
          AcitivityIndicator} from 'react-native'

import { useRouter } from 'expo-router'
import styles from './candidate.style'
import {COLORS, SIZES} from '../../../constants'
import CandidateCard from '../../common/cards/candidates/CandidateCard'
import {useSelector} from 'react-redux'

const Candidates = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;
  const candidateList = useSelector(state => state.Reducer.candidateList);

  return (
    <View styles={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Candidates in London</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>View more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={candidateList} 
          renderItem={({ item }) =>  (
            <CandidateCard 
              item={item}
            />

          )}
          keyExtractor={(item) => item.userId.toString()} 
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />

      </View>
    </View>
  );
}

export default Candidates