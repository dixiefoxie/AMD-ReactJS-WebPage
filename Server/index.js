const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());

app.use(express.json());

//server connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'W3rtw3rt.',
    connectionLimit: 5,
    database:'amdserver',
    debug:false
});



//----------------------------------------------------------------------------------------------------------------------------------
//Register
app.post('/userRegister', (req, res)=>{

    const user_email = req.body.user_email;
    const user_name = req.body.user_name;
    const user_password = req.body.user_password;


    db.query("INSERT INTO amd_users (user_email, user_name, user_password) VALUES (?,?,?)",
    [user_email,user_name, user_password],
    (err,result)=>{
        if (err){
        console.log(err);
    }else{
        res.send("kayıt alındı")
    }
    });
});

//Register End
app.post('/userLogin', (req, res)=>{

    const user_name = req.body.user_name;
    const user_password = req.body.user_password;


    db.query(" SELECT * FROM amd_users WHERE user_name = ? AND user_password = ?",
    [user_name, user_password],
    (err,result)=>{

        if (err){

            res.send({err: err});
        }
        
        if(result.length > 0){
            res.send(result);
        } 
        else{
        res.send({message: "Kullanıcı adı ve şifre eşleşmiyor"});
    }
    });
});

//Login


//
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//post menu create
app.post('/create', (req, res)=>{
    const menuTitle= req.body.menuTitle;
    const menuActive= req.body.menuActive;
    const menuText= req.body.menuText;
    const menuLink= req.body.menuLink;

    db.query("INSERT INTO menu_list (menuTitle, menuActive, menuText, menuLink) VALUES (?,?,?,?)",
     [menuTitle, menuActive, menuText,menuLink], (err, result)=> {
        if(err) {
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
     });
});
// menu created

// get menu
/*app.get('/menulist',(req,res)=>{
    db.query("SELECT * FROM menu_list", (err, result)=> {
        if(err) {

            console.log(err);

        }else{
            res.send(result);
        }
    });
});*/
// get menu end
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//home Content add


app.post('/createhome', (req, res)=>{
    const homeImage= req.body.homeImage;
    const homeTitle= req.body.homeTitle;
    const homeText= req.body.homeText;
    const homeDownText= req.body.homeDownText;

    db.query("INSERT INTO home_cont (homeImage, homeTitle, homeText, homeDownText) VALUES (?,?,?,?)",
     [homeImage, homeTitle, homeText,homeDownText], (err, result)=> {
        if(err) {
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
     });
});


//home content add end

// home page content update
app.put("/UpdateHome",(req,res)=>{
    const home_id=req.body.home_id;
    const homeTitle=req.body.homeTitle;
    const homeText=req.body.homeText;
    const homeDownText=req.body.homeDownText;
    db.query(
        "UPDATE home_cont SET homeTitle=?, homeText=?, homeDownText=? WHERE home_id = ?",
        [homeTitle, homeText,homeDownText, home_id], 
        
        (err, result)=> {
           if(err) {
               console.log(err);
           } else {
               res.send(result);
           }
        });
   });


//home page content update end


//home page list
app.get('/homeList',(req,res)=>{
    db.query("SELECT * FROM home_cont", (err, result)=> {
        if(err) {

            console.log(err);

        }else{
            res.send(result);
        }
    });
});
//home page list end

//delete home cont

app.delete('/deleteHome/:home_id', (req, res) =>{
    const home_id =req.params.home_id
    db.query("DELETE FROM home_cont WHERE home_id = ?", home_id,(err, result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
} );

//delete home cont end
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//Project add
app.post('/createProject', (req, res)=>{
    const projectTitle= req.body.projectTitle;
    const projectLanguage= req.body.projectLanguage;
    const projectPlatform= req.body.projectPlatform;
    const projectYear= req.body.projectYear;
    const projectDownloadLink = req.body.projectDownloadLink;

    db.query("INSERT INTO my_project (projectTitle, projectLanguage,projectPlatform, projectYear, projectDownloadLink) VALUES (?,?,?,?,?)",
     [projectTitle, projectLanguage, projectPlatform,projectYear, projectDownloadLink], (err, result)=> {
        if(err) {
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
     });
});

//Project end

//Project List
app.get('/projectlist',(req,res)=>{
    db.query("SELECT * FROM my_project", (err, result)=> {
        if(err) {

            console.log(err);

        }else{
            res.send(result);
        }
    });
});
//Project listed

//delete project

app.delete('/delete/:project_id', (req, res) =>{
    const project_id =req.params.project_id
    db.query("DELETE FROM my_project WHERE project_id = ?", project_id,(err, result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result)
        }
    })
} );

//end delete project

// update project

app.put("/UpdateProject",(req,res)=>{

    const project_id=req.body.project_id;
    const projectTitle=req.body.projectTitle;
    const projectLanguage=req.body.projectLanguage;
    const projectPlatform=req.body.projectPlatform;
    const projectYear=req.body.projectYear;
    db.query(
        "UPDATE my_project SET projectTitle=?, projectLanguage=?, projectPlatform=?, projectYear=?  WHERE project_id = ?",
        [projectTitle, projectLanguage,projectPlatform,projectYear, project_id], 
        
        (err, result)=> {
           if(err) {
               console.log(err);
           } else {
               res.send(result);
           }
        });
   });


// project update end
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//add about
app.post('/createAbout', (req, res)=>{
    const aboutImage= req.body.aboutImage;
    const aboutTitle= req.body.aboutTitle;
    const aboutText= req.body.aboutText;


    db.query("INSERT INTO my_about (aboutImage, aboutTitle,aboutText) VALUES (?,?,?)",
     [aboutImage, aboutTitle, aboutText], (err, result)=> {
        if(err) {
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
     });
});

//add about end

//about list
app.get('/aboutList',(req,res)=>{
    db.query("SELECT * FROM my_about", (err, result)=> {
        if(err) {

            console.log(err);

        }else{
            res.send(result);
        }
    });
});
//about list end


//about delete

app.delete('/deleteAbout/:about_id', (req, res) =>{
    const about_id =req.params.about_id
    db.query("DELETE FROM my_about WHERE about_id = ?", about_id,(err, result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
} );

//about delete  end


//about update

app.put("/updateAboutPage",(req,res)=>{

    const about_id=req.body.about_id;
    const aboutTitle=req.body.aboutTitle;
    const aboutText=req.body.aboutText;

    db.query(
        "UPDATE my_about SET aboutTitle=?, aboutText=? WHERE about_id = ?",
        [aboutTitle, aboutText, about_id], 
        
        (err, result)=> {
           if(err) {
               console.log(err);
           } else {
               res.send(result);
           }
        });
   });
//about update end
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//add blog
app.post('/createblog', (req, res)=>{
    const blogText= req.body.blogText;



    db.query("INSERT INTO my_blog (blogText) VALUES (?)",
     [blogText], (err, result)=> {
        if(err) {
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
     });
});
//end blog

//blog list

app.get('/blogList',(req,res)=>{
    db.query("SELECT * FROM my_blog", (err, result)=> {
        if(err) {

            console.log(err);

        }else{
            res.send(result);
        }
    });
});

//end blog list

//update blog


//end update blog

//delete blog

app.delete('/deleteBlog/:blog_id', (req, res) =>{
    const blog_id =req.params.blog_id;
    db.query("DELETE FROM my_blog WHERE blog_id = ?", blog_id,(err, result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result)
        }
    })
} );

//end deleveblog
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
app.listen(3010,() => {
    console.log('running on port 3010');
});