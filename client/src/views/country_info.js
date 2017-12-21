const CountryInfo = function () {
  this.ul = document.querySelector('#country-info');
}

CountryInfo.prototype.render = function (country) {
  const app = function(){

    const selectDropDown = document.querySelector('#dropDown');
    requestCountryAPI.get(getCountiresRequestComplete);
  }

  const addToList = function(country){

    const ul = document.querySelector('ul');
    const liName = document.createElement('li');
    liName.innerText = country.name;
    const liCapital = document.createElement('li');
    liCapital.innerText = country.capital;
    const liFlag = document.createElement('img');
    liFlag.src = country.flag;
    liFlag.style.width = "50px";
    ul.appendChild(liName);
    ul.appendChild(liCapital);
    ul.appendChild(liFlag);
  }  // TODO: Render country info
}

CountryInfo.prototype.createListItem = function (label, content) {
  const li = document.createElement('li');
  li.innerText = `${ label }: ${ content }`;
  return li;
}

module.exports = CountryInfo;
