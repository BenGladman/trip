import { Country } from '../types';
import { continents } from './continents';

export const countries = {
  argentina: Country.from('Argentina', continents.southAmerica, '🇦🇷'),
  brazil: Country.from('Brazil', continents.southAmerica, '🇧🇷'),
  canada: Country.from('Canada', continents.northAmerica, '🇨🇦'),
  croatia: Country.from('Croatia', continents.europe, '🇭🇷'),
  france: Country.from('France', continents.europe, '🇫🇷'),
  germany: Country.from('Germany', continents.europe, '🇩🇪'),
  greece: Country.from('Greece', continents.europe, '🇬🇷'),
  ireland: Country.from('Ireland', continents.europe, '🇮🇪'),
  italy: Country.from('Italy', continents.europe, '🇮🇹'),
  jersey: Country.from('Jersey', continents.europe, '🇯🇪'),
  madagascar: Country.from('Madagascar', continents.africa, '🇲🇬'),
  netherlands: Country.from('Netherlands', continents.europe, '🇳🇱'),
  portugal: Country.from('Portugal', continents.europe, '🇵🇹'),
  singapore: Country.from('Singapore', continents.asia, '🇸🇬'),
  spain: Country.from('Spain', continents.europe, '🇪🇸'),
  sweden: Country.from('Sweden', continents.europe, '🇸🇪'),
  switzerland: Country.from('Switzerland', continents.europe, '🇨🇭'),
  thailand: Country.from('Thailand', continents.asia, '🇹🇭'),
  uk: Country.from('UK', continents.europe, '🇬🇧'),
  usa: Country.from('USA', continents.northAmerica, '🇺🇸'),
};
