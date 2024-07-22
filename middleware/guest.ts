export default defineNuxtRouteMiddleware((to, from) => {
  const { status } = useAuth();

  if (status.value === 'authenticated') {
    return navigateTo(APP_ROUTES.Main);
  }
});