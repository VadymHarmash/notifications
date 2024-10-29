import {StyleSheet, View, Text} from 'react-native';
import {usePushNotifications} from "@/hooks/usePushNotifications";
import {useEffect} from "react";

export default function HomeScreen() {
  const {expoPushToken, notification} = usePushNotifications()
  const data = JSON.stringify(notification, undefined, 2)
  useEffect(() => {
    console.log(expoPushToken)
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Token: ${expoPushToken?.data ?? ""}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: '#333'
  }
});
