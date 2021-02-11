type PeopleType = {
    _id: number
    name: string
    age: number
}
type HomeWorkReducerType = {
    state: Array<PeopleType>
}

export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                return [
                    ...state.sort(function (a: any, b: any) {
                        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                        if (nameA < nameB) //сортируем строки по возрастанию
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 // Никакой сортировки
                    })
                ]
            }
            if (action.payload === "down") {
                return [
                    ...state.sort(function (a: any, b: any) {
                        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                        if (nameA > nameB) //сортируем строки по убыванию
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0 // Никакой сортировки
                    })
                ]
            }
            return state
        }
        case "check": {
            let stateCopy = [...state]
            return stateCopy.filter( (p: any) => (p.age >= action.payload))
        }
        default:
            return state
    }
};
