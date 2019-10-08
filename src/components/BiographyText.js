import React, { Component } from "react";

class BiographyText extends Component {
  state = {
    title: "¡Conoceme!",
    text:
      "Para mi, la musica es una de mis mayores aliados para lograr mi vision y mis gustos, es algo que dia a dia me inspira para lograr cosas nuevas" +
      "en los siguientes apartados te invito a leerme para que entiendas mas quien soy yo y mi conexion unica con la musica.",
    url:
      "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/69601832_667120330434673_5474156266538401792_n.jpg?_nc_cat=106&_nc_oc=AQm31lbAGYvfw0venOg9d9-z1T3nw_3jIT_WRXJXIey1kt_Thy4q9-HW6VXP3bteYLs1V9cJ3hk1CsrAr1HYB3Ew&_nc_ht=scontent-dfw5-1.xx&oh=c46045a942e5c783798bead9a4613f56&oe=5E2F51A5",
    alt: "Foto 1"
  };

  onClickButton1 = () => {
    this.setState({
      title: "Conociendo la música",
      text:
        "Desde que tengo memoria la música siempre me ha llamado la atención quizás será por que mis papas escuchan todo el tiempo música y desde chico siempre escuchaba lo que ellos," +
        "así que mis primeros grupos que yo escuchaba era Ricky Martin, Sin bandera , Chayanne por parte de mi mamá y música clásica por parte de mi papá, sin embargo la primera influencia musical que tuve fue Mägo de Oz," +
        "grupo de folk metal de España, fue quizá la combinación de guitarras eléctricas con violines lo que más me llamaba la atención ni hablar de la voz de Jose Andrea.",
      url:
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/66322952_636722716807768_4801724624624680960_n.jpg?_nc_cat=102&_nc_oc=AQl9ehYa_faXBenQAUsAPwOcjCTU8kheE067y6nWTvitbaMaxpp_7UyEkLHZb6wo9rThz9xw78m5_I3X6LXYeA4U&_nc_ht=scontent-dfw5-1.xx&oh=588f162461f3a1e440d1bcf99c349c9f&oe=5E1C5C0E",
      alt: "Foto 2"
    });
  };

  onClickButton2 = () => {
    this.setState({
      title: "Interés en la música",
      text:
        "Hoy en dia escucho de todo un poco me gusta escuchar música que a mis amigos les gusta ya que cada quien tiene diferentes gustos y siempre me gusta saber por que les gusta escuchar esa canción o tal," +
        "todo esto con la finalidad de entender más el género y creo que hasta empiezas apreciarlo no obstante me fascina el rock alternativo y el rock indie.",
      url:
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/71532818_691337478012958_4073140584578023424_n.jpg?_nc_cat=100&_nc_oc=AQm-AEy1qVLtJJeMzUsAPNTB6BSo2YN31W-__1Oxi2UmAtmjWFgQzHm1TBJPsIuohsJQl8DSMlkIJBAbrBpFzmCr&_nc_ht=scontent-dfw5-1.xx&oh=8c4d971ea7a035e9c382b33cef3829a0&oe=5E31967B",
      alt: "Foto 3"
    });
  };

  onClickButton3 = () => {
    this.setState({
      title: "Primer contacto con la música",
      text:
        "Era 2006 cuando me entró el deseo de aprender a tocar un instrumento musical, escogí la guitarra, por que claro como todo chico quería ser Rockstar y tocar como uno." +
        "Estudié guitarra por alrededor de 3 años sin parar, sin embargo, lo fui dejando al punto de que hubo un tiempo en que deje de tocar supongo que se había acabado la magia o eso pensaba, " +
        "yo ya que fue en 2016 que empecé a ser constante con mis estudios musicales al punto de que también aprendí a tocar piano y a conocer la música a través de la teoría musical, lo que me da la confianza para poder realizar mi trabajo como productor.",
      url:
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/68803684_662752894204750_3660763276792299520_n.jpg?_nc_cat=109&_nc_oc=AQmJ4ZCeYCRD2Pcw0wgQ5__nDFdkSfjPrPUR3shVvooee28UCz-K1yYFMKFpxKTNPc8lSUmbNnlcN3yKe4jUrsHO&_nc_ht=scontent-dfw5-1.xx&oh=c89a6729db6d3ae5acd9c685d3100db2&oe=5E3CC9FE",
      alt: "Foto 4"
    });
  };

  onClickButton4 = () => {
    this.setState({
      title: "La música siendo mi aliada",
      text:
        "Soy una persona que siente que la música ha estado para mi cuando más la necesito, me ayuda a concentrarme a la hora de estar estudiando un tema o me ayuda a relajarme cuando estoy pasando un mal momento pero sobre todo me ayuda a expresarme." +
        "Es por eso que amo a la música, estoy interesado en aportar algo a la industria y ayudar a que artistas cumplan sus sueños, simplemente quiero trabajar con la música.",
      url:
        "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/70713976_683622365451136_4311196534302572544_n.jpg?_nc_cat=111&_nc_oc=AQksK1HIVQ0eGx83GbI2F1kMRX9MEWgdIBqozMxzzCNmgBFSzVr2ssLtRGVVm8k6DjPhDr9SGXGgAfAet6GoqdkO&_nc_ht=scontent-dfw5-1.xx&oh=6b7a1edc0570a3f7ddad27d891b2cf2e&oe=5E34311E",
      alt: "Foto 5"
    });
  };

  render() {
    return (
      <div className="container marginBot ">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <button
              type="button"
              className="btnbig btn-dark boxshadow"
              onClick={this.onClickButton1}
            >
              Conociendo la música
            </button>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <button
              type="button"
              className="btnbig btn-dark boxshadow"
              onClick={this.onClickButton2}
            >
              Interés en la música
            </button>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <button
              type="button"
              className="btnbig btn-dark boxshadow"
              onClick={this.onClickButton3}
            >
              Primer contacto con la música
            </button>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <button
              type="button"
              className="btnbig btn-dark boxshadow"
              onClick={this.onClickButton4}
            >
              La música siendo mi aliada
            </button>
          </div>
        </div>
        <div className="container">
          <h1 className="text-center marginTop">{this.state.title}</h1>
          <hr />
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6">
              <img
                src={this.state.url}
                alt={this.state.alt}
                className="rounded imgfull"
              />
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6">
              <p>{this.state.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BiographyText;
