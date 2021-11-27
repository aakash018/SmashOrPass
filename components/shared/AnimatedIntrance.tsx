import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

interface Props {
  styles?: any;
  toTransform?: boolean;
  transformPosition?: 'up' | 'side';
  delay?: number;
  duration?: number;
}

const AnimatedIntrance: React.FC<Props> = ({
  children,
  styles,
  duration = 1000,
  delay = 0,
  toTransform = true,
  transformPosition,
}) => {
  const fadeIN = useRef(new Animated.Value(0)).current;
  const transform = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    if (toTransform) {
      Animated.timing(transform, {
        toValue: 0,
        duration: duration,
        delay: delay,
        useNativeDriver: true,
      }).start();
    }
    Animated.timing(fadeIN, {
      toValue: 1,
      duration: duration,
      delay: delay,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...styles,
        opacity: fadeIN,
        transform: [
          {
            translateX: transformPosition === 'side' ? transform : 0,
          },
          {
            translateY: transformPosition === 'up' ? transform : 0,
          },
        ],
      }}>
      {children}
    </Animated.View>
  );
};

export default AnimatedIntrance;
