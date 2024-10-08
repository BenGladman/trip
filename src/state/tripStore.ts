import { create } from 'zustand';
import { trips } from '../database/trips/trips';
import { Trip, type Filter, type Place } from '../types';
import type { Vector3 } from 'three';

interface Store {
  trips: Trip[];
  selectedTrip: Trip | null;
  selectTrip: (selectedTrip: Trip | null) => void;
  filter: Filter;
  setFilter: (filter: Filter) => void;
  landDots: Vector3[];
  placesAtLandDotIndex: Map<number, Place[]>;
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
  landDots: [],
  placesAtLandDotIndex: new Map(),
}));
