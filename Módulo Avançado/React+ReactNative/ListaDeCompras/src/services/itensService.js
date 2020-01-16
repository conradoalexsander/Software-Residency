import itensApi from "../api/itensApi";

export const listarItens = itensApi.get("api/Produtos").then(res => {
    return res;
});
