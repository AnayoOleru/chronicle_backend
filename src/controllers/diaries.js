import diary from "../models/diary";
import DiaryModel from "../models/diary";

export const createDiary = (req, res) => {
    try {
    const { success, failure, plan }= req.body;
    
    if(!success && !failure && !plan) {
        return res.status(400).send({ 'message': 'All fields are required' });
    }

    const dairy = DiaryModel.create(req.body);
    return res.status(201).send(diary);
    } catch (error) {
        return res.status(500).send('Error: server error' + error)
    }
};