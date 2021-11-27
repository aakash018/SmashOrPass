import React from 'react';
import {Image, StyleSheet, useWindowDimensions, View} from 'react-native';

import InfoTag from './InfoTag';

interface Props {
  source: any;
  name: string;
  tiktokID: string;
}

const GirlsCard: React.FC<Props> = ({source, name, tiktokID}) => {
  const window = useWindowDimensions();

  return (
    <View style={[styles.container, {height: window.height - 10}]}>
      <Image source={source} style={styles.image} />
      <InfoTag name={name} tiktokID={tiktokID} />
    </View>
  );
};

export default GirlsCard;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 400,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
