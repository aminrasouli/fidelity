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
    }
}

export default storage