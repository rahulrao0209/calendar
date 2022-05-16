import type { EventData, Action } from "../types/types";

export const eventReducer = (state: EventData, action: Action) => {
  
    switch(action.type) {
      case 'update-title':
        return {
          title: action.data,
          desc: state.desc,
          date: state.date
        }
  
      case 'update-desc':
        return {
          title: state.title,
          desc: action.data,
          date: state.date
        }

      case 'update-date':
        return {
          title: state.title,
          desc: state.desc,
          date: action.data
        }
        
      default:
        return state;
    }
  }