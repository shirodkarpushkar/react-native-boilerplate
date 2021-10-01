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
        <Text>Place: {place.value}</Text>
      </View>
    );
  }
  return (
    <Modal visible={!!place} animationType="slide">
      <View style={styles.modalContainer}>
        <View>{content}</View>
        <View style={styles.buttons}>
          <Button
            title="Delete"
            color="red"
            onPress={onDelete}
            style={styles.deleteBtn}
          />
          <TouchableOpacity>
            <Icon size={30} name="ios-trash" color="red" />
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
  },
  image: {
    margin: 5,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
  },
  deleteBtn: {
    marginRight: 10,
  },
  modalContainer: {
    margin: 10,
    backgroundColor: '#fff',
    // width: "100%",
    // height: "100%",
  },
});

export default PlaceDetails;
