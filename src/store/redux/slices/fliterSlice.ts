import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchQuery: '',
    filterValue: '',
    currentPage: 1,
    pageSize: 10,
    jobType: {
        fullTime: true,
        partTime: true,
        remote: true,
        internship: true,
        freelance: true,
        temporary: true,
    },
    jobSalary: {
        min: null,
        max: null,
    },
    experienceLevel: {
        expert: true,
        senior: true,
        junior: true,
        regular: true,
        fresher: true,
    },
    jobPosted: {
        allTime: true,
        lastHour: false,
        last24Hours: false,
        last7Days: false,
        last30Days: false,
    },
    candidateGender: {
        female: true,
        male: true,
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setFilterValue: (state, action) => {
            state.filterValue = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
        },
        setJobType: (state, action) => {
            state.jobType = action.payload;
        },
        setJobSalary: (state, action) => {
            state.jobSalary = action.payload;
        },
        setExperienceLevel: (state, action) => {
            state.experienceLevel = action.payload;
        },
        setJobPosted: (state, action) => {
            state.jobPosted = action.payload;
        },
        setCandidateGender: (state, action) => {
            state.candidateGender = action.payload;
        },
    },
});

export const {
    setSearchQuery,
    setFilterValue,
    setCurrentPage,
    setPageSize,
    setJobType,
    setJobSalary,
    setExperienceLevel,
    setJobPosted,
    setCandidateGender,
} = filterSlice.actions;

export default filterSlice.reducer;