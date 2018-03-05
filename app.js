const Koa = require('koa');
const scrumData = require('./scrumPoker');
const route = require('koa-route');

const app = new Koa();
const PORT = 3000;

app.use(route.get('/story:id', scrumData.name));
app.use(route.get('/users', scrumData.users));

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});