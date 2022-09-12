const getIndexPage = (req, res) => {
    res.render("index")
}

const getAboutPage = (req, res) => {
    res.render("about")
}

const getBlogPage = (req, res) => {
    res.render("blog")
}

export {getAboutPage, getIndexPage, getBlogPage}