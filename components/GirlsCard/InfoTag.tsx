import {primaryGreen, themeColor} from '../../global/globals';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  name: string;
  tiktokID: string;
}

const InfoTag: React.FC<Props> = ({name, tiktokID}) => {
  return (
    <LinearGradient
      colors={[
        'rgba(101, 101, 101, 0)',
        'rgba(0, 0, 0, 0.7)',
        'rgba(0, 0, 0, 1)',
      ]}
      style={styles.container}>
      <View style={styles.info}>
        <Text style={[styles.textMain]}>{name}</Text>
        <Text style={styles.textTiktokID}>@{tiktokID}</Text>
        <View style={styles.swiperButtonContainer}>
          <Pressable style={[styles.swiperButton, styles.pass]}>
            <Icons name="heart-broken" size={26} color="#DDDDDD" />
          </Pressable>
          <Pressable style={[styles.swiperButton, styles.smash]}>
            <Icon name="heart" size={26} color="#DDDDDD" />
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

export default InfoTag;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
  },
  info: {
    padding: 20,
    marginTop: 80,
  },
  textMain: {
    fontSize: 24,
    fontWeight: '200',
    color: '#DDDDDD',
    fontFamily: 'Poppins',
  },
  textTiktokID: {
    color: '#DDDDDD',
    fontFamily: 'Poppins',
    fontSize: 15,
    marginTop: -10,
  },

  swiperButtonContainer: {
    width: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
  },

  swiperButton: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pass: {
    backgroundColor: themeColor,
  },
  smash: {
    backgroundColor: primaryGreen,
    marginLeft: 20,
  },
});
