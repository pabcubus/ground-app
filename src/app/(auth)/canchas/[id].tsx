import { StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Button from "@/components/shared/Button/Button";
import { canchas } from "@/data/canchas";

const CanchaDetalle = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const cancha = canchas.find((c) => c.id === id);

  if (!cancha) {
    return (
      <View style={styles.container}>
        <Text style={styles.address}>No se encontró la cancha.</Text>
      </View>
    );
  }

  // TODO: replace with real booking flow
  const handleReservar = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{cancha.nombre}</Text>
      <Text style={styles.address}>{cancha.direccion}</Text>
      <Text style={styles.price}>
        ${cancha.precio.toLocaleString("es-CO")} / hora
      </Text>
      <Button text="Reservar" handleLogin={handleReservar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12 },
  name: { fontSize: 28, fontWeight: "700", color: "#111827" },
  address: { fontSize: 16, color: "#6b7280" },
  price: { fontSize: 18, fontWeight: "600", color: "#16a34a", marginBottom: 12 },
});

export default CanchaDetalle;
