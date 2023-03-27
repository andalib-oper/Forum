import { StyleSheet, Text, View,TextInput,TouchableOpacity,Dimensions, ScrollView} from 'react-native'
import React,{useState}from 'react'

const TextS = () => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView>
      <View>
        <Text
          style={[styles.uploadPicText, {marginLeft: '3%', color: '#afafaf'}]}>
          Questions
        </Text>
        <View style={styles.textInputView}>
          <TextInput
            placeholder="Ask a questions"
            placeholderTextColor={'grey'}
            maxLength={500}
            textAlignVertical="top"
            style={styles.textInput}
            multiline={true}
            onChangeText={e => setValue(e)}
          />
          <Text style={styles.limitText}>{value.length}/500</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.shareButton}>
        <Text style={styles.shareText}>Share</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default TextS
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  uploadPicText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    padding: 10,
    width: '75%',
  },
  uploadPic: {
    elevation: 10,
    margin: 10,
    padding: 10,
    alignSelf: 'flex-end',
    height: 40,
    width: 40,
    borderRadius: 100 / 2,
    backgroundColor: '#fff',
  },
  textInputView: {
    height: 150,
    backgroundColor: '#f7f7f7',
    width: windowWidth / 1.1,
    alignSelf: 'center',
    padding: 10,
    borderColor: '#afafaf',
    borderWidth: 1,
    borderRadius: 10,
  },
  textInput: {
    height: 100,
    backgroundColor: '#f7f7f7',
    width: windowWidth / 1.15,
    alignSelf: 'center',
    padding: 5,
    borderRadius: 10,
    color:'black'
  },
  image: {
    borderRadius: 10,
    height: windowHeight / 3,
    width: windowWidth / 1.1,
    alignSelf: 'center',
  },
  limitText: {
    alignSelf: 'flex-end',
    margin: 10,
    color: 'grey',
    fontSize: 14,
    fontWeight: '500',
  },
  shareButton: {
    alignSelf: 'center',
    marginTop: '50%',
    width:windowWidth/1.2,
    padding:10,
    borderRadius:10,
    backgroundColor:'#EF7E46'
  },
  shareText:{
    padding:5,
    fontSize:16,
    color:'#fff',
    fontWeight:'bold',
    alignSelf:'center'
  }
})