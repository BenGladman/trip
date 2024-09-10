import { Place } from '../../types';
import { countries } from '../countries';

const regions = {
  cornwall: Place.from('Cornwall', countries.england),
  cotswolds: Place.from('Cotswolds', countries.england),
  devon: Place.from('Devon', countries.england),
  kent: Place.from('Kent', countries.england),
  lakes: Place.from('Lake District', countries.england, [54.5, -3]),
  lancashire: Place.from('Lancashire', countries.england),
  midlands: Place.from('Midlands', countries.england),
  norfolk: Place.from('Norfolk', countries.england),
  northumberland: Place.from('Northumberland', countries.england),
  sussex: Place.from('Sussex', countries.england),
  yorkshire: Place.from('Yorkshire', countries.england),
};

const municipalities = {
  ashbyDeLaZouch: Place.from(
    'Ashby de la Zouch',
    regions.midlands,
    [52.7, -1.5],
  ),
  barmouth: Place.from('Barmouth', countries.wales, [52.7, -4.1]),
  bath: Place.from('Bath', countries.england, [51.4, -2.4]),
  berkhamsted: Place.from('Berkhamsted', countries.england),
  bournemouth: Place.from('Bournemouth', countries.england, [50.7, -1.9]),
  brokenhurst: Place.from('Brokenhurst', countries.england, [50.8, -1.6]),
  brighton: Place.from('Brighton', countries.england, [50.8, -0.1]),
  bristol: Place.from('Bristol', countries.england, [51.5, -2.3]),
  canterbury: Place.from('Canterbury', regions.kent),
  carbisBay: Place.from('Carbis Bay', regions.cornwall, [50.2, -5.5]),
  cheshunt: Place.from('Cheshunt', countries.england, [51.7, 0]),
  christchurch: Place.from('Christchurch', countries.england),
  coventry: Place.from('Coventry', regions.midlands, [52.4, -1.5]),
  durham: Place.from('Durham', countries.england, [54.8, -1.6]),
  edinburgh: Place.from('Edinburgh', countries.scotland, [55.9, -3.4]),
  ely: Place.from('Ely', countries.england, [52.4, 0.3]),
  falmouth: Place.from('Falmouth', regions.cornwall, [50.2, -5.1]),
  folkestone: Place.from('Folkestone', regions.kent, [51.1, 1.2]),
  foulridge: Place.from('Foulridge', regions.lancashire),
  greatYarmouth: Place.from('Great Yarmouth', regions.norfolk, [52.6, 1.7]),
  hebdenBridge: Place.from('Hebden Bridge', regions.yorkshire, [53.7, -2]),
  hemelHempstead: Place.from(
    'Hemel Hempstead',
    countries.england,
    [51.8, -0.5],
  ),
  henley: Place.from('Henley-on-Thames', countries.england, [51.5, -0.9]),
  hexham: Place.from('Hexham', regions.northumberland, [55, -2.1]),
  huddersfield: Place.from('Huddersfield', regions.yorkshire),
  leightonBuzzard: Place.from('Leighton Buzzard', countries.england),
  london: Place.from('London', countries.england, [51.5, -0.1]),
  manchester: Place.from('Manchester', countries.england, [53.5, -2.2]),
  mawganPorth: Place.from('Mawgan Porth', regions.cornwall, [50.5, -5]),
  minehead: Place.from('Minehead', countries.england, [51.2, -3.4]),
  mousehole: Place.from('Mousehole', regions.cornwall, [50, -5.5]),
  newquay: Place.from('Newquay', regions.cornwall, [50.4, -5.1]),
  okehampton: Place.from('Okehampton', regions.devon),
  penzance: Place.from('Penzance', regions.cornwall, [50.1, -5.5]),
  pontcysyllte: Place.from('Pontcysyllte', countries.wales, [53, -3.1]),
  poole: Place.from('Poole', countries.england),
  rugby: Place.from('Rugby', regions.midlands, [52.4, -1.3]),
  rye: Place.from('Rye', regions.sussex, [51, 0.7]),
  skipton: Place.from('Skipton', regions.yorkshire, [54, -2]),
  sowerbyBridge: Place.from('Sowerby Bridge', regions.yorkshire, [53.7, -1.9]),
  standedgeTunnel: Place.from('Standedge Tunnel', countries.england),
  stIves: Place.from('St Ives', regions.cornwall, [50.2, -5.5]),
  stMawes: Place.from('St Mawes', regions.cornwall),
  stratfordUponAvon: Place.from(
    'Stratford-upon-Avon',
    regions.midlands,
    [52.2, -1.7],
  ),
  ticehurst: Place.from('Ticehurst', regions.sussex),
  todmorden: Place.from('Todmorden', regions.yorkshire),
  warwick: Place.from('Warwick', regions.midlands, [52.3, -1.6]),
  whitchurch: Place.from('Whitchurch', countries.england),
  windermere: Place.from('Windermere', regions.lakes),
  woolacombe: Place.from('Woolacombe', regions.devon, [51.2, -4.2]),
};

const accomodations = {
  artistResidencePenzance: Place.from(
    'Artist Residence',
    municipalities.penzance,
  ),
  birch: Place.from('Birch', municipalities.cheshunt),
  butlinsMinehead: Place.from('Butlins', municipalities.minehead),
  chelseaHouseFalmouth: Place.from('Chelsea House', municipalities.falmouth),
  countyHotelHexham: Place.from('County Hotel', municipalities.hexham),
  curtainHotel: Place.from('The Curtain', municipalities.london),
  fallenAngel: Place.from('Fallen Angel', municipalities.mousehole),
  gannetInn: Place.from('Gannet Inn', municipalities.carbisBay),
  harbourHotelBristol: Place.from('Harbour Hotel', municipalities.bristol),
  hotelDuVinPoole: Place.from('Hotel du Vin', municipalities.poole),
  hoxtonHotel: Place.from('The Hoxton', municipalities.london),
  humbleBee: Place.from('Humble Bee', municipalities.okehampton),
  pigBrockenhurst: Place.from('The Pig', municipalities.brokenhurst),
  pigBridgePlace: Place.from(
    'The Pig at Bridge Place',
    municipalities.canterbury,
  ),
  seahamHallHotel: Place.from('Seaham Hall Hotel', municipalities.durham),
  scarletHotel: Place.from('Scarlet Hotel', municipalities.mawganPorth),
  sedgefordHall: Place.from('Sedgeford Hall', regions.norfolk, [52.9, 0.6]),
  starAndGarterFalmouth: Place.from('Star and Garter', municipalities.falmouth),
  thymeHotel: Place.from('Thyme Hotel', regions.cotswolds, [51.7, -1.7]),
  velvetHotel: Place.from('Velvet Hotel', municipalities.manchester),
};

export const placesUk = {
  ...regions,
  ...municipalities,
  ...accomodations,
};
