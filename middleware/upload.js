const multer=require('multer');
const path=require('path');
const storage=multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null,'subject/');//Save in 'Upload'folder
    },
    filename:(req,file,cd)=>{
        const uniqueName=Date.now()+'_'+file.originalname;
        cd(null,uniqueName);
    }
});
const upload=multer({storage:storage});
module.exports=upload;