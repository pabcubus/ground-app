import { Pressable, StyleSheet, Text } from "react-native";
import type { Cancha } from "@/data/canchas";

type Props = {
  cancha: Cancha;
  onPress: () => void;
};

const CanchaCard = ({ cancha, onPress }: Props) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{cancha.nombre}</Text>
      <Text style={styles.address}>{cancha.direccion}</Text>
      <Text style={styles.price}>
        ${cancha.precio.toLocaleString("es-CO")} / hora
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 16,
    gap: 4,
  },
  name: { fontSize: 18, fontWeight: "700", color: "#111827" },
  address: { fontSize: 14, color: "#6b7280" },
  price: { fontSize: 14, fontWeight: "600", color: "#16a34a" },
});

export default CanchaCard;
