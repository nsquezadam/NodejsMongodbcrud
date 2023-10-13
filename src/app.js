import Express from "express";
import {create}from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";
const app = Express();

// configurar handlebars

app.set('views', path.join(__dirname,'views'));// permite que el acceso al directorio se multiplataforma

const exphbs = create({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    layoutsPartials: path.join(app.get('views'), 'partials'),
    defaultLayout: "main",
    extname: ".hbs",
  });
app.engine(".hbs", exphbs.engine);

app.set('view engine', '.hbs');
//middlewares
app.use(morgan('dev'));
app.use(Express.urlencoded({extended:false}))
// routes
app.use(indexRoutes);
app.use(Express.static(path.join(__dirname, "public")))

export default app;
