const { Router } = require ("express")
const pruebasRouter = Router ()


//Endpoint para prueba de errores
pruebasRouter.get('/loggerTest', (req, res) => {
    req.logger.fatal('Fatal ejecutandose')
    req.logger.error('Error ejecutandose')
    req.logger.warning('Warning ejecutandose')
    req.logger.info('Info ejecutandose')
    req.logger.http('Http ejecutandose')
    req.logger.debug('Debug ejecutandose')

    res.send('Logger ejecutado')
})

module.exports = pruebasRouter
