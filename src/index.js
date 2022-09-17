import store from './store'
import { addBug,removeBug } from './actions'


store.dispatch(addBug('terrible bug'))
store.dispatch(addBug('Awesome bug'))
store.dispatch(addBug('boring bug'))

store.dispatch(removeBug(2))

console.log(store.getState())