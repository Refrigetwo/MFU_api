var sch = {
    insert:'INSERT INTO sch(sch_id, type, content, ba, fre, time, date, user_id) VALUES(0,?,?,?,?,?,?,?)',
    queryById: 'select * from sch where user_id=? and date=?',
    queryAll: 'select * from sch'
};
module.exports = sch;