const INITIAL_STATE={
    name:'wajahat',
    age:19,
    apiData=[]
}

const reducer=(state=INITIAL_STATE,action)=>{
    console.log(action)
    if (action.type=="DATAFROMAPI"){
        state.apiData=action.apiData
        return {...state,...action}
    } 
    return state;
}

export default reducer;