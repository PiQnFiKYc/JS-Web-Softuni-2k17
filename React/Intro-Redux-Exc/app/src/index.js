import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let generatorReducer = (store,action)=>{
    switch(action.type){
        case "INCREMENT":return store.value++;
        case "DECREMENT": return
        case "CLEAR": return
        case 'ADD_COUNTER': return [...store,{index:store.length,value:0}]
        case 'REMOVE_LAST': return [...store.slice(0,store.length-1)]
        default:return store
    }
}

let store = createStore(generatorReducer,[{index:0,value:0}])

let Counter = ()=>{
    return(
        <div>
            
            <h1>{store.value}</h1>
            <button onClick={()=>{
                store.dispatch(actionObj.incrementCounter())}}>Increment</button>
            <button>Decrement</button>
            <button>Clear</button>
        </div>
    )
    
}

let actionObj = {
    addCounter:()=>{
        return {type:'ADD_COUNTER'}
    },
    removeCounter:()=>{
        return {type:'REMOVE_LAST'}
    },
    incrementCounter:()=>{
        return{type:'INCREMENT'}
    }
}

let CounterWrap = ()=>{
    return(
        <div>
            {store.getState().map(counter=>{
                return <Counter key={counter.index} />
            })}
            <button onClick={()=>{
                store.dispatch(actionObj.addCounter())
                    }
                }
                >AddCounter</button>
            <button onClick={()=>{
                store.dispatch(actionObj.removeCounter())
                }}
                >RemoveCounter</button>
            </div>
    )
}

store.subscribe(()=>{
    ReactDOM.render(<CounterWrap />, document.getElementById('root'));
})
ReactDOM.render(<CounterWrap />, document.getElementById('root'));
registerServiceWorker();
