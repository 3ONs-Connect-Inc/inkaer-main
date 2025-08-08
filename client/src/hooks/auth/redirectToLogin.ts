
export const redirectToLoginWithReturnUrl = (navigate: Function, currentPath: string) => {
  const encodedPath = encodeURIComponent(currentPath);
  navigate(`/sign-in?returnTo=${encodedPath}`);
};
//    redirectToLoginWithReturnUrl(navigate, window.location.pathname);