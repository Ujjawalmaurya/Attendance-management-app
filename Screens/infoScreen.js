import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ToastAndroid,FlatList } from 'react-native';
import {Button, Card, CardItem,Header} from 'native-base'
import AddDetail from './AddDetail'
import Realm from 'realm'
import realm from './realm'
import Entypo from 'react-native-vector-icons/Entypo'
import EditScreen from './EditScreen'


export default class infoScreen extends React.Component{
   constructor(props){
       super(props)
       this.state={
           name:'DummyText',
           branch:'Dummybranch',
           rollNo:'DummyRolNo',
           index:0,
           
           pCount:'0'

       }
   }
   static navigationOptions={
    headerRight:()=>(
        <TouchableOpacity
        onPress={()=>{
           
        }}
        >
    <Entypo
    name='cycle'
    size={20}
    />
        </TouchableOpacity>
    )
}
   
   

  
    render(){


      //these statement are used to count the present 
      
        let index=this.props.navigation.getParam('id','');
       
        var dataToShow=realm.objects('tempSinfo')
       var rFinalNumber=dataToShow[index].rollNo
    
        
       
       
         
        var presentData=realm.objects('aData')
        let countToShowData = presentData.filtered('rollNo==$0',rFinalNumber)
        var countData=realm.objects('aData')
       
        var presentCount= countToShowData.length
        
           
       //here count present statement ends













       
        let id=this.props.navigation.getParam('id','');
      
        dataToShow=realm.objects('tempSinfo')
       

        return(
      <View style={styles.mainContainer}>
         
              <Card style={styles.cardContainer}>
                 <Header style={styles.header}><Text style={styles.headerText}>Student info</Text></Header>

               <View style={styles.infoTextContainer}>
                       <Text style={styles.infoText}>
                        Name: {dataToShow[id].name}
                       </Text>
                       <Text style={styles.infoText}>
                        Branch: {dataToShow[id].branch}
                        </Text>
                        <Text style={styles.infoText}>
                        Roll No: {dataToShow[id].rollNo}
                        </Text>
                        <Text style={styles.infoText}>
                        Present Count:{presentCount}
                        </Text>
                        <Text style={styles.infoText}>
                        Absent Count:
                        </Text>
               </View>
              </Card>

              
                 


              </View>

             
              
         
       




    






        )
    }
}


const styles=StyleSheet.create({
    
mainContainer:{
  flex:1,
  backgroundColor:'black'
    },
  
  cardContainer:{
      backgroundColor:'white',
      height:170,
      justifyContent:'center',
    

  },
  infoTextContainer:{
      flex:1,
      flexDirection:'row',
      alignContent:'space-around',
      flexWrap:'wrap',
      
      
      justifyContent:'center',

  
  },
  infoText:{
      margin:10

  },
  header:{
   height:30,
   borderRadius:10,
   backgroundColor:'#0A79DF'

  },
  headerText:{

  },
  editButtonContainer:{


justifyContent:'flex-end',
alignItems:'flex-end',
height:60,
backfaceVisibility:'visible'

  },
  editButton:{
    backgroundColor:"#0A79DF",
    height:60,
    width:60,
    borderRadius:35,
    justifyContent:'center'
  }


})