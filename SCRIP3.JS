const endPoint= "https://g9eabdb8d8ecfad-db202109241555.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message";



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

    const message={
        id:$("#miId").val(),
        messagetext:$("#messagetext").val()
    }

    let datasend=JSON.stringify(message)

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
            getMessages();
            
        },
        error:function(error){
            
        }

    });
}

function peticionPut(){
    const message={
        id:$("#miId").val(),
        messagetext:$("#messagetext").val()

    }

    let datasend=JSON.stringify(message)

    $.ajax({

        method:"PUT",
        url:endPoint,
        data:datasend,
        dataType:'json',
        contentType:"application/json",
        complete:function(response){
            console.log("Actualizo el registro")
            alert("Se actualizo el registro")
            getMessages();
        },
        error:function(error){
         
        }

    });

}
function peticionDelete(idElemento){
    const message={
        id:idElemento
    }

    let datasend=JSON.stringify(message)

    $.ajax({

        method:"DELETE",
        url:endPoint,
        data:datasend,
        dataType:'json',
        contentType:"application/json",
        complete:function(response){
            console.log("Elimino el registro")
            alert("Se elimino el registro")
            getMessages();
        },
        error:function(error){
            console.log("Error Delete")
        }

    });
}


/*function mostrarClients(games){
    games.forEach(game =>{
        console.log(game.id)
        console.log(game.developer)
        console.log(game.minage)
        console.log(game.category_id)
        console.log(game.name)
    });
}*/

function getMessages(){

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
                $("#items").append("<td>" + misItems[i].messagetext + "</td>");
                $("#items").append('<button class="btn btn-danger" onclick="peticionDelete('+ misItems[i].id+')">Borrar</button> ');
                $("#items").append('<button class="btn btn-success" onclick="getMessageById('+ misItems[i].id+')">Editar</button>');
                $("#items").append("</tr>");
            }
        }
    });
}


function getMessageById(idItem){

    $.ajax({
        method:"GET",
        url: "https://g9eabdb8d8ecfad-db202109241555.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/"+idItem,
        success:function(data){
            
            var item = data.items[0];
            $("#miId").val(item.id);
            $("#messagetext").val(item.messagetext);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });
}


