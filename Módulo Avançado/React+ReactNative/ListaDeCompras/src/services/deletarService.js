import itensApi from "../api/itensApi";

const deletarItem = itemIndex => {
    return itensApi.delete("api/Produtos/" + itemIndex);
};

export default deletarItem;
