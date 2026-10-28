import { Link } from "expo-router";
import { Text, View } from "react-native";

const About = () => {
  return (
    <View>
      <Text>Welcome to the About Screen!</Text>
      <Link href="/">
        <Text>Go to Home</Text>
      </Link>
    </View>
  )
};
export default About;