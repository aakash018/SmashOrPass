import {font} from '../global/globals';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import girl from '../assets/girls/roshikaniraula.jpg';

const LeaderBoardTopGirl: React.FC = () => {
  return (
    <View style={styles.mostVoatedContainer}>
      <Image source={girl} style={styles.image} />
      <LinearGradient
        colors={[
          'rgba(101, 101, 101, 0)',
          'rgba(0, 0, 0, 0.7)',
          'rgba(0, 0, 0, 1)',
        ]}
        style={styles.info}>
        <View>
          <Text style={styles.text}>Roshika Niraula</Text>
          <Text style={styles.textTiktokID}>@roshika_niraula</Text>
        </View>
        <View>
          <Text style={styles.textVotes}>420</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LeaderBoardTopGirl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  mostVoatedContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 250,
  },
  info: {
    width: '100%',
    position: 'absolute',
    height: 80,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    bottom: 0,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#DDDDDD',
    fontFamily: font,
    fontSize: 20,
  },
  textTiktokID: {
    color: '#DDDDDD',
    fontFamily: font,
    fontSize: 13,
    marginTop: -10,
  },

  textVotes: {
    color: '#DDDDDD',
    fontFamily: font,
    fontSize: 20,
  },
});
