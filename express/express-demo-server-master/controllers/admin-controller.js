const Car = require('mongoose').model('Car');

module.exports = {
    addCar: (req, res) => {
        res.render('admin/addCar');
    },
    addCarPost:async (req,res) =>{
        let reqCar = req.body;
        try {
            const car = await Car.create({
                brand: reqCar.brand,
                model: reqCar.model,
                year: reqCar.year,
                image: reqCar.image
            });
            console.log("Car added!");
        } catch (e) {
            console.log(e);
            res.locals.globalError = e;
            res.render('users/register');
        }
    }
};