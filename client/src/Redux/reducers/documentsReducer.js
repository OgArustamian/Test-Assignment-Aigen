import SHOW_DOCUMENT from '../types/types';

// eslint-disable-next-line default-param-last
const documentsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_DOCUMENT:
      return payload;

    default:
      return state;
  }
};

export default documentsReducer;
