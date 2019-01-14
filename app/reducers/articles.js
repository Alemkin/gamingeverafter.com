const initialError = {
  code: '',
  message: '',
  values: []
}

const initialState = {
  loading: false,
  error: initialError
}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state
  }
}
