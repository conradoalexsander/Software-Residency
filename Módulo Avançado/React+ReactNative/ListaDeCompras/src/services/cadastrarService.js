import itensApi from "../api/itensApi";

const cadastrarItem = item => {
    return itensApi.post("api/Produtos", item);
};

export default cadastrarItem;
