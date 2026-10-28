import { FlatList, StyleSheet } from "react-native";
import { router } from "expo-router";
import CanchaCard from "@/components/shared/CanchaCard/CanchaCard";
import { canchas } from "@/data/canchas";

const Canchas = () => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={canchas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CanchaCard
          cancha={item}
          onPress={() =>
            router.push({ pathname: "/canchas/[id]", params: { id: item.id } })
          }
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: { padding: 16, gap: 12 },
});

export default Canchas;
