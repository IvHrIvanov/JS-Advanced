function solve() {

  let input = document.getElementById('text');
  let currentCase = document.getElementById('naming-convention');

  let text = input.value;
  let namingConvention = currentCase.value;


  let result = applyNaming(text, namingConvention);
  let spanElement = document.getElementById('result');
  spanElement.textContent = result;

  function applyNaming(text, convention) {
    const converstationSwitch = {
      'Pascal Case': () => text
        .toLowerCase()
        .split(' ')
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(''),
      'Camel Case': () => text
        .toLowerCase()
        .split(' ')
        .map((x, i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
        .join(''),
         default: () => 'Error!'

    }
    return (converstationSwitch[convention] || converstationSwitch.default)();
  }
}