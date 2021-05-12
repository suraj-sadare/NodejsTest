
const Joi=require("joi");
const express=require("express");
const app=express();
app.use(express.json());
const {
    getPost,
    getPostPartcular,
    createPost,
    updatePost,
    deletePost}=require("./model/ExportFucn");
    
// app.get();
// app.post();
// app.put();
// app.delete();

const articles=[
    {id:1,name:'penpenny',author:'Jivan',desc:'It is only one solution to World..'},
    {id:2,name:'finishline',author:'Tushar',desc:'Plans will not fail...'},
    {id:3,name:'JNV',author:'Kishor',desc:'Amhi jnv o...'},
    {id:4,name:'three-ediots',author:'chetan bhagat',desc:'It tell about ,How is every one different'}
];
app.get('/api/articles',getPost);
app.get('/api/article/:id',getPostPartcular);
app.post('/api/article',createPost);
app.put('/api/articleUpdate/:id',updatePost);
app.delete('/api/articleDelete/:id',deletePost);


//export PORT=5000
const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`listening on port ${port}`));