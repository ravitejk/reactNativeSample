/**
 * Created by ravitej on 5/7/18.
 */
import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';

import { Header } from './common';
import TechItem from './TechItem';

class TechStackList extends Component {

  componentWillMount(){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !==r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library){
    return(
      <TechItem library={library}/>
    );
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <Header headerText="Tech Stack"/>
        <ListView dataSource={this.dataSource}
                  renderRow={this.renderRow}>
        </ListView>
      </View>

    );
  }
};

const mapStateToProps = state =>{
  return { libraries : state.techLibraries };
};

export default connect(mapStateToProps, {} ) (TechStackList);