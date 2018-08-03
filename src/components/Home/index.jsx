import React, { Component } from 'react';

/*
                  - Show cartola market closure
                      # Status: 2 = close
                      https://api.cartolafc.globo.com/mercado/status
                  - Most scaled players in the round and the partial score
                      https://api.cartolafc.globo.com/mercado/destaques
                      and
                      https://api.cartolafc.globo.com/atletas/pontuados
                  - Round Games
                    https://api.cartolafc.globo.com/partidas
              */
import './Home.css';

function monthName(number) {
  let name;

  switch(number) {
    case 1:
      name = "January";
      break;
    case 2:
      name = "February";
      break;
    case 3:
      name = "March";
      break;
    case 4:
      name = "April";
      break;
    case 5:
      name = "May";
      break;
    case 6:
      name = "June";
      break;
    case 7:
      name = "July";
      break;
    case 8:
      name = "August";
      break;
    case 9:
      name = "September";
      break;
    case 10:
      name = "October";
      break;
    case 11:
      name = "November";
      break;
    case 12:
      name = "December";
      break;
    default:
      name = "Undefined";
  }

  return name;
}

class Home extends Component {
	constructor(props) {
		super(props);
		
		this.state = { 
			info_market: {
        year: 0,
        day: 0,
        hour: 0,
        month: 0,
        minute: 0,
        status: 0
      },
			players: [],
			games: []
		};

		this.callApiStatus = this.callApiStatus.bind(this);
    this.callApiPlayers = this.callApiPlayers.bind(this);
	}

  componentDidMount() {
    this.callApiStatus();
		this.callApiPlayers();
  }

  callApiStatus = async () => {
		const response = await fetch('/api/status');
		
    const res = await response.json();

		if (response.status !== 200) throw Error(res.message);
    
    let dados = res.data.fechamento;

    this.setState({
      info_market: {
        year: dados.ano,
        day: dados.dia,
        hour: dados.hora,
        month: dados.mes,
        minute: dados.minuto,
        status: res.data.status_mercado
      }
    });
  };

  callApiPlayers = async () => {
    const response = await fetch('/api/destaques');
    
    const res = await response.json();

    if (response.status !== 200) throw Error(res.message);
    
    console.log(res.data);

    this.setState({
      players: res.data
    });
  };

	render() {
    let state  = this.state.info_market;
    let color = this.state.info_market.status === 1 ? "green" : "#990303";
    let t = {
      color: color
    }
    
    return (
      <div>
        <div className="Content">
          <h2>Market Info</h2>
          <p style={t}>{this.state.info_market.status === 1 ? "Open market" : "Closed market"}</p>
          <p>
            Until {monthName(state.month)} {state.day}, {state.year} at {state.hour}:{state.minute < 10 ? "0"+state.minute : state.minute}
          </p>
        </div>

        <div className="Content">
          <h2>Most selected players</h2>

          {this.state.players.map(function (player, i) {
            return (
              <div key={i}>
              <p> {player.Atleta.apelido}, {player.posicao} do {player.clube} - {player.escalacoes.toLocaleString('pt-BR') }</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;