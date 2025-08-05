const mongoose=require('mongoose');
const chapterSchema=new mongoose.Schema({
    ChapterName:{
        type:String,
        required:true
    },
      ChapterDescription:{
        type:String,
        required:true
    },
      ChapterThumbnail:{
        type:String,
        required:true
    },
      SubjectId:{
        type:String,
        required:true
    },
      ChapterVideo:{
        type:String,
        required:true
    },
})
const chapterModel=mongoose.model('chapter',chapterSchema);
module.exports=chapterModel;