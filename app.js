const treatButton = document.getElementById('treat-button');
const upgradeButton = document.getElementById("upgrade-button");
const treatSpan = document.getElementById("treat-span");
const tpsSpan = document.getElementById("tps-span"); // reminder - tps is treats per second

const stats = {
  treatCount: 0,
  tps: 0,
};

const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
  stats.treatCount = storageStats.treatCount;
  stats.tps = storageStats.tps;
  updatePage();
}

function giveTreat() {
  stats.treatCount++;
  updatePage();
  updateStorage();
}

function buyUpgrade() {
  stats.tps++; 
  stats.treatCount -=20;
  updatePage();
  updateStorage();
}

// function treatCount() {
//   stats.treatCount = storageStats.treatCount;
//   updatePage();
//   updateStorage();
// }

  function updatePage() {
    treatSpan.textContent = stats.treatCount;
    tpsSpan.textContent = stats.tps;
  }
  
  function updateStorage() {
    localStorage.setItem("stats", JSON.stringify(stats));
  }


  treatButton.addEventListener("click", giveTreat);
  upgradeButton.addEventListener("click", buyUpgrade);


setInterval (function(){
  stats.treatCount+=stats.tps;
  updatePage();
  updateStorage();
}, 1000)



let treats = 0;
setInterval(function () {
  treats = treats + 1;
  console.log("treat", treats);
}, 1000);









