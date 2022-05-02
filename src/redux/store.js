import { createStore } from 'redux';
import dataSelector from "./reducer"

const store = createStore(dataSelector);
store.subscribe(()=>
{console.log("3")
    console.log(store.getState())
})

export default store