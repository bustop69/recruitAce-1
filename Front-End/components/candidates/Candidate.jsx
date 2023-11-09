import React from 'react'
import { View, 
          Text, 
          TouchableOpacity,
          FlatList} from 'react-native'
import styles from './CandidateStyle'
import {COLORS, SIZES} from '../../styles/Theme'
import CandidateCard from './CandidateCard'
import {useSelector} from 'react-redux'

const Candidates = () => {

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