import server from './app'

const PORT = process.env.PORT || 3002
const listener = server.listen(PORT, () => {
     console.log()
     console.log('-------------------------------------')
     console.log(`App is running on port ${PORT}`)
     console.log('-------------------------------------')
})

process.on('uncaughtException', (error) => {
     console.error('UNCAUGHT EXCEPTION! Shutting down...')
     console.error(error.name, error.message)
     console.error(error)
})

process.on('unhandledRejection', (error) => {
     console.error('UNHANDLED REJECTION! Shutting down...')
     console.error(error)

     listener.close((_) => {
          process.exit(1)
     })
})
