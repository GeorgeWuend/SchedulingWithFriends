import React, { useEffect, useState } from "react";
import { Alert, Image, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { normalizeWidth, normalizeHeight } from "./Responsive";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function HomeScreen() {
  const personA = true;
  let friends = [];
  let friendImages = [];

  if (personA) {
     friends = ['Julia Truong', 'Katya Borisova', 'Gregor Wuend', 'Evyn Sietsema', 'Jessica Peterson', 'Max Brooksen'];
     friendImages = ['https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBjYXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80', 'data:image/jpeg;base64,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', 'data:image/jpeg;base64,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', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqH9DfP1qY4b-g87C0NE153mZSGbaxSFzIQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgHj-3dPOPz1fh9V8lWaB4j7wy-x57rLrQQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXpi1Nrns6Lg_qmU2V4jJ4kexQbqsgKyCxg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9qB3RnxPlcth8qi3JF29fXrr0ZwoAsZ0qg&usqp=CAU']
  }
  const [search, setSearch] = useState('');
  const [addFriends, setAddFriends] = useState(false);
  const [displayF, setDisplay] = useState(friends);
  const addFriend = () => {
    setAddFriends(false);
    console.log("here");
    displayF.push('Anna Bamtise');

  }
  const deleteFriend = (friendName) => {
    Alert.alert(
      'Remove Friend',
      'Are you sure you want to remove ' + friendName + "?",
      [
        { text: 'Yes', onPress: () => console.log('OK Pressed') },
        { text: 'No', onPress: () => console.log('No Pressed') },
      ]
    )
  }
  const displayFriendRows = (typeOfFriends) => {
    console.log(displayF);
    console.log(search);
    let rows = [];
    let index = 0;
    for(let i = 0; i < displayF.length; i++ ){
      if(search === '' || search === displayF[i].substring(0, search.length)) {

        // let eventTogether = false;
        // for(let i = 0; i < events.length; i++){
        //   console.log("events[i] ", events[i]);
        //   for(let j = 0; j < events[i].friendsInvited.length; j++){
        //     console.log("events[i].friendsInvited ", events[i].friendsInvited);
        //     if (events[i].friendsInvited[j] == friendId){
        //       eventTogether = true;
        //       break;
        //     }
        //     if(eventTogether){
        //       break;
        //     }
        //   }
        // }

        //   if(eventTogether){
        //     rows.push(
        //       <View style={styles.row}>
        //         <View style={styles.person}>
        //           <Image
        //             style={styles.pfp}
        //             source={{
        //               uri: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBjYXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        //             }}/>
        //           <Text style={styles.friendText} numberOfLines={1}>{friendData.name}</Text>
        //         </View>
        //         <Icon style={styles.icon} size={30} name="calendar" />
        //       </View>
        //     );
        // } else {
        rows.push(
          <View key={index} style={styles.row}>
            <View style={styles.person}>
              <Image
                style={styles.pfp}
                source={{
                  uri: friendImages[index],
                }} />
              <Text style={styles.friendText} numberOfLines={1}>{displayF[i]}</Text>
            </View>
            <Icon style={styles.icon} size={30} name="calendar" />
            <Pressable style={styles.pressX} onPress={() => deleteFriend(displayF[i])}>
              <Text style={styles.delete}>X</Text>
            </Pressable>
          </View>
        );

      }
      index += 1;
    }
    return rows;
  }
  return (
    <View
      style={styles.container}
    >
      <View syle={styles.list}>
        <Text style={styles.title}>FRIENDS</Text>
        {addFriends &&
          <View style={styles.overlay}>
            <Text style={{fontSize: normalizeHeight(30), marginBottom: 20,}}>
              Add a friend
            </Text>
            <TextInput
              editable
              maxLength={40}
              placeholder="Email"
              style={{fontSize: normalizeHeight(26), marginBottom: 30,}}
            />
            <View style={styles.row2}>
              <Pressable onPress={() => addFriend()} style={{ flex:1, marginBottom: 15, alignSelf: 'flex-start'}}><Text style={{fontSize: normalizeHeight(26), alignSelf: 'center'}}>Add</Text></Pressable>
              <Pressable style={{ flex:1, marginBottom: 15, alignSelf: 'flex-end'}} ><Text style={{fontSize: normalizeHeight(26), alignSelf: 'center'}}>Cancel</Text></Pressable>
            </View>

          </View>

        }
        <View style={styles.row}>
        <View style={styles.searchOval}>
          <Icon style=
                  {{marginRight: 10, marginLeft: 5}} size={normalizeHeight(34)} name="magnify" />
          <TextInput
            onChangeText={setSearch}
            value={search}
            editable
            maxLength={40}
            placeholder="Search"
            style={{fontSize: normalizeHeight(24)}}
          />
        </View>
          <Pressable style=
                       {{flex: 1, alignItems: 'center', alignContent:'center', margin: 10, marginLeft: 0}}
                     onPress={() => setAddFriends(!addFriends)}>
          <Icon style={styles.icon} size={normalizeHeight(50)} name="account-plus" />
          </Pressable>
        </View>
        {displayFriendRows(displayF)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 0,
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: normalizeHeight(60),
    fontFamily: 'jetbrains-mono',
    alignSelf: 'center',
    margin: 10,
    color: '#161826',
  },
  row : {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    alignContent: 'flex-end',
    margin: 10,
  },
  row2 : {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    alignContent: 'space-between',
    margin: 10,
  },
  list : {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignContent: "flex-start",
    backgroundColor: '#000',
  },
  pfp : {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 20,
  },
  person : {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    // alignContent: 'flex-start',
    flex: 6,
  },
  friendText : {
    fontSize: normalizeHeight(30),
    flex: 1,
  },
  icon : {
    color: '#161826',
    marginLeft: 20,
    flex: 1,
  },
  delete : {
    fontSize: normalizeHeight(40),
    color: '#970000',
  },
  pressX : {
    flex: 1,
    marginLeft: 10
  },
  searchIcon : {
    flex: 1,
    alignSelf: 'flex-start',
  },
  searchOval : {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    alignContent: 'flex-end',
    marginTop : 10,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#161826',
    padding: 5,
    flex: 3
  },
  overlay : {
    elevation: 1000,
    zIndex: 1000,
    position: "absolute",
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
      },
      android: {
        elevation: 1002, // Elevation for Android shadow
      },
    }),
    flex: 1,
    padding: 30,
    margin: 10,
    height: '30%',
    width: '95%',
    top: '13%',
    alignItems: 'center',
    alignContent: 'center',
}
});
