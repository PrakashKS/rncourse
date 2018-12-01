import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';

import ListItem from "../ListItem/ListItem";
//import ListItem from "./src/components/ListItem/ListItem";


const placeList = props => {
   // const placesOutput = props.places.map((place, i) => (
        
    //  ));
    return <FlatList style={styles.listContainer}
      data={props.places}
      renderItem = {(info) => (<ListItem placeName={info.item.name} 
        placeImage = {info.item.image}
        onItemPressed={() => props.onItemDeleted(info.item.key)}
        />)
    }></FlatList>;
    
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;
