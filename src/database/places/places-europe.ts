import { Place } from '../../types';
import { countries } from '../countries';

const ireland = {
  carrigadrohid: Place.from('Carrigadrohid', countries.ireland, [51.9, -8.9]),
  cavan: Place.from('Cavan', countries.ireland, [54, -7.4]),
  dingle: Place.from('Dingle', countries.ireland, [52.1, -10.3]),
  dunmoreEast: Place.from('Dunmore East', countries.ireland, [52.2, -7]),
  galway: Place.from('Galway', countries.ireland, [53.2, -9]),
  sligo: Place.from('Sligo', countries.ireland, [54.3, -8.5]),
  tralee: Place.from('Tralee', countries.ireland),
};

const islands = {
  ibiza: Place.from('Ibiza', countries.spain, [39, 1.4]),
  milos: Place.from('Milos', countries.greece, [36.7, 24.4]),
  mykanos: Place.from('Mykanos', countries.greece, [37.5, 25.4]),
  naxos: Place.from('Naxos', countries.greece, [37.1, 25.3]),
  majorca: Place.from('Majorca', countries.spain, [39.7, 3]),
  santorini: Place.from('Santorini', countries.greece, [36.4, 25.5]),
};

const municipalities = {
  algarve: Place.from('Algarve', countries.portugal, [37.3, -8.4]),
  amalfi: Place.from('Amalfi', countries.italy, [40.6, 14.6]),
  amsterdam: Place.from('Amsterdam', countries.netherlands, [52.4, 4.9]),
  barcelona: Place.from('Barcelona', countries.spain, [41.4, 2.2]),
  berlin: Place.from('Berlin', countries.germany, [52.5, 13.1]),
  cilento: Place.from('Cilento', countries.italy),
  cinqueTerre: Place.from('Cinque Terre', countries.italy, [44.1, 9.7]),
  coteSauvage: Place.from('Côte Sauvage', countries.france, [45.7, -1.2]),
  dubrovnik: Place.from('Dubrovnik', countries.croatia, [42.6, 18.1]),
  florence: Place.from('Florence', countries.italy, [43.8, 11.3]),
  laGacilly: Place.from('La Gacilly', countries.france, [47.8, -2.1]),
  nice: Place.from('Nice', countries.france, [43.7, 7.3]),
  obernai: Place.from('Obernai', countries.france),
  palma: Place.from('Palma', islands.majorca, [39.6, 2.7]),
  paris: Place.from('Paris', countries.france, [48.9, 2.3]),
  pisa: Place.from('Pisa', countries.italy, [43.7, 10.4]),
  porto: Place.from('Porto', countries.portugal, [41.2, -8.6]),
  pontevedra: Place.from('Pontevedra', countries.spain, [42.4, -8.6]),
  santiagoDeCompostela: Place.from(
    'Santiago de Compostela',
    countries.spain,
    [42.9, -8.6],
  ),
  sitges: Place.from('Sitges', countries.spain),
  stockholm: Place.from('Stockholm', countries.sweden, [59.3, 18.1]),
  strasbourg: Place.from('Strasbourg', countries.france, [48.6, 7.8]),
  saintJean: Place.from('Saint-Jean-d’Aulps', countries.france, [46.2, 6.7]),
  stHellier: Place.from('St Helier', countries.jersey, [49.2, -2.1]),
  tuscany: Place.from('Tuscany', countries.italy),
  zurich: Place.from('Zurich', countries.switzerland, [47.4, 8.5]),
};

export const placesEurope = {
  ...ireland,
  ...islands,
  ...municipalities,
};
