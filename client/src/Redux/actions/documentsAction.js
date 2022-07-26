/* eslint-disable consistent-return */
import { message } from 'antd';
import {
  SHOW_DOCUMENT,
} from '../types/types';

export const showDocuments = (docs) => ({
  type: SHOW_DOCUMENT,
  payload: docs,
});

export const sortDocuments = (field, type) => ({
  type,
  payload: field,
});

export const fetchDocuments = (inputData) => async (dispatch) => {
  try {
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
  } catch (err) {
    message.error('сервер не отвечает');
  }
};
