import React, { Component } from "react";
import photo from "./../img/vick.jpg";

class BiographyText extends Component {
  state = {
    title: "¡Conoceme!",
    text:
      "Para mi, la musica es una de mis mayores aliados para lograr mi vision y mis gustos, es algo que dia a dia me inspira para lograr cosas nuevas" +
      "en los siguientes apartados te invito a leerme para que entiendas mas quien soy yo y mi conexion unica con la musica.",
    alt: "Foto 1"
  };

  onClickButton1 = () => {
    this.setState({
      title: "Conociendo la música",
      text:
        "Desde que tengo memoria la música siempre me ha llamado la atención quizás será por que mis papas escuchan todo el tiempo música y desde chico siempre escuchaba lo que ellos," +
        "así que mis primeros grupos que yo escuchaba era Ricky Martin, Sin bandera , Chayanne por parte de mi mamá y música clásica por parte de mi papá, sin embargo la primera influencia musical que tuve fue Mägo de Oz," +
        "grupo de folk metal de España, fue quizá la combinación de guitarras eléctricas con violines lo que más me llamaba la atención ni hablar de la voz de Jose Andrea.",
      alt: "Foto 2"
    });
  };

  onClickButton2 = () => {
    this.setState({
      title: "Interés en la música",
      text:
        "Hoy en dia escucho de todo un poco me gusta escuchar música que a mis amigos les gusta ya que cada quien tiene diferentes gustos y siempre me gusta saber por que les gusta escuchar esa canción o tal," +
        "todo esto con la finalidad de entender más el género y creo que hasta empiezas apreciarlo no obstante me fascina el rock alternativo y el rock indie.",
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
      alt: "Foto 4"
    });
  };

  onClickButton4 = () => {
    this.setState({
      title: "La música siendo mi aliada",
      text:
        "Soy una persona que siente que la música ha estado para mi cuando más la necesito, me ayuda a concentrarme a la hora de estar estudiando un tema o me ayuda a relajarme cuando estoy pasando un mal momento pero sobre todo me ayuda a expresarme." +
        "Es por eso que amo a la música, estoy interesado en aportar algo a la industria y ayudar a que artistas cumplan sus sueños, simplemente quiero trabajar con la música.",
      alt: "Foto 5"
    });
  };

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg justify-content-center">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <button
                type="button"
                className="btnbig btn-dark boxshadow"
                onClick={this.onClickButton1}
              >
                Conociendo la música
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btnbig btn-dark boxshadow"
                onClick={this.onClickButton2}
              >
                Interés en la música
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btnbig btn-dark boxshadow"
                onClick={this.onClickButton3}
              >
                Primer contacto con la música
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btnbig btn-dark boxshadow"
                onClick={this.onClickButton4}
              >
                La música siendo mi aliada
              </button>
            </li>
          </ul>
        </nav>
        <div className="container">
          <h1 className="text-center">{this.state.title}</h1>
          <hr />
          <div class="row">
            <div class="col-sm-6">
              <img
                src={photo}
                alt={this.state.alt}
                className="rounded imgfull"
              />
            </div>
            <div class="col-sm-6">
              <p>{this.state.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BiographyText;
