import React,{useEffect, useState} from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Button,
    SafeAreaView,
    FlatList
} from 'react-native';
import SearchHeader from 'react-native-search-header';
import Article from '../../components/Artical';

const DEVICE_WIDTH = Dimensions.get(`window`).width;
import axios from "axios";

const Notification = ({...props}) => {

    useEffect(() => {
        console.log("props ", props);
    }, []);

    const [articles,setArticles] = useState([]);



    const searchHeaderRef = React.useRef(null);
    return (
        <View style = { styles.container }>
           <View style={{marginTop:10}}><Text> Search </Text></View> 
        <View style = { styles.status }/>
        <View style = { styles.header }>
            <Button
                title = 'Search'
                color = '#4169E1'
                onPress = {() => searchHeaderRef.current.show()}
            />
        </View>
        <SearchHeader
            ref = { searchHeaderRef }
            placeholder = 'Search...'
            placeholderColor = 'gray'
            pinnedSuggestions = {[ `react-native-search-header`, `react-native`, `javascript` ]}
            onClear = {() => {
                console.log(`Clearing input!`);
            }}
            onGetAutocompletions = {(text) => {
                if (text) {
                    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=Vg0C0KmD5NRHKurRSJuBES5M9J3RilKo`)
                    .then( (response) =>{
                        // handle success
                        setArticles(response.data.results);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                } 
            }}
        />
        <View style = { styles.button }>
            <Button
                title = 'Open Search'
                color = 'black'
                onPress = {() => searchHeaderRef.current.show()}
            />
        </View>
   <View style={{marginTop:30}}>
   <Button
                title = 'Clear All'
                color = 'black'
                onPress = {() => {
                    searchHeaderRef.current.clear();
                }}
            />
   </View>
   <SafeAreaView>
   <FlatList
                data={articles}
                renderItem = {({item}) =>
                    <Article
                        urlToImage = {item.multimedia.url}
                        title = {item.title}
                        description = {item.abstract}
                        author = {item.byline}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.title}
                        url={item.url}
                    />
                       
                }
                keyExtractor = {(item) => item.title}
            />
   </SafeAreaView>
         
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        width:'100%'
    },
    status: {
        zIndex: 10,
        elevation: 2,
        width: DEVICE_WIDTH,
        height: 21,
        backgroundColor: '#fff',
        marginTop:20

    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'80%',
        height: 56,
        marginBottom: 6,
        backgroundColor: '#fff'
    },

})

export default Notification;
