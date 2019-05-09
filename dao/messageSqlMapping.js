var message = {
    insert:'INSERT INTO message(message_id, doctor_id, user_id, date, content) VALUES(0,?,?,?,?)',
    queryById: 'select * from message where doctor_id=? and user_id=?',
};
module.exports = message;