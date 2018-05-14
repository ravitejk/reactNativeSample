/**
 * Created by ravitej on 5/14/18.
 */
import React, { Component } from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl';
import WishListItem from './WishListItem';
import EmptyList from './EmptyList';

class WishListList extends Component{

  componentWillMount(){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !==r2
    });

    this.dataSource = ds.cloneWithRows(this.props.wishListData);
  }

  renderRow(item){
    return(
      <IntlProvider locale="en">
        <WishListItem wishList={item}/>
      </IntlProvider>
    );
  }

  render(){
    if(this.props.isWishListEmpty)
      return <EmptyList/>;
    else
      return(
        <ListView dataSource={this.dataSource}
                  renderRow={this.renderRow}
                  />
      );
  };
}

const mapStateToProps = state =>{
  return {
    isWishListEmpty: state.wishListData.length === 0 ? true:false,
    wishListData : state.wishListData
  };
};

export default connect(mapStateToProps ) (WishListList);