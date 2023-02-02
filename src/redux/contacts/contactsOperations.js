import axios from 'axios';
import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://rest-api-contact-book.onrender.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      Notify.failure(`Something wrong - ${e.response.data.message}`);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      Notify.success(`${response.data.name} has been added to your contacts`);
      return response.data;
    } catch (e) {
      Notify.failure(`Something wrong - ${e.response.data.message}`);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      Notify.success(
        `${response.data.name} has been deleted from your contacts`
      );
      return response.data;
    } catch (e) {
      Notify.failure(`Something wrong - ${e.response.data.message}`);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
