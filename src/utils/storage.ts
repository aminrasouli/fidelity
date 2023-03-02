const storage = {
  set: (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get: (key: string): any => {
    try {
      return JSON.parse(localStorage.getItem(key) as string)
    } catch (e) {
      return undefined
    }
  },
  has: (key: string) => {
    return !!localStorage.getItem(key) || false
  },
  isEqual: (key: string, value: any): boolean => {
    return storage.get(key) === value
  },
  appendInArray: (key: string, value: any): void => {
    const array = storage.get(key) ?? []
    array.push(value)
    storage.set(key, array)
  },
  removeFromArray: (key: string, value: any): void => {
    const array = storage.get(key) ?? []
    const index = array.indexOf(value)
    if (index > -1) {
      array.splice(index, 1)
    }
    storage.set(key, array)
  },
  isInArray: (key: string, value: any): boolean => {
    const array = storage.get(key) ?? []
    return array.includes(value)
  },
  addOrRemoveFromArray: (key: string, value: any): void => {
    if (storage.isInArray(key, value)) {
      storage.removeFromArray(key, value)
    } else {
      storage.appendInArray(key, value)
    }
  },
}

export default storage
