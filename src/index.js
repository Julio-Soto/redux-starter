import store from './store'
import { addBug,removeBug } from './actions'

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addBug('terrible bug'))
store.dispatch(addBug('Awesome bug'))
store.dispatch(addBug('boring bug'))

store.dispatch(removeBug(2))

unsubscribe()