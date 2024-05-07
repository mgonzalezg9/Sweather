/**
 * Checks all the environment variables are present and available
 * @param vars Environment variables
 * @returns If all the required keys have been defined
 */
export const hasEnvironmentVariables = (vars: NodeJS.ProcessEnv) => {
  return (
    vars.EXPO_PUBLIC_OPENWEATHER_API_KEY &&
    vars.EXPO_PUBLIC_OPENWEATHER_URL &&
    vars.EXPO_PUBLIC_UNSPLASH_API_KEY &&
    vars.EXPO_PUBLIC_UNSPLASH_URL
  );
};
