const express = require("express")
const fs = require("fs")
const path = require("path")
const url = require("url")
const {
    UserModel,
    ArticleModel,
    ArticleDetailModel,
    TopicModel,
    HeaderSearchModel,
    WatchWriterModel,
    WriterModel,
    RecommendModel,
    FileModel
} = require("./model/model")

const multipart = require('connect-multiparty');

const multipartMiddleware = multipart()

const DateFormat = require("./utils/DateFormat")
const router = express.Router();

const myReadFile = (filename) => (
    new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, `./db/${filename}.json`), "utf8", function (err, data) {
            if (!err) {
                resolve(JSON.parse(data))
            } else {
                reject(err)
            }
        })
    })
)

const toPromise = (asyncFun) => (
    new Promise(asyncFun)
)
router.get('/userInfo', function (req, res) {
    // 取出userid
    const userid = req.session.userid
    // 查询
    UserModel.findOne({_id: userid}, function (err, user) {
        // 如果没有, 返回错误提示
        if (!user) {
            // 清除浏览器保存的userid的cookie
            delete req.session.userid

            res.status(200).json({status: 0, message: '请先登录'})
        } else {
            // 如果有, 返回user
            res.status(200).json({status: 1, data: user})
        }
    })
})
router.post("/login", function (req, res, next) {
    UserModel.findOne(req.body, function (err, user) {
        if (!err) {
            if (user) {
                req.session.userid = user._id
                res.status(200).json({"status": 1})
            } else {
                res.status(200).json({"status": 0, message: "用户名或密码错误"})
            }
        } else {
            next(err)
        }
    })
})
router.post("/register", function (req, res, next) {
    UserModel.findOne(req.body, function (err, user) {
        if (!err) {
            if (user) {
                res.status(200).json({"status": 0, message: "已经存在该用户，请直接登录"})
            } else {
                new UserModel(req.body).save((err, user) => {
                    if (!err) {
                        req.session.userid = user._id
                        res.status(200).json({"status": 1})
                    } else {
                        next(err)
                    }
                })
            }
        } else {
            next(err)
        }
    })
})
router.post("/logout", function (req, res) {
    delete req.session.userid
    res.status(200).json({"status": 1})
})
router.get("/articleList", function (req, res, next) {
    const {page, pageSize} = req.query
    const articleModel = ArticleModel.find().skip(page * pageSize).limit(Number(pageSize));
    articleModel.exec(function (err, articles) {
        if (!err) {
            res.status(200).json({"status": 1, data: articles})
        } else {
            next(err)
        }
    })
})
router.get("/myArticleList", function (req, res, next) {
    //const {page, pageSize} = req.query
    const id = req.session.userid
    const articleModel = ArticleModel.find().populate({path: "key"}).sort({"_id": -1})
        .exec(function (err, articles) {
            if (!err) {
                const list = articles.map((item) => {
                    if (item.key.author == id) {
                        return item
                    }
                })
                res.status(200).json({"status": 1, data: list})
            } else {
                next(err)
            }
        })
})
router.get("/articleDetail", function (req, res, next) {
    const query = req.query
    ArticleDetailModel.findOne(query, function (err, detail) {
        if (!err) {
            res.status(200).json({"status": 1, data: detail})
        } else {
            next(err)
        }
    })
})

