import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Poll = () => {
  const [value, setValue] = useState('');
  const [specification, setSpecification] = useState([
    {img: '', text: ''},
    {img: '', text: ''},
  ]);
  const [image, setImage] = useState('');
  const [opt, setOptn] = useState('');
  const launchLibrary = (name, i) => {
    ImagePicker.openPicker({
      multiple: false,
    }).then(image => {
      setImage(image.path);
      handleChange(name, image?.path, i);
    });
  };
  let handleChange = (name, e, i) => {
    let newFormValues = [...specification];
    newFormValues[i][name] = e;
    setSpecification(newFormValues);
  };
  const handleRemoveClick = index => {
    const list = [...specification];
    list.splice(index, 1);
    setSpecification(list);
  };
  // console.log('spec', image);
  const addSpecification = () => {
    setSpecification([...specification, {img: '', text: ''}]);
  };
  console.log('specifica', specification[specification.length - 1]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* question section */}
        <View>
          <Text
            style={[
              styles.uploadPicText,
              {marginLeft: '3%', color: '#afafaf'},
            ]}>
            Questions
          </Text>
          <View style={styles.textInputView}>
            <TextInput
              placeholder="Ask a questions"
              placeholderTextColor={'grey'}
              maxLength={100}
              textAlignVertical="top"
              style={styles.textInput}
              multiline={true}
              onChangeText={e => setValue(e)}
            />
            <Text style={styles.limitText}>{value.length}/100</Text>
          </View>
        </View>
        {/* poll section */}
        {specification?.map((element, i) => {
          return (
            <View style={styles.optionsView}>
              <TouchableOpacity
                style={styles.optionImageView}
                onPress={() => {
                  launchLibrary('img', i);
                }}>
                <Image
                  source={{
                    uri:
                      element?.img == ''
                        ? 'https://i.ibb.co/JdR2jzg/image-plus.png'
                        : element?.img,
                  }}
                  style={styles.imageOptions}
                />
              </TouchableOpacity>
              <View
                style={[
                  styles.textInputView,
                  {
                    flexDirection: 'row',
                    width: windowWidth / 1.5,
                    height: 50,
                    marginTop: '5%',
                  },
                ]}>
                <TextInput
                  placeholder={`Options\b${i + 1}`}
                  placeholderTextColor={'grey'}
                  maxLength={25}
                  textAlignVertical="center"
                  style={[
                    styles.textInput,
                    {height: 40, width: windowWidth / 1.9},
                  ]}
                  value={element?.text ? element?.text : ''}
                  multiline={true}
                  onChangeText={e => handleChange('text', e, i)}
                />
                <Text
                  style={{alignSelf: 'center', color: 'grey', fontSize: 14}}>
                  0/25
                </Text>
              </View>
              {specification.length - 1 === i ? (
                <TouchableOpacity
                  onPress={() => {
                    addSpecification();
                  }}
                  style={styles.addButton}>
                  <AntDesign name="plus" size={24} color={'#EF7E46'} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    handleRemoveClick(i);
                  }}
                  style={styles.addButton}>
                  <AntDesign name="closecircle" size={24} color={'#EF7E46'} />
                </TouchableOpacity>
              )}
            </View>
          );
        })}
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Poll;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    height: 100,
    backgroundColor: '#f7f7f7',
    width: windowWidth / 1.1,
    alignSelf: 'center',
    padding: 10,
    borderColor: '#afafaf',
    borderWidth: 1,
    borderRadius: 10,
  },
  textInput: {
    height: 50,
    backgroundColor: '#f7f7f7',
    width: windowWidth / 1.15,
    alignSelf: 'center',
    padding: 5,
    borderRadius: 10,
    color:'black'
  },
  optionImageView: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    padding: 10,
    marginTop: '5%',
    marginRight: '2%',
    borderColor: '#afafaf',
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
    height: windowHeight / 3,
    width: windowWidth / 1.1,
    alignSelf: 'center',
  },
  imageOptions: {
    alignSelf: 'center',
    height: 30,
    width: 30,
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
    width: windowWidth / 1.2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#EF7E46',
    marginBottom: '2%',
  },
  shareText: {
    padding: 5,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  optionsView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },
  addButton: {
    alignSelf: 'center',
    height: 50,
    width: 50,
    alignSelf: 'center',
    padding: 10,
    marginTop: '5%',
  },
});
