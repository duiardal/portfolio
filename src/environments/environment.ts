// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
	firebase: {
		apiKey: "AIzaSyBsyVox43W0HV99N4Z9u0Rg5cYVYyloY9o",
		authDomain: "dui-portfolio.firebaseapp.com",
		databaseURL: "https://dui-portfolio.firebaseio.com",
		projectId: "dui-portfolio",
		storageBucket: "dui-portfolio.appspot.com",
		messagingSenderId: "961609219113"
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
