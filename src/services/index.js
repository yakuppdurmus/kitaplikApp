import auth from '@react-native-firebase/auth';

export const register = (email, passowrd) => {
    auth()
        .createUserWithEmailAndPassword(email, passowrd)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            console.error(error);
        });
}

export const logout = () => {
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}
export const login = async ({ email, password }) => {

    let data = await auth()
        .signInWithEmailAndPassword(email, password)
        .then()
        .catch(error => error);
    if (data.code == "auth/wrong-password") {
        return false;
    } else {
        return data;
    }

}

export const loginAnonymous = async () => {
    const response = await auth()
        .signInAnonymously()
        .then()
        .catch(error => error);
    if (response.code === 'auth/operation-not-allowed') {
        return false;
    }
    return response;
}