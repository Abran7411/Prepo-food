import React , {useEffect,useCallback} from 'react'
import {View, Text,Image, StyleSheet,Button} from 'react-native'
import { MEALS } from '../data/sample-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import { ScrollView } from 'react-native-gesture-handler';
import DefaultText from '../components/DefaultText';
// import MainButton from '../components/MainButton'
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/foods';


const ListItem = props => {
    return (
        <View style={styles.listitem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
}


const MealDetailScreen = (props) => {
    const availableMeals = useSelector(state => state.meals.meals);

    const mealId = props.navigation.getParam('mealId');

    const currentMealIsFavorite = useSelector(state => 
        state.meals.favoriteMeals.some(meal => meal.id === mealId)
        );

    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteDispatch = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);
    
    useEffect(() => {
        props.navigation.setParams({togglefav: toggleFavoriteDispatch});
    }, [toggleFavoriteDispatch]);

    useEffect(() => {
        props.navigation.setParams({isFav:currentMealIsFavorite});
    },[currentMealIsFavorite]);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                 <DefaultText>{selectedMeal.duration}mins</DefaultText>
                 <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                 <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
             </View> 
             <Text style={styles.textTitle}>Ingredients</Text>
             {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
             <Text style={styles.textTitle}>Steps</Text>
             {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}

            <Button title='Go Back' color='grey' onPress={() => { props.navigation.popToTop(); }}/>
        
        </ScrollView>
        
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    // const mealId = navigationData.navigation.getParam('mealId');
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggle = navigationData.navigation.getParam('togglefav');
    const isFavorite = navigationData.navigation.getParam('isFav');
    // const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: mealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
              title='Favorite' 
              iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} 
              onPress={toggle}
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
   image:{
     width:'100%',
     height:200,
   },
   details:{
       flexDirection:'row',
       padding:10,
       justifyContent:'space-around'
   },
   textTitle:{
       fontFamily:'cabin',
       fontSize:22,
       textAlign:'center',
   },
   listitem:{
       marginVertical:10,
       marginHorizontal:20,
       borderColor:'#ccc',
       borderWidth:1,
       padding:10,
   },
});

export default MealDetailScreen;
