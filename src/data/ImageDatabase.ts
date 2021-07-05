import { Image } from "../model/Image";
import { BaseDatabase } from "./BaseDatabase";


export class ImageDatabase extends BaseDatabase {

    private toModel(dbModel?: any): Image | undefined {
        return (
            dbModel && 
            new Image (
                dbModel.id,
                dbModel.subtitle,
                dbModel.author,
                dbModel.date,
                dbModel.file,
                dbModel.tags,
                dbModel.collection
            )
        );
    }

    private static TABLE_NAME = "LABEIMAGE_IMAGES";

    public async createImage(image: Image): Promise<void> {
        try {
            await this.getConnection()
                .insert({
                    id: image.getId(),
                    subtitle: image.getSubtitle(),
                    author: image.getAuthor(),
                    date: image.getDate(),
                    file: image.getFile(),
                    collection: image.getCollection(),
                })
                .into(ImageDatabase.TABLE_NAME);
        } catch (error) {
            throw new Error (error.sqlMessage || error.message);
        }
    }




}