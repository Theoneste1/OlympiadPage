let SHEET_ID = '1_goCAnx9eFbY_hBHQpUggbWYQKWuKZrUPWP8s8zgpIM'
let SHEET_TITLE = 'teachers';
let SHEET_RANGE = 'A1:G27000'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/'+ SHEET_ID +'/gviz/tq?sheet='+SHEET_TITLE +'&range='+SHEET_RANGE);


let length =26700;
let table
let data
let countList = new Array()

let firstcount=0;
let lastpoint=length;
let pageSize =10;
let countPerEachPage =10;
let presentPage =1;
let countOfPages;

let currentStartingPoint =0;
let currentEndingPoing =pageSize;

let previousStartingPoint;
let previousEndingPoint;

let nextStatingPoint;
let nextEndingPoint;



function getCode(){
    return document.getElementById('code').value;
}

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    data = JSON.parse(rep.substr(47).slice(0,-2)); 
    console.log(data)
    
    length = data.table.rows.length;
    console.log("This is length ", length)

        table = document.createElement("table");
        table.border = "1";

        //Add the header row.
        var row = table.insertRow(-1);

        //Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "SNO";
        row.appendChild(headerCell);

        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "STUDENT NAME";
        row.appendChild(headerCell);

        headerCell = document.createElement("TH");
        headerCell.innerHTML = "GENDER";
        row.appendChild(headerCell);

        headerCell = document.createElement("TH");
        headerCell.innerHTML = "LEVEL";
        row.appendChild(headerCell);

        headerCell = document.createElement("TH");
        headerCell.innerHTML = "GRADE";
        row.appendChild(headerCell);

        headerCell = document.createElement("TH");
        headerCell.innerHTML = "STATUS";
        row.appendChild(headerCell);
   
   
    //function for loading pagination functionality
    function loadMyPagination() {
    prepareList();
    loadMyPaginationList();
    }
    window.onload = loadMyPagination;

}
 
)



//function for creating how many how many number per each page
function getCountOfPages() {
    countOfPages=Math.ceil(length / countPerEachPage);
    return countOfPages;
    }


//function for adding how many numbers in total
// function prepareList() {
    
//     countList.push(count);
    
// }
    //function for moving to next page
    const getNextPage=()=> {
    // presentPage += 1;
    if( end<=length){
        start = countPerEachPage + start;
        end = end +countPerEachPage
    }
    
    console.log('The pages start and end')
   
    loadMyPaginationList();
    console.log(start,end, presentPage)
    }
    //function for moving previous page
    function getPreviousPage() {
    // presentPage -= 1;
    if(start>=countPerEachPage)
    {
        start= start -countPerEachPage;
        end = end -countPerEachPage;
    }
     console.log('The pages start and end')
    
    loadMyPaginationList();
    console.log(start,end,presentPage)
    }
    //function for moving to first page
    function getFirstPage() {
        // presentPage = 0;
        start =0;
        end = countPerEachPage;
        loadMyPaginationList();
        document.getElementById("first").disabled;
    }
    //function for moving last page
    function getLastPage() {
    start = length - countPerEachPage;
    end = countPerEachPage;
    // presentPage = countOfPages;
    loadMyPaginationList();
    }

     //function for creating how to move between the pages
     document.getElementById("dvCustomersGrid").innerHTML = ""; 
     function loadMyPaginationList() {  
        document.getElementById("dvCustomersGrid").innerHTML = "";     
        createPageList(currentStartingPoint, currentEndingPoing);
        addPageList = countList.slice(currentStartingPoint, currentEndingPoing);
       
        validatePageCount();
        }

    
    //function for adding numbers to each page
    function createPageList(start=0, end) {
        console.log(getCode())
        
        
        // document.getElementById("dvCustomersGrid").innerHTML = "";
        initialStudent=0;
        for (i = 0; i<1000; i++) {
                //Add the data row.
                var row = table.insertRow(-1);
                // var row = document.createElement("tr");
              
                let compare =data.table.rows[i].c[6].v
                

                code =document.getElementById('code').innerHTML
                // console.log("The data from excel : ",data.table.rows[i].c[6].v)
                if(compare == getCode())
                {
                    initialStudent +=1;
                
                // Add the data cells.
                // var cell = row.insertCell(-1);
                datas=initialStudent.toString()
                // cell.innerHTML = datas;
    
                // cell = row.insertCell(-1);
                // cell.innerHTML = data.table.rows[i].c[1].v;
    
                // cell = row.insertCell(-1);
                // cell.innerHTML = data.table.rows[i].c[2].v;

                // cell = row.insertCell(-1);
                // cell.innerHTML = data.table.rows[i].c[3].v;

                // cell = row.insertCell(-1);
                // cell.innerHTML = data.table.rows[i].c[4].v;

                // cell = row.insertCell(-1);
                // cell.innerHTML = data.table.rows[i].c[5].v;

        
        var headerCell = document.createElement("td");
        headerCell.innerHTML = datas
        row.appendChild(headerCell);

        var headerCell = document.createElement("td");
        headerCell.innerHTML = data.table.rows[i].c[1].v;
        row.appendChild(headerCell);

        headerCell = document.createElement("td");
        headerCell.innerHTML = data.table.rows[i].c[2].v;
        row.appendChild(headerCell);

        headerCell = document.createElement("td");
        headerCell.innerHTML = data.table.rows[i].c[3].v;
        row.appendChild(headerCell);

        headerCell = document.createElement("td");
        headerCell.innerHTML = data.table.rows[i].c[4].v;
        row.appendChild(headerCell);

        headerCell = document.createElement("td");
        headerCell.innerHTML = data.table.rows[i].c[5].v;
        row.appendChild(headerCell);

        

                }

            }
            var dvTable = document.getElementById("dvCustomersGrid");
            dvTable.innerHTML = "";
            dvTable.appendChild(table);
        // document.getElementById("countList").innerHTML = document.getElementById("countList").innerHTML+ addPageList[p] + "<br/>";
    

        }

        function cleaning(){
            loadMyPaginationList();
            document.getElementById("dvCustomersGrid").innerHTML=" "
         }
        //function for validating real time condition like if move to last page, last page disabled etc
        function validatePageCount() {
        // document.getElementById("next").disabled = presentPage == countOfPages ? true : false;
        // document.getElementById("previous").disabled = presentPage == 1 ? true : false;
        // document.getElementById("first").disabled = presentPage == 1 ? true : false;
        // document.getElementById("last").disabled = presentPage == countOfPages ? true : false;
        }

