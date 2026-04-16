const pokemonPhotoMemoryCache = new Map<number, string>();

export function setCachedPokemonPhoto(id: number, uri: string) {
  pokemonPhotoMemoryCache.set(id, uri);
}

export function getCachedPokemonPhoto(id: number) {
  return pokemonPhotoMemoryCache.get(id) ?? null;
}

export function clearCachedPokemonPhoto(id: number) {
    pokemonPhotoMemoryCache.delete(id);
}
