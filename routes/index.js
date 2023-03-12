var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getQuizzes', function(req, res, next) {
  req.pool.getConnection(function(err,connection){
    if(err){
      console.log(err);
      res.sendStatus(500);
       return;
     }
     var category = req.body.category;
     var query = "SELECT Quiz_Title,Quiz_ID FROM Quizzes WHERE Category = ?;";
     connection.query(query,[category] ,function(err,rows,fields){
       connection.release();
       if(err){
       console.log(err);
       res.sendStatus(500);
       return;
       }
       res.json(rows);
     });
   });
});

router.post('/getQuestions', function(req, res, next) {
  req.pool.getConnection(function(err,connection){
    if(err){
      console.log(err);
      res.sendStatus(500);
       return;
     }
     var id = req.body.id;
     var query = "SELECT Question, Option1, Option2, Option3, Option4, Answer FROM Questions WHERE Quiz_ID = ?;";
     connection.query(query,[id] ,function(err,rows,fields){
       connection.release();
       if(err){
       console.log(err);
       res.sendStatus(500);
       return;
       }
       res.json(rows);
     });
   });
});

router.post('/insertQuizIntoDb', function(req, res, next) {
  req.pool.getConnection(function(err,connection){
    if(err){
      console.log(err);
      res.sendStatus(500);
       return;
     }
     var title = req.body.title;
     var category = req.body.category;
     var query = "INSERT INTO Quizzes (Category,Quiz_title) VALUES (?,?);";
     connection.query(query,[category,title] ,function(err,rows,fields){
       connection.release();
       if(err){
       console.log(err);
       res.sendStatus(500);
       return;
       }
       res.send();
     });
   });
});

router.get('/getLatestID', function(req, res, next) {
  req.pool.getConnection(function(err,connection){
    if(err){
      console.log(err);
      res.sendStatus(500);
       return;
     }
     var title = req.body.title;
     var category = req.body.category;
     var query = "SELECT Quiz_ID FROM Quizzes ORDER BY Quiz_ID DESC LIMIT 1;";
     connection.query(query, function(err,rows,fields){
       connection.release();
       if(err){
       console.log(err);
       res.sendStatus(500);
       return;
       }
       res.json(rows);
     });
   });
});

router.post('/insertQuestionIntoDb', function(req, res, next) {
  req.pool.getConnection(function(err,connection){
    if(err){
      console.log(err);
      res.sendStatus(500);
       return;
     }
     var id = req.body.quizID;
     var question = req.body.question;
     var option1 = req.body.option1;
     var option2 = req.body.option2;
     var option3 = req.body.option3;
     var option4 = req.body.option4;
     var answer = req.body.answer;
     var query = "INSERT INTO Questions (Quiz_ID,Question,Option1,Option2,Option3,Option4,Answer) VALUES (?,?,?,?,?,?,?);";
     connection.query(query,[id,question,option1,option2,option3,option4,answer] ,function(err,rows,fields){
       connection.release();
       if(err){
       console.log(err);
       res.sendStatus(500);
       return;
       }
       res.send();
     });
   });
});




module.exports = router;
