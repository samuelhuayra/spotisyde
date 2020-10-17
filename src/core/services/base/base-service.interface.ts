/**
 * @author Samuel Huayra
 * @email samuelhuayra@icloud.com
 * @create date 2020-10-17 18:33:50
 * @modify date 2020-10-17 18:33:50
 * @desc Common Actions
 */
export interface IBaseService<Data, Query, Model> {

    getById(id: number): Promise<Model>;

    get(queryParams: Query): Promise<Model[]>;

    post(data: Data): Promise<Model>;

    put(id: number, data: Data): Promise<Model>;

    delete(id: number): Promise<Model>;
};
