function gramophone(band, album, song) {
  let rotations = (album.length * band.length * song.length) / 2;
  console.log(`The plate was rotated ${Math.ceil(rotations / 2.5)} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
