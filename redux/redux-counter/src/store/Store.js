import {createStore} from 'redux';

const initialData={
    counter:0,
    privacy:false
}
const counterReducer=(store=initialData,action)=>{
    if(action.type=='incre'){
           return {
            ...store,counter:store.counter+1
        }
    }
    else if(action.type=='dcre'){
        return {
            ...store,counter:store.counter-1
        }
    }
    else if(action.type=='Add'){
        return { 
            ...store,counter:store.counter+Number(action.payload.num)
        }
    }
    else if(action.type=='Sub'){
        return { 
            ...store,counter:store.counter-Number(action.payload.num)
        }
    }
    else if(action.type=='priv'){
        return { 
            ...store,privacy:!store.privacy
        }
    }
     return store;
}

const counterStore=createStore(counterReducer);

export default counterStore;



