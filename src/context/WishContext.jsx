import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@wishes_data';
const WishContext = createContext();

export function WishProvider({ children }) {
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);

  // READ: Cargar datos al iniciar la app
  useEffect(() => {
    loadWishes();
  }, []);

  const loadWishes = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setWishes(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading wishes', error);
    } finally {
      setLoading(false);
    }
  };

  const saveToStorage = async (newList) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
    } catch (error) {
      console.error('Error saving wishes', error);
    }
  };

  // CREATE
  const addWish = async (newWish) => {
    const updated = [newWish, ...wishes];
    setWishes(updated);
    await saveToStorage(updated);
  };

  // DELETE
  const deleteWish = async (id) => {
    const updated = wishes.filter((item) => item.id !== id);
    setWishes(updated);
    await saveToStorage(updated);
  };

  // UPDATE
  const updateWish = async (id, updatedData) => {
    const updated = wishes.map((item) =>
      item.id === id ? { ...item, ...updatedData } : item
    );
    setWishes(updated);
    await saveToStorage(updated);
  };

  return (
    <WishContext.Provider
      value={{ wishes, loading, addWish, deleteWish, updateWish }}
    >
      {children}
    </WishContext.Provider>
  );
}

export const useWishes = () => useContext(WishContext);
