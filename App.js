import React from 'react';
import { StyleSheet, Text, View,Dimensions,TouchableOpacity,Image,ImageBackground } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import {Players,row} from './styles/forPlayers'
import {Audio} from 'expo-av'
soundObject = new Audio.Sound()
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        position11 : -11,position12 : -21 ,position13 : -31, position14 : -41,
        position21 : -12,position22 : -22 ,position23 : -32, position24 : -42,
        position31 : -13,position32 : -23 ,position33 : -33, position34 : -43,
        position41 : -14,position42 : -24 ,position43 : -34, position44 : -44,
      turn1 : true,turn2 : false, turn3 : false,turn4 : false,currentNumber : 0 ,turnMessage : "",moveMessage : "",whoseTurnToMove : 0,
      isMovedBy1 : false,isMovedBy2 : false,isMovedBy3 : false,isMovedBy4 : false,
      image1 : require("./assets/dice1.png"),image2 : require("./assets/dice1.png"),image3 : require("./assets/dice1.png"),image4 : require("./assets/dice1.png")
    }
  }
  moveIcon = (player,whichOne,position) => {
    switch(player){
      case 1:
        if(this.state.whoseTurnToMove == 1 && (!this.state.isMovedBy1)){
          switch(whichOne){
            case 1:
              if(this.state.position11 < 0){
                if(this.state.currentNumber == 6){
                  this.setState({ position11 : 1 })
                  this.setState({ isMovedBy1 : true })
                }else{
                  this.setState({ moveMessage : "You Cannot Move It" })
                }
              }else{
                  var currentPosition = this.state.position11;
                  var nextPosition = this.state.currentNumber + currentPosition;
                  if(nextPosition > 57){
                    if(nextPosition == 58){
                      this.setState({ position11 : "winner" })
                    }else{
                      this.setState({ moveMessage : "No, Move Other One" })
                    }
                  }else{
                    if(this.state.position11 >= 46 && this.state.position11 <= 51){
                      if(nextPosition >= 52){
                        nextPosition += 1
                        console.log("in if")
                      }
                    }
                    this.checkIfCutPossibleFor2(nextPosition);this.checkIfCutPossibleFor3(nextPosition);this.checkIfCutPossibleFor4(nextPosition)
                    this.setState({ position11 : nextPosition });
                    this.setState({ isMovedBy1 : true })
                  }
              }
              break;
            case 2 :
                if(this.state.position12 < 0){
                  if(this.state.currentNumber == 6){
                    this.setState({ position12 : 1 });
                    this.setState({ isMovedBy1 : true })
                  }else{
                    this.setState({ moveMessage : "You Cannot Move It" })
                  }
                }else{
                    var currentPosition = this.state.position12;
                    var nextPosition = this.state.currentNumber + currentPosition;
                    if(nextPosition > 57){
                      if(nextPosition == 58){
                        this.setState({ position12 : "winner" })
                      }else 
                        this.setState({ moveMessage : "No, Move Other One" })
                    }else{
                      if(this.state.position12 >= 46 && this.state.position12 <= 51){
                        if(nextPosition >= 52){
                          nextPosition += 1
                        }
                      }
                      this.checkIfCutPossibleFor2(nextPosition);this.checkIfCutPossibleFor3(nextPosition);this.checkIfCutPossibleFor4(nextPosition)
                      this.setState({ position12 : nextPosition })
                      this.setState({ isMovedBy1 : true })
                    }
                }
              break;
            case 3 :
                if(this.state.position13 < 0){
                  if(this.state.currentNumber == 6){
                    this.setState({ position13 : 1 })
                    this.setState({ isMovedBy1 : true })
                  }else{
                    this.setState({ moveMessage : "You Cannot Move It" })
                  }
                }else{
                    var currentPosition = this.state.position13;
                    var nextPosition = this.state.currentNumber + currentPosition;
                    if(nextPosition > 57){
                      if(nextPosition == 58){
                        this.setState({ position13 : "winner" })
                      }else{
                        this.setState({ moveMessage : "No, Move Other One" })
                      }
                    }else{
                      if(this.state.position13 >= 46 && this.state.position13 <= 51){
                        if(nextPosition >= 52){
                          nextPosition += 1
                        }
                      }
                      this.checkIfCutPossibleFor2(nextPosition);this.checkIfCutPossibleFor3(nextPosition);this.checkIfCutPossibleFor4(nextPosition)
                      this.setState({ position13 : nextPosition })
                      this.setState({ isMovedBy1 : true })
                    }
                }
                break;
            case 4 :
                if(this.state.position14 < 0){
                  if(this.state.currentNumber == 6){
                    this.setState({ position14 : 1 })
                    this.setState({ isMovedBy1 : true })
                  }else{
                    this.setState({ moveMessage : "You Cannot Move It" })
                  }
                }else{
                    var currentPosition = this.state.position14;
                    var nextPosition = this.state.currentNumber + currentPosition;
                    if(nextPosition >= 57){
                      if(nextPosition == 58){
                        this.setState({ position14 : "winner"})
                      }else
                          this.setState({ moveMessage : "No, Move Other One" })
                    }else{
                      if(this.state.position14 >= 46 && this.state.position14 <= 51){
                        if(nextPosition >= 52){
                          nextPosition += 1
                        }
                      }
                      this.checkIfCutPossibleFor2(nextPosition);this.checkIfCutPossibleFor3(nextPosition);this.checkIfCutPossibleFor4(nextPosition)
                      this.setState({ position14 : nextPosition })
                      this.setState({ isMovedBy1 : true })
                    }
                }
                break;
          }
        }else{
          this.setState({moveMessage : "You cannot move right now"})
        }
        break;
      case 2:
          if(this.state.whoseTurnToMove == 2 && (!this.state.isMovedBy2)){
            switch(whichOne){
              case 1:
                if(this.state.position21 != "winner"){
                  if(this.state.position21 < 0){
                    if(this.state.currentNumber == 6){
                      this.setState({ position21 : 14 })
                      this.setState({ isMovedBy2 : true })
                    }else{
                      this.setState({ moveMessage : "You Cannot Move It" })
                    }
                  }else{
                      var currentPosition = this.state.position21;
                      var nextPosition = this.state.currentNumber + currentPosition;
                      if(nextPosition > 52 && nextPosition < 58){
                        extraMoves = nextPosition - 52
                        this.checkIfCutPossibleFor1(extraMoves);this.checkIfCutPossibleFor3(extraMoves);this.checkIfCutPossibleFor4(extraMoves);
                        this.setState({ position21 : extraMoves })
                        this.setState({ isMovedBy2 : true })
                      }else if(this.state.position21 >= 7 && this.state.position21 <= 12){
                        if(nextPosition > 12){                        
                          extraMoves = nextPosition -12
                          newPosition = 57 + extraMoves
                          if(this.state.position21 == 12 && this.state.currentNumber == 6){
                            this.setState({ position21 : "winner"})
                            this.setState({ isMovedBy2 : true })
                          }else{
                            this.checkIfCutPossibleFor1(newPosition);this.checkIfCutPossibleFor3(newPosition);this.checkIfCutPossibleFor4(newPosition)
                            this.setState({ position21 : newPosition})
                            this.setState({ isMovedBy2 : true })
                          }
                        }
                      }else if(this.state.position21 >= 58 && this.state.position21 <= 62){
                          nextPosition = this.state.position21 + this.state.currentNumber
                          if(nextPosition == 63){
                            this.setState({ position21 : "winner" })
                            this.setState({ isMovedBy2 : true })
                          }else if(nextPosition > 63){
                            this.setState({ moveMessage : "Cannot Move This One" })
                          }else{
                            this.setState({ position21 : nextPosition })
                            this.setState({ isMovedBy2 : true })
                          }
                      }
                      else{
                        nextPosition = this.state.position21 + this.state.currentNumber
                        this.checkIfCutPossibleFor1(nextPosition);this.checkIfCutPossibleFor3(nextPosition);this.checkIfCutPossibleFor4(nextPosition)
                        this.setState({ position21 : nextPosition })
                        this.setState({ isMovedBy2 : true })
                      }
                  }
                }  
                break;
              case 2 :
                  if(this.state.position22 != "winner"){
                    if(this.state.position22 < 0){
                      if(this.state.currentNumber == 6){
                        this.setState({ position22 : 14 })
                        this.setState({ isMovedBy2 : true })
                      }else{
                        this.setState({ moveMessage : "You Cannot Move It" })
                      }
                    }else{
                        var currentPosition = this.state.position22;
                        var nextPosition = this.state.currentNumber + currentPosition;
                        if(nextPosition > 52 && nextPosition < 58){
                          extraMoves = nextPosition - 52
                          this.checkIfCutPossibleFor1(extraMoves);this.checkIfCutPossibleFor3(extraMoves);this.checkIfCutPossibleFor4(extraMoves)
                          this.setState({ position22 : extraMoves })
                          this.setState({ isMovedBy2 : true })
                        }else if(this.state.position22 >= 7 && this.state.position22 <= 12){
                          if(nextPosition > 12){                        
                            extraMoves = nextPosition -12
                            newPosition = 57 + extraMoves
                            if(this.state.position22 == 12 && this.state.currentNumber == 6){
                              this.setState({ position22 : "winner"})
                              this.setState({ isMovedBy2 : true })
                            }else{
                              this.checkIfCutPossibleFor1(newPosition);this.checkIfCutPossibleFor3(newPosition);this.checkIfCutPossibleFor4(newPosition)
                              this.setState({ position22 : newPosition})
                              this.setState({ isMovedBy2 : true })
                            }
                          }
                        }else if(this.state.position22 >= 58 && this.state.position22 <= 62){
                            nextPosition = this.state.position22 + this.state.currentNumber
                            if(nextPosition == 63){
                              this.setState({ position22 : "winner" })
                              this.setState({ isMovedBy2 : true })
                            }else if(nextPosition > 63){
                              this.setState({ moveMessage : "Cannot Move This One" })
                            }else{
                              this.setState({ position22 : nextPosition })
                              this.setState({ isMovedBy2 : true })
                            }
                        }
                        else{
                          nextPosition = this.state.position22 + this.state.currentNumber
                          this.checkIfCutPossibleFor1(nextPosition);this.checkIfCutPossibleFor3(nextPosition);this.checkIfCutPossibleFor4(nextPosition)
                          this.setState({ position22 : nextPosition })
                          this.setState({ isMovedBy2 : true })
                        }
                    }
                  }  
                  break;
              case 3 :
                  if(this.state.position23 != "winner"){
                    if(this.state.position23 < 0){
                      if(this.state.currentNumber == 6){
                        this.setState({ position23 : 14 })
                        this.setState({ isMovedBy2 : true })
                      }else{
                        this.setState({ moveMessage : "You Cannot Move It" })
                      }
                    }else{
                        var currentPosition = this.state.position23;
                        var nextPosition = this.state.currentNumber + currentPosition;
                        if(nextPosition > 52 && nextPosition < 58){
                          extraMoves = nextPosition - 52
                          this.checkIfCutPossibleFor1(extraMoves);this.checkIfCutPossibleFor3(extraMoves);this.checkIfCutPossibleFor4(extraMoves)
                          this.setState({ position23 : extraMoves })
                          this.setState({ isMovedBy2 : true })
                        }else if(this.state.position23 >= 7 && this.state.position23 <= 12){
                          if(nextPosition > 12){                        
                            extraMoves = nextPosition -12
                            newPosition = 57 + extraMoves
                            if(this.state.position23 == 12 && this.state.currentNumber == 6){
                              this.setState({ position23 : "winner"})
                              this.setState({ isMovedBy2 : true })
                            }else{
                              this.checkIfCutPossibleFor1(newPosition);this.checkIfCutPossibleFor3(newPosition);this.checkIfCutPossibleFor4(newPosition)
                              this.setState({ position23 : newPosition})
                              this.setState({ isMovedBy2 : true })
                            }
                          }
                        }else if(this.state.position23 >= 58 && this.state.position23 <= 62){
                            nextPosition = this.state.position23 + this.state.currentNumber
                            if(nextPosition == 63){
                              this.setState({ position23 : "winner" })
                              this.setState({ isMovedBy2 : true })
                            }else if(nextPosition > 63){
                              this.setState({ moveMessage : "Cannot Move This One" })
                            }else{
                              this.setState({ position23 : nextPosition })
                              this.setState({ isMovedBy2 : true })
                            }
                        }
                        else{
                          nextPosition = this.state.position23 + this.state.currentNumber
                          this.checkIfCutPossibleFor1(nextPosition);this.checkIfCutPossibleFor3(nextPosition);this.checkIfCutPossibleFor4(nextPosition)
                          this.setState({ position23 : nextPosition })
                          this.setState({ isMovedBy2 : true })
                        }
                    }
                  }
                  break;
              case 4 :
                  if(this.state.position24 != "winner"){
                    if(this.state.position24 < 0){
                      if(this.state.currentNumber == 6){
                        this.setState({ position24 : 14 })
                        this.setState({ isMovedBy2 : true })
                      }else{
                        this.setState({ moveMessage : "You Cannot Move It" })
                      }
                    }else{
                        var currentPosition = this.state.position24;
                        var nextPosition = this.state.currentNumber + currentPosition;
                        if(nextPosition > 52 && nextPosition < 58){
                          extraMoves = nextPosition - 52
                          this.checkIfCutPossibleFor1(extraMoves);this.checkIfCutPossibleFor3(extraMoves);this.checkIfCutPossibleFor4(extraMoves)
                          this.setState({ position24 : extraMoves })
                          this.setState({ isMovedBy2 : true })
                        }else if(this.state.position24 >= 7 && this.state.position24 <= 12){
                          if(nextPosition > 12){                        
                            extraMoves = nextPosition -12
                            newPosition = 57 + extraMoves
                            if(this.state.position24 == 12 && this.state.currentNumber == 6){
                              this.setState({ position24 : "winner"})
                              this.setState({ isMovedBy2 : true })
                            }else{
                              this.checkIfCutPossibleFor1(newPosition);this.checkIfCutPossibleFor3(newPosition);this.checkIfCutPossibleFor4(newPosition)
                              this.setState({ position24 : newPosition})
                              this.setState({ isMovedBy2 : true })
                            }
                          }
                        }else if(this.state.position24 >= 58 && this.state.position24 <= 62){
                            nextPosition = this.state.position24 + this.state.currentNumber
                            if(nextPosition == 63){
                              this.setState({ position24 : "winner" })
                              this.setState({ isMovedBy2 : true })
                            }else if(nextPosition > 63){
                              this.setState({ moveMessage : "Cannot Move This One" })
                            }else{
                              this.setState({ position24 : nextPosition })
                              this.setState({ isMovedBy2 : true })
                            }
                        }
                        else{
                          nextPosition = this.state.position24 + this.state.currentNumber
                          this.checkIfCutPossibleFor1(nextPosition);this.checkIfCutPossibleFor3(nextPosition);this.checkIfCutPossibleFor4(nextPosition)
                          this.setState({ position24 : nextPosition })
                          this.setState({ isMovedBy2 : true })
                        }
                    }
                  }
                  break;
            }
          }else{
            this.setState({moveMessage : "You cannot move right now"})
          }
          break;
      case 3 :
          if(this.state.whoseTurnToMove == 3 && (!this.state.isMovedBy3)){
            switch(whichOne){
              case 1:
                if(this.state.position31 != "winner"){
                  if(this.state.position31 < 0){
                    if(this.state.currentNumber == 6){
                      this.setState({ position31 : 27 })
                      this.setState({ isMovedBy3 : true })
                    }else{
                      this.setState({ moveMessage : "You Cannot Move It" })
                    }
                  }else{
                      var currentPosition = this.state.position31;
                      var nextPosition = this.state.currentNumber + currentPosition;
                      if(nextPosition > 52 && nextPosition < 58){
                        extraMoves = nextPosition - 52
                        this.checkIfCutPossibleFor1(extraMoves);this.checkIfCutPossibleFor2(extraMoves);this.checkIfCutPossibleFor4(extraMoves)
                        this.setState({ position31 : extraMoves })
                        this.setState({ isMovedBy3 : true })
                      }else if(this.state.position31 >= 20 && this.state.position31 <= 25){
                        if(nextPosition > 25){                        
                          extraMoves = nextPosition - 25
                          newPosition = 62 + extraMoves
                          if(this.state.position31 == 25 && this.state.currentNumber == 6){
                            this.setState({ position31 : "winner"})
                            this.setState({ isMovedBy3 : true })
                          }else{
                            this.checkIfCutPossibleFor1(newPosition);this.checkIfCutPossibleFor2(newPosition);this.checkIfCutPossibleFor4(newPosition)
                            this.setState({ position31 : newPosition})
                            this.setState({ isMovedBy3 : true })
                          }
                        }
                      }else if(this.state.position31 >= 63 && this.state.position31 <= 67){
                          nextPosition = this.state.position41 + this.state.currentNumber
                          if(nextPosition == 68){
                            this.setState({ position31 : "winner" })
                            this.setState({ isMovedBy3 : true })
                          }else if(nextPosition > 68){
                            this.setState({ moveMessage : "Cannot Move This One" })
                          }else{
                            this.setState({ position31 : nextPosition })
                            this.setState({ isMovedBy3 : true })
                          }
                      }
                      else{
                        nextPosition = this.state.position31 + this.state.currentNumber
                        this.checkIfCutPossibleFor1(nextPosition);this.checkIfCutPossibleFor2(nextPosition);this.checkIfCutPossibleFor4(nextPosition)
                        this.setState({ position31 : nextPosition })
                        this.setState({ isMovedBy3 : true })
                      }
                  }
                }  
                break;
              case 2 :
                  if(this.state.position32 != "winner"){
                    if(this.state.position32 < 0){
                      if(this.state.currentNumber == 6){
                        this.setState({ position32 : 27 })
                        this.setState({ isMovedBy3 : true })
                      }else{
                        this.setState({ moveMessage : "You Cannot Move It" })
                      }
                    }else{
                        var currentPosition = this.state.position32;
                        var nextPosition = this.state.currentNumber + currentPosition;
                        if(nextPosition > 52 && nextPosition < 58){
                          extraMoves = nextPosition - 52
                          this.checkIfCutPossibleFor1(extraMoves);this.checkIfCutPossibleFor2(extraMoves);this.checkIfCutPossibleFor4(extraMoves)
                          this.setState({ position32 : extraMoves })
                          this.setState({ isMovedBy3 : true })
                        }else if(this.state.position32 >= 20 && this.state.position32 <= 25){
                          if(nextPosition > 25){                        
                            extraMoves = nextPosition - 25
                            newPosition = 62 + extraMoves
                            if(this.state.position32 == 25 && this.state.currentNumber == 6){
                              this.setState({ position32 : "winner"})
                              this.setState({ isMovedBy3 : true })
                            }else{
                              this.checkIfCutPossibleFor1(newPosition);this.checkIfCutPossibleFor2(newPosition);this.checkIfCutPossibleFor4(newPosition)
                              this.setState({ position32 : newPosition})
                              this.setState({ isMovedBy3 : true })
                            }
                          }
                        }else if(this.state.position32 >= 63 && this.state.position32 <= 67){
                            nextPosition = this.state.position32 + this.state.currentNumber
                            if(nextPosition == 68){
                              this.setState({ position32 : "winner" })
                              this.setState({ isMovedBy3 : true })
                            }else if(nextPosition > 68){
                              this.setState({ moveMessage : "Cannot Move This One" })
                            }else{
                              this.setState({ position32 : nextPosition })
                              this.setState({ isMovedBy3 : true })
                            }
                        }
                        else{
                          nextPosition = this.state.position32 + this.state.currentNumber
                          this.checkIfCutPossibleFor1(nextPosition);this.checkIfCutPossibleFor2(nextPosition);this.checkIfCutPossibleFor4(nextPosition)
                          this.setState({ position32 : nextPosition })
                          this.setState({ isMovedBy3 : true })
                        }
                    }
                  }  
                  break;
              case 3 :
                  if(this.state.position33 != "winner"){
                    if(this.state.position33 < 0){
                      if(this.state.currentNumber == 6){
                        this.setState({ position33 : 27 })
                        this.setState({ isMovedBy3 : true })
                      }else{
                        this.setState({ moveMessage : "You Cannot Move It" })
                      }
                    }else{
                        var currentPosition = this.state.position33;
                        var nextPosition = this.state.currentNumber + currentPosition;
                        if(nextPosition > 52 && nextPosition < 58){
                          extraMoves = nextPosition - 52
                          this.checkIfCutPossibleFor1(extraMoves);this.checkIfCutPossibleFor2(extraMoves);this.checkIfCutPossibleFor4(extraMoves)
                          this.setState({ position33 : extraMoves })
                          this.setState({ isMovedBy3 : true })
                        }else if(this.state.position33 >= 20 && this.state.position33 <= 25){
                          if(nextPosition > 25){                        
                            extraMoves = nextPosition - 25
                            newPosition = 62 + extraMoves
                            if(this.state.position33 == 25 && this.state.currentNumber == 6){
                              this.setState({ position33 : "winner"})
                              this.setState({ isMovedBy3 : true })
                            }else{
                              this.checkIfCutPossibleFor1(newPosition);this.checkIfCutPossibleFor2(newPosition);this.checkIfCutPossibleFor4(newPosition)
                              this.setState({ position33 : newPosition})
                              this.setState({ isMovedBy3 : true })
                            }
                          }
                        }else if(this.state.position33 >= 63 && this.state.position33 <= 67){
                            nextPosition = this.state.position33 + this.state.currentNumber
                            if(nextPosition == 68){
                              this.setState({ position33 : "winner" })
                              this.setState({ isMovedBy3 : true })
                            }else if(nextPosition > 68){
                              this.setState({ moveMessage : "Cannot Move This One" })
                            }else{
                              this.setState({ position33 : nextPosition })
                              this.setState({ isMovedBy3 : true })
                            }
                        }
                        else{
                          nextPosition = this.state.position33 + this.state.currentNumber
                          this.checkIfCutPossibleFor1(nextPosition);this.checkIfCutPossibleFor2(nextPosition);this.checkIfCutPossibleFor4(nextPosition)
                          this.setState({ position33 : nextPosition })
                          this.setState({ isMovedBy3 : true })
                        }
                    }
                  }  
                  break;
              case 4 :
                  if(this.state.position34 != "winner"){
                    if(this.state.position34 < 0){
                      if(this.state.currentNumber == 6){
                        this.setState({ position34 : 27 })
                        this.setState({ isMovedBy3 : true })
                      }else{
                        this.setState({ moveMessage : "You Cannot Move It" })
                      }
                    }else{
                        var currentPosition = this.state.position34;
                        var nextPosition = this.state.currentNumber + currentPosition;
                        if(nextPosition > 52 && nextPosition < 58){
                          extraMoves = nextPosition - 52
                          this.checkIfCutPossibleFor1(extraMoves);this.checkIfCutPossibleFor2(extraMoves);this.checkIfCutPossibleFor4(extraMoves)
                          this.setState({ position34 : extraMoves })
                          this.setState({ isMovedBy3 : true })
                        }else if(this.state.position34 >= 20 && this.state.position34 <= 25){
                          if(nextPosition > 25){                        
                            extraMoves = nextPosition - 25
                            newPosition = 62 + extraMoves
                            if(this.state.position34 == 25 && this.state.currentNumber == 6){
                              this.setState({ position34 : "winner"})
                              this.setState({ isMovedBy3 : true })
                            }else{
                              this.checkIfCutPossibleFor1(newPosition);this.checkIfCutPossibleFor2(newPosition);this.checkIfCutPossibleFor4(newPosition)
                              this.setState({ position34 : newPosition})
                              this.setState({ isMovedBy3 : true })
                            }
                          }
                        }else if(this.state.position34 >= 63 && this.state.position34 <= 67){
                            nextPosition = this.state.position34 + this.state.currentNumber
                            if(nextPosition == 68){
                              this.setState({ position34 : "winner" })
                              this.setState({ isMovedBy3 : true })
                            }else if(nextPosition > 68){
                              this.setState({ moveMessage : "Cannot Move This One" })
                            }else{
                              this.setState({ position34 : nextPosition })
                              this.setState({ isMovedBy3 : true })
                            }
                        }
                        else{
                          nextPosition = this.state.position34 + this.state.currentNumber
                          this.checkIfCutPossibleFor1(nextPosition);this.checkIfCutPossibleFor2(nextPosition);this.checkIfCutPossibleFor4(nextPosition)
                          this.setState({ position34 : nextPosition })
                          this.setState({ isMovedBy3 : true })
                        }
                    }
                  }  
                  break;
            }
          }else{
            this.setState({moveMessage : "You cannot move right now"})
          }
          break;
      case 4 :
          if(this.state.whoseTurnToMove == 4 && (!this.state.isMovedBy4)){
            switch(whichOne){
              case 1:
                if(this.state.position41 != "winner"){
                  if(this.state.position41 < 0){
                    if(this.state.currentNumber == 6){
                      this.setState({ position41 : 40 })
                      this.setState({ isMovedBy4 : true })
                    }else{
                      this.setState({ moveMessage : "You Cannot Move It" })
                    }
                  }else{
                      var currentPosition = this.state.position41;
                      var nextPosition = this.state.currentNumber + currentPosition;
                      if(nextPosition > 52 && nextPosition <= 58){
                        extraMoves = nextPosition - 52
                        this.checkIfCutPossibleFor1(extraMoves);this.checkIfCutPossibleFor2(extraMoves);this.checkIfCutPossibleFor3(extraMoves)
                        this.setState({ position41 : extraMoves })
                        this.setState({ isMovedBy4 : true })
                      }else if(this.state.position41 >= 33 && this.state.position41 <= 38){
                        if(nextPosition > 38){                        
                          extraMoves = nextPosition - 38
                          newPosition = 67 + extraMoves
                          if(this.state.position41 == 38 && this.state.currentNumber == 6){
                            this.setState({position41 : "winner"})
                            this.setState({ isMovedBy4 : true })
                          }else{
                            this.checkIfCutPossibleFor1(newPosition);this.checkIfCutPossibleFor2(newPosition);this.checkIfCutPossibleFor3(newPosition)
                            this.setState({ position41 : newPosition})
                            this.setState({ isMovedBy4 : true })
                          }
                        }
                      }else if(this.state.position41 >= 68 && this.state.position41 <= 72){
                          nextPosition = this.state.position41 + this.state.currentNumber
                          if(nextPosition == 73){
                            this.setState({ position41 : "winner" })
                            this.setState({ isMovedBy4 : true })
                          }else if(nextPosition > 73){
                            this.setState({ moveMessage : "Cannot Move This One" })
                          }else{
                            this.setState({ position41 : nextPosition })
                            this.setState({ isMovedBy4 : true })
                          }
                      }
                      else{
                        nextPosition = this.state.position41 + this.state.currentNumber
                        this.checkIfCutPossibleFor1(nextPosition);this.checkIfCutPossibleFor2(nextPosition);this.checkIfCutPossibleFor3(nextPosition)
                        this.setState({ position41 : nextPosition })
                        this.setState({ isMovedBy4 : true })
                      }
                  }
                }  
                break;
              case 2 :
                if(this.state.position42 != "winner"){
                  if(this.state.position42 < 0){
                    if(this.state.currentNumber == 6){
                      this.setState({ position42 : 40 })
                      this.setState({ isMovedBy4 : true })
                    }else{
                      this.setState({ moveMessage : "You Cannot Move It" })
                    }
                  }else{
                      var currentPosition = this.state.position42;
                      var nextPosition = this.state.currentNumber + currentPosition;
                      if(nextPosition > 52 && nextPosition <= 58){
                        extraMoves = nextPosition - 52
                        this.checkIfCutPossibleFor1(extraMoves);this.checkIfCutPossibleFor2(extraMoves);this.checkIfCutPossibleFor3(extraMoves)
                        this.setState({ position42 : extraMoves })
                        this.setState({ isMovedBy4 : true })
                      }else if(this.state.position42 >= 33 && this.state.position42 <= 38){
                        if(nextPosition > 38){                        
                          extraMoves = nextPosition - 38
                          newPosition = 67 + extraMoves
                          if(this.state.position42 == 38 && this.state.currentNumber == 6){
                            this.setState({position42 : "winner"})
                            this.setState({ isMovedBy4 : true })
                          }else{
                            this.checkIfCutPossibleFor1(newPosition);this.checkIfCutPossibleFor2(newPosition);this.checkIfCutPossibleFor3(newPosition)
                            this.setState({ position42 : newPosition})
                            this.setState({ isMovedBy4 : true })
                          }
                        }
                      }else if(this.state.position42 >= 68 && this.state.position42 <= 72){
                          nextPosition = this.state.position42 + this.state.currentNumber
                          if(nextPosition == 73){
                            this.setState({ position41 : "winner" })
                            this.setState({ isMovedBy4 : true })
                          }else if(nextPosition > 73){
                            this.setState({ moveMessage : "Cannot Move This One" })
                          }else{
                            this.setState({ position42 : nextPosition })
                            this.setState({ isMovedBy4 : true })
                          }
                      }
                      else{
                        nextPosition = this.state.position42 + this.state.currentNumber
                        this.checkIfCutPossibleFor1(nextPosition);this.checkIfCutPossibleFor2(nextPosition);this.checkIfCutPossibleFor3(nextPosition)
                        this.setState({ position42 : nextPosition })
                        this.setState({ isMovedBy4 : true })
                      }
                  }
                }  
                break;
              case 3 :
                if(this.state.position43 != "winner"){
                  if(this.state.position43 < 0){
                    if(this.state.currentNumber == 6){
                      this.setState({ position43 : 40 })
                      this.setState({ isMovedBy4 : true })
                    }else{
                      this.setState({ moveMessage : "You Cannot Move It" })
                    }
                  }else{
                      var currentPosition = this.state.position43;
                      var nextPosition = this.state.currentNumber + currentPosition;
                      if(nextPosition > 52 && nextPosition <= 58){
                        extraMoves = nextPosition - 52
                        this.checkIfCutPossibleFor1(extraMoves);this.checkIfCutPossibleFor2(extraMoves);this.checkIfCutPossibleFor3(extraMoves)
                        this.setState({ position43 : extraMoves })
                        this.setState({ isMovedBy4 : true })
                      }else if(this.state.position43 >= 33 && this.state.position43 <= 38){
                        if(nextPosition > 38){                        
                          extraMoves = nextPosition - 38
                          newPosition = 67 + extraMoves
                          if(this.state.position43 == 38 && this.state.currentNumber == 6){
                            this.setState({position43 : "winner"})
                            this.setState({ isMovedBy4 : true })
                          }else{
                            this.checkIfCutPossibleFor1(newPosition);this.checkIfCutPossibleFor2(newPosition);this.checkIfCutPossibleFor3(newPosition)
                            this.setState({ position43 : newPosition})
                            this.setState({ isMovedBy4 : true })
                          }
                        }
                      }else if(this.state.position43 >= 68 && this.state.position43 <= 72){
                          nextPosition = this.state.position43 + this.state.currentNumber
                          if(nextPosition == 73){
                            this.setState({ position43 : "winner" })
                            this.setState({ isMovedBy4 : true })
                          }else if(nextPosition > 73){
                            this.setState({ moveMessage : "Cannot Move This One" })
                          }else{
                            this.setState({ position43 : nextPosition })
                            this.checkIfCutPossibleFor1(nextPosition);this.checkIfCutPossibleFor2(nextPosition);this.checkIfCutPossibleFor3(nextPosition)
                            this.setState({ isMovedBy4 : true })
                          }
                      }
                      else{
                        nextPosition = this.state.position43 + this.state.currentNumber
                        this.setState({ position43 : nextPosition })
                        this.setState({ isMovedBy4 : true })
                      }
                  }
                }  
                break;
              case 4 :
                if(this.state.position44 != "winner"){
                  if(this.state.position44 < 0){
                    if(this.state.currentNumber == 6){
                      this.setState({ position44 : 40 })
                      this.setState({ isMovedBy4 : true })
                    }else{
                      this.setState({ moveMessage : "You Cannot Move It" })
                    }
                  }else{
                      var currentPosition = this.state.position44;
                      var nextPosition = this.state.currentNumber + currentPosition;
                      if(nextPosition > 52 && nextPosition <= 58){
                        extraMoves = nextPosition - 52
                        this.checkIfCutPossibleFor1(extraMoves);this.checkIfCutPossibleFor2(extraMoves);this.checkIfCutPossibleFor3(extraMoves)
                        this.setState({ position44 : extraMoves })
                        this.setState({ isMovedBy4 : true })
                      }else if(this.state.position44 >= 33 && this.state.position44 <= 38){
                        if(nextPosition > 38){                        
                          extraMoves = nextPosition - 38
                          newPosition = 67 + extraMoves
                          if(this.state.position44 == 38 && this.state.currentNumber == 6){
                            this.setState({position44 : "winner"})
                            this.setState({ isMovedBy4 : true })
                          }else{
                            this.checkIfCutPossibleFor1(newPosition);this.checkIfCutPossibleFor2(newPosition);this.checkIfCutPossibleFor3(newPosition)
                            this.setState({ position44 : newPosition})
                            this.setState({ isMovedBy4 : true })
                          }
                        }
                      }else if(this.state.position44 >= 68 && this.state.position44 <= 72){
                          nextPosition = this.state.position44 + this.state.currentNumber
                          if(nextPosition == 73){
                            this.setState({ position44 : "winner" })
                            this.setState({ isMovedBy4 : true })
                          }else if(nextPosition > 73){
                            this.setState({ moveMessage : "Cannot Move This One" })
                          }else{
                            this.setState({ position44 : nextPosition })
                            this.setState({ isMovedBy4 : true })
                          }
                      }
                      else{
                        nextPosition = this.state.position44 + this.state.currentNumber
                        this.checkIfCutPossibleFor1(nextPosition);this.checkIfCutPossibleFor2(nextPosition);this.checkIfCutPossibleFor3(nextPosition)
                        this.setState({ position44 : nextPosition })
                        this.setState({ isMovedBy4 : true })
                      }
                  }
                }  
                break;
            }
          }else{
            this.setState({moveMessage : "You cannot move right now"})
          }
          break;
    }
  }
  checkIfCutPossibleFor1 = (atPosition) => {
    if(atPosition != 1 && atPosition != 9  && atPosition != 14 && atPosition != 22 && atPosition != 27 && atPosition != 35 && atPosition != 40 && atPosition != 48 ){
      if(this.state.position11 == atPosition){
        this.setState({ position11 : -11 })
      }
      if(this.state.position12 == atPosition){
        this.setState({ position12 : -21 })
      }
      if(this.state.position13 == atPosition){
        this.setState({ position13 : -31 })
      }
      if(this.state.position14 == atPosition){
        this.setState({ position14 : -41 })
      }
    }
  }
  checkIfCutPossibleFor2 = (atPosition) => {
    if(atPosition != 1 && atPosition != 9  && atPosition != 14 && atPosition != 22 && atPosition != 27 && atPosition != 35 && atPosition != 40 && atPosition != 48 ){
      if(this.state.position21 == atPosition){
        this.setState({ position21 : -12 })
      }
      if(this.state.position22 == atPosition){
        this.setState({ position22 : -22 })
      }
      if(this.state.position23 == atPosition){
        this.setState({ position23 : -32 })
      }
      if(this.state.position24 == atPosition){
        this.setState({ position24 : -42 })
      }
    }
  }
  checkIfCutPossibleFor3 = (atPosition) => {
    if(atPosition != 1 && atPosition != 9  && atPosition != 14 && atPosition != 22 && atPosition != 27 && atPosition != 35 && atPosition != 40 && atPosition != 48 ){
      if(this.state.position31 == atPosition){
        this.setState({ position31 : -13 })
      }
      if(this.state.position32 == atPosition){
        this.setState({ position32 : -23 })
      }
      if(this.state.position33 == atPosition){
        this.setState({ position33 : -33 })
      }
      if(this.state.position34 == atPosition){
        this.setState({ position34 : -43 })
      }
    }
  }
  checkIfCutPossibleFor4 = (atPosition) => {
    if(atPosition != 1 && atPosition != 9  && atPosition != 14 && atPosition != 22 && atPosition != 27 && atPosition != 35 && atPosition != 40 && atPosition != 48 ){
      if(this.state.position41 == atPosition){
        this.setState({ position41 : -14 })
      }
      if(this.state.position42 == atPosition){
        this.setState({ position42 : -24 })
      }
      if(this.state.position43 == atPosition){
        this.setState({ position43 : -34 })
      }
      if(this.state.position44 == atPosition){
        this.setState({ position44 : -44 })
      }
    }
  }
  checkIfAnythingOpened = (player) => {
    switch(player){
      case 1 :
          if((this.state.position11 < 0) && (this.state.position12 < 0) && (this.state.position13 < 0) && (this.state.position14 < 0) ){
            return true
          }else{
            return false
          }
      case 2 :
          if((this.state.position21 < 0) && (this.state.position22 < 0) && (this.state.position23 < 0) && (this.state.position24 < 0) ){
            return true
          }else{
            return false
          }
      case 3 :
          if((this.state.position31 < 0) && (this.state.position32 < 0) && (this.state.position33 < 0) && (this.state.position34 < 0) ){
            return true
          }else{
            return false
          }
      case 4:
          if((this.state.position41 < 0) && (this.state.position42 < 0) && (this.state.position43 < 0) && (this.state.position44 < 0) ){
            return true
          }else{
            return false
          }
    }
  }
  generateRandomNumber = (player) => {
      var randomNumber = Math.floor(Math.random() * 6) +1;
      this.setState({turnMessage : " "}) ; this.setState({ moveMessage : "" })
      switch(player){
        case 1 :
          console.log(this.state.turn1 + "  " + this.state.isMovedBy4 +"  " + this.checkIfAnythingOpened(4))
          if(this.state.turn1 && (this.state.isMovedBy4 || this.checkIfAnythingOpened(4))){
            this.setState({ whoseTurnToMove : 1 })            
            this.setState({ isMovedBy1 : false })
            this.setState({currentNumber : randomNumber})
            switch(randomNumber){
              case 1 : 
                this.setState({image1 : require("./assets/dice1.png")})
                break;
              case 2 : 
                this.setState({image1 : require("./assets/dice2.png")})
                break;
              case 3 : 
                this.setState({image1 : require("./assets/dice3.png")})
                break;
              case 4 : 
                this.setState({image1 : require("./assets/dice4.png")})
                break;
              case 5 : 
                this.setState({image1 : require("./assets/dice5.png")})
                break;
              case 6 : 
                this.setState({image1 : require("./assets/dice6.png")})
                break;
            }
            if(randomNumber != 6){
              this.setState({ turn1 : false}); this.setState({ turn2 : true}); this.setState({ isMovedBy4 : false })
            }else{
              console.log("same conditions must be there")
            }
          }else{
            this.setState({ turnMessage : "It's Not Your Turn" })
          }
          break;
        case 2  :
            console.log(this.state.turn2 + "  " + this.state.isMovedBy1 +"  " + this.checkIfAnythingOpened(1))
            if(this.state.turn2 && (this.state.isMovedBy1 || this.checkIfAnythingOpened(1))){
              this.setState({ whoseTurnToMove : 2 })
              this.setState({ isMovedBy2 : false })
              this.setState({currentNumber : randomNumber})
              switch(randomNumber){
                case 1 : 
                  this.setState({image2 : require("./assets/dice1.png")})
                  break;
                case 2 : 
                  this.setState({image2 : require("./assets/dice2.png")})
                  break;
                case 3 : 
                  this.setState({image2 : require("./assets/dice3.png")})
                  break;
                case 4 : 
                  this.setState({image2 : require("./assets/dice4.png")})
                  break;
                case 5 : 
                  this.setState({image2 : require("./assets/dice5.png")})
                  break;
                case 6 : 
                  this.setState({image2 : require("./assets/dice6.png")})
                  break;
              }
              if(randomNumber != 6){
                this.setState({ turn2 : false}); this.setState({ turn3 : true});this.setState({ isMovedBy1 : false });
              }else{
                console.log("same conditions must be there")
              }
            }else{
              this.setState({ turnMessage : "It's Not Your Turn" })
            }
            break;
        case 3:
            console.log(this.state.turn3 + "  " + this.state.isMovedBy2 +"  " + this.checkIfAnythingOpened(2))
            if(this.state.turn3 && (this.state.isMovedBy2 || this.checkIfAnythingOpened(2))){
              this.setState({ whoseTurnToMove : 3 })
              this.setState({ isMovedBy3 : false })
              this.setState({currentNumber : randomNumber})
              switch(randomNumber){
                case 1 : 
                  this.setState({image3 : require("./assets/dice1.png")})
                  break;
                case 2 : 
                  this.setState({image3 : require("./assets/dice2.png")})
                  break;
                case 3 : 
                  this.setState({image3 : require("./assets/dice3.png")})
                  break;
                case 4 : 
                  this.setState({image3 : require("./assets/dice4.png")})
                  break;
                case 5 : 
                  this.setState({image3 : require("./assets/dice5.png")})
                  break;
                case 6 : 
                  this.setState({image3 : require("./assets/dice6.png")})
                  break;
              }
              if(randomNumber != 6){
                this.setState({ turn3 : false}); this.setState({ turn4 : true});this.setState({ isMovedBy2 : false })
              }else{
                console.log("same conditions must be there")
              }
            }else{
              this.setState({ turnMessage : "It's Not Your Turn" })
            }
            break;
        case 4:
            console.log(this.state.turn4 + "  " + this.state.isMovedBy3 +"  " + this.checkIfAnythingOpened(3))
            if(this.state.turn4 && (this.state.isMovedBy3 || this.checkIfAnythingOpened(3))){
              this.setState({ whoseTurnToMove : 4 })
              this.setState({isMovedBy4 : false})
              this.setState({currentNumber : randomNumber})
              switch(randomNumber){
                case 1 : 
                  this.setState({image4 : require("./assets/dice1.png")})
                  break;
                case 2 : 
                  this.setState({image4 : require("./assets/dice2.png")})
                  break;
                case 3 : 
                  this.setState({image4 : require("./assets/dice3.png")})
                  break;
                case 4 : 
                  this.setState({image4 : require("./assets/dice4.png")})
                  break;
                case 5 : 
                  this.setState({image4 : require("./assets/dice5.png")})
                  break;
                case 6 : 
                  this.setState({image4 : require("./assets/dice6.png")})
                  break;
              }
              if(randomNumber != 6){
                this.setState({ turn4 : false}); this.setState({ turn1 : true});this.setState({ isMovedBy3 : false });
              }else{
              console.log("same conditions must be there")
            }
            }else{
              this.setState({ turnMessage : "It's Not Your Turn" })
            }
            break;
      }
    }
  checkPostion = (player,whichOne,position) => {
    switch(player){
      case 1 :
        switch(whichOne){
          case 1 :
            if(this.state.position11 === position){
              return <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(1,1,position)}} color="red" size={20} />
            }
            break;
          case 2 : 
            if(this.state.position12 === position){
              return  <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(1,2,position)}} color="red" size={20} />
            }
            break;
          case 3 : 
            if(this.state.position13 === position){
              return  <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(1,3,position)}} color="red" size={20} />
            }
            break;
          case 4 :
              if(this.state.position14 === position){
                return  <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(1,4,position)}} color="red" size={20} />
              }
              break;
          }
          break;
        case 2 :
            switch(whichOne){
              case 1 :
                if(this.state.position21 === position){
                  return   <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(2,1,position)}} color="green" size={20} />
                }
                break;
              case 2 : 
                if(this.state.position22 === position){
                  return   <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(2,2,position)}} color="green" size={20} />
                }
                break;
              case 3 : 
                if(this.state.position23 === position){
                  return   <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(2,3,position)}} color="green" size={20} />
                }
                break;
              case 4 :
                  if(this.state.position24 === position){
                    return   <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(2,4,position)}} color="green" size={20} />
                  }
                  break;
              }
              break;
        case 3 :
            switch(whichOne){
              case 1 :
                if(this.state.position31 === position){
                  return   <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(3,1,position)}} color="#ed24ae" size={20} />
                }
                break;
              case 2 : 
                if(this.state.position32 === position){
                  return   <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(3,2,position)}} color="#ed24ae" size={20} />
                }
                break;
              case 3 : 
                if(this.state.position33 === position){
                  return   <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(3,3,position)}} color="#ed24ae" size={20} />
                }
                break;
              case 4 :
                if(this.state.position34 === position){
                  return   <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(3,4,position)}} color="#ed24ae" size={20} />
                }
                break;
              }
              break;
        case 4 :
          switch(whichOne){
            case 1 :
              if(this.state.position41 === position){
                return   <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(4,1,position)}} color="blue" size={20} />
              }
              break;
            case 2 : 
              if(this.state.position42 === position){
                return   <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(4,2,position)}} color="blue" size={20} />
              }
              break;
            case 3 : 
              if(this.state.position43 === position){
                return   <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(4,3,position)}} color="blue" size={20} />
              }
              break;
            case 4 :
                if(this.state.position44 === position){
                  return   <FontAwesome name="user" style={styles.icons} onPress={()=>{this.moveIcon(4,4,position)}} color="blue" size={20} />
                }
                break;
            }
          break;
        }
    }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.wholeSetup}>
        {/* =============================== Upper Part ============================= */}
        <View style={row.Style}>
          <View>
          <TouchableOpacity  onPress={()=>{this.generateRandomNumber(1)}}>
            <Image style={{ width : 90,height : 70,marginLeft : 30,marginBottom : 10}} source={this.state.image1} />
          </TouchableOpacity>
     
          <View style={[Players.styles,{marginLeft : Dimensions.get("window").width/50,borderRightWidth : 1,marginTop : 2}]}>
          <ImageBackground source={require("./assets/hattori.jpeg")} style={{width: '100%', height: '100%'}}>
            <View>
              <View style={row.Style}>
                <View style={[styles.places]}>
                  <TouchableOpacity>
                  {this.checkPostion(1,1,-11)}
                  </TouchableOpacity>
                </View>
                <View style={[styles.places,{marginLeft : 90}]}>
                <TouchableOpacity>
                    {this.checkPostion(1,2,-21)}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={row.Style}>
                <View style={[styles.places,{marginTop : 90}]} >
                <TouchableOpacity>
                    {this.checkPostion(1,3,-31)}
                  </TouchableOpacity>
                </View>
                <View  style={[styles.places,{marginTop : 90,marginLeft : 90}]}>
                <TouchableOpacity>
                    {this.checkPostion(1,4,-41)}
                  </TouchableOpacity>
              </View>
              </View>
            </View>
          </ImageBackground>
          </View>
         
          </View>
          <View style={[row.Style,{ marginTop : 82,borderTopWidth : 0 }]}>
              <View style={[styles.first]}>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,11)}{this.checkPostion(1,2,11)}{this.checkPostion(1,3,11)}{this.checkPostion(1,4,11)}
                    {this.checkPostion(2,1,11)}{this.checkPostion(2,2,11)}{this.checkPostion(2,3,11)}{this.checkPostion(2,4,11)}
                    {this.checkPostion(3,1,11)}{this.checkPostion(3,2,11)}{this.checkPostion(3,3,11)}{this.checkPostion(3,4,11)}
                    {this.checkPostion(4,1,11)}{this.checkPostion(4,2,11)}{this.checkPostion(4,3,11)}{this.checkPostion(4,4,11)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,10)}{this.checkPostion(1,2,10)}{this.checkPostion(1,3,10)}{this.checkPostion(1,4,10)}
                    {this.checkPostion(2,1,10)}{this.checkPostion(2,2,10)}{this.checkPostion(2,3,10)}{this.checkPostion(2,4,10)}
                    {this.checkPostion(3,1,10)}{this.checkPostion(3,2,10)}{this.checkPostion(3,3,10)}{this.checkPostion(3,4,10)}
                    {this.checkPostion(4,1,10)}{this.checkPostion(4,2,10)}{this.checkPostion(4,3,10)}{this.checkPostion(4,4,10)}
                  </View>
                  <View style={[styles.item,{backgroundColor : "#9effa5"}]}>
                    {this.checkPostion(1,1,9)}{this.checkPostion(1,2,9)}{this.checkPostion(1,3,9)}{this.checkPostion(1,4,9)}
                    {this.checkPostion(2,1,9)}{this.checkPostion(2,2,9)}{this.checkPostion(2,3,9)}{this.checkPostion(2,4,9)}
                    {this.checkPostion(3,1,9)}{this.checkPostion(3,2,9)}{this.checkPostion(3,3,9)}{this.checkPostion(3,4,9)}
                    {this.checkPostion(4,1,9)}{this.checkPostion(4,2,9)}{this.checkPostion(4,3,9)}{this.checkPostion(4,4,9)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,8)}{this.checkPostion(1,2,8)}{this.checkPostion(1,3,8)}{this.checkPostion(1,4,8)}
                    {this.checkPostion(2,1,8)}{this.checkPostion(2,2,8)}{this.checkPostion(2,3,8)}{this.checkPostion(2,4,8)}
                    {this.checkPostion(3,1,8)}{this.checkPostion(3,2,8)}{this.checkPostion(3,3,8)}{this.checkPostion(3,4,8)}
                    {this.checkPostion(4,1,8)}{this.checkPostion(4,2,8)}{this.checkPostion(4,3,8)}{this.checkPostion(4,4,8)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,7)}{this.checkPostion(1,2,7)}{this.checkPostion(1,3,7)}{this.checkPostion(1,4,7)}
                    {this.checkPostion(2,1,7)}{this.checkPostion(2,2,7)}{this.checkPostion(2,3,7)}{this.checkPostion(2,4,7)}
                    {this.checkPostion(3,1,7)}{this.checkPostion(3,2,7)}{this.checkPostion(3,3,7)}{this.checkPostion(3,4,7)}
                    {this.checkPostion(4,1,7)}{this.checkPostion(4,2,7)}{this.checkPostion(4,3,7)}{this.checkPostion(4,4,7)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,6)}{this.checkPostion(1,2,6)}{this.checkPostion(1,3,6)}{this.checkPostion(1,4,6)}
                    {this.checkPostion(2,1,6)}{this.checkPostion(2,2,6)}{this.checkPostion(2,3,6)}{this.checkPostion(2,4,6)}
                    {this.checkPostion(3,1,6)}{this.checkPostion(3,2,6)}{this.checkPostion(3,3,6)}{this.checkPostion(3,4,6)}
                    {this.checkPostion(4,1,6)}{this.checkPostion(4,2,6)}{this.checkPostion(4,3,6)}{this.checkPostion(4,4,6)}
                  </View>
              </View>
              <View style={[styles.second]}>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,12)}{this.checkPostion(1,2,12)}{this.checkPostion(1,3,12)}{this.checkPostion(1,4,12)}
                    {this.checkPostion(2,1,12)}{this.checkPostion(2,2,12)}{this.checkPostion(2,3,12)}{this.checkPostion(2,4,12)}
                    {this.checkPostion(3,1,12)}{this.checkPostion(3,2,12)}{this.checkPostion(3,3,12)}{this.checkPostion(3,4,12)}
                    {this.checkPostion(4,1,12)}{this.checkPostion(4,2,12)}{this.checkPostion(4,3,12)}{this.checkPostion(4,4,12)}
                  </View>
                  <View style={[styles.item,styles.green]}>
                    {this.checkPostion(1,1,58)}{this.checkPostion(1,2,58)}{this.checkPostion(1,3,58)}{this.checkPostion(1,4,58)}
                    {this.checkPostion(2,1,58)}{this.checkPostion(2,2,58)}{this.checkPostion(2,3,58)}{this.checkPostion(2,4,58)}
                    {this.checkPostion(3,1,58)}{this.checkPostion(3,2,58)}{this.checkPostion(3,3,58)}{this.checkPostion(3,4,58)}
                    {this.checkPostion(4,1,58)}{this.checkPostion(4,2,58)}{this.checkPostion(4,3,58)}{this.checkPostion(4,4,58)}
                  </View>
                  <View style={[styles.item,styles.green]}>
                    {this.checkPostion(1,1,59)}{this.checkPostion(1,2,59)}{this.checkPostion(1,3,59)}{this.checkPostion(1,4,59)}
                    {this.checkPostion(2,1,59)}{this.checkPostion(2,2,59)}{this.checkPostion(2,3,59)}{this.checkPostion(2,4,59)}
                    {this.checkPostion(3,1,59)}{this.checkPostion(3,2,59)}{this.checkPostion(3,3,59)}{this.checkPostion(3,4,59)}
                    {this.checkPostion(4,1,59)}{this.checkPostion(4,2,59)}{this.checkPostion(4,3,59)}{this.checkPostion(4,4,59)}
                  </View>
                  <View style={[styles.item,styles.green]}>
                    {this.checkPostion(1,1,60)}{this.checkPostion(1,2,60)}{this.checkPostion(1,3,60)}{this.checkPostion(1,4,60)}
                    {this.checkPostion(2,1,60)}{this.checkPostion(2,2,60)}{this.checkPostion(2,3,60)}{this.checkPostion(2,4,60)}
                    {this.checkPostion(3,1,60)}{this.checkPostion(3,2,60)}{this.checkPostion(3,3,60)}{this.checkPostion(3,4,60)}
                    {this.checkPostion(4,1,60)}{this.checkPostion(4,2,60)}{this.checkPostion(4,3,60)}{this.checkPostion(4,4,60)}
                  </View>
                  <View style={[styles.item,styles.green]}>
                    {this.checkPostion(1,1,61)}{this.checkPostion(1,2,61)}{this.checkPostion(1,3,61)}{this.checkPostion(1,4,61)}
                    {this.checkPostion(2,1,61)}{this.checkPostion(2,2,61)}{this.checkPostion(2,3,61)}{this.checkPostion(2,4,61)}
                    {this.checkPostion(3,1,61)}{this.checkPostion(3,2,61)}{this.checkPostion(3,3,61)}{this.checkPostion(3,4,61)}
                    {this.checkPostion(4,1,61)}{this.checkPostion(4,2,61)}{this.checkPostion(4,3,61)}{this.checkPostion(4,4,61)}
                  </View>
                  <View style={[styles.item,styles.green]}>
                    {this.checkPostion(1,1,62)}{this.checkPostion(1,2,62)}{this.checkPostion(1,3,62)}{this.checkPostion(1,4,62)}
                    {this.checkPostion(2,1,62)}{this.checkPostion(2,2,62)}{this.checkPostion(2,3,62)}{this.checkPostion(2,4,62)}
                    {this.checkPostion(3,1,62)}{this.checkPostion(3,2,62)}{this.checkPostion(3,3,62)}{this.checkPostion(3,4,62)}
                    {this.checkPostion(4,1,62)}{this.checkPostion(4,2,62)}{this.checkPostion(4,3,62)}{this.checkPostion(4,4,62)}
                  </View>
              </View>
              <View style={[styles.third,]}>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,13)}{this.checkPostion(1,2,13)}{this.checkPostion(1,3,13)}{this.checkPostion(1,4,13)}
                    {this.checkPostion(2,1,13)}{this.checkPostion(2,2,13)}{this.checkPostion(2,3,13)}{this.checkPostion(2,4,13)}
                    {this.checkPostion(3,1,13)}{this.checkPostion(3,2,13)}{this.checkPostion(3,3,13)}{this.checkPostion(3,4,13)}
                    {this.checkPostion(4,1,13)}{this.checkPostion(4,2,13)}{this.checkPostion(4,3,13)}{this.checkPostion(4,4,13)}
                  </View>
                  <View style={[styles.item,{backgroundColor : "#9effa5"}]}>
                    {this.checkPostion(1,1,14)}{this.checkPostion(1,2,14)}{this.checkPostion(1,3,14)}{this.checkPostion(1,4,14)}
                    {this.checkPostion(2,1,14)}{this.checkPostion(2,2,14)}{this.checkPostion(2,3,14)}{this.checkPostion(2,4,14)}
                    {this.checkPostion(3,1,14)}{this.checkPostion(3,2,14)}{this.checkPostion(3,3,14)}{this.checkPostion(3,4,14)}
                    {this.checkPostion(4,1,14)}{this.checkPostion(4,2,14)}{this.checkPostion(4,3,14)}{this.checkPostion(4,4,14)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,15)}{this.checkPostion(1,2,15)}{this.checkPostion(1,3,15)}{this.checkPostion(1,4,15)}
                    {this.checkPostion(2,1,15)}{this.checkPostion(2,2,15)}{this.checkPostion(2,3,15)}{this.checkPostion(2,4,15)}
                    {this.checkPostion(3,1,15)}{this.checkPostion(3,2,15)}{this.checkPostion(3,3,15)}{this.checkPostion(3,4,15)}
                    {this.checkPostion(4,1,15)}{this.checkPostion(4,2,15)}{this.checkPostion(4,3,15)}{this.checkPostion(4,4,15)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,16)}{this.checkPostion(1,2,16)}{this.checkPostion(1,3,16)}{this.checkPostion(1,4,16)}
                    {this.checkPostion(2,1,16)}{this.checkPostion(2,2,16)}{this.checkPostion(2,3,16)}{this.checkPostion(2,4,16)}
                    {this.checkPostion(3,1,16)}{this.checkPostion(3,2,16)}{this.checkPostion(3,3,16)}{this.checkPostion(3,4,16)}
                    {this.checkPostion(4,1,16)}{this.checkPostion(4,2,16)}{this.checkPostion(4,3,16)}{this.checkPostion(4,4,16)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,17)}{this.checkPostion(1,2,17)}{this.checkPostion(1,3,17)}{this.checkPostion(1,4,17)}
                    {this.checkPostion(2,1,17)}{this.checkPostion(2,2,17)}{this.checkPostion(2,3,17)}{this.checkPostion(2,4,17)}
                    {this.checkPostion(3,1,17)}{this.checkPostion(3,2,17)}{this.checkPostion(3,3,17)}{this.checkPostion(3,4,17)}
                    {this.checkPostion(4,1,17)}{this.checkPostion(4,2,17)}{this.checkPostion(4,3,17)}{this.checkPostion(4,4,17)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,18)}{this.checkPostion(1,2,18)}{this.checkPostion(1,3,18)}{this.checkPostion(1,4,18)}
                    {this.checkPostion(2,1,18)}{this.checkPostion(2,2,18)}{this.checkPostion(2,3,18)}{this.checkPostion(2,4,18)}
                    {this.checkPostion(3,1,18)}{this.checkPostion(3,2,18)}{this.checkPostion(3,3,18)}{this.checkPostion(3,4,18)}
                    {this.checkPostion(4,1,18)}{this.checkPostion(4,2,18)}{this.checkPostion(4,3,18)}{this.checkPostion(4,4,18)}
                  </View>
              </View>   
          </View>
          <View>
          <TouchableOpacity  onPress={()=>{ this.generateRandomNumber(2) }}>
            <Image style={{ width : 90,height : 70,marginLeft : 30,marginBottom : 10}} source={this.state.image2} />
          </TouchableOpacity>
          <View style={[Players.styles,{borderLeftWidth : 1,marginTop : 1.7}]}>
            <ImageBackground source={require("./assets/doremon.jpg")} style={{width: '100%', height: '100%'}}>
              <View>
                  <View style={row.Style}>
                    <View style={styles.places}>
                    <TouchableOpacity>
                        {this.checkPostion(2,1,-12)}
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.places,{marginLeft : 90}]}>
                    <TouchableOpacity>
                        {this.checkPostion(2,2,-22)}
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={row.Style}>
                    <View style={[styles.places,{marginTop : 90}]}>
                    <TouchableOpacity>
                        {this.checkPostion(2,3,-32)}
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.places,{marginLeft : 90,marginTop : 90}]}>
                    <TouchableOpacity>
                        {this.checkPostion(2,4,-42)}
                      </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ImageBackground>
               
          </View>
          </View>
        
           </View>
        {/* =============================== Middle Part =============================== */}
        <View style={row.Style}>
          {/* ============================= First Triplet ============================== */}
          <View style={styles.First}>
            <View style={[row.Style,{borderLeftWidth : 2}]}>
              <View style={styles.item}>
                  {this.checkPostion(1,1,52)}{this.checkPostion(1,2,52)}{this.checkPostion(1,3,52)}{this.checkPostion(1,4,52)}
                  {this.checkPostion(2,1,52)}{this.checkPostion(2,2,52)}{this.checkPostion(2,3,52)}{this.checkPostion(2,4,52)}
                  {this.checkPostion(3,1,52)}{this.checkPostion(3,2,52)}{this.checkPostion(3,3,52)}{this.checkPostion(3,4,52)}
                  {this.checkPostion(4,1,52)}{this.checkPostion(4,2,52)}{this.checkPostion(4,3,52)}{this.checkPostion(4,4,52)}
              </View>
              <View style={[styles.item,styles.red,{backgroundColor : "#fa9daa"}]}>  
                    {this.checkPostion(1,1,1)}{this.checkPostion(1,2,1)}{this.checkPostion(1,3,1)}{this.checkPostion(1,4,1)}                   
                    {this.checkPostion(2,1,1)}{this.checkPostion(2,2,1)}{this.checkPostion(2,3,1)}{this.checkPostion(2,4,1)}
                    {this.checkPostion(3,1,1)}{this.checkPostion(3,2,1)}{this.checkPostion(3,3,1)}{this.checkPostion(3,4,1)}
                    {this.checkPostion(4,1,1)}{this.checkPostion(4,2,1)}{this.checkPostion(4,3,1)}{this.checkPostion(4,4,1)}
                </View>
              <View style={styles.item}>
                  {this.checkPostion(1,1,2)}{this.checkPostion(1,2,2)}{this.checkPostion(1,3,2)}{this.checkPostion(1,4,2)}
                  {this.checkPostion(2,1,2)}{this.checkPostion(2,2,2)}{this.checkPostion(2,3,2)}{this.checkPostion(2,4,2)}
                  {this.checkPostion(3,1,2)}{this.checkPostion(3,2,2)}{this.checkPostion(3,3,2)}{this.checkPostion(3,4,2)}
                  {this.checkPostion(4,1,2)}{this.checkPostion(4,2,2)}{this.checkPostion(4,3,2)}{this.checkPostion(4,4,2)}
              </View>
              <View style={styles.item}>
                  {this.checkPostion(1,1,3)}{this.checkPostion(1,2,3)}{this.checkPostion(1,3,3)}{this.checkPostion(1,4,3)}
                  {this.checkPostion(2,1,3)}{this.checkPostion(2,2,3)}{this.checkPostion(2,3,3)}{this.checkPostion(2,4,3)}
                  {this.checkPostion(3,1,3)}{this.checkPostion(3,2,3)}{this.checkPostion(3,3,3)}{this.checkPostion(3,4,3)}
                  {this.checkPostion(4,1,3)}{this.checkPostion(4,2,3)}{this.checkPostion(4,3,3)}{this.checkPostion(4,4,3)}
              </View>
              <View style={styles.item}>
                  {this.checkPostion(1,1,4)}{this.checkPostion(1,2,4)}{this.checkPostion(1,3,4)}{this.checkPostion(1,4,4)}
                  {this.checkPostion(2,1,4)}{this.checkPostion(2,2,4)}{this.checkPostion(2,3,4)}{this.checkPostion(2,4,4)}
                  {this.checkPostion(3,1,4)}{this.checkPostion(3,2,4)}{this.checkPostion(3,3,4)}{this.checkPostion(3,4,4)}
                  {this.checkPostion(4,1,4)}{this.checkPostion(4,2,4)}{this.checkPostion(4,3,4)}{this.checkPostion(4,4,4)}
              </View>
              <View style={styles.item}>
                    {this.checkPostion(1,1,5)}{this.checkPostion(1,2,5)}{this.checkPostion(1,3,5)}{this.checkPostion(1,4,5)}
                    {this.checkPostion(2,1,5)}{this.checkPostion(2,2,5)}{this.checkPostion(2,3,5)}{this.checkPostion(2,4,5)}
                    {this.checkPostion(3,1,5)}{this.checkPostion(3,2,5)}{this.checkPostion(3,3,5)}{this.checkPostion(3,4,5)}
                    {this.checkPostion(4,1,5)}{this.checkPostion(4,2,5)}{this.checkPostion(4,3,5)}{this.checkPostion(4,4,5)}
                </View>
            </View>
            <View style={[row.Style,{borderLeftWidth : 2}]}>
              <View style={styles.item}>
                {this.checkPostion(1,1,51)}{this.checkPostion(1,2,51)}{this.checkPostion(1,3,51)}{this.checkPostion(1,4,51)}
                {this.checkPostion(2,1,51)}{this.checkPostion(2,2,51)}{this.checkPostion(2,3,51)}{this.checkPostion(2,4,51)}
                {this.checkPostion(3,1,51)}{this.checkPostion(3,2,51)}{this.checkPostion(3,3,51)}{this.checkPostion(3,4,51)}
                {this.checkPostion(4,1,51)}{this.checkPostion(4,2,51)}{this.checkPostion(4,3,51)}{this.checkPostion(4,4,51)}
              </View>
              <View style={[styles.item,styles.red]}>
              {this.checkPostion(1,1,53)}{this.checkPostion(1,2,53)}{this.checkPostion(1,3,53)}{this.checkPostion(1,4,53)}
              {this.checkPostion(2,1,53)}{this.checkPostion(2,2,53)}{this.checkPostion(2,3,53)}{this.checkPostion(2,4,53)}
              {this.checkPostion(3,1,53)}{this.checkPostion(3,2,53)}{this.checkPostion(3,3,53)}{this.checkPostion(3,4,53)}
              {this.checkPostion(4,1,53)}{this.checkPostion(4,2,53)}{this.checkPostion(4,3,53)}{this.checkPostion(4,4,53)}           
              </View>
              <View style={[styles.item,styles.red]}>
              {this.checkPostion(1,1,54)}{this.checkPostion(1,2,54)}{this.checkPostion(1,3,54)}{this.checkPostion(1,4,54)}
              {this.checkPostion(2,1,54)}{this.checkPostion(2,2,54)}{this.checkPostion(2,3,54)}{this.checkPostion(2,4,54)}
              {this.checkPostion(3,1,54)}{this.checkPostion(3,2,54)}{this.checkPostion(3,3,54)}{this.checkPostion(3,4,54)}
              {this.checkPostion(4,1,54)}{this.checkPostion(4,2,54)}{this.checkPostion(4,3,54)}{this.checkPostion(4,4,54)}           
              </View>
              <View style={[styles.item,styles.red]}>
              {this.checkPostion(1,1,55)}{this.checkPostion(1,2,55)}{this.checkPostion(1,3,55)}{this.checkPostion(1,4,55)}
              {this.checkPostion(2,1,55)}{this.checkPostion(2,2,55)}{this.checkPostion(2,3,55)}{this.checkPostion(2,4,55)}
              {this.checkPostion(3,1,55)}{this.checkPostion(3,2,55)}{this.checkPostion(3,3,55)}{this.checkPostion(3,4,55)}
              {this.checkPostion(4,1,55)}{this.checkPostion(4,2,55)}{this.checkPostion(4,3,55)}{this.checkPostion(4,4,55)}           
              </View>
              <View style={[styles.item,styles.red]}>
                {this.checkPostion(1,1,56)}{this.checkPostion(1,2,56)}{this.checkPostion(1,3,56)}{this.checkPostion(1,4,56)}
                {this.checkPostion(2,1,56)}{this.checkPostion(2,2,56)}{this.checkPostion(2,3,56)}{this.checkPostion(2,4,56)}
                {this.checkPostion(3,1,56)}{this.checkPostion(3,2,56)}{this.checkPostion(3,3,56)}{this.checkPostion(3,4,56)}
                {this.checkPostion(4,1,56)}{this.checkPostion(4,2,56)}{this.checkPostion(4,3,56)}{this.checkPostion(4,4,56)}           
                </View>
                <View style={[styles.item,styles.red]}>
                {this.checkPostion(1,1,57)}{this.checkPostion(1,2,57)}{this.checkPostion(1,3,57)}{this.checkPostion(1,4,57)}
                {this.checkPostion(2,1,57)}{this.checkPostion(2,2,57)}{this.checkPostion(2,3,57)}{this.checkPostion(2,4,57)}
                {this.checkPostion(3,1,57)}{this.checkPostion(3,2,57)}{this.checkPostion(3,3,57)}{this.checkPostion(3,4,57)}
                {this.checkPostion(4,1,57)}{this.checkPostion(4,2,57)}{this.checkPostion(4,3,57)}{this.checkPostion(4,4,57)}           
                </View>
            </View>
            <View style={[row.Style,{borderLeftWidth : 2}]}>
              <View style={styles.item}>
                {this.checkPostion(1,1,50)}{this.checkPostion(1,2,50)}{this.checkPostion(1,3,50)}{this.checkPostion(1,4,50)}
                {this.checkPostion(2,1,50)}{this.checkPostion(2,2,50)}{this.checkPostion(2,3,50)}{this.checkPostion(2,4,50)}
                {this.checkPostion(3,1,50)}{this.checkPostion(3,2,50)}{this.checkPostion(3,3,50)}{this.checkPostion(3,4,50)}
                {this.checkPostion(4,1,50)}{this.checkPostion(4,2,50)}{this.checkPostion(4,3,50)}{this.checkPostion(4,4,50)}      
              </View>
              <View style={styles.item}>
                {this.checkPostion(1,1,49)}{this.checkPostion(1,2,49)}{this.checkPostion(1,3,49)}{this.checkPostion(1,4,49)}
                {this.checkPostion(2,1,49)}{this.checkPostion(2,2,49)}{this.checkPostion(2,3,49)}{this.checkPostion(2,4,49)}
                {this.checkPostion(3,1,49)}{this.checkPostion(3,2,49)}{this.checkPostion(3,3,49)}{this.checkPostion(3,4,49)}
                {this.checkPostion(4,1,49)}{this.checkPostion(4,2,49)}{this.checkPostion(4,3,49)}{this.checkPostion(4,4,49)} 
                </View>
                <View style={[styles.item,{backgroundColor : "#fa9daa"}]}>
                {this.checkPostion(1,1,48)}{this.checkPostion(1,2,48)}{this.checkPostion(1,3,48)}{this.checkPostion(1,4,48)}
                {this.checkPostion(2,1,48)}{this.checkPostion(2,2,48)}{this.checkPostion(2,3,48)}{this.checkPostion(2,4,48)}
                {this.checkPostion(3,1,48)}{this.checkPostion(3,2,48)}{this.checkPostion(3,3,48)}{this.checkPostion(3,4,48)}
                {this.checkPostion(4,1,48)}{this.checkPostion(4,2,48)}{this.checkPostion(4,3,48)}{this.checkPostion(4,4,48)}   
                </View>
                <View style={styles.item}>
                {this.checkPostion(1,1,47)}{this.checkPostion(1,2,47)}{this.checkPostion(1,3,47)}{this.checkPostion(1,4,47)}
                {this.checkPostion(2,1,47)}{this.checkPostion(2,2,47)}{this.checkPostion(2,3,47)}{this.checkPostion(2,4,47)}
                {this.checkPostion(3,1,47)}{this.checkPostion(3,2,47)}{this.checkPostion(3,3,47)}{this.checkPostion(3,4,47)}
                {this.checkPostion(4,1,47)}{this.checkPostion(4,2,47)}{this.checkPostion(4,3,47)}{this.checkPostion(4,4,47)}    
                </View>
                <View style={styles.item}>
                {this.checkPostion(1,1,46)}{this.checkPostion(1,2,46)}{this.checkPostion(1,3,46)}{this.checkPostion(1,4,46)}
                {this.checkPostion(2,1,46)}{this.checkPostion(2,2,46)}{this.checkPostion(2,3,46)}{this.checkPostion(2,4,46)}
                {this.checkPostion(3,1,46)}{this.checkPostion(3,2,46)}{this.checkPostion(3,3,46)}{this.checkPostion(3,4,46)}
                {this.checkPostion(4,1,46)}{this.checkPostion(4,2,46)}{this.checkPostion(4,3,46)}{this.checkPostion(4,4,46)}    
                </View>
                <View style={styles.item}>
                {this.checkPostion(1,1,45)}{this.checkPostion(1,2,45)}{this.checkPostion(1,3,45)}{this.checkPostion(1,4,45)}
                {this.checkPostion(2,1,45)}{this.checkPostion(2,2,45)}{this.checkPostion(2,3,45)}{this.checkPostion(2,4,45)}
                {this.checkPostion(3,1,45)}{this.checkPostion(3,2,45)}{this.checkPostion(3,3,45)}{this.checkPostion(3,4,45)}
                {this.checkPostion(4,1,45)}{this.checkPostion(4,2,45)}{this.checkPostion(4,3,45)}{this.checkPostion(4,4,45)}    
                </View>
            </View>
          </View>
          {/* ============================= Winner Zone =========================== */}
          <View style={styles.winnerZone}>
            <View>
              {this.checkPostion(1,1,"winner")}{this.checkPostion(2,1,"winner")}{this.checkPostion(3,1,"winner")}{this.checkPostion(4,1,"winner")}
            </View>
            <View>
              {this.checkPostion(2,2,"winner")}{this.checkPostion(1,2,"winner")}{this.checkPostion(3,2,"winner")}{this.checkPostion(4,2,"winner")}
            </View>
            <View>
              {this.checkPostion(3,3,"winner")}{this.checkPostion(1,3,"winner")}{this.checkPostion(2,3,"winner")}{this.checkPostion(4,3,"winner")}
            </View>
            <View>
              {this.checkPostion(4,4,"winner")}{this.checkPostion(1,4,"winner")}{this.checkPostion(2,4,"winner")}{this.checkPostion(3,4,"winner")}
            </View>
          </View>
          {/* ============================== Last Triplet */}
          <View style={styles.Second}>
            <View style={[row.Style,{borderRightWidth : 2}]}>
              <View style={styles.item}>
                  {this.checkPostion(1,1,19)}{this.checkPostion(1,2,19)}{this.checkPostion(1,3,19)}{this.checkPostion(1,4,19)}
                  {this.checkPostion(2,1,19)}{this.checkPostion(2,2,19)}{this.checkPostion(2,3,19)}{this.checkPostion(2,4,19)}
                  {this.checkPostion(3,1,19)}{this.checkPostion(3,2,19)}{this.checkPostion(3,3,19)}{this.checkPostion(3,4,19)}
                  {this.checkPostion(4,1,19)}{this.checkPostion(4,2,19)}{this.checkPostion(4,3,19)}{this.checkPostion(4,4,19)}
               </View>
              <View style={styles.item}>
                  {this.checkPostion(1,1,20)}{this.checkPostion(1,2,20)}{this.checkPostion(1,3,20)}{this.checkPostion(1,4,20)}
                  {this.checkPostion(2,1,20)}{this.checkPostion(2,2,20)}{this.checkPostion(2,3,20)}{this.checkPostion(2,4,20)}
                  {this.checkPostion(3,1,20)}{this.checkPostion(3,2,20)}{this.checkPostion(3,3,20)}{this.checkPostion(3,4,20)}
                  {this.checkPostion(4,1,20)}{this.checkPostion(4,2,20)}{this.checkPostion(4,3,20)}{this.checkPostion(4,4,20)}
                 </View>
              <View style={styles.item}>
                {this.checkPostion(1,1,21)}{this.checkPostion(1,2,21)}{this.checkPostion(1,3,21)}{this.checkPostion(1,4,21)}
                {this.checkPostion(2,1,21)}{this.checkPostion(2,2,21)}{this.checkPostion(2,3,21)}{this.checkPostion(2,4,21)}
                {this.checkPostion(3,1,21)}{this.checkPostion(3,2,21)}{this.checkPostion(3,3,21)}{this.checkPostion(3,4,21)}
                {this.checkPostion(4,1,21)}{this.checkPostion(4,2,21)}{this.checkPostion(4,3,21)}{this.checkPostion(4,4,21)}
                </View>
              <View style={[styles.item,{backgroundColor : "#ffcff0"}]}>
                {this.checkPostion(1,1,22)}{this.checkPostion(1,2,22)}{this.checkPostion(1,3,22)}{this.checkPostion(1,4,22)}
                {this.checkPostion(2,1,22)}{this.checkPostion(2,2,22)}{this.checkPostion(2,3,22)}{this.checkPostion(2,4,22)}
                {this.checkPostion(3,1,22)}{this.checkPostion(3,2,22)}{this.checkPostion(3,3,22)}{this.checkPostion(3,4,22)}
                {this.checkPostion(4,1,22)}{this.checkPostion(4,2,22)}{this.checkPostion(4,3,22)}{this.checkPostion(4,4,22)}
                </View>
              <View style={styles.item}>
                {this.checkPostion(1,1,23)}{this.checkPostion(1,2,23)}{this.checkPostion(1,3,23)}{this.checkPostion(1,4,23)}
                {this.checkPostion(2,1,23)}{this.checkPostion(2,2,23)}{this.checkPostion(2,3,23)}{this.checkPostion(2,4,23)}
                {this.checkPostion(3,1,23)}{this.checkPostion(3,2,23)}{this.checkPostion(3,3,23)}{this.checkPostion(3,4,23)}
                {this.checkPostion(4,1,23)}{this.checkPostion(4,2,23)}{this.checkPostion(4,3,23)}{this.checkPostion(4,4,23)}
                </View>
              <View style={styles.item}>
                  {this.checkPostion(1,1,24)}{this.checkPostion(1,2,24)}{this.checkPostion(1,3,24)}{this.checkPostion(1,4,24)}
                  {this.checkPostion(2,1,24)}{this.checkPostion(2,2,24)}{this.checkPostion(2,3,24)}{this.checkPostion(2,4,24)}
                  {this.checkPostion(3,1,24)}{this.checkPostion(3,2,24)}{this.checkPostion(3,3,24)}{this.checkPostion(3,4,24)}
                  {this.checkPostion(4,1,24)}{this.checkPostion(4,2,24)}{this.checkPostion(4,3,24)}{this.checkPostion(4,4,24)}
                 </View>
            </View>
            <View style={[row.Style,{borderRightWidth : 2}]}>
              <View style={[styles.item,styles.orange]}>
                    {this.checkPostion(1,1,67)}{this.checkPostion(1,2,67)}{this.checkPostion(1,3,67)}{this.checkPostion(1,4,67)}
                    {this.checkPostion(2,1,67)}{this.checkPostion(2,2,67)}{this.checkPostion(2,3,67)}{this.checkPostion(2,4,67)}
                    {this.checkPostion(3,1,67)}{this.checkPostion(3,2,67)}{this.checkPostion(3,3,67)}{this.checkPostion(3,4,67)}
                    {this.checkPostion(4,1,67)}{this.checkPostion(4,2,67)}{this.checkPostion(4,3,67)}{this.checkPostion(4,4,67)}
                  </View>
              <View style={[styles.item,styles.orange]}>
                    {this.checkPostion(1,1,66)}{this.checkPostion(1,2,66)}{this.checkPostion(1,3,66)}{this.checkPostion(1,4,66)}
                    {this.checkPostion(2,1,66)}{this.checkPostion(2,2,66)}{this.checkPostion(2,3,66)}{this.checkPostion(2,4,66)}
                    {this.checkPostion(3,1,66)}{this.checkPostion(3,2,66)}{this.checkPostion(3,3,66)}{this.checkPostion(3,4,66)}
                    {this.checkPostion(4,1,66)}{this.checkPostion(4,2,66)}{this.checkPostion(4,3,66)}{this.checkPostion(4,4,66)}
                  </View>
              <View style={[styles.item,styles.orange]}>
                  {this.checkPostion(1,1,65)}{this.checkPostion(1,2,65)}{this.checkPostion(1,3,65)}{this.checkPostion(1,4,65)}
                  {this.checkPostion(2,1,65)}{this.checkPostion(2,2,65)}{this.checkPostion(2,3,65)}{this.checkPostion(2,4,65)}
                  {this.checkPostion(3,1,65)}{this.checkPostion(3,2,65)}{this.checkPostion(3,3,65)}{this.checkPostion(3,4,65)}
                  {this.checkPostion(4,1,65)}{this.checkPostion(4,2,65)}{this.checkPostion(4,3,65)}{this.checkPostion(4,4,65)}
                </View>
              <View style={[styles.item,styles.orange]}>
                  {this.checkPostion(1,1,64)}{this.checkPostion(1,2,64)}{this.checkPostion(1,3,64)}{this.checkPostion(1,4,64)}
                  {this.checkPostion(2,1,64)}{this.checkPostion(2,2,64)}{this.checkPostion(2,3,64)}{this.checkPostion(2,4,64)}
                  {this.checkPostion(3,1,64)}{this.checkPostion(3,2,64)}{this.checkPostion(3,3,64)}{this.checkPostion(3,4,64)}
                  {this.checkPostion(4,1,64)}{this.checkPostion(4,2,64)}{this.checkPostion(4,3,64)}{this.checkPostion(4,4,64)}
                </View>
              <View style={[styles.item,styles.orange]}>
                  {this.checkPostion(1,1,63)}{this.checkPostion(1,2,63)}{this.checkPostion(1,3,63)}{this.checkPostion(1,4,63)}
                  {this.checkPostion(2,1,63)}{this.checkPostion(2,2,63)}{this.checkPostion(2,3,63)}{this.checkPostion(2,4,63)}
                  {this.checkPostion(3,1,63)}{this.checkPostion(3,2,63)}{this.checkPostion(3,3,63)}{this.checkPostion(3,4,63)}
                  {this.checkPostion(4,1,63)}{this.checkPostion(4,2,63)}{this.checkPostion(4,3,63)}{this.checkPostion(4,4,63)}
                </View>
              <View style={styles.item}>
                    {this.checkPostion(1,1,25)}{this.checkPostion(1,2,25)}{this.checkPostion(1,3,25)}{this.checkPostion(1,4,25)}
                    {this.checkPostion(2,1,25)}{this.checkPostion(2,2,25)}{this.checkPostion(2,3,25)}{this.checkPostion(2,4,25)}
                    {this.checkPostion(3,1,25)}{this.checkPostion(3,2,25)}{this.checkPostion(3,3,25)}{this.checkPostion(3,4,25)}
                    {this.checkPostion(4,1,25)}{this.checkPostion(4,2,25)}{this.checkPostion(4,3,25)}{this.checkPostion(4,4,25)}
                  </View>
            </View>
            <View style={[row.Style,{borderRightWidth : 2}]}>
              <View style={styles.item}>
                    {this.checkPostion(1,1,31)}{this.checkPostion(1,2,31)}{this.checkPostion(1,3,31)}{this.checkPostion(1,4,31)}
                    {this.checkPostion(2,1,31)}{this.checkPostion(2,2,31)}{this.checkPostion(2,3,31)}{this.checkPostion(2,4,31)}
                    {this.checkPostion(3,1,31)}{this.checkPostion(3,2,31)}{this.checkPostion(3,3,31)}{this.checkPostion(3,4,31)}
                    {this.checkPostion(4,1,31)}{this.checkPostion(4,2,31)}{this.checkPostion(4,3,31)}{this.checkPostion(4,4,31)}
                 </View>
              <View style={styles.item}>
                    {this.checkPostion(1,1,30)}{this.checkPostion(1,2,30)}{this.checkPostion(1,3,30)}{this.checkPostion(1,4,30)}
                    {this.checkPostion(2,1,30)}{this.checkPostion(2,2,30)}{this.checkPostion(2,3,30)}{this.checkPostion(2,4,30)}
                    {this.checkPostion(3,1,30)}{this.checkPostion(3,2,30)}{this.checkPostion(3,3,30)}{this.checkPostion(3,4,30)}
                    {this.checkPostion(4,1,30)}{this.checkPostion(4,2,30)}{this.checkPostion(4,3,30)}{this.checkPostion(4,4,30)}
                   </View>
              <View style={styles.item}>
                  {this.checkPostion(1,1,29)}{this.checkPostion(1,2,29)}{this.checkPostion(1,3,29)}{this.checkPostion(1,4,29)}
                  {this.checkPostion(2,1,29)}{this.checkPostion(2,2,29)}{this.checkPostion(2,3,29)}{this.checkPostion(2,4,29)}
                  {this.checkPostion(3,1,29)}{this.checkPostion(3,2,29)}{this.checkPostion(3,3,29)}{this.checkPostion(3,4,29)}
                  {this.checkPostion(4,1,29)}{this.checkPostion(4,2,29)}{this.checkPostion(4,3,29)}{this.checkPostion(4,4,29)}
                  </View>
              <View style={styles.item}>
                  {this.checkPostion(1,1,28)}{this.checkPostion(1,2,28)}{this.checkPostion(1,3,28)}{this.checkPostion(1,4,28)}
                  {this.checkPostion(2,1,28)}{this.checkPostion(2,2,28)}{this.checkPostion(2,3,28)}{this.checkPostion(2,4,28)}
                  {this.checkPostion(3,1,28)}{this.checkPostion(3,2,28)}{this.checkPostion(3,3,28)}{this.checkPostion(3,4,28)}
                  {this.checkPostion(4,1,28)}{this.checkPostion(4,2,28)}{this.checkPostion(4,3,28)}{this.checkPostion(4,4,28)}
                  </View>
              <View style={[styles.item,styles.orange,{backgroundColor : "#ffcff0"}]}>
                  {this.checkPostion(1,1,27)}{this.checkPostion(1,2,27)}{this.checkPostion(1,3,27)}{this.checkPostion(1,4,27)}
                  {this.checkPostion(2,1,27)}{this.checkPostion(2,2,27)}{this.checkPostion(2,3,27)}{this.checkPostion(2,4,27)}
                  {this.checkPostion(3,1,27)}{this.checkPostion(3,2,27)}{this.checkPostion(3,3,27)}{this.checkPostion(3,4,27)}
                  {this.checkPostion(4,1,27)}{this.checkPostion(4,2,27)}{this.checkPostion(4,3,27)}{this.checkPostion(4,4,27)}
                  </View>
              <View style={styles.item}>
                    {this.checkPostion(1,1,26)}{this.checkPostion(1,2,26)}{this.checkPostion(1,3,26)}{this.checkPostion(1,4,26)}
                    {this.checkPostion(2,1,26)}{this.checkPostion(2,2,26)}{this.checkPostion(2,3,26)}{this.checkPostion(2,4,26)}
                    {this.checkPostion(3,1,26)}{this.checkPostion(3,2,26)}{this.checkPostion(3,3,26)}{this.checkPostion(3,4,26)}
                    {this.checkPostion(4,1,26)}{this.checkPostion(4,2,26)}{this.checkPostion(4,3,26)}{this.checkPostion(4,4,26)}
                   </View>
            </View>
          </View>   
        </View>
        {/* =============================== Lowest Part ============================= */}
        <View style={row.Style}>
          <View>
          <View style={[Players.styles,{marginLeft : Dimensions.get("window").width/50,borderRightWidth : 1}]}>
          <ImageBackground source={require("./assets/tomJerry.png")} style={{width: '100%', height: '100%'}}>
            <View>
            <View style={row.Style}>
                <View style={styles.places}>
                <TouchableOpacity >
                    {this.checkPostion(4,1,-14)}
                  </TouchableOpacity>
                </View>
                <View style={[styles.places,{marginLeft : 90}]}>
                <TouchableOpacity >
                    {this.checkPostion(4,2,-24)}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={row.Style}>
                <View style={[styles.places,{marginTop : 90}]}>
                <TouchableOpacity >
                    {this.checkPostion(4,3,-34)}
                  </TouchableOpacity>
                </View>
                <View style={[styles.places,{marginLeft : 90,marginTop : 90}]}>
                <TouchableOpacity >
                    {this.checkPostion(4,4,-44)}
                  </TouchableOpacity>
              </View>
              </View>
            </View>
          </ImageBackground>
          
          </View>
          <TouchableOpacity  onPress={()=>{this.generateRandomNumber(4)}}>
            <Image style={{ width : 90,height : 70,marginLeft : 30,marginTop : 10}} source={this.state.image4} />
          </TouchableOpacity>
          </View>
         <View style={row.Style}>
              <View style={styles.first}>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,44)}{this.checkPostion(1,2,44)}{this.checkPostion(1,3,44)}{this.checkPostion(1,4,44)}
                    {this.checkPostion(2,1,44)}{this.checkPostion(2,2,44)}{this.checkPostion(2,3,44)}{this.checkPostion(2,4,44)}
                    {this.checkPostion(3,1,44)}{this.checkPostion(3,2,44)}{this.checkPostion(3,3,44)}{this.checkPostion(3,4,44)}
                    {this.checkPostion(4,1,44)}{this.checkPostion(4,2,44)}{this.checkPostion(4,3,44)}{this.checkPostion(4,4,44)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,43)}{this.checkPostion(1,2,43)}{this.checkPostion(1,3,43)}{this.checkPostion(1,4,43)}
                    {this.checkPostion(2,1,43)}{this.checkPostion(2,2,43)}{this.checkPostion(2,3,43)}{this.checkPostion(2,4,43)}
                    {this.checkPostion(3,1,43)}{this.checkPostion(3,2,43)}{this.checkPostion(3,3,43)}{this.checkPostion(3,4,43)}
                    {this.checkPostion(4,1,43)}{this.checkPostion(4,2,43)}{this.checkPostion(4,3,43)}{this.checkPostion(4,4,43)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,42)}{this.checkPostion(1,2,42)}{this.checkPostion(1,3,42)}{this.checkPostion(1,4,42)}
                    {this.checkPostion(2,1,42)}{this.checkPostion(2,2,42)}{this.checkPostion(2,3,42)}{this.checkPostion(2,4,42)}
                    {this.checkPostion(3,1,42)}{this.checkPostion(3,2,42)}{this.checkPostion(3,3,42)}{this.checkPostion(3,4,42)}
                    {this.checkPostion(4,1,42)}{this.checkPostion(4,2,42)}{this.checkPostion(4,3,42)}{this.checkPostion(4,4,42)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,41)}{this.checkPostion(1,2,41)}{this.checkPostion(1,3,41)}{this.checkPostion(1,4,41)}
                    {this.checkPostion(2,1,41)}{this.checkPostion(2,2,41)}{this.checkPostion(2,3,41)}{this.checkPostion(2,4,41)}
                    {this.checkPostion(3,1,41)}{this.checkPostion(3,2,41)}{this.checkPostion(3,3,41)}{this.checkPostion(3,4,41)}
                    {this.checkPostion(4,1,41)}{this.checkPostion(4,2,41)}{this.checkPostion(4,3,41)}{this.checkPostion(4,4,41)}
                  </View>
                  <View style={[styles.item,styles.blue,{backgroundColor : "#67E6DC"}]}>
                    {this.checkPostion(1,1,40)}{this.checkPostion(1,2,40)}{this.checkPostion(1,3,40)}{this.checkPostion(1,4,40)}
                    {this.checkPostion(2,1,40)}{this.checkPostion(2,2,40)}{this.checkPostion(2,3,40)}{this.checkPostion(2,4,40)}
                    {this.checkPostion(3,1,40)}{this.checkPostion(3,2,40)}{this.checkPostion(3,3,40)}{this.checkPostion(3,4,40)}
                    {this.checkPostion(4,1,40)}{this.checkPostion(4,2,40)}{this.checkPostion(4,3,40)}{this.checkPostion(4,4,40)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,39)}{this.checkPostion(1,2,39)}{this.checkPostion(1,3,39)}{this.checkPostion(1,4,39)}
                    {this.checkPostion(2,1,39)}{this.checkPostion(2,2,39)}{this.checkPostion(2,3,39)}{this.checkPostion(2,4,39)}
                    {this.checkPostion(3,1,39)}{this.checkPostion(3,2,39)}{this.checkPostion(3,3,39)}{this.checkPostion(3,4,39)}
                    {this.checkPostion(4,1,39)}{this.checkPostion(4,2,39)}{this.checkPostion(4,3,39)}{this.checkPostion(4,4,39)}
                  </View>
              </View>
              <View style={styles.second}>
                  <View style={[styles.item,styles.blue]}>
                    {this.checkPostion(1,1,72)}{this.checkPostion(1,2,72)}{this.checkPostion(1,3,72)}{this.checkPostion(1,4,72)}
                    {this.checkPostion(2,1,72)}{this.checkPostion(2,2,72)}{this.checkPostion(2,3,72)}{this.checkPostion(2,4,72)}
                    {this.checkPostion(3,1,72)}{this.checkPostion(3,2,72)}{this.checkPostion(3,3,72)}{this.checkPostion(3,4,72)}
                    {this.checkPostion(4,1,72)}{this.checkPostion(4,2,72)}{this.checkPostion(4,3,72)}{this.checkPostion(4,4,72)}
                  </View>
                  <View style={[styles.item,styles.blue]}>
                    {this.checkPostion(1,1,71)}{this.checkPostion(1,2,71)}{this.checkPostion(1,3,71)}{this.checkPostion(1,4,71)}
                    {this.checkPostion(2,1,71)}{this.checkPostion(2,2,71)}{this.checkPostion(2,3,71)}{this.checkPostion(2,4,71)}
                    {this.checkPostion(3,1,71)}{this.checkPostion(3,2,71)}{this.checkPostion(3,3,71)}{this.checkPostion(3,4,71)}
                    {this.checkPostion(4,1,71)}{this.checkPostion(4,2,71)}{this.checkPostion(4,3,71)}{this.checkPostion(4,4,71)}
                  </View>
                  <View style={[styles.item,styles.blue]}>
                    {this.checkPostion(1,1,70)}{this.checkPostion(1,2,70)}{this.checkPostion(1,3,70)}{this.checkPostion(1,4,70)}
                    {this.checkPostion(2,1,70)}{this.checkPostion(2,2,70)}{this.checkPostion(2,3,70)}{this.checkPostion(2,4,70)}
                    {this.checkPostion(3,1,70)}{this.checkPostion(3,2,70)}{this.checkPostion(3,3,70)}{this.checkPostion(3,4,70)}
                    {this.checkPostion(4,1,70)}{this.checkPostion(4,2,70)}{this.checkPostion(4,3,70)}{this.checkPostion(4,4,70)}
                  </View>
                  <View style={[styles.item,styles.blue]}>
                    {this.checkPostion(1,1,69)}{this.checkPostion(1,2,69)}{this.checkPostion(1,3,69)}{this.checkPostion(1,4,69)}
                    {this.checkPostion(2,1,69)}{this.checkPostion(2,2,69)}{this.checkPostion(2,3,69)}{this.checkPostion(2,4,69)}
                    {this.checkPostion(3,1,69)}{this.checkPostion(3,2,69)}{this.checkPostion(3,3,69)}{this.checkPostion(3,4,69)}
                    {this.checkPostion(4,1,69)}{this.checkPostion(4,2,69)}{this.checkPostion(4,3,69)}{this.checkPostion(4,4,69)}
                  </View>
                  <View style={[styles.item,styles.blue]}>
                    {this.checkPostion(1,1,68)}{this.checkPostion(1,2,68)}{this.checkPostion(1,3,68)}{this.checkPostion(1,4,68)}
                    {this.checkPostion(2,1,68)}{this.checkPostion(2,2,68)}{this.checkPostion(2,3,68)}{this.checkPostion(2,4,68)}
                    {this.checkPostion(3,1,68)}{this.checkPostion(3,2,68)}{this.checkPostion(3,3,68)}{this.checkPostion(3,4,68)}
                    {this.checkPostion(4,1,68)}{this.checkPostion(4,2,68)}{this.checkPostion(4,3,68)}{this.checkPostion(4,4,68)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,38)}{this.checkPostion(1,2,38)}{this.checkPostion(1,3,38)}{this.checkPostion(1,4,38)}
                    {this.checkPostion(2,1,38)}{this.checkPostion(2,2,38)}{this.checkPostion(2,3,38)}{this.checkPostion(2,4,38)}
                    {this.checkPostion(3,1,38)}{this.checkPostion(3,2,38)}{this.checkPostion(3,3,38)}{this.checkPostion(3,4,38)}
                    {this.checkPostion(4,1,38)}{this.checkPostion(4,2,38)}{this.checkPostion(4,3,38)}{this.checkPostion(4,4,38)}
                  </View>
              </View>
              <View style={styles.third}>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,32)}{this.checkPostion(1,2,32)}{this.checkPostion(1,3,32)}{this.checkPostion(1,4,32)}
                    {this.checkPostion(2,1,32)}{this.checkPostion(2,2,32)}{this.checkPostion(2,3,32)}{this.checkPostion(2,4,32)}
                    {this.checkPostion(3,1,32)}{this.checkPostion(3,2,32)}{this.checkPostion(3,3,32)}{this.checkPostion(3,4,32)}
                    {this.checkPostion(4,1,32)}{this.checkPostion(4,2,32)}{this.checkPostion(4,3,32)}{this.checkPostion(4,4,32)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,33)}{this.checkPostion(1,2,33)}{this.checkPostion(1,3,33)}{this.checkPostion(1,4,33)}
                    {this.checkPostion(2,1,33)}{this.checkPostion(2,2,33)}{this.checkPostion(2,3,33)}{this.checkPostion(2,4,33)}
                    {this.checkPostion(3,1,33)}{this.checkPostion(3,2,33)}{this.checkPostion(3,3,33)}{this.checkPostion(3,4,33)}
                    {this.checkPostion(4,1,33)}{this.checkPostion(4,2,33)}{this.checkPostion(4,3,33)}{this.checkPostion(4,4,33)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,34)}{this.checkPostion(1,2,34)}{this.checkPostion(1,3,34)}{this.checkPostion(1,4,34)}
                    {this.checkPostion(2,1,34)}{this.checkPostion(2,2,34)}{this.checkPostion(2,3,34)}{this.checkPostion(2,4,34)}
                    {this.checkPostion(3,1,34)}{this.checkPostion(3,2,34)}{this.checkPostion(3,3,34)}{this.checkPostion(3,4,34)}
                    {this.checkPostion(4,1,34)}{this.checkPostion(4,2,34)}{this.checkPostion(4,3,34)}{this.checkPostion(4,4,34)}
                  </View>
                  <View style={[styles.item,{backgroundColor : "#67E6DC"}]}>
                    {this.checkPostion(1,1,35)}{this.checkPostion(1,2,35)}{this.checkPostion(1,3,35)}{this.checkPostion(1,4,35)}
                    {this.checkPostion(2,1,35)}{this.checkPostion(2,2,35)}{this.checkPostion(2,3,35)}{this.checkPostion(2,4,35)}
                    {this.checkPostion(3,1,35)}{this.checkPostion(3,2,35)}{this.checkPostion(3,3,35)}{this.checkPostion(3,4,35)}
                    {this.checkPostion(4,1,35)}{this.checkPostion(4,2,35)}{this.checkPostion(4,3,35)}{this.checkPostion(4,4,35)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,36)}{this.checkPostion(1,2,36)}{this.checkPostion(1,3,36)}{this.checkPostion(1,4,36)}
                    {this.checkPostion(2,1,36)}{this.checkPostion(2,2,36)}{this.checkPostion(2,3,36)}{this.checkPostion(2,4,36)}
                    {this.checkPostion(3,1,36)}{this.checkPostion(3,2,36)}{this.checkPostion(3,3,36)}{this.checkPostion(3,4,36)}
                    {this.checkPostion(4,1,36)}{this.checkPostion(4,2,36)}{this.checkPostion(4,3,36)}{this.checkPostion(4,4,36)}
                  </View>
                  <View style={styles.item}>
                    {this.checkPostion(1,1,37)}{this.checkPostion(1,2,37)}{this.checkPostion(1,3,37)}{this.checkPostion(1,4,37)}
                    {this.checkPostion(2,1,37)}{this.checkPostion(2,2,37)}{this.checkPostion(2,3,37)}{this.checkPostion(2,4,37)}
                    {this.checkPostion(3,1,37)}{this.checkPostion(3,2,37)}{this.checkPostion(3,3,37)}{this.checkPostion(3,4,37)}
                    {this.checkPostion(4,1,37)}{this.checkPostion(4,2,37)}{this.checkPostion(4,3,37)}{this.checkPostion(4,4,37)}
                  </View>
              </View>
          </View>
          <View>
            <View style={[Players.styles,{borderLeftWidth : 1}]}>
            <ImageBackground source={require("./assets/ben10.jpeg")} style={{width: '100%', height: '100%'}}>
              <View>
                  <View style={row.Style}>
                    <View style={styles.places}>
                    <TouchableOpacity >
                        {this.checkPostion(3,1,-13)}
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.places,{marginLeft : 90}]}>
                    <TouchableOpacity >
                        {this.checkPostion(3,2,-23)}
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={row.Style}>
                    <View style={[styles.places,{marginTop : 90}]}>
                    <TouchableOpacity >
                        {this.checkPostion(3,3,-33)}
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.places,{marginLeft : 90,marginTop : 90}]}>
                    <TouchableOpacity >
                        {this.checkPostion(3,4,-43)}
                      </TouchableOpacity>
                  </View>
                </View>
            </View>
            
              </ImageBackground>
            </View>
          <TouchableOpacity  onPress={()=>{this.generateRandomNumber(3)}}>
            <Image style={{ width : 90,height : 70,marginLeft : 30,marginTop : 10}} source={this.state.image3} />
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.message}>
          <Text style={{color : "red",fontSize : 30,marginLeft : 60,marginTop : 20}}> {this.state.turnMessage} {this.state.moveMessage} </Text>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'khaki',
  },
  red : {
    backgroundColor : "#fa9daa"
  },  
  green : {
    backgroundColor : "#9effa5",
  },
  orange : {
    backgroundColor : "#ffcff0"
  },
  item : {
    borderWidth : 1,borderColor : "black",width : Dimensions.get("window").width*6.4/100,height : Dimensions.get("window").width*6.4/100
  },
  First : {
    flexDirection : "column",marginLeft : Dimensions.get("window").width/50 
  },
  wholeSetup : {
    marginTop : 70
  },
  winnerZone : {
    borderWidth : 4,borderLeftColor : "red",borderTopColor : "green",borderRightColor : "orange",borderBottomColor : "blue",width : Dimensions.get("window").width*19.2/100,height : Dimensions.get("window").width*19.2/100
    ,flexDirection : "row"
  },
  blue : {
    backgroundColor : "#67E6DC"
  },
  places : {
    backgroundColor : "white",borderWidth : 2,width : 30,height : 30,borderRadius : 30
  },
  icons : {
    marginLeft : 3,marginTop : 2
  }
});