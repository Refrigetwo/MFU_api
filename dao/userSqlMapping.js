var user = {
    insert:'INSERT INTO user(id, name, sex, account, pass) VALUES(0,?,?,?,?)',
    update:'update user set name=?, sex=?, account=?, pass=?, where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where account=?',
    queryAll: 'select * from user'
};
module.exports = user;