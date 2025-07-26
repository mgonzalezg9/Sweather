// Global type declarations for the Sweather app

// Module declaration for country-list-spanish
declare module 'country-list-spanish' {
  export function getCountry(code: string): string;
}

// Image file declarations
declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.gif" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  const value: any;
  export default value;
}
