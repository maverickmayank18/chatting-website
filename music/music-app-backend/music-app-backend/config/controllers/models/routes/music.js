const express = require('express');
const router = express.Router();
const { getTracks, addTrack, deleteTrack } = require('../controllers/musicController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, getTracks);
router.post('/', auth, addTrack);
router.delete('/:id', auth, deleteTrack);

module.exports = router;
