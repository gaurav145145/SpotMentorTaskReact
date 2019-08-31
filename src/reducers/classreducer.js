import data from '../classroom_data.json';

export default (state=data,action)=>{
     switch(action.type){
         case 'SEE':
             return state;

         return state;
     }
};