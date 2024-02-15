import express, { Request, Response, NextFunction } from 'express';
import HelloOptions from "../domain/dto/HelloOptions";
const router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('index', { title: 'Express' });
});

router.get('/hello/:name', (req: Request, res: Response) => {
    const helloCommand: HelloOptions = {name: req.params.name}
    res.render('index', { title: `Hello ${helloCommand.name}` });
});

export default router;