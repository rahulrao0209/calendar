import type { ColorAction, ColorFilterData } from "../types/types"

export const colorReducer = (state: ColorFilterData, action: ColorAction) => {
    
    switch(action.type) {
        
        case 'update-yellow':
        return {
            yellow: action.data,
            pink: state.pink,
            green: state.green,
            orange: state.orange,
            blue: state.blue
        };
      
        case 'update-pink':
        return {
            yellow: state.yellow,
            pink: action.data,
            green: state.green,
            orange: state.orange,
            blue: state.blue
        };

        case 'update-green':
        return {
            yellow: state.yellow,
            pink: state.pink,
            green: action.data,
            orange: state.orange,
            blue: state.blue
        };

        case 'update-orange':
        return {
            yellow: state.yellow,
            pink: state.pink,
            green: state.green,
            orange: action.data,
            blue: state.blue
        };

        case 'update-blue':
        return {
            yellow: state.yellow,
            pink: state.pink,
            green: state.green,
            orange: state.orange,
            blue: action.data
        };
      
        default:
        return state;
    }
}