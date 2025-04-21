import { v4 as uuidv4 } from 'uuid';

class Diary {
    constructor() {
        this.diaries = [];
    }

    create(data) {
        const newDiary = {
            id: uuidv4.v4(),
            success: data.success || '',
            failure: data.failure || '',
            plan: data.plan || '',
            createdDate: new Date(),
            modifiedDate: new Date(),
        };
        this.diaries.push(newDiary);
        return newDiary;
    }


    findOne(id) {
        return this.diaries.find(diary => diary.id === id);
    }

    findAll(){
        return this.diaries;
    }

    update(id, data) {
        const diary = this.findOne(id);
        const index = this.diaries.indexOf(diary);
        this.diaries[index].success = data['success'] || diary.success;
        this.diaries[index].failure = data['failure'] || diary.failure;
        this.diaries[index].plan = data['plan'] || diary.plan;
        this.diaries[index].modifiedDate = new Date();

        return this.diaries[index];
    }


    delete(id) {
        const diary = this.findOne(id);
        const index = this.diaries.indexOf(diary);
        this.diaries.splice(index, 1);
        return {};
    }
};

export default new Diary();
