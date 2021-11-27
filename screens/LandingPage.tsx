import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
// import AppsName from './shared/AppsName';

import logo from '../assets/logo/logo.png';
import AnimatedIntrance from '../components/shared/AnimatedIntrance';
import Buttons from '../components/shared/Buttons';

import Icons from 'react-native-vector-icons/Fontisto';

const LandingPage: React.FC = ({navigation}: any) => {
  const logoAniationDuration = 1000;

  const handleStart = () => {
    navigation.navigate('Swiping');
  };

  const handleLEaderBoard = () => {
    navigation.navigate('LeaderBoard');
  };

  return (
    <View style={styles.container}>
      {/* <AppsName /> */}
      <AnimatedIntrance transformPosition="up" duration={logoAniationDuration}>
        <Image source={logo} style={styles.image} />
      </AnimatedIntrance>
      <AnimatedIntrance delay={logoAniationDuration} toTransform={false}>
        <View style={styles.buttonContainer}>
          <Buttons title="Get Started" onClick={handleStart} />
          <View style={styles.margin}>
            <Buttons
              title={<Icons name="area-chart" size={20} />}
              width={50}
              onClick={handleLEaderBoard}
            />
          </View>
        </View>
      </AnimatedIntrance>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FF5761',
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  margin: {
    marginLeft: 80,
  },
});
export default LandingPage;
