const categories = [ 
  {
    name: 'Name',
    key1: 'name',
    key2: false
  }, 
  {
    name: 'Tier',
    key1: 'tier',
    key2: 'tier'
  }, 
  {
    name: 'Rank',
    key1: 'tier',
    key2: 'rank'
  }, 
  {
    name: 'Win',
    key1: 'world_stats',
    key2: 'wins'
  }, 
  {
    name: 'Loss',
    key1: 'world_stats',
    key2: 'losses'
  }, 
  {
    name: 'Weight-Cls',
    key1: 'weight',
    key2: 'class'
  }, 
  {
    name: 'Wt',
    key1: 'weight',
    key2: 'weight_value'
  }, 
  {
    name: 'Jump',
    key1: 'jump_height',
  }, 
  {
    name: 'Dash',
    key1: 'speeds',
    key2: 'initial_dash'
  }, 
  {
    name: 'Run',
    key1: 'speeds',
    key2: 'run_speed'
  }, 
  {
    name: 'Air',
    key1: 'speeds',
    key2: 'air_speed'
  }, 
  {
    name: 'Spd-Rk',
    key1: 'speeds',
    key2: 'speed_rank'
  }, 
  {
    name: 'Ctr',
    key1: 'counter',
    key2: false
  }, 
  {
    name: 'Top-Smash',
    key1: 'strongest_smash',
    key2: 'damage'
  }, 
];

const cardCategories = [
  {
    name: 'Class',
    key1: 'weight',
    key2: 'class'
  },
  {
    name: 'Speed',
    key1: 'speeds',
    key2: 'speed_rank'
  },
  {
    name: 'Rank',
    key1: 'tier',
    key2: 'rank'
  }
];

const cardProsCons = [
  {
    name: 'Pros',
    key: 'pros'
  },
  {
    name: 'Cons',
    key: 'cons'
  }
];

const letterSuperScripts = [
  {num: 11, script: 'th'},
  {num: 1, script: 'st'},
  {num: 2, script: 'nd'},
  {num: 3, script: 'rd'},
  {num: 4, script: 'th'},
  {num: 5, script: 'th'},
  {num: 6, script: 'th'},
  {num: 7, script: 'th'},
  {num: 8, script: 'th'},
  {num: 9, script: 'th'},
  {num: 0, script: 'th'},
];


export {
  categories,
  cardCategories,
  cardProsCons,
  letterSuperScripts
};
