import { NotFoundException } from "@nestjs/common"
import { IBaseDaoService } from "src/prisma/services/base-dao/base-dao-service.interface"
import { IBaseService } from "./base-service.interface"

export class BaseService<Data, Args, Model> implements IBaseService<Data, Args, Model> {
    constructor(private daoService: IBaseDaoService<any, any, any, any, any, any>) { }

    async getById(id: number): Promise<Model> {
        const response = await this.daoService.findOne({ id })
        if (!response) throw new NotFoundException(id)
        return response
    }

    get(args: Args): Promise<Model[]> {
        return this.daoService.findMany({
            where: {
                AND: Object.keys(JSON.parse(JSON.stringify(args))).map((key) => {
                    return { [key]: { equals: args[key] }, }
                })
            },
            orderBy: {
                id: 'desc',
            }
        })
    }

    post(data: Data): Promise<Model> {
        return this.daoService.create(data)
    }

    put(id: number, data: Data): Promise<Model> {
        return this.daoService.update({
            where: { id },
            data
        })
    }

    delete(id: number): Promise<Model> {
        return this.daoService.delete({ id })
    }
}
