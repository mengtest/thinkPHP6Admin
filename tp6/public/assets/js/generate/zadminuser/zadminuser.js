
$(document).ready(function(){

    $(document).ready(function(){

        $.ajax({
            type : "POST",
            contentType : "application/x-www-form-urlencoded",
            url : "/admin/Zadminuser/seeAll",
            success : function(res) {
                var i = 1;
                for(let key of res.result){

                    $("#dataRoom").append(
                        "<tr>" +
                            "<td>"+i+"</td>>" +
"<td>"+key['id']+"</td>" +"<td>"+key['username']+"</td>" +"<td>"+key['password']+"</td>" +"<td>"+key['password_salt']+"</td>" +"<td>"+key['last_login_ip']+"</td>" +"<td>"+key['last_login_time']+"</td>" +"<td>"+key['create_time']+"</td>" +"<td>"+key['update_time']+"</td>" +
                            "<td class='td-manage'>" +
                                "<span class='label label - success radius'><a onClick='edit("+key['id']+")'>编辑</a></span>" +
                                "<span class='label radius'><a id='delete"+key['id']+"' href='#'>删除</a></span>" +
                            "</td>" +
                        "</tr>"
                    );
                    i++;
                }

            }
        });

    });
});

function edit(id) {

    layer_show('代码生成','/admin/Zadminuser/viewAddEdit?id='+id,800,500);

}


