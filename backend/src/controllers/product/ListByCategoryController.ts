import { Request, Response } from "express";
import { ListByCategotyService } from '../../services/product/ListByCategotyService';

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;
        const listByCategory = new ListByCategotyService();
        const products = await listByCategory.execute({ category_id });
        return res.json(products);
    }
}

export { ListByCategoryController }