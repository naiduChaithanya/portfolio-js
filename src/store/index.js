const { createSlice, configureStore } = require("@reduxjs/toolkit");

const uiSlice = createSlice({
    name: 'ui',
    initialState:{
        activeSection: 'about',
        skillFilter: 'All',
        mobileMenuOpen: false
    },
    reducers: {
        setActiveSection: (state, action) => {
            state.activeSection = action.payload
        },
        setSkillFilter: (state, action) => {
            state.skillFilter = action.payload
        },
        toggleMobileMenu: (state) => {
            state.mobileMenuOpen = !state.mobileMenuOpen
        },
        closeMobileMenu: (state) => {
            state.mobileMenuOpen = false
        }
    }
});

export const {setActiveSection, setSkillFilter, toggleMobileMenu, closeMobileMenu} = uiSlice.actions;
export const store = configureStore(
    {reducer: {ui: uiSlice.reducer}}
);