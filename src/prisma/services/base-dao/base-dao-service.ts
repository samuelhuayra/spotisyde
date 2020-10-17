/**
 * @author Samuel Huayra
 * @email samuelhuayra@icloud.com
 * @create date 2020-10-17 18:05:44
 * @modify date 2020-10-17 18:05:44
 * @desc Base Prisma Actions
 */
import { IBaseDaoService } from "./base-dao-service.interface";

export class BaseDaoService<Model, WhereUniqueInput, WhereInput, CreateInput, UpdateInput, OrderByInput>
    implements IBaseDaoService<Model, WhereUniqueInput, WhereInput, CreateInput, UpdateInput, OrderByInput> {
    constructor(private prismaDelegate: any) { }

    async findOne(whereUniqueInput: WhereUniqueInput): Promise<Model | null> {
        return this.prismaDelegate.findOne({
            where: whereUniqueInput
        });
    }

    async findMany(params: {
        skip?: number;
        take?: number;
        cursor?: WhereUniqueInput;
        where?: WhereInput;
        orderBy?: OrderByInput;
    }): Promise<Model[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prismaDelegate.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async create(data: CreateInput): Promise<Model> {
        return this.prismaDelegate.create({
            data
        })
    }

    async update(params: {
        where: WhereUniqueInput;
        data: UpdateInput;
    }): Promise<Model> {
        const { data, where } = params;
        return this.prismaDelegate.update({
            data,
            where,
        });
    }

    async delete(where: WhereUniqueInput): Promise<Model> {
        return this.prismaDelegate.delete({
            where
        });
    }
}
