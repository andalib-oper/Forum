import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Dimensions } from 'react-native'
import React,{useState} from 'react'
import CustomHeader from '../../../assets/components/CustomHeader'
import Photo from './Photo';
import Poll from './Poll';
import TextS from './TextS';
import { useNavigation } from '@react-navigation/native';

const Add = () => {
  const [index, setIndex] = useState(0);
  const status = ['Photo', 'Text', 'Poll'];
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <CustomHeader
        backButton={() => navigation.goBack()}
        headerName="Ask Question"
        rightbutton={false}
      />
      <View style={styles.statusView}>
       <View style={styles.tabHead}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {status.length &&
          status.map((e, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.tabBox}
                activeOpacity={1}
                underlayColor=""
                onPress={() => {
                  setIndex(i);
                }}>
                <View
                  style={[
                    styles.tabButton,
                    index === i && styles.tabButtonActive,
                  ]}>
                  <Text
                    style={[
                      styles.tabText,
                      index === i && styles.tabTextActive,
                    ]}>
                    {e}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      </View>
      <View style={styles.tabContainer}>
        <ScrollView>
        {index === 0 && <Photo />}
        {index === 1 && <TextS />}
        {index === 2 && <Poll/>}
        </ScrollView>
      </View>
    </View>
  )
}

export default Add
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  tabHead: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginLeft:'5%',
    width:windowWidth/1,
  },
  tabBox: {},
  tabButton: {
    width: windowWidth/4.8,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  tabButtonActive: {
    width: windowWidth/4.8,
    height: 40,
    borderBottomColor: '#EF7E46',
    borderBottomWidth:2,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTextActive:{
    color:'#EF7E46',
    fontWeight:'bold',
    fontSize:16
  },
  tabText:{
    color:'#1F1F1F',
    fontWeight:'bold',
    fontSize:16
  },
  tabContainer:{
    flex:1,
    width:windowWidth/1
  },
  statusView:{
    width:windowWidth/1.1,
    borderBottomColor:'#f7f7f7',
    borderBottomWidth:1,
    alignSelf:'center',
    // margin:5,
    // padding:5
  }
})