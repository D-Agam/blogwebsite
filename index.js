const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const _ =require("lodash");
app.set('view engine','ejs');
var titles=[];
var posts=[];
app.use(bodyParser.urlencoded({extended:true}));
let contact="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vitae, laudantium saepe aspernatur exercitationem provident unde illum et. Ad possimus fugit et ea sapiente repudiandae obcaecati earum architecto libero quis.";
let about="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vitae, laudantium saepe aspernatur exercitationem provident unde illum et. Ad possimus fugit et ea sapiente repudiandae obcaecati earum architecto libero quis.";
let text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vitae, laudantium saepe aspernatur exercitationem provident unde illum et. Ad possimus fugit et ea sapiente repudiandae obcaecati earum architecto libero quis.";
app.get("/",function(req,res)
{
    res.render("indexR",{text:text,titles:titles,posts:posts});
});
app.get("/contact",function(req,res)
{
    res.render("contact",{contact:contact});
});
app.get("/about",function(req,res)
{
    res.render("about",{about:about});
});
app.get("/compose",function(req,res)
{
    res.render("compose"); 
});
app.get("/posting/:name",function(req,res)
{
    var x=_.lowerCase(req.params.name);
    console.log(x);
    var f=false;
    var i=0;
    titles.forEach(function(ele)
    {
        var y=_.lowerCase(ele);
        console.log(y);
        if(x===y)
        {
            f=true;
            res.render("post",{x:ele,z:posts[i]});
        }
        i++;
    });    
    if(!f)
    {
        res.send("Match Not Found");
    }
});
app.post("/compose",function(req,res)
{
    titles.push(req.body.text1);
    posts.push(req.body.post1);
    res.redirect("/");
})
app.listen(process.env.PORT||3000,function()
{
    console.log("Server runned");
});
