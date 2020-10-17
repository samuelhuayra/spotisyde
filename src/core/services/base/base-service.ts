/**
 * @author Samuel Huayra
 * @email samuelhuayra@icloud.com
 * @create date 2020-10-17 18:33:33
 * @modify date 2020-10-17 18:33:33
 * @desc Common Actions
 */
import { IBaseService } from "./base-service.interface"

export class BaseService<Data, Query, Model> implements IBaseService<Data, Query, Model> {
    constructor(private daoService: any) { }

    async getById(id: number): Promise<Model> {
        return this.daoService.findOne({ id })
    }

    async get(queryParams: Query): Promise<Model[]> {
        return this.daoService.findMany({
            where: {
                AND: Object.keys(JSON.parse(JSON.stringify(queryParams))).map((key) => {
                    return { [key]: { equals: queryParams[key] }, }
                })
            },
            orderBy: {
                id: 'desc',
            }
        })
    }

    async post(data: Data): Promise<Model> {
        return this.daoService.create(data)
    }

    async put(id: number, data: Data): Promise<Model> {
        return this.daoService.update({
            where: { id },
            data
        })
    }

    async delete(id: number): Promise<Model> {
        return this.daoService.delete({ id })
    }
}
