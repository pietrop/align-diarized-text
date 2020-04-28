"use strict";
const fs = require('fs');
const align = require('./index.js');

// const automatedTranscription = require('../../sample-data/moby-dick/moby-dick-chapter-1-kaldi-stt-no-librevox-intro.json').retval.words;
const automatedTranscription = [{
            "start": 29.11,
            "confidence": 1,
            "end": 29.41,
            "word": "call",
            "punct": "Call",
            "index": 46
        },
        {
            "start": 29.41,
            "confidence": 1,
            "end": 29.63,
            "word": "me",
            "punct": "me",
            "index": 47
        },
        {
            "start": 29.63,
            "confidence": 1,
            "end": 30.35,
            "word": "ishmael",
            "punct": "Ishmael.",
            "index": 48
        },
        {
            "start": 30.9,
            "confidence": 1,
            "end": 31.21,
            "word": "some",
            "punct": "Some",
            "index": 49
        },
        {
            "start": 31.21,
            "confidence": 1,
            "end": 31.57,
            "word": "years",
            "punct": "years",
            "index": 50
        },
        {
            "start": 31.57,
            "confidence": 1,
            "end": 32.13,
            "word": "ago",
            "punct": "ago.",
            "index": 51
        },
        {
            "start": 32.29,
            "confidence": 1,
            "end": 32.66,
            "word": "never",
            "punct": "Never",
            "index": 52
        },
        {
            "start": 32.66,
            "confidence": 1,
            "end": 33.18,
            "word": "mind",
            "punct": "mind.",
            "index": 53
        },
        {
            "start": 33.18,
            "confidence": 1,
            "end": 33.46,
            "word": "how",
            "punct": "How",
            "index": 54
        },
        {
            "start": 33.46,
            "confidence": 1,
            "end": 33.91,
            "word": "long",
            "punct": "long",
            "index": 55
        },
        {
            "start": 33.91,
            "confidence": 1,
            "end": 34.64,
            "word": "precisely",
            "punct": "precisely,",
            "index": 56
        },
        {
            "start": 35.06,
            "confidence": 1,
            "end": 35.42,
            "word": "having",
            "punct": "having",
            "index": 57
        },
        {
            "start": 35.42,
            "confidence": 1,
            "end": 35.73,
            "word": "little",
            "punct": "little",
            "index": 58
        },
        {
            "start": 35.73,
            "confidence": 1,
            "end": 35.82,
            "word": "or",
            "punct": "or",
            "index": 59
        },
        {
            "start": 35.82,
            "confidence": 1,
            "end": 36.05,
            "word": "no",
            "punct": "no",
            "index": 60
        },
        {
            "start": 36.05,
            "confidence": 1,
            "end": 36.47,
            "word": "money",
            "punct": "money",
            "index": 61
        },
        {
            "start": 36.47,
            "confidence": 1,
            "end": 36.58,
            "word": "in",
            "punct": "in",
            "index": 62
        },
        {
            "start": 36.58,
            "confidence": 1,
            "end": 36.81,
            "word": "my",
            "punct": "my",
            "index": 63
        },
        {
            "start": 36.81,
            "confidence": 1,
            "end": 37.36,
            "word": "purse",
            "punct": "purse",
            "index": 64
        },
        {
            "start": 37.36,
            "confidence": 1,
            "end": 37.48,
            "word": "and",
            "punct": "and",
            "index": 65
        },
        {
            "start": 37.48,
            "confidence": 1,
            "end": 37.92,
            "word": "nothing",
            "punct": "nothing",
            "index": 66
        },
        {
            "start": 37.92,
            "confidence": 0.95,
            "end": 38.57,
            "word": "particular",
            "punct": "particular",
            "index": 67
        },
        {
            "start": 38.57,
            "confidence": 1,
            "end": 38.73,
            "word": "to",
            "punct": "to",
            "index": 68
        },
        {
            "start": 38.76,
            "confidence": 1,
            "end": 39.22,
            "word": "interest",
            "punct": "interest",
            "index": 69
        },
        {
            "start": 39.22,
            "confidence": 1,
            "end": 39.37,
            "word": "me",
            "punct": "me",
            "index": 70
        },
        {
            "start": 39.37,
            "confidence": 1,
            "end": 40.03,
            "word": "onshore",
            "punct": "onshore,",
            "index": 71
        },
        {
            "start": 40.53,
            "confidence": 1,
            "end": 40.68,
            "word": "i",
            "punct": "I",
            "index": 72
        },
        {
            "start": 40.68,
            "confidence": 1,
            "end": 40.91,
            "word": "thought",
            "punct": "thought",
            "index": 73
        },
        {
            "start": 40.91,
            "confidence": 0.99,
            "end": 41.01,
            "word": "i",
            "punct": "I",
            "index": 74
        },
        {
            "start": 41.01,
            "confidence": 0.99,
            "end": 41.16,
            "word": "would",
            "punct": "would",
            "index": 75
        },
        {
            "start": 41.16,
            "confidence": 1,
            "end": 41.51,
            "word": "sail",
            "punct": "sail",
            "index": 76
        },
        {
            "start": 41.51,
            "confidence": 1,
            "end": 41.82,
            "word": "about",
            "punct": "about",
            "index": 77
        },
        {
            "start": 41.82,
            "confidence": 1,
            "end": 41.87,
            "word": "a",
            "punct": "a",
            "index": 78
        },
        {
            "start": 41.87,
            "confidence": 1,
            "end": 42.26,
            "word": "little",
            "punct": "little",
            "index": 79
        },
        {
            "start": 42.47,
            "confidence": 1,
            "end": 42.63,
            "word": "and",
            "punct": "and",
            "index": 80
        },
        {
            "start": 42.63,
            "confidence": 1,
            "end": 42.86,
            "word": "see",
            "punct": "see",
            "index": 81
        },
        {
            "start": 42.86,
            "confidence": 1,
            "end": 42.96,
            "word": "the",
            "punct": "the",
            "index": 82
        },
        {
            "start": 42.96,
            "confidence": 1,
            "end": 43.45,
            "word": "watery",
            "punct": "watery",
            "index": 83
        },
        {
            "start": 43.45,
            "confidence": 1,
            "end": 43.73,
            "word": "part",
            "punct": "part",
            "index": 84
        },
        {
            "start": 43.73,
            "confidence": 1,
            "end": 43.82,
            "word": "of",
            "punct": "of",
            "index": 85
        },
        {
            "start": 43.82,
            "confidence": 1,
            "end": 43.89,
            "word": "the",
            "punct": "the",
            "index": 86
        },
        {
            "start": 43.89,
            "confidence": 1,
            "end": 44.4,
            "word": "world",
            "punct": "world.",
            "index": 87
        },
        {
            "start": 45.08,
            "confidence": 1,
            "end": 45.24,
            "word": "it",
            "punct": "It",
            "index": 88
        },
        {
            "start": 45.24,
            "confidence": 1,
            "end": 45.34,
            "word": "is",
            "punct": "is",
            "index": 89
        },
        {
            "start": 45.34,
            "confidence": 0.87,
            "end": 45.43,
            "word": "a",
            "punct": "a",
            "index": 90
        },
        {
            "start": 45.43,
            "confidence": 0.97,
            "end": 45.64,
            "word": "way",
            "punct": "way",
            "index": 91
        },
        {
            "start": 45.64,
            "confidence": 1,
            "end": 45.78,
            "word": "i",
            "punct": "I",
            "index": 92
        },
        {
            "start": 45.78,
            "confidence": 1,
            "end": 46.17,
            "word": "have",
            "punct": "have",
            "index": 93
        },
        {
            "start": 46.17,
            "confidence": 0.97,
            "end": 46.37,
            "word": "of",
            "punct": "of",
            "index": 94
        },
        {
            "start": 46.37,
            "confidence": 1,
            "end": 46.87,
            "word": "driving",
            "punct": "driving",
            "index": 95
        },
        {
            "start": 46.87,
            "confidence": 1,
            "end": 47.14,
            "word": "off",
            "punct": "off",
            "index": 96
        },
        {
            "start": 47.14,
            "confidence": 0.97,
            "end": 47.24,
            "word": "the",
            "punct": "the",
            "index": 97
        },
        {
            "start": 47.24,
            "confidence": 1,
            "end": 47.85,
            "word": "spleen",
            "punct": "spleen",
            "index": 98
        },
        {
            "start": 47.85,
            "confidence": 0.98,
            "end": 48.08,
            "word": "and",
            "punct": "and",
            "index": 99
        },
        {
            "start": 48.08,
            "confidence": 1,
            "end": 48.68,
            "word": "regulating",
            "punct": "regulating",
            "index": 100
        },
        {
            "start": 48.68,
            "confidence": 0.94,
            "end": 48.76,
            "word": "the",
            "punct": "the",
            "index": 101
        },
        {
            "start": 48.76,
            "confidence": 1,
            "end": 49.68,
            "word": "circulation",
            "punct": "circulation.",
            "index": 102
        },
        {
            "start": 50.51,
            "confidence": 0.99,
            "end": 50.88,
            "word": "whenever",
            "punct": "Whenever",
            "index": 103
        },
        {
            "start": 50.88,
            "confidence": 1,
            "end": 50.98,
            "word": "i",
            "punct": "I",
            "index": 104
        },
        {
            "start": 50.98,
            "confidence": 1,
            "end": 51.29,
            "word": "find",
            "punct": "find",
            "index": 105
        },
        {
            "start": 51.29,
            "confidence": 1,
            "end": 51.82,
            "word": "myself",
            "punct": "myself",
            "index": 106
        },
        {
            "start": 51.82,
            "confidence": 1,
            "end": 52.23,
            "word": "growing",
            "punct": "growing",
            "index": 107
        },
        {
            "start": 52.23,
            "confidence": 1,
            "end": 52.58,
            "word": "grim",
            "punct": "grim",
            "index": 108
        },
        {
            "start": 52.58,
            "confidence": 1,
            "end": 52.9,
            "word": "about",
            "punct": "about",
            "index": 109
        },
        {
            "start": 52.9,
            "confidence": 1,
            "end": 52.98,
            "word": "the",
            "punct": "the",
            "index": 110
        },
        {
            "start": 52.98,
            "confidence": 1,
            "end": 53.49,
            "word": "mouth",
            "punct": "mouth",
            "index": 111
        },
        {
            "start": 53.86,
            "confidence": 1,
            "end": 54.31,
            "word": "whenever",
            "punct": "whenever",
            "index": 112
        },
        {
            "start": 54.31,
            "confidence": 1,
            "end": 54.44,
            "word": "it",
            "punct": "it",
            "index": 113
        },
        {
            "start": 54.44,
            "confidence": 1,
            "end": 54.62,
            "word": "is",
            "punct": "is",
            "index": 114
        },
        {
            "start": 54.62,
            "confidence": 1,
            "end": 54.85,
            "word": "a",
            "punct": "a",
            "index": 115
        },
        {
            "start": 54.85,
            "confidence": 1,
            "end": 55.36,
            "word": "damp",
            "punct": "damp,",
            "index": 116
        },
        {
            "start": 55.36,
            "confidence": 1,
            "end": 55.88,
            "word": "drizzly",
            "punct": "drizzly",
            "index": 117
        },
        {
            "start": 55.88,
            "confidence": 1,
            "end": 56.63,
            "word": "november",
            "punct": "November",
            "index": 118
        },
        {
            "start": 56.63,
            "confidence": 1,
            "end": 56.77,
            "word": "in",
            "punct": "in",
            "index": 119
        },
        {
            "start": 56.77,
            "confidence": 1,
            "end": 57.04,
            "word": "my",
            "punct": "my",
            "index": 120
        },
        {
            "start": 57.04,
            "confidence": 1,
            "end": 57.62,
            "word": "soul",
            "punct": "soul.",
            "index": 121
        },
        {
            "start": 57.99,
            "confidence": 0.99,
            "end": 58.36,
            "word": "whenever",
            "punct": "Whenever",
            "index": 122
        },
        {
            "start": 58.36,
            "confidence": 1,
            "end": 58.45,
            "word": "i",
            "punct": "I",
            "index": 123
        },
        {
            "start": 58.45,
            "confidence": 1,
            "end": 58.79,
            "word": "find",
            "punct": "find",
            "index": 124
        },
        {
            "start": 58.79,
            "confidence": 1,
            "end": 59.41,
            "word": "myself",
            "punct": "myself",
            "index": 125
        },
        {
            "start": 59.41,
            "confidence": 1,
            "end": 60.41,
            "word": "involuntarily",
            "punct": "involuntarily",
            "index": 126
        },
        {
            "start": 60.41,
            "confidence": 1,
            "end": 61.02,
            "word": "pausing",
            "punct": "pausing",
            "index": 127
        },
        {
            "start": 61.02,
            "confidence": 1,
            "end": 61.42,
            "word": "before",
            "punct": "before",
            "index": 128
        },
        {
            "start": 61.48,
            "confidence": 0.99,
            "end": 61.96,
            "word": "coffin",
            "punct": "coffin",
            "index": 129
        },
        {
            "start": 61.96,
            "confidence": 1,
            "end": 62.86,
            "word": "warehouses",
            "punct": "warehouses",
            "index": 130
        },
        {
            "start": 62.86,
            "confidence": 0.89,
            "end": 63.12,
            "word": "and",
            "punct": "and",
            "index": 131
        },
        {
            "start": 63.12,
            "confidence": 0.99,
            "end": 63.46,
            "word": "bringing",
            "punct": "bringing",
            "index": 132
        },
        {
            "start": 63.46,
            "confidence": 1,
            "end": 63.66,
            "word": "up",
            "punct": "up",
            "index": 133
        },
        {
            "start": 63.66,
            "confidence": 1,
            "end": 63.79,
            "word": "the",
            "punct": "the",
            "index": 134
        },
        {
            "start": 63.79,
            "confidence": 1,
            "end": 64.22,
            "word": "rear",
            "punct": "rear",
            "index": 135
        },
        {
            "start": 64.22,
            "confidence": 0.97,
            "end": 64.38,
            "word": "of",
            "punct": "of",
            "index": 136
        },
        {
            "start": 64.38,
            "confidence": 1,
            "end": 64.77,
            "word": "every",
            "punct": "every",
            "index": 137
        },
        {
            "start": 64.77,
            "confidence": 1,
            "end": 65.54,
            "word": "funeral",
            "punct": "funeral.",
            "index": 138
        },
        {
            "start": 65.54,
            "confidence": 0.78,
            "end": 65.68,
            "word": "i",
            "punct": "I",
            "index": 139
        },
        {
            "start": 65.68,
            "confidence": 0.83,
            "end": 66.05,
            "word": "meet",
            "punct": "meet",
            "index": 140
        },
        {
            "start": 66.48,
            "confidence": 0.99,
            "end": 66.65,
            "word": "and",
            "punct": "and",
            "index": 141
        },
        {
            "start": 66.65,
            "confidence": 0.72,
            "end": 67.21,
            "word": "especially",
            "punct": "especially",
            "index": 142
        },
        {
            "start": 67.39,
            "confidence": 0.96,
            "end": 67.78,
            "word": "whenever",
            "punct": "whenever",
            "index": 143
        },
        {
            "start": 67.78,
            "confidence": 1,
            "end": 68.08,
            "word": "my",
            "punct": "my",
            "index": 144
        },
        {
            "start": 68.08,
            "confidence": 1,
            "end": 68.77,
            "word": "hypos",
            "punct": "hypos",
            "index": 145
        },
        {
            "start": 68.77,
            "confidence": 0.7,
            "end": 68.98,
            "word": "get",
            "punct": "get",
            "index": 146
        },
        {
            "start": 68.98,
            "confidence": 1,
            "end": 69.23,
            "word": "such",
            "punct": "such",
            "index": 147
        },
        {
            "start": 69.23,
            "confidence": 0.99,
            "end": 69.33,
            "word": "an",
            "punct": "an",
            "index": 148
        },
        {
            "start": 69.36,
            "confidence": 1,
            "end": 69.68,
            "word": "upper",
            "punct": "upper",
            "index": 149
        },
        {
            "start": 69.68,
            "confidence": 1,
            "end": 70.13,
            "word": "hand",
            "punct": "hand",
            "index": 150
        },
        {
            "start": 70.13,
            "confidence": 1,
            "end": 70.48,
            "word": "me",
            "punct": "me",
            "index": 151
        },
        {
            "start": 70.84,
            "confidence": 1,
            "end": 71.08,
            "word": "that",
            "punct": "that",
            "index": 152
        },
        {
            "start": 71.1,
            "confidence": 1,
            "end": 71.7,
            "word": "requires",
            "punct": "requires",
            "index": 153
        },
        {
            "start": 71.7,
            "confidence": 0.91,
            "end": 71.81,
            "word": "a",
            "punct": "a",
            "index": 154
        },
        {
            "start": 71.83,
            "confidence": 1,
            "end": 72.4,
            "word": "strong",
            "punct": "strong",
            "index": 155
        },
        {
            "start": 72.4,
            "confidence": 1,
            "end": 72.76,
            "word": "moral",
            "punct": "moral",
            "index": 156
        },
        {
            "start": 72.76,
            "confidence": 0.99,
            "end": 73.38,
            "word": "principle",
            "punct": "principle",
            "index": 157
        },
        {
            "start": 73.38,
            "confidence": 1,
            "end": 73.48,
            "word": "to",
            "punct": "to",
            "index": 158
        },
        {
            "start": 73.48,
            "confidence": 1,
            "end": 73.86,
            "word": "prevent",
            "punct": "prevent",
            "index": 159
        },
        {
            "start": 73.86,
            "confidence": 1,
            "end": 74.07,
            "word": "me",
            "punct": "me",
            "index": 160
        },
        {
            "start": 74.07,
            "confidence": 1,
            "end": 74.31,
            "word": "from",
            "punct": "from",
            "index": 161
        },
        {
            "start": 74.31,
            "confidence": 1,
            "end": 74.95,
            "word": "deliberately",
            "punct": "deliberately",
            "index": 162
        },
        {
            "start": 74.95,
            "confidence": 1,
            "end": 75.45,
            "word": "stepping",
            "punct": "stepping",
            "index": 163
        },
        {
            "start": 75.45,
            "confidence": 1,
            "end": 75.66,
            "word": "into",
            "punct": "into",
            "index": 164
        },
        {
            "start": 75.66,
            "confidence": 1,
            "end": 75.78,
            "word": "the",
            "punct": "the",
            "index": 165
        },
        {
            "start": 75.78,
            "confidence": 1,
            "end": 76.22,
            "word": "street",
            "punct": "street",
            "index": 166
        },
        {
            "start": 76.52,
            "confidence": 1,
            "end": 76.7,
            "word": "and",
            "punct": "and",
            "index": 167
        },
        {
            "start": 76.7,
            "confidence": 1,
            "end": 77.36,
            "word": "methodically",
            "punct": "methodically.",
            "index": 168
        },
        {
            "start": 77.36,
            "confidence": 1,
            "end": 77.88,
            "word": "knocking",
            "punct": "Knocking",
            "index": 169
        },
        {
            "start": 77.88,
            "confidence": 1,
            "end": 78.34,
            "word": "people's",
            "punct": "people's",
            "index": 170
        },
        {
            "start": 78.34,
            "confidence": 1,
            "end": 78.73,
            "word": "hats",
            "punct": "hats",
            "index": 171
        },
        {
            "start": 78.73,
            "confidence": 1,
            "end": 79.16,
            "word": "off",
            "punct": "off.",
            "index": 172
        },
        {
            "start": 79.77,
            "confidence": 1,
            "end": 80.16,
            "word": "then",
            "punct": "Then",
            "index": 173
        },
        {
            "start": 80.16,
            "confidence": 0.99,
            "end": 80.31,
            "word": "i",
            "punct": "I",
            "index": 174
        },
        {
            "start": 80.31,
            "confidence": 0.56,
            "end": 80.56,
            "word": "account",
            "punct": "account,",
            "index": 175
        },
        {
            "start": 80.56,
            "confidence": 0.56,
            "end": 80.84,
            "word": "it",
            "punct": "it",
            "index": 176
        },
        {
            "start": 80.84,
            "confidence": 0.85,
            "end": 81.13,
            "word": "high",
            "punct": "high",
            "index": 177
        },
        {
            "start": 81.13,
            "confidence": 1,
            "end": 81.52,
            "word": "time",
            "punct": "time",
            "index": 178
        },
        {
            "start": 81.52,
            "confidence": 1,
            "end": 81.63,
            "word": "to",
            "punct": "to",
            "index": 179
        },
        {
            "start": 81.63,
            "confidence": 1,
            "end": 81.86,
            "word": "get",
            "punct": "get",
            "index": 180
        },
        {
            "start": 81.86,
            "confidence": 1,
            "end": 82.01,
            "word": "to",
            "punct": "to",
            "index": 181
        },
        {
            "start": 82.01,
            "confidence": 0.94,
            "end": 82.46,
            "word": "sea",
            "punct": "sea.",
            "index": 182
        },
        {
            "start": 82.46,
            "confidence": 1,
            "end": 82.59,
            "word": "as",
            "punct": "As",
            "index": 183
        },
        {
            "start": 82.59,
            "confidence": 1,
            "end": 82.82,
            "word": "soon",
            "punct": "soon",
            "index": 184
        },
        {
            "start": 82.82,
            "confidence": 1,
            "end": 82.98,
            "word": "as",
            "punct": "as",
            "index": 185
        },
        {
            "start": 82.98,
            "confidence": 1,
            "end": 83.1,
            "word": "i",
            "punct": "I",
            "index": 186
        },
        {
            "start": 83.1,
            "confidence": 1,
            "end": 83.76,
            "word": "can",
            "punct": "can.",
            "index": 187
        },
        {
            "start": 84.32,
            "confidence": 1,
            "end": 84.55,
            "word": "this",
            "punct": "This",
            "index": 188
        },
        {
            "start": 84.55,
            "confidence": 1,
            "end": 84.7,
            "word": "is",
            "punct": "is",
            "index": 189
        },
        {
            "start": 84.7,
            "confidence": 1,
            "end": 84.98,
            "word": "my",
            "punct": "my",
            "index": 190
        },
        {
            "start": 84.98,
            "confidence": 1,
            "end": 85.73,
            "word": "substitute",
            "punct": "substitute",
            "index": 191
        },
        {
            "start": 85.73,
            "confidence": 1,
            "end": 86.04,
            "word": "for",
            "punct": "for",
            "index": 192
        },
        {
            "start": 86.04,
            "confidence": 0.56,
            "end": 86.09,
            "word": "a",
            "punct": "a",
            "index": 193
        },
        {
            "start": 86.1,
            "confidence": 1,
            "end": 86.66,
            "word": "pistol",
            "punct": "pistol",
            "index": 194
        },
        {
            "start": 86.66,
            "confidence": 0.98,
            "end": 86.83,
            "word": "and",
            "punct": "and",
            "index": 195
        },
        {
            "start": 86.83,
            "confidence": 0.63,
            "end": 87.35,
            "word": "ball",
            "punct": "ball",
            "index": 196
        },
        {
            "start": 87.82,
            "confidence": 0.82,
            "end": 88.07,
            "word": "with",
            "punct": "with",
            "index": 197
        },
        {
            "start": 88.1,
            "confidence": 0.68,
            "end": 88.29,
            "word": "the",
            "punct": "the",
            "index": 198
        },
        {
            "start": 88.29,
            "confidence": 1,
            "end": 89.08,
            "word": "philosophical",
            "punct": "philosophical",
            "index": 199
        },
        {
            "start": 89.08,
            "confidence": 0.95,
            "end": 89.62,
            "word": "flourish",
            "punct": "flourish.",
            "index": 200
        },
        {
            "start": 89.62,
            "confidence": 0.73,
            "end": 90.08,
            "word": "cadeau",
            "punct": "Cadeau",
            "index": 201
        },
        {
            "start": 90.08,
            "confidence": 1,
            "end": 90.44,
            "word": "throws",
            "punct": "throws",
            "index": 202
        },
        {
            "start": 90.44,
            "confidence": 1,
            "end": 90.89,
            "word": "himself",
            "punct": "himself",
            "index": 203
        },
        {
            "start": 90.89,
            "confidence": 1,
            "end": 91.2,
            "word": "upon",
            "punct": "upon",
            "index": 204
        },
        {
            "start": 91.2,
            "confidence": 1,
            "end": 91.36,
            "word": "his",
            "punct": "his",
            "index": 205
        },
        {
            "start": 91.36,
            "confidence": 1,
            "end": 91.88,
            "word": "sword",
            "punct": "sword.",
            "index": 206
        },
        {
            "start": 92.43,
            "confidence": 0.98,
            "end": 92.76,
            "word": "i",
            "punct": "I",
            "index": 207
        },
        {
            "start": 92.78,
            "confidence": 1,
            "end": 93.36,
            "word": "quietly",
            "punct": "quietly",
            "index": 208
        },
        {
            "start": 93.36,
            "confidence": 1,
            "end": 93.7,
            "word": "take",
            "punct": "take",
            "index": 209
        },
        {
            "start": 93.7,
            "confidence": 0.92,
            "end": 93.81,
            "word": "to",
            "punct": "to",
            "index": 210
        },
        {
            "start": 93.81,
            "confidence": 0.75,
            "end": 93.93,
            "word": "the",
            "punct": "the",
            "index": 211
        },
        {
            "start": 93.93,
            "confidence": 1,
            "end": 94.45,
            "word": "ship",
            "punct": "ship.",
            "index": 212
        },
        {
            "start": 95.18,
            "confidence": 0.97,
            "end": 95.36,
            "word": "there",
            "punct": "There",
            "index": 213
        },
        {
            "start": 95.37,
            "confidence": 0.97,
            "end": 95.49,
            "word": "is",
            "punct": "is",
            "index": 214
        },
        {
            "start": 95.49,
            "confidence": 1,
            "end": 95.81,
            "word": "nothing",
            "punct": "nothing",
            "index": 215
        },
        {
            "start": 95.81,
            "confidence": 1,
            "end": 96.57,
            "word": "surprising",
            "punct": "surprising",
            "index": 216
        },
        {
            "start": 96.57,
            "confidence": 1,
            "end": 96.72,
            "word": "in",
            "punct": "in",
            "index": 217
        },
        {
            "start": 96.72,
            "confidence": 1,
            "end": 97.08,
            "word": "this",
            "punct": "this.",
            "index": 218
        },
        {
            "start": 97.68,
            "confidence": 1,
            "end": 97.86,
            "word": "if",
            "punct": "If",
            "index": 219
        },
        {
            "start": 97.86,
            "confidence": 1,
            "end": 98.04,
            "word": "they",
            "punct": "they.",
            "index": 220
        },
        {
            "start": 98.04,
            "confidence": 0.89,
            "end": 98.2,
            "word": "but",
            "punct": "But",
            "index": 221
        },
        {
            "start": 98.21,
            "confidence": 1,
            "end": 98.45,
            "word": "knew",
            "punct": "knew",
            "index": 222
        },
        {
            "start": 98.45,
            "confidence": 0.98,
            "end": 98.6,
            "word": "it",
            "punct": "it",
            "index": 223
        },
        {
            "start": 98.93,
            "confidence": 1,
            "end": 99.38,
            "word": "almost",
            "punct": "almost",
            "index": 224
        },
        {
            "start": 99.38,
            "confidence": 1,
            "end": 99.6,
            "word": "all",
            "punct": "all",
            "index": 225
        },
        {
            "start": 99.6,
            "confidence": 1,
            "end": 99.93,
            "word": "men",
            "punct": "men",
            "index": 226
        },
        {
            "start": 99.93,
            "confidence": 1,
            "end": 100.06,
            "word": "in",
            "punct": "in",
            "index": 227
        },
        {
            "start": 100.06,
            "confidence": 1,
            "end": 100.26,
            "word": "their",
            "punct": "their",
            "index": 228
        },
        {
            "start": 100.26,
            "confidence": 0.69,
            "end": 100.94,
            "word": "degrees",
            "punct": "degrees.",
            "index": 229
        },
        {
            "start": 100.95,
            "confidence": 0.65,
            "end": 101.14,
            "word": "some",
            "punct": "Some",
            "index": 230
        },
        {
            "start": 101.14,
            "confidence": 0.64,
            "end": 101.55,
            "word": "time",
            "punct": "time",
            "index": 231
        },
        {
            "start": 101.55,
            "confidence": 0.98,
            "end": 101.73,
            "word": "or",
            "punct": "or",
            "index": 232
        },
        {
            "start": 101.72,
            "confidence": 0.97,
            "end": 102.07,
            "word": "other",
            "punct": "other,",
            "index": 233
        },
        {
            "start": 102.37,
            "confidence": 0.54,
            "end": 102.92,
            "word": "cherish",
            "punct": "cherish",
            "index": 234
        },
        {
            "start": 102.92,
            "confidence": 1,
            "end": 103.22,
            "word": "very",
            "punct": "very",
            "index": 235
        },
        {
            "start": 103.22,
            "confidence": 1,
            "end": 103.65,
            "word": "nearly",
            "punct": "nearly",
            "index": 236
        },
        {
            "start": 103.65,
            "confidence": 1,
            "end": 103.75,
            "word": "the",
            "punct": "the",
            "index": 237
        },
        {
            "start": 103.75,
            "confidence": 1,
            "end": 104.07,
            "word": "same",
            "punct": "same",
            "index": 238
        },
        {
            "start": 104.07,
            "confidence": 1,
            "end": 104.61,
            "word": "feelings",
            "punct": "feelings",
            "index": 239
        },
        {
            "start": 104.61,
            "confidence": 1,
            "end": 104.98,
            "word": "towards",
            "punct": "towards",
            "index": 240
        },
        {
            "start": 104.98,
            "confidence": 1,
            "end": 105.14,
            "word": "the",
            "punct": "the",
            "index": 241
        },
        {
            "start": 105.14,
            "confidence": 1,
            "end": 105.51,
            "word": "ocean",
            "punct": "ocean",
            "index": 242
        },
        {
            "start": 105.51,
            "confidence": 1,
            "end": 105.68,
            "word": "with",
            "punct": "with",
            "index": 243
        },
        {
            "start": 105.68,
            "confidence": 1,
            "end": 106.13,
            "word": "me",
            "punct": "me",
            "index": 244
        }
    ]
    // array of words, each .end, .start., .transcript_text;
    // const humanCorrectedTranscription = fs.readFileSync('./sample-data/moby-dick/moby-dick-chapter-1.txt').toString();
