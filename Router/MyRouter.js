// Router/MyRouter.js
const express = require('express');
const router = express.Router();
const UserControllers = require('../Controllers/MyControllers');
const upload = require('../middleware/upload');
const chapters = require('../middleware/uploadChapter');

// Routes
router.post('/register', UserControllers.register);
router.post('/login', UserControllers.login);
router.post('/addCategory', UserControllers.addCategory);
router.get('/fetchCategory', UserControllers.fetchCategory);
router.get('/singleCategory/:id', UserControllers.singleCategory);
router.put('/updateCategory/:id', UserControllers.updateCategory);
router.delete('/deleteCategory/:id', UserControllers.deleteCategory);

router.post('/addSubject', upload.single('thumbnail'), UserControllers.addSubject);
router.get('/fetchSubject', UserControllers.fetchSubject);
router.put('/updateSubject/:id', UserControllers.updateSubject);
router.delete('/deleteSubject/:id', UserControllers.deleteSubject);
router.get('/singleSubject/:id', UserControllers.singleSubject);

router.post('/addChapter', chapters.fields([
    { name: 'ChapterThumbnail', maxCount: 1 },
    { name: 'ChapterVideo', maxCount: 1 }
]), UserControllers.addChapter);
router.get('/fetchChapter/:id', UserControllers.fetchChapter);
router.delete('/deleteChapter/:id', UserControllers.deleteChapter);
module.exports = router;
