const Track = require('../models/Track');

exports.getTracks = async (req, res) => {
  try {
    const tracks = await Track.find();
    res.json(tracks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addTrack = async (req, res) => {
  const { title, artist, album, genre, releaseDate } = req.body;

  try {
    const newTrack = new Track({
      title,
      artist,
      album,
      genre,
      releaseDate,
    });

    const track = await newTrack.save();
    res.json(track);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteTrack = async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);

    if (!track) {
      return res.status(404).json({ msg: 'Track not found' });
    }

    await track.remove();
    res.json({ msg: 'Track removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
