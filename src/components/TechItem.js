/**
 * Created by ravitej on 5/7/18.
 */
import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { selectLibrary } from '../actions';

class TechItem extends Component {

  componentWillUpdate(){
    LayoutAnimation.easeInEaseOut();
  }

  renderDesc(){
    const {library, expanded} = this.props;
    const { descStyle } = styles;

    if(expanded){
      return(
        <CardSection>
          <Text style={descStyle}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render(){
    const {id, title} = this.props.library;

    return (
      <View>
        <TouchableWithoutFeedback onPress={() =>this.props.selectLibrary(id)}>
          <View>
            <CardSection>
              <Text>{title}</Text>
            </CardSection>
            {this.renderDesc()}
          </View>
        </TouchableWithoutFeedback>
      </View>
      );
  };
}

const styles = {
  descStyle:{
    fontSize: 14,
    paddingLeft: 10
  }
};

const mapStateToProps = (state, ownProps) =>{
  const expanded = state.selectedLibraryID === ownProps.library.id;
  return {expanded};
};

export default connect(mapStateToProps, {selectLibrary}) (TechItem);
