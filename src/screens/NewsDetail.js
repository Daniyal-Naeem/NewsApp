import React, { useState, useRef } from "react";
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    ActivityIndicator,
 
} from "react-native";
import WebView from "react-native-webview";
import {useRoute} from '@react-navigation/native';

const NewsDetail = () => {
    const {params} = useRoute();
    const [change, setOnChange] = useState(false);
    const webviewRef = useRef(null);
   
    const scripts = `
document.body.style.backgroundColor = 'purple';
document.querySelector("h1").style.color = 'green';
document.querySelector("h4").style.color = 'green';
`;
    setTimeout(() => {
        webviewRef.current.injectJavaScript(change == true ? scripts : null);
    });
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.flexContainer}>
                <WebView
                    source={{ uri: params?.URL }}
                    startInLoadingState={true}
                    renderLoading={() => (
                        <ActivityIndicator
                            color="white"
                            size="large"
                            style={styles.flexContainer}
                        />
                    )}
                    ref={webviewRef}
               
                    javaScriptEnabled={true}
                />
            
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
    tabBarContainer: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#000",
    },
    button: {
        color: "white",
        fontSize: 25,
    },
});

export default NewsDetail;