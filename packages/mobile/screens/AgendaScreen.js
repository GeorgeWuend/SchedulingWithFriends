import React, { Component } from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CreateEventScreen from "./CreateEventScreen";
import {
  Agenda,
} from "react-native-calendars";
import testIDs from "../testIDs";

class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: undefined,
      showCreateEvent: false,
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.showCreateEvent ? null : (
          <Agenda
            testID={testIDs.agenda.CONTAINER}
            items={this.state.items}
            loadItemsForMonth={this.loadItems}
            selected={"2017-05-16"}
            renderItem={this.renderItem}
            renderEmptyDate={this.renderEmptyDate}
            rowHasChanged={this.rowHasChanged}
            showClosingKnob={true}
          />
        )}

        {this.state.showCreateEvent && this.renderCreateEventScreen()}
      </View>
    );
  }

  loadItems = (day) => {
    const items = this.state.items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      this.setState({
        items: newItems,
      });
    }, 1000);
  };

  renderDay = (day) => {
    if (day) {
      return <Text style={styles.customDay}>{day.getDay()}</Text>;
    }
    return <View style={styles.dayItem} />;
  };

  renderItem = (reservation, isFirst) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <TouchableOpacity
        testID={testIDs.agenda.ITEM}
        style={[styles.item, { height: reservation.height }]}
        onPress={() =>
          this.setState({
            showCreateEvent: true,
            selectedReservation: reservation,
          })
        }
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  renderCreateEventScreen = () => {
    const { selectedReservation } = this.state;

    if (this.state.showCreateEvent) {
      return (
        <CreateEventScreen
          reservation={selectedReservation}
          onClose={() => this.setState({ showCreateEvent: false })}
        />
      );
    }

    return null;
  };

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is an empty date!</Text>
      </View>
    );
  };

  rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  customDay: {
    margin: 10,
    fontSize: 24,
    color: "green",
  },
  dayItem: {
    marginLeft: 34,
  },
});

export default AgendaScreen;
