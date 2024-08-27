import { Place } from '../../types';
import { countries } from '../countries';

const ireland = {
  carrigadrohid: Place.from('Carrigadrohid', countries.ireland),
  dingle: Place.from('Dingle', countries.ireland),
  dunmoreEast: Place.from('Dunmore East', countries.ireland),
  galway: Place.from('Galway', countries.ireland),
  sligo: Place.from('Sligo', countries.ireland),
  tralee: Place.from('Tralee', countries.ireland),
};

const municipalities = {
  algarve: Place.from('Algarve', countries.portugal),
  amalfi: Place.from('Amalfi', countries.italy),
  amsterdam: Place.from('Amsterdam', countries.netherlands),
  barcelona: Place.from('Barcelona', countries.spain),
  berlin: Place.from('Berlin', countries.germany),
  cilento: Place.from('Cilento', countries.italy),
  cinqueTerre: Place.from('Cinque Terre', countries.italy),
  dubrovnik: Place.from('Dubrovnik', countries.croatia),
  florence: Place.from('Florence', countries.italy),
  ibiza: Place.from('Ibiza', countries.spain),
  laGacilly: Place.from('La Gacilly', countries.france),
  milos: Place.from('Milos', countries.greece),
  mykanos: Place.from('Mykanos', countries.greece),
  naxos: Place.from('Naxos', countries.greece),
  nice: Place.from('Nice', countries.france),
  obernai: Place.from('Obernai', countries.france),
  paris: Place.from('Paris', countries.france),
  pisa: Place.from('Pisa', countries.italy),
  santorini: Place.from('Santorini', countries.greece),
  sitges: Place.from('Sitges', countries.spain),
  stockholm: Place.from('Stockholm', countries.sweden),
  strasbourg: Place.from('Strasbourg', countries.france),
  saintJean: Place.from('Saint-Jean-d’Aulps', countries.france),
  tuscany: Place.from('Tuscany', countries.italy),
  zurich: Place.from('Zurich', countries.switzerland),
};

const accomodations = {
  hotel25HoursZurich: Place.from('25hours Hotel', municipalities.zurich),
  greeDesLandes: Place.from('La Grée Des Landes', municipalities.laGacilly),
  royalYachtJersey: Place.from('Royal Yacht', countries.jersey),
  vilaVita: Place.from('Vila Vita', municipalities.algarve),
  yellohCoteSauvage: Place.from('Yelloh! Côte Sauvage', countries.france),
};

export const placesEurope = {
  ...ireland,
  ...municipalities,
  ...accomodations,
};
