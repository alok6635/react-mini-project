const redux= require('redux');

const initialData={counter:0};

const reducer=(store=initialData,action)=>{
    if(action.type=='increment'){
       return {counter:store.counter+1};
    }
    else if( action.type=='decremnt'){
       return {counter:store.counter-action.payload.number}
   
    }
  }

const store= redux.createStore(reducer);
const subscriber=()=>{
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscriber);

store.dispatch({
    type:'increment'
})
store.dispatch({
    type:'decremnt',payload:{number:7}
})
