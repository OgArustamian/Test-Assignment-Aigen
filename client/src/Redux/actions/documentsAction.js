import SHOW_DOCUMENT from '../types/types';

export const showDocuments = (docs) => ({
  type: SHOW_DOCUMENT,
  payload: docs,
});

export const fetchDocuments = (inputData) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/documents', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(inputData),
  });

  const requestedDocs = await response.json();
  if (response.ok) {
    dispatch(showDocuments(requestedDocs));
  }
};
