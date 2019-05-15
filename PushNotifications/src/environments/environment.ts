// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * copy and paste your firebase config in firebase console
 * Authentication > Web Setub
 */
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDai44yrgFq9BNvHbO5YNJQ4HJ05AyzXyM",
    authDomain: "push-notifications-10179.firebaseapp.com",
    databaseURL: "https://push-notifications-10179.firebaseio.com",
    projectId: "push-notifications-10179",
    storageBucket: "push-notifications-10179.appspot.com",
    messagingSenderId: "292522725940",
    appId: "1:292522725940:web:74ee7efb49038dd0"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
