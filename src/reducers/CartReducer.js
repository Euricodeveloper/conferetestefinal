const initialState = {
    posts: [],
    address: [],
    discount: 0,
    delivery: 0,
    totalqtd: 0,
    totalvalue: 0,
};

export default (state = initialState, action) => {
    let posts = [...state.posts];

    console.log(posts.qt);
    
    switch(action.type) {
        case 'ADD_PRODUCT':
            let id = action.payload.data.id;
            let index = posts.findIndex(item => item.id === id);

            if(index > -1){
                posts[index].qt += action.qt;
            }else {
                posts.push({
                    ...action.payload.data,
                    qt: action.qt
                });
                console.log("reducer" +action.qt)
            }
            console.log("state" + JSON.stringify(state))
            return {...state, posts};


        case 'CHANGE_PRODUCT':
            if(posts[action.payload.key]){
                switch(action.payload.type){
                    case '-':
                        if(posts[action.payload.key].qt >= 0){
                            posts[action.payload.key].qt-=1;
                        }
                        if(posts[action.payload.key].qt === 0){
                            posts = posts.filter((item, index)=> index !== action.payload.key);
                        }
                    break; 
                    case '+':
                            posts[action.payload.key].qt+=1;
                            break;
                    default: 
                        return;
                }      
            }
          
            return {...state, posts};


            default:
                return state;
        }




    //     // case 'SET_TOKEN':
    //     //     return{...state, token: action.payload.token};
    //     // break;

    //     // case 'SET_NAME':
    //     //     return {...state, name: action.payload.name};
    //     // break;
    // }

 

    // return state;
}