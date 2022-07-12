import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';

enableScreens();

const rootReducer = combineReducers({
    meals:mealsReducer,
});

const store = createStore(rootReducer);
 
const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'comforter-brush': require('./assets/fonts/ComforterBrush-Regular.ttf'),
        'monton-regular': require('./assets/fonts/Monoton-Regular.ttf'),
        'merienda': require('./assets/fonts/Merienda-Bold.ttf'),
        'cabin': require('./assets/fonts/CabinSketch-Regular.ttf'),
        'great': require('./assets/fonts/FrederickatheGreat-Regular.ttf'),
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return ( <AppLoading 
            startAsync = { fetchFonts }
            onFinish = {
                () => setFontLoaded(true)
            }
            onError = { err => console.log(err) }
            />
        );
    }

    return (
        <Provider store={store}>
       <MealsNavigator/>  
       </Provider>
          );
}