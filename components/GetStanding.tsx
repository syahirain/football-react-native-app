import React, { Component } from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Linking } from 'react-native'
import axios from 'axios'
//import styled from 'styled-components/native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

class GetStanding extends Component {
    state = {
        standing: [],
        isLoading: true,
        errors: null
    };

    getStandingAPI(){
        axios
        .get("http://api.football-data.org/v2/competitions/2021/standings", { headers: { 'X-Auth-Token': 'c8dcef8a63c7487fba4cf1ceb6fa5655' } })
        .then(response =>
          response.data.standings.map(premiertable => ({
            name: `${premiertable.table.team.name}`,
            position: `${premiertable.table.position}`,
            logo: `${premiertable.table.team.crestUrl}`,
            playedGames: `${premiertable.table.playedGames}`
          // response.data.results.map(standing => ({
          //   position: `${standing.position}`,
          //   teamName: `${standing.team.name}`,
          //   logo: `${standing.team.crestUrl}`,
          //    playedGames: `${standing.playedGames}`,
          //   //form: `${standing.table.form}`,
          //   won: `${standing.table.won}`,
          //   draw: `${standing.table.draw}`,
          //   lost: `${standing.table.lost}`,
          //   points: `${standing.table.points}`,
          //   //goalsFor: `${standing.table.goalsFor}`,
          //  // goalsAgainst: `${standing.table.goalsAgainst}`,
          //   goalDifference: `${standing.table.goalDifference}`,
          }))
        )
        // .then(function (response) {
        //     // handle success
        //     alert(JSON.stringify(response.data.standings));
        //   })
        .then(premiertable => {
          this.setState({
            premiertable,
            isLoading: false
          });
        })
        .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.getStandingAPI();
    }

    render() {
        const { isLoading, premiertable } = this.state;
        return (
        
         
        //  <View>
        //       {standing.map(standing => {
        //           //const { logo, position, teamName, playedGames, won, draw, lost, goalDifference, points } = standing;
        //           const {name, gender, email} = standing;
        //           return (
        //   //           <StyledView key={position}>
				// 	// 			<TeamLogo source={logo} />
				// 	// 			<TeamText>{teamName}</TeamText>
				// 	// 			<InfoText>{playedGames}</InfoText>
				// 	// 			<InfoText>{won}</InfoText>
				// 	// 			<InfoText>{draw}</InfoText>
				// 	// 			<InfoText>{lost}</InfoText>
				// 	// 			<InfoText>{goalDifference}</InfoText>
				// 	// 			<InfoText>{points}</InfoText>
        //   //                       <Text>BABI</Text>
        //   // </StyledView>
        //             <View>
        //               <Text>BABI</Text>
        //             </View>
        //           );
        //         })
        //        }
         
        // </View>

        <ScrollView style={styles.newsText}>
        {!isLoading ? (
          premiertable.map(premiertable => {
            const { position, teamName, logo, playedGames } = premiertable;
            return (
              <TouchableOpacity onPress={() => Linking.openURL(logo)} key={position} >          
              <Card>
                  <Text>
                  {teamName}
                  </Text>
                  <Text>
                  {playedGames}
                  </Text>
                  <Text style={{fontSize: 10, color: 'grey'}}>
                  {playedGames}
                  </Text>
              </Card>
              </TouchableOpacity> 
            );
          })
        ) : (
          <Text>Loading...</Text>
        )}
        </ScrollView>

        );
    }    
}

// const ContainerView = styled.View`
// `;

// const StyledView = styled.View`
// 	display: flex;
// 	flex-direction: row;
// 	border-bottom-color: rgb(241, 241, 241);
// 	border-bottom-width: 1px;
// 	border-style: solid;
// 	padding: 8px;
// `;

// const InfoText = styled.Text`
//   color: rgb(60, 0, 60);
// 	font-size: 16px;
// 	flex: 1;
// `;

// const TeamText = styled.Text`
//   color: rgb(60, 0, 60);
// 	font-size: 16px;
// 	flex: 5;
// `;

// const TeamLogo = styled.Image`
//   width: 20px;
// 	height: 20px;
// 	margin-right: 10px;
// `;

const styles = StyleSheet.create({
  newsText: {
    width: '100%',
    textAlign: 'center',
  },
  newsImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    width: 200, 
    height: 200
  }

});

export default GetStanding;