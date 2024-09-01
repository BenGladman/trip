import { create } from 'zustand';
import { trips } from '../database/trips/trips';
import { Trip } from '../types';

interface Store {
  trips: Trip[];
  selectedTrip: Trip | null;
  select: (selectedTrip: Trip | null) => void;
}

export const useTripStore = create<Store>((set) => ({
  trips,
  selectedTrip: null,
  select: (selectedTrip) => {
    set(() => ({ selectedTrip }));
  },
}));
