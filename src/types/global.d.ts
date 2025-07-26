// Global type declarations for the Sweather app

// Module declaration for country-list-spanish
declare module 'country-list-spanish' {
  interface Country {
    name: string;
    code: string;
  }
  export function getCountry(code: string): Country | null;
  export function getCountries(): Country[];
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
