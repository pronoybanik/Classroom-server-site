const Assignment = require("../modules/assignment.mudule");
const Chat = require("../modules/chat.module");
const Class = require("../modules/class.module");

exports.createChatService = async (data) => {
    const result = await Chat.create(data);
    const { _id: chatId, assignmentId, classId } = result;
    if (assignmentId) {
        await Assignment.updateOne(
            { _id: assignmentId },
            { $push: { privateChatInfo: chatId } }
        );
    } else {
        await Class.updateOne(
            { _id: classId },
            { $push: { groupChat: chatId } }
        );
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