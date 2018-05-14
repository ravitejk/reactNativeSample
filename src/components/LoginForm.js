/**
 * Created by ravitej on 5/3/18.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import { Button, Card, CardSection, Header, InputText, Spinner } from './common';

const INITIAL_STATE = {email: '', password: '', error: '', loading: false};
class LoginForm extends Component {

  state = INITIAL_STATE;

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyCCR2dXgKeBr6ZJPOySoGQEhK37P3WH2s0",
      authDomain: "auth-a3902.firebaseapp.com",
      databaseURL: "https://auth-a3902.firebaseio.com",
      projectId: "auth-a3902",
      storageBucket: "auth-a3902.appspot.com",
      messagingSenderId: "107769316556"
    });
  }

  login () {
    this.props.loginUser({email: this.props.email, password: this.props.password});
  }

  onEmailChange(text){
    //this.setState({email: text}); //component state
    this.props.emailChanged(text);
  };

  onPasswordChange(password){
    //this.setState({password}); //component state
    this.props.passwordChanged(password);
  };

  renderSpinner() {
    if (this.state.loading) {
      return <Spinner size="small"/>
    }
    else {
      return <Button buttonText="Login" onPress={this.login.bind(this)}/>
    }
  }

  render(){
    return(
      <View>
        <Header headerText="Login"/>
        <Card>
          <CardSection>
            <InputText
              label='Email'
              value={this.props.email}
              placeHolder='user@email.com'
              onChangeText={this.onEmailChange.bind(this)}/>
          </CardSection>
          <CardSection>
            <InputText
              label='Password'
              value={this.props.password}
              placeHolder=''
              isPasswordText={true}
              onChangeText={this.onPasswordChange.bind(this)}/>
          </CardSection>
          <Text style={styles.errorStyle}>{this.state.error}</Text>
          <CardSection>
            {this.renderSpinner()}
          </CardSection>
        </Card>
      </View>

    );
  }
}

const styles = {
  errorStyle:{
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 5,
    color: 'red',
    alignSelf: 'center'
  }
};

const mapStateToProps = state => {

  return {
    email: state.login.email,
    password: state.login.password,
  };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);