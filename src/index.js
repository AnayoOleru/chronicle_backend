import express from 'express';
import { createDiary, getDiaries, getDiary, updateDiary, deleteDiary } from './controllers/diaries';

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
app.get('/api/v1/diaries', getDiaries);
app.get('/api/v1/diary/:id', getDiary);
app.patch('/api/v1/diary/:id', updateDiary);
app.delete('/api/v1/diary/:id', deleteDiary)

app.listen(3000, () => {
    console.log("Project is running at http://localhost:3000");
});

export default app;
