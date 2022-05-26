import { DELETE_MESSAGE, ADD_MESSAGE } from '../../actions/action';


const initialState = {
   messages: [
        {
           id: 1, chatId: 1, text: 'Привет!' 
        },
        {
            id: 2, chatId: 1, text: 'Где орлы?' 
         },
          {
            id: 3, chatId: 2, text: 'Привет. Нет орлов.' 
         },
         {
            id: 4, chatId: 3, text: 'Как нет!?' 
         },
         {
            id: 5, chatId: 3, text: 'Нам что идти пешком?' 
         },
         {
            id: 6, chatId: 2, text: 'Мы в вас верим!' 
         },
         {
            id: 7, chatId: 3, text: '-_-' 
         },
    ]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MESSAGE:
           return {
              ...state,
              messages: state.messages.filter(item => item.id !== action.payload)
           }

         case ADD_MESSAGE:
            return{
               ...state,
               messages: [...state.messages, action.payload]
            }

        default:
            return state
    
    }
}