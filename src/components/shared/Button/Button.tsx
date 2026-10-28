import { Pressable, StyleSheet, Text } from "react-native"

type Variant = "default" | "danger" | "ghost";

const Button = ({
  text = "Entrar",
  handleLogin = () => {},
  variant = "default",
}: {
  text: string;
  handleLogin: () => void;
  variant?: Variant;
}) => {
  return (
    <Pressable
      style={[styles.button, buttonVariants[variant]]}
      onPress={handleLogin}
    >
      <Text style={[styles.buttonText, textVariants[variant]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: { fontSize: 16, fontWeight: "600" },
});

const buttonVariants = StyleSheet.create({
  default: { backgroundColor: "#16a34a" },
  danger: { backgroundColor: "#dc2626" },
  ghost: { backgroundColor: "transparent" },
});

const textVariants = StyleSheet.create({
  default: { color: "#fff" },
  danger: { color: "#fff" },
  ghost: { color: "#16a34a" },
});

export default Button
