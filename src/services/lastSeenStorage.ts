import AsyncStorage from '@react-native-async-storage/async-storage';
import { PokemonListItemUI } from './pokeapi';

const STORAGE_KEY = '@mypokedex/last_seen_list:v1';

const MAX_ITEMS = 5;

export async function saveLastSeenPokemon(
  pokemon: PokemonListItemUI,
): Promise<void> {
  try {
    const existing = await getLastSeenPokemons();

    // remove duplicado se já existir
    const filtered = existing.filter(
      (item) => item.id !== pokemon.id
    );

    // adiciona no início da lista
    const updated = [pokemon, ...filtered].slice(
      0,
      MAX_ITEMS
    );

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated),
    );
  } catch (error) {
    console.error('Erro ao salvar últimos vistos', error);
  }
}

export async function getLastSeenPokemons(): Promise<PokemonListItemUI[]> {
  try {
    const data = await AsyncStorage.getItem(
      STORAGE_KEY
    );

    if (!data) return [];

    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao obter últimos vistos', error);
    return [];
  }
}

export async function clearLastSeen(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEY);
}