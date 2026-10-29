import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  Alert,
  Modal,
  TextInput,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors, spacing, typography, radius, shadows, borders } from "../../Tokens";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWishes } from "../../context/WishContext";

export default function Wishes() {
  const router = useRouter();
  const { wishes, deleteWish, updateWish } = useWishes();

  // Estados para el Modal de Edición
  const [modalVisible, setModalVisible] = useState(false);
  const [editingWish, setEditingWish] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    imageUrl: "",
    productUrl: "",
  });

  // DELETE: Confirmación y eliminación
  const handleDelete = (id) => {
    Alert.alert(
      "Eliminar Deseo",
      "¿Estás seguro de que deseas eliminar este deseo?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () => deleteWish(id),
        },
      ]
    );
  };

  // EDIT: Cargar datos en el formulario y abrir modal
  const handleOpenEdit = (item) => {
    setEditingWish(item);
    setFormData({
      name: item.name,
      price: item.price.toString(),
      imageUrl: item.url_image || "",
      productUrl: item.url_product || "",
    });
    setModalVisible(true);
  };

  // EDIT: Guardar los cambios actualizados
  const handleSaveEdit = async () => {
    if (!formData.name.trim() || !formData.price.trim()) {
      Alert.alert("Error", "El nombre y el precio son obligatorios");
      return;
    }

    await updateWish(editingWish.id, {
      name: formData.name.trim(),
      price: parseFloat(formData.price) || 0,
      url_image: formData.imageUrl.trim(),
      url_product: formData.productUrl.trim(),
    });

    setModalVisible(false);
    setEditingWish(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.products}>
        <FlatList
          data={wishes}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No tienes deseos guardados aún.</Text>
          }
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Pressable
                onPress={() => router.push(`/products/${item.id}`)}
                style={{ flex: 1 }}
              >
                <View style={styles.productInfo}>
                  <Image
                    source={{ uri: item.url_image }}
                    style={styles.image}
                  />
                  <View style={{ gap: 4 }}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                  </View>
                </View>
              </Pressable>

              <View style={styles.actions}>
                <Pressable onPress={() => handleDelete(item.id)}>
                  <Ionicons name="trash-outline" size={24} color="#e04949ff" />
                </Pressable>
                <Pressable onPress={() => handleOpenEdit(item)}>
                  <Ionicons name="pencil-outline" size={24} color="#55a4ffff" />
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>

      {/* Modal de Edición */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Editar Deseo</Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <Ionicons name="close" size={24} color={colors.secondaryText} />
            </Pressable>
          </View>

          <View style={styles.formContent}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Nombre del Producto</Text>
              <TextInput
                style={styles.input}
                value={formData.name}
                placeholder="Nombre del producto"
                placeholderTextColor={colors.secondaryText}
                onChangeText={(val) => setFormData({ ...formData, name: val })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Precio</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={formData.price}
                placeholder="Precio"
                placeholderTextColor={colors.secondaryText}
                onChangeText={(val) => setFormData({ ...formData, price: val })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>URL de Imagen</Text>
              <TextInput
                style={styles.input}
                value={formData.imageUrl}
                placeholder="https://..."
                placeholderTextColor={colors.secondaryText}
                onChangeText={(val) => setFormData({ ...formData, imageUrl: val })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>URL del Producto</Text>
              <TextInput
                style={styles.input}
                value={formData.productUrl}
                placeholder="https://..."
                placeholderTextColor={colors.secondaryText}
                onChangeText={(val) => setFormData({ ...formData, productUrl: val })}
              />
            </View>

            <Pressable
              onPress={handleSaveEdit}
              style={({ pressed }) => [
                styles.submitButton,
                pressed && styles.submitButtonPressed,
              ]}
            >
              <Text style={styles.submitButtonText}>Guardar Cambios</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  products: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xxl,
  },
  productCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing.sm,
    marginBottom: spacing.sm,
    ...shadows.soft,
  },
  productInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceSecondary,
    resizeMode: "contain",
  },
  name: {
    ...typography.headline,
    color: colors.text,
    maxWidth: 180,
  },
  price: {
    ...typography.price,
    color: colors.accent,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginLeft: spacing.xs,
  },
  emptyText: {
    fontFamily: "Inter_400Regular",
    color: colors.secondaryText,
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.surface,
    borderBottomWidth: borders.hairline,
    borderBottomColor: colors.separator,
  },
  modalTitle: {
    ...typography.headline,
    color: colors.text,
  },
  formContent: {
    padding: spacing.md,
    gap: spacing.md,
  },
  inputGroup: {
    gap: spacing.xxs,
  },
  inputLabel: {
    ...typography.subhead,
    fontFamily: "Inter_600SemiBold",
    color: colors.text,
  },
  input: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    ...typography.body,
    borderWidth: 1,
    borderColor: colors.fill,
    minHeight: 48,
    color: colors.text,
  },
  submitButton: {
    backgroundColor: colors.accent,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.md,
    ...shadows.soft,
  },
  submitButtonPressed: {
    backgroundColor: colors.accentHover,
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  submitButtonText: {
    ...typography.headline,
    color: "#FFFFFF",
  },
});