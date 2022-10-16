var buttons = ["https://tbp.berkeley.edu/exams/3907/download/",
  "https://tbp.berkeley.edu/exams/2512/download/",
  "https://tbp.berkeley.edu/exams/2506/download/",
  "https://tbp.berkeley.edu/exams/128/download/",
  "https://tbp.berkeley.edu/exams/164/download/",
  "https://tbp.berkeley.edu/exams/166/download/",
  "https://tbp.berkeley.edu/exams/3904/download/"
  , "https://tbp.berkeley.edu/exams/3909/download/"
  , "https://tbp.berkeley.edu/exams/3908/download/"
  , "https://tbp.berkeley.edu/exams/3900/download/"
  , "https://tbp.berkeley.edu/exams/3903/download/"
  , "https://tbp.berkeley.edu/exams/3591/download/"
  , "https://tbp.berkeley.edu/exams/3901/download/"
  , "https://tbp.berkeley.edu/exams/3902/download/"
  , "https://tbp.berkeley.edu/exams/3966/download/"
  , "https://tbp.berkeley.edu/exams/4047/download/"
  , "https://tbp.berkeley.edu/exams/4349/download/"
  , "https://tbp.berkeley.edu/exams/4284/download/"
  , "https://tbp.berkeley.edu/exams/5583/download/"
  , "https://tbp.berkeley.edu/exams/4471/download/"
  , "https://tbp.berkeley.edu/exams/4536/download/"
  , "https://tbp.berkeley.edu/exams/5351/download/"
  , "https://tbp.berkeley.edu/exams/5158/download/"
  , "https://tbp.berkeley.edu/exams/4964/download/"
  , "https://tbp.berkeley.edu/exams/5352/download/"
  , "https://tbp.berkeley.edu/exams/5657/download/"
  , "https://tbp.berkeley.edu/exams/5658/download/"
  , "https://tbp.berkeley.edu/exams/5427/download/"
  , "https://tbp.berkeley.edu/exams/5466/download/"
  , "https://tbp.berkeley.edu/exams/5664/download/"
  , "https://tbp.berkeley.edu/exams/5767/download/"
  , "https://tbp.berkeley.edu/exams/5945/download/"
  , "https://tbp.berkeley.edu/exams/5892/download/"
  , "https://tbp.berkeley.edu/exams/6398/download/"
  , "https://tbp.berkeley.edu/exams/5992/download/"
  , "https://tbp.berkeley.edu/exams/6438/download/"
  , "https://tbp.berkeley.edu/exams/6155/download/"
  , "https://tbp.berkeley.edu/exams/6850/download/"
  , "https://tbp.berkeley.edu/exams/6477/download/"
  , "https://tbp.berkeley.edu/exams/6493/download/"
  , "https://tbp.berkeley.edu/exams/6584/download/"
  , "https://tbp.berkeley.edu/exams/6580/download/"
  , "https://tbp.berkeley.edu/exams/6582/download/"
  , "https://tbp.berkeley.edu/exams/6765/download/"
  , "https://tbp.berkeley.edu/exams/6894/download/"
  , "https://tbp.berkeley.edu/exams/7102/download/"
  , "https://tbp.berkeley.edu/exams/7103/download/"
  , "https://tbp.berkeley.edu/exams/6923/download/"
  , "https://tbp.berkeley.edu/exams/6914/download/"
  , "https://tbp.berkeley.edu/exams/6912/download/"
  , "https://tbp.berkeley.edu/exams/6966/download/"
  , "https://tbp.berkeley.edu/exams/7154/download/"
  , "https://tbp.berkeley.edu/exams/7141/download/"];

function makeButtons(c) {
  for (var i = 0; i < c.length; i++) {
    $('.button-holder').append('<button value=' + c[i] + '>' + c[i] +
      '</button>');
  }
}

makeButtons(buttons);