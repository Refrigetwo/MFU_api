var News = {
    query: 'select *  from news order by news_id desc LIMIT ?',
};
module.exports = News;