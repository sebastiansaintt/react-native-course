import { View, Text, Image, StyleSheet, ScrollView, Pressable, Modal, TextInput, Alert} from "react-native";
import Card from "../../../components/Card";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import {useState} from 'react';
import Ionicons from "@react-native-vector-icons/ionicons";
import {colors, typography, spacing, radius, borders, shadows} from '../../Tokens';
import { useWishes } from '../../context/WishContext';

export default function Index() {
  const {wishes, addWish} = useWishes();
  const totalCount = wishes.length;
  const totalCost = wishes.reduce((sum, item)=> sum + (Number(item.price)|| 0), 0);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInput, setTextInput] = useState({
    name: '',
    price: '',
    imageUrl: '',
    productUrl: ''
  })

  const [errors, setErrors] = useState({name: false, price: false, imageUrl: false, productUrl: false})

  const handleSave = async () => {
  let newErrors = {};

  const cleanName = textInput.name.trim();
  const cleanPrice = textInput.price.trim();
  const cleanImageUrl = textInput.imageUrl.trim();
  const cleanProductUrl = textInput.productUrl.trim();

  if (!cleanName) newErrors.name = 'El nombre es obligatorio';
  if (!cleanPrice || isNaN(Number(cleanPrice)) || Number(cleanPrice) <= 0) {
    newErrors.price = 'Ingresa un precio numérico válido';
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) return;

  const newWish = {
    id: Date.now().toString(),
    name: cleanName,
    price: parseFloat(cleanPrice),
    url_image: cleanImageUrl,
    url_product: cleanProductUrl,
  };

  await addWish(newWish);

  setTextInput({ name: '', price: '', imageUrl: '', productUrl: '' });
  setErrors({});
  setModalVisible(false);
  Alert.alert('Éxito', '¡Deseo agregado correctamente!');
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <View style={styles.welcomeContainer}>
          <View>
            <Text style={styles.primaryText}>Welcome, User</Text>
            <Text style={styles.secondaryText}>
              This is a summary of your wishlist
            </Text>
          </View>
          <View>
            <Link href="/profile">
              <Image
                source={{
                  uri: "https://img.magnific.com/free-vector/woman-profile-account-picture_24908-81036.jpg?semt=ais_hybrid&w=740&q=80",
                }}
                style={styles.image}
              />
            </Link>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <Card
            icon="heart"
            color="#F02222"
            data={totalCount.toString()}
            text="Saved Wishes"
            symbol=""
          />
          <Card
            icon="cash"
            color="#48C433"
            data={totalCost.toFixed(2)}
            text="Total Estimated Cost"
            symbol="$"
          />
          
        </View>
        <Pressable
        onPress={() => setModalVisible(true)}
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        >
            <View style={{gap: 4}}>
              <Text style={{fontSize: 18, fontFamily: 'Inter_500Medium', color: '#fff'}}>¿Did u something like?</Text>
              <Text style={{fontSize: 15, fontFamily: 'Inter_400Regular', color: '#e6e6e6ff'}}> Press here to Add New Wish</Text>
            </View>
            <View>
              <Ionicons name="add" size={40} color={'#fff'} />
            </View>
        </Pressable>
        <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={()=> setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Adding New Wish</Text>
              <Pressable onPress={()=> setModalVisible(false)}>
                <Ionicons name="close" size={24} color={colors.secondaryText} />
              </Pressable>
            </View>
            <View style={styles.modalContent}>
              <View style={styles.formContent}>
                <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Product Name</Text>
                <TextInput
                placeholder="Product Name"
                placeholderTextColor={colors.secondaryText}
                value={textInput.name}
                onChangeText={(value) => setTextInput({...textInput, name: value})}
                style={[styles.input, errors.name && styles.inputError]}
                 />
              </View>
              <View>
                <Text style={styles.inputLabel}>Product Price</Text>
                <TextInput
                placeholder="Product Price"
                placeholderTextColor={colors.secondaryText}
                keyboardType="numeric"
                value={textInput.price}
                onChangeText={(value) => setTextInput({...textInput, price: value})}
                style={[styles.input, errors.price && styles.inputError]}
                 />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Product Image Link</Text>
                <TextInput
                placeholder="https://example.com/1.jpg"
                placeholderTextColor={colors.secondaryText}
                value={textInput.imageUrl}
                onChangeText={(value) => setTextInput({...textInput, imageUrl: value})}
                style={[styles.input, errors.imageUrl && styles.inputError]}
                 />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Link Product</Text>
                <TextInput
                placeholder="https://example.com"
                placeholderTextColor={colors.secondaryText}
                value={textInput.productUrl}
                onChangeText={(value) => setTextInput({...textInput, productUrl: value})}
                style={[styles.input, errors.productUrl && styles.inputError]}
                 />
              </View>
              <Pressable
              onPress={handleSave}
              style={({pressed}) => [styles.submitButton, pressed && styles.submitButtonPressed]}
              >
                <Text style={styles.submitButtonText}>Save Wish</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.wishes}>
          <View style={styles.headerWishes}>
            <Text style={styles.primaryText}>Recently Added</Text>
            <Link href="/wishes" style={styles.link}>
              <Text style={styles.linkText}>See All</Text>
            </Link>
          </View>
          <View style={styles.products}>
            {wishes.slice(-3).reverse().map((item, index)=>(
              <View key={index} style={styles.productItem}>
                <Image source={{uri: item.url_image}} style={{width: 50, height: 50, resizeMode: 'contain'}} />
                <Text style={{fontFamily: 'Inter_400Regular', fontSize: 14}}>{item.name}</Text>
                <Text style={{fontFamily: 'Inter_700Bold', color: colors.accent, fontSize: 16}}>${item.price}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#f5f5f5",
  },
  welcomeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  primaryText: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    color: "#000000",
    letterSpacing: -0.5
  },
  secondaryText: {
    fontSize: 18,
    color: "#6d6d6db6",
    fontFamily: "Inter_400Regular",
    letterSpacing: -0.8
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    gap: 8,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.accent,
    margin: spacing.xs,
    padding: spacing.sm,
    borderRadius: radius.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 2, 
  },
  buttonPressed: {
    transform: [{scale: 0.95}],
    opacity: 0.8
  },
  modalContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  modalCancelText: {
    ...typography.body,
    color: colors.secondaryText,
  },
  modalSaveText: {
    ...typography.headline,
    color: colors.accent,
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
    fontFamily: 'Inter_600SemiBold',
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
  inputError: {
  borderColor: colors.danger,
},
  errorText: {
    color: colors.danger,
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    marginTop: 2,
  },
  submitButton: {
    backgroundColor: colors.accent,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#FFFFFF',
  },
  wishes: {
    padding: 10,
  },
  headerWishes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkText: {
    fontFamily: 'Inter_700Bold',
    color: "#008aedff",
    fontSize: 18,
  },
  products: {
    marginTop: 12,
    gap: 10
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 2,
  }
});
