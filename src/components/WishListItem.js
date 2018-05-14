/**
 * Created by ravitej on 5/14/18.
 */
import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import { FormattedNumber } from 'react-intl-native';

import { CardSection } from './common';

class WishListItem extends Component {

  render(){
    const {amountStyle, containerStyle, textStyle} = styles;
    const {id, title, amount } = this.props.wishList;
    return(
      <CardSection key={id}>
        <View style={containerStyle}>
          <Text style={textStyle}>{title}</Text>
          <FormattedNumber value={amount} style={amountStyle} currency="USD" currencyDisplay="symbol"/>
        </View>
      </CardSection>
    );
  }
}

const styles = {
  containerStyle:{
    height:50,
    justifyContent: 'center',
    flexDirection:'row',
    alignItems: 'center',
    flex:1
  },
  textStyle: {
    fontSize: 16,
    paddingLeft:10,
    flex: 3,
  },
  amountStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight:10,
    textAlign: 'right',
    flex: 1,
  }
};

export default connect(null)(WishListItem);