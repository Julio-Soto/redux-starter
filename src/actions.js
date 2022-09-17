

export const addBug = (description) => {
    return {
        type: 'bugAdded',
        payload: {
            description: description
        }
    }
}

export const removeBug = (id) => {
    console.log('remove id: ' + id)
    return {
        type: 'bugRemoved',
        payload: {
            id: id
        }
    }
}