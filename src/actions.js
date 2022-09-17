import * as actions from './actionTypes'

export const addBug = (description) => ({
        type: actions.BUG_ADDED,
        payload: {
            description: description
        }
    })

export const removeBug = (id) => ({
        type: actions.BUG_REMOVED,
        payload: {
            id: id
        }
    })