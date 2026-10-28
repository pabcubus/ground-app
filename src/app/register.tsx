import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link, router } from "expo-router";
import Button from "@/components/shared/Button/Button";
import Input from "@/components/shared/Input/Input";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // TODO: replace with real registration
  const handleRegister = () => {
    if (!name || !email || !password) {
      setError("Completa todos los campos.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    setError("");
    router.replace("/canchas");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>
      <Input
        label="Nombre"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        autoComplete="name"
      />
      <Input
        label="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoComplete="email"
      />
      <Input
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoComplete="new-password"
      />
      <Input
        label="Confirmar contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoComplete="new-password"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button text="Registrarme" handleLogin={handleRegister} />
      <Link href="/" style={styles.link}>
        ¿Ya tienes cuenta? Inicia sesión
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24, gap: 16 },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 8 },
  error: { color: "#dc2626", fontSize: 14 },
  link: { textAlign: "center", color: "#16a34a", fontSize: 14 },
});

export default Register;
