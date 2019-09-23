const express = require("express");
const app = express();
const { GaussianBlur } = require('filterlib'); // Here it is :^)

let previousPath = __dirname.split('/');
previousPath.pop();
previousPath = previousPath.join('/');

var bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: previousPath + '/public/uploads/images'});
const port = 8081;

app.use(express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/blurFilter", upload.single('file'), (req, res) => {
  if(req.file) {
    let file = req.file;

    let data = {
      image: {
        input: "",
        output: ""
      },
      options: {
        radius: 0,
        sigma: 0
      }
    };

    data.image.input = file.path;
    data.image.output = file.path + '-blur.jpg';
    data.options.radius = req.body.radius;
    data.options.sigma = req.body.sigma;

    const ouputFileName = data.image.output.split('/').pop();

    (new GaussianBlur(data))
      .then(() => { console.log(file.originalname); res.json(`/uploads/images/${ouputFileName}`); });
  }
  else throw 'error';
});

app.listen(port, () => {console.log(`Example app listening on port ${port}!`)});