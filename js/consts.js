const getJsonInfo = async (fileJson) => {
  const json = await fetch(`./pages/${fileJson}/${fileJson}.json`)
    .then(response => response.json())
    .catch(err => {
    console.log('Não foi possível carregar Json, error:', err)
    return null
  })
  return json
}  
const jsonInterface = getJsonInfo('interface').then(response => response)
const jsonFunctions = getJsonInfo('functions').then(response => response)  

const formatOption = (file, label) => ({ file, label })

const options = [
  {
    ...formatOption('home', 'Home'),
    call: (_json) => null,
    json: {},
    topic: []
  },
  {
    ...formatOption('tutorial', 'Tutorial'),
    call: (_json) => null,
    json: {},
    topic: [
      formatOption('tutorial', 'PuzzleTable'),
      formatOption('tutorial', 'Modules'),
      formatOption('tutorial', 'GachaSystem'),
      formatOption('tutorial', 'Methods'),
      formatOption('tutorial', 'fHelps')
    ]
  },
  {
    ...formatOption('interface', 'Interface'),
    call: (json) => renderPageInterface(json),
    json: jsonInterface,
    topic: [
      formatOption('puzzleTable', 'PuzzleTable'),
      formatOption('modules', 'Modules'),
      formatOption('methods', 'Methods'),
      formatOption('fhelps', 'fHelps')
    ]
  },
  {
    ...formatOption('functions', 'Functions'),
    call: (json) => renderPageFunctions(json),
    json: jsonFunctions,
    topic: [
      formatOption('puzzleTable', 'PuzzleTable'),
      formatOption('modules', 'Modules'),
      formatOption('gachaSystem', 'GachaSystem'),
      formatOption('methods', 'Methods'),
      formatOption('fhelps', 'fHelps')
    ]
  },
  {
    ...formatOption('reform', 'Reform'),
    call: (_json) => null,
    json: {},
    topic: []
  }
]