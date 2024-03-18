const { Router } = require('express')
const Imovel = require('../../models/imovel')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = Router()

router.get('/', async (req, res) => {
    try {
        const catalog = await Imovel.find()
        if (!catalog) throw new Error('No List found')
        res.status(200).json(catalog)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', upload.single('imagem'), async (req, res) => {
    const imovel = new Imovel(req.body)
    try {
        const saveImovel = await imovel.save()
        if (!imovel) throw new Error('Something went wrong saving the imovel')
        res.status(200).json(imovel)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await Imovel.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router