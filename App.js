
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Button, TextInput, View} from 'react-native';

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail"


export default class App extends React.Component {


    state = {
    places : []
    };

    placeAddedHandler = placeName => {
      this.setState(prevState => {
        return {
          places: prevState.places.concat({ key:Math.random(),name: placeName,
            image:{
            uri:"https://5.imimg.com/data5/ST/AV/MY-15610157/lord-shiva-laminated-photo-500x500.jpg"
          
        }})
        };
      });
    };

    placeDeletedHandler = key => {
      this.setState(prevState => {
        return {
          places: prevState.places.filter(place => {return place.key !== key;})
        };
      });
    };

    render() {
      return (
        <View style={styles.container}>
          <PlaceInput onPlaceAdded={this.placeAddedHandler} />
          <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  inputContainer: {
      //flex: 1,
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    placeInput:{width:"70%"},
    placeButton:{width: "30%"},
    listContainer:{width: "90%"},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});
