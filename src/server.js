import fs from 'fs';
import Koa from 'koa';
import Router from '@koa/router';
import render from 'preact-render-to-string';
import Fox from './components/Fox.jsx';

const app = new Koa();
const router = new Router();

const js = fs.readFileSync('dist/client.js', 'utf8');
const data = { name: 'fox' };
const html = (content, data) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>preact ssr demo</title>
</head>
<body>
  <div id="container">
  ${content}
  </div>
  <script>window.bizData = ${JSON.stringify(data)}</script>
  <script src="https://cdn.jsdelivr.net/npm/preact@10.6.6/dist/preact.min.js"></script>
  <script>${js}</script>
</body>
</html>`;

router.get('/', async (ctx) => {
  const content = render(Fox(data));
  ctx.body = html(content, data);
});

app.use(router.routes()).use(router.allowedMethods()).listen(3000);
