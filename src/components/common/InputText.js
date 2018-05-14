/**
 * Created by ravitej on 5/3/18.
 */
import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputText = ({label, value, onChangeText, placeHolder, isPasswordText = false})=>{
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput autoCorrect={false}
                 autoCapitalize={false}
                 secureTextEntry={isPasswordText}
                 placeholder={placeHolder}
                 style={inputStyle} value={value} onChangeText={onChangeText} />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    lineHeight: 24,
    flex: 3,
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5
  },
  labelStyle: {
    fontSize: 14,
    color: '#888',
    flex: 1
  },
  containerStyle:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    height: 40
  }
}

export {InputText}
