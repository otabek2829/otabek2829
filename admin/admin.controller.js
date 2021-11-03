
async function addAdmin(req,res) {
    try {
        if(req.body.login === "adminuzb" && req.body.password === "adminuzb"){
            return res.status(200).send(true)
        } else {
            return res.status(401).send(false)
        }
    }
    catch(err){
        return res.status(400).send('malumot notogri')
    }
}


module.exports = {
    addAdmin, 
}

