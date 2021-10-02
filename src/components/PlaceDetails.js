import React from 'react';
import {
  Modal,
  View,
  Button,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const PlaceDetails = ({place, onDelete, onClose}) => {
  let content = null;
  if (place) {
    content = (
      <View style={styles.content}>
        <Image source={place.src} style={styles.image} />
        <Text style={styles.text}>Place: {place.value}</Text>
      </View>
    );
  }
  return (
    <Modal visible={!!place} animationType="slide">
      <View style={styles.modalContainer}>
        <View>{content}</View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={onDelete}>
            <View style={styles.deleteBtn}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
          <Button onPress={onClose} title="Close" />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  content: {
    backgroundColor: '#eee',
    fontFamily: 'OpenSans-Bold',
  },
  text: {
    fontSize: 15,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    margin: 5,
  },
  image: {
    margin: 5,
    
    display: 'flex',
    justifyContent: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
  },
  deleteBtn: {
    alignItems: 'center',
  },
  modalContainer: {
    margin: 10,
    backgroundColor: '#fff',
    // width: "100%",
    // height: "100%",
  },
});

export default PlaceDetails;
