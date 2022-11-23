var abbigliamento = /** @class */ (function () {
    function abbigliamento(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    abbigliamento.prototype.funsaldo = function () {
        var sconto = Number(((this.quantita * (this.prezzoivainclusa * this.saldo)) / 100).toFixed(2));
        return sconto;
    };
    abbigliamento.prototype.funprezzo = function () {
        var prezzo = Number((this.quantita * this.prezzoivainclusa - this.funsaldo()).toFixed(2));
        return prezzo;
    };
    return abbigliamento;
}());
var array = [];
fetch("http://localhost:3000/capi")
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
    array = data;
    array.map(function (item) {
        var dati = new abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        console.log(dati);
        console.log("Numero capi: ".concat(dati.quantita, " \nSconto Tot: ").concat(dati.funsaldo(), " euro \nPrezzo Tot: ").concat(dati.funprezzo(), " euro"));
    });
});
