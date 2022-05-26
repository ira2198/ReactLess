
const initialState = {
    chats: [
    {
        user: 'Гендальф', id: 1
    },
    {
        user: 'Галладриэль', id: 2
    },
    {
        user: 'Хоббиты', id: 3
    },

    ]
}


export const chatsReducer = (state = initialState, action)=>{
    switch (action.type){

        default:
            return state
    }
}