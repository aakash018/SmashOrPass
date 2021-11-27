import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AppsName = () => {
  return (
    <View>
      <Text style={styles.text}>App's Name</Text>
    </View>
  );
};

export default AppsName;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontFamily: 'Poppins',
    color: '#DDDDDD',
  },
});
