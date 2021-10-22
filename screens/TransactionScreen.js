import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from "expo-permissions"
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';

export default class TransactionScreen extends React.Component {
  constructor(){
    super(
      this.state={
      hascamerapermissions:null,
      scanned:false,
      scanneddata:"",
      buttonState:"normal" ,
      bookid:"",
      studentid:"" ,
      
      
      }
    )
  }
getCameraPermissions=async(buttonState)=>{
  const {status}=await Permissions.askAsync(PERMISSIONS.CAMERA)
this.setState({
  hascamerapermissions:status==="granted",
  buttonState:"buttonState",
  scanned:false
})
}

handleBarCodeScanned=async({type,data})=>{
  if(this.state.buttonState==="bookid"){

  
  this.setState({
    scanned:true,
    scanneddata:data,
    buttonState:"normal",
    bookid:data
  })
}
else if(this.state.buttonState){
  this.setState({
  scanned:true,
    scanneddata:data,
    buttonState:"normal",
    studentid:data
  })

}
}  

    render(){
if(this.state.buttonState!=="normal" && this.state.hascamerapermissions){
return(
  <BarCodeScanner
  onBarCodeScanned={scanned?undefined:this.handleBarCodeScanned}
  style={
    StyleSheet.absoluteFillObject
  }
  ></BarCodeScanner>
)
}

else if(this.state.buttonState==="normal"){


  return (
    <View style={styles.container}>
      <Text>TransactionScreen</Text>
      <Text>
        {this.state.hascamerapermissions===true? this.state.scanneddata:"request camera permission"}
      </Text>
      <View>
        <TextInput
        placeholder={"bookid"}
       value={this.state.bookid}
        /> 
<TouchableOpacity
onPress={()=>this.getCameraPermissions("bookid")}
>
  <Text>Scan </Text>
</TouchableOpacity>
</View>
<View>
        <TextInput
        placeholder={"studentid"}
       value={this.statestudentid}
        /> 
<TouchableOpacity
onPress={()=>this.getCameraPermissions("studentid")}
>
  <Text>Scan </Text>
</TouchableOpacity>
</View>
    </View>
  );
}
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
