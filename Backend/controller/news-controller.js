const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const News = require('../models/news');

// let ARTICLES = [
//     {
//         id: 'n1',
//         title: 'Жанцан',
//         image: '/image/bigGate.jpg',
//         url: "http://www.mongoltoli.mn/search.php?ug_id=41523&opt=1&word=%D0%96%D0%90%D0%9D%D0%A6%D0%90%D0%9D",
//         content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
//     },
//     {
//         id: 'n2',
//         title: 'Гандан Хийд',
//         image: '/image/gandan.jpg',
//         url: 'https://www.mongolianguideschool.com/info7/detail/183',
//         content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
//     },
//     {
//         id: 'n3',
//         title: 'Бурхан багшийн их дүйчэн өдөр',
//         image: '/image/gandan.jpg',
//         url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
//         content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
//     },
//     {
//         id: 'n4',
//         title: 'Буддын сургаал',
//         image: '/image/gandan.jpg',
//         url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
//         content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
//     },
//     {
//         id: 'n5',
//         title: 'Гандан Хийд',
//         image: '/image/gandan.jpg',
//         url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
//         content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
//     },
//     {
//         id: 'n6',
//         title: 'Буддын сургаал',
//         image: '/image/gandan.jpg',
//         url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
//         content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
//     },
//     {
//         id: 'n7',
//         title: 'Буддын сургаал',
//         image: '/image/gandan.jpg',
//         url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
//         content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
//     }
//   ];
   


// All news 
const getNews = async (req, res, next) => {
    console.log('Get request in news');
    let news;
    try {
        news = await News.find();
    } catch(err) {
        const error = new HttpError('Something went wrong. Could not find a news for the provided id.', 500)
        return next(error);
    }
    res.json({ news: news.map((n) => n.toObject({ getters: true })) })
}

// Fetch a news by id
const getNewsById = async (req, res, next) => {
    const newsId = req.params.nid;
    let news;
    try {
        news = await News.findById(newsId)
    } catch (err) {
        const error = new HttpError('Something went wrong. Could not find a news for the provided id.', 500)
        return next(error);
    };
    

    if(!news){
        const error = new HttpError('Could not find a news for the provided id.', 404)
        return next(error) 
    }
    res.json({ news: news.toObject( {getters: true }) });
};

// Create a news
const createNews = async (req, res, next) => {
    const { title, image, url, content } = req.body;

    const errors = validationResult(req);
 
    if(!errors.isEmpty()) {
        return next(
            new HttpError('Invalid inputs passed. please check your data. ', 422)
        )
    }
   
    const createdNews = new News({
        title,
        image: 'https://img1.advisor.travel/555x465px-3187284084e18378e80138275875020.jpg',
        url,
        content
    })

    try {
        await createdNews.save();
    } catch (err) {
        const error = new HttpError('Creating place failed, please try again.', 500);
        return next(error);
    }
    
    res.status(201).json({news: createdNews})
};

// Update a news
const updateNews = async (req, res, next) => {
    const { title, image, url, content } = req.body;

    const newsId = req.params.nid;

    // const updatedNews = { ...ARTICLES.find(n => n.id === newsId)};
    // const newsIndex = ARTICLES.findIndex(n => n.id === newsId);


    let news;
    try {
        news = await News.findById(newsId);
    } catch (err) {
        const error = new HttpError('Something wend wrong. could not update news.', 500);
        return next(error);
    }

    news.title = title;
    news.image = image;
    news.url = url;
    news.content = content;


    try{
        await news.save();
    } catch(err){
        const error = new HttpError('Something wend wrong. could not update news.', 500);
        return next(error);
    }
    
    // ARTICLES[newsIndex] = updatedNews;

    res.status(200).json({news: news.toObject( { getters: true })});
};

// Delete News
const deleteNews = async (req, res, next) => {
    const newsId = req.params.nid;
    let news;
    // ARTICLES = ARTICLES.filter(n => n.id !== newsId);

    try {
        news = await News.findById(newsId);
    } catch (err) {
        const error = new HttpError("Something went wrong. try again!", 500);
        return next(error);
    }

    try{
        await news.deleteOne();
       
    } catch (err) {
        const error = new HttpError("Something went wrong. try again!", 500);
        return next(error);
    }

    res.status(200).json({ message: 'Deleted news'})
};

exports.getNews = getNews;
exports.getNewsById = getNewsById;
exports.createNews = createNews;
exports.updateNews = updateNews;
exports.deleteNews = deleteNews;