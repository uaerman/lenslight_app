const getIndexPage = (req, res) => {
    res.render("index", {
        link: 'home'
    })
}

const getAboutPage = (req, res) => {
    res.render("about", {
        link: 'about'
    })
}

const getBlogPage = (req, res) => {
    res.render("blog", {
        link: 'blog'
    })
}

const getRegisterPage = (req, res) => {
    res.render("register", {
        link: 'register'
    })
}

const getLoginPage = (req, res) => {
    res.render("login", {
        link: 'login'
    })
}

export {getAboutPage, getIndexPage, getBlogPage, getRegisterPage, getLoginPage}