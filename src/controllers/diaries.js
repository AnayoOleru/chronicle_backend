import diary from "../models/diary";
import DiaryModel from "../models/diary";

export const createDiary = (req, res) => {
    try {
        const { success, failure, plan } = req.body;

        if (!success && !failure && !plan) {
            return res.status(400).send({ 'message': 'All fields are required' });
        }

        const dairy = DiaryModel.create(req.body);
        return res.status(201).send(diary);
    } catch (error) {
        return res.status(500).send('Error: server error' + error)
    }
};

export const getDiaries = (req, res) => {
    try {
        const diaries = DiaryModel.findAll();
        return res.status(200).send(diaries);
    } catch (error) {
        return res.status(500).send('Error: server error' + error)
    }
};

export const getDiary = (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).send({ "message": "Diary not found" });
        };
        const diary = DiaryModel.findOne(id);
        return res.status(200).send(diary);
    } catch (error) {
        return res.status(500).send('Error: server error' + error)
    }
};


