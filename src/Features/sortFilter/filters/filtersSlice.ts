import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FilterChoices, Parameter, ParameterResponse } from "../../../Models/Parameter";
import { Option } from "../../../Models/Option";

export const fetchFilters = createAsyncThunk(
  "filters/fetchFilters",
  async (id: number) => {
    try {
      const response = await axios.get<ParameterResponse[]>(
        `https://localhost:7010/api/Parameters/${id}`
      );

      const parametersWithOptionArray: Parameter[] = response.data.map(
        (parameter) => {
          if (parameter.predefinedChoices) {
            const predefinedChoicesArray = JSON.parse(
              parameter.predefinedChoices
            ) as Option[];
            return { ...parameter, predefinedChoices: predefinedChoicesArray };
          } else {
            return { ...parameter, predefinedChoices: [] };
          }
        }
      );

      return parametersWithOptionArray;
    } catch (error) {
      throw error;
    }
  }
);

type FiltersState = {
  isLoading: boolean;
  failedLoading: boolean;
  hasLoaded: boolean;
  filters: Parameter[];
  filterChoices: FilterChoices[];
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    isLoading: false,
    failedLoading: false,
    hasLoaded: false,
    filters: [],
    filterChoices: [],
  } as FiltersState,
  reducers: {
    addFilterChoice: (state, action) => {
      const { parameterId, choiceId } = action.payload;
      const filterChoice = state.filterChoices.find(
        (filterChoice) => filterChoice.parameterId === parameterId
      );

      if (filterChoice) {
        filterChoice.choicesIds.push(choiceId);
      } else {
        state.filterChoices.push({
          parameterId,
          choicesIds: [choiceId],
        });
      }
    },
    removeFilterChoice: (state, action) => {
      const { parameterId, choiceId } = action.payload;
      const filterChoice = state.filterChoices.find(
        (filterChoice) => filterChoice.parameterId === parameterId
      );

      if (filterChoice) {
        const index = filterChoice.choicesIds.indexOf(choiceId);
        filterChoice.choicesIds.splice(index, 1);
      }
    },
  },
  extraReducers: {
    [fetchFilters.fulfilled.type]: (state, action) => {
      state.hasLoaded = true;
      state.isLoading = false;
      state.failedLoading = false;
      state.filters = action.payload;
    },
    [fetchFilters.pending.type]: (state) => {
      state.hasLoaded = false;
      state.isLoading = true;
      state.failedLoading = false;
    },
    [fetchFilters.rejected.type]: (state) => {
      state.hasLoaded = false;
      state.isLoading = false;
      state.failedLoading = true;
    },
  },
});

export const selectFilters = (state: any) => {
  return state.filters.filters;
};

export const selectFiltersLoading = (state: any) => {
  return state.filters.isLoading;
};

export const selectFiltersFailed = (state: any) => {
  return state.filters.failedLoading;
};

export const selectFiltersLoaded = (state: any) => {
  return state.filters.hasLoaded;
};

export const selectFilterChoices = (state: any) => {
  return state.filters.filterChoices;
};

export const selectChoicesForFilter = (state: any, parameterId: number) => {
  const filterChoices = state.filters.filterChoices.find(
    (filterChoice: FilterChoices) => filterChoice.parameterId === parameterId
  );
  return filterChoices;
};

export const { addFilterChoice, removeFilterChoice } = filtersSlice.actions;

export default filtersSlice.reducer;
