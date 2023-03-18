import requests
from api_key import API_KEY

city = 'Surgut'
city_url = f'http://dataservice.accuweather.com/locations/v1/cities/search?apikey={API_KEY}&q={city}'

j_data_city = requests.get(city_url).json()
id_city = j_data_city[0]['Key']

weather_url = f'http://dataservice.accuweather.com/forecasts/v1/daily/1day/{id_city}?apikey={API_KEY}&metric=True'

j_data_forecast = requests.get(weather_url).json()

weather_headline = j_data_forecast['Headline']
weather_daily_forecasts = j_data_forecast['DailyForecasts']
temperature = weather_daily_forecasts[0]['Temperature']

weather = {
    'Text': weather_headline['Text'],
    'Temperature': {
        'Maximum': temperature['Maximum']['Value'],
        'Minimum': temperature['Minimum']['Value'],
    }
}

print(weather)


