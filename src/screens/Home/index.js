import { connect } from 'react-redux'
import React, {useEffect, useState} from "react";
import {SafeAreaView, FlatList,StyleSheet, View, Text} from "react-native";
import Article from "../../components/Artical";
import axios from "axios";


const Home = ({...props}) => {

    useEffect(() => {
        console.log("props ", props);
    }, []);

    const [articles,setArticles] = useState([]);

    const getNews = () => {
        axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Vg0C0KmD5NRHKurRSJuBES5M9J3RilKo')
            .then( (response) =>{
                // handle success
                setArticles(response.data.results);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(() => {
        getNews();
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{alignItems:'center', padding:10}}><Text style={{fontSize:16, fontWeight:'bold'}}>Top Stories</Text></View>
            
            <FlatList
                data={articles}
                renderItem = {({item}) =>
                    <Article
                        // urlToImage = {item.multimedia.url}
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
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn,
    }
}

const mapDispatchToProps = (disptach) => { return {} }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);