$(document).ready(function () {
    let personrecord = [{
        "UserId": 1,
        "UserName": "shiwali",
        "PostTitle": "reprehenderit dolor",
        "PostMessage": " tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro"
    }, {
        "UserId": 2,
        "UserName": "raman",
        "PostTitle": "sint nihil reprehenderit",
        "PostMessage": " tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro"
    }, {
        "UserId": 3,
        "UserName": "renu",
        "PostTitle": "beatae ea dolores neque",
        "PostMessage": " tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro"
    }, {
        "UserId": 4,
        "UserName": "aamar",
        "PostTitle": "dolor beatae ea dolores",
        "PostMessage": " tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro"
    }, {
        "UserId": 5,
        "UserName": "shiwam_mehta",
        "PostTitle": "dolor beatae ea",
        "PostMessage": " tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro"
    }, {
        "UserId": 6,
        "UserName": "rahul",
        "PostTitle": "reprehenderit dolor beatae",
        "PostMessage": " tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro"
    }, {
        "UserId": 6,
        "UserName": "rvina",
        "PostTitle": "gdjj djd kkkd",
        "PostMessage": " tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro"
    }, {
        "UserId": 7,
        "UserName": "baljet kaur",
        "PostTitle": "dolor beatae ea",
        "PostMessage": " tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro"
    }, {
        "UserId": 8,
        "UserName": "menu",
        "PostTitle": "sint nihil reprehenderit",
        "PostMessage": " tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro"
    }, {
        "UserId": 9,
        "UserName": "ritu",
        "PostTitle": "gdjj djd kkkd",
        "PostMessage": " tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro"
    }, {
        "UserId": 10,
        "UserName": "shiwali",
        "PostTitle": "gdjj djd kkkd",
        "PostMessage": " tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro"
    }
    ]
    $(personrecord).each(function (i, personrecord) {
        let recordhtml =
            `<div class="data-remove post-content">
            <button class="accordion pl-4 pr-4"> 
        <div class="row row-data  ">
        <div class="col-md-3 post-content">
        ${personrecord.UserId}
        </div>
        <div class="col-md-3 post-content">
       <img src="https://picsum.photos/id/846/40/40" class="rounded-circle mr-2 img-fluid"> ${personrecord.UserName}
        </div>
        <div class="col-md-3 post-content">
        ${personrecord.PostTitle}
        </div>
       
     <div class="col-md-3 pl-4  post-content">
    Status<i class="fas fa-chevron-down pl-2"></i>
        </div>

       
       </div>
        </button> 
        <div class="panel">
        <div class="row row-data ">
            
           
            <div class="col-md-9">
             ${personrecord.PostMessage}
            </div> 
           <div class="col-md-3">  <button type="button" class="btn btn-outline-info dlete pt-1 pb-1"  ><i class="fa fa-remove pr-2"></i>Remove</button></div>
        </div></div></div>
    `;

        console.log(personrecord);
        $(".table-data").append(recordhtml);
    });
    console.log(personrecord);
    /*--acordion--*/
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    // var accordion = document.getElementsByClassName("accordion");
    // var i;
    // for (var i = 0; i < accordion.lenght; i++) {
    //     accordion[i].onclick = function () {
    //         var content = this.nextElementSibling;
    //         if (content.style.maxHeight) {
    //             content.style.maxHeight = null;
    //         }
    //         else {
    //             content.style.maxHeight = content.scrollHeight + "px";
    //         }
    //     }
    // }
    /*--user-data--*/
    $("#submit-data").click(function (e) {
        e.preventDefault();
        let date = $('input[name="date"]').val();
        let title = $('input[name="title"]').val();
        let body = $('input[name="body"]').val();

        gnfn = (function () {
            var random = Math.floor(Math.random() * 100 + 1);
            return random;
        })();


        const Datahtml = `<div class="data-remove">
        <button class="accordion pl-4 pr-4"> 
        <div class="row row-data ">
        <div class="col-md-3">
        ${gnfn}
        </div>
        <div class="col-md-3">
        <img src="https://picsum.photos/id/846/40/40" class="rounded-circle img-fluid"> ${date}
        </div>
        <div class="col-md-3">
        ${title}
        </div>   
         
        <div class="col-md-3"> Status </div>
       </div>
        </button>
        <div class="panel">
        <div class="row row-data">       
            <div class="col-md-8">
             ${body}
            </div> 
           <div class="col-md-4"> 
           <button type="button" class="btn btn-outline-info dlete">Remove</button>
           </div> 
        </div></div></div>`;
        console.log(Datahtml);
        if (date !== "" || title !== "" || body !== "") {
            $('.table-data').append(Datahtml);
        }
        $('input[name="date"]').val("");
        $('input[name="title"]').val("");
        $('input[name="body"]').val("");
    });
    /*--remove--*/
    $(document).on('click', '.dlete', function () {
        $(this).closest('.data-remove').remove();
    });

    /*--add-data--*/
    $("form").hide(function () {
        $("#add-data").click(function () {
            $("form").toggle();
        });
    });
    /*--search--*/
    $("#search-data").on("keyup", function () {
        console.log("keyup");
        let value = $(this).val().toLowerCase();
        $(".table-data .accordion").filter(function () {
            const searchStatus = $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            if (!searchStatus) {
                $('#error').find("#error").show(); $(".hide").remove().css("display", "block");
            } else {
                $('#error').find("#error").hide();

            }
        });
        // $('#search-data').on('keyup', function () {
        //     var isResultFound = false;
        //     var searchTerm = $(this).val().toLowerCase();
        //     $('.post-content').each(function () {
        //         if ($(this).filter(searchTerm).length > 0) {
        //             isResultFound = true;
        //             $(this).show();
        //         } else {
        //             $(this).hide();
        //         }

        //         if (!isResultFound) {
        //             $('#error').show(); $(".hide").remove();
        //         } else {
        //             $('#error').hide();

        //         }
        //     });
        // });
        /*--pagination--*/

    });
});


