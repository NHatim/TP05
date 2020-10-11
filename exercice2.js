const btnExo2 = document.querySelector('.exo2');

const demandeTemperature = () => {
  let tabData = [];
  let promptQuantity = parseInt(prompt('Veuillez rentrez le nombre de température(s) prélevée(s), minimum 1 et maximum 10.000', ''));
  const qte = promptQuantity;
  if (parseInt(promptQuantity) >= 1 && parseInt(promptQuantity) <= 10000) {
    while (promptQuantity > 0) {
      let promptData = parseInt(prompt('Veuillez rentrez la ou les température(s)'))
      if (parseInt(promptData) >= -273 && parseInt(promptData) <= 5526) {
        tabData.push(parseInt(promptData));
      } else {
        alert('Température incorrect, température remplacé par 0');
        tabData.push(0);
      }
      promptQuantity--;
    }
  } else {
    alert('Quantité de température non respectées !');
  }
  alert(`Voici le nombre de température(s) traitées ${qte} et voici les températures : ${tabData}`);

  alert(analyzeTemperature(promptQuantity, tabData));

}

const analyzeTemperature = (quantity, data) => {
 if(quantity === 0){
   return 0
 }

 if(parseInt(quantity) >= 1 && parseInt(quantity) <= 10000 && parseInt(data) >= -273 && parseInt(data) <= 5526){
  let tableau = data;
  let tabPos = [];
  let tabNeg = [];

  for (let i of tableau) {
    if (parseInt(i) >= 0) {
      tabPos.push(i)
    } else {
      tabNeg.push(i);
    }

  }

  let nbNeg = Math.abs(Math.max(...tabNeg));
  let nbPos = Math.min(...tabPos);

  return nbNeg < nbPos ? nbNeg : nbPos;
 }else{
   return "Pas la bonne valeur";
 }
}

btnExo2.addEventListener('click', demandeTemperature);
