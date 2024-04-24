export const selectToken = state => state.auth.token;
export const selectIsLogged = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsError = state => state.auth.isError;
export const selectUserData = state => state.auth.userData; 