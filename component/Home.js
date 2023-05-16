import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import popularData from '../assest/data/popularData';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../assest/colors/colors';

MaterialCommunityIcon.loadFont();
Feather.loadFont();
export default function Home({ navigation }) {
    return (
     <View style={styles.container}>
        <View>
          
            
        </View>
            <ScrollView contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <SafeAreaView>
       <View style={styles.popularWrapper}>

                        

                        {popularData.map(item => (
                            <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Details', {

                                item: item,
                            })}>
                                    
                                    <View style={styles.popularCardRight}>
                                
                                        <Image source={item.image} style={styles.popularcardImage} />
                                        <View >
                                            <View style={{flexDirection:'row',marginLeft:5}}>
                                        <MaterialCommunityIcon name='account-circle' size={30} color='#212121'/>
                                        <Text style={styles.text}>it's so bad</Text>
                                        </View>
                                        <Text  style={styles.text1}>  10k sbscriber</Text>
                                         
                                        </View>
                                        
                                    </View>
                            </TouchableOpacity>

                        ))}
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flex:2,
        flexDirection: 'row',
        justifyContent:'space-around',
    
        paddingTop: 20,
        alignItems: 'center',
        marginBottom:20
    },
    homeicon:{
        
    },
    popularWrapper: {
        paddingHorizontal: 10,
    },
    populatTitle: {
        fontFamily: 'Monttserrat-semiBold',
        fontSize: 20,
        textAlign:'center',
        color:'black'
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',


    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,

    },
    popularCardWrapper: {
        
        backgroundColor: colors.background,
        borderRadius: 30,
        padding:1,
        paddingLeft: 1,
        flexDirection: 'column',
        overflow: 'hidden',
    
    },
    popularTitleWrapper: {
        marginTop: 20,
    },
   
    popularTitleWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,

    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },

    rating: {
        fontFamily: 'Montesrrat-Bold',
        fontSize: 12,
        color: colors.textDark,
        marginLeft: 5,

    },
    popularCardRight: {
        marginBottom:15,
    },
    popularcardImage: {
        width: '100%',
        height: 200,
        
        borderRadius:2,
        marginBottom:10,
    
        alignItems:'center',
        justifyContent:'space-around'
    
    
    },
    HeaderIcon:{
      height:50,
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-around',
      
      },

      text:{
        flexDirection:'row',
        color:colors.textDark,
        fontSize:18,
        marginLeft:5,
    
      },
      text1:{
        color:colors.textLight,
        marginLeft:25
      },
      text2:{
        color:colors.textLight,
        marginLeft:200
      }
    

})
