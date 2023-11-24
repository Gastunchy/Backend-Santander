const verifications = {

    verifyId: (req, res, next) => {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({ error: 'Id is required' })
        }
        console.log(id);
        next()
    },
    verifyData: (req, res, next) => {
        const { name, category, date, description, image, place, price, capacity, assistance, estimate } = req.body

        if (!name) {
            return res.status(400).json({ error: 'Name is required' })
        }
        if (!category) {
            return res.status(400).json({ error: 'Category is required' })
        }
        if (!date) {
            return res.status(400).json({ error: 'Date is required' })
        }
        if (!description) {
            return res.status(400).json({ error: 'Description is required' })
        }
        if (!image) {
            return res.status(400).json({ error: 'Image is required' })
        }
        if (!place) {
            return res.status(400).json({ error: 'Place is required' })
        }
        if (!price) {
            return res.status(400).json({ error: 'Price is required' })
        }
        if (!capacity) {
            return res.status(400).json({ error: 'Capacity is required' })
        }
        if(!assistance && !estimate){
            return res.status(400).json({ error: 'Assistance and Estimate is required' })
        }
        next()
    }
}
module.exports = verifications