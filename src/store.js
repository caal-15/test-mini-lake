export const initialState = { counter: 0 }

export const actions = {
  addToCounter: state => ({ counter: state.counter + 1 }),
  setCounter: (state, count) => {
    return { ...state, counter: count }
  }
}
