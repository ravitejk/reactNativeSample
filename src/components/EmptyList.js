/**
 * Created by ravitej on 5/14/18.
 */
import React from 'react';
import { View, Text, Image } from 'react-native';
import {Card, Button, CardSection} from './common';

export default EmptyList = () =>{
  const {containerStyle, imageStyle, textStyle, textStyle2, buttonStyle } = styles;
  return(
    <View style={containerStyle}>
      <Image source={require('./images/wishlist.png')} style={imageStyle}/>
      <Text style={textStyle}>Your Wish List is emtpy :(</Text>
      <Text style={textStyle2}>Let us help you save for some of your favorites.</Text>

        <Button style={buttonStyle} buttonText='Add Item!!' onPress={()=> console.log('pressed')}/>

    </View>
  );
}

const styles={
  containerStyle:{
    alignItems:'center',
    justifyContent: 'center',
    flex:1
  },
  imageStyle:{
    width:60,
    height:60
  },
  textStyle:{
    fontSize: 16,
    alignItems:'center',
    textAlign: 'center',
    padding:15
  },
  textStyle2:{
    fontSize: 14,
    alignItems:'center',
    textAlign: 'center',
    paddingBottom:10
  },
  buttonStyle:{
    width: 100,
    height:44
  }
};