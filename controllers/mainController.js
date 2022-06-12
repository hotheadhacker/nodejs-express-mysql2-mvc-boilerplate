const controllerDataModel = require('../models/controllerDataModel');

//For Get Requests
const getData = async (req, res) => {
    
    // res.json({ b: 1 })
    let data = controllerDataModel.getAll();
    res.json(await data);
}
// For Post Requests
const postData = (req, res) => {
    console.log(req.body);
    controllerDataModel.saveData(req.body.data)
    res.json(req.body)

}
module.exports =  {
    getData,
    postData
};