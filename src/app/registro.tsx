import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const logo = require('@/assets/images/tabIcons/logo.png');

export default function RegistroScreen() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const registrarse = () => {
    if (
      !nombre ||
      !apellido ||
      !usuario ||
      !contrasena ||
      !confirmarContrasena
    ) {
      Alert.alert(
        'Campos incompletos',
        'Por favor completa todos los campos.'
      );
      return;
    }

    if (contrasena !== confirmarContrasena) {
      Alert.alert(
        'Contraseñas diferentes',
        'Las contraseñas no coinciden.'
      );
      return;
    }

    Alert.alert(
      'Registro exitoso',
      'Tu cuenta ha sido creada correctamente.',
      [
        {
          text: 'Continuar',
          onPress: () => router.replace('/'),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* ENCABEZADO */}
      <View style={styles.header}>
        <Image source={logo} style={styles.headerLogo} />

        <View style={styles.headerText}>
          <Text style={styles.appName}>SINCRO-ORQUESTA</Text>
          <Text style={styles.headerSubtitle}>Registro</Text>
        </View>

        <View style={styles.versionBadge}>
          <Text style={styles.versionText}>v1.0</Text>
        </View>
      </View>

      <Text style={styles.screenDescription}>
        Creación de una cuenta para acceder al sistema
      </Text>

      {/* CONTENIDO PRINCIPAL */}
      <View style={styles.mainContent}>

        {/* MARCA */}
        <View style={styles.brand}>
          <Image source={logo} style={styles.logo} />

          <Text style={styles.brandName}>
            Crear cuenta
          </Text>
        </View>

        {/* FORMULARIO */}
        <View style={styles.form}>

          <Text style={styles.label}>Nombre</Text>

          <TextInput
            style={styles.input}
            placeholder="Ingresa tu nombre"
            placeholderTextColor="#0B1F3A"
            value={nombre}
            onChangeText={setNombre}
            autoCapitalize="words"
            accessibilityLabel="Nombre"
          />

          <Text style={styles.label}>Apellido</Text>

          <TextInput
            style={styles.input}
            placeholder="Ingresa tu apellido"
            placeholderTextColor="#0B1F3A"
            value={apellido}
            onChangeText={setApellido}
            autoCapitalize="words"
            accessibilityLabel="Apellido"
          />

          <Text style={styles.label}>Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="correo@ejemplo.com"
            placeholderTextColor="#0B1F3A"
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            accessibilityLabel="Usuario"
          />

          <Text style={styles.label}>Contraseña</Text>

          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#0B1F3A"
            value={contrasena}
            onChangeText={setContrasena}
            secureTextEntry
            accessibilityLabel="Contraseña"
          />

          <Text style={styles.label}>Confirmar contraseña</Text>

          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#0B1F3A"
            value={confirmarContrasena}
            onChangeText={setConfirmarContrasena}
            secureTextEntry
            accessibilityLabel="Confirmar contraseña"
          />

          {/* BOTÓN REGISTRARSE */}
          <TouchableOpacity
            style={styles.registerButton}
            onPress={registrarse}
            activeOpacity={0.82}
          >
            <Text style={styles.registerButtonText}>
              Crear cuenta
            </Text>
          </TouchableOpacity>

          {/* VOLVER AL LOGIN */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.replace('/')}
            activeOpacity={0.82}
          >
            <Text style={styles.backButtonText}>
              Volver al inicio de sesión
            </Text>
          </TouchableOpacity>

        </View>
      </View>

      {/* PIE */}
      <Text style={styles.footer}>
        © 2026 SINCRO-ORQUESTA
      </Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    height: 58,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E7F2FA',
    borderBottomWidth: 1,
    borderBottomColor: '#B9D5E8',
  },

  headerLogo: {
    width: 29,
    height: 29,
    resizeMode: 'contain',
  },

  headerText: {
    marginLeft: 11,
  },

  appName: {
    color: '#0B1F3A',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.1,
  },

  headerSubtitle: {
    marginTop: 3,
    color: '#6B7280',
    fontSize: 12,
  },

  versionBadge: {
    minWidth: 54,
    height: 20,
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#D7E9F5',
  },

  versionText: {
    color: '#123A63',
    fontSize: 10,
    fontWeight: '700',
  },

  screenDescription: {
    paddingHorizontal: 14,
    color: '#6B7280',
    fontSize: 13,
    lineHeight: 18,
  },

  mainContent: {
    flex: 1,
    alignItems: 'center',
  },

  brand: {
    alignItems: 'center',
    marginTop: 32,
  },

  logo: {
    width: 105,
    height: 105,
    resizeMode: 'contain',
  },

  brandName: {
    marginTop: 8,
    color: '#0B1F3A',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.1,
  },

  form: {
    width: '100%',
    maxWidth: 326,
    marginTop: 22,
  },

  label: {
    marginBottom: 7,
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '700',
  },

  input: {
    height: 40,
    marginBottom: 8,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: '#AFC6D7',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    color: '#0B1F3A',
    fontSize: 13,
  },

  registerButton: {
    height: 48,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#123A63',
  },

  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  backButton: {
    height: 44,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#123A63',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },

  backButtonText: {
    color: '#123A63',
    fontSize: 14,
    fontWeight: '700',
  },

  footer: {
    marginBottom: 9,
    color: '#123A63',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
});