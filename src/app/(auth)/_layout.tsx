import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const AuthLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#16a34a" }}>
      <Tabs.Screen
        name="canchas"
        options={{
          title: "Canchas",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="football-outline" color={color as string} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color as string} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default AuthLayout;
