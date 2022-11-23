class abbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;

  constructor(
    _id: number,
    _codprod: number,
    _collezione: string,
    _capo: string,
    _modello: number,
    _quantita: number,
    _colore: string,
    _prezzoivaesclusa: number,
    _prezzoivainclusa: number,
    _disponibile: string,
    _saldo: number
  ) {
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

  funsaldo(): number {
    let sconto = Number(
      ((this.quantita * (this.prezzoivainclusa * this.saldo)) / 100).toFixed(2)
    );
    return sconto;
  }

  funprezzo(): number {
    let prezzo = Number(
      (this.quantita * this.prezzoivainclusa - this.funsaldo()).toFixed(2)
    );
    return prezzo;
  }
}

let array: any[] = [];

fetch("http://localhost:3000/capi")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    array = data;
    array.map((item) => {
      let dati = new abbigliamento(
        item.id,
        item.codprod,
        item.collezione,
        item.capo,
        item.modello,
        item.quantita,
        item.colore,
        item.prezzoivaesclusa,
        item.prezzoivainclusa,
        item.disponibile,
        item.saldo
      );

      console.log(dati);
      console.log(
        `Numero capi: ${
          dati.quantita
        } \nSconto Tot: ${dati.funsaldo()} euro \nPrezzo Tot: ${dati.funprezzo()} euro`
      );
    });
  });
