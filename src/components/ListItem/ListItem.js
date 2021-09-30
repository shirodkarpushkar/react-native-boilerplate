import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
const listItem = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.listItem}>
      <Image source={props.src} style={styles.image} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 1,
    marginBottom: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    margin: 8,
    width: 30,
    height: 30,
  },
});

export default listItem;
