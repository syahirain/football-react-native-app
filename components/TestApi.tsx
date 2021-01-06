import React, { Component } from 'react';
import { View, Text, Linking, TouchableNativeFeedback } from 'react-native';
import axios from 'axios';

export default class TestApi extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get("http://api.football-data.org/v2/competitions/2021/standings", { headers: { 'X-Auth-Token': 'c8dcef8a63c7487fba4cf1ceb6fa5655' } })
      .then(res => {
        const persons = res.data.standings[0];
        this.setState({ persons });
      })
  }

  render() {
    return (
      <View>
        { this.state.persons.map(person => <Text>{person.stage}</Text>
      </View>
    )
  }
}
