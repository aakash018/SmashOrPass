import {font} from '../global/globals';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  img: any;
  name: string;
  tiktokID: string;
  votes: number;
}

const LeaderBoardTopGirl: React.FC<Props> = ({img, name, votes, tiktokID}) => {
  return (
    <View style={styles.mostVoatedContainer}>
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.image} />
      </View>
      <LinearGradient
        colors={[
          'rgba(101, 101, 101, 0)',
          'rgba(0, 0, 0, 0.7)',
          'rgba(0, 0, 0, 1)',
        ]}
        style={styles.info}>
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.textTiktokID}>{tiktokID}</Text>
        </View>
        <View>
          <Text style={styles.textVotes}>{votes}</Text>
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
  imageContainer: {
    width: '100%',
    height: 250,
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
