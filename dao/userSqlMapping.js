var user = {
    insert:'INSERT INTO user(user_id, user_age, user_city) VALUES(0,?,?)',
    update:'update user set user_age=?, user_city=? where user_id=?',
    delete: 'delete from user where user_id=?',
    queryById: 'select * from user where user_id=?',
    queryAll: 'select * from user'
};
module.exports = user;