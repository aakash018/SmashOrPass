import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  width?: number;
  title: any;
  bgColor?: string;
  height?: number;
  onClick?: () => any;
}

const Buttons: React.FC<Props> = ({onClick, height, width, bgColor, title}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View
        style={{
          backgroundColor: bgColor || '#DDDDDD',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 1000,
          width: width || 150,
          height: height || 50,
          padding: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontFamily: 'Poppins',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Buttons;
