const endPoint= "https://g9eabdb8d8ecfad-db202109241555.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client";

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

    const cliente={
        id:$("#miId").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    }

    let datasend=JSON.stringify(cliente)

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
            getClientes();
        },
        error:function(error){
            
        }

    });
}

function peticionPut(){
    const cliente={
        id:$("#miId").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    }

    let datasend=JSON.stringify(cliente)

    $.ajax({

        method:"PUT",
        url:endPoint,
        data:datasend,
        dataType:'json',
        contentType:"application/json",
        complete:function(response){
            console.log("Actualizo el registro")
            alert("Se actualizo el registro")
            getClientes();
        },
        error:function(error){
         
        }

    });

}
function peticionDelete(idElemento){
    const cliente={
        id:idElemento
    }

    let datasend=JSON.stringify(cliente)

    $.ajax({

        method:"DELETE",
        url:endPoint,
        data:datasend,
        dataType:'json',
        contentType:"application/json",
        complete:function(response){
            console.log("Elimino el registro")
            alert("Se elimino el registro")
            getClientes();
        },
        error:function(error){
            console.log("Error Delete")
        }

    });
}


function mostrarClients(games){
    games.forEach(game =>{
        console.log(game.id)
        console.log(game.developer)
        console.log(game.minage)
        console.log(game.category_id)
        console.log(game.name)
    });
}

function getClientes(){
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
                $("#items").append("<td>" + misItems[i].name + "</td>");
                $("#items").append("<td>" + misItems[i].email + "</td>");
                $("#items").append("<td>" + misItems[i].age + "</td>");
                $("#items").append('<button class="btn btn-danger" onclick="peticionDelete('+ misItems[i].id+')">Borrar</button>');
                $("#items").append('<button class="btn btn-success" onclick="getclientById('+ misItems[i].id+')">Editar</button>');
                $("#items").append("</tr>");
            }
        }
    });
}


function getclientById(idItem){

    $.ajax({
        method:"GET",
        url: "https://g9eabdb8d8ecfad-db202109241555.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/"+idItem,
        success:function(data){
            
            var item = data.items[0];
            $("#miId").val(item.id);
            $("#name").val(item.name);
            $("#email").val(item.email);
            $("#age").val(item.age);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });
}

