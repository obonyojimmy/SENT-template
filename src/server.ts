import LoggerTool from 'node-crud-kit/lib/tools/logger.tool'
import ServerTool from 'node-crud-kit/lib/tools/server.tool'

import * as sapper from '@sapper/server'
import { PORT } from './helpers/environment.helper'

const express = ServerTool.initExpress({
  bodyParser: true,
  routeView: true,
  dotenv: { enabled: true, path: '.env' },
  handleErrors: true,
  listen: true,
  static: {
    enabled: true,
    path: 'public',
  },
  compression: {
    enabled: true,
    threshold: 0,
  },
})

express.app.use(sapper.middleware())

express.app.get('/status', (req, res) => {
  res.send({
    status: 200,
    message: 'OK',
  })
})

express.installAfterRoutes(PORT, () => {
  LoggerTool.log(`Service started on port ${PORT}.`)
})
