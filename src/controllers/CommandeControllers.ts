import { AppDataSource } from "../data-source"
import { Commande } from "../entities/Commande";

const commandeRepository = AppDataSource.getRepository(Commande);

export const createCommande = async (req: any, res: any) => {
    const { title, description, totalPrice, dateOfCommande, clientId } = req.params;

    const commande = Commande.create({
        title: title,
        description: description,
        totalPrice: totalPrice,
        dateOfCommande: dateOfCommande,
        // client
    });

    await commande.save();

    return res.json(JSON.stringify(commande, null, 2));
}

export const updateCommande = async (req: any, res: any) => {

}

export const getCommande = async (req: any, res: any) => {

}

export const getAllCommande = async (req: any, res: any) => {

}

export const deleteCommande = async (req: any, res: any) => {

}
