export interface IBaseDaoService<Model, WhereUniqueInput, WhereInput, CreateInput, UpdateInput, OrderByInput> {
    findOne(whereUniqueInput: WhereUniqueInput): Promise<Model | null>;

    findMany(params: {
        skip?: number;
        take?: number;
        cursor?: WhereUniqueInput;
        where?: WhereInput;
        orderBy?: OrderByInput;
    }): Promise<Model[]>;

    create(data: CreateInput): Promise<Model>;

    update(params: {
        where: WhereUniqueInput;
        data: UpdateInput;
    }): Promise<Model>;

    delete(where: WhereUniqueInput): Promise<Model>;
}
