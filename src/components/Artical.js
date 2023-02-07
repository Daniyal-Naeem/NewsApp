import React,{ useRef } from "react";
import {View,StyleSheet,Text,TouchableOpacity} from "react-native";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
const Article = ({...props}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('NewsDetail',{URL:props.url})}>
            {/* image */}
            {/* <Image source={{
                uri: props.url }}
            style={styles.image}
            /> */}

            <View style={{padding: 10}}>


        {/*    title */}
            <Text numberOfLines={1} style={styles.title}>{props.title}</Text>

        {/*    description */}
            <Text style={styles.description} numberOfLines={3}>
                {props.description}
            </Text>


        {/*     source */}
            <View style={{marginTop: 10}}>
                <Text>source: <Text style={styles.source}>{props.sourceName}</Text></Text>
            </View>
            <View style={styles.data}>
                <Text style={styles.heading}><Text numberOfLines={3} style={styles.author}>{props.author}</Text></Text>
                <Text style={styles.date}>Date: {moment(props.publishedAt).format("MMM Do YY") }</Text>
            </View>
            </View>
        </TouchableOpacity>
    )
}

export default Article;

const styles = StyleSheet.create({
    container:{
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        shadowOpacity: 0.5,
        borderWidth: 1,
        backgroundColor: "#fff",
        marginTop: 10
    },
    heading:{
        maxWidth:220
    },
    image:{
        height: 10,
        width: "10%",
    },
    title:{
        fontSize: 16,
        fontWeight: "600",
        marginTop: 5
    },
    description:{
        fontSize: 12,
        fontWeight: "400",
        marginTop: 5
    },
    data:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
       
    },
    author:{
        fontWeight: "bold",
        fontSize: 15
    },
    date:{
        fontWeight: "bold",
        color: "#e63946",
        fontSize: 12
    },
    source:{
        color: "#e63946",
        fontWeight: "bold",
        fontSize: 12
    }
})