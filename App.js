
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import placeImg from './src/assets/sus3.jpg';
import PlaceDetails from './src/components/PlaceDetails';
export default class App extends React.Component {
  state = {
    placeName: '',
    places: [],
    place: null,
  };

  onPlaceChange = value => {
    this.setState({
      placeName: value,
    });
  };
  onSubmit = e => {
    console.log('🚀 ~ file: App.js ~ onSubmit ~ e', e);
    if (this.state.placeName.trim()) {
      this.setState({
        places: [
          ...this.state.places,
          {
            key: Date.now().toString(),
            value: this.state.placeName,
            src: placeImg,
          },
        ],
      });
      console.log('places==>', this.state.places);
    }
  };
  onListItemPressed = (place, i) => {
    // alert(`Item pressed #${i} : ${JSON.stringify(place)}`);
    this.setState({place});
  };
  onDelete = e => {
    const places = this.state.places;
    const filteredPlaces = places.filter(el => el.key !== this.state.place.key);
    this.setState({
      places: [...filteredPlaces],
      place: null,
    });
  };
  onClose = e => {
    this.setState({
      place: null,
    });
  };

  render() {
    const {places} = this.state;
    const placesList = (
      <FlatList
        style={styles.listContainer}
        data={places}
        renderItem={({item, index}) => (
          <ListItem
            src={item.src}
            placeName={item.value}
            onPress={() => this.onListItemPressed(item, index)}
          />
        )}
      />
    );

    return (
      <View style={styles.container}>
        <PlaceDetails
          place={this.state.place}
          onDelete={this.onDelete}
          onClose={this.onClose}
        />
        <Text>Input here</Text>
        <View style={styles.formgroup}>
          <TextInput
            style={styles.forminput}
            value={this.state.placeName}
            onChangeText={this.onPlaceChange}
            placeholder="awesome place"
          />
          <Button
            style={styles.button}
            title=" + Add "
            onPress={this.onSubmit}
          />
        </View>
        <Text>Your Places</Text>
        {placesList}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forminput: {
    flex: 1,
    width: 300,
    borderBottomWidth: 1,
    height: 35,
    borderBottomColor: '#eee',
  },

  formgroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  listContainer: {
    width: '100%',
  },
});
