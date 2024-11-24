// src/stores/counter.js
import { defineStore } from "pinia";

export const useBet = defineStore("bet", {
  state: () => ({
    bets: [],
    matches: [
      {
        id: 1,
        match: "Valencia-Getafe",
        home: "Valencia",
        away: "Getafe",
      },
      {
        id: 2,
        match: "Espanyol-Osasuna",
        home: "Espanyol",
        away: "Osasuna",
      },
      {
        id: 3,
        match: "Atletico Madrid-Athletic Club",
        home: "Atletico Madrid",
        away: "Athletic Club",
      },
      {
        id: 4,
        match: "Barcelona-Real Madrid",
        home: "Barcelona",
        away: "Real Madrid",
      },
      {
        id: 5,
        match: "Sevilla-Cadiz",
        home: "Sevilla",
        away: "Cadiz",
      },
    ],
  }),
  getters: {
    match() {
      return this.matches;
    },
    getBets() {
      return this.bets;
    },
  },
  actions: {
    addBet() {},
  },
});
