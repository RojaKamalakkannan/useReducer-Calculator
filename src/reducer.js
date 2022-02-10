export const reducer = (states, actions) => {
    switch (actions.type) {
      case 'ADDITION':
        return { ...states, value: Number(states.val1) + Number(states.val2) };
      case 'SUBTRACTION':
        return { ...states,  value: actions.payload.num1 - actions.payload.num2};
      case 'MULTIPLICATION':
        return { ...states, value: actions.payload.num1 * actions.payload.num2};
     case 'DIVISION':
        return { ...states, value: actions.payload.num1 / actions.payload.num2};
    // case 'Num1':
    //      return{value: actions.payload.num1}
    // case 'Num2':
    //         return{value: actions.payload.num2}
    // case 'Num3':
    //         return{value: actions.payload.num3}    
    // case 'Num4':
    //         return{value: actions.payload.num4}
    //  case 'Num5':
    //         return{value: actions.payload.num5}
    //  case 'Num6':
    //         return{value: actions.payload.num6}
    // case 'Num7':
    //         return{value: actions.payload.num7}
    // case 'Num8':
    //         return{value: actions.payload.num8}
    // case 'Num9':
    //          return{value: actions.payload.num9}
     default:
        return states;
    }

    
  };
  