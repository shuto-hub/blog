var heroname = 0
var herohp = 0
var attack = 0
var enemyhp = 0
var enemyattack = 0
var enemyname = 0
var sums = [1,2];

function calldie(){
  if (enemyhp < 0) {
    $("#plusresult").text(`${heroname} の かち です！ ${enemyname} の ID を さくじょした！！`);
    $("#eresult").remove();
  } else if (herohp < 0) {
    $("#plusresult").text(`まけてしまう とは なさけない！ ${heroname} の ID は きえてしまった！`);
  } else {
    console.log('続行中');
  }
}

$(function(){
  $(window).load(function(){
    let url = location.pathname;
    console.log(url);
    $.ajax({
      url: url, 
      type: 'GET',
      dataType: 'json',
      async: true,
    })
    .done(function(data){
      console.log(data)
      herohp = data.myhp
      attack = data.myattack
      enemyhp = data.hp
      enemyattack = data.attack
      heroname = data.myname
      enemyname = data.name
      $("#point").text(`${heroname}のHP:${herohp}`);
      $("#epoint").text(`${enemyname}のHP:${enemyhp}`);
    })
  });

/********* たたかう *************/
  $(function(){
    $('.battlestart').click(function(){
      setTimeout(function(){
        attack1 = attack * sums[ Math.floor( Math.random() * sums.length ) ]
        $("#result").text(`${heroname}のこうげき、${enemyname}に${attack1}のダメージ`);
        enemyhp = enemyhp - attack1;
        calldie();
        $("#epoint").text(`${enemyname}のHP:${enemyhp}`);
      },500);
        setTimeout(function(){
        attack2 = enemyattack * sums[ Math.floor( Math.random() * sums.length ) ]
        $("#eresult").text(`${enemyname}のこうげき、あなたに${attack2}のダメージ`);
        herohp = herohp - attack2;
        calldie();
        $("#point").text(`${heroname}のHP:${herohp}`);
      },2000);
      $("#result").empty();
      $("#eresult").empty();
    })
    });
})
