export enum SavedListEnum {
  Watch = 'watch',
  Favorite = 'favorite',
}

export const getTitleBySavedList = (savedList: SavedListEnum) => {
  const items = {
    [SavedListEnum.Watch]: 'Watch Later',
    [SavedListEnum.Favorite]: 'Favorites',
  }

  return items[savedList] ?? 'Unknown List'
}
