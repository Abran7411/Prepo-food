import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import DefaultText from './DefaultText';

const MealItem = (props) => {
    return (
        <View style={styles.mealitem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
             <View style={{...styles.mealrow, ...styles.mealHeader}}>
                 <ImageBackground source={{uri : props.image}} style={styles.bgimage}>
                 <View style={styles.titleContainer}>
                     <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                 </View>
                 </ImageBackground>
             </View>
             <View style={{...styles.mealrow, ...styles.mealDetail}}>
                 <DefaultText style={styles.details}>{props.duration}mins</DefaultText>
                 <DefaultText style={styles.details}>{props.complexity.toUpperCase()}</DefaultText>
                 <DefaultText style={styles.details}>{props.affordability.toUpperCase()}</DefaultText>
             </View>
        </View>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealitem:{
        height:200,
        width:'90%',
        backgroundColor:'#F9DDDA',
        marginHorizontal:16,
        marginVertical:10,
        borderRadius:10,
        overflow:'hidden'
    },
    mealrow:{
      flexDirection: 'row',
    },
    mealHeader:{
        height: '90%',
    },
    mealDetail:{
      paddingHorizontal:10,
      justifyContent: 'space-between',
      alignItems:'center'
    },
    bgimage:{
       width:'100%',
       height:'100%', 
       justifyContent:'flex-end'
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,
    },
    title:{
        fontFamily:'cabin',
        fontSize:20,
        color:'whitesmoke',
        textAlign:'center',
        
    },

});

export default MealItem;
