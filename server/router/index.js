const router = require('koa-router')()
const controller = require('../controller/index.js')
// 首页
router.get('/index/data', controller.index.allData)
// 搜索
router.post('/search/saveHistory', controller.search.saveHistory)
router.get('/search/historyAndHotSearch', controller.search.historyAndHotSearch)
router.post('/search/clearHistory', controller.search.clearHistory)


module.exports = router