import React  from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
}

const styles = {
  viewStyle:{
    backgroundColor: '#e8e8e8',
    height: 44,
    justifyContent: 'center',
    alignItems:'center',
    elevation: 2
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };