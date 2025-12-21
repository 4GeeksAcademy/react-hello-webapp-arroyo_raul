export const initialStore = () => {
  return {
    message: null,
    characters: [],
    vehicles: [],
    planets: [],
    favourites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_characters':
      const { characters } = action.payload

      return {
        ...store,
        characters: characters || []
      };

    case 'get_vehicles':
      const { vehicles } = action.payload

      return {
        ...store,
        vehicles: vehicles || []
      };

    case 'get_planets':
      const { planets } = action.payload

      return {
        ...store,
        planets: planets || []
      };
    
    case 'get_favourites':
      const { favourites } = action.payload

      return {
        ...store,
        favourites: favourites || []
      };
    
    default:
      throw Error('Unknown action.');
  }
}
