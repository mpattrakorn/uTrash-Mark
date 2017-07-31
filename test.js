/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableHighlight,
  Image,
  ScrollView

} from 'react-native';

import GridView from 'react-native-super-grid';

import { StackNavigator } from 'react-navigation';


import mock from './mock.js';

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });

  state = {

  }

  runBlue(itemList) {
    var blue = []

    for( let i = 0; i< itemList.length; i++) {
      if(itemList[i].bin == "blue"){
        blue.push(
          itemList[i]
        )
      }
    }

    return blue.map(item =>
            <View key={item.id}>
                <Image source={item.icon} style={{width: 40, height: 40}} />
            </View>
        )

  }

    runGreen(itemList) {
      var green = []

      for( let i = 0; i< itemList.length; i++) {
        if(itemList[i].bin == "green"){
          green.push(
            itemList[i]
          )
        }
      }

      return green.map(item =>
              <View key={item.id}>
                  <Image source={item.icon} style={{width: 40, height: 40}} />
              </View>
          )

    }

    runRed(itemList) {
      var red = []

      for( let i = 0; i< itemList.length; i++) {
        if(itemList[i].bin == "red"){
          red.push(
            itemList[i]
          )
        }
      }

      return red.map(item =>
              <View key={item.id}>
                  <Image source={item.icon} style={{width: 40, height: 40}} />
              </View>
          )

   }

   runYellow(itemList) {
      var yellow = []

      for( let i = 0; i< itemList.length; i++) {
        if(itemList[i].bin == "yellow"){
          yellow.push(
            itemList[i]
          )
        }
      }

      return yellow.map(item =>
              <View key={item.id}>
                  <Image source={item.icon} style={{width: 40, height: 40}} />
              </View>
          )

   }



  render() {

    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container} >
        <View style={{flex:15, flexDirection: 'row'}} >

          <View style={[styles.itemOnBin, {borderColor: '#6FB2DC'}]} >

             {this.runBlue(params.items)} 

          </View>
          <View style={[styles.itemOnBin, {borderColor: 'green'}]} >

             {this.runGreen(params.items)} 

          </View>
          <View style={[styles.itemOnBin, {borderColor: '#E04E2D'}]} >

            {this.runRed(params.items)} 

          </View>
          <View style={[styles.itemOnBin, {borderColor: '#DFBE29'}]} >

            {this.runYellow(params.items)} 

          </View>

        </View>
        <View style={{flexDirection: 'row', flex:4}} >
            <Image source={{uri: 'https://www.img.in.th/images/85bc1287410b98b4bfd45c37dcf2e868.png'}} style={{width: 100, height: 100, flex:1}} />
            <Image source={{uri: 'https://www.img.in.th/images/ce6c1f888f1c83b61a50008ac8bab3e8.png'}} style={{width: 100, height: 100, flex:1}} />
            <Image source={{uri: 'https://www.img.in.th/images/2b7ea42a8137c658e6ea11ad01475cd3.png'}} style={{width: 100, height: 100, flex:1}} />
            <Image source={{uri: 'https://www.img.in.th/images/bb83dfe19f1f8d5b2fc2fa0feec9b67c.png'}} style={{width: 100, height: 100, flex:1}} />
        </View>
        <View style={styles.buttonBar} >
              <View style={{flex:1, alignItems:'center'}} >
                  <TouchableHighlight style={styles.buttonStyle} >
                    <Text style={styles.buttonText} > DONE </Text>
                  </TouchableHighlight>
              </View>
        </View>
      </View>
    );
  }
}

class HomeScreen extends React.Component {

      static navigationOptions = {
        title: 'Welcome',
      };

      state =  {
            itemList: [],
            modalVisible: false,
            food: true,
            plastic: false,
            paper: false,
            glass: false,
            others: false,
        }

    setFood() {
          this.setState({
            food: true,
            plastic: false,
            paper: false,
            glass: false,
            others: false,
          })
        }

    setPlastic() {
      this.setState({
        food: false,
        plastic: true,
        paper: false,
        glass: false,
        others: false,
      })
    }

    setPaper() {
      this.setState({
        food: false,
        plastic: false,
        paper: true,
        glass: false,
        others: false,
      })
    }

    setGlass() {
      this.setState({
        food: false,
        plastic: false,
        paper: false,
        glass: true,
        others: false,
      })
    }

    setOthers() {
      this.setState({
        food: false,
        plastic: false,
        paper: false,
        glass: false,
        others: true,
      })
    }


