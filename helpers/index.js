const errorResponse = (res, error) => {
    
    return(
        res.status(500).json({
            Error: error.message
        })
    )
}

const successResponse = (res, obj, token) => {
    
    if(token) {
        return(
            res.status(200).json({
                result: obj,
                token
            })
        )
    } else {
        return(
            res.status(200).json({
                result: obj
            })
        )
    }

}

const notFoundResponse = (res, msg) => {
    return(
        res.status(404).json({
            message: msg
        })
    )
} 

const today = (req, res, next) => {
    
    const today = new Date();
    req.today = today;
    next();

}

const parseString = (string) => {
    let newString;

    if(string) {
        for(s in string) {
            if(s == 0) {
                newString = string[s].toUpperCase();
            } else {
                if(string[s - 1] === " ") {
                    newString += string[s].toUpperCase();
                } else {
                    newString += string[s].toLowerCase();
                }
            }
        }
    }

    return newString;
}

module.exports = {
    success: successResponse,
    error: errorResponse,
    notFound: notFoundResponse,
    today: today,
    parseString: parseString
}