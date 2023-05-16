const config = {
    apiKey: "AIzaSyBDpJO2XOeuWSAQXL4c42qpxw6O1t-tp0c",
    authDomain: "authpaygreen.firebaseapp.com",
    projectId: "authpaygreen",
    storageBucket: "",
    messagingSenderId: "BLpPlVc4LFB6v74jj63YqgsrzToSrZtNk-0qYbK8IV2Irvw21U3_0KnXgLvbBCJN82cErjAvdlM6DSiLg7mPYvc",
    appId: "",
    measurementId: ""
};

export function getFirebaseConfig() {
    if (!config || !config.apiKey ) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
        'Add your web app\'s configuration object to firebase-config.ts');
    } else {
        return config;
    }
}
