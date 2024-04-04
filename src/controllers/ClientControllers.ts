import { AppDataSource } from "../data-source"
import { Client } from "../entities/Client";

const clientRepository = AppDataSource.getRepository(Client);

export const createClient = async (req: any, res: any) => {
    const { name, email, birthdate, single, telephone, password } = req.body;

    const client = Client.create({
        name: name,
        email: email,
        birthdate: birthdate,
        single: single,
        telephone: telephone,
        password: password
    });

    await client.save();

    return res.status(201).json(JSON.stringify(client, null, 2));
}

export const updateClient = async (req: any, res: any) => {
    const { id } = req.params;

    try {
        const client = await clientRepository.findOneBy({ id: parseInt(id) });

        if (!client) {
            return res.status(400).json("L'utilisateur n'existe pas...");
        }

        const { name, email, birthdate, single, telephone, password } = req.body;

        if (name) client.name = name;
        if (email) client.email = email;
        if (password) client.password = password;
        if (birthdate) client.birthdate = birthdate;
        if (single) client.single = single;
        if (telephone) client.telephone = telephone;

        await client.save();

        return res.status(200).json(client);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erreur interne du serveur" });
    }
}

export const getClient = async (req: any, res: any) => {
    const { id } = req.params;

    try {

        const client = await clientRepository.findOneBy({ id: parseInt(id) });

        if (!client) {
            return res.status(400).json("L'utilisateur n'existe pas...")
        }

        return res.status(200).json(client);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erreur interne du serveur" });
    }
}

export const getAllClient = async (req: any, res: any) => {

    try {

        const allClient = await clientRepository.find();

        if (allClient.length === 0) {
            return res.status(400).json("La liste des clients est vide...");
        }

        return res.status(200).json(allClient);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erreur interne du serveur" });
    }
}

export const deleteClient = async (req: any, res: any) => {
    const { id } = req.params;

    try {
        const client = await clientRepository.findOneBy({ id: parseInt(id) });

        if (!client) {
            return res.status(400).json("L'utilisateur n'existe pas...");
        }

        await client.remove();

        return res.json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erreur interne du serveur" });
    }
}
