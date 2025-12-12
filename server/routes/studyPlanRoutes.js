import express from 'express';
import { createStudyPlan, getStudyPlans ,editStudyPlan,deleteStudyPlan} from '../controllers/studyPlanController.js'


const router = express.Router();


router.post('/Studyplan', createStudyPlan);
router.get('/Studyplan', getStudyPlans);
router.put('/Studyplan/:id', editStudyPlan);
router.delete('/Studyplan/:id', deleteStudyPlan);



export default router;
