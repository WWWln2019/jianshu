const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/jianshu")

const con = mongoose.connection

con.on("connected", function () {
    console.log("数据库连接成功.")
})

const UserSchema = mongoose.Schema({
    "userName": {
        type: String,
        required: true
    },
    "userPwd": {
        type: String,
        required: true
    },
    "imgUrl": {
        type: String
    }
})
const UserModel = mongoose.model("User", UserSchema)

const ArticleSchema = mongoose.Schema({
    "key": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ArticleDetail"
    },
    "title": {
        type: String,
        required: true
    },
    "desc": {
        type: String,
        required: true
    },
    "imgUrl": {
        type: String
    }
})
const ArticleModel = mongoose.model("Article", ArticleSchema)

const ArticleDetailSchema = mongoose.Schema({
    "author": {
        type: String,
        required: true
    },
    "title": {
        type: String,
        required: true
    },
    "content": {
        type: String,
        required: true
    }
})
const ArticleDetailModel = mongoose.model("ArticleDetail", ArticleDetailSchema)

const TopicSchema = mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "imgUrl": {
        type: String
    }
})
const TopicModel = mongoose.model("Topic", TopicSchema)

const HeaderSearchSchema = mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
})
const HeaderSearchModel = mongoose.model("Header", HeaderSearchSchema)
const WatchWriterSchema = mongoose.Schema({
    "userId": {
        type: String,
        required: true
    },
    "action": {
        type: String,
        required: true
    },
    "author": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Writer"
    }
})
const WatchWriterModel = mongoose.model("WatchWriter", WatchWriterSchema)
const WriterSchema = mongoose.Schema({
    "key": {
        type: String,
        required: true
    },
    "author": {
        type: String,
        required: true
    },
    "brief": {
        type: String,
        required: true
    },
    "desc": {
        type: String,
        required: true
    },
    "imgUrl": {
        type: String,
        required: true
    },
})
const WriterModel = mongoose.model("Writer", WriterSchema)
const RecommendSchema = mongoose.Schema({
    "imgUrl": {
        type: String,
        required: true
    },
})
const RecommendModel = mongoose.model("Recommend", RecommendSchema)
const FileSchema = mongoose.Schema({
    "content": {
        type: String,
        required: true
    },
})
const FileModel = mongoose.model("File", FileSchema)

module.exports = {
    UserModel,
    ArticleModel,
    ArticleDetailModel,
    TopicModel,
    HeaderSearchModel,
    WatchWriterModel,
    WriterModel,
    RecommendModel,
    FileModel
}
