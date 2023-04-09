import requests
from geopy import geocoders
from api_key import API_KEY
from pprint import pprint
from datetime import datetime
"""
В дальнейшем наименование города будет приходить с frontend
"""
city = 'Сургут'

def geo_pos(city):
    geolocator = geocoders.Nominatim(user_agent='personal_site')
    lat = str(geolocator.geocode(city).latitude)
    lon = str(geolocator.geocode(city).longitude)
    return lat, lon

def forecast(city):
    # Поиск кооридинат города
    lat, lon = geo_pos(city)

    weather_url = f'https://api.weather.yandex.ru/v2/forecast?lat={lat}&lon={lon}'
    j_data_weather = requests.get(weather_url, headers={'X-Yandex-API-Key': API_KEY}).json()
    weather_dict = j_data_weather['fact']
    my_time = (datetime.fromtimestamp(int(weather_dict['uptime'])).strftime('%Y-%m-%d %H:%M:%S'))
    weather_dict['uptime'] = my_time
    weather_dict['city'] = city
    return weather_dict



pprint(forecast(city))