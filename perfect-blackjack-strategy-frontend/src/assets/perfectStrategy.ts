export default {
  // array format is <your-values>: (dealer face-up) [2-10, A]
  hard: {
    21: ['stand','stand','stand','stand','stand','stand','stand','stand','stand','stand'],
    20: ['stand','stand','stand','stand','stand','stand','stand','stand','stand','stand'],
    19: ['stand','stand','stand','stand','stand','stand','stand','stand','stand','stand'],
    18: ['stand','stand','stand','stand','stand','stand','stand','stand','stand','stand'],
    17: ['stand','stand','stand','stand','stand','stand','stand','stand','stand','stand'],
    16: ['stand','stand','stand','stand','stand','hit','hit','hit','hit','hit'],
    15: ['stand','stand','stand','stand','stand','hit','hit','hit','hit','hit'],
    14: ['stand','stand','stand','stand','stand','hit','hit','hit','hit','hit'],
    13: ['stand','stand','stand','stand','stand','hit','hit','hit','hit','hit'],
    12: ['hit','hit','stand','stand','stand','hit','hit','hit','hit','hit'],
    11: ['double down','double down','double down','double down','double down','double down','double down','double down','double down','hit'],
    10: ['double down','double down','double down','double down','double down','double down','double down','double down','hit','hit'],
    9: ['hit','hit','hit','hit','hit','hit','hit','hit','hit','hit'],
    8: ['hit','hit','hit','hit','hit','hit','hit','hit','hit','hit'],
    7: ['hit','hit','hit','hit','hit','hit','hit','hit','hit','hit'],
    6: ['hit','hit','hit','hit','hit','hit','hit','hit','hit','hit'],
    5: ['hit','hit','hit','hit','hit','hit','hit','hit','hit','hit']
  },
  aces: {
    10: ['stand','stand','stand','stand','stand','stand','stand','stand','stand','stand'],
    9: ['stand','stand','stand','stand','stand','stand','stand','stand','stand','stand'],
    8: ['stand','stand','stand','stand','stand','stand','stand','stand','stand','stand'],
    7: ['stand','double down','double down','double down','double down','stand','stand','hit','hit','hit'],
    6: ['hit','double down','double down','double down','double down','hit','hit','hit','hit','hit'],
    5: ['hit','hit','double down','double down','double down','hit','hit','hit','hit','hit'],
    4: ['hit','hit','double down','double down','double down','hit','hit','hit','hit','hit'],
    3: ['hit','hit','hit','double down','double down','hit','hit','hit','hit','hit'],
    2: ['hit','hit','hit','double down','double down','hit','hit','hit','hit','hit']
  },
  splits: {
    11: ['split','split','split','split','split','split','split','split','split','split'],
    10: ['stand','stand','stand','stand','stand','stand','stand','stand','stand','stand'],
    9: ['split','split','split','split','split','stand','split','split','stand','stand'],
    8: ['split','split','split','split','split','split','split','split','split','split'],
    7: ['split','split','split','split','split','split','hit','hit','hit','hit'],
    6: ['split','split','split','split','split','hit','hit','hit','hit','hit'],
    5: ['double down','double down','double down','double down','double down','double down','double down','double down','hit','hit'],
    4: ['hit','hit','hit','split','split','hit','hit','hit','hit','hit'],
    3: ['split','split','split','split','split','split','hit','hit','hit','hit'],
    2: ['split','split','split','split','split','split','hit','hit','hit','hit']
  }
};