import { create } from 'zustand';
import { trips } from '../database/trips/trips';
import { Trip, type Filter } from '../types';

interface Store {
  trips: Trip[];
  selectedTrip: Trip | null;
  selectTrip: (selectedTrip: Trip | null) => void;
  filter: Filter;
  setFilter: (filter: Filter) => void;
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
}));
