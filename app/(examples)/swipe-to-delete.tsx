import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Animated } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";

import AppleStyleSwipeableRow from "@/components/AppleStyleSwipeableRow";
import GmailStyleSwipeableRow from "@/components/GmailStyleSwipeableRow";
import BasicSwipeableRow from "@/components/BasicSwipeableRow";

const dummyData = [
  {
    from: "Swipe left",
    when: "3:11 PM",
    message:
      "<BasicSwipeableRow> is a basic example of swipeable row. It has only left actions",
  },
  {
    from: "Swipe left or right",
    message:
      "<AppleStyleSwipeableRow> is an example of swipeable row with both left and right actions, similar to the native mail app on iOS",
  },
  {
    from: "Swipe left or right",
    message:
      "<GmailStyleSwipeableRow> is an example of swipeable row with both left and right actions, similar to the native mail app on Android",
  },
];

export default function SwipeToDelete() {
  const Row = ({ item }) => (
    <RectButton style={styles.rectButton} onPress={() => alert(item.from)}>
      <Text style={styles.fromText}>{item.from}</Text>
      <Text style={styles.messageText} numberOfLines={3}>
        {item.message}
      </Text>
    </RectButton>
  );

  const SwipeableRow = ({ item, index }) => {
    if (index == 0) {
      return (
        <BasicSwipeableRow>
          <Row item={item} />
        </BasicSwipeableRow>
      );
    } else if (index % 2 === 0) {
      return (
        <AppleStyleSwipeableRow>
          <Row item={item} />
        </AppleStyleSwipeableRow>
      );
    } else {
      return (
        <GmailStyleSwipeableRow>
          <Row item={item} />
        </GmailStyleSwipeableRow>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swipe To Delete</Text>
      <Text style={styles.description}>
        This example demonstrates how to use the `Swipeable` component from the
        'react-native-gesture-handler' library to add swipe-to-do-something
        functionality to list of items
      </Text>
      <Text style={{ paddingBottom: 10 }}>Swipe on the items </Text>
      <View style={styles.data_container}>
        <FlatList
          data={dummyData}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item, index }) => (
            <SwipeableRow item={item} index={index} />
          )}
          keyExtractor={(item, index) => `message ${index}`}
        />
      </View>

      <Text>
        Example from the react-native-gesture-handler documentation at
        https://snack.expo.dev/@adamgrzybowski/react-native-gesture-handler-demo?platform=ios
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  data_container: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginVertical: 20,
  },
  item: {
    width: "auto",
    height: 100,
    backgroundColor: "pink",
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  leftAction: {
    flex: 1,
    backgroundColor: "#388e3c",
    justifyContent: "center",
  },
  actionText: {
    color: "white",
    fontWeight: "600",
    padding: 20,
  },
  rectButton: {
    flex: 1,
    height: 100,
    width: "auto",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "white",
  },
  separator: {
    backgroundColor: "rgb(200, 199, 204)",
    height: StyleSheet.hairlineWidth,
  },
  fromText: {
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
  messageText: {
    color: "#999",
    backgroundColor: "transparent",
  },
  dateText: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 20,
    top: 10,
    color: "#999",
    fontWeight: "bold",
  },
});
