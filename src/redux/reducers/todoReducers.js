const initialData = {
    list:[
        
    ]
}
const todoRuducers = (state=initialData,action) =>{
        switch(action.type){
            case 'add_todo': 
            const {id ,data} = action.payload;

            return {
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
            case 'delete_todo': 
            const deleteList = state.list.filter((val)=> val.id !== action.id)
            return {
                ...state,
                list:deleteList 
            }
            case 'remove_todo': 
            return {
                ...state,
                list:[]
            }
            default :return state;
        }

}

export default todoRuducers;