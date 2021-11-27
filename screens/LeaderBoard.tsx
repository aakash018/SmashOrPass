import LeaderBoardNameHolder from '../components/shared/LeaderBoardNameHolder';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import LeaderBoardTopGirl from '../components/LeaderBoardTopGirl';

const LeaderBoard: React.FC = () => {
  return (
    <View style={styles.container}>
      <LeaderBoardTopGirl />
      <View style={styles.leaderBoardContainer}>
        <LeaderBoardNameHolder index={2} name={'Prema Tamang'} votes={325} />
        <LeaderBoardNameHolder index={3} name={'Prema Tamang'} votes={325} />
        <LeaderBoardNameHolder index={4} name={'Prema Tamang'} votes={325} />
        <LeaderBoardNameHolder index={5} name={'Prema Tamang'} votes={325} />
        <LeaderBoardNameHolder index={6} name={'Prema Tamang'} votes={325} />
      </View>
    </View>
  );
};

export default LeaderBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  leaderBoardContainer: {
    display: 'flex',
    width: '100%',

    alignItems: 'center',
    marginTop: 30,
  },
});
