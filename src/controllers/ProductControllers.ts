import { AppDataSource } from "../data-source"
import { Product } from "../entities/Product";

const productRepository = AppDataSource.getRepository(Product);

export const createProduct = async (req: any, res: any) => {
    const { name, description, price, popular, in_promotion } = req.params;

    const product = Product.create({
        name: name,
        description: description,
        price: price,
        popular: popular,
        in_promotion: in_promotion
    });

    await product.save();

    return res.json(JSON.stringify(product, null, 2));
}

export const updateProduct = async (req: any, res: any) => {
}

export const getProduct = async (req: any, res: any) => {

}

export const getAllProduct = async (req: any, res: any) => {

}

export const deleteProduct = async (req: any, res: any) => {

}