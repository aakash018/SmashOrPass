import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  index: number;
  name: string;
  votes: number;
}

const LeaderBoardNameHolder: React.FC<Props> = ({index, name, votes}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{index}.</Text>
      <Text style={[styles.text, styles.textName]}>{name}</Text>
      <Text style={styles.text}>{votes}</Text>
    </View>
  );
};

export default LeaderBoardNameHolder;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '90%',
    height: 50,

    padding: 10,

    marginTop: 5,
  },

  text: {
    fontSize: 17,
    fontFamily: 'Poppins',
    color: 'black',
  },

  textName: {
    marginLeft: 50,
    flex: 1,
    textAlign: 'left',
  },
});