const humanCorrectedTranscription = `Call me Ishmael. Some years ago—never mind how long precisely—having
little or no money in my purse, and nothing particular to interest me
on shore, I thought I would sail about a little and see the watery part
of the world. It is a way I have of driving off the spleen and
regulating the circulation. Whenever I find myself growing grim about
the mouth; whenever it is a damp, drizzly November in my soul; whenever
I find myself involuntarily pausing before coffin warehouses, and
bringing up the rear of every funeral I meet; and especially whenever
my hypos get such an upper hand of me, that it requires a strong moral
principle to prevent me from deliberately stepping into the street, and
methodically knocking people’s hats off—then, I account it high time to
get to sea as soon as I can. This is my substitute for pistol and ball.
With a philosophical flourish Cato throws himself upon his sword; I
quietly take to the ship. There is nothing surprising in this. If they
but knew it, almost all men in their degree, some time or other,
cherish very nearly the same feelings towards the ocean with me.`;

// const expectedOutput = require('../../sample-output/moby-dick-sample-line-aligned-output.json')
const expectedOutput = [{
        "start": 29.11,
        "end": 30.35,
        "text": "Call me Ishmael.",
        "words": [{
                "start": 29.11,
                "end": 29.41,
                "text": "Call"
            },
            {
                "start": 29.41,
                "end": 29.63,
                "text": "me"
            },
            {
                "start": 29.63,
                "end": 30.35,
                "text": "Ishmael."
            }
        ]
    },
    {
        "start": 30.9,
        "end": 35.42,
        "text": "Some years ago—never mind how long precisely—having",
        "words": [{
                "start": 30.9,
                "end": 31.21,
                "text": "Some"
            },
            {
                "start": 31.21,
                "end": 31.57,
                "text": "years"
            },
            {
                "start": 31.57,
                "end": 32.13,
                "text": "ago."
            },
            {
                "start": 32.29,
                "end": 32.66,
                "text": "Never"
            },
            {
                "start": 32.66,
                "end": 33.18,
                "text": "mind."
            },
            {
                "start": 33.18,
                "end": 33.46,
                "text": "How"
            },
            {
                "start": 33.46,
                "end": 33.91,
                "text": "long"
            },
            {
                "start": 33.91,
                "end": 34.64,
                "text": "precisely,"
            },
            {
                "start": 35.06,
                "end": 35.42,
                "text": "having"
            }
        ]
    },
    {
        "start": 35.42,
        "end": 39.37,
        "text": "little or no money in my purse, and nothing particular to interest me",
        "words": [{
                "start": 35.42,
                "end": 35.73,
                "text": "little"
            },
            {
                "start": 35.73,
                "end": 35.82,
                "text": "or"
            },
            {
                "start": 35.82,
                "end": 36.05,
                "text": "no"
            },
            {
                "start": 36.05,
                "end": 36.47,
                "text": "money"
            },
            {
                "start": 36.47,
                "end": 36.58,
                "text": "in"
            },
            {
                "start": 36.58,
                "end": 36.81,
                "text": "my"
            },
            {
                "start": 36.81,
                "end": 37.36,
                "text": "purse"
            },
            {
                "start": 37.36,
                "end": 37.48,
                "text": "and"
            },
            {
                "start": 37.48,
                "end": 37.92,
                "text": "nothing"
            },
            {
                "start": 37.92,
                "end": 38.57,
                "text": "particular"
            },
            {
                "start": 38.57,
                "end": 38.73,
                "text": "to"
            },
            {
                "start": 38.76,
                "end": 39.22,
                "text": "interest"
            },
            {
                "start": 39.22,
                "end": 39.37,
                "text": "me"
            }
        ]
    },
    {
        "start": 39.37,
        "end": 43.73,
        "text": "on shore, I thought I would sail about a little and see the watery part",
        "words": [{
                "start": 39.37,
                "end": 40.03,
                "text": "onshore,"
            },
            {
                "start": 40.53,
                "end": 40.68,
                "text": "I"
            },
            {
                "start": 40.68,
                "end": 40.91,
                "text": "thought"
            },
            {
                "start": 40.91,
                "end": 41.01,
                "text": "I"
            },
            {
                "start": 41.01,
                "end": 41.16,
                "text": "would"
            },
            {
                "start": 41.16,
                "end": 41.51,
                "text": "sail"
            },
            {
                "start": 41.51,
                "end": 41.82,
                "text": "about"
            },
            {
                "start": 41.82,
                "end": 41.87,
                "text": "a"
            },
            {
                "start": 41.87,
                "end": 42.26,
                "text": "little"
            },
            {
                "start": 42.47,
                "end": 42.63,
                "text": "and"
            },
            {
                "start": 42.63,
                "end": 42.86,
                "text": "see"
            },
            {
                "start": 42.86,
                "end": 42.96,
                "text": "the"
            },
            {
                "start": 42.96,
                "end": 43.45,
                "text": "watery"
            },
            {
                "start": 43.45,
                "end": 43.73,
                "text": "part"
            }
        ]
    },
    {
        "start": 43.73,
        "end": 44.4,
        "text": "of the world.",
        "words": [{
                "start": 43.73,
                "end": 43.82,
                "text": "of"
            },
            {
                "start": 43.82,
                "end": 43.89,
                "text": "the"
            },
            {
                "start": 43.89,
                "end": 44.4,
                "text": "world."
            }
        ]
    },
    {
        "start": 45.08,
        "end": 48.08,
        "text": "It is a way I have of driving off the spleen and",
        "words": [{
                "start": 45.08,
                "end": 45.24,
                "text": "It"
            },
            {
                "start": 45.24,
                "end": 45.34,
                "text": "is"
            },
            {
                "start": 45.34,
                "end": 45.43,
                "text": "a"
            },
            {
                "start": 45.43,
                "end": 45.64,
                "text": "way"
            },
            {
                "start": 45.64,
                "end": 45.78,
                "text": "I"
            },
            {
                "start": 45.78,
                "end": 46.17,
                "text": "have"
            },
            {
                "start": 46.17,
                "end": 46.37,
                "text": "of"
            },
            {
                "start": 46.37,
                "end": 46.87,
                "text": "driving"
            },
            {
                "start": 46.87,
                "end": 47.14,
                "text": "off"
            },
            {
                "start": 47.14,
                "end": 47.24,
                "text": "the"
            },
            {
                "start": 47.24,
                "end": 47.85,
                "text": "spleen"
            },
            {
                "start": 47.85,
                "end": 48.08,
                "text": "and"
            }
        ]
    },
    {
        "start": 48.08,
        "end": 49.68,
        "text": "regulating the circulation.",
        "words": [{
                "start": 48.08,
                "end": 48.68,
                "text": "regulating"
            },
            {
                "start": 48.68,
                "end": 48.76,
                "text": "the"
            },
            {
                "start": 48.76,
                "end": 49.68,
                "text": "circulation."
            }
        ]
    },
    {
        "start": 50.51,
        "end": 52.9,
        "text": "Whenever I find myself growing grim about",
        "words": [{
                "start": 50.51,
                "end": 50.88,
                "text": "Whenever"
            },
            {
                "start": 50.88,
                "end": 50.98,
                "text": "I"
            },
            {
                "start": 50.98,
                "end": 51.29,
                "text": "find"
            },
            {
                "start": 51.29,
                "end": 51.82,
                "text": "myself"
            },
            {
                "start": 51.82,
                "end": 52.23,
                "text": "growing"
            },
            {
                "start": 52.23,
                "end": 52.58,
                "text": "grim"
            },
            {
                "start": 52.58,
                "end": 52.9,
                "text": "about"
            }
        ]
    },
    {
        "start": 52.9,
        "end": 58.36,
        "text": "the mouth; whenever it is a damp, drizzly November in my soul; whenever",
        "words": [{
                "start": 52.9,
                "end": 52.98,
                "text": "the"
            },
            {
                "start": 52.98,
                "end": 53.49,
                "text": "mouth"
            },
            {
                "start": 53.86,
                "end": 54.31,
                "text": "whenever"
            },
            {
                "start": 54.31,
                "end": 54.44,
                "text": "it"
            },
            {
                "start": 54.44,
                "end": 54.62,
                "text": "is"
            },
            {
                "start": 54.62,
                "end": 54.85,
                "text": "a"
            },
            {
                "start": 54.85,
                "end": 55.36,
                "text": "damp,"
            },
            {
                "start": 55.36,
                "end": 55.88,
                "text": "drizzly"
            },
            {
                "start": 55.88,
                "end": 56.63,
                "text": "November"
            },
            {
                "start": 56.63,
                "end": 56.77,
                "text": "in"
            },
            {
                "start": 56.77,
                "end": 57.04,
                "text": "my"
            },
            {
                "start": 57.04,
                "end": 57.62,
                "text": "soul."
            },
            {
                "start": 57.99,
                "end": 58.36,
                "text": "Whenever"
            }
        ]
    },
    {
        "start": 58.36,
        "end": 63.12,
        "text": "I find myself involuntarily pausing before coffin warehouses, and",
        "words": [{
                "start": 58.36,
                "end": 58.45,
                "text": "I"
            },
            {
                "start": 58.45,
                "end": 58.79,
                "text": "find"
            },
            {
                "start": 58.79,
                "end": 59.41,
                "text": "myself"
            },
            {
                "start": 59.41,
                "end": 60.41,
                "text": "involuntarily"
            },
            {
                "start": 60.41,
                "end": 61.02,
                "text": "pausing"
            },
            {
                "start": 61.02,
                "end": 61.42,
                "text": "before"
            },
            {
                "start": 61.48,
                "end": 61.96,
                "text": "coffin"
            },
            {
                "start": 61.96,
                "end": 62.86,
                "text": "warehouses"
            },
            {
                "start": 62.86,
                "end": 63.12,
                "text": "and"
            }
        ]
    },
    {
        "start": 63.12,
        "end": 67.78,
        "text": "bringing up the rear of every funeral I meet; and especially whenever",
        "words": [{
                "start": 63.12,
                "end": 63.46,
                "text": "bringing"
            },
            {
                "start": 63.46,
                "end": 63.66,
                "text": "up"
            },
            {
                "start": 63.66,
                "end": 63.79,
                "text": "the"
            },
            {
                "start": 63.79,
                "end": 64.22,
                "text": "rear"
            },
            {
                "start": 64.22,
                "end": 64.38,
                "text": "of"
            },
            {
                "start": 64.38,
                "end": 64.77,
                "text": "every"
            },
            {
                "start": 64.77,
                "end": 65.54,
                "text": "funeral."
            },
            {
                "start": 65.54,
                "end": 65.68,
                "text": "I"
            },
            {
                "start": 65.68,
                "end": 66.05,
                "text": "meet"
            },
            {
                "start": 66.48,
                "end": 66.65,
                "text": "and"
            },
            {
                "start": 66.65,
                "end": 67.21,
                "text": "especially"
            },
            {
                "start": 67.39,
                "end": 67.78,
                "text": "whenever"
            }
        ]
    },
    {
        "start": 67.78,
        "end": 72.76,
        "text": "my hypos get such an upper hand of me, that it requires a strong moral",
        "words": [{
                "start": 67.78,
                "end": 68.08,
                "text": "my"
            },
            {
                "start": 68.08,
                "end": 68.77,
                "text": "hypos"
            },
            {
                "start": 68.77,
                "end": 68.98,
                "text": "get"
            },
            {
                "start": 68.98,
                "end": 69.23,
                "text": "such"
            },
            {
                "start": 69.23,
                "end": 69.33,
                "text": "an"
            },
            {
                "start": 69.36,
                "end": 69.68,
                "text": "upper"
            },
            {
                "start": 69.68,
                "end": 70.13,
                "text": "hand"
            },
            {
                "start": 70.13,
                "end": 70.48,
                "text": "me"
            },
            {
                "start": 70.84,
                "end": 71.08,
                "text": "that"
            },
            {
                "start": 71.1,
                "end": 71.7,
                "text": "requires"
            },
            {
                "start": 71.7,
                "end": 71.81,
                "text": "a"
            },
            {
                "start": 71.83,
                "end": 72.4,
                "text": "strong"
            },
            {
                "start": 72.4,
                "end": 72.76,
                "text": "moral"
            }
        ]
    },
    {
        "start": 72.76,
        "end": 76.7,
        "text": "principle to prevent me from deliberately stepping into the street, and",
        "words": [{
                "start": 72.76,
                "end": 73.38,
                "text": "principle"
            },
            {
                "start": 73.38,
                "end": 73.48,
                "text": "to"
            },
            {
                "start": 73.48,
                "end": 73.86,
                "text": "prevent"
            },
            {
                "start": 73.86,
                "end": 74.07,
                "text": "me"
            },
            {
                "start": 74.07,
                "end": 74.31,
                "text": "from"
            },
            {
                "start": 74.31,
                "end": 74.95,
                "text": "deliberately"
            },
            {
                "start": 74.95,
                "end": 75.45,
                "text": "stepping"
            },
            {
                "start": 75.45,
                "end": 75.66,
                "text": "into"
            },
            {
                "start": 75.66,
                "end": 75.78,
                "text": "the"
            },
            {
                "start": 75.78,
                "end": 76.22,
                "text": "street"
            },
            {
                "start": 76.52,
                "end": 76.7,
                "text": "and"
            }
        ]
    },
    {
        "start": 76.7,
        "end": 81.63,
        "text": "methodically knocking people’s hats off—then, I account it high time to",
        "words": [{
                "start": 76.7,
                "end": 77.36,
                "text": "methodically."
            },
            {
                "start": 77.36,
                "end": 77.88,
                "text": "Knocking"
            },
            {
                "start": 77.88,
                "end": 78.34,
                "text": "people's"
            },
            {
                "start": 78.34,
                "end": 78.73,
                "text": "hats"
            },
            {
                "start": 78.73,
                "end": 79.16,
                "text": "off."
            },
            {
                "start": 79.77,
                "end": 80.16,
                "text": "Then"
            },
            {
                "start": 80.16,
                "end": 80.31,
                "text": "I"
            },
            {
                "start": 80.31,
                "end": 80.56,
                "text": "account,"
            },
            {
                "start": 80.56,
                "end": 80.84,
                "text": "it"
            },
            {
                "start": 80.84,
                "end": 81.13,
                "text": "high"
            },
            {
                "start": 81.13,
                "end": 81.52,
                "text": "time"
            },
            {
                "start": 81.52,
                "end": 81.63,
                "text": "to"
            }
        ]
    },
    {
        "start": 81.63,
        "end": 83.76,
        "text": "get to sea as soon as I can.",
        "words": [{
                "start": 81.63,
                "end": 81.86,
                "text": "get"
            },
            {
                "start": 81.86,
                "end": 82.01,
                "text": "to"
            },
            {
                "start": 82.01,
                "end": 82.46,
                "text": "sea."
            },
            {
                "start": 82.46,
                "end": 82.59,
                "text": "As"
            },
            {
                "start": 82.59,
                "end": 82.82,
                "text": "soon"
            },
            {
                "start": 82.82,
                "end": 82.98,
                "text": "as"
            },
            {
                "start": 82.98,
                "end": 83.1,
                "text": "I"
            },
            {
                "start": 83.1,
                "end": 83.76,
                "text": "can."
            }
        ]
    },
    {
        "start": 84.32,
        "end": 87.35,
        "text": "This is my substitute for pistol and ball.",
        "words": [{
                "start": 84.32,
                "end": 84.55,
                "text": "This"
            },
            {
                "start": 84.55,
                "end": 84.7,
                "text": "is"
            },
            {
                "start": 84.7,
                "end": 84.98,
                "text": "my"
            },
            {
                "start": 84.98,
                "end": 85.73,
                "text": "substitute"
            },
            {
                "start": 85.73,
                "end": 86.04,
                "text": "for"
            },
            {
                "start": 86.04,
                "end": 86.09,
                "text": "a"
            },
            {
                "start": 86.1,
                "end": 86.66,
                "text": "pistol"
            },
            {
                "start": 86.66,
                "end": 86.83,
                "text": "and"
            },
            {
                "start": 86.83,
                "end": 87.35,
                "text": "ball"
            }
        ]
    },
    {
        "start": 87.82,
        "end": 92.76,
        "text": "With a philosophical flourish Cato throws himself upon his sword; I",
        "words": [{
                "start": 87.82,
                "end": 88.07,
                "text": "with"
            },
            {
                "start": 88.1,
                "end": 88.29,
                "text": "the"
            },
            {
                "start": 88.29,
                "end": 89.08,
                "text": "philosophical"
            },
            {
                "start": 89.08,
                "end": 89.62,
                "text": "flourish."
            },
            {
                "start": 89.62,
                "end": 90.08,
                "text": "Cadeau"
            },
            {
                "start": 90.08,
                "end": 90.44,
                "text": "throws"
            },
            {
                "start": 90.44,
                "end": 90.89,
                "text": "himself"
            },
            {
                "start": 90.89,
                "end": 91.2,
                "text": "upon"
            },
            {
                "start": 91.2,
                "end": 91.36,
                "text": "his"
            },
            {
                "start": 91.36,
                "end": 91.88,
                "text": "sword."
            },
            {
                "start": 92.43,
                "end": 92.76,
                "text": "I"
            }
        ]
    },
    {
        "start": 92.78,
        "end": 94.45,
        "text": "quietly take to the ship.",
        "words": [{
                "start": 92.78,
                "end": 93.36,
                "text": "quietly"
            },
            {
                "start": 93.36,
                "end": 93.7,
                "text": "take"
            },
            {
                "start": 93.7,
                "end": 93.81,
                "text": "to"
            },
            {
                "start": 93.81,
                "end": 93.93,
                "text": "the"
            },
            {
                "start": 93.93,
                "end": 94.45,
                "text": "ship."
            }
        ]
    },
    {
        "start": 95.18,
        "end": 97.08,
        "text": "There is nothing surprising in this.",
        "words": [{
                "start": 95.18,
                "end": 95.36,
                "text": "There"
            },
            {
                "start": 95.37,
                "end": 95.49,
                "text": "is"
            },
            {
                "start": 95.49,
                "end": 95.81,
                "text": "nothing"
            },
            {
                "start": 95.81,
                "end": 96.57,
                "text": "surprising"
            },
            {
                "start": 96.57,
                "end": 96.72,
                "text": "in"
            },
            {
                "start": 96.72,
                "end": 97.08,
                "text": "this."
            }
        ]
    },
    {
        "start": 97.68,
        "end": 98.04,
        "text": "If they",
        "words": [{
                "start": 97.68,
                "end": 97.86,
                "text": "If"
            },
            {
                "start": 97.86,
                "end": 98.04,
                "text": "they."
            }
        ]
    },
    {
        "start": 98.04,
        "end": 102.07,
        "text": "but knew it, almost all men in their degree, some time or other,",
        "words": [{
                "start": 98.04,
                "end": 98.2,
                "text": "But"
            },
            {
                "start": 98.21,
                "end": 98.45,
                "text": "knew"
            },
            {
                "start": 98.45,
                "end": 98.6,
                "text": "it"
            },
            {
                "start": 98.93,
                "end": 99.38,
                "text": "almost"
            },
            {
                "start": 99.38,
                "end": 99.6,
                "text": "all"
            },
            {
                "start": 99.6,
                "end": 99.93,
                "text": "men"
            },
            {
                "start": 99.93,
                "end": 100.06,
                "text": "in"
            },
            {
                "start": 100.06,
                "end": 100.26,
                "text": "their"
            },
            {
                "start": 100.26,
                "end": 100.94,
                "text": "degrees."
            },
            {
                "start": 100.95,
                "end": 101.14,
                "text": "Some"
            },
            {
                "start": 101.14,
                "end": 101.55,
                "text": "time"
            },
            {
                "start": 101.55,
                "end": 101.73,
                "text": "or"
            },
            {
                "start": 101.72,
                "end": 102.07,
                "text": "other,"
            }
        ]
    },
    {
        "start": 102.37,
        "end": 106.13,
        "text": "cherish very nearly the same feelings towards the ocean with me.",
        "words": [{
                "start": 102.37,
                "end": 102.92,
                "text": "cherish"
            },
            {
                "start": 102.92,
                "end": 103.22,
                "text": "very"
            },
            {
                "start": 103.22,
                "end": 103.65,
                "text": "nearly"
            },
            {
                "start": 103.65,
                "end": 103.75,
                "text": "the"
            },
            {
                "start": 103.75,
                "end": 104.07,
                "text": "same"
            },
            {
                "start": 104.07,
                "end": 104.61,
                "text": "feelings"
            },
            {
                "start": 104.61,
                "end": 104.98,
                "text": "towards"
            },
            {
                "start": 104.98,
                "end": 105.14,
                "text": "the"
            },
            {
                "start": 105.14,
                "end": 105.51,
                "text": "ocean"
            },
            {
                "start": 105.51,
                "end": 105.68,
                "text": "with"
            },
            {
                "start": 105.68,
                "end": 106.13,
                "text": "me"
            }
        ]
    }
]

test.skip('align automated text with timecodes with correct text no timecodes', () => {
    const reAlignedTranscription = align(humanCorrectedTranscription, automatedTranscription, 'punct');

    expect(reAlignedTranscription).toEqual(expectedOutput);
});