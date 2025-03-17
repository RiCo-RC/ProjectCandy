import { useEffect, useState } from "react";
import { Animated, Text, View } from "react-native";

import styles from "@styles/main";

const ProgressBar = () => {
  const [progress] = useState(new Animated.Value(0));
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false, // Does not support width, so `false`.
    }).start();

    const progressListener = progress.addListener(({ value }) => {
      setPercentage(Math.round(value * 100));
    });

    return () => {
      progress.removeListener(progressListener);
    };
  }, [progress]);

  return (
    <View style={[styles.viewBase, styles.progressBarView]}>
      <Animated.View
        style={[
          styles.progressBarViewAnimated,
          {
            width: progress.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "100%"],
            }),
          },
        ]}
      ></Animated.View>
      <Text style={[styles.progressBarTextValue]}>
        {percentage}%
      </Text>
    </View>
  );
};

export default ProgressBar;
