require('dotenv').load();

const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const passport = require('passport');

require('./server/models').connect(process.env.MONGO_URL);

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
});
const handle = app.getRequestHandler();

const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

app.prepare()
  .then(() => {
    const server = express();

    const authCheckMiddleware = require('./server/middleware/auth-check');
    server.use('/api', authCheckMiddleware);

    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    server.use(passport.initialize());

    const authRoutes = require('./server/routes/auth');
    const apiRoutes = require('./server/routes/api');
    server.use('/auth', authRoutes);
    server.use('/api', apiRoutes);

    // server.get('/join', (req, res) => app.render(req, res, '/b', req.query));

    // server.get('/b', (req, res) => {
    //   return app.render(req, res, '/a', req.query);
    // })

    // server.get('/posts/:id', (req, res) => {
    //   return app.render(req, res, '/posts', {
    //     id: req.params.id,
    //   })
    // })

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post';
      const queryParams = {
        id: req.params.id,
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
