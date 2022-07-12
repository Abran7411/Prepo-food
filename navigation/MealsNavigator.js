import React from 'react'
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import FilterScreen from '../screens/FilterScreen'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.front : ''
    },
    headerTitleStyle: {
        fontFamily: 'great',
        fontSize: 35
    },
    headerTintColor: Platform.OS === 'android' ? 'whitesmoke' : Colors.primary,
    headerTitle: 'Favorites',
}



const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoriesMeals: {
        screen: CategoriesMealsScreen,
    },
    MealDetail: {
        screen: MealDetailScreen,
    }
}, {

    defaultNavigationOptions: defaultStackNavOptions
});


const FavNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
    },
    MealDetail: {
        screen: MealDetailScreen,
    }
}, {

    defaultNavigationOptions: defaultStackNavOptions
})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name = 'ios-restaurant'
                size = { 25 }
                color = { tabInfo.tintColor }
                />
            },
            tabBarColor: Colors.primary,
        }
    },

    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name = 'ios-star'
                size = { 25 }
                color = { tabInfo.tintColor }
                />
            },
            tabBarColor: Colors.front,
        }
    },
}

const MealsFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.primary,
        shifting: true,
    }) : createBottomTabNavigator(
        tabScreenConfig, {
            tabBarOptions: {
                activeTintColor: Colors.accent

            }
        });

const filterNavigator = createStackNavigator({
    Filters: {
        screen: FilterScreen,
    }
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const MainNavigator = createDrawerNavigator({
    Food: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Foods',
            labelStyle: {
                paddingVertical: 25
            }
        },
    },
    Filters: {
        screen: filterNavigator,
        navigationOptions: {

        },
    },
}, {
    contentOptions: {
        activeTintColor: Colors.front,
        labelStyle: {
            paddingVertical: 20,
            fontSize: 16,
        }
    }
});

export default createAppContainer(MainNavigator);