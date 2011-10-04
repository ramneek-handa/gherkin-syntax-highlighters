if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['gherkin_nl'] = [
  [
    [
      /#/g,
      'sh_comment',
      1
    ],
    [
      /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
      'sh_number',
      -1
    ],
    [
      /\b(?:Maar |En |Dan |Als |Stel |Gegeven |\* |Voorbeelden|Abstract Scenario|Scenario|Achtergrond|Functionaliteit)\b/g,
      'sh_keyword',
      -1
    ],
    [
      /^(?:[\s]*'(?:[^\\']|\\.)*'[\s]*|[\s]*\"(?:[^\\\"]|\\.)*\"[\s]*)$/g,
      'sh_comment',
      -1
    ],
    [
      /(?:[\s]*'{3})/g,
      'sh_string',
      2
    ],
    [
      /(?:[\s]*\"{3})/g,
      'sh_string',
      3
    ],
    [
      /"/g,
      'sh_string',
      4
    ],
    [
      /'/g,
      'sh_string',
      5
    ],
    [
      /~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\||\{|\}/g,
      'sh_symbol',
      -1
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ]
  ],
  [
    [
      /(?:'{3})/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /(?:\"{3})/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\\(?:\\|")/g,
      null,
      -1
    ],
    [
      /"/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\\(?:\\|')/g,
      null,
      -1
    ],
    [
      /'/g,
      'sh_string',
      -2
    ]
  ]
];
