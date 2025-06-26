interface IServerStorage<T>{
    data: T
    find(findFunc:Function): T;
}

export {IServerStorage}