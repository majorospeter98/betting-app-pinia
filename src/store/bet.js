// src/stores/counter.js
import { defineStore } from "pinia";

export const useBet = defineStore("bet", {
  state: () => ({
    bets: [],
    matches : [
      {
        fixture: {
          id: 1,
            },
         teams: {
          home: {  name: 'Valencia',  },
          away: {  name: 'Getafe', }
        },
            events: []
      },
      {
        fixture: {
          id: 2,
                  },
        league: {

          logo: 'https://media.api-sports.io/football/leagues/1.png',
                  },
        teams: {
          home: { id: null, name: 'Espanyol', logo: 'https://media.api-sports.io/football/teams/3.png', winner: null },
          away: { id: null, name: 'Osasuna', logo: 'https://media.api-sports.io/football/teams/4.png', winner: null }
        },
        goals: { home: 0, away: 0 },
        score: {
          halftime: { home: 0, away: 0 },
          fulltime: { home: null, away: null },
          extratime: { home: null, away: null },
          penalty: { home: null, away: null }
        },
       
      },
      {
        fixture: {
          id: 3,
          referee: null,
          timezone: 'UTC',
          date: '2025-02-12T10:00:00+00:00',
          timestamp: 1739354400,
          periods: { first: 1739354400, second: null },
          venue: { id: null, name: 'N/A', city: 'N/A' },
          status: { long: 'First Half', short: '1H', elapsed: 31, extra: null }
        },
        league: {
          id: 1,
          name: 'La Liga',
          country: 'Spain',
          logo: 'https://media.api-sports.io/football/leagues/1.png',
          flag: null,
          season: 2025,
          round: 'League Stage',
          standings: true
        },
        teams: {
          home: { id: null, name: 'Atletico Madrid', logo: 'https://media.api-sports.io/football/teams/5.png', winner: null },
          away: { id: null, name: 'Athletic Club', logo: 'https://media.api-sports.io/football/teams/6.png', winner: null }
        },
               
      },
      {
        fixture: {
          id: 4,
          referee: null,
          timezone: 'UTC',
          date: '2025-02-12T10:00:00+00:00',
          timestamp: 1739354400,
          periods: { first: 1739354400, second: null },
          venue: { id: null, name: 'N/A', city: 'N/A' },
          status: { long: 'First Half', short: '1H', elapsed: 32, extra: null }
        },
        league: {
          id: 1,
          name: 'La Liga',
          country: 'Spain',
          logo: 'https://media.api-sports.io/football/leagues/1.png',
          flag: null,
          season: 2025,
          round: 'League Stage',
          standings: true
        },
        teams: {
          home: { id: null, name: 'Barcelona', logo: 'https://media.api-sports.io/football/teams/7.png', winner: null },
          away: { id: null, name: 'Real Madrid', logo: 'https://media.api-sports.io/football/teams/8.png', winner: null }
        },
        goals: { home: 0, away: 0 },
        score: {
          halftime: { home: 0, away: 0 },
          fulltime: { home: null, away: null },
          extratime: { home: null, away: null },
          penalty: { home: null, away: null }
        },
        events: []
      },
      {
        fixture: {
          id: 5,
          referee: null,
          timezone: 'UTC',
          date: '2025-02-12T10:00:00+00:00',
          timestamp: 1739354400,
          periods: { first: 1739354400, second: null },
          venue: { id: null, name: 'N/A', city: 'N/A' },
          status: { long: 'First Half', short: '1H', elapsed: 33, extra: null }
        },
        league: {
          id: 1,
          name: 'La Liga',
          country: 'Spain',
          logo: 'https://media.api-sports.io/football/leagues/1.png',
          flag: null,
          season: 2025,
          round: 'League Stage',
          standings: true
        },
        teams: {
          home: { id: null, name: 'Sevilla', logo: 'https://media.api-sports.io/football/teams/9.png', winner: null },
          away: { id: null, name: 'Cadiz', logo: 'https://media.api-sports.io/football/teams/10.png', winner: null }
        },
       
        
     
      }
    ]
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
