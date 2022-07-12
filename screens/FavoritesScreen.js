import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/sample-data';
import HeaderButton from '../components/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import FilterScreen from './FilterScreen';
import Colors from '../constants/Colors'
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import * as Device from 'expo-device';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

const FavoritesScreen = (props) => {

const unique = Device.supportedCpuArchitectures;
    const favMeals = useSelector(state => state.meals.favoriteMeals);
    if (favMeals.length === 0 || !favMeals){
      return <View style={styles.content}>
        <DefaultText>No Favorite Items found. Add some items to it!!</DefaultText>
        <DefaultText>{unique}</DefaultText>
        
      </View>
    }

    return (
        <MealList listData={favMeals} navigation={props.navigation}/>
    );
};

FavoritesScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Your Favorites',
      headerLeft:() => <HeaderButtons HeaderButtonComponent={HeaderButton}>
         <Item title='Menu' iconName='ios-menu' onPress={() =>{
           navData.navigation.toggleDrawer();
         }}/>
      </HeaderButtons>,
      headerStyle: {
        backgroundColor:Platform.OS === 'android' ? Colors.front : '',   
      },
      headerTintColor:Platform.OS === 'android' ? 'whitesmoke' : Colors.primary
  };};


const styles = StyleSheet.create({
  content:{
       flex: 1,
       justifyContent: 'center',
       alignItems:'center',
   },
});

export default FavoritesScreen
