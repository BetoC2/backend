import express from 'express';
import routes from './routes';
import path from 'node:path'

const app = express();
const port = process.env.PORT ?? 3000;

app.use(routes)
app.use(express.json())
app.use('/documents', express.static(path.join(__dirname, '..', 'public')))

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});