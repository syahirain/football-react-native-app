import React, { Component } from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Linking } from 'react-native'
import axios from 'axios';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

class GetNews extends Component {
    state = {
        news: [],
        isLoading: true,
        errors: null
    };

    getNews() {
        axios
          .get("http://newsapi.org/v2/top-headlines?country=gb&category=sports&title=premierleague&apiKey=58fe11eb125344f7a08f337eeb2b05e7")
          .then(response =>
            response.data.articles.map(news => ({
              sourceName: `${news.source.name}`,
              author: `${news.author}`,
              description: `${news.description}`,
              title: `${news.title}`,
              image: `${news.urlToImage}`,
              url: `${news.url}`,
            }))
          )
          .then(news => {
            this.setState({
                news,
              isLoading: false
            });
          })
          .catch(error => this.setState({ error, isLoading: false }));
    }

    

    render() {
        const { isLoading, news } = this.state;
        this.getNews();
        return (

          
          <ScrollView style={styles.newsText}>
              {!isLoading ? (
                news.map(news => {
                  const { sourceName, author, description, title, image, url } = news;
                  return (
                    <TouchableOpacity onPress={() => Linking.openURL(url)} key={url} >
                    <Card>
                      <Card.Image source={{uri: image}}>
                      </Card.Image>
                        <Text>
                        {title}
                        </Text>
                        <Text>
                        {description}
                        </Text>
                        <Text style={{fontSize: 10, color: 'grey'}}>
                        {sourceName} | {author}
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
   

export default GetNews