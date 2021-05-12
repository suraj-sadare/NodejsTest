
const Joi = require("joi");
const articles = [
    { id: 1, name: 'penpenny', author: 'Jivan', desc: 'It is only one solution to World..' },
    { id: 2, name: 'finishline', author: 'Tushar', desc: 'Plans will not fail...' },
    { id: 3, name: 'JNV', author: 'Kishor', desc: 'Amhi jnv o...' },
    { id: 4, name: 'three-ediots', author: 'chetan bhagat', desc: 'It tell about ,How is every one different' }
];
exports.getPost = (req, res) => {
    res.send(articles);
};

exports.getPostPartcular = (req, res) => {
    const art = articles.find(a => a.id === parseInt(req.params.id));
    if (!art) {
        return res.status(404).send('Artcle with given ID was  not found');
    }

    res.send(art);
};
exports.createPost = (req, res) => {
    //------------validation------------
    const schema = {
        name: Joi.string().min(3).required(),
        author: Joi.string().min(3).required(),
        desc: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);

    if (result.error) {
        return res.status(400).send(result.error.details[0].message);

    }
    //-----------------------------------------------
    const article = {
        id: articles.length + 1,
        name: req.body.name,
        author: req.body.author,
        desc: req.body.desc
    };
    articles.push(article);
    res.send(article);
};
exports.updatePost = (req, res) => {
    const art = articles.find(a => a.id === parseInt(req.params.id));
    if (!art) {
        return res.status(404).send('Artcle with given ID was  not found');
    }

    //---------------- validation-----------
    const schema = {
        name: Joi.string().min(3).required(),
        author: Joi.string().min(3).required(),
        desc: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);

    if (result.error) {
        return res.status(400).send(result.error.details[0].message);

    }
    //----------------------------------

    art.name = req.body.name;
    art.author = req.body.author;
    art.desc = req.body.desc;
    res.send(art);
};
exports.deletePost = (req, res) => {
    const art = articles.find(a => a.id === parseInt(req.params.id));
    if (!art) {
        return res.status(404).send('Artcle with given ID was  not found');
    }
    const index = articles.indexOf(art);
    articles.splice(index, 1);
    res.send(art);

};