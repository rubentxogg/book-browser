// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  top15BooksByMonthAndYearApiBaseUrl: 'https://hapi-books.p.rapidapi.com/month',
  searchBookByNameApiBaseUrl: 'https://hapi-books.p.rapidapi.com/search',
  awardedBooksOfAYearUrl: "https://hapi-books.p.rapidapi.com/top",
  weeklyPopularBooksByGenreUrl: "https://hapi-books.p.rapidapi.com/week",
  XRapidAPIHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHeaderValue: 'hapi-books.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: '8deaa31b8dmsh5b87e23e302820fp172d2ajsn4050dd4c5bf7'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
