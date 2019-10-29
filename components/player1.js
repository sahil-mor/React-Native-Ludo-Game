import {React,Component} from 'react';
import {StyleSheet,Dimensions, View,TouchableOpacity, } from 'react-native';
import {FontAwesome} from 'react-native'
import {Players,row} from '../styles/forPlayers'
export default class P1 extends Component{
    constructor(props){
        super(props)
        this.state = {
          player1 : {
            position11 : -11,position12 : -21 ,position13 : -31, position14 : -41,
          },
          turn1 : true,
          image1 : require("../assets/dice5.png")
        }
      }
    checkPostion = (player,whichOne,position) => {
            switch(whichOne){
              case 1 :
                if(this.state.player1.position11 === position){
                  return   <FontAwesome name="user" color="red" size={20} />
                }
                break;
              case 2 : 
                if(this.state.player1.position12 === position){
                  return   <FontAwesome name="user" color="red" size={20} />
                }
                break;
              case 3 : 
                if(this.state.player1.position13 === position){
                  return   <FontAwesome name="user" color="red" size={20} />
                }
                break;
              case 4 :
                  if(this.state.player1.position14 === position){
                    return   <FontAwesome name="user" color="red" size={20} />
                  }
                  break;
              }
            }
    render(){
        return(
            <View style={[styles.player1,Players.styles]}>
            <View style={row.Style}>
              <View style={styles.places}>
                <TouchableOpacity >
                  {this.checkPostion(1,1,-11)}
                </TouchableOpacity>
              </View>
              <View style={styles.places}>
              <TouchableOpacity >
                  {this.checkPostion(1,2,-21)}
                </TouchableOpacity>
              </View>
            </View>
            <View style={row.Style}>
              <View style={styles.places}>
              <TouchableOpacity >
                  {this.checkPostion(1,3,-31)}
                </TouchableOpacity>
              </View>
              <View style={styles.places}>
              <TouchableOpacity >
                  {this.checkPostion(1,4,-41)}
                </TouchableOpacity>
            </View>
            </View>
          </View>
        )
    }
}
styles = StyleSheet.create({
  player1 : {
    marginLeft : Dimensions.get("window").width/50,borderColor : "red"
    ,flexDirection : "column"
  },
  places : {
    backgroundColor : "white",borderWidth : 2,marginLeft : 25,width : 30,height : 30,marginTop : 25
  }
})