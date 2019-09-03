const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        const targrDev = await Dev.findById(devId);

        if (!targrDev) {
            return res.status(400).json({ error: 'Dev not exist'});
        }

        if (targrDev.likes.includes(loggedDev._id)){
            console.log( 'Deu Match');
        }

        loggedDev.likes.push(targrDev._id);
        await loggedDev.save();

        return res.json(loggedDev);
    }
};