    runItems(){

      if(this.state.food == true){
        var foods = []

        for(let i=0; i< mock.length; i++){
          if(mock[i].type == "food"){
            foods.push(
              mock[i]
            )
          }
        }

        return foods.map(item =>
            <View key={item.id} style={styles.itemStyle} >
                <Image source={item.icon} style={{width: 40, height: 40}} />
                <Text>{item.name} </Text>
                <Text style={styles.plusButton} 
                onPress={() => this.addToList(item.id)} > + </Text>
            </View>
        )

      } else if(this.state.plastic == true) {

        var plastics = []

        for(let i=0; i< mock.length; i++){
            if(mock[i].type == "plastic"){
              plastics.push(
                mock[i]
              )
            }
          }

          return plastics.map(item =>
              <View key={item.id} style={styles.itemStyle} >
                  <Image source={item.icon}  style={{width: 40, height: 40}} />
                  <Text>{item.name} </Text>
                  <Text style={styles.plusButton} 
                  onPress={() => this.addToList(item.id)} > + </Text>
              </View>
          )
        
      } else if(this.state.paper == true) {

        var papers = []

        for(let i=0; i< mock.length; i++){
          if(mock[i].type == "paper"){
            papers.push(
              mock[i]
            )
          }
        }

        return papers.map(item =>
            <View key={item.id} style={styles.itemStyle} >
                <Image source={item.icon} style={{width: 40, height: 40}} />
                <Text>{item.name} </Text>
                <Text style={styles.plusButton} 
                onPress={() => this.addToList(item.id)} > + </Text>
            </View>
        )

      } else if(this.state.glass == true) {
        var glass = []

      for(let i=0; i< mock.length; i++){
        if(mock[i].type == "glass"){
          glass.push(
            mock[i]
          )
        }
      }

        return glass.map(item =>
            <View key={item.id} style={styles.itemStyle} >
                <Image source={item.icon} style={{width: 40, height: 40}} />
                <Text>{item.name} </Text>
                <Text style={styles.plusButton} 
                onPress={() => this.addToList(item.id)} > + </Text>
            </View>
        )

      } else if(this.state.others == true) {
        var others = []

      for(let i=0; i< mock.length; i++){
        if(mock[i].type == "others"){
          others.push(
            mock[i]
          )
        }
      }

        return others.map(item =>
            <View key={item.id} style={styles.itemStyle} >
                <Image source={item.icon} style={{width: 40, height: 40}} />
                <Text>{item.name} </Text>
                <Text style={styles.plusButton} 
                onPress={() => this.addToList(item.id)} > + </Text>
            </View>
        )
      }

    }

    

    addToList(id) {
      for(let i=0; i< mock.length; i++){
        if(mock[i].id == id){
          this.setState({
            itemList:[...this.state.itemList, mock[i]]
          })
        }
      }      

    }

    clearList() {
      this.setState({
            itemList:[]
          })
    }

    setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
            <View style={styles.toolbar}>
                <Text style={styles.titleText} > Back </Text>
                <Text style={styles.titleText} > SELECT </Text>
              <View style={{flex:1}}>
              </View>
            </View>
            <View style={styles.toolbar2}>
                <Text style={styles.titleText} onPress={()=> this.setFood() } > FOOD </Text>
                <Text style={styles.titleText} onPress={()=> this.setPlastic() } >  PLASTIC  </Text>
                <Text style={styles.titleText} onPress={()=> this.setPaper() } >  PAPER  </Text>
                <Text style={styles.titleText} onPress={()=> this.setGlass() } >  GLASS  </Text>
                <Text style={styles.titleText} onPress={()=> this.setOthers() } >  OTHERS </Text>
            </View>
            <View style={styles.body}>
              <ScrollView>
                {this.runItems()}
              </ScrollView>
            </View>
            <View style={styles.itemBar} >

                <TouchableHighlight onPress={() => this.clearList() }
                  style={{backgroundColor: '#DFDFDF', height: 18, }} >
                  <Text style={{color: 'red'}} > Clear </Text>
                </TouchableHighlight>

                <GridView
                    itemWidth={40}
                    items={this.state.itemList}
                    renderItem={item => <Image source={item.icon} style={{width:40, height:40}} />}
                />

            </View>
            <View style={styles.buttonBar} >

              <View style={{flex:1, alignItems:'center'}} >
                  <TouchableHighlight style={styles.buttonStyle}
                  onPress = {() => navigate('Chat', {items: this.state.itemList})} >
                    <Text style={styles.buttonText} > CONFIRM </Text>
                  </TouchableHighlight>
              </View>

            </View>
            
        </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  toolbar: {
    backgroundColor: '#460000',
    flexDirection: 'row',
    flex: 1.5,
  },

  body: {
    backgroundColor: 'white',
    flex: 15,
    flexDirection: 'column',
    width: '100%'
  },

  toolbar2: {
    backgroundColor: '#A81511',
    flexDirection: 'row',
    flex: 1,
  },

  titleText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    flex:1
  },
  itemBar: {
    backgroundColor: '#A81511',
    flex: 3,
    flexDirection: 'row'
  },
  buttonBar: {
    backgroundColor: '#460000',
    flex: 2,
    flexDirection: 'row'
  },
  buttonStyle: {
        backgroundColor: '#DFDFDF',
        padding: 5,
        margin: 10,
        borderRadius: 20,
        width: 150,
    },

  buttonText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'red',
      textAlign: 'center',

  },

  itemStyle: {
      borderWidth: 1,
      backgroundColor: 'white',
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between'
  },

  plusButton: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'green'
  },

  itemOnBin: {
    flex:1, 
    flexDirection: 'column', 
    borderWidth: 2, 
    borderRadius: 10, 
    margin: 5,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
  }

  
});

export default SimpleApp