router.get("/topicList", function (req, res, next) {
    const query = url.parse(req.url).query
    TopicModel.find(query, function (err, topic) {
        if (!err) {
            res.status(200).json({"status": 1, data: topic})
        } else {
            next(err)
        }
    })
})
router.get("/recommendList", function (req, res, next) {
    const query = url.parse(req.url).query
    RecommendModel.find(query, function (err, recommendList) {
        if (!err) {
            res.status(200).json({"status": 1, data: recommendList})
        } else {
            next(err)
        }
    })
})
router.get("/headerSearchList", function (req, res, next) {
    const query = req.query
    const model = HeaderSearchModel.find(query, function (err, list) {
        if (!err) {
            res.status(200).json({"status": 1, data: list})
        } else {
            next(err)
        }
    })
})
router.get("/writerList", async function (req, res, next) {
    const query = req.query
    const writerList = await toPromise((resolve, reject) => {
        WriterModel.find(query, function (err, writerList) {
            if (!err) {
                resolve(writerList)
            } else {
                reject(err)
            }
        })
    })
    const getWatch = async (item, index) => {
        //异步方法
        const watchWriter = await toPromise((resolve, reject) => {
            WatchWriterModel.findOne({author: item, userId: userid}, function (err, watchWriter) {
                if (!err) {
                    resolve(watchWriter)
                } else {
                    reject(err)
                }
            })
        })
        //是一个bson格式的   需要转化为json格式的
        const itemJ = item.toJSON()
        if (watchWriter) {
            itemJ.watched = true;
        }
        list.push(itemJ)
        this.list = list;
        //因为上面函数是异步的，所以这里获取到的始终是原始值=====>console.log("---",list)
    }
    const {userid} = req.session
    if (userid) {
        let list = []
        for (let i = 0; i < writerList.length; i++) {
            const watchWriter = await toPromise((resolve, reject) => {
                WatchWriterModel.findOne({author: writerList[i], userId: userid}, function (err, watchWriter) {
                    if (!err) {
                        resolve(watchWriter)
                    } else {
                        reject(err)
                    }
                })
            })
            const item = writerList[i].toJSON()
            if (watchWriter) {
                item.watched = true
            }
            list.push(item)
        }
        res.status(200).json({"status": 1, data: list})
        /*
        这里不能使用forEach，只能使用传统遍历方式
        writerList.each((item, index) => {})
        */

    } else {
        res.status(200).json({"status": 1, data: writerList})
    }
})
router.get("/homeList", async function (req, res) {
    const query = req.query

    const articleList = await toPromise(
        (resolve, reject) => ArticleModel.find({}, function (err, articleList) {
            if (!err) {
                resolve(articleList)
            } else {
                reject(err)
            }
        }).skip(0).limit(10)
    )
    const topicList = await toPromise(
        (resolve, reject) => TopicModel.find({}, function (err, topicList) {
            if (!err) {
                resolve(topicList)
            } else {
                reject(err)
            }
        })
    )
    const recommendList = await toPromise(
        (resolve, reject) => RecommendModel.find({}, function (err, recommendList) {
            if (!err) {
                resolve(recommendList)
            } else {
                reject(err)
            }
        })
    )
    res.status(200).json({"status": 1, data: {articleList, topicList, recommendList}})
})
router.get("/infoList", async function (req, res, next) {
    const id = req.session.userid
    WatchWriterModel.find({userId: id})
        .populate({
            path: 'author',
            //populate: {path: 'city'}
        }).sort({"_id": -1}).exec(function (err, list) {
        if (!err) {
            res.status(200).json({"status": 1, data: list})
        } else {
            next(err)
        }
    })
})
router.post("/watch", async function (req, res, next) {
    const id = req.session.userid
    if (!id) {
        res.status(401).json({status: 0, message: "请先登录"})
    }
    const {author} = req.body
    const writer = await toPromise((resolve, reject) => {
        WriterModel.findOne({"_id": author}, function (err, writer) {
            if (!err) {
                resolve(writer)
            } else {
                reject(err)
            }
        })
    })

    new WatchWriterModel({author: writer, action: `关注了作者 · ${new DateFormat(Date.now()).format()}`, userId: id})
        .save(function (err, list) {
            if (!err) {
                res.status(200).json({"status": 1})
            } else {
                next(err)
            }
        })
})
router.post("/unWatch", function (req, res, next) {
    const {_id} = req.body
    WatchWriterModel.deleteOne({_id}, function (err, list) {
        if (!err) {
            res.status(200).json({"status": 1})
        } else {
            next(err)
        }
    })
})
router.post("/articleEdit", function (req, res, next) {
    const id = req.session.userid
    if (!id) {
        res.status(401).json({status: 0, message: "请先登录"})
    }
    const {title, content, desc, imgUrl} = req.body
    new ArticleDetailModel({author: id, title, content}).save(function (err, detail) {
        if (!err) {
            new ArticleModel({key: detail._id, desc, title, imgUrl}).save(function (err) {
                if (!err) {
                    res.status(200).json({status: 1})
                } else {
                    next(err)
                }
            })
        } else {
            next(err)
        }
    })
})

router.get("/img",function(req,res){
    const {_id} = req.query
    FileModel.find({_id},function(err,file){
        if(!err){
            console.log(file)
            res.status(200).json({status:1,data:file.content})
        }else{
            next(err)
        }
    })
})
//处理文件上传
router.post("/imgUpload", multipartMiddleware, function (req, res, next) {

    fs.readFile(req.files.upload.path, "utf-8", function (err, data) {
        /*if (!err) {
            new FileModel({content: data}).save(function(err){
                if(err){
                   next(err)
                }else{
                    res.status(200).json({status:1})
                }
            })
        } else {
            next(err)
        }*/
    })

})
router.get("/initDB", async function (req, res, next) {
    const id = req.session.userid
    if (!id) {
        return res.status(401).json({status: 0, message: "请先登录"})
    }
    const detailList = await myReadFile("detail")
    const articleList = await myReadFile("articleList")
    detailList.map((item, index) => {
        const articleDetailModel = new ArticleDetailModel({...item, author: id})
        articleDetailModel.save((err, detail) => {
            if (err) {
                next(err)
            } else {
                new ArticleModel({
                    key: detail._id,
                    desc: articleList[index].desc,
                    title: articleList[index].title,
                    imgUrl: articleList[index].imgUrl
                }).save(function (err) {
                    if (err) {
                        next(err)
                    }
                })
            }
        })
    })
    /*const headerList = await myReadFile("headerList")
    headerList.map((item) => {
        const headerSearchModel = new HeaderSearchModel(item)
        headerSearchModel.save((err, header) => {
            if (err) {
                throw new Error(err)
            }
        })
    })
    const topicList = await myReadFile("topicList")
    topicList.map((item) => {
        const topicModel = new TopicModel(item)
        topicModel.save((err, topic) => {
            if (err) {
                throw new Error(err)
            }
        })
    })
    const recommendList = await myReadFile("recommendList")
    recommendList.map((item) => {
        const recommendModel = new RecommendModel(item)
        recommendModel.save((err, recommend) => {
            if (err) {
                throw new Error(err)
            }
        })
    })
    const writerList = await myReadFile("writerList")
    writerList.map((item) => {
        const writerModel = new WriterModel(item)
        writerModel.save((err, writer) => {
            if (err) {
                throw new Error(err)
            }
        })
    })*/
    res.send("init DB is OK.")
})

module.exports = router
