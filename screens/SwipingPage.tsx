import GirlsCard from '../components/GirlsCard/GirlsCard';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Profiles} from '../global/profiles';

import TinderCard from 'react-tinder-card';
import axios from 'axios';
import {getRandom} from '../utils/randomArray';
import {themeColor} from '../global/globals';

type Directions = 'up' | 'down' | 'left' | 'right';

const SwipingPage: React.FC = () => {
  const [tenRandomProfiles, setProfiles] = useState<Profiles[]>([]);

  useEffect(() => {
    setProfiles(getRandom(Profiles, 10));
  }, []);

  const handleSwip = async (dir: Directions, tiktokID: string) => {
    const payload = {
      dir,
      tiktokID,
    };

    try {
      const res = await axios.post('http://10.0.2.2:5000/swiper', payload);
      console.log(res.data);
    } catch (e) {
      console.log('ERROR SWIPING');
      console.log(e);
    }
  };

  return (
    <View style={styles.contaienr}>
      {tenRandomProfiles.length !== 0 ? (
        tenRandomProfiles.map((profile, i) => (
          <TinderCard
            key={i}
            onSwipe={dir => handleSwip(dir, profile.tiktokID)}>
            <GirlsCard
              name={profile.name}
              source={profile.img}
              tiktokID={profile.tiktokID}
            />
          </TinderCard>
        ))
      ) : (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>LOADING</Text>
        </View>
      )}
    </View>
  );
};

export default SwipingPage;

const styles = StyleSheet.create({
  contaienr: {
    position: 'relative',
  },
  loadingContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontFamily: 'Poppins',
    color: themeColor,
    fontSize: 26,
  },
});
