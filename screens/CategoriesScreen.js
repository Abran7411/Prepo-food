import React from 'react';
import { StyleSheet ,FlatList, Platform} from 'react-native';
import HeaderButton from '../components/HeaderButton'
import { CATEGORIES } from '../data/sample-data'
import Colors from '../constants/Colors'
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return(
      <CategoryGridTile title={itemData.item.title}
        color={itemData.item.color} 
        onSelect={() => {
        props.navigation.navigate(
          {routeName: 'CategoriesMeals',
        params: {
          categoryId: itemData.item.id
        }}
        );
      }}/>
    );
  }
  
  return (
    <FlatList keyExtractor={(item, index) => item.id} 
      data={CATEGORIES} 
      renderItem={renderGridItem}
      numColumns={2}/>
  );
};

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Food Categories',
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
       <Item title='Menu' iconName='ios-menu' onPress={() =>{
         navData.navigation.toggleDrawer();
       }}/>
    </HeaderButtons>,
    headerStyle: {
      backgroundColor:Platform.OS === 'android' ? Colors.primary : '',   
    },
    headerTintColor:Platform.OS === 'android' ? 'whitesmoke' : Colors.primary
};};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize:20,
    marginBottom:10
   },
   
});

export default CategoriesScreen;
