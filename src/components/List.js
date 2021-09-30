export const placesList = (props) => (
  <FlatList
    places={places}
    renderItem={({ item, index }) => (
      <ListItem
        placeName={item.value}
        onPress={() => this.onListItemPressed(item, index)}
      ></ListItem>
    )}
  ></FlatList>
);
