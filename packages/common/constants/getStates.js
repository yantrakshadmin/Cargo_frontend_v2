import Countries from './countryAndState.json';

export const getStates = (country) =>{
  if(country) {
    return Countries.countries.filter(i => (i.country === country))[0].states
  }
  return []
}
