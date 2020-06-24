// change the file name dummy.environment.js to "environment.js"
// and add your keys below

var environments = {
	staging: {
		FIREBASE_API_KEY: "AIzaSyBRSvM3j2AYUwAIIJphyA0gYydcW7JGJbk",
		FIREBASE_AUTH_DOMAIN: "recycle-70606.firebaseapp.com",
		FIREBASE_DATABASE_URL: "https://recycle-70606.firebaseio.com",
		FIREBASE_PROJECT_ID: "recycle-70606",
		FIREBASE_STORAGE_BUCKET: "recycle-70606.appspot.com",
		FIREBASE_MESSAGING_SENDER_ID: "248093660317",
		GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyBk_BWX65lkixCJIk4hGLFS0jg-wlIwnKI'
	},
	production: {
		// Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
	}
};

function getReleaseChannel() {
	let releaseChannel = Expo.Constants.manifest.releaseChannel;
	if (releaseChannel === undefined) {
		return 'staging';
	} else if (releaseChannel === 'staging') {
		return 'staging';
	} else {
		return 'staging';
	}
}
function getEnvironment(env) {
	console.log('Release Channel: ', getReleaseChannel());
	return environments[env];
}
var Environment = getEnvironment(getReleaseChannel());
const Trang =  {
    FIREBASE_API_KEY: "AIzaSyBRSvM3j2AYUwAIIJphyA0gYydcW7JGJbk",
    FIREBASE_AUTH_DOMAIN: "recycle-70606.firebaseapp.com",
    FIREBASE_DATABASE_URL: "https://recycle-70606.firebaseio.com",
    FIREBASE_PROJECT_ID: "recycle-70606",
    FIREBASE_STORAGE_BUCKET: "recycle-70606.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "248093660317",
    GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyBk_BWX65lkixCJIk4hGLFS0jg-wlIwnKI'
}; 
export default Trang;

