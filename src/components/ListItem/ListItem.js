import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback,TouchableOpacity, Image
,TouchableMixin} from 'react-native';

const listItem = (props) => (
    // <TouchableWithoutFeedback onPress={props.onItemPressed}>
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem} >
        <Image resizeMode="cover" source={props.placeImage} style={styles.placeImage} />
        <Image resizeMode="center" source={props.placeImage} style={styles.placeImage} />
        <Image resizeMode="repeat" source={props.placeImage} style={styles.placeImage} />
        <Image resizeMode="stretch" source={props.placeImage} style={styles.placeImage} />
        <Image resizeMode="contain" source={props.placeImage} style={styles.placeImage} />
        <Image source={props.placeImage} style={styles.placeImage} />
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
    // </TouchableWithoutFeedback>

);

const styles= StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom:5,
        padding : 10,
        backgroundColor : "#eee",
        flexDirection : "row",
        alignItems : "center"

    },
    placeImage :{
        marginRight: 8,
        height: 50,
        width : 50
    }
});

export default listItem;

