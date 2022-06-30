import { createSlice } from "@reduxjs/toolkit";
import initialInput from "./initialInput";
import { marked } from "marked";
import DOMPurify from "dompurify";

//We want github style and cr's to become <br>
marked.setOptions({
  gfm: true,
  breaks: true
});

const initialState = {
  mdInput: initialInput,
  mdOutput: ""
};

const mdParserSlice = createSlice({
  name: "mdParser",
  initialState,
  reducers: {
    updateInput: (state, action) => {
      state.mdInput = action.payload;
    },
    mdParse: (state) => {
      const dirtyOutput = marked.parse(state.mdInput);
      state.mdOutput = DOMPurify.sanitize(dirtyOutput, {
        USE_PROFILES: { html: true }
      });
    }
  }
});

export const modalReducer = mdParserSlice.reducer;
export const { updateInput, mdParse } = mdParserSlice.actions;
