import express from 'express';
import { createDiary } from './controllers/diaries';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send({ 'message': 'Congratulations on your first working endpoint, you are doing well'});
});

// app.all("*", (req, res) => {
//     return res.status(404).send({
//         'message': "This route does not exist!"
//     });
// });

app.post('/api/v1/diaries', createDiary);

app.listen(3000, () => {
    console.log("Project is running at http://localhost:3000");
});

export default app;
