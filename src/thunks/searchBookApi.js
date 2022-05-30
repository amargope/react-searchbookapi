import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchBooks = createAsyncThunk(
  "searchBooks/fetchSearchBooks",
  async (searchTerm) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );
    return response.data;
  }
);