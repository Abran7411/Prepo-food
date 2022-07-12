import React from 'react'
import { TouchableNativeFeedback,TouchableOpacity, View, Text, StyleSheet, Platform} from 'react-native'
const CategoryGridTile = (props) => {
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.grid}>
        <TouchableCmp activeOpacity={0.6} 
        style={{flex: 1}}
        onPress={props.onSelect}>
      <View style={{...styles.container, ...{backgroundColor: props.color}}}>
        <Text style={styles.gridtext}>{props.title}</Text>
      </View>
      </TouchableCmp>
      </View>
    ); 
};

const styles = StyleSheet.create({
    grid:{
        flex:1,
        margin:15,
        height:150,
        elevation:5,
        borderRadius:10,
        overflow:'hidden'
      },
      container:{
          flex:1,
          borderRadius:10,
          shadowColor:'black',
          shadowOpacity:0.75,
          shadowOffset:{ width:0,height: 2 },
          shadowRadius: 10,
          padding: 10,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          fontWeight:'bold'
      },
      gridtext:{
          fontFamily:'cabin',
          fontSize:20,  
      }
}); 

export default CategoryGridTile;
