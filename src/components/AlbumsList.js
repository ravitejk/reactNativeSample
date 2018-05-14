import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';
import * as _ from 'lodash';
import data from './data.json';
import { Header } from './common';
import AlbumDetail from './AlbumDetail';

export default class AlbumsList extends Component {
  state = { tasks: [], tyty: []};

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({tyty: response.data}));
    this.setState({tasks: data});
  }

  renderTasks(){
    console.log(this.state.tyty);
    return _.map(this.state.tyty, album => <AlbumDetail key={album.title} album={album}></AlbumDetail>);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Header headerText="Albums"/>
        <ScrollView style={{flex: 1}}>
          {this.renderTasks()}
        </ScrollView>
      </SafeAreaView>
    );
  }
};