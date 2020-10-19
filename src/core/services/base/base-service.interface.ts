export interface IBaseService<Data, Args, Model> {
    getById(id: number): Promise<Model>
    get(args: Args): Promise<Model[]>
    post(data: Data): Promise<Model>
    put(id: number, data: Data): Promise<Model>
    delete(id: number): Promise<Model>
}
