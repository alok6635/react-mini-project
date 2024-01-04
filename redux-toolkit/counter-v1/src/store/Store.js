import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counterVal: 0
    },
    reducers: {
        incre: (state) => {
             state.counterVal++;
        },

        dcre: (state) => {
            state.counterVal--;
        },

        add: (state,action)=>{
            state.counterVal+= Number(action.payload.num);
        },
        sub: (state,action) => {
              state.counterVal-=Number(action.payload.num)
        },
    }

})

const  privacySlice=createSlice({
    name:'privacy',
    initialState:false,
    reducers:{
        toggle:(state)=>{
          return  state=!state
        }
    }
})



const counterStore = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        privacy:privacySlice.reducer
    }
});

export const counterActions=counterSlice.actions;
export const privacyActions=privacySlice.actions;

export default counterStore;




