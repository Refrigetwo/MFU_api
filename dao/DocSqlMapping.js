var Doc = {
    insert:'INSERT INTO doc(doc_id, date, sym, pic, user_id) VALUES(0,?,?,?,?)',
    update:'update doc set name=?, sex=?, account=?, pass=?, where id=?',
    delete: 'delete from doc where doc_id=?',
    queryById: 'select * from doc where user_id=?',
    queryAll: 'select * from doc'
};
module.exports = Doc;