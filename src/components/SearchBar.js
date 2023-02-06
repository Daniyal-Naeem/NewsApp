import {View,TextInput,StyleSheet} from "react-native";
import React from "react";

const SearchBar = ({...props})=>{
    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Search"
                style={styles.input}
                value={props.search}
                onChangeText={props.searchFilter}
            
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    input:{
        backgroundColor:"#fff",
        padding: 10,
        borderRadius: 10,
        color: "#000",
        borderWidth: 1,
    }
});