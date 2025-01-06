

const HttpError = require('../models/http-error');


let ARTICLES = [
    {
        id: 'n1',
        name: 'Жанцан',
        image: '/image/bigGate.jpg',
        url: "http://www.mongoltoli.mn/search.php?ug_id=41523&opt=1&word=%D0%96%D0%90%D0%9D%D0%A6%D0%90%D0%9D",
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
    },
    {
        id: 'n2',
        name: 'Гандан Хийд',
        image: '/image/gandan.jpg',
        url: 'https://www.mongolianguideschool.com/info7/detail/183',
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
    },
    {
        id: 'n3',
        name: 'Бурхан багшийн их дүйчэн өдөр',
        image: '/image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
    },
    {
        id: 'n4',
        name: 'Буддын сургаал',
        image: '/image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
    },
    {
        id: 'n5',
        name: 'Гандан Хийд',
        image: '/image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
    },
    {
        id: 'n6',
        name: 'Буддын сургаал',
        image: '/image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
    },
    {
        id: 'n7',
        name: 'Буддын сургаал',
        image: '/image/gandan.jpg',
        url: 'https://www.facebook.com/photo.php?fbid=3165073873506921&id=354619971219006&set=a.354627067884963',
        content: "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
    }
  ];
   


// All news 
const getNews = (req, res, next) => {
    console.log('Get request in news');
    res.json({ARTICLES})
}

// Fetch a news by id
const getNewsById = (req, res, next) => {
    const newsId = req.params.nid;
    
    const news = ARTICLES.find(n => {
        return n.id === newsId;
    });
    console.log(news)

    if(!news){
        return next(
            new HttpError('Could not find a news for the provided id.', 404)
        ) 
    }
    res.json({ news });
};

// Create a news
const createNews = (req, res, next) => {
    const { name, image, url, content } = req.body;

    const createdNews = {
        name,
        image,
        url,
        content
    };

    ARTICLES.push(createdNews);
    res.status(201).json({news: createdNews})
};

// Update a news
const updateNews = (req, res, next) => {
    const { name, image, url, content } = req.body;

    const newsId = req.params.nid;

    const updatedNews = { ...ARTICLES.find(n => n.id === newsId)};

    const newsIndex = ARTICLES.findIndex(n => n.id === newsId);

    updatedNews.name = name;
    updatedNews.image = image;
    updatedNews.url = url;
    updatedNews.content = content;

    ARTICLES[newsIndex] = updatedNews;

    res.status(200).json({message: updatedNews});
};

// Delete News
const deleteNews = (req, res, next) => {
    const newsId = req.params.nid;

    ARTICLES = ARTICLES.filter(n => n.id !== newsId);
    res.status(200).json({ message: 'Deleted news'})
};

exports.getNews = getNews;
exports.getNewsById = getNewsById;
exports.createNews = createNews;
exports.updateNews = updateNews;
exports.deleteNews = deleteNews;