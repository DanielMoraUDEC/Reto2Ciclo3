const endPoint= "https://g9eabdb8d8ecfad-db202109241555.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/games/games/";

function peticionGet(){
    $.ajax({
        method:"GET",
        url: endPoint,
        success:function(data){
            //console.log(data)
            //console.log(data.items)
            mostrarGames(data.items)
        },
        error:function(error){
            console.log("Error Get")
        }
    });
}


function peticionPost(){

    const juego={
        id:2,
        developer:"Microsoft",
        minage:15,
        category_id:1,
        name:"Rayman"
    }

    let datasend=JSON.stringify(juego)

    $.ajax({

        method:"POST",
        url:endPoint,
        data:datasend,
        dataType:'json',
        contentType:"application/json",
        complete:function(response){
            console.log(response.status)
        },
        error:function(error){
            
        }

    });
}

function peticionPut(){
    const juego={
        id:1,
        developer:"Linux",
        minage:13,
        category_id:7,
        name:"Rayman"
    }

    let datasend=JSON.stringify(juego)

    $.ajax({

        method:"PUT",
        url:endPoint,
        data:datasend,
        dataType:'json',
        contentType:"application/json",
        complete:function(response){
            console.log("Actualizo el registro")
        },
        error:function(error){
         
        }

    });

}
function peticionDelete(){
    const juego={
        id:1
    }

    let datasend=JSON.stringify(juego)

    $.ajax({

        method:"DELETE",
        url:endPoint,
        data:datasend,
        dataType:'json',
        contentType:"application/json",
        complete:function(response){
            console.log("Elimino el registro")
        },
        error:function(error){
            console.log("Error Delete")
        }

    });
}


function mostrarGames(games){
    games.forEach(game =>{
        console.log(game.id)
        console.log(game.developer)
        console.log(game.minage)
        console.log(game.category_id)
        console.log(game.name)
    });
}