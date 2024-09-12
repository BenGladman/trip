import { Accommodation } from '../types';
import { places } from './places/places';

const uk = {
  artistResidencePenzance: Accommodation.from(
    'Artist Residence',
    '🏨',
    places.penzance,
  ),
  birch: Accommodation.from('Birch', '🌳', places.cheshunt),
  butlinsMinehead: Accommodation.from('Butlins', '🏘️', places.minehead),
  chelseaHouseFalmouth: Accommodation.from(
    'Chelsea House',
    '🏠',
    places.falmouth,
  ),
  countyHotelHexham: Accommodation.from('County Hotel', '🏨', places.hexham),
  curtainHotel: Accommodation.from('The Curtain', '🏨', places.london),
  fallenAngel: Accommodation.from('Fallen Angel', '👼', places.mousehole),
  gannetInn: Accommodation.from('Gannet Inn', '🏨', places.carbisBay),
  harbourHotelBristol: Accommodation.from(
    'Harbour Hotel',
    '🏨',
    places.bristol,
  ),
  hotelDuVinPoole: Accommodation.from('Hotel du Vin', '🏨', places.poole),
  hoxtonHotel: Accommodation.from('The Hoxton', '🏨', places.london),
  humbleBee: Accommodation.from('Humble Bee', '🐝', places.okehampton),
  pigBrockenhurst: Accommodation.from('The Pig', '🐖', places.brokenhurst),
  pigBridgePlace: Accommodation.from(
    'The Pig at Bridge Place',
    '🐖',
    places.canterbury,
  ),
  seahamHallHotel: Accommodation.from('Seaham Hall Hotel', '💆', places.durham),
  scarletHotel: Accommodation.from('Scarlet Hotel', '💆', places.mawganPorth),
  sedgefordHall: Accommodation.from('Sedgeford Hall', '🏠', places.hunstanton),
  starAndGarterFalmouth: Accommodation.from(
    'Star and Garter',
    '🏨',
    places.falmouth,
  ),
  thymeHotel: Accommodation.from('Thyme Hotel', '🌿', places.lechlade),
  velvetHotel: Accommodation.from('Velvet Hotel', '🏨', places.manchester),
};

const europe = {
  hotel25HoursZurich: Accommodation.from('25hours Hotel', '🏨', places.zurich),
  greeDesLandes: Accommodation.from(
    'La Grée Des Landes',
    '🏨',
    places.laGacilly,
  ),
  royalYachtJersey: Accommodation.from(
    'Royal Yacht Hotel',
    '🏨',
    places.stHellier,
  ),
  vilaVita: Accommodation.from('Vila Vita', '🏖️', places.algarve),
  yellohCoteSauvage: Accommodation.from(
    'Yelloh! Village',
    '🏕️',
    places.coteSauvage,
  ),
};

const usa = {
  arloNomad: Accommodation.from('Arlo Nomad', '🏨', places.newYork),
};

export const accommodations = {
  ...uk,
  ...europe,
  ...usa,
};
