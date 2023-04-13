import {SafeAreaView, Text, StyleSheet} from 'react-native' /* SafeAreaView é melhor que o View */
import Constants from 'expo-constants'
export default function HelloWorld2() {
return (
  <SafeAreaView style={styles.container}>
  <Text style={styles.heading}>
     Hello < Text style={styles.muda1}> World 1 </Text>
  </Text>
  <Text style={styles.heading}>
     Hello < Text style={styles.muda2}> World 2 </Text>
  </Text>
  <Text style={styles.heading}>
     Hello < Text style={styles.muda3}> World 3 </Text>
  </Text>
  </SafeAreaView>
)
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 30,
    fontweight: "bold",
    textTrransform: "uppercase"
  },
  muda1: {
    color: "blue"
  },
  muda2: {
    textDecorationLine: "underline"
  },
  muda3: {
    backgroundColor: "red"
  }
})
