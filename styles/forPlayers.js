import {StyleSheet,Dimensions} from 'react-native'
const Players = StyleSheet.create({
    styles : {
        borderWidth : 2,width : Dimensions.get("window").width*38.4/100,height : Dimensions.get("window").width*38.4/100
    },
    players : {
        borderColor : "black"
       ,borderRadius : 100,borderWidth : 1,marginTop : "10%",height : "80%",width : "80%",marginLeft : "10%"
    }
})
const row = StyleSheet.create({
    Style : {
        flexDirection : "row"
    }
})
export {Players,row}