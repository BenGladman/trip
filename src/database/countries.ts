import { Country } from '../types';
import { continents } from './continents';

const uk = {
  england: Country.from('England', continents.europe, '🏴󠁧󠁢󠁥󠁮󠁧󠁿'),
  scotland: Country.from('Scotland', continents.europe, '🏴󠁧󠁢󠁳󠁣󠁴󠁿'),
  wales: Country.from('Wales', continents.europe, '🏴󠁧󠁢󠁷󠁬󠁳󠁿'),
};

export const countries = {
  ...uk,
  argentina: Country.from('Argentina', continents.southAmerica, '🇦🇷'),
  brazil: Country.from('Brazil', continents.southAmerica, '🇧🇷'),
  cambodia: Country.from('Cambodia', continents.asia, '🇰🇭'),
  canada: Country.from('Canada', continents.northAmerica, '🇨🇦'),
  croatia: Country.from('Croatia', continents.europe, '🇭🇷'),
  france: Country.from('France', continents.europe, '🇫🇷'),
  germany: Country.from('Germany', continents.europe, '🇩🇪'),
  greece: Country.from('Greece', continents.europe, '🇬🇷'),
  ireland: Country.from('Ireland', continents.europe, '🇮🇪'),
  italy: Country.from('Italy', continents.europe, '🇮🇹'),
  jersey: Country.from('Jersey', continents.europe, '🇯🇪'),
  madagascar: Country.from('Madagascar', continents.africa, '🇲🇬'),
  malta: Country.from('Malta', continents.europe, '🇲🇹'),
  netherlands: Country.from('Netherlands', continents.europe, '🇳🇱'),
  portugal: Country.from('Portugal', continents.europe, '🇵🇹'),
  singapore: Country.from('Singapore', continents.asia, '🇸🇬'),
  spain: Country.from('Spain', continents.europe, '🇪🇸'),
  sriLanka: Country.from('Sri Lanka', continents.asia, '🇱🇰'),
  sweden: Country.from('Sweden', continents.europe, '🇸🇪'),
  switzerland: Country.from('Switzerland', continents.europe, '🇨🇭'),
  thailand: Country.from('Thailand', continents.asia, '🇹🇭'),
  vietnam: Country.from('Vietnam', continents.asia, '🇻🇳'),
  usa: Country.from('USA', continents.northAmerica, '🇺🇸'),
};
