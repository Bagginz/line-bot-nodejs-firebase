const { replyText } = require('../webhook/replytext');
const { getJobsData } = require('../firebase/jobs');
exports.handleText = async (message, replyToken) => {
    const replyMessage = await chkCate(message.text);
    let textReply = message.text;
    if(replyMessage.message.jobs){
        textReply = await formatReply(replyMessage.message.jobs);
    }
    return replyText(replyToken, textReply, replyMessage.quickReply);
};

const formatReply = () => {
    return new Promise(resolve => {
        let text = `ต้องการให้ผมช่วยอะไร..เลือกหัวข้อด้านล่างได้เลยครับ`;
        resolve(text);
    });
};

const chkCate = (message) => {
    return new Promise(async resolve => {
        let returnData = { message: message };
        switch (message) {
            case "SIN":
                returnData.message = await getJobsData();
                returnData.quickReply = {
                    items: await createQuickReply(returnData.message.jobs)
                };
                break;
        }
        resolve(returnData);
    });
};

const createQuickReply = (jobs) => {
    return new Promise(resolve => {
        const items = [];
        let newJobs = JSON.parse(JSON.stringify(jobs));
        for (let index = 0; index < newJobs.length; index++) {
            if (newJobs[index] != null) {
                let param = {
                    type: "action",
                    action: {
                        type: "message",
                        label: newJobs[index].name,
                        text: newJobs[index].name
                    }
                };
                items.push(param);
            }
        }
        resolve(items);
    });
};