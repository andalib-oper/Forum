import { StyleSheet, Text, View,Dimensions,ScrollView,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import SearchBar from 'react-native-dynamic-search-bar';
import Top from './Top';
import Feed from './Feed';
import Joined from './Joined';
import Saved from './Saved';
import Home from './Home';
import Popular from './Popular';
import { filtering, getAllFeeds } from '../../../redux/Feeds/actions';
import { useDispatch, useSelector } from 'react-redux';

const CustomTabs = () => {
    const [index, setIndex] = useState(0);
    const [index1, setIndex1] = useState(0);
    const dispatch = useDispatch()
    const feedState = useSelector((state)=>state.feedState)
    const [ searchText,setSearchText]=useState('')
    const status = ['Feed', 'Top', 'Joined','Saved'];
    const tb = ['Home','Popular']
    const search = (text) =>{
      if (text) {
        const newData = feedState.data.filter(function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        dispatch(filtering(newData));
        setSearchText(text);
      } else {
        dispatch(filtering(feedState.data));
        setSearchText(text);
      }
    }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.searchBarView}>
        <SearchBar
          style={styles.searchBar}
          placeholderTextColor={'grey'}
          placeholder="Search questions, product & forums"
          onClearPress={()=>{setSearchText(''),dispatch(getAllFeeds())}}
          onChangeText={(text) => search(text)}
        />
      </View>
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
      <Text style={styles.discussionText}>Discussions</Text>
      <View style={styles.tabHead}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {tb.length &&
          tb.map((e, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.tabBox}
                activeOpacity={1}
                underlayColor=""
                onPress={() => {
                  setIndex1(i);
                }}>
                <View
                  style={[
                    styles.tabButton,
                    index1 === i && styles.tabButtonActive,
                  ]}>
                  <Text
                    style={[
                      styles.tabText,
                      index1 === i && styles.tabTextActive,
                    ]}>
                    {e}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <ScrollView>
        {index === 0 && <Feed />}
        {index === 1 && <Top />}
        {index === 2 && <Joined/>}
        {index == 3 && <Saved/>}
        {index1 === 0 && <Home />}
        {index1 === 1 && <Popular />}
        </ScrollView>
      </View>
      </ScrollView>
    </View>
  )
}

export default CustomTabs
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9f9f9',
      // marginBottom:'25%'
    },
    tabHead: {
      flexDirection: 'row',
      alignSelf: 'center',
      padding:10,
      width:windowWidth/1,
    },
    tabBox: {},
    tabButton: {
      borderRadius: 100/2,
      width: windowWidth/4.8,
      height: 40,
      padding:5,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#EF7E46',
      backgroundColor:'#fef8f5',
      borderWidth:1,
      marginLeft: 10
    },
    tabButtonActive: {
      borderRadius: 100/2,
      width: windowWidth/4.8,
      height: 40,
      padding:5,
      borderColor: '#EF7E46',
      borderWidth:1,
      marginLeft: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EF7E46',
    },
    tabTextActive:{
      color:'#fff',
      fontWeight:'600'
    },
    tabText:{
      color:'#EF7E46',
      fontWeight:'600'
    },
    tabContainer:{
      flex:1,
      width:windowWidth/1
    },
    searchBarView: {
        margin: '5%',
      },
      searchBar: {
        alignSelf: 'center',
        backgroundColor: '#fef3ed',
        height: 45,
        width: windowWidth / 1.1,
        borderRadius: 100 / 2,
      },
      discussionText:{
        fontWeight:'bold',
        margin:10,
        marginLeft:'6%',
        fontSize:18,
        color:'#000',
      }
  })