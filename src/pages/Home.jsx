import React from 'react'
import { allChampions } from '../actions';
import { getAllChampions } from '../services/API';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      champions: '',
      loading: true,
    }
    this.fetchAllChampions = this.fetchAllChampions.bind(this);
    this.attState = this.attState.bind(this);
  }

  componentDidMount() {
    this.fetchAllChampions();
  }

  attState(champions) {
    const { getChampions } = this.props
    this.setState({
      champions,
      loading: false,
    });
    getChampions(champions);
  }

  async fetchAllChampions() {
    const arrayChampions = await getAllChampions();
    const arrayChampionsNames = Object.keys(arrayChampions.data)
    this.attState(arrayChampionsNames);
  }

  render() {
    const { champions, loading } = this.state;
    if (loading) {
      return (<span>loading...</span>)
    }
    return ( 
      <div>
        {champions.map((champion) => {
          return (
          <a href={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`}>{champion} <br /></a>
          )
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getChampions: (champions) => dispatch(allChampions(champions)),
});

export default connect(null, mapDispatchToProps)(Home)
