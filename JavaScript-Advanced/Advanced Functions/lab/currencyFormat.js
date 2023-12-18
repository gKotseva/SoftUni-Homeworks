function createFormatter(separator, symbol, isSymbolFirst, currencyFormatter){
    return function(price){
        return currencyFormatter(separator, symbol, isSymbolFirst, price);
    }

}