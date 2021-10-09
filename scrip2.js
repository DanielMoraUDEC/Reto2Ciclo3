const endPoint= "https://g9eabdb8d8ecfad-db202109241555.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/games/games";

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
        id:$("#miId").val(),
        developer:$("#developer").val(),
        minage:$("#minage").val(),
        category_id:$("#cat_id").val(),
        name:$("#name").val()
    }

    let datasend=JSON.stringify(juego)

    console.log(datasend)
    $.ajax({

        method:"POST",
        url:endPoint,
        data:datasend,
        dataType:'json',
        contentType:"application/json",
        complete:function(response){
            console.log(response.status)
            alert("Registro exitoso")
            getGames();
        },
        error:function(error){
            
        }

    });
}

function peticionPut(){
    const juego={
        id:$("#miId").val(),
        developer:$("#developer").val(),
        minage:$("#minage").val(),
        category_id:$("#cat_id").val(),
        name:$("#name").val()
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
            alert("Actualización exitosa")
            getGames();
        },
        error:function(error){
         
        }

    });

}
function peticionDelete(idElemento){
    const juego={
        id:idElemento
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
            alert("Se elimino el registro")
            getGames();
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

function getGames(){
    $.ajax({
        method:"GET",
        url: endPoint,

        success:function(data){
            $("#items").empty();
            var misItems = data.items;

            for(i = 0; i < misItems.length; i++)
            {
                $("#items").append("<tr>");
                $("#items").append("<td>" + misItems[i].id + "</td>");
                $("#items").append("<td>" + misItems[i].developer + "</td>");
                $("#items").append("<td>" + misItems[i].minage + "</td>");
                $("#items").append("<td>" + misItems[i].category_id + "</td>");
                $("#items").append("<td>" + misItems[i].name + "</td>");
                $("#items").append('<button class="btn btn-danger" onclick="peticionDelete('+ misItems[i].id+')">Borrar</button>');
                $("#items").append('<button class="btn btn-success" onclick="getGamesById('+ misItems[i].id+')">Editar</button>');
                $("#items").append("</tr>");
            }
        }
    });
}


function getGamesById(idItem){

    $.ajax({
        method:"GET",
        url: "https://g9eabdb8d8ecfad-db202109241555.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/games/games/"+idItem,
        success:function(data){
            
            var item = data.items[0];
            $("#miId").val(item.id);
            $("#developer").val(item.developer);
            $("#minage").val(item.minage);
            $("#cat_id").val(item.category_id);
            $("#name").val(item.name)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });
}

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')



