import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Home from '@Screen/Home';
import NewsDetail from '../screens/NewsDetail';
import Notification from '@Screen/Notification';
import CategoryNews from '../screens/CategoryNews';
import { moderateScale } from 'react-native-size-matters';

const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
       <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#062743',
                inactiveTintColor: '#9ea9b3',
                tabStyle: {
                    marginVertical: moderateScale(10)
                },
                showLabel: false
            }}
       >
           <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Icon name="home-sharp" size={size} color={color} />
                    )
                }}

                />

            <Tab.Screen 
                name="NewsDetail" 
                component={NewsDetail} 
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Icon name="newspaper" size={size} color={color} />
                    )
                }}

            />


            <Tab.Screen 
                name="Notification" 
                component={Notification} 
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Icon name="search" size={size} color={color} />
                    )
                }}

            />
            <Tab.Screen 
                    name="CategoryNews" 
                    component={CategoryNews} 
                    options={{
                        tabBarIcon: ({size, color}) => (
                            <Icon name="list-sharp" size={size} color={color} />
                        )
                    }}

            />
       </Tab.Navigator>
    )
}

export default Tabs;
