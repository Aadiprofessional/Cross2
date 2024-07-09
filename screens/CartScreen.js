import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OtherScreen3 = () => {
  return (
    <View style={styles.container}>
      <Text>Other Screen 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OtherScreen3;
