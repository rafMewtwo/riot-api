export async function getAllChampions() {
  const API = await fetch('http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json');
  const response = await API.json();
  return response
}
