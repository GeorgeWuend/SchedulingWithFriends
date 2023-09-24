import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";

export default function useUser(userId) {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState(null);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const userSubscriber = firestore()
      .collection("users")
      .doc(userId)
      .onSnapshot((documentSnapshot) => {
        setUser(documentSnapshot.data());
      });

    const eventsSubscriber = firestore()
      .collection("events")
      .where("createdBy", "==", userId)
      .onSnapshot((querySnapshot) => {
        const events = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          key: doc.id,
        }));
        setEvents(events);
      });

    return () => {
      userSubscriber();
      eventsSubscriber();
    };
  }, [userId]);

  useEffect(() => {
    const fetchFriendsData = async () => {
      if (user && user.friends && user.friends.length > 0) {
        // Fetch friend data for the current set of friend IDs
        const friendDataPromises = user.friends.map(async (friendId) => {
          const friendDocument = await firestore()
            .collection("users")
            .doc(friendId)
            .get()
          return {id: friendId, data: friendDocument.data()};
        });

        const newFriends = await Promise.all(friendDataPromises);

        // Check if newFriends is not null before updating friends state
        if (newFriends !== null) {
          setFriends(newFriends);
        }
      }
    };

    // Check if user is not null before fetching friend data
    if (user) {
      fetchFriendsData();

      //Make this call every 5 seconds
      const interval = setInterval(() => {
        fetchFriendsData();
      }, 5000);
    }
  }, [user, user?.friends]); // Ensure you handle cases where user.friends may be null

  //Make a new useEffect that will update the friends state when the user.friends array changes or
  //when the friends data changes in the database. This will ensure that the friends state is always
  //up to date with the latest data.

  return { user, events, friends };
}

// to use this hook, import it into the component you want to use it in and call it like this:
// const { user, events, friends } = useUser(userId);
//
// userId is the id of the user you want to get data for.
