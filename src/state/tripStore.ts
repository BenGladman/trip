import { create } from 'zustand';
import { trips } from '../database/trips/trips';
import {
  Trip,
  type Activity,
  type Agent,
  type Country,
  type Place,
} from '../types';

interface Store {
  trips: Trip[];
  selectedTrip: Trip | null;
  selectTrip: (selectedTrip: Trip | null) => void;
  filter: Country | Place | Agent | Activity | null;
  setFilter: (filter: Country | Place | Agent | Activity) => void;
  clearFilter: () => void;
}

export const useTripStore = create<Store>((set) => ({
  trips,
  selectedTrip: null,
  selectTrip: (selectedTrip) => {
    set(() => ({ selectedTrip }));
  },
  filter: null,
  setFilter: (filter) => {
    set({
      filter,
      trips: trips.filter((t) => t.filter(filter)),
    });
  },
  clearFilter: () => set({ filter: null, trips }),
}));
