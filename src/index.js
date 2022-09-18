import store from './store'
import { addBug,removeBug, resolveBug } from './actions'

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addBug('terrible bug'))
store.dispatch(addBug('Awesome bug'))
store.dispatch(addBug('boring bug'))

store.dispatch(resolveBug(2))

unsubscribe()