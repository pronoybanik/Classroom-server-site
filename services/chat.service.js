const Assignment = require("../modules/assignment.mudule");
const Chat = require("../modules/chat.module");
const Class = require("../modules/class.module");

exports.createChatService = async (data) => {
    const result = await Chat.create(data);
    const { _id: chatId, assignmentId, classId } = result;
    if (assignmentId) {
        const data = await Assignment.updateOne(
            { _id: assignmentId },
            { $push: { privateChatInfo: chatId } }
        );
        console.log("assingme", data);
    } else {
        const chatData = await Class.updateOne(
            { _id: classId },
            { $push: { groupChat: chatId } }
        );
        console.log("chatdata", chatData);
    }
    return result;
};

exports.getChatService = async () => {
    const result = await Chat.find({});
    return result;
}
exports.getChatByIdService = async (id) => {
    const result = await Chat.findOne({ _id: id });
    return result;
}