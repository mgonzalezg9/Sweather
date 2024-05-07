/**
 * Checks all the environment variables are present and available
 * @param vars Environment variables
 * @returns If all the required keys have been defined
 */
export const hasEnvironmentVariables = (vars: NodeJS.ProcessEnv) => {
  // All environment variables are required
  if (
    !vars.OPENWEATHER_API_KEY ||
    !vars.OPENWEATHER_URL ||
    !vars.UNSPLASH_API_KEY ||
    !vars.UNSPLASH_URL
  ) {
    return false;
  }

  return true;
};
