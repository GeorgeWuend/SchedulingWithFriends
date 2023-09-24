import React, { useEffect, useState } from "react";
import { Alert, Image, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { normalizeWidth, normalizeHeight } from "./Responsive";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export default function HomeScreen() {
  const userId = "QBrgmKh2gnsjcUMt5c5f";

  // const displayNotifications = () => {
  //   let rows = []
  //   let num = 0;
  //
  //   if (user && user.notifications) {
  //     user.notifications.forEach((notif) => {
  //       console.log(notif);
  //       if (notif['friendrequest']) {
  //         console.log("notif: ", notif['friendrequest'])
  //         const usersCollectionRef = firebase.firestore().collection('users');
  //         // let person = findPerson(notif['friendrequest']);
  //
  //         notFriends.forEach((otherUser) => {
  //           if (otherUser.id === notif['friendrequest']){
  //               usersCollectionRef
  //               .doc(otherUser.id)
  //               .update({
  //                 ['friends']: firebase.firestore.FieldValue.arrayUnion(otherUser),
  //               })
  //           }
  //         });
  //
  //           // <View key={num} style={styles.list}>
  //           //   {/*<Text style={styles.notiftext}>{person.data.name} has sent you a friend request.</Text>*/}
  //           //   <Pressable onPress={() => acceptFriendRequest(notif['friendrequest'].id)}><Text>Accept</Text></Pressable>
  //           //   <View style={styles.horizontalLine} />
  //           // </View>
  //         // );
  //       } else if (notif['longtime']) {
  //         let person = findPerson(notif['longtime']);
  //         rows.push(
  //           <View key={num} style={styles.list}>
  //             <Text style={styles.notiftext}>It's been awhile since you've hung out with {person.data.name}...</Text>
  //             <View style={styles.horizontalLine} />
  //           </View>
  //         );
  //       } else if (notif['calinvite']) {
  //         let person = findPerson(notif['calinvite']);
  //         rows.push(
  //           <View key={num} style={styles.list}>
  //             <Text style={styles.notiftext}>{person.data.name} has sent you a calendar invite.
  //               Click here to accept or deny.</Text>
  //             <View style={styles.horizontalLine} />
  //           </View>
  //         );
  //       } else if (notif['friendrequestapproved']) {
  //         let person = findPerson(notif['friendrequestapproved']);
  //             usersCollectionRef
  //               .doc(userId)
  //               .update({
  //                 ['friends']: firebase.firestore.FieldValue.arrayUnion(person),
  //               })
  //         rows.push(
  //           <View key={num} style={styles.list}>
  //             <Text style={styles.notiftext}>{person.data.name} has approved your friend request!</Text>
  //             <View style={styles.horizontalLine} />
  //           </View>
  //         );
  //       } else if (notif['approvedcalendarinvite']) {
  //         let person = findPerson(notif['approvedcalendarinvite']);
  //         rows.push(
  //           <View key={num} style={styles.list}>
  //             <Text style={styles.notiftext}>{person.data.name} has accepted your calendar invite!</Text>
  //             <View style={styles.horizontalLine} />
  //           </View>
  //         );
  //       }
  //       num += 1;
  //     });
  //
  //     return rows;
  //   }
  //   return (<Text> </Text>);
  // }
  return (
    <View style={styles.container}>
      <View syle={styles.list}>
        <Text style={styles.title}>NOTIFICATIONS</Text>
        <View style={styles.horizontalLine} />
         Hello
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
    margin: 30,
    padding: 30,
  },
  list : {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignContent: "flex-start",
    backgroundColor: '#FFF',
  },
  icon : {
    color: '#161826',
    marginLeft: 20,
    flex: 1,
  },
  notiftext : {
    fontSize: normalizeHeight(20),
    marginTop: 15,
    marginBottom:15,
  },
  horizontalLine: {
    width: '100%', // Adjust the width as needed
    height: 2, // Adjust the height as needed
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Line color
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 2,
      },
      android: {
        elevation: 2, // Elevation for Android shadow
      },
    }),
  },
});
