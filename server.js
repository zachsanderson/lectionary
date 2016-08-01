var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res) {
    // All the web scraping magic will happen here
    url = 'http://www.umcdiscipleship.org/worship/lectionary-calendar/eleventh-sunday-after-pentecost-year-c-2016';

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

            //var title, release, rating;
            //var json = {title : "", release : "", rating : ""};
            var nextURL

            $('.headline.lectionary-controls .pagination a:nth-child(2)').filter(function(){
                var data = $(this);
                nextURL = data.first().attr('href');
                //nextURL = data;
                console.log(nextURL);
            })
        }
    })

})

app.listen('8081');

console.log('Magic happens on port 8081');

exports = module.exports = app;