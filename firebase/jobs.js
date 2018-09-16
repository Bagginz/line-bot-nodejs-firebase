const CG = require('../CG');
const db = CG.getFirebase();
exports.getJobsData = () => {
    return new Promise(resolve => {
        const ref = db.ref("/sins_jobs");
        ref.once("value", (snapshot) => {
            console.log(snapshot.val());
            resolve(snapshot.val());
        });
    });
};

// exports.setJobsData = (params) => {
//     return new Promise(resolve => {
//         let jobsRef = ref.child("jobs");
//         jobsRef.set(params);
//         resolve('END');
//     });
// };

// const timestamp = moment().format("X");
// {
//     1: {
//         name: "Approve Line@",
//         team_id: 1,
//         createdate: timestamp
//     },
//     2: {
//         name: "ดึงรายชื่อเพื่อสร้างใบเสนอราคา Line@",
//         team_id: 1,
//         createdate: timestamp
//     }
// }