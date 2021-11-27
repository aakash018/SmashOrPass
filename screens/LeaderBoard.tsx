import LeaderBoardNameHolder from '../components/shared/LeaderBoardNameHolder';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import LeaderBoardTopGirl from '../components/LeaderBoardTopGirl';
import axios from 'axios';
import {Profiles} from '../global/profiles';

interface Leaderboard {
  id: string;
  tiktokID: string;
  votes: number;
}

const LeaderBoard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<Leaderboard[]>([]);
  const [topProfile, setTopProfile] = useState<Profiles>();

  useEffect(() => {
    (async () => {
      const resleaderboard = await axios.get<Leaderboard[]>(
        'http://10.0.2.2:5000/leaderboard',
      );
      setLeaderboard(resleaderboard.data);
      const topGirlClientProfile = Profiles.filter(
        profile => profile.tiktokID === resleaderboard.data[0].tiktokID,
      );
      setTopProfile(topGirlClientProfile[0]);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {topProfile && leaderboard.length !== 0 && (
        <LeaderBoardTopGirl
          img={topProfile.img}
          name={topProfile.name}
          tiktokID={topProfile.tiktokID}
          votes={leaderboard[0].votes}
        />
      )}

      <View style={styles.leaderBoardContainer}>
        {leaderboard.length !== 0 &&
          leaderboard.map((profile, i) => (
            <LeaderBoardNameHolder
              index={i}
              name={`@${profile.tiktokID}`}
              votes={profile.votes}
            />
          ))}
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
