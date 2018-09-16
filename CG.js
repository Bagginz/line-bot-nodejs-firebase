const firebase = require('firebase-admin');
const serviceAccount = require('./serviceaccount.json');
const config = require('./config/config.json');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: config.firebaseDB
});

class CG {
    constructor() {
        this.getFirebase = () => {
                const db = firebase.database();
                return db;
        }
    }
}

CG.instance = null;
CG.getInstance = () => {
    if (CG.instance === null) {
        CG.instance = new CG();
    }
    return CG.instance;
};
module.exports = CG.getInstance();