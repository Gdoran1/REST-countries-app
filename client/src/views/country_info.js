const CountryInfo = function () {
  this.ul = document.querySelector('#country-info');
}

CountryInfo.prototype.render = function (country) {

  const ul = document.querySelector('#CountryInfo');
  const liName = createElement('li');
  liName.innerText = country.name;
  ul.appendChild(liName);

}

CountryInfo.prototype.createListItem = function (label, content) {
  const li = document.createElement('li');
  li.innerText = `${ label }: ${ content }`;
  return li;
}

module.exports = CountryInfo;
