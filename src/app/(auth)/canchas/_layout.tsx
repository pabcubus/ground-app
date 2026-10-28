import { Stack } from "expo-router";

const CanchasLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Canchas" }} />
      <Stack.Screen name="[id]" options={{ title: "Detalle de cancha" }} />
    </Stack>
  );
};

export default CanchasLayout;
