/**
 * Created by ravitej on 5/3/18.
 */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({buttonText, style, onPress}) => {
  const {textStyle } = styles;
  const buttonStyle = style? style: styles.buttonStyle;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    flex: 1,
    borderColor: '#007aff',
    borderRadius: 5,
    borderWidth:1,
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 14,
    color: '#007aff',
    fontWeight: '600',
    alignSelf: 'center',
    paddingTop:10,
    paddingBottom: 10
  }
}

export { Button };