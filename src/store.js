export const initialStore = () => {
  return {
    message: null,
    characters: [],
    vehicles: [],
    planets: [],
    favourites: [],
    individual: {}
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

    case 'add_favourite':
      const { item } = action.payload;

      return {
        ...store,
        favourites: [...store.favourites, item]
      };

    case 'del_favourite':
      const { uid } = action.payload;
      const { type } = action.payload;

      return {
        ...store,
        favourites: store.favourites.filter(fav => !(fav.uid === uid && fav.type === type))
      };

    case 'get_individual':
      const { individual } = action.payload;

      return {
        ...store,
        individual: individual || {}
      };
    default:
      throw Error('Unknown action.');
  }
}
